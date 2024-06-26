// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// Note the "weird" way these readonly fields are declared is to work around
// a breaking change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
// and adopt this syntax for all other static readonly fields.
export class ActionStyle {
    static readonly Default: "default" = "default";
    static readonly Positive: "positive" = "positive";
    static readonly Destructive: "destructive" = "destructive";
}

export enum Size {
    Auto,
    Stretch,
    Small,
    Medium,
    Large
}

export enum ImageSize {
    Small,
    Medium,
    Large
}

export enum SizeUnit {
    Weight,
    Pixel
}

export enum DataSourceRestParamType {
    Query,
    Header,
		Route
}

export enum RuleType {
    Interaction = "Rule.Interaction"
}

export enum RuleTrigger {
    ValueChanged,
    Click,
    FocusOut,
	ActionCompleted
}

export enum RuleActionType {
    Refresh = "Action.Refresh",
    RaiseEvent = "Action.RaiseEvent",
    SetInputValue = "Action.SetInputValue",
    SetProperty = "Action.SetProperty",
    ShowDialog = "Action.ShowDialog"
}

export enum TextSize {
    Small,
    Default,
    Medium,
    Large,
    ExtraLarge
}

export enum TextWeight {
    Lighter,
    Default,
    Bolder
}

export enum FontType {
    Default,
    Monospace
}

export enum Spacing {
    None,
    Small,
    Default,
    Medium,
    Large,
    ExtraLarge,
    Padding
}

export enum TextColor {
    Default,
    Dark,
    Light,
    Accent,
    Good,
    Warning,
    Attention
}

export enum HorizontalAlignment {
    Left,
    Center,
    Right
}

export enum VerticalAlignment {
    Top,
    Center,
    Bottom
}

export enum ActionAlignment {
    Left,
    Center,
    Right,
    Stretch
}

export enum ImageStyle {
    Default,
    Person
}

export enum ShowCardActionMode {
    Inline,
    Popup
}

export enum Orientation {
    Horizontal,
    Vertical
}

export enum FillMode {
    Cover,
    RepeatHorizontally,
    RepeatVertically,
    Repeat
}

export enum ActionIconPlacement {
    LeftOfTitle,
    AboveTitle
}

export enum InputTextStyle {
    Text,
    Tel,
    Url,
    Email
}

export enum AuthenticationType {
    Client,
    Server
}

export enum DataSetBindingType {
	Inherited,
    Client,
    Server
}

export enum RestMethod {
    GET,
    POST,
    PUT,
    DELETE,
    PATCH
}

/*
    This should really be a string enum, e.g.

        export enum ContainerStyle {
            Default = "default",
            Emphasis = "emphasis"
        }

    However, some hosts do not use a version of TypeScript
    recent enough to understand string enums. This is
    a compatible construct that does not require using
    a more recent version of TypeScript.

    Also note the "weird" way these readonly fields are declared is to work around
    a breaking change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    and adopt this syntax for all other static readonly fields.
*/
export class ContainerStyle {
    static readonly Default: "default" = "default";
    static readonly Emphasis: "emphasis" = "emphasis";
    static readonly Accent: "accent" = "accent";
    static readonly Good: "good" = "good";
    static readonly Attention: "attention" = "attention";
    static readonly Warning: "warning" = "warning";
}

export enum ChipInputColorSchema {
    Primary = '#03a9f4',
    Accent = '#ff9800',
    Warn = '#f44336'
}

export enum ValidationPhase {
    Parse,
    ToJSON,
    Validation
}

export enum ValidationEvent {
    Hint,
    ActionTypeNotAllowed,
    CollectionCantBeEmpty,
    Deprecated,
    ElementTypeNotAllowed,
    InteractivityNotAllowed,
    InvalidPropertyValue,
    MissingCardType,
    PropertyCantBeNull,
    TooManyActions,
    UnknownActionType,
    UnknownElementType,
    UnsupportedCardVersion,
    DuplicateId,
    UnsupportedProperty,
    RequiredInputsShouldHaveLabel,
    RequiredInputsShouldHaveErrorMessage,
    Other
}

export enum ContainerFitStatus {
    FullyInContainer,
    Overflowing,
    FullyOutOfContainer
}

export enum InputTextCheckDigitAlgorithm {
    Mod11,
    Mod97
}

export class ChoiceInputStyle {
	static readonly Compact: "compact" = "compact";
	static readonly Expanded: "expanded" = "expanded";
	static readonly Autocomplete: "autocomplete" = "autocomplete";
}

export class ChoiceInputFilterType {
	static readonly None: "none" = "none";
	static readonly StartsWith: "startsWith" = "startsWith";
	static readonly Includes: "includes" = "includes";
	static readonly EndsWith: "endsWith" = "endsWith";
}

export class FilterMode {
	static readonly Client: "client" = "client";
	static readonly Server: "server" = "server";
}
