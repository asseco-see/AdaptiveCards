[Adaptive Cards Javascript SDK](../README.md) / Input

# Class: Input

## Hierarchy

- [`CardElement`](CardElement.md)

  ↳ **`Input`**

  ↳↳ [`TextInput`](TextInput.md)

  ↳↳ [`ToggleInput`](ToggleInput.md)

  ↳↳ [`ChoiceSetInput`](ChoiceSetInput.md)

  ↳↳ [`NumberInput`](NumberInput.md)

  ↳↳ [`DateInput`](DateInput.md)

  ↳↳ [`TimeInput`](TimeInput.md)

  ↳↳ [`GenericInput`](GenericInput.md)

## Implements

- [`IInput`](../interfaces/IInput.md)

## Table of contents

### Constructors

- [constructor](Input.md#constructor)

### Properties

- [\_parent](Input.md#_parent)
- [\_renderedElement](Input.md#_renderedelement)
- [customCssSelector](Input.md#customcssselector)
- [errorMessage](Input.md#errormessage)
- [height](Input.md#height)
- [horizontalAlignment](Input.md#horizontalalignment)
- [id](Input.md#id)
- [isRequired](Input.md#isrequired)
- [label](Input.md#label)
- [maxVersion](Input.md#maxversion)
- [onPreProcessPropertyValue](Input.md#onpreprocesspropertyvalue)
- [onValueChanged](Input.md#onvaluechanged)
- [rules](Input.md#rules)
- [separator](Input.md#separator)
- [spacing](Input.md#spacing)
- [errorMessageProperty](Input.md#errormessageproperty)
- [heightProperty](Input.md#heightproperty)
- [horizontalAlignmentProperty](Input.md#horizontalalignmentproperty)
- [idProperty](Input.md#idproperty)
- [isRequiredProperty](Input.md#isrequiredproperty)
- [isVisibleProperty](Input.md#isvisibleproperty)
- [labelProperty](Input.md#labelproperty)
- [langProperty](Input.md#langproperty)
- [onRegisterCustomProperties](Input.md#onregistercustomproperties)
- [requiresProperty](Input.md#requiresproperty)
- [rulesProperty](Input.md#rulesproperty)
- [separatorProperty](Input.md#separatorproperty)
- [spacingProperty](Input.md#spacingproperty)
- [typeNameProperty](Input.md#typenameproperty)

### Accessors

- [allowCustomPadding](Input.md#allowcustompadding)
- [defaultStyle](Input.md#defaultstyle)
- [hasVisibleSeparator](Input.md#hasvisibleseparator)
- [hostConfig](Input.md#hostconfig)
- [index](Input.md#index)
- [inputControlContainerElement](Input.md#inputcontrolcontainerelement)
- [isInline](Input.md#isinline)
- [isInteractive](Input.md#isinteractive)
- [isNullable](Input.md#isnullable)
- [isStandalone](Input.md#isstandalone)
- [isVisible](Input.md#isvisible)
- [lang](Input.md#lang)
- [parent](Input.md#parent)
- [renderedElement](Input.md#renderedelement)
- [renderedInputControlElement](Input.md#renderedinputcontrolelement)
- [requires](Input.md#requires)
- [separatorElement](Input.md#separatorelement)
- [separatorOrientation](Input.md#separatororientation)
- [useDefaultSizing](Input.md#usedefaultsizing)
- [value](Input.md#value)

### Methods

- [adjustRenderedElementSize](Input.md#adjustrenderedelementsize)
- [applyPadding](Input.md#applypadding)
- [asString](Input.md#asstring)
- [createPlaceholderElement](Input.md#createplaceholderelement)
- [focus](Input.md#focus)
- [getActionAt](Input.md#getactionat)
- [getActionById](Input.md#getactionbyid)
- [getActionCount](Input.md#getactioncount)
- [getAllInputs](Input.md#getallinputs)
- [getAllLabelIds](Input.md#getalllabelids)
- [getCustomProperty](Input.md#getcustomproperty)
- [getDefaultPadding](Input.md#getdefaultpadding)
- [getDefaultSerializationContext](Input.md#getdefaultserializationcontext)
- [getEffectivePadding](Input.md#geteffectivepadding)
- [getEffectiveStyle](Input.md#geteffectivestyle)
- [getEffectiveStyleDefinition](Input.md#geteffectivestyledefinition)
- [getElementById](Input.md#getelementbyid)
- [getForbiddenActionTypes](Input.md#getforbiddenactiontypes)
- [getHasBackground](Input.md#gethasbackground)
- [getImmediateSurroundingPadding](Input.md#getimmediatesurroundingpadding)
- [getJsonTypeName](Input.md#getjsontypename)
- [getPadding](Input.md#getpadding)
- [getParentContainer](Input.md#getparentcontainer)
- [getResourceInformation](Input.md#getresourceinformation)
- [getRootElement](Input.md#getrootelement)
- [getRootObject](Input.md#getrootobject)
- [getSchema](Input.md#getschema)
- [getSchemaKey](Input.md#getschemakey)
- [getValue](Input.md#getvalue)
- [hasAllDefaultValues](Input.md#hasalldefaultvalues)
- [hasDefaultValue](Input.md#hasdefaultvalue)
- [indexOf](Input.md#indexof)
- [internalParse](Input.md#internalparse)
- [internalRender](Input.md#internalrender)
- [internalToJSON](Input.md#internaltojson)
- [internalValidateProperties](Input.md#internalvalidateproperties)
- [isAtTheVeryBottom](Input.md#isattheverybottom)
- [isAtTheVeryLeft](Input.md#isattheveryleft)
- [isAtTheVeryRight](Input.md#isattheveryright)
- [isAtTheVeryTop](Input.md#isattheverytop)
- [isBleeding](Input.md#isbleeding)
- [isBleedingAtBottom](Input.md#isbleedingatbottom)
- [isBleedingAtTop](Input.md#isbleedingattop)
- [isBottomElement](Input.md#isbottomelement)
- [isDesignMode](Input.md#isdesignmode)
- [isDisplayed](Input.md#isdisplayed)
- [isFirstElement](Input.md#isfirstelement)
- [isHiddenDueToOverflow](Input.md#ishiddenduetooverflow)
- [isLastElement](Input.md#islastelement)
- [isLeftMostElement](Input.md#isleftmostelement)
- [isRightMostElement](Input.md#isrightmostelement)
- [isSet](Input.md#isset)
- [isTopElement](Input.md#istopelement)
- [isValid](Input.md#isvalid)
- [overrideInternalRender](Input.md#overrideinternalrender)
- [parse](Input.md#parse)
- [populateSchema](Input.md#populateschema)
- [preProcessPropertyValue](Input.md#preprocesspropertyvalue)
- [remove](Input.md#remove)
- [render](Input.md#render)
- [resetDefaultValues](Input.md#resetdefaultvalues)
- [resetValidationFailureCue](Input.md#resetvalidationfailurecue)
- [setCustomProperty](Input.md#setcustomproperty)
- [setPadding](Input.md#setpadding)
- [setParent](Input.md#setparent)
- [setShouldFallback](Input.md#setshouldfallback)
- [setValue](Input.md#setvalue)
- [shouldFallback](Input.md#shouldfallback)
- [shouldSerialize](Input.md#shouldserialize)
- [showValidationErrorMessage](Input.md#showvalidationerrormessage)
- [toJSON](Input.md#tojson)
- [truncateOverflow](Input.md#truncateoverflow)
- [undoOverflowTruncation](Input.md#undooverflowtruncation)
- [updateInputControlAriaLabelledBy](Input.md#updateinputcontrolarialabelledby)
- [updateLayout](Input.md#updatelayout)
- [validateProperties](Input.md#validateproperties)
- [validateValue](Input.md#validatevalue)
- [valueChanged](Input.md#valuechanged)

## Constructors

### constructor

• **new Input**()

#### Inherited from

[CardElement](CardElement.md).[constructor](CardElement.md#constructor)

#### Defined in

[serialization.ts:951](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L951)

## Properties

### \_parent

• `Protected` `Optional` **\_parent**: [`CardObject`](CardObject.md)

#### Inherited from

[CardElement](CardElement.md).[_parent](CardElement.md#_parent)

#### Defined in

[card-object.ts:63](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L63)

___

### \_renderedElement

• `Protected` `Optional` **\_renderedElement**: `HTMLElement`

#### Inherited from

[CardElement](CardElement.md).[_renderedElement](CardElement.md#_renderedelement)

#### Defined in

[card-object.ts:64](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L64)

___

### customCssSelector

• `Optional` **customCssSelector**: `string`

#### Inherited from

[CardElement](CardElement.md).[customCssSelector](CardElement.md#customcssselector)

#### Defined in

[card-elements.ts:426](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L426)

___

### errorMessage

• `Optional` **errorMessage**: `string`

#### Defined in

[card-elements.ts:2515](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2515)

___

### height

• **height**: [`CardElementHeight`](../README.md#cardelementheight)

#### Inherited from

[CardElement](CardElement.md).[height](CardElement.md#height)

#### Defined in

[card-elements.ts:149](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L149)

___

### horizontalAlignment

• **horizontalAlignment**: [`HorizontalAlignment`](../enums/HorizontalAlignment.md)

#### Inherited from

[CardElement](CardElement.md).[horizontalAlignment](CardElement.md#horizontalalignment)

#### Defined in

[card-elements.ts:140](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L140)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IInput](../interfaces/IInput.md).[id](../interfaces/IInput.md#id)

#### Inherited from

[CardElement](CardElement.md).[id](CardElement.md#id)

#### Defined in

[card-object.ts:52](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L52)

___

### isRequired

• **isRequired**: `boolean`

#### Defined in

[card-elements.ts:2512](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2512)

___

### label

• `Optional` **label**: `string`

#### Defined in

[card-elements.ts:2509](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2509)

___

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[CardElement](CardElement.md).[maxVersion](CardElement.md#maxversion)

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

[CardElement](CardElement.md).[onPreProcessPropertyValue](CardElement.md#onpreprocesspropertyvalue)

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

#### Defined in

[card-elements.ts:2683](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2683)

___

### rules

• **rules**: [`RuleParam`](RuleParam.md)[]

#### Inherited from

[CardElement](CardElement.md).[rules](CardElement.md#rules)

#### Defined in

[card-elements.ts:201](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L201)

___

### separator

• **separator**: `boolean`

#### Inherited from

[CardElement](CardElement.md).[separator](CardElement.md#separator)

#### Defined in

[card-elements.ts:146](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L146)

___

### spacing

• **spacing**: [`Spacing`](../enums/Spacing.md)

#### Inherited from

[CardElement](CardElement.md).[spacing](CardElement.md#spacing)

#### Defined in

[card-elements.ts:143](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L143)

___

### errorMessageProperty

▪ `Static` `Readonly` **errorMessageProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:2506](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2506)

___

### heightProperty

▪ `Static` `Readonly` **heightProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Inherited from

[CardElement](CardElement.md).[heightProperty](CardElement.md#heightproperty)

#### Defined in

[card-elements.ts:120](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L120)

___

### horizontalAlignmentProperty

▪ `Static` `Readonly` **horizontalAlignmentProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`HorizontalAlignment`](../enums/HorizontalAlignment.md)\>

#### Inherited from

[CardElement](CardElement.md).[horizontalAlignmentProperty](CardElement.md#horizontalalignmentproperty)

#### Defined in

[card-elements.ts:128](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L128)

___

### idProperty

▪ `Static` `Readonly` **idProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[CardElement](CardElement.md).[idProperty](CardElement.md#idproperty)

#### Defined in

[card-object.ts:40](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L40)

___

### isRequiredProperty

▪ `Static` `Readonly` **isRequiredProperty**: [`BoolProperty`](BoolProperty.md)

#### Defined in

[card-elements.ts:2505](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2505)

___

### isVisibleProperty

▪ `Static` `Readonly` **isVisibleProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[CardElement](CardElement.md).[isVisibleProperty](CardElement.md#isvisibleproperty)

#### Defined in

[card-elements.ts:117](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L117)

___

### labelProperty

▪ `Static` `Readonly` **labelProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:2504](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2504)

___

### langProperty

▪ `Static` `Readonly` **langProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[CardElement](CardElement.md).[langProperty](CardElement.md#langproperty)

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

[CardElement](CardElement.md).[onRegisterCustomProperties](CardElement.md#onregistercustomproperties)

#### Defined in

[serialization.ts:809](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L809)

___

### requiresProperty

▪ `Static` `Readonly` **requiresProperty**: [`SerializableObjectProperty`](SerializableObjectProperty.md)

#### Inherited from

[CardElement](CardElement.md).[requiresProperty](CardElement.md#requiresproperty)

#### Defined in

[card-object.ts:41](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L41)

___

### rulesProperty

▪ `Static` `Readonly` **rulesProperty**: [`SerializableObjectCollectionProperty`](SerializableObjectCollectionProperty.md)

#### Inherited from

[CardElement](CardElement.md).[rulesProperty](CardElement.md#rulesproperty)

#### Defined in

[card-elements.ts:119](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L119)

___

### separatorProperty

▪ `Static` `Readonly` **separatorProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[CardElement](CardElement.md).[separatorProperty](CardElement.md#separatorproperty)

#### Defined in

[card-elements.ts:118](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L118)

___

### spacingProperty

▪ `Static` `Readonly` **spacingProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`Spacing`](../enums/Spacing.md)\>

#### Inherited from

[CardElement](CardElement.md).[spacingProperty](CardElement.md#spacingproperty)

#### Defined in

[card-elements.ts:133](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L133)

___

### typeNameProperty

▪ `Static` `Readonly` **typeNameProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[CardElement](CardElement.md).[typeNameProperty](CardElement.md#typenameproperty)

#### Defined in

[card-object.ts:31](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L31)

## Accessors

### allowCustomPadding

• `Protected` `get` **allowCustomPadding**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CardElement.allowCustomPadding

#### Defined in

[card-elements.ts:414](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L414)

___

### defaultStyle

• `Protected` `get` **defaultStyle**(): `string`

#### Returns

`string`

#### Inherited from

CardElement.defaultStyle

#### Defined in

[card-elements.ts:422](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L422)

___

### hasVisibleSeparator

• `get` **hasVisibleSeparator**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CardElement.hasVisibleSeparator

#### Defined in

[card-elements.ts:695](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L695)

___

### hostConfig

• `get` **hostConfig**(): [`HostConfig`](HostConfig.md)

#### Returns

[`HostConfig`](HostConfig.md)

#### Inherited from

CardElement.hostConfig

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

CardElement.hostConfig

#### Defined in

[card-elements.ts:670](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L670)

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

CardElement.index

#### Defined in

[card-elements.ts:674](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L674)

___

### inputControlContainerElement

• `Protected` `get` **inputControlContainerElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

[card-elements.ts:2568](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2568)

___

### isInline

• `get` **isInline**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CardElement.isInline

#### Defined in

[card-elements.ts:691](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L691)

___

### isInteractive

• `get` **isInteractive**(): `boolean`

#### Returns

`boolean`

#### Overrides

CardElement.isInteractive

#### Defined in

[card-elements.ts:2744](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2744)

___

### isNullable

• `Protected` `get` **isNullable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[card-elements.ts:2560](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2560)

___

### isStandalone

• `get` **isStandalone**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CardElement.isStandalone

#### Defined in

[card-elements.ts:687](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L687)

___

### isVisible

• `get` **isVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CardElement.isVisible

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

CardElement.isVisible

#### Defined in

[card-elements.ts:177](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L177)

___

### lang

• `get` **lang**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

CardElement.lang

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

CardElement.lang

#### Defined in

[card-elements.ts:168](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L168)

___

### parent

• `get` **parent**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Inherited from

CardElement.parent

#### Defined in

[card-elements.ts:708](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L708)

___

### renderedElement

• `get` **renderedElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

CardElement.renderedElement

#### Defined in

[card-object.ts:142](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L142)

___

### renderedInputControlElement

• `Protected` `get` **renderedInputControlElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Defined in

[card-elements.ts:2564](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2564)

___

### requires

• `get` **requires**(): `HostCapabilities`

#### Returns

`HostCapabilities`

#### Inherited from

CardElement.requires

#### Defined in

[card-object.ts:54](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L54)

___

### separatorElement

• `get` **separatorElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

CardElement.separatorElement

#### Defined in

[card-elements.ts:704](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L704)

___

### separatorOrientation

• `Protected` `get` **separatorOrientation**(): [`Orientation`](../enums/Orientation.md)

#### Returns

[`Orientation`](../enums/Orientation.md)

#### Inherited from

CardElement.separatorOrientation

#### Defined in

[card-elements.ts:418](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L418)

___

### useDefaultSizing

• `Protected` `get` **useDefaultSizing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CardElement.useDefaultSizing

#### Defined in

[card-elements.ts:410](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L410)

___

### value

• `Abstract` `get` **value**(): `any`

#### Returns

`any`

#### Implementation of

[IInput](../interfaces/IInput.md).[value](../interfaces/IInput.md#value)

#### Defined in

[card-elements.ts:2742](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2742)

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

[CardElement](CardElement.md).[adjustRenderedElementSize](CardElement.md#adjustrenderedelementsize)

#### Defined in

[card-elements.ts:335](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L335)

___

### applyPadding

▸ `Protected` **applyPadding**(): `void`

#### Returns

`void`

#### Inherited from

[CardElement](CardElement.md).[applyPadding](CardElement.md#applypadding)

#### Defined in

[card-elements.ts:354](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L354)

___

### asString

▸ **asString**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[CardElement](CardElement.md).[asString](CardElement.md#asstring)

#### Defined in

[card-elements.ts:432](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L432)

___

### createPlaceholderElement

▸ `Protected` **createPlaceholderElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Inherited from

[CardElement](CardElement.md).[createPlaceholderElement](CardElement.md#createplaceholderelement)

#### Defined in

[card-elements.ts:320](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L320)

___

### focus

▸ **focus**(): `void`

#### Returns

`void`

#### Defined in

[card-elements.ts:2687](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2687)

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

[CardElement](CardElement.md).[getActionAt](CardElement.md#getactionat)

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

[CardElement](CardElement.md).[getActionById](CardElement.md#getactionbyid)

#### Defined in

[card-elements.ts:646](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L646)

___

### getActionCount

▸ **getActionCount**(): `number`

#### Returns

`number`

#### Inherited from

[CardElement](CardElement.md).[getActionCount](CardElement.md#getactioncount)

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

#### Overrides

[CardElement](CardElement.md).[getAllInputs](CardElement.md#getallinputs)

#### Defined in

[card-elements.ts:2738](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2738)

___

### getAllLabelIds

▸ `Protected` **getAllLabelIds**(): `string`[]

#### Returns

`string`[]

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

[CardElement](CardElement.md).[getCustomProperty](CardElement.md#getcustomproperty)

#### Defined in

[serialization.ts:1040](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1040)

___

### getDefaultPadding

▸ `Protected` **getDefaultPadding**(): [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

[`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[CardElement](CardElement.md).[getDefaultPadding](CardElement.md#getdefaultpadding)

#### Defined in

[card-elements.ts:390](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L390)

___

### getDefaultSerializationContext

▸ `Protected` **getDefaultSerializationContext**(): [`BaseSerializationContext`](BaseSerializationContext.md)

#### Returns

[`BaseSerializationContext`](BaseSerializationContext.md)

#### Inherited from

[CardElement](CardElement.md).[getDefaultSerializationContext](CardElement.md#getdefaultserializationcontext)

#### Defined in

[card-elements.ts:316](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L316)

___

### getEffectivePadding

▸ **getEffectivePadding**(): [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

[`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[CardElement](CardElement.md).[getEffectivePadding](CardElement.md#geteffectivepadding)

#### Defined in

[card-elements.ts:650](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L650)

___

### getEffectiveStyle

▸ **getEffectiveStyle**(): `string`

#### Returns

`string`

#### Inherited from

[CardElement](CardElement.md).[getEffectiveStyle](CardElement.md#geteffectivestyle)

#### Defined in

[card-elements.ts:440](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L440)

___

### getEffectiveStyleDefinition

▸ **getEffectiveStyleDefinition**(): [`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Returns

[`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Inherited from

[CardElement](CardElement.md).[getEffectiveStyleDefinition](CardElement.md#geteffectivestyledefinition)

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

[CardElement](CardElement.md).[getElementById](CardElement.md#getelementbyid)

#### Defined in

[card-elements.ts:642](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L642)

___

### getForbiddenActionTypes

▸ **getForbiddenActionTypes**(): [`ActionType`](../README.md#actiontype)[]

#### Returns

[`ActionType`](../README.md#actiontype)[]

#### Inherited from

[CardElement](CardElement.md).[getForbiddenActionTypes](CardElement.md#getforbiddenactiontypes)

#### Defined in

[card-elements.ts:452](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L452)

___

### getHasBackground

▸ `Protected` **getHasBackground**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElement](CardElement.md).[getHasBackground](CardElement.md#gethasbackground)

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

[CardElement](CardElement.md).[getImmediateSurroundingPadding](CardElement.md#getimmediatesurroundingpadding)

#### Defined in

[card-elements.ts:456](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L456)

___

### getJsonTypeName

▸ `Abstract` **getJsonTypeName**(): `string`

#### Returns

`string`

#### Inherited from

[CardElement](CardElement.md).[getJsonTypeName](CardElement.md#getjsontypename)

#### Defined in

[card-object.ts:68](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L68)

___

### getPadding

▸ `Protected` **getPadding**(): `undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

`undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[CardElement](CardElement.md).[getPadding](CardElement.md#getpadding)

#### Defined in

[card-elements.ts:398](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L398)

___

### getParentContainer

▸ **getParentContainer**(): `undefined` \| [`Container`](Container.md)

#### Returns

`undefined` \| [`Container`](Container.md)

#### Inherited from

[CardElement](CardElement.md).[getParentContainer](CardElement.md#getparentcontainer)

#### Defined in

[card-elements.ts:620](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L620)

___

### getResourceInformation

▸ **getResourceInformation**(): [`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Returns

[`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Inherited from

[CardElement](CardElement.md).[getResourceInformation](CardElement.md#getresourceinformation)

#### Defined in

[card-elements.ts:638](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L638)

___

### getRootElement

▸ **getRootElement**(): [`CardElement`](CardElement.md)

#### Returns

[`CardElement`](CardElement.md)

#### Inherited from

[CardElement](CardElement.md).[getRootElement](CardElement.md#getrootelement)

#### Defined in

[card-elements.ts:616](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L616)

___

### getRootObject

▸ **getRootObject**(): [`CardObject`](CardObject.md)

#### Returns

[`CardObject`](CardObject.md)

#### Inherited from

[CardElement](CardElement.md).[getRootObject](CardElement.md#getrootobject)

#### Defined in

[card-object.ts:102](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L102)

___

### getSchema

▸ **getSchema**(): [`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Returns

[`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Inherited from

[CardElement](CardElement.md).[getSchema](CardElement.md#getschema)

#### Defined in

[serialization.ts:1044](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1044)

___

### getSchemaKey

▸ `Protected` **getSchemaKey**(): `string`

#### Returns

`string`

#### Inherited from

[CardElement](CardElement.md).[getSchemaKey](CardElement.md#getschemakey)

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

[CardElement](CardElement.md).[getValue](CardElement.md#getvalue)

#### Defined in

[serialization.ts:875](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L875)

___

### hasAllDefaultValues

▸ **hasAllDefaultValues**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElement](CardElement.md).[hasAllDefaultValues](CardElement.md#hasalldefaultvalues)

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

[CardElement](CardElement.md).[hasDefaultValue](CardElement.md#hasdefaultvalue)

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

[CardElement](CardElement.md).[indexOf](CardElement.md#indexof)

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

[CardElement](CardElement.md).[internalParse](CardElement.md#internalparse)

#### Defined in

[serialization.ts:888](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L888)

___

### internalRender

▸ `Protected` `Abstract` **internalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[CardElement](CardElement.md).[internalRender](CardElement.md#internalrender)

#### Defined in

[card-elements.ts:348](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L348)

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

[CardElement](CardElement.md).[internalToJSON](CardElement.md#internaltojson)

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

[CardElement](CardElement.md).[internalValidateProperties](CardElement.md#internalvalidateproperties)

#### Defined in

[card-elements.ts:2697](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2697)

___

### isAtTheVeryBottom

▸ **isAtTheVeryBottom**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElement](CardElement.md).[isAtTheVeryBottom](CardElement.md#isattheverybottom)

#### Defined in

[card-elements.ts:584](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L584)

___

### isAtTheVeryLeft

▸ **isAtTheVeryLeft**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElement](CardElement.md).[isAtTheVeryLeft](CardElement.md#isattheveryleft)

#### Defined in

[card-elements.ts:572](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L572)

___

### isAtTheVeryRight

▸ **isAtTheVeryRight**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElement](CardElement.md).[isAtTheVeryRight](CardElement.md#isattheveryright)

#### Defined in

[card-elements.ts:576](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L576)

___

### isAtTheVeryTop

▸ **isAtTheVeryTop**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElement](CardElement.md).[isAtTheVeryTop](CardElement.md#isattheverytop)

#### Defined in

[card-elements.ts:580](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L580)

___

### isBleeding

▸ **isBleeding**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElement](CardElement.md).[isBleeding](CardElement.md#isbleeding)

#### Defined in

[card-elements.ts:436](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L436)

___

### isBleedingAtBottom

▸ **isBleedingAtBottom**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElement](CardElement.md).[isBleedingAtBottom](CardElement.md#isbleedingatbottom)

#### Defined in

[card-elements.ts:592](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L592)

___

### isBleedingAtTop

▸ **isBleedingAtTop**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElement](CardElement.md).[isBleedingAtTop](CardElement.md#isbleedingattop)

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

[CardElement](CardElement.md).[isBottomElement](CardElement.md#isbottomelement)

#### Defined in

[card-elements.ts:608](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L608)

___

### isDesignMode

▸ **isDesignMode**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElement](CardElement.md).[isDesignMode](CardElement.md#isdesignmode)

#### Defined in

[card-elements.ts:558](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L558)

___

### isDisplayed

▸ `Protected` **isDisplayed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElement](CardElement.md).[isDisplayed](CardElement.md#isdisplayed)

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

[CardElement](CardElement.md).[isFirstElement](CardElement.md#isfirstelement)

#### Defined in

[card-elements.ts:564](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L564)

___

### isHiddenDueToOverflow

▸ **isHiddenDueToOverflow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElement](CardElement.md).[isHiddenDueToOverflow](CardElement.md#ishiddenduetooverflow)

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

[CardElement](CardElement.md).[isLastElement](CardElement.md#islastelement)

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

[CardElement](CardElement.md).[isLeftMostElement](CardElement.md#isleftmostelement)

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

[CardElement](CardElement.md).[isRightMostElement](CardElement.md#isrightmostelement)

#### Defined in

[card-elements.ts:600](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L600)

___

### isSet

▸ `Abstract` **isSet**(): `boolean`

#### Returns

`boolean`

#### Defined in

[card-elements.ts:2685](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2685)

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

[CardElement](CardElement.md).[isTopElement](CardElement.md#istopelement)

#### Defined in

[card-elements.ts:604](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L604)

___

### isValid

▸ **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[card-elements.ts:2693](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2693)

___

### overrideInternalRender

▸ `Protected` **overrideInternalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Overrides

[CardElement](CardElement.md).[overrideInternalRender](CardElement.md#overrideinternalrender)

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

[CardElement](CardElement.md).[parse](CardElement.md#parse)

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

[CardElement](CardElement.md).[populateSchema](CardElement.md#populateschema)

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

[CardElement](CardElement.md).[preProcessPropertyValue](CardElement.md#preprocesspropertyvalue)

#### Defined in

[card-object.ts:72](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L72)

___

### remove

▸ **remove**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElement](CardElement.md).[remove](CardElement.md#remove)

#### Defined in

[card-elements.ts:515](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L515)

___

### render

▸ **render**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[CardElement](CardElement.md).[render](CardElement.md#render)

#### Defined in

[card-elements.ts:523](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L523)

___

### resetDefaultValues

▸ **resetDefaultValues**(): `void`

#### Returns

`void`

#### Inherited from

[CardElement](CardElement.md).[resetDefaultValues](CardElement.md#resetdefaultvalues)

#### Defined in

[serialization.ts:1019](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1019)

___

### resetValidationFailureCue

▸ `Protected` **resetValidationFailureCue**(): `void`

#### Returns

`void`

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

[CardElement](CardElement.md).[setCustomProperty](CardElement.md#setcustomproperty)

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

[CardElement](CardElement.md).[setPadding](CardElement.md#setpadding)

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

[CardElement](CardElement.md).[setParent](CardElement.md#setparent)

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

[CardElement](CardElement.md).[setShouldFallback](CardElement.md#setshouldfallback)

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

[CardElement](CardElement.md).[setValue](CardElement.md#setvalue)

#### Defined in

[serialization.ts:879](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L879)

___

### shouldFallback

▸ **shouldFallback**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElement](CardElement.md).[shouldFallback](CardElement.md#shouldfallback)

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

[CardElement](CardElement.md).[shouldSerialize](CardElement.md#shouldserialize)

#### Defined in

[card-elements.ts:406](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L406)

___

### showValidationErrorMessage

▸ `Protected` **showValidationErrorMessage**(): `void`

#### Returns

`void`

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

[CardElement](CardElement.md).[toJSON](CardElement.md#tojson)

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

[CardElement](CardElement.md).[truncateOverflow](CardElement.md#truncateoverflow)

#### Defined in

[card-elements.ts:378](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L378)

___

### undoOverflowTruncation

▸ `Protected` **undoOverflowTruncation**(): `void`

#### Returns

`void`

#### Inherited from

[CardElement](CardElement.md).[undoOverflowTruncation](CardElement.md#undooverflowtruncation)

#### Defined in

[card-elements.ts:388](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L388)

___

### updateInputControlAriaLabelledBy

▸ `Protected` **updateInputControlAriaLabelledBy**(): `void`

#### Returns

`void`

#### Defined in

[card-elements.ts:2539](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2539)

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

[CardElement](CardElement.md).[updateLayout](CardElement.md#updatelayout)

#### Defined in

[card-elements.ts:549](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L549)

___

### validateProperties

▸ **validateProperties**(): [`ValidationResults`](ValidationResults.md)

#### Returns

[`ValidationResults`](ValidationResults.md)

#### Inherited from

[CardElement](CardElement.md).[validateProperties](CardElement.md#validateproperties)

#### Defined in

[card-object.ts:130](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L130)

___

### validateValue

▸ **validateValue**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInput](../interfaces/IInput.md).[validateValue](../interfaces/IInput.md#validatevalue)

#### Defined in

[card-elements.ts:2724](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2724)

___

### valueChanged

▸ `Protected` **valueChanged**(): `void`

#### Returns

`void`

#### Defined in

[card-elements.ts:2638](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2638)
