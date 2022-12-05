[Adaptive Cards Javascript SDK](../README.md) / Container

# Class: Container

## Hierarchy

- [`StylableCardElementContainer`](StylableCardElementContainer.md)

  ↳ **`Container`**

  ↳↳ [`Column`](Column.md)

  ↳↳ [`ContainerWithActions`](ContainerWithActions.md)

## Table of contents

### Constructors

- [constructor](Container.md#constructor)

### Properties

- [\_items](Container.md#_items)
- [\_parent](Container.md#_parent)
- [\_renderedElement](Container.md#_renderedelement)
- [\_selectAction](Container.md#_selectaction)
- [allowVerticalOverflow](Container.md#allowverticaloverflow)
- [customCssSelector](Container.md#customcssselector)
- [height](Container.md#height)
- [horizontalAlignment](Container.md#horizontalalignment)
- [id](Container.md#id)
- [maxVersion](Container.md#maxversion)
- [minPixelHeight](Container.md#minpixelheight)
- [onPreProcessPropertyValue](Container.md#onpreprocesspropertyvalue)
- [rtl](Container.md#rtl)
- [rules](Container.md#rules)
- [separator](Container.md#separator)
- [spacing](Container.md#spacing)
- [verticalContentAlignment](Container.md#verticalcontentalignment)
- [backgroundImageProperty](Container.md#backgroundimageproperty)
- [bleedProperty](Container.md#bleedproperty)
- [heightProperty](Container.md#heightproperty)
- [horizontalAlignmentProperty](Container.md#horizontalalignmentproperty)
- [idProperty](Container.md#idproperty)
- [isVisibleProperty](Container.md#isvisibleproperty)
- [langProperty](Container.md#langproperty)
- [minHeightProperty](Container.md#minheightproperty)
- [onRegisterCustomProperties](Container.md#onregistercustomproperties)
- [requiresProperty](Container.md#requiresproperty)
- [rtlProperty](Container.md#rtlproperty)
- [rulesProperty](Container.md#rulesproperty)
- [selectActionProperty](Container.md#selectactionproperty)
- [separatorProperty](Container.md#separatorproperty)
- [spacingProperty](Container.md#spacingproperty)
- [styleProperty](Container.md#styleproperty)
- [typeNameProperty](Container.md#typenameproperty)
- [verticalContentAlignmentProperty](Container.md#verticalcontentalignmentproperty)

### Accessors

- [allowCustomPadding](Container.md#allowcustompadding)
- [allowCustomStyle](Container.md#allowcustomstyle)
- [backgroundImage](Container.md#backgroundimage)
- [bleed](Container.md#bleed)
- [defaultStyle](Container.md#defaultstyle)
- [hasExplicitStyle](Container.md#hasexplicitstyle)
- [hasVisibleSeparator](Container.md#hasvisibleseparator)
- [hostConfig](Container.md#hostconfig)
- [index](Container.md#index)
- [isInline](Container.md#isinline)
- [isInteractive](Container.md#isinteractive)
- [isSelectable](Container.md#isselectable)
- [isStandalone](Container.md#isstandalone)
- [isVisible](Container.md#isvisible)
- [lang](Container.md#lang)
- [padding](Container.md#padding)
- [parent](Container.md#parent)
- [renderedActionCount](Container.md#renderedactioncount)
- [renderedElement](Container.md#renderedelement)
- [requires](Container.md#requires)
- [selectAction](Container.md#selectaction)
- [separatorElement](Container.md#separatorelement)
- [separatorOrientation](Container.md#separatororientation)
- [style](Container.md#style)
- [useDefaultSizing](Container.md#usedefaultsizing)

### Methods

- [addItem](Container.md#additem)
- [adjustRenderedElementSize](Container.md#adjustrenderedelementsize)
- [applyBackground](Container.md#applybackground)
- [applyPadding](Container.md#applypadding)
- [asString](Container.md#asstring)
- [clear](Container.md#clear)
- [createPlaceholderElement](Container.md#createplaceholderelement)
- [getActionAt](Container.md#getactionat)
- [getActionById](Container.md#getactionbyid)
- [getActionCount](Container.md#getactioncount)
- [getAllInputs](Container.md#getallinputs)
- [getBleed](Container.md#getbleed)
- [getCustomProperty](Container.md#getcustomproperty)
- [getDefaultPadding](Container.md#getdefaultpadding)
- [getDefaultSerializationContext](Container.md#getdefaultserializationcontext)
- [getEffectivePadding](Container.md#geteffectivepadding)
- [getEffectiveStyle](Container.md#geteffectivestyle)
- [getEffectiveStyleDefinition](Container.md#geteffectivestyledefinition)
- [getElementById](Container.md#getelementbyid)
- [getFirstVisibleRenderedItem](Container.md#getfirstvisiblerendereditem)
- [getForbiddenActionTypes](Container.md#getforbiddenactiontypes)
- [getHasBackground](Container.md#gethasbackground)
- [getHasExpandedAction](Container.md#gethasexpandedaction)
- [getImmediateSurroundingPadding](Container.md#getimmediatesurroundingpadding)
- [getItemAt](Container.md#getitemat)
- [getItemCount](Container.md#getitemcount)
- [getItemsCollectionPropertyName](Container.md#getitemscollectionpropertyname)
- [getJsonTypeName](Container.md#getjsontypename)
- [getLastVisibleRenderedItem](Container.md#getlastvisiblerendereditem)
- [getPadding](Container.md#getpadding)
- [getParentContainer](Container.md#getparentcontainer)
- [getResourceInformation](Container.md#getresourceinformation)
- [getRootElement](Container.md#getrootelement)
- [getRootObject](Container.md#getrootobject)
- [getSchema](Container.md#getschema)
- [getSchemaKey](Container.md#getschemakey)
- [getValue](Container.md#getvalue)
- [hasAllDefaultValues](Container.md#hasalldefaultvalues)
- [hasDefaultValue](Container.md#hasdefaultvalue)
- [indexOf](Container.md#indexof)
- [insertItemAfter](Container.md#insertitemafter)
- [insertItemBefore](Container.md#insertitembefore)
- [internalParse](Container.md#internalparse)
- [internalRender](Container.md#internalrender)
- [internalToJSON](Container.md#internaltojson)
- [internalValidateProperties](Container.md#internalvalidateproperties)
- [isAtTheVeryBottom](Container.md#isattheverybottom)
- [isAtTheVeryLeft](Container.md#isattheveryleft)
- [isAtTheVeryRight](Container.md#isattheveryright)
- [isAtTheVeryTop](Container.md#isattheverytop)
- [isBleeding](Container.md#isbleeding)
- [isBleedingAtBottom](Container.md#isbleedingatbottom)
- [isBleedingAtTop](Container.md#isbleedingattop)
- [isBottomElement](Container.md#isbottomelement)
- [isDesignMode](Container.md#isdesignmode)
- [isDisplayed](Container.md#isdisplayed)
- [isElementAllowed](Container.md#iselementallowed)
- [isFirstElement](Container.md#isfirstelement)
- [isHiddenDueToOverflow](Container.md#ishiddenduetooverflow)
- [isLastElement](Container.md#islastelement)
- [isLeftMostElement](Container.md#isleftmostelement)
- [isRightMostElement](Container.md#isrightmostelement)
- [isRtl](Container.md#isrtl)
- [isTopElement](Container.md#istopelement)
- [overrideInternalRender](Container.md#overrideinternalrender)
- [parse](Container.md#parse)
- [populateSchema](Container.md#populateschema)
- [preProcessPropertyValue](Container.md#preprocesspropertyvalue)
- [remove](Container.md#remove)
- [removeItem](Container.md#removeitem)
- [render](Container.md#render)
- [resetDefaultValues](Container.md#resetdefaultvalues)
- [setBleed](Container.md#setbleed)
- [setCustomProperty](Container.md#setcustomproperty)
- [setPadding](Container.md#setpadding)
- [setParent](Container.md#setparent)
- [setShouldFallback](Container.md#setshouldfallback)
- [setValue](Container.md#setvalue)
- [shouldFallback](Container.md#shouldfallback)
- [shouldSerialize](Container.md#shouldserialize)
- [supportsExcplitiHeight](Container.md#supportsexcplitiheight)
- [toJSON](Container.md#tojson)
- [truncateOverflow](Container.md#truncateoverflow)
- [undoOverflowTruncation](Container.md#undooverflowtruncation)
- [updateLayout](Container.md#updatelayout)
- [validateProperties](Container.md#validateproperties)

## Constructors

### constructor

• **new Container**()

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[constructor](StylableCardElementContainer.md#constructor)

#### Defined in

[serialization.ts:951](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L951)

## Properties

### \_items

• **\_items**: [`CardElement`](CardElement.md)[] = `[]`

#### Defined in

[card-elements.ts:5885](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5885)

___

### \_parent

• `Protected` `Optional` **\_parent**: [`CardObject`](CardObject.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[_parent](StylableCardElementContainer.md#_parent)

#### Defined in

[card-object.ts:63](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L63)

___

### \_renderedElement

• `Protected` `Optional` **\_renderedElement**: `HTMLElement`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[_renderedElement](StylableCardElementContainer.md#_renderedelement)

#### Defined in

[card-object.ts:64](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L64)

___

### \_selectAction

• `Protected` `Optional` **\_selectAction**: [`Action`](Action.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[_selectAction](StylableCardElementContainer.md#_selectaction)

#### Defined in

[card-elements.ts:1937](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1937)

___

### allowVerticalOverflow

• **allowVerticalOverflow**: `boolean` = `false`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[allowVerticalOverflow](StylableCardElementContainer.md#allowverticaloverflow)

#### Defined in

[card-elements.ts:1977](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1977)

___

### customCssSelector

• `Optional` **customCssSelector**: `string`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[customCssSelector](StylableCardElementContainer.md#customcssselector)

#### Defined in

[card-elements.ts:426](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L426)

___

### height

• **height**: [`CardElementHeight`](../README.md#cardelementheight)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[height](StylableCardElementContainer.md#height)

#### Defined in

[card-elements.ts:149](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L149)

___

### horizontalAlignment

• **horizontalAlignment**: [`HorizontalAlignment`](../enums/HorizontalAlignment.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[horizontalAlignment](StylableCardElementContainer.md#horizontalalignment)

#### Defined in

[card-elements.ts:140](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L140)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[id](StylableCardElementContainer.md#id)

#### Defined in

[card-object.ts:52](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L52)

___

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[maxVersion](StylableCardElementContainer.md#maxversion)

#### Defined in

[serialization.ts:949](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L949)

___

### minPixelHeight

• `Optional` **minPixelHeight**: `number`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[minPixelHeight](StylableCardElementContainer.md#minpixelheight)

#### Defined in

[card-elements.ts:5411](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5411)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[onPreProcessPropertyValue](StylableCardElementContainer.md#onpreprocesspropertyvalue)

#### Defined in

[card-object.ts:66](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L66)

___

### rtl

• `Optional` **rtl**: `boolean`

#### Defined in

[card-elements.ts:5881](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5881)

___

### rules

• **rules**: [`RuleParam`](RuleParam.md)[]

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[rules](StylableCardElementContainer.md#rules)

#### Defined in

[card-elements.ts:201](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L201)

___

### separator

• **separator**: `boolean`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[separator](StylableCardElementContainer.md#separator)

#### Defined in

[card-elements.ts:146](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L146)

___

### spacing

• **spacing**: [`Spacing`](../enums/Spacing.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[spacing](StylableCardElementContainer.md#spacing)

#### Defined in

[card-elements.ts:143](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L143)

___

### verticalContentAlignment

• **verticalContentAlignment**: [`VerticalAlignment`](../enums/VerticalAlignment.md) = `Enums.VerticalAlignment.Top`

#### Defined in

[card-elements.ts:5878](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5878)

___

### backgroundImageProperty

▪ `Static` `Readonly` **backgroundImageProperty**: [`SerializableObjectProperty`](SerializableObjectProperty.md)

#### Defined in

[card-elements.ts:5865](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5865)

___

### bleedProperty

▪ `Static` `Readonly` **bleedProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[bleedProperty](StylableCardElementContainer.md#bleedproperty)

#### Defined in

[card-elements.ts:5387](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5387)

___

### heightProperty

▪ `Static` `Readonly` **heightProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[heightProperty](StylableCardElementContainer.md#heightproperty)

#### Defined in

[card-elements.ts:120](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L120)

___

### horizontalAlignmentProperty

▪ `Static` `Readonly` **horizontalAlignmentProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`HorizontalAlignment`](../enums/HorizontalAlignment.md)\>

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[horizontalAlignmentProperty](StylableCardElementContainer.md#horizontalalignmentproperty)

#### Defined in

[card-elements.ts:128](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L128)

___

### idProperty

▪ `Static` `Readonly` **idProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[idProperty](StylableCardElementContainer.md#idproperty)

#### Defined in

[card-object.ts:40](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L40)

___

### isVisibleProperty

▪ `Static` `Readonly` **isVisibleProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[isVisibleProperty](StylableCardElementContainer.md#isvisibleproperty)

#### Defined in

[card-elements.ts:117](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L117)

___

### langProperty

▪ `Static` `Readonly` **langProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[langProperty](StylableCardElementContainer.md#langproperty)

#### Defined in

[card-elements.ts:116](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L116)

___

### minHeightProperty

▪ `Static` `Readonly` **minHeightProperty**: [`PixelSizeProperty`](PixelSizeProperty.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[minHeightProperty](StylableCardElementContainer.md#minheightproperty)

#### Defined in

[card-elements.ts:5388](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5388)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[onRegisterCustomProperties](StylableCardElementContainer.md#onregistercustomproperties)

#### Defined in

[serialization.ts:809](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L809)

___

### requiresProperty

▪ `Static` `Readonly` **requiresProperty**: [`SerializableObjectProperty`](SerializableObjectProperty.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[requiresProperty](StylableCardElementContainer.md#requiresproperty)

#### Defined in

[card-object.ts:41](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L41)

___

### rtlProperty

▪ `Static` `Readonly` **rtlProperty**: [`BoolProperty`](BoolProperty.md)

#### Defined in

[card-elements.ts:5870](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5870)

___

### rulesProperty

▪ `Static` `Readonly` **rulesProperty**: [`SerializableObjectCollectionProperty`](SerializableObjectCollectionProperty.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[rulesProperty](StylableCardElementContainer.md#rulesproperty)

#### Defined in

[card-elements.ts:119](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L119)

___

### selectActionProperty

▪ `Static` `Readonly` **selectActionProperty**: [`ActionProperty`](ActionProperty.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[selectActionProperty](StylableCardElementContainer.md#selectactionproperty)

#### Defined in

[card-elements.ts:1926](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1926)

___

### separatorProperty

▪ `Static` `Readonly` **separatorProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[separatorProperty](StylableCardElementContainer.md#separatorproperty)

#### Defined in

[card-elements.ts:118](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L118)

___

### spacingProperty

▪ `Static` `Readonly` **spacingProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`Spacing`](../enums/Spacing.md)\>

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[spacingProperty](StylableCardElementContainer.md#spacingproperty)

#### Defined in

[card-elements.ts:133](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L133)

___

### styleProperty

▪ `Static` `Readonly` **styleProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[styleProperty](StylableCardElementContainer.md#styleproperty)

#### Defined in

[card-elements.ts:5376](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5376)

___

### typeNameProperty

▪ `Static` `Readonly` **typeNameProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[typeNameProperty](StylableCardElementContainer.md#typenameproperty)

#### Defined in

[card-object.ts:31](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L31)

___

### verticalContentAlignmentProperty

▪ `Static` `Readonly` **verticalContentAlignmentProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`VerticalAlignment`](../enums/VerticalAlignment.md)\>

#### Defined in

[card-elements.ts:5869](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5869)

## Accessors

### allowCustomPadding

• `Protected` `get` **allowCustomPadding**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StylableCardElementContainer.allowCustomPadding

#### Defined in

[card-elements.ts:414](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L414)

___

### allowCustomStyle

• `Protected` `get` **allowCustomStyle**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StylableCardElementContainer.allowCustomStyle

#### Defined in

[card-elements.ts:5534](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5534)

___

### backgroundImage

• `get` **backgroundImage**(): [`BackgroundImage`](BackgroundImage.md)

#### Returns

[`BackgroundImage`](BackgroundImage.md)

#### Defined in

[card-elements.ts:5872](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5872)

___

### bleed

• `get` **bleed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[card-elements.ts:6252](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6252)

• `set` **bleed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[card-elements.ts:6256](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6256)

___

### defaultStyle

• `Protected` `get` **defaultStyle**(): `string`

#### Returns

`string`

#### Inherited from

StylableCardElementContainer.defaultStyle

#### Defined in

[card-elements.ts:422](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L422)

___

### hasExplicitStyle

• `Protected` `get` **hasExplicitStyle**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StylableCardElementContainer.hasExplicitStyle

#### Defined in

[card-elements.ts:5530](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5530)

___

### hasVisibleSeparator

• `get` **hasVisibleSeparator**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StylableCardElementContainer.hasVisibleSeparator

#### Defined in

[card-elements.ts:695](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L695)

___

### hostConfig

• `get` **hostConfig**(): [`HostConfig`](HostConfig.md)

#### Returns

[`HostConfig`](HostConfig.md)

#### Inherited from

StylableCardElementContainer.hostConfig

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

StylableCardElementContainer.hostConfig

#### Defined in

[card-elements.ts:670](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L670)

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

StylableCardElementContainer.index

#### Defined in

[card-elements.ts:674](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L674)

___

### isInline

• `get` **isInline**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StylableCardElementContainer.isInline

#### Defined in

[card-elements.ts:691](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L691)

___

### isInteractive

• `get` **isInteractive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StylableCardElementContainer.isInteractive

#### Defined in

[card-elements.ts:683](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L683)

___

### isSelectable

• `Protected` `get` **isSelectable**(): `boolean`

#### Returns

`boolean`

#### Overrides

StylableCardElementContainer.isSelectable

#### Defined in

[card-elements.ts:6075](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6075)

___

### isStandalone

• `get` **isStandalone**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StylableCardElementContainer.isStandalone

#### Defined in

[card-elements.ts:687](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L687)

___

### isVisible

• `get` **isVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StylableCardElementContainer.isVisible

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

StylableCardElementContainer.isVisible

#### Defined in

[card-elements.ts:177](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L177)

___

### lang

• `get` **lang**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

StylableCardElementContainer.lang

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

StylableCardElementContainer.lang

#### Defined in

[card-elements.ts:168](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L168)

___

### padding

• `get` **padding**(): `undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

`undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Defined in

[card-elements.ts:6236](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6236)

• `set` **padding**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`PaddingDefinition`](PaddingDefinition.md) |

#### Returns

`void`

#### Defined in

[card-elements.ts:6240](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6240)

___

### parent

• `get` **parent**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Inherited from

StylableCardElementContainer.parent

#### Defined in

[card-elements.ts:708](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L708)

___

### renderedActionCount

• `Protected` `get` **renderedActionCount**(): `number`

#### Returns

`number`

#### Inherited from

StylableCardElementContainer.renderedActionCount

#### Defined in

[card-elements.ts:5526](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5526)

___

### renderedElement

• `get` **renderedElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

StylableCardElementContainer.renderedElement

#### Defined in

[card-object.ts:142](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L142)

___

### requires

• `get` **requires**(): `HostCapabilities`

#### Returns

`HostCapabilities`

#### Inherited from

StylableCardElementContainer.requires

#### Defined in

[card-object.ts:54](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L54)

___

### selectAction

• `get` **selectAction**(): `undefined` \| [`Action`](Action.md)

#### Returns

`undefined` \| [`Action`](Action.md)

#### Defined in

[card-elements.ts:6244](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6244)

• `set` **selectAction**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`Action`](Action.md) |

#### Returns

`void`

#### Defined in

[card-elements.ts:6248](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6248)

___

### separatorElement

• `get` **separatorElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

StylableCardElementContainer.separatorElement

#### Defined in

[card-elements.ts:704](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L704)

___

### separatorOrientation

• `Protected` `get` **separatorOrientation**(): [`Orientation`](../enums/Orientation.md)

#### Returns

[`Orientation`](../enums/Orientation.md)

#### Inherited from

StylableCardElementContainer.separatorOrientation

#### Defined in

[card-elements.ts:418](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L418)

___

### style

• `get` **style**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

StylableCardElementContainer.style

#### Defined in

[card-elements.ts:5390](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5390)

• `set` **style**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

StylableCardElementContainer.style

#### Defined in

[card-elements.ts:5403](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5403)

___

### useDefaultSizing

• `Protected` `get` **useDefaultSizing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StylableCardElementContainer.useDefaultSizing

#### Defined in

[card-elements.ts:410](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L410)

## Methods

### addItem

▸ **addItem**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`CardElement`](CardElement.md) |

#### Returns

`void`

#### Defined in

[card-elements.ts:6166](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6166)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[adjustRenderedElementSize](StylableCardElementContainer.md#adjustrenderedelementsize)

#### Defined in

[card-elements.ts:5415](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5415)

___

### applyBackground

▸ `Protected` **applyBackground**(): `void`

#### Returns

`void`

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[applyBackground](StylableCardElementContainer.md#applybackground)

#### Defined in

[card-elements.ts:5920](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5920)

___

### applyPadding

▸ `Protected` **applyPadding**(): `void`

#### Returns

`void`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[applyPadding](StylableCardElementContainer.md#applypadding)

#### Defined in

[card-elements.ts:5435](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5435)

___

### asString

▸ **asString**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[asString](StylableCardElementContainer.md#asstring)

#### Defined in

[card-elements.ts:432](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L432)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[card-elements.ts:6194](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6194)

___

### createPlaceholderElement

▸ `Protected` **createPlaceholderElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[createPlaceholderElement](StylableCardElementContainer.md#createplaceholderelement)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[getActionAt](StylableCardElementContainer.md#getactionat)

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

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[getActionById](StylableCardElementContainer.md#getactionbyid)

#### Defined in

[card-elements.ts:6214](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6214)

___

### getActionCount

▸ **getActionCount**(): `number`

#### Returns

`number`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getActionCount](StylableCardElementContainer.md#getactioncount)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[getAllInputs](StylableCardElementContainer.md#getallinputs)

#### Defined in

[card-elements.ts:2062](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2062)

___

### getBleed

▸ `Protected` **getBleed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getBleed](StylableCardElementContainer.md#getbleed)

#### Defined in

[card-elements.ts:5518](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5518)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[getCustomProperty](StylableCardElementContainer.md#getcustomproperty)

#### Defined in

[serialization.ts:1040](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1040)

___

### getDefaultPadding

▸ `Protected` **getDefaultPadding**(): [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

[`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getDefaultPadding](StylableCardElementContainer.md#getdefaultpadding)

#### Defined in

[card-elements.ts:5505](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5505)

___

### getDefaultSerializationContext

▸ `Protected` **getDefaultSerializationContext**(): [`BaseSerializationContext`](BaseSerializationContext.md)

#### Returns

[`BaseSerializationContext`](BaseSerializationContext.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getDefaultSerializationContext](StylableCardElementContainer.md#getdefaultserializationcontext)

#### Defined in

[card-elements.ts:316](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L316)

___

### getEffectivePadding

▸ **getEffectivePadding**(): [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

[`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getEffectivePadding](StylableCardElementContainer.md#geteffectivepadding)

#### Defined in

[card-elements.ts:650](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L650)

___

### getEffectiveStyle

▸ **getEffectiveStyle**(): `string`

#### Returns

`string`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getEffectiveStyle](StylableCardElementContainer.md#geteffectivestyle)

#### Defined in

[card-elements.ts:5569](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5569)

___

### getEffectiveStyleDefinition

▸ **getEffectiveStyleDefinition**(): [`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Returns

[`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getEffectiveStyleDefinition](StylableCardElementContainer.md#geteffectivestyledefinition)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[getElementById](StylableCardElementContainer.md#getelementbyid)

#### Defined in

[card-elements.ts:2082](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2082)

___

### getFirstVisibleRenderedItem

▸ **getFirstVisibleRenderedItem**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[getFirstVisibleRenderedItem](StylableCardElementContainer.md#getfirstvisiblerendereditem)

#### Defined in

[card-elements.ts:6087](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6087)

___

### getForbiddenActionTypes

▸ **getForbiddenActionTypes**(): [`ActionType`](../README.md#actiontype)[]

#### Returns

[`ActionType`](../README.md#actiontype)[]

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getForbiddenActionTypes](StylableCardElementContainer.md#getforbiddenactiontypes)

#### Defined in

[card-elements.ts:452](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L452)

___

### getHasBackground

▸ `Protected` **getHasBackground**(): `boolean`

#### Returns

`boolean`

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[getHasBackground](StylableCardElementContainer.md#gethasbackground)

#### Defined in

[card-elements.ts:6046](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6046)

___

### getHasExpandedAction

▸ `Protected` **getHasExpandedAction**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getHasExpandedAction](StylableCardElementContainer.md#gethasexpandedaction)

#### Defined in

[card-elements.ts:5514](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5514)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[getImmediateSurroundingPadding](StylableCardElementContainer.md#getimmediatesurroundingpadding)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[getItemAt](StylableCardElementContainer.md#getitemat)

#### Defined in

[card-elements.ts:6083](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6083)

___

### getItemCount

▸ **getItemCount**(): `number`

#### Returns

`number`

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[getItemCount](StylableCardElementContainer.md#getitemcount)

#### Defined in

[card-elements.ts:6079](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6079)

___

### getItemsCollectionPropertyName

▸ `Protected` **getItemsCollectionPropertyName**(): `string`

#### Returns

`string`

#### Defined in

[card-elements.ts:5916](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5916)

___

### getJsonTypeName

▸ **getJsonTypeName**(): `string`

#### Returns

`string`

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[getJsonTypeName](StylableCardElementContainer.md#getjsontypename)

#### Defined in

[card-elements.ts:6111](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6111)

___

### getLastVisibleRenderedItem

▸ **getLastVisibleRenderedItem**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[getLastVisibleRenderedItem](StylableCardElementContainer.md#getlastvisiblerendereditem)

#### Defined in

[card-elements.ts:6099](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6099)

___

### getPadding

▸ `Protected` **getPadding**(): `undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

`undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getPadding](StylableCardElementContainer.md#getpadding)

#### Defined in

[card-elements.ts:398](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L398)

___

### getParentContainer

▸ **getParentContainer**(): `undefined` \| [`Container`](Container.md)

#### Returns

`undefined` \| [`Container`](Container.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getParentContainer](StylableCardElementContainer.md#getparentcontainer)

#### Defined in

[card-elements.ts:620](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L620)

___

### getResourceInformation

▸ **getResourceInformation**(): [`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Returns

[`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[getResourceInformation](StylableCardElementContainer.md#getresourceinformation)

#### Defined in

[card-elements.ts:6199](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6199)

___

### getRootElement

▸ **getRootElement**(): [`CardElement`](CardElement.md)

#### Returns

[`CardElement`](CardElement.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getRootElement](StylableCardElementContainer.md#getrootelement)

#### Defined in

[card-elements.ts:616](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L616)

___

### getRootObject

▸ **getRootObject**(): [`CardObject`](CardObject.md)

#### Returns

[`CardObject`](CardObject.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getRootObject](StylableCardElementContainer.md#getrootobject)

#### Defined in

[card-object.ts:102](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L102)

___

### getSchema

▸ **getSchema**(): [`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Returns

[`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getSchema](StylableCardElementContainer.md#getschema)

#### Defined in

[serialization.ts:1044](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1044)

___

### getSchemaKey

▸ `Protected` **getSchemaKey**(): `string`

#### Returns

`string`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[getSchemaKey](StylableCardElementContainer.md#getschemakey)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[getValue](StylableCardElementContainer.md#getvalue)

#### Defined in

[serialization.ts:875](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L875)

___

### hasAllDefaultValues

▸ **hasAllDefaultValues**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[hasAllDefaultValues](StylableCardElementContainer.md#hasalldefaultvalues)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[hasDefaultValue](StylableCardElementContainer.md#hasdefaultvalue)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[indexOf](StylableCardElementContainer.md#indexof)

#### Defined in

[card-elements.ts:6162](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6162)

___

### insertItemAfter

▸ **insertItemAfter**(`item`, `insertAfter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`CardElement`](CardElement.md) |
| `insertAfter` | [`CardElement`](CardElement.md) |

#### Returns

`void`

#### Defined in

[card-elements.ts:6174](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6174)

___

### insertItemBefore

▸ **insertItemBefore**(`item`, `insertBefore`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`CardElement`](CardElement.md) |
| `insertBefore` | [`CardElement`](CardElement.md) |

#### Returns

`void`

#### Defined in

[card-elements.ts:6170](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6170)

___

### internalParse

▸ `Protected` **internalParse**(`source`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `any` |
| `context` | [`SerializationContext`](SerializationContext.md) |

#### Returns

`void`

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[internalParse](StylableCardElementContainer.md#internalparse)

#### Defined in

[card-elements.ts:6050](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6050)

___

### internalRender

▸ `Protected` **internalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[internalRender](StylableCardElementContainer.md#internalrender)

#### Defined in

[card-elements.ts:5928](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5928)

___

### internalToJSON

▸ `Protected` **internalToJSON**(`target`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`SerializationContext`](SerializationContext.md) |

#### Returns

`void`

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[internalToJSON](StylableCardElementContainer.md#internaltojson)

#### Defined in

[card-elements.ts:6069](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6069)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[internalValidateProperties](StylableCardElementContainer.md#internalvalidateproperties)

#### Defined in

[card-elements.ts:5542](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5542)

___

### isAtTheVeryBottom

▸ **isAtTheVeryBottom**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[isAtTheVeryBottom](StylableCardElementContainer.md#isattheverybottom)

#### Defined in

[card-elements.ts:584](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L584)

___

### isAtTheVeryLeft

▸ **isAtTheVeryLeft**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[isAtTheVeryLeft](StylableCardElementContainer.md#isattheveryleft)

#### Defined in

[card-elements.ts:572](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L572)

___

### isAtTheVeryRight

▸ **isAtTheVeryRight**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[isAtTheVeryRight](StylableCardElementContainer.md#isattheveryright)

#### Defined in

[card-elements.ts:576](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L576)

___

### isAtTheVeryTop

▸ **isAtTheVeryTop**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[isAtTheVeryTop](StylableCardElementContainer.md#isattheverytop)

#### Defined in

[card-elements.ts:580](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L580)

___

### isBleeding

▸ **isBleeding**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[isBleeding](StylableCardElementContainer.md#isbleeding)

#### Defined in

[card-elements.ts:5538](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5538)

___

### isBleedingAtBottom

▸ **isBleedingAtBottom**(): `boolean`

#### Returns

`boolean`

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[isBleedingAtBottom](StylableCardElementContainer.md#isbleedingatbottom)

#### Defined in

[card-elements.ts:6156](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6156)

___

### isBleedingAtTop

▸ **isBleedingAtTop**(): `boolean`

#### Returns

`boolean`

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[isBleedingAtTop](StylableCardElementContainer.md#isbleedingattop)

#### Defined in

[card-elements.ts:6150](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6150)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[isBottomElement](StylableCardElementContainer.md#isbottomelement)

#### Defined in

[card-elements.ts:608](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L608)

___

### isDesignMode

▸ **isDesignMode**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[isDesignMode](StylableCardElementContainer.md#isdesignmode)

#### Defined in

[card-elements.ts:558](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L558)

___

### isDisplayed

▸ `Protected` **isDisplayed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[isDisplayed](StylableCardElementContainer.md#isdisplayed)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[isElementAllowed](StylableCardElementContainer.md#iselementallowed)

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

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[isFirstElement](StylableCardElementContainer.md#isfirstelement)

#### Defined in

[card-elements.ts:6115](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6115)

___

### isHiddenDueToOverflow

▸ **isHiddenDueToOverflow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[isHiddenDueToOverflow](StylableCardElementContainer.md#ishiddenduetooverflow)

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

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[isLastElement](StylableCardElementContainer.md#islastelement)

#### Defined in

[card-elements.ts:6127](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6127)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[isLeftMostElement](StylableCardElementContainer.md#isleftmostelement)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[isRightMostElement](StylableCardElementContainer.md#isrightmostelement)

#### Defined in

[card-elements.ts:600](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L600)

___

### isRtl

▸ **isRtl**(): `boolean`

#### Returns

`boolean`

#### Defined in

[card-elements.ts:6139](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6139)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[isTopElement](StylableCardElementContainer.md#istopelement)

#### Defined in

[card-elements.ts:604](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L604)

___

### overrideInternalRender

▸ `Protected` **overrideInternalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[overrideInternalRender](StylableCardElementContainer.md#overrideinternalrender)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[parse](StylableCardElementContainer.md#parse)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[populateSchema](StylableCardElementContainer.md#populateschema)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[preProcessPropertyValue](StylableCardElementContainer.md#preprocesspropertyvalue)

#### Defined in

[card-object.ts:72](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L72)

___

### remove

▸ **remove**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[remove](StylableCardElementContainer.md#remove)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[removeItem](StylableCardElementContainer.md#removeitem)

#### Defined in

[card-elements.ts:6178](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6178)

___

### render

▸ **render**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[render](StylableCardElementContainer.md#render)

#### Defined in

[card-elements.ts:5559](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5559)

___

### resetDefaultValues

▸ **resetDefaultValues**(): `void`

#### Returns

`void`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[resetDefaultValues](StylableCardElementContainer.md#resetdefaultvalues)

#### Defined in

[serialization.ts:1019](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1019)

___

### setBleed

▸ `Protected` **setBleed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[setBleed](StylableCardElementContainer.md#setbleed)

#### Defined in

[card-elements.ts:5522](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5522)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[setCustomProperty](StylableCardElementContainer.md#setcustomproperty)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[setPadding](StylableCardElementContainer.md#setpadding)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[setParent](StylableCardElementContainer.md#setparent)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[setShouldFallback](StylableCardElementContainer.md#setshouldfallback)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[setValue](StylableCardElementContainer.md#setvalue)

#### Defined in

[serialization.ts:879](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L879)

___

### shouldFallback

▸ **shouldFallback**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[shouldFallback](StylableCardElementContainer.md#shouldfallback)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[shouldSerialize](StylableCardElementContainer.md#shouldserialize)

#### Defined in

[card-elements.ts:406](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L406)

___

### supportsExcplitiHeight

▸ `Protected` **supportsExcplitiHeight**(): `boolean`

#### Returns

`boolean`

#### Defined in

[card-elements.ts:5912](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5912)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[toJSON](StylableCardElementContainer.md#tojson)

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

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[truncateOverflow](StylableCardElementContainer.md#truncateoverflow)

#### Defined in

[card-elements.ts:6001](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6001)

___

### undoOverflowTruncation

▸ `Protected` **undoOverflowTruncation**(): `void`

#### Returns

`void`

#### Overrides

[StylableCardElementContainer](StylableCardElementContainer.md).[undoOverflowTruncation](StylableCardElementContainer.md#undooverflowtruncation)

#### Defined in

[card-elements.ts:6040](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6040)

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

[StylableCardElementContainer](StylableCardElementContainer.md).[updateLayout](StylableCardElementContainer.md#updatelayout)

#### Defined in

[card-elements.ts:2052](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2052)

___

### validateProperties

▸ **validateProperties**(): [`ValidationResults`](ValidationResults.md)

#### Returns

[`ValidationResults`](ValidationResults.md)

#### Inherited from

[StylableCardElementContainer](StylableCardElementContainer.md).[validateProperties](StylableCardElementContainer.md#validateproperties)

#### Defined in

[card-object.ts:130](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L130)
