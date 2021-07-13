// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import {
	GlobalSettings, GlobalRegistry,
	CardElement, Action, HostConfig, SerializationContext, Version, Versions, CardObjectRegistry, CustomCardElementRegistry
} from "@asseco/adaptivecards";
import * as hostConfig from "../hostConfigs/sample.json";
import { ExtensionRegistry } from "../extension-loader";

export abstract class HostContainer {
	private _cardHost: HTMLElement;
	private _elementsRegistry = new CardObjectRegistry<CardElement>();
	private _actionsRegistry = new CardObjectRegistry<Action>();

	readonly name: string;
	readonly styleSheet: string;

	constructor(name: string, styleSheet: string) {
		this.name = name;
		this.styleSheet = styleSheet;

		this._cardHost = document.createElement("div");
		this._cardHost.className = "cardHost";

		GlobalRegistry.populateWithDefaultElements(this._elementsRegistry);
		GlobalRegistry.populateWithDefaultActions(this._actionsRegistry);

		ExtensionRegistry.extensionsRegistry.forEach((value: any) => {
			GlobalRegistry.populateWithExtension(this._elementsRegistry, value);
		});
		ExtensionRegistry.subscribe((schema) => {
			GlobalRegistry.populateWithExtension(this._elementsRegistry, schema);
		});
		CustomCardElementRegistry.cardElementRegistry.forEach((value: any, key: any) => {
			this._elementsRegistry.register(key, value);
		});
		CustomCardElementRegistry.subscribe((name, object) => {
			this._elementsRegistry.register(name, object);
		});
	}

	abstract renderTo(hostElement: HTMLElement);

	public initialize() {
		GlobalSettings.useMarkdownInRadioButtonAndCheckbox = true;
		GlobalSettings.useAdvancedCardBottomTruncation = false;
		GlobalSettings.useAdvancedTextBlockTruncation = true;
	}

	public createSerializationContext(targetVersion: Version): SerializationContext {
		const context = new SerializationContext(targetVersion);
		context.setElementRegistry(this.elementsRegistry);
		context.setActionRegistry(this.actionsRegistry);

		return context;
	}

	public getBackgroundColor(): string {
		return "#F6F6F6";
	}

	public parseElement(element: CardElement, source: any, context: SerializationContext) {
		// Do nothing in base implementation
	}

	public anchorClicked(element: CardElement, anchor: HTMLAnchorElement): boolean {
		// Not handled by the host container by default
		return false;
	}

	public getHostConfig(): HostConfig {
		return new HostConfig(hostConfig);
	}

	public getRawHostConfig(): any {
		return hostConfig;
	}

	supportsActionBar: boolean = false;

	get cardHost(): HTMLElement {
		return this._cardHost;
	}

	get isFixedHeight(): boolean {
		return false;
	}

	get elementsRegistry(): CardObjectRegistry<CardElement> {
		return this._elementsRegistry;
	}

	get actionsRegistry(): CardObjectRegistry<Action> {
		return this._actionsRegistry;
	}

	get targetVersion(): Version {
		return Versions.v1_0;
	}
}
