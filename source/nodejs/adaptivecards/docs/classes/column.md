[Adaptive Cards Javascript SDK](../README.md) / Column

# Class: Column

## Hierarchy

- [`Container`](Container.md)

  ↳ **`Column`**

## Table of contents

### Constructors

- [constructor](Column.md#constructor)

### Properties

- [\_items](Column.md#_items)
- [\_parent](Column.md#_parent)
- [\_renderedElement](Column.md#_renderedelement)
- [\_selectAction](Column.md#_selectaction)
- [allowVerticalOverflow](Column.md#allowverticaloverflow)
- [customCssSelector](Column.md#customcssselector)
- [height](Column.md#height)
- [horizontalAlignment](Column.md#horizontalalignment)
- [id](Column.md#id)
- [maxVersion](Column.md#maxversion)
- [minPixelHeight](Column.md#minpixelheight)
- [onPreProcessPropertyValue](Column.md#onpreprocesspropertyvalue)
- [rtl](Column.md#rtl)
- [rules](Column.md#rules)
- [separator](Column.md#separator)
- [spacing](Column.md#spacing)
- [verticalContentAlignment](Column.md#verticalcontentalignment)
- [width](Column.md#width)
- [backgroundImageProperty](Column.md#backgroundimageproperty)
- [bleedProperty](Column.md#bleedproperty)
- [heightProperty](Column.md#heightproperty)
- [horizontalAlignmentProperty](Column.md#horizontalalignmentproperty)
- [idProperty](Column.md#idproperty)
- [isVisibleProperty](Column.md#isvisibleproperty)
- [langProperty](Column.md#langproperty)
- [minHeightProperty](Column.md#minheightproperty)
- [onRegisterCustomProperties](Column.md#onregistercustomproperties)
- [requiresProperty](Column.md#requiresproperty)
- [rtlProperty](Column.md#rtlproperty)
- [rulesProperty](Column.md#rulesproperty)
- [selectActionProperty](Column.md#selectactionproperty)
- [separatorProperty](Column.md#separatorproperty)
- [spacingProperty](Column.md#spacingproperty)
- [styleProperty](Column.md#styleproperty)
- [typeNameProperty](Column.md#typenameproperty)
- [verticalContentAlignmentProperty](Column.md#verticalcontentalignmentproperty)
- [widthProperty](Column.md#widthproperty)

### Accessors

- [allowCustomPadding](Column.md#allowcustompadding)
- [allowCustomStyle](Column.md#allowcustomstyle)
- [backgroundImage](Column.md#backgroundimage)
- [bleed](Column.md#bleed)
- [defaultStyle](Column.md#defaultstyle)
- [hasExplicitStyle](Column.md#hasexplicitstyle)
- [hasVisibleSeparator](Column.md#hasvisibleseparator)
- [hostConfig](Column.md#hostconfig)
- [index](Column.md#index)
- [isInline](Column.md#isinline)
- [isInteractive](Column.md#isinteractive)
- [isSelectable](Column.md#isselectable)
- [isStandalone](Column.md#isstandalone)
- [isVisible](Column.md#isvisible)
- [lang](Column.md#lang)
- [padding](Column.md#padding)
- [parent](Column.md#parent)
- [renderedActionCount](Column.md#renderedactioncount)
- [renderedElement](Column.md#renderedelement)
- [requires](Column.md#requires)
- [selectAction](Column.md#selectaction)
- [separatorElement](Column.md#separatorelement)
- [separatorOrientation](Column.md#separatororientation)
- [style](Column.md#style)
- [useDefaultSizing](Column.md#usedefaultsizing)

### Methods

- [addItem](Column.md#additem)
- [adjustRenderedElementSize](Column.md#adjustrenderedelementsize)
- [applyBackground](Column.md#applybackground)
- [applyPadding](Column.md#applypadding)
- [asString](Column.md#asstring)
- [clear](Column.md#clear)
- [createPlaceholderElement](Column.md#createplaceholderelement)
- [getActionAt](Column.md#getactionat)
- [getActionById](Column.md#getactionbyid)
- [getActionCount](Column.md#getactioncount)
- [getAllInputs](Column.md#getallinputs)
- [getBleed](Column.md#getbleed)
- [getCustomProperty](Column.md#getcustomproperty)
- [getDefaultPadding](Column.md#getdefaultpadding)
- [getDefaultSerializationContext](Column.md#getdefaultserializationcontext)
- [getEffectivePadding](Column.md#geteffectivepadding)
- [getEffectiveStyle](Column.md#geteffectivestyle)
- [getEffectiveStyleDefinition](Column.md#geteffectivestyledefinition)
- [getElementById](Column.md#getelementbyid)
- [getFirstVisibleRenderedItem](Column.md#getfirstvisiblerendereditem)
- [getForbiddenActionTypes](Column.md#getforbiddenactiontypes)
- [getHasBackground](Column.md#gethasbackground)
- [getHasExpandedAction](Column.md#gethasexpandedaction)
- [getImmediateSurroundingPadding](Column.md#getimmediatesurroundingpadding)
- [getItemAt](Column.md#getitemat)
- [getItemCount](Column.md#getitemcount)
- [getItemsCollectionPropertyName](Column.md#getitemscollectionpropertyname)
- [getJsonTypeName](Column.md#getjsontypename)
- [getLastVisibleRenderedItem](Column.md#getlastvisiblerendereditem)
- [getPadding](Column.md#getpadding)
- [getParentContainer](Column.md#getparentcontainer)
- [getResourceInformation](Column.md#getresourceinformation)
- [getRootElement](Column.md#getrootelement)
- [getRootObject](Column.md#getrootobject)
- [getSchema](Column.md#getschema)
- [getSchemaKey](Column.md#getschemakey)
- [getValue](Column.md#getvalue)
- [hasAllDefaultValues](Column.md#hasalldefaultvalues)
- [hasDefaultValue](Column.md#hasdefaultvalue)
- [indexOf](Column.md#indexof)
- [insertItemAfter](Column.md#insertitemafter)
- [insertItemBefore](Column.md#insertitembefore)
- [internalParse](Column.md#internalparse)
- [internalRender](Column.md#internalrender)
- [internalToJSON](Column.md#internaltojson)
- [internalValidateProperties](Column.md#internalvalidateproperties)
- [isAtTheVeryBottom](Column.md#isattheverybottom)
- [isAtTheVeryLeft](Column.md#isattheveryleft)
- [isAtTheVeryRight](Column.md#isattheveryright)
- [isAtTheVeryTop](Column.md#isattheverytop)
- [isBleeding](Column.md#isbleeding)
- [isBleedingAtBottom](Column.md#isbleedingatbottom)
- [isBleedingAtTop](Column.md#isbleedingattop)
- [isBottomElement](Column.md#isbottomelement)
- [isDesignMode](Column.md#isdesignmode)
- [isDisplayed](Column.md#isdisplayed)
- [isElementAllowed](Column.md#iselementallowed)
- [isFirstElement](Column.md#isfirstelement)
- [isHiddenDueToOverflow](Column.md#ishiddenduetooverflow)
- [isLastElement](Column.md#islastelement)
- [isLeftMostElement](Column.md#isleftmostelement)
- [isRightMostElement](Column.md#isrightmostelement)
- [isRtl](Column.md#isrtl)
- [isTopElement](Column.md#istopelement)
- [overrideInternalRender](Column.md#overrideinternalrender)
- [parse](Column.md#parse)
- [populateSchema](Column.md#populateschema)
- [preProcessPropertyValue](Column.md#preprocesspropertyvalue)
- [remove](Column.md#remove)
- [removeItem](Column.md#removeitem)
- [render](Column.md#render)
- [resetDefaultValues](Column.md#resetdefaultvalues)
- [setBleed](Column.md#setbleed)
- [setCustomProperty](Column.md#setcustomproperty)
- [setPadding](Column.md#setpadding)
- [setParent](Column.md#setparent)
- [setShouldFallback](Column.md#setshouldfallback)
- [setValue](Column.md#setvalue)
- [shouldFallback](Column.md#shouldfallback)
- [shouldSerialize](Column.md#shouldserialize)
- [supportsExcplitiHeight](Column.md#supportsexcplitiheight)
- [toJSON](Column.md#tojson)
- [truncateOverflow](Column.md#truncateoverflow)
- [undoOverflowTruncation](Column.md#undooverflowtruncation)
- [updateLayout](Column.md#updatelayout)
- [validateProperties](Column.md#validateproperties)

## Constructors

### constructor

• **new Column**(`width?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | [`ColumnWidth`](../README.md#columnwidth) | `"stretch"` |

#### Overrides

[Container](Container.md).[constructor](Container.md#constructor)

#### Defined in

[card-elements.ts:6369](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6369)

## Properties

### \_items

• **\_items**: [`CardElement`](CardElement.md)[] = `[]`

#### Inherited from

[Container](Container.md).[_items](Container.md#_items)

#### Defined in

[card-elements.ts:5885](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5885)

___

### \_parent

• `Protected` `Optional` **\_parent**: [`CardObject`](CardObject.md)

#### Inherited from

[Container](Container.md).[_parent](Container.md#_parent)

#### Defined in

[card-object.ts:63](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L63)

___

### \_renderedElement

• `Protected` `Optional` **\_renderedElement**: `HTMLElement`

#### Inherited from

[Container](Container.md).[_renderedElement](Container.md#_renderedelement)

#### Defined in

[card-object.ts:64](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L64)

___

### \_selectAction

• `Protected` `Optional` **\_selectAction**: [`Action`](Action.md)

#### Inherited from

[Container](Container.md).[_selectAction](Container.md#_selectaction)

#### Defined in

[card-elements.ts:1937](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L1937)

___

### allowVerticalOverflow

• **allowVerticalOverflow**: `boolean` = `false`

#### Inherited from

[Container](Container.md).[allowVerticalOverflow](Container.md#allowverticaloverflow)

#### Defined in

[card-elements.ts:1977](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L1977)

___

### customCssSelector

• `Optional` **customCssSelector**: `string`

#### Inherited from

[Container](Container.md).[customCssSelector](Container.md#customcssselector)

#### Defined in

[card-elements.ts:426](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L426)

___

### height

• **height**: [`CardElementHeight`](../README.md#cardelementheight)

#### Inherited from

[Container](Container.md).[height](Container.md#height)

#### Defined in

[card-elements.ts:149](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L149)

___

### horizontalAlignment

• **horizontalAlignment**: [`HorizontalAlignment`](../enums/HorizontalAlignment.md)

#### Inherited from

[Container](Container.md).[horizontalAlignment](Container.md#horizontalalignment)

#### Defined in

[card-elements.ts:140](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L140)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[Container](Container.md).[id](Container.md#id)

#### Defined in

[card-object.ts:52](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L52)

___

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[Container](Container.md).[maxVersion](Container.md#maxversion)

#### Defined in

[serialization.ts:949](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L949)

___

### minPixelHeight

• `Optional` **minPixelHeight**: `number`

#### Inherited from

[Container](Container.md).[minPixelHeight](Container.md#minpixelheight)

#### Defined in

[card-elements.ts:5411](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5411)

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

[Container](Container.md).[onPreProcessPropertyValue](Container.md#onpreprocesspropertyvalue)

#### Defined in

[card-object.ts:66](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L66)

___

### rtl

• `Optional` **rtl**: `boolean`

#### Inherited from

[Container](Container.md).[rtl](Container.md#rtl)

#### Defined in

[card-elements.ts:5881](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5881)

___

### rules

• **rules**: [`RuleParam`](RuleParam.md)[]

#### Inherited from

[Container](Container.md).[rules](Container.md#rules)

#### Defined in

[card-elements.ts:201](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L201)

___

### separator

• **separator**: `boolean`

#### Inherited from

[Container](Container.md).[separator](Container.md#separator)

#### Defined in

[card-elements.ts:146](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L146)

___

### spacing

• **spacing**: [`Spacing`](../enums/Spacing.md)

#### Inherited from

[Container](Container.md).[spacing](Container.md#spacing)

#### Defined in

[card-elements.ts:143](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L143)

___

### verticalContentAlignment

• **verticalContentAlignment**: [`VerticalAlignment`](../enums/VerticalAlignment.md) = `Enums.VerticalAlignment.Top`

#### Inherited from

[Container](Container.md).[verticalContentAlignment](Container.md#verticalcontentalignment)

#### Defined in

[card-elements.ts:5878](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5878)

___

### width

• **width**: [`ColumnWidth`](../README.md#columnwidth) = `"stretch"`

#### Defined in

[card-elements.ts:6323](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6323)

___

### backgroundImageProperty

▪ `Static` `Readonly` **backgroundImageProperty**: [`SerializableObjectProperty`](SerializableObjectProperty.md)

#### Inherited from

[Container](Container.md).[backgroundImageProperty](Container.md#backgroundimageproperty)

#### Defined in

[card-elements.ts:5865](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5865)

___

### bleedProperty

▪ `Static` `Readonly` **bleedProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[Container](Container.md).[bleedProperty](Container.md#bleedproperty)

#### Defined in

[card-elements.ts:5387](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5387)

___

### heightProperty

▪ `Static` `Readonly` **heightProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Inherited from

[Container](Container.md).[heightProperty](Container.md#heightproperty)

#### Defined in

[card-elements.ts:120](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L120)

___

### horizontalAlignmentProperty

▪ `Static` `Readonly` **horizontalAlignmentProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`HorizontalAlignment`](../enums/HorizontalAlignment.md)\>

#### Inherited from

[Container](Container.md).[horizontalAlignmentProperty](Container.md#horizontalalignmentproperty)

#### Defined in

[card-elements.ts:128](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L128)

___

### idProperty

▪ `Static` `Readonly` **idProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[Container](Container.md).[idProperty](Container.md#idproperty)

#### Defined in

[card-object.ts:40](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L40)

___

### isVisibleProperty

▪ `Static` `Readonly` **isVisibleProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[Container](Container.md).[isVisibleProperty](Container.md#isvisibleproperty)

#### Defined in

[card-elements.ts:117](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L117)

___

### langProperty

▪ `Static` `Readonly` **langProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[Container](Container.md).[langProperty](Container.md#langproperty)

#### Defined in

[card-elements.ts:116](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L116)

___

### minHeightProperty

▪ `Static` `Readonly` **minHeightProperty**: [`PixelSizeProperty`](PixelSizeProperty.md)

#### Inherited from

[Container](Container.md).[minHeightProperty](Container.md#minheightproperty)

#### Defined in

[card-elements.ts:5388](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5388)

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

[Container](Container.md).[onRegisterCustomProperties](Container.md#onregistercustomproperties)

#### Defined in

[serialization.ts:809](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L809)

___

### requiresProperty

▪ `Static` `Readonly` **requiresProperty**: [`SerializableObjectProperty`](SerializableObjectProperty.md)

#### Inherited from

[Container](Container.md).[requiresProperty](Container.md#requiresproperty)

#### Defined in

[card-object.ts:41](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L41)

___

### rtlProperty

▪ `Static` `Readonly` **rtlProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[Container](Container.md).[rtlProperty](Container.md#rtlproperty)

#### Defined in

[card-elements.ts:5870](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5870)

___

### rulesProperty

▪ `Static` `Readonly` **rulesProperty**: [`SerializableObjectCollectionProperty`](SerializableObjectCollectionProperty.md)

#### Inherited from

[Container](Container.md).[rulesProperty](Container.md#rulesproperty)

#### Defined in

[card-elements.ts:119](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L119)

___

### selectActionProperty

▪ `Static` `Readonly` **selectActionProperty**: [`ActionProperty`](ActionProperty.md)

#### Inherited from

[Container](Container.md).[selectActionProperty](Container.md#selectactionproperty)

#### Defined in

[card-elements.ts:1926](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L1926)

___

### separatorProperty

▪ `Static` `Readonly` **separatorProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[Container](Container.md).[separatorProperty](Container.md#separatorproperty)

#### Defined in

[card-elements.ts:118](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L118)

___

### spacingProperty

▪ `Static` `Readonly` **spacingProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`Spacing`](../enums/Spacing.md)\>

#### Inherited from

[Container](Container.md).[spacingProperty](Container.md#spacingproperty)

#### Defined in

[card-elements.ts:133](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L133)

___

### styleProperty

▪ `Static` `Readonly` **styleProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Inherited from

[Container](Container.md).[styleProperty](Container.md#styleproperty)

#### Defined in

[card-elements.ts:5376](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5376)

___

### typeNameProperty

▪ `Static` `Readonly` **typeNameProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[Container](Container.md).[typeNameProperty](Container.md#typenameproperty)

#### Defined in

[card-object.ts:31](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L31)

___

### verticalContentAlignmentProperty

▪ `Static` `Readonly` **verticalContentAlignmentProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`VerticalAlignment`](../enums/VerticalAlignment.md)\>

#### Inherited from

[Container](Container.md).[verticalContentAlignmentProperty](Container.md#verticalcontentalignmentproperty)

#### Defined in

[card-elements.ts:5869](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5869)

___

### widthProperty

▪ `Static` `Readonly` **widthProperty**: [`CustomProperty`](CustomProperty.md)<[`ColumnWidth`](../README.md#columnwidth)\>

#### Defined in

[card-elements.ts:6266](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6266)

## Accessors

### allowCustomPadding

• `Protected` `get` **allowCustomPadding**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Container.allowCustomPadding

#### Defined in

[card-elements.ts:414](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L414)

___

### allowCustomStyle

• `Protected` `get` **allowCustomStyle**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Container.allowCustomStyle

#### Defined in

[card-elements.ts:5534](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5534)

___

### backgroundImage

• `get` **backgroundImage**(): [`BackgroundImage`](BackgroundImage.md)

#### Returns

[`BackgroundImage`](BackgroundImage.md)

#### Inherited from

Container.backgroundImage

#### Defined in

[card-elements.ts:5872](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5872)

___

### bleed

• `get` **bleed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Container.bleed

#### Defined in

[card-elements.ts:6252](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6252)

• `set` **bleed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Container.bleed

#### Defined in

[card-elements.ts:6256](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6256)

___

### defaultStyle

• `Protected` `get` **defaultStyle**(): `string`

#### Returns

`string`

#### Inherited from

Container.defaultStyle

#### Defined in

[card-elements.ts:422](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L422)

___

### hasExplicitStyle

• `Protected` `get` **hasExplicitStyle**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Container.hasExplicitStyle

#### Defined in

[card-elements.ts:5530](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5530)

___

### hasVisibleSeparator

• `get` **hasVisibleSeparator**(): `boolean`

#### Returns

`boolean`

#### Overrides

Container.hasVisibleSeparator

#### Defined in

[card-elements.ts:6379](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6379)

___

### hostConfig

• `get` **hostConfig**(): [`HostConfig`](HostConfig.md)

#### Returns

[`HostConfig`](HostConfig.md)

#### Inherited from

Container.hostConfig

#### Defined in

[card-elements.ts:656](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L656)

• `set` **hostConfig**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`HostConfig`](HostConfig.md) |

#### Returns

`void`

#### Inherited from

Container.hostConfig

#### Defined in

[card-elements.ts:670](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L670)

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

Container.index

#### Defined in

[card-elements.ts:674](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L674)

___

### isInline

• `get` **isInline**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Container.isInline

#### Defined in

[card-elements.ts:691](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L691)

___

### isInteractive

• `get` **isInteractive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Container.isInteractive

#### Defined in

[card-elements.ts:683](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L683)

___

### isSelectable

• `Protected` `get` **isSelectable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Container.isSelectable

#### Defined in

[card-elements.ts:6075](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6075)

___

### isStandalone

• `get` **isStandalone**(): `boolean`

#### Returns

`boolean`

#### Overrides

Container.isStandalone

#### Defined in

[card-elements.ts:6388](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6388)

___

### isVisible

• `get` **isVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Container.isVisible

#### Defined in

[card-elements.ts:172](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L172)

• `set` **isVisible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Container.isVisible

#### Defined in

[card-elements.ts:177](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L177)

___

### lang

• `get` **lang**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Container.lang

#### Defined in

[card-elements.ts:151](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L151)

• `set` **lang**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

Container.lang

#### Defined in

[card-elements.ts:168](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L168)

___

### padding

• `get` **padding**(): `undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

`undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

Container.padding

#### Defined in

[card-elements.ts:6236](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6236)

• `set` **padding**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`PaddingDefinition`](PaddingDefinition.md) |

#### Returns

`void`

#### Inherited from

Container.padding

#### Defined in

[card-elements.ts:6240](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6240)

___

### parent

• `get` **parent**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Inherited from

Container.parent

#### Defined in

[card-elements.ts:708](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L708)

___

### renderedActionCount

• `Protected` `get` **renderedActionCount**(): `number`

#### Returns

`number`

#### Inherited from

Container.renderedActionCount

#### Defined in

[card-elements.ts:5526](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5526)

___

### renderedElement

• `get` **renderedElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

Container.renderedElement

#### Defined in

[card-object.ts:142](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L142)

___

### requires

• `get` **requires**(): `HostCapabilities`

#### Returns

`HostCapabilities`

#### Inherited from

Container.requires

#### Defined in

[card-object.ts:54](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L54)

___

### selectAction

• `get` **selectAction**(): `undefined` \| [`Action`](Action.md)

#### Returns

`undefined` \| [`Action`](Action.md)

#### Inherited from

Container.selectAction

#### Defined in

[card-elements.ts:6244](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6244)

• `set` **selectAction**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`Action`](Action.md) |

#### Returns

`void`

#### Inherited from

Container.selectAction

#### Defined in

[card-elements.ts:6248](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6248)

___

### separatorElement

• `get` **separatorElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

Container.separatorElement

#### Defined in

[card-elements.ts:704](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L704)

___

### separatorOrientation

• `Protected` `get` **separatorOrientation**(): [`Orientation`](../enums/Orientation.md)

#### Returns

[`Orientation`](../enums/Orientation.md)

#### Overrides

Container.separatorOrientation

#### Defined in

[card-elements.ts:6365](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6365)

___

### style

• `get` **style**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Container.style

#### Defined in

[card-elements.ts:5390](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5390)

• `set` **style**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

Container.style

#### Defined in

[card-elements.ts:5403](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5403)

___

### useDefaultSizing

• `Protected` `get` **useDefaultSizing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Container.useDefaultSizing

#### Defined in

[card-elements.ts:410](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L410)

## Methods

### addItem

▸ **addItem**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`CardElement`](CardElement.md) |

#### Returns

`void`

#### Inherited from

[Container](Container.md).[addItem](Container.md#additem)

#### Defined in

[card-elements.ts:6166](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6166)

___

### adjustRenderedElementSize

▸ `Protected` **adjustRenderedElementSize**(`renderedElement`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderedElement` | `HTMLElement` |

#### Returns

`void`

#### Overrides

[Container](Container.md).[adjustRenderedElementSize](Container.md#adjustrenderedelementsize)

#### Defined in

[card-elements.ts:6329](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6329)

___

### applyBackground

▸ `Protected` **applyBackground**(): `void`

#### Returns

`void`

#### Inherited from

[Container](Container.md).[applyBackground](Container.md#applybackground)

#### Defined in

[card-elements.ts:5920](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5920)

___

### applyPadding

▸ `Protected` **applyPadding**(): `void`

#### Returns

`void`

#### Inherited from

[Container](Container.md).[applyPadding](Container.md#applypadding)

#### Defined in

[card-elements.ts:5435](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5435)

___

### asString

▸ **asString**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[Container](Container.md).[asString](Container.md#asstring)

#### Defined in

[card-elements.ts:432](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L432)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[Container](Container.md).[clear](Container.md#clear)

#### Defined in

[card-elements.ts:6194](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6194)

___

### createPlaceholderElement

▸ `Protected` **createPlaceholderElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Inherited from

[Container](Container.md).[createPlaceholderElement](Container.md#createplaceholderelement)

#### Defined in

[card-elements.ts:320](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L320)

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

[Container](Container.md).[getActionAt](Container.md#getactionat)

#### Defined in

[card-elements.ts:511](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L511)

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

[Container](Container.md).[getActionById](Container.md#getactionbyid)

#### Defined in

[card-elements.ts:6214](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6214)

___

### getActionCount

▸ **getActionCount**(): `number`

#### Returns

`number`

#### Inherited from

[Container](Container.md).[getActionCount](Container.md#getactioncount)

#### Defined in

[card-elements.ts:507](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L507)

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

[Container](Container.md).[getAllInputs](Container.md#getallinputs)

#### Defined in

[card-elements.ts:2062](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L2062)

___

### getBleed

▸ `Protected` **getBleed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[getBleed](Container.md#getbleed)

#### Defined in

[card-elements.ts:5518](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5518)

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

[Container](Container.md).[getCustomProperty](Container.md#getcustomproperty)

#### Defined in

[serialization.ts:1040](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1040)

___

### getDefaultPadding

▸ `Protected` **getDefaultPadding**(): [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

[`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[Container](Container.md).[getDefaultPadding](Container.md#getdefaultpadding)

#### Defined in

[card-elements.ts:5505](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5505)

___

### getDefaultSerializationContext

▸ `Protected` **getDefaultSerializationContext**(): [`BaseSerializationContext`](BaseSerializationContext.md)

#### Returns

[`BaseSerializationContext`](BaseSerializationContext.md)

#### Inherited from

[Container](Container.md).[getDefaultSerializationContext](Container.md#getdefaultserializationcontext)

#### Defined in

[card-elements.ts:316](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L316)

___

### getEffectivePadding

▸ **getEffectivePadding**(): [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

[`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[Container](Container.md).[getEffectivePadding](Container.md#geteffectivepadding)

#### Defined in

[card-elements.ts:650](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L650)

___

### getEffectiveStyle

▸ **getEffectiveStyle**(): `string`

#### Returns

`string`

#### Inherited from

[Container](Container.md).[getEffectiveStyle](Container.md#geteffectivestyle)

#### Defined in

[card-elements.ts:5569](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5569)

___

### getEffectiveStyleDefinition

▸ **getEffectiveStyleDefinition**(): [`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Returns

[`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Inherited from

[Container](Container.md).[getEffectiveStyleDefinition](Container.md#geteffectivestyledefinition)

#### Defined in

[card-elements.ts:448](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L448)

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

[Container](Container.md).[getElementById](Container.md#getelementbyid)

#### Defined in

[card-elements.ts:2082](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L2082)

___

### getFirstVisibleRenderedItem

▸ **getFirstVisibleRenderedItem**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Inherited from

[Container](Container.md).[getFirstVisibleRenderedItem](Container.md#getfirstvisiblerendereditem)

#### Defined in

[card-elements.ts:6087](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6087)

___

### getForbiddenActionTypes

▸ **getForbiddenActionTypes**(): [`ActionType`](../README.md#actiontype)[]

#### Returns

[`ActionType`](../README.md#actiontype)[]

#### Inherited from

[Container](Container.md).[getForbiddenActionTypes](Container.md#getforbiddenactiontypes)

#### Defined in

[card-elements.ts:452](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L452)

___

### getHasBackground

▸ `Protected` **getHasBackground**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[getHasBackground](Container.md#gethasbackground)

#### Defined in

[card-elements.ts:6046](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6046)

___

### getHasExpandedAction

▸ `Protected` **getHasExpandedAction**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[getHasExpandedAction](Container.md#gethasexpandedaction)

#### Defined in

[card-elements.ts:5514](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5514)

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

[Container](Container.md).[getImmediateSurroundingPadding](Container.md#getimmediatesurroundingpadding)

#### Defined in

[card-elements.ts:456](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L456)

___

### getItemAt

▸ **getItemAt**(`index`): [`CardElement`](CardElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`CardElement`](CardElement.md)

#### Inherited from

[Container](Container.md).[getItemAt](Container.md#getitemat)

#### Defined in

[card-elements.ts:6083](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6083)

___

### getItemCount

▸ **getItemCount**(): `number`

#### Returns

`number`

#### Inherited from

[Container](Container.md).[getItemCount](Container.md#getitemcount)

#### Defined in

[card-elements.ts:6079](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6079)

___

### getItemsCollectionPropertyName

▸ `Protected` **getItemsCollectionPropertyName**(): `string`

#### Returns

`string`

#### Inherited from

[Container](Container.md).[getItemsCollectionPropertyName](Container.md#getitemscollectionpropertyname)

#### Defined in

[card-elements.ts:5916](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5916)

___

### getJsonTypeName

▸ **getJsonTypeName**(): `string`

#### Returns

`string`

#### Overrides

[Container](Container.md).[getJsonTypeName](Container.md#getjsontypename)

#### Defined in

[card-elements.ts:6375](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6375)

___

### getLastVisibleRenderedItem

▸ **getLastVisibleRenderedItem**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Inherited from

[Container](Container.md).[getLastVisibleRenderedItem](Container.md#getlastvisiblerendereditem)

#### Defined in

[card-elements.ts:6099](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6099)

___

### getPadding

▸ `Protected` **getPadding**(): `undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

`undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[Container](Container.md).[getPadding](Container.md#getpadding)

#### Defined in

[card-elements.ts:398](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L398)

___

### getParentContainer

▸ **getParentContainer**(): `undefined` \| [`Container`](Container.md)

#### Returns

`undefined` \| [`Container`](Container.md)

#### Inherited from

[Container](Container.md).[getParentContainer](Container.md#getparentcontainer)

#### Defined in

[card-elements.ts:620](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L620)

___

### getResourceInformation

▸ **getResourceInformation**(): [`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Returns

[`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Inherited from

[Container](Container.md).[getResourceInformation](Container.md#getresourceinformation)

#### Defined in

[card-elements.ts:6199](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6199)

___

### getRootElement

▸ **getRootElement**(): [`CardElement`](CardElement.md)

#### Returns

[`CardElement`](CardElement.md)

#### Inherited from

[Container](Container.md).[getRootElement](Container.md#getrootelement)

#### Defined in

[card-elements.ts:616](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L616)

___

### getRootObject

▸ **getRootObject**(): [`CardObject`](CardObject.md)

#### Returns

[`CardObject`](CardObject.md)

#### Inherited from

[Container](Container.md).[getRootObject](Container.md#getrootobject)

#### Defined in

[card-object.ts:102](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L102)

___

### getSchema

▸ **getSchema**(): [`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Returns

[`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Inherited from

[Container](Container.md).[getSchema](Container.md#getschema)

#### Defined in

[serialization.ts:1044](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1044)

___

### getSchemaKey

▸ `Protected` **getSchemaKey**(): `string`

#### Returns

`string`

#### Inherited from

[Container](Container.md).[getSchemaKey](Container.md#getschemakey)

#### Defined in

[card-object.ts:47](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L47)

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

[Container](Container.md).[getValue](Container.md#getvalue)

#### Defined in

[serialization.ts:875](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L875)

___

### hasAllDefaultValues

▸ **hasAllDefaultValues**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[hasAllDefaultValues](Container.md#hasalldefaultvalues)

#### Defined in

[serialization.ts:1005](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1005)

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

[Container](Container.md).[hasDefaultValue](Container.md#hasdefaultvalue)

#### Defined in

[serialization.ts:1001](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1001)

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

[Container](Container.md).[indexOf](Container.md#indexof)

#### Defined in

[card-elements.ts:6162](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6162)

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

#### Inherited from

[Container](Container.md).[insertItemAfter](Container.md#insertitemafter)

#### Defined in

[card-elements.ts:6174](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6174)

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

#### Inherited from

[Container](Container.md).[insertItemBefore](Container.md#insertitembefore)

#### Defined in

[card-elements.ts:6170](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6170)

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

#### Inherited from

[Container](Container.md).[internalParse](Container.md#internalparse)

#### Defined in

[card-elements.ts:6050](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6050)

___

### internalRender

▸ `Protected` **internalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[Container](Container.md).[internalRender](Container.md#internalrender)

#### Defined in

[card-elements.ts:5928](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5928)

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

#### Inherited from

[Container](Container.md).[internalToJSON](Container.md#internaltojson)

#### Defined in

[card-elements.ts:6069](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6069)

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

[Container](Container.md).[internalValidateProperties](Container.md#internalvalidateproperties)

#### Defined in

[card-elements.ts:5542](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5542)

___

### isAtTheVeryBottom

▸ **isAtTheVeryBottom**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[isAtTheVeryBottom](Container.md#isattheverybottom)

#### Defined in

[card-elements.ts:584](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L584)

___

### isAtTheVeryLeft

▸ **isAtTheVeryLeft**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[isAtTheVeryLeft](Container.md#isattheveryleft)

#### Defined in

[card-elements.ts:572](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L572)

___

### isAtTheVeryRight

▸ **isAtTheVeryRight**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[isAtTheVeryRight](Container.md#isattheveryright)

#### Defined in

[card-elements.ts:576](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L576)

___

### isAtTheVeryTop

▸ **isAtTheVeryTop**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[isAtTheVeryTop](Container.md#isattheverytop)

#### Defined in

[card-elements.ts:580](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L580)

___

### isBleeding

▸ **isBleeding**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[isBleeding](Container.md#isbleeding)

#### Defined in

[card-elements.ts:5538](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5538)

___

### isBleedingAtBottom

▸ **isBleedingAtBottom**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[isBleedingAtBottom](Container.md#isbleedingatbottom)

#### Defined in

[card-elements.ts:6156](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6156)

___

### isBleedingAtTop

▸ **isBleedingAtTop**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[isBleedingAtTop](Container.md#isbleedingattop)

#### Defined in

[card-elements.ts:6150](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6150)

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

[Container](Container.md).[isBottomElement](Container.md#isbottomelement)

#### Defined in

[card-elements.ts:608](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L608)

___

### isDesignMode

▸ **isDesignMode**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[isDesignMode](Container.md#isdesignmode)

#### Defined in

[card-elements.ts:558](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L558)

___

### isDisplayed

▸ `Protected` **isDisplayed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[isDisplayed](Container.md#isdisplayed)

#### Defined in

[card-elements.ts:344](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L344)

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

[Container](Container.md).[isElementAllowed](Container.md#iselementallowed)

#### Defined in

[card-elements.ts:1941](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L1941)

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

[Container](Container.md).[isFirstElement](Container.md#isfirstelement)

#### Defined in

[card-elements.ts:6115](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6115)

___

### isHiddenDueToOverflow

▸ **isHiddenDueToOverflow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[isHiddenDueToOverflow](Container.md#ishiddenduetooverflow)

#### Defined in

[card-elements.ts:612](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L612)

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

[Container](Container.md).[isLastElement](Container.md#islastelement)

#### Defined in

[card-elements.ts:6127](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6127)

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

[Container](Container.md).[isLeftMostElement](Container.md#isleftmostelement)

#### Defined in

[card-elements.ts:596](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L596)

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

[Container](Container.md).[isRightMostElement](Container.md#isrightmostelement)

#### Defined in

[card-elements.ts:600](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L600)

___

### isRtl

▸ **isRtl**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[isRtl](Container.md#isrtl)

#### Defined in

[card-elements.ts:6139](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6139)

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

[Container](Container.md).[isTopElement](Container.md#istopelement)

#### Defined in

[card-elements.ts:604](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L604)

___

### overrideInternalRender

▸ `Protected` **overrideInternalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[Container](Container.md).[overrideInternalRender](Container.md#overrideinternalrender)

#### Defined in

[card-elements.ts:350](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L350)

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

[Container](Container.md).[parse](Container.md#parse)

#### Defined in

[card-elements.ts:428](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L428)

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

[Container](Container.md).[populateSchema](Container.md#populateschema)

#### Defined in

[card-elements.ts:1928](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L1928)

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

[Container](Container.md).[preProcessPropertyValue](Container.md#preprocesspropertyvalue)

#### Defined in

[card-object.ts:72](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L72)

___

### remove

▸ **remove**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[remove](Container.md#remove)

#### Defined in

[card-elements.ts:515](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L515)

___

### removeItem

▸ **removeItem**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`CardElement`](CardElement.md) |

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[removeItem](Container.md#removeitem)

#### Defined in

[card-elements.ts:6178](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6178)

___

### render

▸ **render**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[Container](Container.md).[render](Container.md#render)

#### Defined in

[card-elements.ts:5559](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5559)

___

### resetDefaultValues

▸ **resetDefaultValues**(): `void`

#### Returns

`void`

#### Inherited from

[Container](Container.md).[resetDefaultValues](Container.md#resetdefaultvalues)

#### Defined in

[serialization.ts:1019](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1019)

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

[Container](Container.md).[setBleed](Container.md#setbleed)

#### Defined in

[card-elements.ts:5522](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5522)

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

[Container](Container.md).[setCustomProperty](Container.md#setcustomproperty)

#### Defined in

[serialization.ts:1029](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1029)

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

[Container](Container.md).[setPadding](Container.md#setpadding)

#### Defined in

[card-elements.ts:402](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L402)

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

[Container](Container.md).[setParent](Container.md#setparent)

#### Defined in

[card-object.ts:90](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L90)

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

[Container](Container.md).[setShouldFallback](Container.md#setshouldfallback)

#### Defined in

[card-object.ts:94](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L94)

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

[Container](Container.md).[setValue](Container.md#setvalue)

#### Defined in

[serialization.ts:879](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L879)

___

### shouldFallback

▸ **shouldFallback**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[shouldFallback](Container.md#shouldfallback)

#### Defined in

[card-object.ts:98](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L98)

___

### shouldSerialize

▸ `Protected` **shouldSerialize**(`context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`SerializationContext`](SerializationContext.md) |

#### Returns

`boolean`

#### Overrides

[Container](Container.md).[shouldSerialize](Container.md#shouldserialize)

#### Defined in

[card-elements.ts:6361](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6361)

___

### supportsExcplitiHeight

▸ `Protected` **supportsExcplitiHeight**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[supportsExcplitiHeight](Container.md#supportsexcplitiheight)

#### Defined in

[card-elements.ts:5912](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5912)

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

[Container](Container.md).[toJSON](Container.md#tojson)

#### Defined in

[serialization.ts:967](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L967)

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

[Container](Container.md).[truncateOverflow](Container.md#truncateoverflow)

#### Defined in

[card-elements.ts:6001](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6001)

___

### undoOverflowTruncation

▸ `Protected` **undoOverflowTruncation**(): `void`

#### Returns

`void`

#### Inherited from

[Container](Container.md).[undoOverflowTruncation](Container.md#undooverflowtruncation)

#### Defined in

[card-elements.ts:6040](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L6040)

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

[Container](Container.md).[updateLayout](Container.md#updatelayout)

#### Defined in

[card-elements.ts:2052](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L2052)

___

### validateProperties

▸ **validateProperties**(): [`ValidationResults`](ValidationResults.md)

#### Returns

[`ValidationResults`](ValidationResults.md)

#### Inherited from

[Container](Container.md).[validateProperties](Container.md#validateproperties)

#### Defined in

[card-object.ts:130](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L130)
