import * as Adaptive from "@asseco/adaptivecards";

export class GlobalSettings {
    static enableDataBindingSupport: boolean = false;
    static showDataStructureToolbox: boolean = false;
    static showSampleDataEditorToolbox: boolean = false;
    static showVersionPicker: boolean = true;
    static selectedHostContainerControlsTargetVersion: boolean = true;
    static showTargetVersionMismatchWarning: boolean = true;
    static showLanguagePicker: boolean = true;
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
