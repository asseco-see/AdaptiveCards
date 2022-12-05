[Adaptive Cards Javascript SDK](../README.md) / CustomComponent

# Class: CustomComponent

## Hierarchy

- [`CardElement`](CardElement.md)

  ↳ **`CustomComponent`**

## Table of contents

### Constructors

- [constructor](CustomComponent.md#constructor)

### Properties

- [\_parent](CustomComponent.md#_parent)
- [\_renderedElement](CustomComponent.md#_renderedelement)
- [customCssSelector](CustomComponent.md#customcssselector)
- [height](CustomComponent.md#height)
- [horizontalAlignment](CustomComponent.md#horizontalalignment)
- [id](CustomComponent.md#id)
- [maxVersion](CustomComponent.md#maxversion)
- [onComponentDefinitionChanged](CustomComponent.md#oncomponentdefinitionchanged)
- [onPreProcessPropertyValue](CustomComponent.md#onpreprocesspropertyvalue)
- [properties](CustomComponent.md#properties)
- [rules](CustomComponent.md#rules)
- [separator](CustomComponent.md#separator)
- [spacing](CustomComponent.md#spacing)
- [view](CustomComponent.md#view)
- [heightProperty](CustomComponent.md#heightproperty)
- [horizontalAlignmentProperty](CustomComponent.md#horizontalalignmentproperty)
- [idProperty](CustomComponent.md#idproperty)
- [isVisibleProperty](CustomComponent.md#isvisibleproperty)
- [langProperty](CustomComponent.md#langproperty)
- [nameProperty](CustomComponent.md#nameproperty)
- [onRegisterCustomProperties](CustomComponent.md#onregistercustomproperties)
- [propertiesProperty](CustomComponent.md#propertiesproperty)
- [requiresProperty](CustomComponent.md#requiresproperty)
- [rulesProperty](CustomComponent.md#rulesproperty)
- [separatorProperty](CustomComponent.md#separatorproperty)
- [spacingProperty](CustomComponent.md#spacingproperty)
- [typeNameProperty](CustomComponent.md#typenameproperty)
- [viewProperty](CustomComponent.md#viewproperty)

### Accessors

- [allowCustomPadding](CustomComponent.md#allowcustompadding)
- [componentDefinition](CustomComponent.md#componentdefinition)
- [defaultStyle](CustomComponent.md#defaultstyle)
- [hasVisibleSeparator](CustomComponent.md#hasvisibleseparator)
- [hostConfig](CustomComponent.md#hostconfig)
- [index](CustomComponent.md#index)
- [isInline](CustomComponent.md#isinline)
- [isInteractive](CustomComponent.md#isinteractive)
- [isStandalone](CustomComponent.md#isstandalone)
- [isVisible](CustomComponent.md#isvisible)
- [lang](CustomComponent.md#lang)
- [name](CustomComponent.md#name)
- [parent](CustomComponent.md#parent)
- [renderedElement](CustomComponent.md#renderedelement)
- [requires](CustomComponent.md#requires)
- [separatorElement](CustomComponent.md#separatorelement)
- [separatorOrientation](CustomComponent.md#separatororientation)
- [useDefaultSizing](CustomComponent.md#usedefaultsizing)

### Methods

- [adjustRenderedElementSize](CustomComponent.md#adjustrenderedelementsize)
- [applyPadding](CustomComponent.md#applypadding)
- [asString](CustomComponent.md#asstring)
- [createPlaceholderElement](CustomComponent.md#createplaceholderelement)
- [getActionAt](CustomComponent.md#getactionat)
- [getActionById](CustomComponent.md#getactionbyid)
- [getActionCount](CustomComponent.md#getactioncount)
- [getAllInputs](CustomComponent.md#getallinputs)
- [getCustomProperty](CustomComponent.md#getcustomproperty)
- [getDefaultPadding](CustomComponent.md#getdefaultpadding)
- [getDefaultSerializationContext](CustomComponent.md#getdefaultserializationcontext)
- [getEffectivePadding](CustomComponent.md#geteffectivepadding)
- [getEffectiveStyle](CustomComponent.md#geteffectivestyle)
- [getEffectiveStyleDefinition](CustomComponent.md#geteffectivestyledefinition)
- [getElementById](CustomComponent.md#getelementbyid)
- [getForbiddenActionTypes](CustomComponent.md#getforbiddenactiontypes)
- [getHasBackground](CustomComponent.md#gethasbackground)
- [getImmediateSurroundingPadding](CustomComponent.md#getimmediatesurroundingpadding)
- [getJsonTypeName](CustomComponent.md#getjsontypename)
- [getPadding](CustomComponent.md#getpadding)
- [getParentContainer](CustomComponent.md#getparentcontainer)
- [getResourceInformation](CustomComponent.md#getresourceinformation)
- [getRootElement](CustomComponent.md#getrootelement)
- [getRootObject](CustomComponent.md#getrootobject)
- [getSchema](CustomComponent.md#getschema)
- [getSchemaKey](CustomComponent.md#getschemakey)
- [getValue](CustomComponent.md#getvalue)
- [hasAllDefaultValues](CustomComponent.md#hasalldefaultvalues)
- [hasDefaultValue](CustomComponent.md#hasdefaultvalue)
- [indexOf](CustomComponent.md#indexof)
- [internalParse](CustomComponent.md#internalparse)
- [internalRender](CustomComponent.md#internalrender)
- [internalToJSON](CustomComponent.md#internaltojson)
- [internalValidateProperties](CustomComponent.md#internalvalidateproperties)
- [isAtTheVeryBottom](CustomComponent.md#isattheverybottom)
- [isAtTheVeryLeft](CustomComponent.md#isattheveryleft)
- [isAtTheVeryRight](CustomComponent.md#isattheveryright)
- [isAtTheVeryTop](CustomComponent.md#isattheverytop)
- [isBleeding](CustomComponent.md#isbleeding)
- [isBleedingAtBottom](CustomComponent.md#isbleedingatbottom)
- [isBleedingAtTop](CustomComponent.md#isbleedingattop)
- [isBottomElement](CustomComponent.md#isbottomelement)
- [isDesignMode](CustomComponent.md#isdesignmode)
- [isDisplayed](CustomComponent.md#isdisplayed)
- [isFirstElement](CustomComponent.md#isfirstelement)
- [isHiddenDueToOverflow](CustomComponent.md#ishiddenduetooverflow)
- [isLastElement](CustomComponent.md#islastelement)
- [isLeftMostElement](CustomComponent.md#isleftmostelement)
- [isRightMostElement](CustomComponent.md#isrightmostelement)
- [isTopElement](CustomComponent.md#istopelement)
- [overrideInternalRender](CustomComponent.md#overrideinternalrender)
- [parse](CustomComponent.md#parse)
- [populateSchema](CustomComponent.md#populateschema)
- [preProcessPropertyValue](CustomComponent.md#preprocesspropertyvalue)
- [remove](CustomComponent.md#remove)
- [render](CustomComponent.md#render)
- [resetDefaultValues](CustomComponent.md#resetdefaultvalues)
- [setCustomProperty](CustomComponent.md#setcustomproperty)
- [setPadding](CustomComponent.md#setpadding)
- [setParent](CustomComponent.md#setparent)
- [setShouldFallback](CustomComponent.md#setshouldfallback)
- [setValue](CustomComponent.md#setvalue)
- [shouldFallback](CustomComponent.md#shouldfallback)
- [shouldSerialize](CustomComponent.md#shouldserialize)
- [toJSON](CustomComponent.md#tojson)
- [truncateOverflow](CustomComponent.md#truncateoverflow)
- [undoOverflowTruncation](CustomComponent.md#undooverflowtruncation)
- [updateLayout](CustomComponent.md#updatelayout)
- [validateProperties](CustomComponent.md#validateproperties)

## Constructors

### constructor

• **new CustomComponent**()

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

#### Inherited from

[CardElement](CardElement.md).[id](CardElement.md#id)

#### Defined in

[card-object.ts:52](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L52)

___

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[CardElement](CardElement.md).[maxVersion](CardElement.md#maxversion)

#### Defined in

[serialization.ts:949](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L949)

___

### onComponentDefinitionChanged

• **onComponentDefinitionChanged**: (`sender`: [`CustomComponent`](CustomComponent.md)) => `void`

#### Type declaration

▸ (`sender`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`CustomComponent`](CustomComponent.md) |

##### Returns

`void`

#### Defined in

[card-elements.ts:7041](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7041)

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

### properties

• **properties**: `object` = `{}`

#### Defined in

[card-elements.ts:6938](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6938)

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

### view

• `Optional` **view**: `string`

#### Defined in

[card-elements.ts:6922](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6922)

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

### isVisibleProperty

▪ `Static` `Readonly` **isVisibleProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[CardElement](CardElement.md).[isVisibleProperty](CardElement.md#isvisibleproperty)

#### Defined in

[card-elements.ts:117](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L117)

___

### langProperty

▪ `Static` `Readonly` **langProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[CardElement](CardElement.md).[langProperty](CardElement.md#langproperty)

#### Defined in

[card-elements.ts:116](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L116)

___

### nameProperty

▪ `Static` `Readonly` **nameProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:6918](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6918)

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

### propertiesProperty

▪ `Static` `Readonly` **propertiesProperty**: [`ObjectProperty`](ObjectProperty.md)

#### Defined in

[card-elements.ts:6919](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6919)

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

___

### viewProperty

▪ `Static` `Readonly` **viewProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:6917](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6917)

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

### componentDefinition

• `get` **componentDefinition**(): `undefined` \| [`AdaptiveComponent`](AdaptiveComponent.md)

#### Returns

`undefined` \| [`AdaptiveComponent`](AdaptiveComponent.md)

#### Defined in

[card-elements.ts:7047](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7047)

• `set` **componentDefinition**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`AdaptiveComponent`](AdaptiveComponent.md) |

#### Returns

`void`

#### Defined in

[card-elements.ts:7051](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7051)

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

#### Inherited from

CardElement.isInteractive

#### Defined in

[card-elements.ts:683](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L683)

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

### name

• `get` **name**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[card-elements.ts:6924](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6924)

• `set` **name**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[card-elements.ts:6929](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6929)

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

#### Inherited from

[CardElement](CardElement.md).[getAllInputs](CardElement.md#getallinputs)

#### Defined in

[card-elements.ts:634](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L634)

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

▸ **getJsonTypeName**(): `string`

#### Returns

`string`

#### Overrides

[CardElement](CardElement.md).[getJsonTypeName](CardElement.md#getjsontypename)

#### Defined in

[card-elements.ts:7043](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7043)

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

▸ `Protected` **internalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Overrides

[CardElement](CardElement.md).[internalRender](CardElement.md#internalrender)

#### Defined in

[card-elements.ts:7032](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7032)

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

#### Inherited from

[CardElement](CardElement.md).[internalValidateProperties](CardElement.md#internalvalidateproperties)

#### Defined in

[card-object.ts:112](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L112)

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

### overrideInternalRender

▸ `Protected` **overrideInternalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[CardElement](CardElement.md).[overrideInternalRender](CardElement.md#overrideinternalrender)

#### Defined in

[card-elements.ts:350](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L350)

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
