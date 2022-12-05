[Adaptive Cards Javascript SDK](../README.md) / ChoiceSetInput

# Class: ChoiceSetInput

## Hierarchy

- [`Input`](Input.md)

  ↳ **`ChoiceSetInput`**

## Table of contents

### Constructors

- [constructor](ChoiceSetInput.md#constructor)

### Properties

- [\_parent](ChoiceSetInput.md#_parent)
- [\_renderedElement](ChoiceSetInput.md#_renderedelement)
- [choices](ChoiceSetInput.md#choices)
- [customCssSelector](ChoiceSetInput.md#customcssselector)
- [defaultValue](ChoiceSetInput.md#defaultvalue)
- [errorMessage](ChoiceSetInput.md#errormessage)
- [filterMode](ChoiceSetInput.md#filtermode)
- [filterType](ChoiceSetInput.md#filtertype)
- [height](ChoiceSetInput.md#height)
- [horizontalAlignment](ChoiceSetInput.md#horizontalalignment)
- [id](ChoiceSetInput.md#id)
- [isMultiSelect](ChoiceSetInput.md#ismultiselect)
- [isRequired](ChoiceSetInput.md#isrequired)
- [label](ChoiceSetInput.md#label)
- [maxVersion](ChoiceSetInput.md#maxversion)
- [onPreProcessPropertyValue](ChoiceSetInput.md#onpreprocesspropertyvalue)
- [onValueChanged](ChoiceSetInput.md#onvaluechanged)
- [placeholder](ChoiceSetInput.md#placeholder)
- [rules](ChoiceSetInput.md#rules)
- [separator](ChoiceSetInput.md#separator)
- [showClear](ChoiceSetInput.md#showclear)
- [spacing](ChoiceSetInput.md#spacing)
- [wrap](ChoiceSetInput.md#wrap)
- [choicesProperty](ChoiceSetInput.md#choicesproperty)
- [errorMessageProperty](ChoiceSetInput.md#errormessageproperty)
- [filterModeProperty](ChoiceSetInput.md#filtermodeproperty)
- [filterTypeProperty](ChoiceSetInput.md#filtertypeproperty)
- [heightProperty](ChoiceSetInput.md#heightproperty)
- [horizontalAlignmentProperty](ChoiceSetInput.md#horizontalalignmentproperty)
- [idProperty](ChoiceSetInput.md#idproperty)
- [isMultiSelectProperty](ChoiceSetInput.md#ismultiselectproperty)
- [isRequiredProperty](ChoiceSetInput.md#isrequiredproperty)
- [isVisibleProperty](ChoiceSetInput.md#isvisibleproperty)
- [labelProperty](ChoiceSetInput.md#labelproperty)
- [langProperty](ChoiceSetInput.md#langproperty)
- [onRegisterCustomProperties](ChoiceSetInput.md#onregistercustomproperties)
- [placeholderProperty](ChoiceSetInput.md#placeholderproperty)
- [requiresProperty](ChoiceSetInput.md#requiresproperty)
- [rulesProperty](ChoiceSetInput.md#rulesproperty)
- [separatorProperty](ChoiceSetInput.md#separatorproperty)
- [showClearProperty](ChoiceSetInput.md#showclearproperty)
- [spacingProperty](ChoiceSetInput.md#spacingproperty)
- [styleProperty](ChoiceSetInput.md#styleproperty)
- [typeNameProperty](ChoiceSetInput.md#typenameproperty)
- [valueProperty](ChoiceSetInput.md#valueproperty)
- [wrapProperty](ChoiceSetInput.md#wrapproperty)

### Accessors

- [allowCustomPadding](ChoiceSetInput.md#allowcustompadding)
- [defaultStyle](ChoiceSetInput.md#defaultstyle)
- [hasVisibleSeparator](ChoiceSetInput.md#hasvisibleseparator)
- [hostConfig](ChoiceSetInput.md#hostconfig)
- [index](ChoiceSetInput.md#index)
- [inputControlContainerElement](ChoiceSetInput.md#inputcontrolcontainerelement)
- [isCompact](ChoiceSetInput.md#iscompact)
- [isInline](ChoiceSetInput.md#isinline)
- [isInteractive](ChoiceSetInput.md#isinteractive)
- [isNullable](ChoiceSetInput.md#isnullable)
- [isStandalone](ChoiceSetInput.md#isstandalone)
- [isVisible](ChoiceSetInput.md#isvisible)
- [lang](ChoiceSetInput.md#lang)
- [parent](ChoiceSetInput.md#parent)
- [renderedElement](ChoiceSetInput.md#renderedelement)
- [renderedInputControlElement](ChoiceSetInput.md#renderedinputcontrolelement)
- [requires](ChoiceSetInput.md#requires)
- [separatorElement](ChoiceSetInput.md#separatorelement)
- [separatorOrientation](ChoiceSetInput.md#separatororientation)
- [style](ChoiceSetInput.md#style)
- [useDefaultSizing](ChoiceSetInput.md#usedefaultsizing)
- [value](ChoiceSetInput.md#value)

### Methods

- [adjustRenderedElementSize](ChoiceSetInput.md#adjustrenderedelementsize)
- [applyPadding](ChoiceSetInput.md#applypadding)
- [asString](ChoiceSetInput.md#asstring)
- [createPlaceholderElement](ChoiceSetInput.md#createplaceholderelement)
- [focus](ChoiceSetInput.md#focus)
- [getActionAt](ChoiceSetInput.md#getactionat)
- [getActionById](ChoiceSetInput.md#getactionbyid)
- [getActionCount](ChoiceSetInput.md#getactioncount)
- [getAllInputs](ChoiceSetInput.md#getallinputs)
- [getAllLabelIds](ChoiceSetInput.md#getalllabelids)
- [getCustomProperty](ChoiceSetInput.md#getcustomproperty)
- [getDefaultPadding](ChoiceSetInput.md#getdefaultpadding)
- [getDefaultSerializationContext](ChoiceSetInput.md#getdefaultserializationcontext)
- [getEffectivePadding](ChoiceSetInput.md#geteffectivepadding)
- [getEffectiveStyle](ChoiceSetInput.md#geteffectivestyle)
- [getEffectiveStyleDefinition](ChoiceSetInput.md#geteffectivestyledefinition)
- [getElementById](ChoiceSetInput.md#getelementbyid)
- [getForbiddenActionTypes](ChoiceSetInput.md#getforbiddenactiontypes)
- [getHasBackground](ChoiceSetInput.md#gethasbackground)
- [getImmediateSurroundingPadding](ChoiceSetInput.md#getimmediatesurroundingpadding)
- [getJsonTypeName](ChoiceSetInput.md#getjsontypename)
- [getPadding](ChoiceSetInput.md#getpadding)
- [getParentContainer](ChoiceSetInput.md#getparentcontainer)
- [getResourceInformation](ChoiceSetInput.md#getresourceinformation)
- [getRootElement](ChoiceSetInput.md#getrootelement)
- [getRootObject](ChoiceSetInput.md#getrootobject)
- [getSchema](ChoiceSetInput.md#getschema)
- [getSchemaKey](ChoiceSetInput.md#getschemakey)
- [getValue](ChoiceSetInput.md#getvalue)
- [hasAllDefaultValues](ChoiceSetInput.md#hasalldefaultvalues)
- [hasDefaultValue](ChoiceSetInput.md#hasdefaultvalue)
- [indexOf](ChoiceSetInput.md#indexof)
- [internalParse](ChoiceSetInput.md#internalparse)
- [internalRender](ChoiceSetInput.md#internalrender)
- [internalToJSON](ChoiceSetInput.md#internaltojson)
- [internalValidateProperties](ChoiceSetInput.md#internalvalidateproperties)
- [isAtTheVeryBottom](ChoiceSetInput.md#isattheverybottom)
- [isAtTheVeryLeft](ChoiceSetInput.md#isattheveryleft)
- [isAtTheVeryRight](ChoiceSetInput.md#isattheveryright)
- [isAtTheVeryTop](ChoiceSetInput.md#isattheverytop)
- [isBleeding](ChoiceSetInput.md#isbleeding)
- [isBleedingAtBottom](ChoiceSetInput.md#isbleedingatbottom)
- [isBleedingAtTop](ChoiceSetInput.md#isbleedingattop)
- [isBottomElement](ChoiceSetInput.md#isbottomelement)
- [isDesignMode](ChoiceSetInput.md#isdesignmode)
- [isDisplayed](ChoiceSetInput.md#isdisplayed)
- [isFirstElement](ChoiceSetInput.md#isfirstelement)
- [isHiddenDueToOverflow](ChoiceSetInput.md#ishiddenduetooverflow)
- [isLastElement](ChoiceSetInput.md#islastelement)
- [isLeftMostElement](ChoiceSetInput.md#isleftmostelement)
- [isRightMostElement](ChoiceSetInput.md#isrightmostelement)
- [isSet](ChoiceSetInput.md#isset)
- [isTopElement](ChoiceSetInput.md#istopelement)
- [isValid](ChoiceSetInput.md#isvalid)
- [overrideInternalRender](ChoiceSetInput.md#overrideinternalrender)
- [parse](ChoiceSetInput.md#parse)
- [populateSchema](ChoiceSetInput.md#populateschema)
- [preProcessPropertyValue](ChoiceSetInput.md#preprocesspropertyvalue)
- [remove](ChoiceSetInput.md#remove)
- [render](ChoiceSetInput.md#render)
- [resetDefaultValues](ChoiceSetInput.md#resetdefaultvalues)
- [resetValidationFailureCue](ChoiceSetInput.md#resetvalidationfailurecue)
- [setCustomProperty](ChoiceSetInput.md#setcustomproperty)
- [setPadding](ChoiceSetInput.md#setpadding)
- [setParent](ChoiceSetInput.md#setparent)
- [setShouldFallback](ChoiceSetInput.md#setshouldfallback)
- [setValue](ChoiceSetInput.md#setvalue)
- [shouldFallback](ChoiceSetInput.md#shouldfallback)
- [shouldSerialize](ChoiceSetInput.md#shouldserialize)
- [showValidationErrorMessage](ChoiceSetInput.md#showvalidationerrormessage)
- [toJSON](ChoiceSetInput.md#tojson)
- [truncateOverflow](ChoiceSetInput.md#truncateoverflow)
- [undoOverflowTruncation](ChoiceSetInput.md#undooverflowtruncation)
- [updateInputControlAriaLabelledBy](ChoiceSetInput.md#updateinputcontrolarialabelledby)
- [updateLayout](ChoiceSetInput.md#updatelayout)
- [validateProperties](ChoiceSetInput.md#validateproperties)
- [validateValue](ChoiceSetInput.md#validatevalue)
- [valueChanged](ChoiceSetInput.md#valuechanged)

## Constructors

### constructor

• **new ChoiceSetInput**()

#### Inherited from

[Input](Input.md).[constructor](Input.md#constructor)

#### Defined in

[serialization.ts:951](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L951)

## Properties

### \_parent

• `Protected` `Optional` **\_parent**: [`CardObject`](CardObject.md)

#### Inherited from

[Input](Input.md).[_parent](Input.md#_parent)

#### Defined in

[card-object.ts:63](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L63)

___

### \_renderedElement

• `Protected` `Optional` **\_renderedElement**: `HTMLElement`

#### Inherited from

[Input](Input.md).[_renderedElement](Input.md#_renderedelement)

#### Defined in

[card-object.ts:64](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L64)

___

### choices

• **choices**: [`Choice`](Choice.md)[] = `[]`

#### Defined in

[card-elements.ts:3189](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3189)

___

### customCssSelector

• `Optional` **customCssSelector**: `string`

#### Inherited from

[Input](Input.md).[customCssSelector](Input.md#customcssselector)

#### Defined in

[card-elements.ts:426](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L426)

___

### defaultValue

• `Optional` **defaultValue**: `string`

#### Defined in

[card-elements.ts:3153](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3153)

___

### errorMessage

• `Optional` **errorMessage**: `string`

#### Inherited from

[Input](Input.md).[errorMessage](Input.md#errormessage)

#### Defined in

[card-elements.ts:2515](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2515)

___

### filterMode

• `Optional` **filterMode**: `string`

#### Defined in

[card-elements.ts:3150](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3150)

___

### filterType

• `Optional` **filterType**: `string`

#### Defined in

[card-elements.ts:3147](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3147)

___

### height

• **height**: [`CardElementHeight`](../README.md#cardelementheight)

#### Inherited from

[Input](Input.md).[height](Input.md#height)

#### Defined in

[card-elements.ts:149](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L149)

___

### horizontalAlignment

• **horizontalAlignment**: [`HorizontalAlignment`](../enums/HorizontalAlignment.md)

#### Inherited from

[Input](Input.md).[horizontalAlignment](Input.md#horizontalalignment)

#### Defined in

[card-elements.ts:140](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L140)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[Input](Input.md).[id](Input.md#id)

#### Defined in

[card-object.ts:52](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L52)

___

### isMultiSelect

• **isMultiSelect**: `boolean` = `false`

#### Defined in

[card-elements.ts:3180](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3180)

___

### isRequired

• **isRequired**: `boolean`

#### Inherited from

[Input](Input.md).[isRequired](Input.md#isrequired)

#### Defined in

[card-elements.ts:2512](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2512)

___

### label

• `Optional` **label**: `string`

#### Inherited from

[Input](Input.md).[label](Input.md#label)

#### Defined in

[card-elements.ts:2509](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2509)

___

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[Input](Input.md).[maxVersion](Input.md#maxversion)

#### Defined in

[serialization.ts:949](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L949)

___

### onPreProcessPropertyValue

• `Optional` **onPreProcessPropertyValue**: (`sender`: [`CardObject`](CardObject.md), `property`: [`PropertyDefinition`](PropertyDefinition.md), `value`: `any`) => `any`

#### Type declaration

▸ (`sender`, `property`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`CardObject`](CardObject.md) |
| `property` | [`PropertyDefinition`](PropertyDefinition.md) |
| `value` | `any` |

##### Returns

`any`

#### Inherited from

[Input](Input.md).[onPreProcessPropertyValue](Input.md#onpreprocesspropertyvalue)

#### Defined in

[card-object.ts:66](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L66)

___

### onValueChanged

• **onValueChanged**: (`sender`: [`Input`](Input.md)) => `void`

#### Type declaration

▸ (`sender`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`Input`](Input.md) |

##### Returns

`void`

#### Inherited from

[Input](Input.md).[onValueChanged](Input.md#onvaluechanged)

#### Defined in

[card-elements.ts:2683](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2683)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Defined in

[card-elements.ts:3183](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3183)

___

### rules

• **rules**: [`RuleParam`](RuleParam.md)[]

#### Inherited from

[Input](Input.md).[rules](Input.md#rules)

#### Defined in

[card-elements.ts:201](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L201)

___

### separator

• **separator**: `boolean`

#### Inherited from

[Input](Input.md).[separator](Input.md#separator)

#### Defined in

[card-elements.ts:146](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L146)

___

### showClear

• **showClear**: `boolean` = `false`

#### Defined in

[card-elements.ts:3144](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3144)

___

### spacing

• **spacing**: [`Spacing`](../enums/Spacing.md)

#### Inherited from

[Input](Input.md).[spacing](Input.md#spacing)

#### Defined in

[card-elements.ts:143](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L143)

___

### wrap

• **wrap**: `boolean` = `false`

#### Defined in

[card-elements.ts:3186](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3186)

___

### choicesProperty

▪ `Static` `Readonly` **choicesProperty**: [`SerializableObjectCollectionProperty`](SerializableObjectCollectionProperty.md)

#### Defined in

[card-elements.ts:3110](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3110)

___

### errorMessageProperty

▪ `Static` `Readonly` **errorMessageProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[Input](Input.md).[errorMessageProperty](Input.md#errormessageproperty)

#### Defined in

[card-elements.ts:2506](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2506)

___

### filterModeProperty

▪ `Static` `Readonly` **filterModeProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Defined in

[card-elements.ts:3134](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3134)

___

### filterTypeProperty

▪ `Static` `Readonly` **filterTypeProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Defined in

[card-elements.ts:3124](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3124)

___

### heightProperty

▪ `Static` `Readonly` **heightProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Inherited from

[Input](Input.md).[heightProperty](Input.md#heightproperty)

#### Defined in

[card-elements.ts:120](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L120)

___

### horizontalAlignmentProperty

▪ `Static` `Readonly` **horizontalAlignmentProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`HorizontalAlignment`](../enums/HorizontalAlignment.md)\>

#### Inherited from

[Input](Input.md).[horizontalAlignmentProperty](Input.md#horizontalalignmentproperty)

#### Defined in

[card-elements.ts:128](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L128)

___

### idProperty

▪ `Static` `Readonly` **idProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[Input](Input.md).[idProperty](Input.md#idproperty)

#### Defined in

[card-object.ts:40](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L40)

___

### isMultiSelectProperty

▪ `Static` `Readonly` **isMultiSelectProperty**: [`BoolProperty`](BoolProperty.md)

#### Defined in

[card-elements.ts:3120](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3120)

___

### isRequiredProperty

▪ `Static` `Readonly` **isRequiredProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[Input](Input.md).[isRequiredProperty](Input.md#isrequiredproperty)

#### Defined in

[card-elements.ts:2505](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2505)

___

### isVisibleProperty

▪ `Static` `Readonly` **isVisibleProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[Input](Input.md).[isVisibleProperty](Input.md#isvisibleproperty)

#### Defined in

[card-elements.ts:117](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L117)

___

### labelProperty

▪ `Static` `Readonly` **labelProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[Input](Input.md).[labelProperty](Input.md#labelproperty)

#### Defined in

[card-elements.ts:2504](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2504)

___

### langProperty

▪ `Static` `Readonly` **langProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[Input](Input.md).[langProperty](Input.md#langproperty)

#### Defined in

[card-elements.ts:116](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L116)

___

### onRegisterCustomProperties

▪ `Static` `Optional` **onRegisterCustomProperties**: (`sender`: [`SerializableObject`](SerializableObject.md), `schema`: [`SerializableObjectSchema`](SerializableObjectSchema.md)) => `void`

#### Type declaration

▸ (`sender`, `schema`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `schema` | [`SerializableObjectSchema`](SerializableObjectSchema.md) |

##### Returns

`void`

#### Inherited from

[Input](Input.md).[onRegisterCustomProperties](Input.md#onregistercustomproperties)

#### Defined in

[serialization.ts:809](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L809)

___

### placeholderProperty

▪ `Static` `Readonly` **placeholderProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:3121](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3121)

___

### requiresProperty

▪ `Static` `Readonly` **requiresProperty**: [`SerializableObjectProperty`](SerializableObjectProperty.md)

#### Inherited from

[Input](Input.md).[requiresProperty](Input.md#requiresproperty)

#### Defined in

[card-object.ts:41](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L41)

___

### rulesProperty

▪ `Static` `Readonly` **rulesProperty**: [`SerializableObjectCollectionProperty`](SerializableObjectCollectionProperty.md)

#### Inherited from

[Input](Input.md).[rulesProperty](Input.md#rulesproperty)

#### Defined in

[card-elements.ts:119](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L119)

___

### separatorProperty

▪ `Static` `Readonly` **separatorProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[Input](Input.md).[separatorProperty](Input.md#separatorproperty)

#### Defined in

[card-elements.ts:118](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L118)

___

### showClearProperty

▪ `Static` `Readonly` **showClearProperty**: [`BoolProperty`](BoolProperty.md)

#### Defined in

[card-elements.ts:3123](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3123)

___

### spacingProperty

▪ `Static` `Readonly` **spacingProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`Spacing`](../enums/Spacing.md)\>

#### Inherited from

[Input](Input.md).[spacingProperty](Input.md#spacingproperty)

#### Defined in

[card-elements.ts:133](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L133)

___

### styleProperty

▪ `Static` `Readonly` **styleProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Defined in

[card-elements.ts:3111](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3111)

___

### typeNameProperty

▪ `Static` `Readonly` **typeNameProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[Input](Input.md).[typeNameProperty](Input.md#typenameproperty)

#### Defined in

[card-object.ts:31](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L31)

___

### valueProperty

▪ `Static` `Readonly` **valueProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:3109](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3109)

___

### wrapProperty

▪ `Static` `Readonly` **wrapProperty**: [`BoolProperty`](BoolProperty.md)

#### Defined in

[card-elements.ts:3122](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3122)

## Accessors

### allowCustomPadding

• `Protected` `get` **allowCustomPadding**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Input.allowCustomPadding

#### Defined in

[card-elements.ts:414](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L414)

___

### defaultStyle

• `Protected` `get` **defaultStyle**(): `string`

#### Returns

`string`

#### Inherited from

Input.defaultStyle

#### Defined in

[card-elements.ts:422](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L422)

___

### hasVisibleSeparator

• `get` **hasVisibleSeparator**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Input.hasVisibleSeparator

#### Defined in

[card-elements.ts:695](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L695)

___

### hostConfig

• `get` **hostConfig**(): [`HostConfig`](HostConfig.md)

#### Returns

[`HostConfig`](HostConfig.md)

#### Inherited from

Input.hostConfig

#### Defined in

[card-elements.ts:656](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L656)

• `set` **hostConfig**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`HostConfig`](HostConfig.md) |

#### Returns

`void`

#### Inherited from

Input.hostConfig

#### Defined in

[card-elements.ts:670](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L670)

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

Input.index

#### Defined in

[card-elements.ts:674](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L674)

___

### inputControlContainerElement

• `Protected` `get` **inputControlContainerElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Inherited from

Input.inputControlContainerElement

#### Defined in

[card-elements.ts:2568](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2568)

___

### isCompact

• `get` **isCompact**(): `boolean`

#### Returns

`boolean`

#### Defined in

[card-elements.ts:3171](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3171)

• `set` **isCompact**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[card-elements.ts:3175](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3175)

___

### isInline

• `get` **isInline**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Input.isInline

#### Defined in

[card-elements.ts:691](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L691)

___

### isInteractive

• `get` **isInteractive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Input.isInteractive

#### Defined in

[card-elements.ts:2744](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2744)

___

### isNullable

• `Protected` `get` **isNullable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Input.isNullable

#### Defined in

[card-elements.ts:2560](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2560)

___

### isStandalone

• `get` **isStandalone**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Input.isStandalone

#### Defined in

[card-elements.ts:687](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L687)

___

### isVisible

• `get` **isVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Input.isVisible

#### Defined in

[card-elements.ts:172](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L172)

• `set` **isVisible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Input.isVisible

#### Defined in

[card-elements.ts:177](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L177)

___

### lang

• `get` **lang**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Input.lang

#### Defined in

[card-elements.ts:151](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L151)

• `set` **lang**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

Input.lang

#### Defined in

[card-elements.ts:168](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L168)

___

### parent

• `get` **parent**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Inherited from

Input.parent

#### Defined in

[card-elements.ts:708](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L708)

___

### renderedElement

• `get` **renderedElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

Input.renderedElement

#### Defined in

[card-object.ts:142](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L142)

___

### renderedInputControlElement

• `Protected` `get` **renderedInputControlElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

Input.renderedInputControlElement

#### Defined in

[card-elements.ts:2564](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2564)

___

### requires

• `get` **requires**(): `HostCapabilities`

#### Returns

`HostCapabilities`

#### Inherited from

Input.requires

#### Defined in

[card-object.ts:54](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L54)

___

### separatorElement

• `get` **separatorElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

Input.separatorElement

#### Defined in

[card-elements.ts:704](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L704)

___

### separatorOrientation

• `Protected` `get` **separatorOrientation**(): [`Orientation`](../enums/Orientation.md)

#### Returns

[`Orientation`](../enums/Orientation.md)

#### Inherited from

Input.separatorOrientation

#### Defined in

[card-elements.ts:418](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L418)

___

### style

• `get` **style**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[card-elements.ts:3158](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3158)

• `set` **style**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[card-elements.ts:3162](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3162)

___

### useDefaultSizing

• `Protected` `get` **useDefaultSizing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Input.useDefaultSizing

#### Defined in

[card-elements.ts:410](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L410)

___

### value

• `get` **value**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Overrides

Input.value

#### Defined in

[card-elements.ts:3427](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3427)

## Methods

### adjustRenderedElementSize

▸ `Protected` **adjustRenderedElementSize**(`renderedElement`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderedElement` | `HTMLElement` |

#### Returns

`void`

#### Inherited from

[Input](Input.md).[adjustRenderedElementSize](Input.md#adjustrenderedelementsize)

#### Defined in

[card-elements.ts:335](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L335)

___

### applyPadding

▸ `Protected` **applyPadding**(): `void`

#### Returns

`void`

#### Inherited from

[Input](Input.md).[applyPadding](Input.md#applypadding)

#### Defined in

[card-elements.ts:354](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L354)

___

### asString

▸ **asString**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[Input](Input.md).[asString](Input.md#asstring)

#### Defined in

[card-elements.ts:432](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L432)

___

### createPlaceholderElement

▸ `Protected` **createPlaceholderElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Inherited from

[Input](Input.md).[createPlaceholderElement](Input.md#createplaceholderelement)

#### Defined in

[card-elements.ts:320](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L320)

___

### focus

▸ **focus**(): `void`

#### Returns

`void`

#### Overrides

[Input](Input.md).[focus](Input.md#focus)

#### Defined in

[card-elements.ts:3392](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3392)

___

### getActionAt

▸ **getActionAt**(`index`): `undefined` \| [`Action`](Action.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| [`Action`](Action.md)

#### Inherited from

[Input](Input.md).[getActionAt](Input.md#getactionat)

#### Defined in

[card-elements.ts:511](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L511)

___

### getActionById

▸ **getActionById**(`id`): `undefined` \| [`Action`](Action.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Action`](Action.md)

#### Inherited from

[Input](Input.md).[getActionById](Input.md#getactionbyid)

#### Defined in

[card-elements.ts:646](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L646)

___

### getActionCount

▸ **getActionCount**(): `number`

#### Returns

`number`

#### Inherited from

[Input](Input.md).[getActionCount](Input.md#getactioncount)

#### Defined in

[card-elements.ts:507](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L507)

___

### getAllInputs

▸ **getAllInputs**(`processActions?`): [`Input`](Input.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `processActions` | `boolean` | `true` |

#### Returns

[`Input`](Input.md)[]

#### Inherited from

[Input](Input.md).[getAllInputs](Input.md#getallinputs)

#### Defined in

[card-elements.ts:2738](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2738)

___

### getAllLabelIds

▸ `Protected` **getAllLabelIds**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Input](Input.md).[getAllLabelIds](Input.md#getalllabelids)

#### Defined in

[card-elements.ts:2525](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2525)

___

### getCustomProperty

▸ **getCustomProperty**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[Input](Input.md).[getCustomProperty](Input.md#getcustomproperty)

#### Defined in

[serialization.ts:1040](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1040)

___

### getDefaultPadding

▸ `Protected` **getDefaultPadding**(): [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

[`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[Input](Input.md).[getDefaultPadding](Input.md#getdefaultpadding)

#### Defined in

[card-elements.ts:390](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L390)

___

### getDefaultSerializationContext

▸ `Protected` **getDefaultSerializationContext**(): [`BaseSerializationContext`](BaseSerializationContext.md)

#### Returns

[`BaseSerializationContext`](BaseSerializationContext.md)

#### Inherited from

[Input](Input.md).[getDefaultSerializationContext](Input.md#getdefaultserializationcontext)

#### Defined in

[card-elements.ts:316](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L316)

___

### getEffectivePadding

▸ **getEffectivePadding**(): [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

[`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[Input](Input.md).[getEffectivePadding](Input.md#geteffectivepadding)

#### Defined in

[card-elements.ts:650](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L650)

___

### getEffectiveStyle

▸ **getEffectiveStyle**(): `string`

#### Returns

`string`

#### Inherited from

[Input](Input.md).[getEffectiveStyle](Input.md#geteffectivestyle)

#### Defined in

[card-elements.ts:440](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L440)

___

### getEffectiveStyleDefinition

▸ **getEffectiveStyleDefinition**(): [`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Returns

[`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Inherited from

[Input](Input.md).[getEffectiveStyleDefinition](Input.md#geteffectivestyledefinition)

#### Defined in

[card-elements.ts:448](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L448)

___

### getElementById

▸ **getElementById**(`id`): `undefined` \| [`CardElement`](CardElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Inherited from

[Input](Input.md).[getElementById](Input.md#getelementbyid)

#### Defined in

[card-elements.ts:642](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L642)

___

### getForbiddenActionTypes

▸ **getForbiddenActionTypes**(): [`ActionType`](../README.md#actiontype)[]

#### Returns

[`ActionType`](../README.md#actiontype)[]

#### Inherited from

[Input](Input.md).[getForbiddenActionTypes](Input.md#getforbiddenactiontypes)

#### Defined in

[card-elements.ts:452](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L452)

___

### getHasBackground

▸ `Protected` **getHasBackground**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[getHasBackground](Input.md#gethasbackground)

#### Defined in

[card-elements.ts:394](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L394)

___

### getImmediateSurroundingPadding

▸ **getImmediateSurroundingPadding**(`result`, `processTop?`, `processRight?`, `processBottom?`, `processLeft?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `result` | [`PaddingDefinition`](PaddingDefinition.md) | `undefined` |
| `processTop` | `boolean` | `true` |
| `processRight` | `boolean` | `true` |
| `processBottom` | `boolean` | `true` |
| `processLeft` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[Input](Input.md).[getImmediateSurroundingPadding](Input.md#getimmediatesurroundingpadding)

#### Defined in

[card-elements.ts:456](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L456)

___

### getJsonTypeName

▸ **getJsonTypeName**(): `string`

#### Returns

`string`

#### Overrides

[Input](Input.md).[getJsonTypeName](Input.md#getjsontypename)

#### Defined in

[card-elements.ts:3388](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3388)

___

### getPadding

▸ `Protected` **getPadding**(): `undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

`undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[Input](Input.md).[getPadding](Input.md#getpadding)

#### Defined in

[card-elements.ts:398](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L398)

___

### getParentContainer

▸ **getParentContainer**(): `undefined` \| [`Container`](Container.md)

#### Returns

`undefined` \| [`Container`](Container.md)

#### Inherited from

[Input](Input.md).[getParentContainer](Input.md#getparentcontainer)

#### Defined in

[card-elements.ts:620](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L620)

___

### getResourceInformation

▸ **getResourceInformation**(): [`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Returns

[`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Inherited from

[Input](Input.md).[getResourceInformation](Input.md#getresourceinformation)

#### Defined in

[card-elements.ts:638](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L638)

___

### getRootElement

▸ **getRootElement**(): [`CardElement`](CardElement.md)

#### Returns

[`CardElement`](CardElement.md)

#### Inherited from

[Input](Input.md).[getRootElement](Input.md#getrootelement)

#### Defined in

[card-elements.ts:616](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L616)

___

### getRootObject

▸ **getRootObject**(): [`CardObject`](CardObject.md)

#### Returns

[`CardObject`](CardObject.md)

#### Inherited from

[Input](Input.md).[getRootObject](Input.md#getrootobject)

#### Defined in

[card-object.ts:102](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L102)

___

### getSchema

▸ **getSchema**(): [`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Returns

[`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Inherited from

[Input](Input.md).[getSchema](Input.md#getschema)

#### Defined in

[serialization.ts:1044](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1044)

___

### getSchemaKey

▸ `Protected` **getSchemaKey**(): `string`

#### Returns

`string`

#### Inherited from

[Input](Input.md).[getSchemaKey](Input.md#getschemakey)

#### Defined in

[card-object.ts:47](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L47)

___

### getValue

▸ `Protected` **getValue**(`property`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`PropertyDefinition`](PropertyDefinition.md) |

#### Returns

`any`

#### Inherited from

[Input](Input.md).[getValue](Input.md#getvalue)

#### Defined in

[serialization.ts:875](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L875)

___

### hasAllDefaultValues

▸ **hasAllDefaultValues**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[hasAllDefaultValues](Input.md#hasalldefaultvalues)

#### Defined in

[serialization.ts:1005](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1005)

___

### hasDefaultValue

▸ **hasDefaultValue**(`property`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`PropertyDefinition`](PropertyDefinition.md) |

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[hasDefaultValue](Input.md#hasdefaultvalue)

#### Defined in

[serialization.ts:1001](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1001)

___

### indexOf

▸ **indexOf**(`cardElement`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardElement` | [`CardElement`](CardElement.md) |

#### Returns

`number`

#### Inherited from

[Input](Input.md).[indexOf](Input.md#indexof)

#### Defined in

[card-elements.ts:554](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L554)

___

### internalParse

▸ `Protected` **internalParse**(`source`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`void`

#### Inherited from

[Input](Input.md).[internalParse](Input.md#internalparse)

#### Defined in

[serialization.ts:888](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L888)

___

### internalRender

▸ `Protected` **internalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Overrides

[Input](Input.md).[internalRender](Input.md#internalrender)

#### Defined in

[card-elements.ts:3327](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3327)

___

### internalToJSON

▸ `Protected` **internalToJSON**(`target`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`void`

#### Inherited from

[Input](Input.md).[internalToJSON](Input.md#internaltojson)

#### Defined in

[serialization.ts:927](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L927)

___

### internalValidateProperties

▸ **internalValidateProperties**(`context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ValidationResults`](ValidationResults.md) |

#### Returns

`void`

#### Overrides

[Input](Input.md).[internalValidateProperties](Input.md#internalvalidateproperties)

#### Defined in

[card-elements.ts:3403](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3403)

___

### isAtTheVeryBottom

▸ **isAtTheVeryBottom**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isAtTheVeryBottom](Input.md#isattheverybottom)

#### Defined in

[card-elements.ts:584](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L584)

___

### isAtTheVeryLeft

▸ **isAtTheVeryLeft**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isAtTheVeryLeft](Input.md#isattheveryleft)

#### Defined in

[card-elements.ts:572](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L572)

___

### isAtTheVeryRight

▸ **isAtTheVeryRight**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isAtTheVeryRight](Input.md#isattheveryright)

#### Defined in

[card-elements.ts:576](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L576)

___

### isAtTheVeryTop

▸ **isAtTheVeryTop**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isAtTheVeryTop](Input.md#isattheverytop)

#### Defined in

[card-elements.ts:580](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L580)

___

### isBleeding

▸ **isBleeding**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isBleeding](Input.md#isbleeding)

#### Defined in

[card-elements.ts:436](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L436)

___

### isBleedingAtBottom

▸ **isBleedingAtBottom**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isBleedingAtBottom](Input.md#isbleedingatbottom)

#### Defined in

[card-elements.ts:592](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L592)

___

### isBleedingAtTop

▸ **isBleedingAtTop**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isBleedingAtTop](Input.md#isbleedingattop)

#### Defined in

[card-elements.ts:588](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L588)

___

### isBottomElement

▸ **isBottomElement**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`CardElement`](CardElement.md) |

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isBottomElement](Input.md#isbottomelement)

#### Defined in

[card-elements.ts:608](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L608)

___

### isDesignMode

▸ **isDesignMode**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isDesignMode](Input.md#isdesignmode)

#### Defined in

[card-elements.ts:558](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L558)

___

### isDisplayed

▸ `Protected` **isDisplayed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isDisplayed](Input.md#isdisplayed)

#### Defined in

[card-elements.ts:344](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L344)

___

### isFirstElement

▸ **isFirstElement**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`CardElement`](CardElement.md) |

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isFirstElement](Input.md#isfirstelement)

#### Defined in

[card-elements.ts:564](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L564)

___

### isHiddenDueToOverflow

▸ **isHiddenDueToOverflow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isHiddenDueToOverflow](Input.md#ishiddenduetooverflow)

#### Defined in

[card-elements.ts:612](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L612)

___

### isLastElement

▸ **isLastElement**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`CardElement`](CardElement.md) |

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isLastElement](Input.md#islastelement)

#### Defined in

[card-elements.ts:568](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L568)

___

### isLeftMostElement

▸ **isLeftMostElement**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`CardElement`](CardElement.md) |

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isLeftMostElement](Input.md#isleftmostelement)

#### Defined in

[card-elements.ts:596](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L596)

___

### isRightMostElement

▸ **isRightMostElement**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`CardElement`](CardElement.md) |

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isRightMostElement](Input.md#isrightmostelement)

#### Defined in

[card-elements.ts:600](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L600)

___

### isSet

▸ **isSet**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Input](Input.md).[isSet](Input.md#isset)

#### Defined in

[card-elements.ts:3423](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3423)

___

### isTopElement

▸ **isTopElement**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`CardElement`](CardElement.md) |

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isTopElement](Input.md#istopelement)

#### Defined in

[card-elements.ts:604](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L604)

___

### isValid

▸ **isValid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[isValid](Input.md#isvalid)

#### Defined in

[card-elements.ts:2693](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2693)

___

### overrideInternalRender

▸ `Protected` **overrideInternalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[Input](Input.md).[overrideInternalRender](Input.md#overrideinternalrender)

#### Defined in

[card-elements.ts:2572](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2572)

___

### parse

▸ **parse**(`source`, `context?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `any` |
| `context?` | [`SerializationContext`](SerializationContext.md) |

#### Returns

`void`

#### Inherited from

[Input](Input.md).[parse](Input.md#parse)

#### Defined in

[card-elements.ts:428](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L428)

___

### populateSchema

▸ `Protected` **populateSchema**(`schema`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`SerializableObjectSchema`](SerializableObjectSchema.md) |

#### Returns

`void`

#### Inherited from

[Input](Input.md).[populateSchema](Input.md#populateschema)

#### Defined in

[serialization.ts:822](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L822)

___

### preProcessPropertyValue

▸ **preProcessPropertyValue**(`property`, `propertyValue?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`PropertyDefinition`](PropertyDefinition.md) |
| `propertyValue?` | `any` |

#### Returns

`any`

#### Inherited from

[Input](Input.md).[preProcessPropertyValue](Input.md#preprocesspropertyvalue)

#### Defined in

[card-object.ts:72](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L72)

___

### remove

▸ **remove**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[remove](Input.md#remove)

#### Defined in

[card-elements.ts:515](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L515)

___

### render

▸ **render**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[Input](Input.md).[render](Input.md#render)

#### Defined in

[card-elements.ts:523](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L523)

___

### resetDefaultValues

▸ **resetDefaultValues**(): `void`

#### Returns

`void`

#### Inherited from

[Input](Input.md).[resetDefaultValues](Input.md#resetdefaultvalues)

#### Defined in

[serialization.ts:1019](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1019)

___

### resetValidationFailureCue

▸ `Protected` **resetValidationFailureCue**(): `void`

#### Returns

`void`

#### Inherited from

[Input](Input.md).[resetValidationFailureCue](Input.md#resetvalidationfailurecue)

#### Defined in

[card-elements.ts:2650](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2650)

___

### setCustomProperty

▸ **setCustomProperty**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[Input](Input.md).[setCustomProperty](Input.md#setcustomproperty)

#### Defined in

[serialization.ts:1029](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1029)

___

### setPadding

▸ `Protected` **setPadding**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`PaddingDefinition`](PaddingDefinition.md) |

#### Returns

`void`

#### Inherited from

[Input](Input.md).[setPadding](Input.md#setpadding)

#### Defined in

[card-elements.ts:402](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L402)

___

### setParent

▸ **setParent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`CardObject`](CardObject.md) |

#### Returns

`void`

#### Inherited from

[Input](Input.md).[setParent](Input.md#setparent)

#### Defined in

[card-object.ts:90](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L90)

___

### setShouldFallback

▸ **setShouldFallback**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

[Input](Input.md).[setShouldFallback](Input.md#setshouldfallback)

#### Defined in

[card-object.ts:94](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L94)

___

### setValue

▸ `Protected` **setValue**(`property`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`PropertyDefinition`](PropertyDefinition.md) |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[Input](Input.md).[setValue](Input.md#setvalue)

#### Defined in

[serialization.ts:879](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L879)

___

### shouldFallback

▸ **shouldFallback**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[shouldFallback](Input.md#shouldfallback)

#### Defined in

[card-object.ts:98](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L98)

___

### shouldSerialize

▸ `Protected` **shouldSerialize**(`context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`SerializationContext`](SerializationContext.md) |

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[shouldSerialize](Input.md#shouldserialize)

#### Defined in

[card-elements.ts:406](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L406)

___

### showValidationErrorMessage

▸ `Protected` **showValidationErrorMessage**(): `void`

#### Returns

`void`

#### Inherited from

[Input](Input.md).[showValidationErrorMessage](Input.md#showvalidationerrormessage)

#### Defined in

[card-elements.ts:2664](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2664)

___

### toJSON

▸ **toJSON**(`context?`): `undefined` \| [`PropertyBag`](../README.md#propertybag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`undefined` \| [`PropertyBag`](../README.md#propertybag)

#### Inherited from

[Input](Input.md).[toJSON](Input.md#tojson)

#### Defined in

[serialization.ts:967](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L967)

___

### truncateOverflow

▸ `Protected` **truncateOverflow**(`maxHeight`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxHeight` | `number` |

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[truncateOverflow](Input.md#truncateoverflow)

#### Defined in

[card-elements.ts:378](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L378)

___

### undoOverflowTruncation

▸ `Protected` **undoOverflowTruncation**(): `void`

#### Returns

`void`

#### Inherited from

[Input](Input.md).[undoOverflowTruncation](Input.md#undooverflowtruncation)

#### Defined in

[card-elements.ts:388](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L388)

___

### updateInputControlAriaLabelledBy

▸ `Protected` **updateInputControlAriaLabelledBy**(): `void`

#### Returns

`void`

#### Overrides

[Input](Input.md).[updateInputControlAriaLabelledBy](Input.md#updateinputcontrolarialabelledby)

#### Defined in

[card-elements.ts:3302](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3302)

___

### updateLayout

▸ **updateLayout**(`processChildren?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `processChildren` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[Input](Input.md).[updateLayout](Input.md#updatelayout)

#### Defined in

[card-elements.ts:549](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L549)

___

### validateProperties

▸ **validateProperties**(): [`ValidationResults`](ValidationResults.md)

#### Returns

[`ValidationResults`](ValidationResults.md)

#### Inherited from

[Input](Input.md).[validateProperties](Input.md#validateproperties)

#### Defined in

[card-object.ts:130](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L130)

___

### validateValue

▸ **validateValue**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Input](Input.md).[validateValue](Input.md#validatevalue)

#### Defined in

[card-elements.ts:2724](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2724)

___

### valueChanged

▸ `Protected` **valueChanged**(): `void`

#### Returns

`void`

#### Inherited from

[Input](Input.md).[valueChanged](Input.md#valuechanged)

#### Defined in

[card-elements.ts:2638](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2638)
