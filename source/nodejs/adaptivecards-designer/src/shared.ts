import * as Adaptive from "@asseco/adaptivecards";

export class GlobalSettings {
    static enableDataBindingSupport: boolean = false;
    static showDataStructureToolbox: boolean = false;
    static showSampleDataEditorToolbox: boolean = false;
    static showVersionPicker: boolean = true;
    static selectedHostContainerControlsTargetVersion: boolean = true;
    static showTargetVersionMismatchWarning: boolean = true;
    static showLanguagePicker: boolean = true;
    static showDialogPicker: boolean = true;
    static componentRegistryBaseUrl: string = "https://adaptive-ui.see.asseco.com/alpha/screens/components/";
    static componentCatalogueBaseUrl: string = 'https://adaptive-ui.see.asseco.com';
}

export var SupportedTargetVersions: Adaptive.Version[] = [
    Adaptive.Versions.v1_0,
    Adaptive.Versions.v1_1,
    Adaptive.Versions.v1_2,
    Adaptive.Versions.v1_3,
    Adaptive.Versions.v1_4
];

export var SupportedLanguages: string[] = [
    "json",
    "yaml"
];
