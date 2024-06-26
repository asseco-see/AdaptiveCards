// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import * as Clipboard from "clipboard";
import * as Adaptive from "@asseco/adaptivecards";
import * as monaco from "monaco-editor";
import * as Constants from "./constants";
import * as Designer from "./card-designer-surface";
import * as DesignerPeers from "./designer-peers";
import { OpenSampleDialog } from "./open-sample-dialog";
import { HostContainer } from "./containers/host-container";
import { adaptiveCardSchema } from "./adaptive-card-schema";
import { OpenImageDialog } from "./open-image-dialog";
import { FullScreenHandler } from "./fullscreen-handler";
import { Toolbar, ToolbarButton, ToolbarChoicePicker, ToolbarElementAlignment } from "./toolbar";
import { IPoint, Utils, defaultHostConfig } from "./miscellaneous";
import { BasePaletteItem, ElementPaletteItem, CustomPaletteItem } from "./tool-palette";
import { DefaultContainer } from "./containers/default/default-container";
import { SidePanel, SidePanelAlignment } from "./side-panel";
import { Toolbox } from "./tool-box";
import { FieldDefinition } from "./data";
import { DataTreeItem } from "./data-treeitem";
import { Strings } from "./strings";
import * as Shared from "./shared";
import { TreeView } from "./tree-view";
import { SampleCatalogue } from "./catalogue";
import { HelpDialog } from "./help-dialog";
import * as yaml from "js-yaml";
import { ExtensionRegistry } from "./extension-loader";
import { CustomCardElementRegistry } from "@asseco/adaptivecards";
import { itemForRender } from "./constants";

export class CardDesigner extends Designer.DesignContext {
	private static internalProcessMarkdown(text: string, result: Adaptive.IMarkdownProcessingResult) {
		if (CardDesigner.onProcessMarkdown) {
			CardDesigner.onProcessMarkdown(text, result);
		} else {
			// Check for markdownit
			if (window["markdownit"]) {
				result.outputHtml = window["markdownit"]().render(text);
				result.didProcess = true;
			}
		}
	}

	static onProcessMarkdown: (text: string, result: Adaptive.IMarkdownProcessingResult) => void = null;

	static catalogueBaseUrl: string;
	private static MAX_UNDO_STACK_SIZE = 50;

	private _isAttached: boolean = false;
	private _cardEditor: monaco.editor.IStandaloneCodeEditor;
	private _sampleDataEditor: monaco.editor.IStandaloneCodeEditor;
	private _hostContainers: Array<HostContainer>;
	private _isMonacoEditorLoaded: boolean = false;
	private _designerSurface: Designer.CardDesignerSurface;
	private _designerHostElement: HTMLElement;
	private _draggedPaletteItem: BasePaletteItem;
	private _draggedElement: HTMLElement;
	private _currentMousePosition: IPoint;
	private _hostContainer: HostContainer;
	private _undoStack: Array<object> = [];
	private _undoStackIndex: number = -1;
	private _startDragPayload: object;
	private _toolPaletteToolbox: Toolbox;
	private _propertySheetToolbox: Toolbox;
	private _treeViewToolbox: Toolbox;
	private _jsonEditorsPanel: SidePanel;
	private _cardEditorToolbox: Toolbox;
	private _sampleDataEditorToolbox: Toolbox;
	private _dataToolbox: Toolbox;
	private _assetPath: string;
	private _dataStructure: FieldDefinition;
	private _sampleData: any;
	private _bindingPreviewMode: Designer.BindingPreviewMode = Designer.BindingPreviewMode.NoPreview;
	private _customPeletteItems: CustomPaletteItem[];
	private _sampleCatalogue: SampleCatalogue = new SampleCatalogue();
	private _language: string = "json";
	private _previousLanguage: string = "json";
	private _customToolboxes: Toolbox[] = [];

	private togglePreview() {
		this._designerSurface.isPreviewMode = !this._designerSurface.isPreviewMode;

		if (this._designerSurface.isPreviewMode) {
			this._togglePreviewButton.toolTip = "Return to Design mode";
			this._designerSurface.setCardPayloadAsString(this.getCurrentCardEditorPayload(), this._language);
		}
		else {
			this._togglePreviewButton.toolTip = "Switch to Preview mode";
			this.updateCardFromJson(false);
		}

		this.buildTreeView();
	}

	private buildTreeView() {
		if (this._treeViewToolbox.content) {
			this._treeViewToolbox.content.innerHTML = "";

			if (this.designerSurface.isPreviewMode) {
				this.treeViewToolbox.content.innerHTML =
					'<div style="padding: 8px; display: flex; justify-content: center;">' +
					'<div>The Card Structure isn\'t available in Preview mode.</div>' +
					'</div>';
			}
			else {
				const treeView = new TreeView(this.designerSurface.rootPeer.treeItem);

				if (this.designerSurface.card && this.designerSurface.card._items) {
					if (!this._designerSurface.selectedDialogId) {
						this._dialogChoicePicker.choices.splice(0);
						this._dialogChoicePicker.choices.push(
							{
								name: "None",
								value: null
							});
						this.designerSurface.card._items.forEach(element => {
							if (element.getJsonTypeName() === itemForRender) {
								if (element.id) {
									this._dialogChoicePicker.choices.push(
										{
											name: element.id,
											value: element.id
										});
								}
							}
							if (this._dialogChoicePicker.choices.length > 1) {
								this.toolbar.addOrReplaceElement(this._dialogChoicePicker);
							} else {
								this.toolbar.removeElement(this._dialogChoicePicker);
							}
							this.toolbar.attachTo(document.getElementById("toolbarHost"));

						});
					}
				}
				this._treeViewToolbox.content.appendChild(treeView.render());
			}
		}
	}

	private buildDataExplorer() {
		if (this._dataToolbox && this._dataToolbox.content) {
			this._dataToolbox.content.innerHTML = "";

			if (this.dataStructure) {
				let treeItem = new DataTreeItem(this.dataStructure);
				let treeView = new TreeView(treeItem);

				this._dataToolbox.content.appendChild(treeView.render());
			}
		}
	}

	private buildPropertySheet(peer: DesignerPeers.DesignerPeer) {
		if (this._propertySheetToolbox.content) {
			this._propertySheetToolbox.content.innerHTML = "";

			let card: Adaptive.AdaptiveCard;

			if (peer) {
				card = peer.buildPropertySheetCard(this);
			}
			else {
				card = new Adaptive.AdaptiveCard();
				card.parse(
					{
						type: "AdaptiveCard",
						version: "1.0",
						body: [
							{
								type: "TextBlock",
								wrap: true,
								text: "**Nothing is selected**"
							},
							{
								type: "TextBlock",
								wrap: true,
								text: "Select an element in the card to modify its properties."
							}
						]
					},
					new Adaptive.SerializationContext(this.targetVersion)
				);
				card.padding = new Adaptive.PaddingDefinition(
					Adaptive.Spacing.Small,
					Adaptive.Spacing.Small,
					Adaptive.Spacing.Small,
					Adaptive.Spacing.Small
				)
			}

			card.hostConfig = defaultHostConfig;

			this._propertySheetToolbox.content.appendChild(card.render());
		}
	}

	private addPaletteItem(paletteItem: BasePaletteItem, hostElement: HTMLElement) {
		paletteItem.render();
		paletteItem.onStartDrag = (sender: BasePaletteItem) => {
			this._draggedPaletteItem = sender;

			this._draggedElement = sender.renderDragVisual();
			this._draggedElement.style.position = "absolute";
			this._draggedElement.style.left = this._currentMousePosition.x + "px";
			this._draggedElement.style.top = this._currentMousePosition.y + "px";


			document.body.appendChild(this._draggedElement);
		}

		hostElement.appendChild(paletteItem.renderedElement);
	}

	private buildPalette() {
		if (!this._isAttached) {
			return;
		}

		this._toolPaletteToolbox.content.innerHTML = "";

		let categorizedTypes: object = {};
		for (let i = 0; i < this.hostContainer.elementsRegistry.getItemCount(); i++) {
			let registration = this.hostContainer.elementsRegistry.getItemAt(i);
			if (registration.schemaVersion.compareTo(this.targetVersion) <= 0) {
				let peerRegistration = Designer.CardDesignerSurface.cardElementPeerRegistry.findTypeRegistration(registration.objectType);
				if (peerRegistration) {
					if (peerRegistration.category) {
						if (!categorizedTypes.hasOwnProperty(peerRegistration.category)) {
							categorizedTypes[peerRegistration.category] = [];
						}
						let paletteItem = new ElementPaletteItem(
							registration,
							peerRegistration
						)

						paletteItem.onDoubleClick = (sender) => {
							const peer = paletteItem.createPeer(this, this.designerSurface);

							if (this.designerSurface.rootPeer.tryAdd(peer)) {
								peer.isSelected = true;
							};
						}

						categorizedTypes[peerRegistration.category].push(paletteItem);
					}
				}
			}
		}

		if (this.customPaletteItems) {
			for (let item of this.customPaletteItems) {
				if (!categorizedTypes.hasOwnProperty(item.category)) {
					categorizedTypes[item.category] = [];
				}

				categorizedTypes[item.category].push(item);
			}
		}

		for (let category in categorizedTypes) {
			let node = document.createElement('div');
			node.innerText = category;
			node.className = "acd-palette-category";

			this._toolPaletteToolbox.content.appendChild(node);

			for (var i = 0; i < categorizedTypes[category].length; i++) {
				this.addPaletteItem(categorizedTypes[category][i], this._toolPaletteToolbox.content);
			}
		}
	}

	private endDrag() {
		if (this._draggedPaletteItem) {
			this._draggedPaletteItem.endDrag();
			this._draggedElement.parentNode.removeChild(this._draggedElement);

			this._draggedPaletteItem = null;
			this._draggedElement = null;
		}
	}

	private renderErrorPaneElement(message: string, source?: Adaptive.SerializableObject): HTMLElement {
		let errorElement = document.createElement("div");
		errorElement.className = "acd-error-pane-message";

		if (source && source instanceof Adaptive.CardObject) {
			errorElement.classList.add("selectable");
			errorElement.title = "Click to select this element";
			errorElement.onclick = (e) => {
				let peer = this.designerSurface.findPeer(source);

				if (peer) {
					peer.isSelected = true;
					peer.scrollIntoView();
				}
			}
		}

		errorElement.innerText = message;

		return errorElement;
	}

	private recreateDesignerSurface() {
		let styleSheetLinkElement = <HTMLLinkElement>document.getElementById("adaptiveCardStylesheet");

		if (styleSheetLinkElement == null) {
			styleSheetLinkElement = document.createElement("link");
			styleSheetLinkElement.id = "adaptiveCardStylesheet";

			document.getElementsByTagName("head")[0].appendChild(styleSheetLinkElement);
		}

		styleSheetLinkElement.rel = "stylesheet";
		styleSheetLinkElement.type = "text/css";

		if (Utils.isAbsoluteUrl(this.hostContainer.styleSheet)) {
			styleSheetLinkElement.href = this.hostContainer.styleSheet;
		}
		else {
			styleSheetLinkElement.href = Utils.joinPaths(this._assetPath, this.hostContainer.styleSheet);
		}

		let _cardArea = document.getElementById("cardArea");

		if (_cardArea) {
			_cardArea.style.backgroundColor = this.hostContainer.getBackgroundColor();
		}

		this.hostContainer.initialize();

		this._designerHostElement.innerHTML = "";
		this.hostContainer.renderTo(this._designerHostElement);

		let wasInPreviewMode = this._designerSurface ? this._designerSurface.isPreviewMode : false;

		try {
			this._designerSurface = new Designer.CardDesignerSurface(this);
		}
		catch (e) {
			console.error(e);
		}
		this._designerSurface.fixedHeightCard = this.hostContainer.isFixedHeight;
		this._designerSurface.onSelectedPeerChanged = (peer: DesignerPeers.DesignerPeer) => {
			this.buildPropertySheet(peer);
		};
		this._designerSurface.onLayoutUpdated = (isFullRefresh: boolean) => {
			if (isFullRefresh) {
				this.scheduleUpdateJsonFromCard();
				this.buildTreeView();
			}
		};
		this._designerSurface.onCardValidated = (logEntries: Adaptive.IValidationEvent[]) => {
			if (this.onCardValidated) {
				this.onCardValidated(this, logEntries);
			}

			let errorPane = document.getElementById("errorPane");
			errorPane.innerHTML = "";

			if (this.targetVersion.compareTo(this.hostContainer.targetVersion) > 0 && Shared.GlobalSettings.showTargetVersionMismatchWarning) {
				errorPane.appendChild(this.renderErrorPaneElement("[Warning] The selected Target Version (" + this.targetVersion.toString() + ") is greater than the version supported by " + this.hostContainer.name + " (" + this.hostContainer.targetVersion.toString() + ")"));
			}

			if (logEntries.length > 0) {
				let dedupedEntries: Adaptive.IValidationEvent[] = [];

				for (let entry of logEntries) {
					if (dedupedEntries.indexOf(entry) < 0) {
						dedupedEntries.push(entry);
					}
				}

				for (let entry of dedupedEntries) {
					let s: string = "";

					switch (entry.phase) {
						case Adaptive.ValidationPhase.Parse:
							s = "[Parse]";
							break;
						case Adaptive.ValidationPhase.ToJSON:
							s = "[Serialize]";
							break;
						default:
							s = "[Validation]";
							break;
					}

					errorPane.appendChild(this.renderErrorPaneElement(s + " " + entry.message, entry.source));
				}
			}

			if (errorPane.childElementCount > 0) {
				errorPane.classList.remove("acd-hidden");
			}
			else {
				errorPane.classList.add("acd-hidden");
			}
		};
		this._designerSurface.onStartDrag = (sender: Designer.CardDesignerSurface) => {
			if (this.language === "json") {
				this._startDragPayload = JSON.parse(this.getCurrentCardEditorPayload());
			}
			else {
				this._startDragPayload = JSON.parse(JSON.stringify(yaml.load(this.getCurrentCardEditorPayload())));
			}
		};
		this._designerSurface.onEndDrag = (sender: Designer.CardDesignerSurface, wasCancelled: boolean) => {
			if (wasCancelled) {
				this.setCardPayload(this._startDragPayload, false);
			}
			else {
				this.addToUndoStack(this._designerSurface.getCardPayloadAsObject());
			}
		};

		this.buildPalette();
		this.buildPropertySheet(null);

		this.updateCardFromJson(false);
		this.updateSampleData();

		this._designerSurface.isPreviewMode = wasInPreviewMode;

		this.updateFullLayout();
	}

	private activeHostContainerChanged() {
		this.recreateDesignerSurface();

		if (this.onActiveHostContainerChanged) {
			this.onActiveHostContainerChanged(this);
		}
	}

	private targetVersionChanged() {
		let cardPayload = this.designerSurface.getCardPayloadAsObject();

		if (typeof cardPayload === "object") {
			cardPayload["version"] = this.targetVersion.toString();

			this.setCardPayload(cardPayload, false);
		}

		this.recreateDesignerSurface();

		if (this.onTargetVersionChanged) {
			this.onTargetVersionChanged(this);
		}
	}

	private languageChanged() {
		let cardPayload = this.designerSurface.getCardPayloadAsObject();
		// ToDo: try to convert to selected language
	}

	private updateToolboxLayout(toolbox: Toolbox, hostPanelRect: ClientRect | DOMRect) {
		if (toolbox) {
			let jsonEditorHeaderRect = toolbox.getHeaderBoundingRect();

			toolbox.content.style.height = (hostPanelRect.height - jsonEditorHeaderRect.height) + "px";
		}
	}

	private updateJsonEditorsLayout() {
		if (this._isMonacoEditorLoaded) {
			let jsonEditorsPaneRect = this._jsonEditorsPanel.contentHost.getBoundingClientRect();

			this.updateToolboxLayout(this._cardEditorToolbox, jsonEditorsPaneRect);
			this._cardEditor.layout();

			if (this._sampleDataEditorToolbox) {
				this.updateToolboxLayout(this._sampleDataEditorToolbox, jsonEditorsPaneRect);
				this._sampleDataEditor.layout();
			}
		}
	}

	private updateFullLayout() {
		this.scheduleLayoutUpdate();
		this.updateJsonEditorsLayout();
	}

	private _jsonUpdateTimer: any;
	private _cardUpdateTimer: any;
	private _updateLayoutTimer: any;
	private _preventCardUpdate: boolean = false;

	private cardPayloadChanged() {
		if (this.onCardPayloadChanged) {
			this.onCardPayloadChanged(this);
		}
	}

	private _cardEditorUpdateCounter = 0;

	private beginCardEditorUpdate() {
		this._cardEditorUpdateCounter++;
	}

	private endCardEditorUpdate() {
		if (this._cardEditorUpdateCounter > 0) {
			this._cardEditorUpdateCounter--;
		}
	}

	private setCardPayload(payload: object, addToUndoStack: boolean) {
		if (this._isMonacoEditorLoaded) {
			this.beginCardEditorUpdate();

			try {
				if (payload.hasOwnProperty("version")) {
					payload["version"] = this.targetVersion.toString();
				}
				if (this._language == "json") {
					this._cardEditor.setValue(JSON.stringify(payload, null, 4));
				}
				else {
					this._cardEditor.setValue(yaml.dump(payload));
				}
				this.updateCardFromJson(addToUndoStack);
			}
			finally {
				this.endCardEditorUpdate();
			}
		}

		this.cardPayloadChanged();
	}

	private setSampleDataPayload(payload: any) {
		if (this._isMonacoEditorLoaded && this._sampleDataEditor) {
			this._sampleDataEditor.setValue(JSON.stringify(payload, null, 4));
		}
	}

	private updateJsonFromCard(addToUndoStack: boolean = true) {
		//Nikola 
		try {
			this._preventCardUpdate = true;

			// eslint-disable-next-line no-trailing-spaces
			if (!this.preventJsonUpdate && this._isMonacoEditorLoaded) {
				let cardPayload = this._designerSurface.getCardPayloadAsObject();

				if (!this._designerSurface.selectedDialogId) {
					this.setCardPayload(cardPayload, addToUndoStack);
				}
				else {
					let originalPayload = JSON.parse(this.getCurrentCardEditorPayload());
					const elementIndex = originalPayload["body"].findIndex((element) => element.id === this._designerSurface.selectedDialogId);
					if (elementIndex !== -1) {
						originalPayload["body"][elementIndex] = cardPayload["body"][0];
					}
					this.setCardPayload(originalPayload, addToUndoStack);
				}
			}
		}
		finally {
			this._preventCardUpdate = false;
		}
	}

	private scheduleUpdateJsonFromCard() {
		clearTimeout(this._jsonUpdateTimer);

		if (!this.preventJsonUpdate) {
			this._jsonUpdateTimer = setTimeout(() => { this.updateJsonFromCard(); }, 100);
		}
	}

	private preventJsonUpdate: boolean = false;

	public getCardEditorJsonPayload(): any {
		try {
			if (this.language === "json") {
				return JSON.parse(this.getCurrentCardEditorPayload());
			}
			else {
				return JSON.parse(JSON.stringify(yaml.load(this.getCurrentCardEditorPayload())));
			}
		}
		catch {
			console.log('catch');
			// Swallow the parse error
		}
	}

	private getCurrentCardEditorPayload(): string {
		return this._isMonacoEditorLoaded ? this._cardEditor.getValue() : Constants.defaultPayload;
	}

	private getCurrentSampleDataEditorPayload(): string {
		return this._isMonacoEditorLoaded && this._sampleDataEditor ? this._sampleDataEditor.getValue() : "";
	}

	private updateCardFromJson(addToUndoStack: boolean) {
		try {
			this.preventJsonUpdate = true;

			let currentEditorPayload = this.getCurrentCardEditorPayload();
			if (addToUndoStack) {
				try {
					if (this.language === "json") {
						this.addToUndoStack(JSON.parse(this.getCurrentCardEditorPayload()));
					}
					else {
						this.addToUndoStack(JSON.parse(JSON.stringify(yaml.load(this.getCurrentCardEditorPayload()))));
					}
				}
				catch {
					console.log('catch');
					// Swallow the parse error
				}
			}

			if (!this._preventCardUpdate) {
				this.designerSurface.setCardPayloadAsString(currentEditorPayload, this._language);

				this.cardPayloadChanged();
			}
		} finally {
			this.preventJsonUpdate = false;
		}
	}

	private scheduleUpdateCardFromJson() {
		clearTimeout(this._cardUpdateTimer);

		if (!this._preventCardUpdate) {
			this._cardUpdateTimer = setTimeout(() => { this.updateCardFromJson(true); }, 300);
		}
	}

	private _isEdgeHTML?: boolean = undefined;

	private isEdgeHTML(): boolean {
		if (this._isEdgeHTML === undefined) {
			this._isEdgeHTML = window.navigator.userAgent.toLowerCase().indexOf("edge") > -1;
		}

		return this._isEdgeHTML;
	}

	private scheduleLayoutUpdate() {
		if (this.designerSurface) {
			if (!this.isEdgeHTML()) {
				this.designerSurface.updateLayout(false);
			}
			else {
				// In "old" Edge, updateLayout() is *super* slow (because it uses getBoundingClientRect
				// heavily which is itself super slow) and we have to call it only on idle
				clearTimeout(this._updateLayoutTimer);

				this._updateLayoutTimer = setTimeout(
					() => {
						if (this.designerSurface) {
							this.designerSurface.updateLayout(false);
						}
					},
					5);
			}
		}
	}

	private _targetVersion: Adaptive.Version = Adaptive.Versions.v1_4;
	private _fullScreenHandler = new FullScreenHandler();
	private _fullScreenButton: ToolbarButton;
	private _hostContainerChoicePicker: ToolbarChoicePicker;
	private _versionChoicePicker: ToolbarChoicePicker;
	private _languageChoicePicker: ToolbarChoicePicker;
	private _dialogChoicePicker: ToolbarChoicePicker;
	private _undoButton: ToolbarButton;
	private _redoButton: ToolbarButton;
	private _newCardButton: ToolbarButton;
	private _copyJSONButton: ToolbarButton;
	private _togglePreviewButton: ToolbarButton;
	private _helpButton: ToolbarButton;
	private _preventRecursiveSetTargetVersion = false;

	private prepareToolbar() {
		if (Shared.GlobalSettings.showVersionPicker) {
			this._versionChoicePicker = new ToolbarChoicePicker(CardDesigner.ToolbarCommands.VersionPicker);
			this._versionChoicePicker.label = "Version:"
			this._versionChoicePicker.alignment = ToolbarElementAlignment.Right;
			this._versionChoicePicker.separator = true;
			for (let i = 0; i < Shared.SupportedTargetVersions.length; i++) {
				this._versionChoicePicker.choices.push(
					{
						name: Shared.SupportedTargetVersions[i].label,
						value: i.toString()
					});
			}

			this.toolbar.addElement(this._versionChoicePicker);
		}

		if (Shared.GlobalSettings.showDialogPicker) {
			this._dialogChoicePicker = new ToolbarChoicePicker(CardDesigner.ToolbarCommands.DialogPicker);
			this._dialogChoicePicker.label = "Show dialog:"
			this._dialogChoicePicker.alignment = ToolbarElementAlignment.Right;
			this._dialogChoicePicker.separator = true;
			this._dialogChoicePicker.choices.push(
				{
					name: "None",
					value: null
				});
			this.toolbar.addElement(this._dialogChoicePicker);
		}

		if (Shared.GlobalSettings.showLanguagePicker) {
			this._languageChoicePicker = new ToolbarChoicePicker(CardDesigner.ToolbarCommands.LanguagePicker);
			this._languageChoicePicker.label = "Format:"
			this._languageChoicePicker.alignment = ToolbarElementAlignment.Right;
			this._languageChoicePicker.separator = true;
			for (let i = 0; i < Shared.SupportedLanguages.length; i++) {
				this._languageChoicePicker.choices.push(
					{
						name: Shared.SupportedLanguages[i],
						value: Shared.SupportedLanguages[i]
					});
			}


			this.toolbar.addElement(this._languageChoicePicker);
		}

		this._newCardButton = new ToolbarButton(
			CardDesigner.ToolbarCommands.NewCard,
			"New",
			"acd-icon-newCard",
			(sender: ToolbarButton) => {
				this._sampleCatalogue.sampleBaseUrl = CardDesigner.catalogueBaseUrl;
				let dialog = new OpenSampleDialog(this._sampleCatalogue);
				dialog.title = "Pick a sample as a starting point";
				dialog.closeButton.caption = "Cancel";
				dialog.width = "80%";
				dialog.height = "80%";
				dialog.onClose = (d) => {
					if (dialog.selectedSample && dialog.selectedSample.cardId !== "PIC_2_CARD") {
						const newCardButton = this._newCardButton.renderedElement;
						dialog.selectedSample.onDownloaded = () => {
							try {
								let cardPayload = dialog.selectedSample.cardPayload;
								this.setCardPayload(cardPayload, true);
							} catch {
								alert("The sample could not be loaded.");
							}

							if (dialog.selectedSample.sampleData) {
								try {
									let sampleDataPayload = dialog.selectedSample.sampleData;
									this.setSampleDataPayload(sampleDataPayload);
									this.dataStructure = FieldDefinition.deriveFrom(sampleDataPayload);
								} catch {
									alert("The sample could not be loaded.")
								}
							}
						};
						dialog.selectedSample.download();
						if (newCardButton) {
							newCardButton.focus();
						}
					} else if (dialog.selectedSample && dialog.selectedSample.cardId === "PIC_2_CARD") {
						this.launchImagePopup();
					} else {
						const newCardButton = this._newCardButton.renderedElement;

						if (newCardButton) {
							newCardButton.focus();
						}
					}
				};
				dialog.open();
			});
		this._newCardButton.separator = true;

		this.toolbar.addElement(this._newCardButton);

		if (this._hostContainers && this._hostContainers.length > 0) {
			this._hostContainerChoicePicker = new ToolbarChoicePicker(CardDesigner.ToolbarCommands.HostAppPicker);
			this._hostContainerChoicePicker.separator = true;
			this._hostContainerChoicePicker.label = "Host app:"
			this._hostContainerChoicePicker.width = 350;

			for (let i = 0; i < this._hostContainers.length; i++) {
				this._hostContainerChoicePicker.choices.push(
					{
						name: this._hostContainers[i].name,
						value: i.toString(),
					}
				);
			}

			this._hostContainerChoicePicker.onChanged = (sender) => {
				this.hostContainer = this._hostContainers[parseInt(this._hostContainerChoicePicker.value)];

				this.activeHostContainerChanged();
			};

			this.toolbar.addElement(this._hostContainerChoicePicker);
		}

		this._undoButton = new ToolbarButton(
			CardDesigner.ToolbarCommands.Undo,
			"Undo",
			"acd-icon-undo",
			(sender: ToolbarButton) => { this.undo(); });
		this._undoButton.separator = true;
		this._undoButton.toolTip = "Undo your last change";
		this._undoButton.isEnabled = false;
		this._undoButton.displayCaption = false;

		this.toolbar.addElement(this._undoButton);

		this._redoButton = new ToolbarButton(
			CardDesigner.ToolbarCommands.Redo,
			"Redo",
			"acd-icon-redo",
			(sender: ToolbarButton) => { this.redo(); });
		this._redoButton.toolTip = "Redo your last changes";
		this._redoButton.isEnabled = false;
		this._redoButton.displayCaption = false;

		this.toolbar.addElement(this._redoButton);

		this._copyJSONButton = new ToolbarButton(
			CardDesigner.ToolbarCommands.CopyJSON,
			"Copy card",
			"acd-icon-copy");
		this._copyJSONButton.toolTip = "Copy the generated JSON payload of the card (template bound with data) to the clipboard. To copy only the template payload, use the Card Payload Editor.";
		this.toolbar.addElement(this._copyJSONButton);

		this._togglePreviewButton = new ToolbarButton(
			CardDesigner.ToolbarCommands.TogglePreview,
			"Preview",
			"acd-icon-preview",
			(sender: ToolbarButton) => { this.togglePreview(); });
		this._togglePreviewButton.separator = true;
		this._togglePreviewButton.allowToggle = true;
		this._togglePreviewButton.isVisible = Shared.GlobalSettings.enableDataBindingSupport;

		this.toolbar.addElement(this._togglePreviewButton);

		this._helpButton = new ToolbarButton(
			CardDesigner.ToolbarCommands.Help,
			"Help",
			"acd-icon-help",
			(sender: ToolbarButton) => { this.showHelp(); });
		this._helpButton.toolTip = "Display help.";
		this._helpButton.separator = true;
		this._helpButton.alignment = ToolbarElementAlignment.Right;
		this.toolbar.addElement(this._helpButton);

		this._fullScreenHandler = new FullScreenHandler();
		this._fullScreenHandler.onFullScreenChanged = (isFullScreen: boolean) => {
			this._fullScreenButton.toolTip = isFullScreen ? "Exit full screen" : "Enter full screen";

			this.updateFullLayout();
		}
	}

	private launchImagePopup() {
		let dialog = new OpenImageDialog();
		dialog.title = "Pic2card Dialog for Image Upload";
		dialog.closeButton.caption = "Cancel";
		dialog.preventLightDismissal = true;
		dialog.width = "80%";
		dialog.height = "80%";
		dialog.open();
		dialog.onClose = (d) => {
			if (dialog.predictedCardJSON) {
				const { card, data } = dialog.predictedCardJSON;
				const addToUndoStack = true;
				const newCardButton = this._newCardButton.renderedElement;

				if (newCardButton) {
					newCardButton.focus();
				}

				this.setCardPayload(card, addToUndoStack);
				this.setSampleDataPayload(data);
			} else {
				const newCardButton = this._newCardButton.renderedElement;

				if (newCardButton) {
					newCardButton.focus();
				}
			}
		};
	}

	private onResize() {
		this._cardEditor.layout();

		if (this._sampleDataEditor) {
			this._sampleDataEditor.layout();
		}
	}

	private updateSampleData() {
		try {
			this._sampleData = JSON.parse(this.getCurrentSampleDataEditorPayload());

			this.scheduleUpdateCardFromJson();
		}
		catch {
			// Swallow expression, the payload isn't a valid JSON document
		}
	}

	private updateToolbar() {
		this._undoButton.isEnabled = this.canUndo;
		this._redoButton.isEnabled = this.canRedo;
	}

	private addToUndoStack(payload: object) {
		let doAdd: boolean = !this._designerSurface.draggedPeer;

		if (doAdd) {
			if (this._undoStack.length > 0) {
				doAdd = this._undoStack[this._undoStack.length - 1] != payload;
			}

			if (doAdd) {
				let undoPayloadsToDiscard = this._undoStack.length - (this._undoStackIndex + 1);

				if (undoPayloadsToDiscard > 0) {
					this._undoStack.splice(this._undoStackIndex + 1, undoPayloadsToDiscard);
				}

				this._undoStack.push(payload);

				if (this._undoStack.length > CardDesigner.MAX_UNDO_STACK_SIZE) {
					this._undoStack.splice(0, 1);
				}

				this._undoStackIndex = this._undoStack.length - 1;

				this.updateToolbar();
			}
		}
	}

	private handlePointerUp(e: PointerEvent) {
		this.endDrag();

		if (this.designerSurface) {
			this.designerSurface.endDrag(false);
		}
	}

	private handlePointerMove(e: PointerEvent) {
		this._currentMousePosition = { x: e.x, y: e.y };

		if (this.designerSurface) {
			let isPointerOverDesigner = this.designerSurface.isPointerOver(this._currentMousePosition.x, this._currentMousePosition.y);
			let peerDropped = false;

			if (this._draggedPaletteItem && isPointerOverDesigner) {
				let peer = this._draggedPaletteItem.createPeer(this, this.designerSurface);

				let clientCoordinates = this.designerSurface.pageToClientCoordinates(this._currentMousePosition.x, this._currentMousePosition.y);

				if (this.designerSurface.tryDrop(clientCoordinates, peer)) {
					this.endDrag();

					this.designerSurface.startDrag(peer);

					peerDropped = true;
				}
			}

			if (!peerDropped && this._draggedElement) {
				this._draggedElement.style.left = this._currentMousePosition.x - 10 + "px";
				this._draggedElement.style.top = this._currentMousePosition.y - 10 + "px";
			}
		}
	}

	readonly toolbar: Toolbar = new Toolbar();

	lockDataStructure: boolean = false;

	constructor(hostContainers: Array<HostContainer> = null) {
		super();

		Adaptive.GlobalSettings.enableFullJsonRoundTrip = false;
		Adaptive.GlobalSettings.allowPreProcessingPropertyValues = true;
		Adaptive.GlobalSettings.setTabIndexAtCardRoot = false;

		Adaptive.AdaptiveCard.onProcessMarkdown = (text: string, result: Adaptive.IMarkdownProcessingResult) => {
			CardDesigner.internalProcessMarkdown(text, result);
		}

		this._hostContainers = hostContainers ? hostContainers : [];

		this.prepareToolbar();
	}

	monacoModuleLoaded(monaco: any = null) {
		if (!monaco) {
			monaco = window["monaco"];
		} else {
			// Handle usage of window[monaco] when it is passed
			window["monaco"] = monaco;
		}

		let monacoConfiguration = {
			schemas: [
				{
					uri: "http://adaptivecards.io/schemas/adaptive-card.json",
					schema: adaptiveCardSchema,
					fileMatch: ["*"],
				}
			],
			validate: true,
			allowComments: true
		}

		// TODO: set this in our editor instead of defaults
		monaco.languages.json.jsonDefaults.setDiagnosticsOptions(monacoConfiguration);

		// Setup card JSON editor
		this._cardEditorToolbox.content = document.createElement("div");
		this._cardEditorToolbox.content.setAttribute("role", "region");
		this._cardEditorToolbox.content.setAttribute("aria-label", "card payload editor");
		this._cardEditorToolbox.content.style.overflow = "hidden";

		this._cardEditor = monaco.editor.create(
			this._cardEditorToolbox.content,
			{
				folding: true,
				fontSize: 13.5,
				language: this._language,
				minimap: {
					enabled: true
				}
			}
		);

		this._cardEditor.onDidChangeModelContent(() => {
			if (this._cardEditorUpdateCounter == 0) {
				this.scheduleUpdateCardFromJson();
			}
		});

		if (this._sampleDataEditorToolbox) {
			// Setup sample data JSON editor
			this._sampleDataEditorToolbox.content = document.createElement("div");
			this._sampleDataEditorToolbox.content.setAttribute("role", "region");
			this._sampleDataEditorToolbox.content.setAttribute("aria-label", "sample data editor");
			this._sampleDataEditorToolbox.content.style.overflow = "hidden";

			this._sampleDataEditor = monaco.editor.create(
				this._sampleDataEditorToolbox.content,
				{
					folding: true,
					fontSize: 13.5,
					language: this._language,
					minimap: {
						enabled: false
					}
				}
			);

			this._sampleDataEditor.onDidChangeModelContent(
				() => {
					this.updateSampleData();

					if (!this.lockDataStructure) {
						try {
							this.dataStructure = FieldDefinition.deriveFrom(JSON.parse(this.getCurrentSampleDataEditorPayload()));
						}
						catch {
							// Swallow exception
						}
					}
				});
		}

		window.addEventListener('resize', () => { this.onResize(); });

		this._isMonacoEditorLoaded = true;

		this.updateJsonEditorsLayout();
		this.updateJsonFromCard(true);
	}

	loadCss() {
		ExtensionRegistry.customCss.forEach((value: string, key: string) => {
			const id = "designerCss" + key;
			const element = document.getElementById(id);
			if (!element) {
				let style = document.createElement("style");
				if ((style as any).styleSheet) {
					// This is required for IE8 and below.
					(style as any).styleSheet.cssText = value;
				} else {
					style.appendChild(document.createTextNode(value));
				}
				style.id = id;
				document.getElementsByTagName("head")[0].appendChild(style);
			}
		});
	}

	attachTo(root: HTMLElement) {
		let styleSheetLinkElement = document.createElement("link");
		styleSheetLinkElement.id = "__ac-designer";
		styleSheetLinkElement.rel = "stylesheet";
		styleSheetLinkElement.type = "text/css";
		styleSheetLinkElement.href = Utils.joinPaths(this._assetPath, "adaptivecards-designer.css");

		this.buildPalette();
		ExtensionRegistry.subscribe(() => {
			this.buildPalette();
		});

		CustomCardElementRegistry.subscribe(() => {
			this.buildPalette();
		});

		this.loadCss();
		ExtensionRegistry.subscribeCss(() => {
			this.loadCss();
		});


		document.getElementsByTagName("head")[0].appendChild(styleSheetLinkElement);

		if (this._hostContainers && this._hostContainers.length > 0) {
			this._hostContainer = this._hostContainers[0];
		}
		else {
			this._hostContainer = new DefaultContainer("Default", "adaptivecards-defaulthost.css");
		}

		root.classList.add("acd-designer-root");
		root.style.flex = "1 1 auto";
		root.style.display = "flex";
		root.style.flexDirection = "column";
		root.style.overflow = "hidden";

		root.innerHTML =
			'<div id="toolbarHost" role="region" aria-label="toolbar"></div>' +
			'<div class="content" style="display: flex; flex: 1 1 auto; overflow-y: hidden;">' +
			'<div id="leftCollapsedPaneTabHost" class="acd-verticalCollapsedTabContainer acd-dockedLeft" style="border-right: 1px solid #D2D2D2;"></div>' +
			'<div id="toolPalettePanel" class="acd-toolPalette-pane" role="region" aria-label="card elements"></div>' +
			'<div style="display: flex; flex-direction: column; flex: 1 1 100%; overflow: hidden;">' +
			'<div style="display: flex; flex: 1 1 100%; overflow: hidden;">' +
			'<div id="cardArea" class="acd-designer-cardArea" role="region" aria-label="card preview">' +
			'<div style="flex: 1 1 100%; overflow: auto;">' +
			'<div id="designerHost" style="margin: 20px 40px 20px 20px;"></div>' +
			'</div>' +
			'<div id="errorPane" class="acd-error-pane acd-hidden"></div>' +
			'</div>' +
			'<div id="treeViewPanel" class="acd-treeView-pane" role="region" aria-label="card structure"></div>' +
			'<div id="propertySheetPanel" class="acd-propertySheet-pane" role="region" aria-label="element properties"></div>' +
			'</div>' +
			'<div id="jsonEditorPanel" class="acd-json-editor-pane"></div>' +
			'<div id="bottomCollapsedPaneTabHost" class="acd-horizontalCollapsedTabContainer" style="border-top: 1px solid #D2D2D2;"></div>' +
			'</div>' +
			'<div id="rightCollapsedPaneTabHost" class="acd-verticalCollapsedTabContainer acd-dockedRight" style="border-left: 1px solid #D2D2D2;"></div>' +
			'</div>';



		this.toolbar.attachTo(document.getElementById("toolbarHost"));

		if (this._versionChoicePicker) {
			this._versionChoicePicker.selectedIndex = Shared.SupportedTargetVersions.indexOf(this.targetVersion);
			this._versionChoicePicker.onChanged = (sender: ToolbarChoicePicker) => {
				this.targetVersion = Shared.SupportedTargetVersions[parseInt(this._versionChoicePicker.value)];
			}
		}

		if (this._dialogChoicePicker) {
			this._dialogChoicePicker.onChanged = (sender: ToolbarChoicePicker) => {
				this._designerSurface.selectedDialogId = this._dialogChoicePicker.value;
				if (this._designerSurface.selectedDialogId) {
					console.log("Render dialog with id: " + this._dialogChoicePicker.value);
				} else {
					console.log("Render standard adaptive card");
				}
				this.updateCardFromJson(false)
			}
		}

		if (this._languageChoicePicker) {
			this._languageChoicePicker.selectedIndex = Shared.SupportedLanguages.indexOf(this._language);
			this._languageChoicePicker.onChanged = (sender: ToolbarChoicePicker) => {
				this._previousLanguage = this._language;
				this._language = this._languageChoicePicker.value;
				let originalPayload = this.getCurrentCardEditorPayload()
				if (this.language === "json" && this._previousLanguage === 'yaml') {
					//..convert YAML to JSON
					let obj = yaml.load(originalPayload);
					this._cardEditor.setValue(JSON.stringify(obj, null, 4));
					var model = this._cardEditor.getModel();
					window["monaco"].editor.setModelLanguage(model, this.language)

				}
				else if (this.language === "yaml" && this._previousLanguage === 'json') {
					//..convert JSON to YAML
					let obj = JSON.parse(originalPayload)
					this._cardEditor.setValue(yaml.dump(obj));
					var model = this._cardEditor.getModel();
					window["monaco"].editor.setModelLanguage(model, "yaml")
				}
			}
		}

		if (this._copyJSONButton.isVisible) {
			new Clipboard(
				this._copyJSONButton.renderedElement,
				{
					text: (trigger) => JSON.stringify(this.getBoundCard(), null, 4)
				})
				.on("error", () => this._copyJSONButton.renderedElement.focus())
				.on("success", () => this._copyJSONButton.renderedElement.focus());
		}

		// Tool palette panel
		let toolPaletteHost = document.createElement("div");
		toolPaletteHost.className = "acd-dockedPane";

		this._toolPaletteToolbox = new Toolbox("toolPalette", Strings.toolboxes.toolPalette.title);
		this._toolPaletteToolbox.content = toolPaletteHost;

		let toolPalettePanel = new SidePanel(
			"toolPalettePanel",
			SidePanelAlignment.Left,
			document.getElementById("leftCollapsedPaneTabHost"));
		toolPalettePanel.addToolbox(this._toolPaletteToolbox);
		toolPalettePanel.isResizable = false;

		toolPalettePanel.attachTo(document.getElementById("toolPalettePanel"));

		// JSON editors panel
		this._cardEditorToolbox = new Toolbox("cardEditor", Strings.toolboxes.cardEditor.title);
		this._cardEditorToolbox.content = document.createElement("div");
		this._cardEditorToolbox.content.style.padding = "8px";
		this._cardEditorToolbox.content.innerText = Strings.loadingEditor;

		this._jsonEditorsPanel = new SidePanel(
			"jsonEditorPanel",
			SidePanelAlignment.Bottom,
			document.getElementById("bottomCollapsedPaneTabHost"));
		this._jsonEditorsPanel.onResized = (sender: SidePanel) => {
			this.updateJsonEditorsLayout();
		}
		this._jsonEditorsPanel.onToolboxResized = (sender: SidePanel) => {
			this.updateJsonEditorsLayout();
		}
		this._jsonEditorsPanel.onToolboxExpandedOrCollapsed = (sender: SidePanel) => {
			this.updateJsonEditorsLayout();
		}

		this._jsonEditorsPanel.addToolbox(this._cardEditorToolbox);

		if (Shared.GlobalSettings.enableDataBindingSupport && Shared.GlobalSettings.showSampleDataEditorToolbox) {
			this._sampleDataEditorToolbox = new Toolbox("sampleDataEditor", Strings.toolboxes.sampleDataEditor.title);
			this._sampleDataEditorToolbox.content = document.createElement("div");
			this._sampleDataEditorToolbox.content.style.padding = "8px";
			this._sampleDataEditorToolbox.content.innerText = Strings.loadingEditor;

			this._jsonEditorsPanel.addToolbox(this._sampleDataEditorToolbox);
		}

		this._jsonEditorsPanel.attachTo(document.getElementById("jsonEditorPanel"));

		// Property sheet panel
		let propertySheetHost = document.createElement("div");
		propertySheetHost.className = "acd-propertySheet-host";

		this._propertySheetToolbox = new Toolbox("propertySheet", Strings.toolboxes.propertySheet.title);
		this._propertySheetToolbox.content = propertySheetHost;

		let propertySheetPanel = new SidePanel(
			"propertySheetPanel",
			SidePanelAlignment.Right,
			document.getElementById("rightCollapsedPaneTabHost"));
		propertySheetPanel.addToolbox(this._propertySheetToolbox);
		propertySheetPanel.onResized = (sender: SidePanel) => {
			this.scheduleLayoutUpdate();
		}

		propertySheetPanel.attachTo(document.getElementById("propertySheetPanel"));

		// Tree view panel
		let treeViewHost = document.createElement("div");
		treeViewHost.className = "acd-treeView-host";

		this._treeViewToolbox = new Toolbox("treeView", Strings.toolboxes.cardStructure.title);
		this._treeViewToolbox.content = treeViewHost;

		let treeViewPanel = new SidePanel(
			"treeViewPanel",
			SidePanelAlignment.Right,
			document.getElementById("rightCollapsedPaneTabHost"));
		treeViewPanel.addToolbox(this._treeViewToolbox);
		treeViewPanel.onResized = (sender: SidePanel) => {
			this.scheduleLayoutUpdate();
		}

		if (Shared.GlobalSettings.enableDataBindingSupport && Shared.GlobalSettings.showDataStructureToolbox) {
			let dataExplorerHost = document.createElement("div");
			dataExplorerHost.className = "acd-treeView-host";

			this._dataToolbox = new Toolbox("data", Strings.toolboxes.dataStructure.title);
			this._dataToolbox.content = dataExplorerHost;

			treeViewPanel.addToolbox(this._dataToolbox);
		}

		if (this._customToolboxes.length > 0) {
			this._customToolboxes.forEach(toolbox => {
				treeViewPanel.addToolbox(toolbox);
			});
		}

		treeViewPanel.attachTo(document.getElementById("treeViewPanel"));

		this._designerHostElement = document.getElementById("designerHost");

		window.addEventListener("pointermove", (e: PointerEvent) => { this.handlePointerMove(e); });
		window.addEventListener("resize", () => { this.scheduleLayoutUpdate(); });
		window.addEventListener("pointerup", (e: PointerEvent) => { this.handlePointerUp(e); });

		this._isAttached = true;

		this.recreateDesignerSurface();
	}

	public addToolbox(toolbox: Toolbox): void {
		this._customToolboxes.push(toolbox);
	}

	clearUndoStack() {
		this._undoStack = [];
		this._undoStackIndex = -1;
		this.updateToolbar();
	}

	setCard(payload: object) {
		this.clearUndoStack();
		this.setCardPayload(payload, true);
	}

	getCard(): object {
		return this._designerSurface ? this._designerSurface.getCardPayloadAsObject() : undefined;
	}

	getBoundCard(): object {
		return this._designerSurface ? this._designerSurface.getBoundCardPayloadAsObject() : undefined;
	}

	undo() {
		if (this.canUndo) {
			this._undoStackIndex--;

			let card = this._undoStack[this._undoStackIndex];

			this.setCardPayload(card, false);
			this.updateToolbar();
		}
	}

	redo() {
		if (this._undoStackIndex < this._undoStack.length - 1) {
			this._undoStackIndex++;

			let payload = this._undoStack[this._undoStackIndex];

			this.setCardPayload(payload, false);
			this.updateToolbar();
		}
	}

	showHelp() {
		let helpDialog = new HelpDialog();
		helpDialog.title = "Help";
		helpDialog.open();
	}

	newCard() {
		let card = {
			type: "AdaptiveCard",
			$schema: "http://adaptivecards.io/schemas/adaptive-card.json",
			version: this.targetVersion.toString(),
			body: [
			]
		}

		this.setCardPayload(card, true);
	}

	onCardPayloadChanged: (designer: CardDesigner) => void;
	onCardValidated: (designer: CardDesigner, validationLogEntries: Adaptive.IValidationEvent[]) => void;
	onActiveHostContainerChanged: (designer: CardDesigner) => void;
	onTargetVersionChanged: (designer: CardDesigner) => void;

	get targetVersion(): Adaptive.Version {
		return this._targetVersion;
	}

	set targetVersion(value: Adaptive.Version) {
		if (this._targetVersion.compareTo(value) !== 0 && !this._preventRecursiveSetTargetVersion) {
			this._preventRecursiveSetTargetVersion = true;

			try {
				this._targetVersion = value;

				this.targetVersionChanged();

				if (this._versionChoicePicker) {
					this._versionChoicePicker.selectedIndex = Shared.SupportedTargetVersions.indexOf(this._targetVersion);
				}
			}
			finally {
				this._preventRecursiveSetTargetVersion = false;
			}
		}
	}

	get language(): string {
		return this._language;
	}

	set language(value: string) {
		try {
			this._language = value;
		}
		finally {

		}
	}

	get dataStructure(): FieldDefinition {
		return this._dataStructure;
	}

	set dataStructure(value: FieldDefinition) {
		this._dataStructure = value;
		this.buildDataExplorer();
	}

	get sampleData(): any {
		return this._sampleData;
	}

	set sampleData(value: any) {
		this._sampleData = value;

		this.setSampleDataPayload(value);
	}

	get bindingPreviewMode(): Designer.BindingPreviewMode {
		return this._bindingPreviewMode;
	}

	set bindingPreviewMode(value: Designer.BindingPreviewMode) {
		this._bindingPreviewMode = value;
	}

	get hostContainer(): HostContainer {
		return this._hostContainer;
	}

	set hostContainer(value: HostContainer) {
		if (this._hostContainer !== value) {
			this._hostContainer = value;

			this.activeHostContainerChanged();

			if (Shared.GlobalSettings.selectedHostContainerControlsTargetVersion) {
				this.targetVersion = this._hostContainer.targetVersion;
			}
		}
	}

	get canUndo(): boolean {
		return this._undoStackIndex >= 1;
	}

	get canRedo(): boolean {
		return this._undoStackIndex < this._undoStack.length - 1;
	}

	get designerSurface(): Designer.CardDesignerSurface {
		return this._designerSurface;
	}

	get treeViewToolbox(): Toolbox {
		return this._treeViewToolbox;
	}

	get propertySheetToolbox(): Toolbox {
		return this._propertySheetToolbox;
	}

	get jsonEditorToolbox(): Toolbox {
		return this._cardEditorToolbox;
	}

	get toolPaletteToolbox(): Toolbox {
		return this._toolPaletteToolbox;
	}

	get dataToolbox(): Toolbox {
		return this._dataToolbox;
	}

	get assetPath(): string {
		return this._assetPath;
	}

	set assetPath(value: string) {
		this._assetPath = value;
	}

	get customPaletteItems(): CustomPaletteItem[] {
		return this._customPeletteItems;
	}

	set customPaletteItems(value: CustomPaletteItem[]) {
		this._customPeletteItems = value;

		this.buildPalette();
	}

	get sampleCatalogueUrl(): string {
		return this._sampleCatalogue.url;
	}

	set sampleCatalogueUrl(value: string) {
		this._sampleCatalogue.url = value;
	}
}

export module CardDesigner {
	export class ToolbarCommands {
		static readonly HostAppPicker = "__hostAppPicker";
		static readonly VersionPicker = "__versionPicker";
		static readonly Undo = "__undoButton";
		static readonly Redo = "__redoButton";
		static readonly NewCard = "__newCardButton";
		static readonly CopyJSON = "__copyJsonButton";
		static readonly TogglePreview = "__togglePreviewButton";
		static readonly Help = "__helpButton";
		static readonly LanguagePicker = "__languagePicker";
		static readonly DialogPicker = "__dialogPicker";
	}
}
