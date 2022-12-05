[Adaptive Cards Javascript SDK](../README.md) / ImageSet

# Class: ImageSet

## Hierarchy

- [`CardElementContainer`](CardElementContainer.md)

  ↳ **`ImageSet`**

## Table of contents

### Constructors

- [constructor](ImageSet.md#constructor)

### Properties

- [\_parent](ImageSet.md#_parent)
- [\_renderedElement](ImageSet.md#_renderedelement)
- [\_selectAction](ImageSet.md#_selectaction)
- [allowVerticalOverflow](ImageSet.md#allowverticaloverflow)
- [customCssSelector](ImageSet.md#customcssselector)
- [height](ImageSet.md#height)
- [horizontalAlignment](ImageSet.md#horizontalalignment)
- [id](ImageSet.md#id)
- [imageSize](ImageSet.md#imagesize)
- [maxVersion](ImageSet.md#maxversion)
- [onPreProcessPropertyValue](ImageSet.md#onpreprocesspropertyvalue)
- [rules](ImageSet.md#rules)
- [separator](ImageSet.md#separator)
- [spacing](ImageSet.md#spacing)
- [heightProperty](ImageSet.md#heightproperty)
- [horizontalAlignmentProperty](ImageSet.md#horizontalalignmentproperty)
- [idProperty](ImageSet.md#idproperty)
- [imageSizeProperty](ImageSet.md#imagesizeproperty)
- [imagesProperty](ImageSet.md#imagesproperty)
- [isVisibleProperty](ImageSet.md#isvisibleproperty)
- [langProperty](ImageSet.md#langproperty)
- [onRegisterCustomProperties](ImageSet.md#onregistercustomproperties)
- [requiresProperty](ImageSet.md#requiresproperty)
- [rulesProperty](ImageSet.md#rulesproperty)
- [selectActionProperty](ImageSet.md#selectactionproperty)
- [separatorProperty](ImageSet.md#separatorproperty)
- [spacingProperty](ImageSet.md#spacingproperty)
- [typeNameProperty](ImageSet.md#typenameproperty)

### Accessors

- [allowCustomPadding](ImageSet.md#allowcustompadding)
- [defaultStyle](ImageSet.md#defaultstyle)
- [hasVisibleSeparator](ImageSet.md#hasvisibleseparator)
- [hostConfig](ImageSet.md#hostconfig)
- [index](ImageSet.md#index)
- [isInline](ImageSet.md#isinline)
- [isInteractive](ImageSet.md#isinteractive)
- [isSelectable](ImageSet.md#isselectable)
- [isStandalone](ImageSet.md#isstandalone)
- [isVisible](ImageSet.md#isvisible)
- [lang](ImageSet.md#lang)
- [parent](ImageSet.md#parent)
- [renderedElement](ImageSet.md#renderedelement)
- [requires](ImageSet.md#requires)
- [separatorElement](ImageSet.md#separatorelement)
- [separatorOrientation](ImageSet.md#separatororientation)
- [useDefaultSizing](ImageSet.md#usedefaultsizing)

### Methods

- [addImage](ImageSet.md#addimage)
- [adjustRenderedElementSize](ImageSet.md#adjustrenderedelementsize)
- [applyPadding](ImageSet.md#applypadding)
- [asString](ImageSet.md#asstring)
- [createPlaceholderElement](ImageSet.md#createplaceholderelement)
- [getActionAt](ImageSet.md#getactionat)
- [getActionById](ImageSet.md#getactionbyid)
- [getActionCount](ImageSet.md#getactioncount)
- [getAllInputs](ImageSet.md#getallinputs)
- [getCustomProperty](ImageSet.md#getcustomproperty)
- [getDefaultPadding](ImageSet.md#getdefaultpadding)
- [getDefaultSerializationContext](ImageSet.md#getdefaultserializationcontext)
- [getEffectivePadding](ImageSet.md#geteffectivepadding)
- [getEffectiveStyle](ImageSet.md#geteffectivestyle)
- [getEffectiveStyleDefinition](ImageSet.md#geteffectivestyledefinition)
- [getElementById](ImageSet.md#getelementbyid)
- [getFirstVisibleRenderedItem](ImageSet.md#getfirstvisiblerendereditem)
- [getForbiddenActionTypes](ImageSet.md#getforbiddenactiontypes)
- [getHasBackground](ImageSet.md#gethasbackground)
- [getImmediateSurroundingPadding](ImageSet.md#getimmediatesurroundingpadding)
- [getItemAt](ImageSet.md#getitemat)
- [getItemCount](ImageSet.md#getitemcount)
- [getJsonTypeName](ImageSet.md#getjsontypename)
- [getLastVisibleRenderedItem](ImageSet.md#getlastvisiblerendereditem)
- [getPadding](ImageSet.md#getpadding)
- [getParentContainer](ImageSet.md#getparentcontainer)
- [getResourceInformation](ImageSet.md#getresourceinformation)
- [getRootElement](ImageSet.md#getrootelement)
- [getRootObject](ImageSet.md#getrootobject)
- [getSchema](ImageSet.md#getschema)
- [getSchemaKey](ImageSet.md#getschemakey)
- [getValue](ImageSet.md#getvalue)
- [hasAllDefaultValues](ImageSet.md#hasalldefaultvalues)
- [hasDefaultValue](ImageSet.md#hasdefaultvalue)
- [indexOf](ImageSet.md#indexof)
- [internalParse](ImageSet.md#internalparse)
- [internalRender](ImageSet.md#internalrender)
- [internalToJSON](ImageSet.md#internaltojson)
- [internalValidateProperties](ImageSet.md#internalvalidateproperties)
- [isAtTheVeryBottom](ImageSet.md#isattheverybottom)
- [isAtTheVeryLeft](ImageSet.md#isattheveryleft)
- [isAtTheVeryRight](ImageSet.md#isattheveryright)
- [isAtTheVeryTop](ImageSet.md#isattheverytop)
- [isBleeding](ImageSet.md#isbleeding)
- [isBleedingAtBottom](ImageSet.md#isbleedingatbottom)
- [isBleedingAtTop](ImageSet.md#isbleedingattop)
- [isBottomElement](ImageSet.md#isbottomelement)
- [isDesignMode](ImageSet.md#isdesignmode)
- [isDisplayed](ImageSet.md#isdisplayed)
- [isElementAllowed](ImageSet.md#iselementallowed)
- [isFirstElement](ImageSet.md#isfirstelement)
- [isHiddenDueToOverflow](ImageSet.md#ishiddenduetooverflow)
- [isLastElement](ImageSet.md#islastelement)
- [isLeftMostElement](ImageSet.md#isleftmostelement)
- [isRightMostElement](ImageSet.md#isrightmostelement)
- [isTopElement](ImageSet.md#istopelement)
- [overrideInternalRender](ImageSet.md#overrideinternalrender)
- [parse](ImageSet.md#parse)
- [populateSchema](ImageSet.md#populateschema)
- [preProcessPropertyValue](ImageSet.md#preprocesspropertyvalue)
- [remove](ImageSet.md#remove)
- [removeItem](ImageSet.md#removeitem)
- [render](ImageSet.md#render)
- [resetDefaultValues](ImageSet.md#resetdefaultvalues)
- [setCustomProperty](ImageSet.md#setcustomproperty)
- [setPadding](ImageSet.md#setpadding)
- [setParent](ImageSet.md#setparent)
- [setShouldFallback](ImageSet.md#setshouldfallback)
- [setValue](ImageSet.md#setvalue)
- [shouldFallback](ImageSet.md#shouldfallback)
- [shouldSerialize](ImageSet.md#shouldserialize)
- [toJSON](ImageSet.md#tojson)
- [truncateOverflow](ImageSet.md#truncateoverflow)
- [undoOverflowTruncation](ImageSet.md#undooverflowtruncation)
- [updateLayout](ImageSet.md#updatelayout)
- [validateProperties](ImageSet.md#validateproperties)

## Constructors

### constructor

• **new ImageSet**()

#### Inherited from

[CardElementContainer](CardElementContainer.md).[constructor](CardElementContainer.md#constructor)

#### Defined in

[serialization.ts:951](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L951)

## Properties

### \_parent

• `Protected` `Optional` **\_parent**: [`CardObject`](CardObject.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[_parent](CardElementContainer.md#_parent)

#### Defined in

[card-object.ts:63](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L63)

___

### \_renderedElement

• `Protected` `Optional` **\_renderedElement**: `HTMLElement`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[_renderedElement](CardElementContainer.md#_renderedelement)

#### Defined in

[card-object.ts:64](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L64)

___

### \_selectAction

• `Protected` `Optional` **\_selectAction**: [`Action`](Action.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[_selectAction](CardElementContainer.md#_selectaction)

#### Defined in

[card-elements.ts:1937](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1937)

___

### allowVerticalOverflow

• **allowVerticalOverflow**: `boolean` = `false`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[allowVerticalOverflow](CardElementContainer.md#allowverticaloverflow)

#### Defined in

[card-elements.ts:1977](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1977)

___

### customCssSelector

• `Optional` **customCssSelector**: `string`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[customCssSelector](CardElementContainer.md#customcssselector)

#### Defined in

[card-elements.ts:426](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L426)

___

### height

• **height**: [`CardElementHeight`](../README.md#cardelementheight)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[height](CardElementContainer.md#height)

#### Defined in

[card-elements.ts:149](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L149)

___

### horizontalAlignment

• **horizontalAlignment**: [`HorizontalAlignment`](../enums/HorizontalAlignment.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[horizontalAlignment](CardElementContainer.md#horizontalalignment)

#### Defined in

[card-elements.ts:140](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L140)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[id](CardElementContainer.md#id)

#### Defined in

[card-object.ts:52](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L52)

___

### imageSize

• **imageSize**: [`ImageSize`](../enums/ImageSize.md) = `Enums.ImageSize.Medium`

#### Defined in

[card-elements.ts:2117](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2117)

___

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[maxVersion](CardElementContainer.md#maxversion)

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

[CardElementContainer](CardElementContainer.md).[onPreProcessPropertyValue](CardElementContainer.md#onpreprocesspropertyvalue)

#### Defined in

[card-object.ts:66](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L66)

___

### rules

• **rules**: [`RuleParam`](RuleParam.md)[]

#### Inherited from

[CardElementContainer](CardElementContainer.md).[rules](CardElementContainer.md#rules)

#### Defined in

[card-elements.ts:201](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L201)

___

### separator

• **separator**: `boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[separator](CardElementContainer.md#separator)

#### Defined in

[card-elements.ts:146](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L146)

___

### spacing

• **spacing**: [`Spacing`](../enums/Spacing.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[spacing](CardElementContainer.md#spacing)

#### Defined in

[card-elements.ts:143](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L143)

___

### heightProperty

▪ `Static` `Readonly` **heightProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[heightProperty](CardElementContainer.md#heightproperty)

#### Defined in

[card-elements.ts:120](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L120)

___

### horizontalAlignmentProperty

▪ `Static` `Readonly` **horizontalAlignmentProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`HorizontalAlignment`](../enums/HorizontalAlignment.md)\>

#### Inherited from

[CardElementContainer](CardElementContainer.md).[horizontalAlignmentProperty](CardElementContainer.md#horizontalalignmentproperty)

#### Defined in

[card-elements.ts:128](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L128)

___

### idProperty

▪ `Static` `Readonly` **idProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[idProperty](CardElementContainer.md#idproperty)

#### Defined in

[card-object.ts:40](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L40)

___

### imageSizeProperty

▪ `Static` `Readonly` **imageSizeProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`ImageSize`](../enums/ImageSize.md)\>

#### Defined in

[card-elements.ts:2107](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2107)

___

### imagesProperty

▪ `Static` `Readonly` **imagesProperty**: [`SerializableObjectCollectionProperty`](SerializableObjectCollectionProperty.md)

#### Defined in

[card-elements.ts:2102](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2102)

___

### isVisibleProperty

▪ `Static` `Readonly` **isVisibleProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[isVisibleProperty](CardElementContainer.md#isvisibleproperty)

#### Defined in

[card-elements.ts:117](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L117)

___

### langProperty

▪ `Static` `Readonly` **langProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[langProperty](CardElementContainer.md#langproperty)

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

[CardElementContainer](CardElementContainer.md).[onRegisterCustomProperties](CardElementContainer.md#onregistercustomproperties)

#### Defined in

[serialization.ts:809](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L809)

___

### requiresProperty

▪ `Static` `Readonly` **requiresProperty**: [`SerializableObjectProperty`](SerializableObjectProperty.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[requiresProperty](CardElementContainer.md#requiresproperty)

#### Defined in

[card-object.ts:41](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L41)

___

### rulesProperty

▪ `Static` `Readonly` **rulesProperty**: [`SerializableObjectCollectionProperty`](SerializableObjectCollectionProperty.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[rulesProperty](CardElementContainer.md#rulesproperty)

#### Defined in

[card-elements.ts:119](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L119)

___

### selectActionProperty

▪ `Static` `Readonly` **selectActionProperty**: [`ActionProperty`](ActionProperty.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[selectActionProperty](CardElementContainer.md#selectactionproperty)

#### Defined in

[card-elements.ts:1926](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1926)

___

### separatorProperty

▪ `Static` `Readonly` **separatorProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[separatorProperty](CardElementContainer.md#separatorproperty)

#### Defined in

[card-elements.ts:118](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L118)

___

### spacingProperty

▪ `Static` `Readonly` **spacingProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`Spacing`](../enums/Spacing.md)\>

#### Inherited from

[CardElementContainer](CardElementContainer.md).[spacingProperty](CardElementContainer.md#spacingproperty)

#### Defined in

[card-elements.ts:133](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L133)

___

### typeNameProperty

▪ `Static` `Readonly` **typeNameProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[typeNameProperty](CardElementContainer.md#typenameproperty)

#### Defined in

[card-object.ts:31](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L31)

## Accessors

### allowCustomPadding

• `Protected` `get` **allowCustomPadding**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CardElementContainer.allowCustomPadding

#### Defined in

[card-elements.ts:414](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L414)

___

### defaultStyle

• `Protected` `get` **defaultStyle**(): `string`

#### Returns

`string`

#### Inherited from

CardElementContainer.defaultStyle

#### Defined in

[card-elements.ts:422](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L422)

___

### hasVisibleSeparator

• `get` **hasVisibleSeparator**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CardElementContainer.hasVisibleSeparator

#### Defined in

[card-elements.ts:695](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L695)

___

### hostConfig

• `get` **hostConfig**(): [`HostConfig`](HostConfig.md)

#### Returns

[`HostConfig`](HostConfig.md)

#### Inherited from

CardElementContainer.hostConfig

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

CardElementContainer.hostConfig

#### Defined in

[card-elements.ts:670](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L670)

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

CardElementContainer.index

#### Defined in

[card-elements.ts:674](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L674)

___

### isInline

• `get` **isInline**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CardElementContainer.isInline

#### Defined in

[card-elements.ts:691](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L691)

___

### isInteractive

• `get` **isInteractive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CardElementContainer.isInteractive

#### Defined in

[card-elements.ts:683](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L683)

___

### isSelectable

• `Protected` `get` **isSelectable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CardElementContainer.isSelectable

#### Defined in

[card-elements.ts:1967](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1967)

___

### isStandalone

• `get` **isStandalone**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CardElementContainer.isStandalone

#### Defined in

[card-elements.ts:687](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L687)

___

### isVisible

• `get` **isVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CardElementContainer.isVisible

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

CardElementContainer.isVisible

#### Defined in

[card-elements.ts:177](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L177)

___

### lang

• `get` **lang**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

CardElementContainer.lang

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

CardElementContainer.lang

#### Defined in

[card-elements.ts:168](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L168)

___

### parent

• `get` **parent**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Inherited from

CardElementContainer.parent

#### Defined in

[card-elements.ts:708](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L708)

___

### renderedElement

• `get` **renderedElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

CardElementContainer.renderedElement

#### Defined in

[card-object.ts:142](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L142)

___

### requires

• `get` **requires**(): `HostCapabilities`

#### Returns

`HostCapabilities`

#### Inherited from

CardElementContainer.requires

#### Defined in

[card-object.ts:54](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L54)

___

### separatorElement

• `get` **separatorElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

CardElementContainer.separatorElement

#### Defined in

[card-elements.ts:704](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L704)

___

### separatorOrientation

• `Protected` `get` **separatorOrientation**(): [`Orientation`](../enums/Orientation.md)

#### Returns

[`Orientation`](../enums/Orientation.md)

#### Inherited from

CardElementContainer.separatorOrientation

#### Defined in

[card-elements.ts:418](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L418)

___

### useDefaultSizing

• `Protected` `get` **useDefaultSizing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CardElementContainer.useDefaultSizing

#### Defined in

[card-elements.ts:410](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L410)

## Methods

### addImage

▸ **addImage**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`Image`](Image.md) |

#### Returns

`void`

#### Defined in

[card-elements.ts:2197](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2197)

___

### adjustRenderedElementSize

▸ `Protected` **adjustRenderedElementSize**(`renderedElement`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderedElement` | `HTMLElement` |

#### Returns

`void`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[adjustRenderedElementSize](CardElementContainer.md#adjustrenderedelementsize)

#### Defined in

[card-elements.ts:335](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L335)

___

### applyPadding

▸ `Protected` **applyPadding**(): `void`

#### Returns

`void`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[applyPadding](CardElementContainer.md#applypadding)

#### Defined in

[card-elements.ts:1945](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1945)

___

### asString

▸ **asString**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[asString](CardElementContainer.md#asstring)

#### Defined in

[card-elements.ts:432](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L432)

___

### createPlaceholderElement

▸ `Protected` **createPlaceholderElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[createPlaceholderElement](CardElementContainer.md#createplaceholderelement)

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

[CardElementContainer](CardElementContainer.md).[getActionAt](CardElementContainer.md#getactionat)

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

[CardElementContainer](CardElementContainer.md).[getActionById](CardElementContainer.md#getactionbyid)

#### Defined in

[card-elements.ts:646](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L646)

___

### getActionCount

▸ **getActionCount**(): `number`

#### Returns

`number`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getActionCount](CardElementContainer.md#getactioncount)

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

[CardElementContainer](CardElementContainer.md).[getAllInputs](CardElementContainer.md#getallinputs)

#### Defined in

[card-elements.ts:2062](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2062)

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

[CardElementContainer](CardElementContainer.md).[getCustomProperty](CardElementContainer.md#getcustomproperty)

#### Defined in

[serialization.ts:1040](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1040)

___

### getDefaultPadding

▸ `Protected` **getDefaultPadding**(): [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

[`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getDefaultPadding](CardElementContainer.md#getdefaultpadding)

#### Defined in

[card-elements.ts:390](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L390)

___

### getDefaultSerializationContext

▸ `Protected` **getDefaultSerializationContext**(): [`BaseSerializationContext`](BaseSerializationContext.md)

#### Returns

[`BaseSerializationContext`](BaseSerializationContext.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getDefaultSerializationContext](CardElementContainer.md#getdefaultserializationcontext)

#### Defined in

[card-elements.ts:316](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L316)

___

### getEffectivePadding

▸ **getEffectivePadding**(): [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

[`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getEffectivePadding](CardElementContainer.md#geteffectivepadding)

#### Defined in

[card-elements.ts:650](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L650)

___

### getEffectiveStyle

▸ **getEffectiveStyle**(): `string`

#### Returns

`string`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getEffectiveStyle](CardElementContainer.md#geteffectivestyle)

#### Defined in

[card-elements.ts:440](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L440)

___

### getEffectiveStyleDefinition

▸ **getEffectiveStyleDefinition**(): [`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Returns

[`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getEffectiveStyleDefinition](CardElementContainer.md#geteffectivestyledefinition)

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

[CardElementContainer](CardElementContainer.md).[getElementById](CardElementContainer.md#getelementbyid)

#### Defined in

[card-elements.ts:2082](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2082)

___

### getFirstVisibleRenderedItem

▸ **getFirstVisibleRenderedItem**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Overrides

[CardElementContainer](CardElementContainer.md).[getFirstVisibleRenderedItem](CardElementContainer.md#getfirstvisiblerendereditem)

#### Defined in

[card-elements.ts:2167](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2167)

___

### getForbiddenActionTypes

▸ **getForbiddenActionTypes**(): [`ActionType`](../README.md#actiontype)[]

#### Returns

[`ActionType`](../README.md#actiontype)[]

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getForbiddenActionTypes](CardElementContainer.md#getforbiddenactiontypes)

#### Defined in

[card-elements.ts:452](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L452)

___

### getHasBackground

▸ `Protected` **getHasBackground**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getHasBackground](CardElementContainer.md#gethasbackground)

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

[CardElementContainer](CardElementContainer.md).[getImmediateSurroundingPadding](CardElementContainer.md#getimmediatesurroundingpadding)

#### Defined in

[card-elements.ts:456](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L456)

___

### getItemAt

▸ **getItemAt**(`index`): [`CardElement`](CardElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`CardElement`](CardElement.md)

#### Overrides

[CardElementContainer](CardElementContainer.md).[getItemAt](CardElementContainer.md#getitemat)

#### Defined in

[card-elements.ts:2163](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2163)

___

### getItemCount

▸ **getItemCount**(): `number`

#### Returns

`number`

#### Overrides

[CardElementContainer](CardElementContainer.md).[getItemCount](CardElementContainer.md#getitemcount)

#### Defined in

[card-elements.ts:2159](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2159)

___

### getJsonTypeName

▸ **getJsonTypeName**(): `string`

#### Returns

`string`

#### Overrides

[CardElementContainer](CardElementContainer.md).[getJsonTypeName](CardElementContainer.md#getjsontypename)

#### Defined in

[card-elements.ts:2193](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2193)

___

### getLastVisibleRenderedItem

▸ **getLastVisibleRenderedItem**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Overrides

[CardElementContainer](CardElementContainer.md).[getLastVisibleRenderedItem](CardElementContainer.md#getlastvisiblerendereditem)

#### Defined in

[card-elements.ts:2171](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2171)

___

### getPadding

▸ `Protected` **getPadding**(): `undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

`undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getPadding](CardElementContainer.md#getpadding)

#### Defined in

[card-elements.ts:398](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L398)

___

### getParentContainer

▸ **getParentContainer**(): `undefined` \| [`Container`](Container.md)

#### Returns

`undefined` \| [`Container`](Container.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getParentContainer](CardElementContainer.md#getparentcontainer)

#### Defined in

[card-elements.ts:620](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L620)

___

### getResourceInformation

▸ **getResourceInformation**(): [`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Returns

[`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getResourceInformation](CardElementContainer.md#getresourceinformation)

#### Defined in

[card-elements.ts:2072](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2072)

___

### getRootElement

▸ **getRootElement**(): [`CardElement`](CardElement.md)

#### Returns

[`CardElement`](CardElement.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getRootElement](CardElementContainer.md#getrootelement)

#### Defined in

[card-elements.ts:616](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L616)

___

### getRootObject

▸ **getRootObject**(): [`CardObject`](CardObject.md)

#### Returns

[`CardObject`](CardObject.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getRootObject](CardElementContainer.md#getrootobject)

#### Defined in

[card-object.ts:102](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L102)

___

### getSchema

▸ **getSchema**(): [`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Returns

[`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getSchema](CardElementContainer.md#getschema)

#### Defined in

[serialization.ts:1044](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1044)

___

### getSchemaKey

▸ `Protected` **getSchemaKey**(): `string`

#### Returns

`string`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[getSchemaKey](CardElementContainer.md#getschemakey)

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

[CardElementContainer](CardElementContainer.md).[getValue](CardElementContainer.md#getvalue)

#### Defined in

[serialization.ts:875](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L875)

___

### hasAllDefaultValues

▸ **hasAllDefaultValues**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[hasAllDefaultValues](CardElementContainer.md#hasalldefaultvalues)

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

[CardElementContainer](CardElementContainer.md).[hasDefaultValue](CardElementContainer.md#hasdefaultvalue)

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

#### Overrides

[CardElementContainer](CardElementContainer.md).[indexOf](CardElementContainer.md#indexof)

#### Defined in

[card-elements.ts:2208](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2208)

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

[CardElementContainer](CardElementContainer.md).[internalParse](CardElementContainer.md#internalparse)

#### Defined in

[serialization.ts:888](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L888)

___

### internalRender

▸ `Protected` **internalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Overrides

[CardElementContainer](CardElementContainer.md).[internalRender](CardElementContainer.md#internalrender)

#### Defined in

[card-elements.ts:2121](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2121)

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

[CardElementContainer](CardElementContainer.md).[internalToJSON](CardElementContainer.md#internaltojson)

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

[CardElementContainer](CardElementContainer.md).[internalValidateProperties](CardElementContainer.md#internalvalidateproperties)

#### Defined in

[card-elements.ts:1979](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1979)

___

### isAtTheVeryBottom

▸ **isAtTheVeryBottom**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[isAtTheVeryBottom](CardElementContainer.md#isattheverybottom)

#### Defined in

[card-elements.ts:584](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L584)

___

### isAtTheVeryLeft

▸ **isAtTheVeryLeft**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[isAtTheVeryLeft](CardElementContainer.md#isattheveryleft)

#### Defined in

[card-elements.ts:572](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L572)

___

### isAtTheVeryRight

▸ **isAtTheVeryRight**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[isAtTheVeryRight](CardElementContainer.md#isattheveryright)

#### Defined in

[card-elements.ts:576](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L576)

___

### isAtTheVeryTop

▸ **isAtTheVeryTop**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[isAtTheVeryTop](CardElementContainer.md#isattheverytop)

#### Defined in

[card-elements.ts:580](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L580)

___

### isBleeding

▸ **isBleeding**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[isBleeding](CardElementContainer.md#isbleeding)

#### Defined in

[card-elements.ts:436](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L436)

___

### isBleedingAtBottom

▸ **isBleedingAtBottom**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[isBleedingAtBottom](CardElementContainer.md#isbleedingatbottom)

#### Defined in

[card-elements.ts:592](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L592)

___

### isBleedingAtTop

▸ **isBleedingAtTop**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[isBleedingAtTop](CardElementContainer.md#isbleedingattop)

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

[CardElementContainer](CardElementContainer.md).[isBottomElement](CardElementContainer.md#isbottomelement)

#### Defined in

[card-elements.ts:608](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L608)

___

### isDesignMode

▸ **isDesignMode**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[isDesignMode](CardElementContainer.md#isdesignmode)

#### Defined in

[card-elements.ts:558](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L558)

___

### isDisplayed

▸ `Protected` **isDisplayed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[isDisplayed](CardElementContainer.md#isdisplayed)

#### Defined in

[card-elements.ts:344](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L344)

___

### isElementAllowed

▸ `Protected` **isElementAllowed**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`CardElement`](CardElement.md) |

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[isElementAllowed](CardElementContainer.md#iselementallowed)

#### Defined in

[card-elements.ts:1941](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1941)

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

[CardElementContainer](CardElementContainer.md).[isFirstElement](CardElementContainer.md#isfirstelement)

#### Defined in

[card-elements.ts:564](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L564)

___

### isHiddenDueToOverflow

▸ **isHiddenDueToOverflow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[isHiddenDueToOverflow](CardElementContainer.md#ishiddenduetooverflow)

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

[CardElementContainer](CardElementContainer.md).[isLastElement](CardElementContainer.md#islastelement)

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

[CardElementContainer](CardElementContainer.md).[isLeftMostElement](CardElementContainer.md#isleftmostelement)

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

[CardElementContainer](CardElementContainer.md).[isRightMostElement](CardElementContainer.md#isrightmostelement)

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

[CardElementContainer](CardElementContainer.md).[isTopElement](CardElementContainer.md#istopelement)

#### Defined in

[card-elements.ts:604](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L604)

___

### overrideInternalRender

▸ `Protected` **overrideInternalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[overrideInternalRender](CardElementContainer.md#overrideinternalrender)

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

[CardElementContainer](CardElementContainer.md).[parse](CardElementContainer.md#parse)

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

[CardElementContainer](CardElementContainer.md).[populateSchema](CardElementContainer.md#populateschema)

#### Defined in

[card-elements.ts:1928](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1928)

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

[CardElementContainer](CardElementContainer.md).[preProcessPropertyValue](CardElementContainer.md#preprocesspropertyvalue)

#### Defined in

[card-object.ts:72](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L72)

___

### remove

▸ **remove**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[remove](CardElementContainer.md#remove)

#### Defined in

[card-elements.ts:515](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L515)

___

### removeItem

▸ **removeItem**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`CardElement`](CardElement.md) |

#### Returns

`boolean`

#### Overrides

[CardElementContainer](CardElementContainer.md).[removeItem](CardElementContainer.md#removeitem)

#### Defined in

[card-elements.ts:2175](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2175)

___

### render

▸ **render**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[render](CardElementContainer.md#render)

#### Defined in

[card-elements.ts:2007](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2007)

___

### resetDefaultValues

▸ **resetDefaultValues**(): `void`

#### Returns

`void`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[resetDefaultValues](CardElementContainer.md#resetdefaultvalues)

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

[CardElementContainer](CardElementContainer.md).[setCustomProperty](CardElementContainer.md#setcustomproperty)

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

[CardElementContainer](CardElementContainer.md).[setPadding](CardElementContainer.md#setpadding)

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

[CardElementContainer](CardElementContainer.md).[setParent](CardElementContainer.md#setparent)

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

[CardElementContainer](CardElementContainer.md).[setShouldFallback](CardElementContainer.md#setshouldfallback)

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

[CardElementContainer](CardElementContainer.md).[setValue](CardElementContainer.md#setvalue)

#### Defined in

[serialization.ts:879](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L879)

___

### shouldFallback

▸ **shouldFallback**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[shouldFallback](CardElementContainer.md#shouldfallback)

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

[CardElementContainer](CardElementContainer.md).[shouldSerialize](CardElementContainer.md#shouldserialize)

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

[CardElementContainer](CardElementContainer.md).[toJSON](CardElementContainer.md#tojson)

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

[CardElementContainer](CardElementContainer.md).[truncateOverflow](CardElementContainer.md#truncateoverflow)

#### Defined in

[card-elements.ts:378](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L378)

___

### undoOverflowTruncation

▸ `Protected` **undoOverflowTruncation**(): `void`

#### Returns

`void`

#### Inherited from

[CardElementContainer](CardElementContainer.md).[undoOverflowTruncation](CardElementContainer.md#undooverflowtruncation)

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

[CardElementContainer](CardElementContainer.md).[updateLayout](CardElementContainer.md#updatelayout)

#### Defined in

[card-elements.ts:2052](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2052)

___

### validateProperties

▸ **validateProperties**(): [`ValidationResults`](ValidationResults.md)

#### Returns

[`ValidationResults`](ValidationResults.md)

#### Inherited from

[CardElementContainer](CardElementContainer.md).[validateProperties](CardElementContainer.md#validateproperties)

#### Defined in

[card-object.ts:130](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L130)
