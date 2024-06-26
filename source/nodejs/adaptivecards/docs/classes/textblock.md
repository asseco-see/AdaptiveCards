[Adaptive Cards Javascript SDK](../README.md) / TextBlock

# Class: TextBlock

## Hierarchy

- [`BaseTextBlock`](BaseTextBlock.md)

  ↳ **`TextBlock`**

## Table of contents

### Constructors

- [constructor](TextBlock.md#constructor)

### Properties

- [\_parent](TextBlock.md#_parent)
- [\_renderedElement](TextBlock.md#_renderedelement)
- [ariaHidden](TextBlock.md#ariahidden)
- [color](TextBlock.md#color)
- [customCssSelector](TextBlock.md#customcssselector)
- [fontType](TextBlock.md#fonttype)
- [forElementId](TextBlock.md#forelementid)
- [height](TextBlock.md#height)
- [horizontalAlignment](TextBlock.md#horizontalalignment)
- [id](TextBlock.md#id)
- [isSubtle](TextBlock.md#issubtle)
- [maxLines](TextBlock.md#maxlines)
- [maxVersion](TextBlock.md#maxversion)
- [onPreProcessPropertyValue](TextBlock.md#onpreprocesspropertyvalue)
- [rules](TextBlock.md#rules)
- [selectAction](TextBlock.md#selectaction)
- [separator](TextBlock.md#separator)
- [size](TextBlock.md#size)
- [spacing](TextBlock.md#spacing)
- [useMarkdown](TextBlock.md#usemarkdown)
- [weight](TextBlock.md#weight)
- [wrap](TextBlock.md#wrap)
- [colorProperty](TextBlock.md#colorproperty)
- [fontTypeProperty](TextBlock.md#fonttypeproperty)
- [heightProperty](TextBlock.md#heightproperty)
- [horizontalAlignmentProperty](TextBlock.md#horizontalalignmentproperty)
- [idProperty](TextBlock.md#idproperty)
- [isSubtleProperty](TextBlock.md#issubtleproperty)
- [isVisibleProperty](TextBlock.md#isvisibleproperty)
- [langProperty](TextBlock.md#langproperty)
- [maxLinesProperty](TextBlock.md#maxlinesproperty)
- [onRegisterCustomProperties](TextBlock.md#onregistercustomproperties)
- [requiresProperty](TextBlock.md#requiresproperty)
- [rulesProperty](TextBlock.md#rulesproperty)
- [selectActionProperty](TextBlock.md#selectactionproperty)
- [separatorProperty](TextBlock.md#separatorproperty)
- [sizeProperty](TextBlock.md#sizeproperty)
- [spacingProperty](TextBlock.md#spacingproperty)
- [textProperty](TextBlock.md#textproperty)
- [typeNameProperty](TextBlock.md#typenameproperty)
- [weightProperty](TextBlock.md#weightproperty)
- [wrapProperty](TextBlock.md#wrapproperty)

### Accessors

- [allowCustomPadding](TextBlock.md#allowcustompadding)
- [defaultStyle](TextBlock.md#defaultstyle)
- [effectiveColor](TextBlock.md#effectivecolor)
- [hasVisibleSeparator](TextBlock.md#hasvisibleseparator)
- [hostConfig](TextBlock.md#hostconfig)
- [index](TextBlock.md#index)
- [isInline](TextBlock.md#isinline)
- [isInteractive](TextBlock.md#isinteractive)
- [isStandalone](TextBlock.md#isstandalone)
- [isVisible](TextBlock.md#isvisible)
- [lang](TextBlock.md#lang)
- [parent](TextBlock.md#parent)
- [renderedElement](TextBlock.md#renderedelement)
- [requires](TextBlock.md#requires)
- [separatorElement](TextBlock.md#separatorelement)
- [separatorOrientation](TextBlock.md#separatororientation)
- [text](TextBlock.md#text)
- [useDefaultSizing](TextBlock.md#usedefaultsizing)

### Methods

- [adjustRenderedElementSize](TextBlock.md#adjustrenderedelementsize)
- [applyPadding](TextBlock.md#applypadding)
- [applyStylesTo](TextBlock.md#applystylesto)
- [asString](TextBlock.md#asstring)
- [createPlaceholderElement](TextBlock.md#createplaceholderelement)
- [getActionAt](TextBlock.md#getactionat)
- [getActionById](TextBlock.md#getactionbyid)
- [getActionCount](TextBlock.md#getactioncount)
- [getAllInputs](TextBlock.md#getallinputs)
- [getColorDefinition](TextBlock.md#getcolordefinition)
- [getCustomProperty](TextBlock.md#getcustomproperty)
- [getDefaultPadding](TextBlock.md#getdefaultpadding)
- [getDefaultSerializationContext](TextBlock.md#getdefaultserializationcontext)
- [getEffectivePadding](TextBlock.md#geteffectivepadding)
- [getEffectiveStyle](TextBlock.md#geteffectivestyle)
- [getEffectiveStyleDefinition](TextBlock.md#geteffectivestyledefinition)
- [getElementById](TextBlock.md#getelementbyid)
- [getFontSize](TextBlock.md#getfontsize)
- [getForbiddenActionTypes](TextBlock.md#getforbiddenactiontypes)
- [getHasBackground](TextBlock.md#gethasbackground)
- [getImmediateSurroundingPadding](TextBlock.md#getimmediatesurroundingpadding)
- [getJsonTypeName](TextBlock.md#getjsontypename)
- [getPadding](TextBlock.md#getpadding)
- [getParentContainer](TextBlock.md#getparentcontainer)
- [getResourceInformation](TextBlock.md#getresourceinformation)
- [getRootElement](TextBlock.md#getrootelement)
- [getRootObject](TextBlock.md#getrootobject)
- [getSchema](TextBlock.md#getschema)
- [getSchemaKey](TextBlock.md#getschemakey)
- [getValue](TextBlock.md#getvalue)
- [hasAllDefaultValues](TextBlock.md#hasalldefaultvalues)
- [hasDefaultValue](TextBlock.md#hasdefaultvalue)
- [indexOf](TextBlock.md#indexof)
- [init](TextBlock.md#init)
- [internalParse](TextBlock.md#internalparse)
- [internalRender](TextBlock.md#internalrender)
- [internalToJSON](TextBlock.md#internaltojson)
- [internalValidateProperties](TextBlock.md#internalvalidateproperties)
- [isAtTheVeryBottom](TextBlock.md#isattheverybottom)
- [isAtTheVeryLeft](TextBlock.md#isattheveryleft)
- [isAtTheVeryRight](TextBlock.md#isattheveryright)
- [isAtTheVeryTop](TextBlock.md#isattheverytop)
- [isBleeding](TextBlock.md#isbleeding)
- [isBleedingAtBottom](TextBlock.md#isbleedingatbottom)
- [isBleedingAtTop](TextBlock.md#isbleedingattop)
- [isBottomElement](TextBlock.md#isbottomelement)
- [isDesignMode](TextBlock.md#isdesignmode)
- [isDisplayed](TextBlock.md#isdisplayed)
- [isFirstElement](TextBlock.md#isfirstelement)
- [isHiddenDueToOverflow](TextBlock.md#ishiddenduetooverflow)
- [isLastElement](TextBlock.md#islastelement)
- [isLeftMostElement](TextBlock.md#isleftmostelement)
- [isRightMostElement](TextBlock.md#isrightmostelement)
- [isTopElement](TextBlock.md#istopelement)
- [overrideInternalRender](TextBlock.md#overrideinternalrender)
- [parse](TextBlock.md#parse)
- [populateSchema](TextBlock.md#populateschema)
- [preProcessPropertyValue](TextBlock.md#preprocesspropertyvalue)
- [remove](TextBlock.md#remove)
- [render](TextBlock.md#render)
- [resetDefaultValues](TextBlock.md#resetdefaultvalues)
- [setCustomProperty](TextBlock.md#setcustomproperty)
- [setPadding](TextBlock.md#setpadding)
- [setParent](TextBlock.md#setparent)
- [setShouldFallback](TextBlock.md#setshouldfallback)
- [setText](TextBlock.md#settext)
- [setValue](TextBlock.md#setvalue)
- [shouldFallback](TextBlock.md#shouldfallback)
- [shouldSerialize](TextBlock.md#shouldserialize)
- [toJSON](TextBlock.md#tojson)
- [truncateOverflow](TextBlock.md#truncateoverflow)
- [undoOverflowTruncation](TextBlock.md#undooverflowtruncation)
- [updateLayout](TextBlock.md#updatelayout)
- [validateProperties](TextBlock.md#validateproperties)

## Constructors

### constructor

• **new TextBlock**(`text?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text?` | `string` |

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[constructor](BaseTextBlock.md#constructor)

#### Defined in

[card-elements.ts:844](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L844)

## Properties

### \_parent

• `Protected` `Optional` **\_parent**: [`CardObject`](CardObject.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[_parent](BaseTextBlock.md#_parent)

#### Defined in

[card-object.ts:63](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L63)

___

### \_renderedElement

• `Protected` `Optional` **\_renderedElement**: `HTMLElement`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[_renderedElement](BaseTextBlock.md#_renderedelement)

#### Defined in

[card-object.ts:64](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L64)

___

### ariaHidden

• **ariaHidden**: `boolean` = `false`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[ariaHidden](BaseTextBlock.md#ariahidden)

#### Defined in

[card-elements.ts:842](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L842)

___

### color

• **color**: [`TextColor`](../enums/TextColor.md) = `Enums.TextColor.Default`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[color](BaseTextBlock.md#color)

#### Defined in

[card-elements.ts:782](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L782)

___

### customCssSelector

• `Optional` **customCssSelector**: `string`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[customCssSelector](BaseTextBlock.md#customcssselector)

#### Defined in

[card-elements.ts:426](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L426)

___

### fontType

• `Optional` **fontType**: [`FontType`](../enums/FontType.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[fontType](BaseTextBlock.md#fonttype)

#### Defined in

[card-elements.ts:785](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L785)

___

### forElementId

• `Optional` **forElementId**: `string`

#### Defined in

[card-elements.ts:1155](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1155)

___

### height

• **height**: [`CardElementHeight`](../README.md#cardelementheight)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[height](BaseTextBlock.md#height)

#### Defined in

[card-elements.ts:149](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L149)

___

### horizontalAlignment

• **horizontalAlignment**: [`HorizontalAlignment`](../enums/HorizontalAlignment.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[horizontalAlignment](BaseTextBlock.md#horizontalalignment)

#### Defined in

[card-elements.ts:140](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L140)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[id](BaseTextBlock.md#id)

#### Defined in

[card-object.ts:52](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L52)

___

### isSubtle

• **isSubtle**: `boolean` = `false`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[isSubtle](BaseTextBlock.md#issubtle)

#### Defined in

[card-elements.ts:788](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L788)

___

### maxLines

• `Optional` **maxLines**: `number`

#### Defined in

[card-elements.ts:932](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L932)

___

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[maxVersion](BaseTextBlock.md#maxversion)

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

[BaseTextBlock](BaseTextBlock.md).[onPreProcessPropertyValue](BaseTextBlock.md#onpreprocesspropertyvalue)

#### Defined in

[card-object.ts:66](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L66)

___

### rules

• **rules**: [`RuleParam`](RuleParam.md)[]

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[rules](BaseTextBlock.md#rules)

#### Defined in

[card-elements.ts:201](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L201)

___

### selectAction

• `Optional` **selectAction**: [`Action`](Action.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[selectAction](BaseTextBlock.md#selectaction)

#### Defined in

[card-elements.ts:800](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L800)

___

### separator

• **separator**: `boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[separator](BaseTextBlock.md#separator)

#### Defined in

[card-elements.ts:146](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L146)

___

### size

• **size**: [`TextSize`](../enums/TextSize.md) = `Enums.TextSize.Default`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[size](BaseTextBlock.md#size)

#### Defined in

[card-elements.ts:776](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L776)

___

### spacing

• **spacing**: [`Spacing`](../enums/Spacing.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[spacing](BaseTextBlock.md#spacing)

#### Defined in

[card-elements.ts:143](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L143)

___

### useMarkdown

• **useMarkdown**: `boolean` = `true`

#### Defined in

[card-elements.ts:1154](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1154)

___

### weight

• **weight**: [`TextWeight`](../enums/TextWeight.md) = `Enums.TextWeight.Default`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[weight](BaseTextBlock.md#weight)

#### Defined in

[card-elements.ts:779](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L779)

___

### wrap

• **wrap**: `boolean` = `false`

#### Defined in

[card-elements.ts:929](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L929)

___

### colorProperty

▪ `Static` `Readonly` **colorProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`TextColor`](../enums/TextColor.md)\>

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[colorProperty](BaseTextBlock.md#colorproperty)

#### Defined in

[card-elements.ts:752](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L752)

___

### fontTypeProperty

▪ `Static` `Readonly` **fontTypeProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`FontType`](../enums/FontType.md)\>

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[fontTypeProperty](BaseTextBlock.md#fonttypeproperty)

#### Defined in

[card-elements.ts:761](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L761)

___

### heightProperty

▪ `Static` `Readonly` **heightProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[heightProperty](BaseTextBlock.md#heightproperty)

#### Defined in

[card-elements.ts:120](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L120)

___

### horizontalAlignmentProperty

▪ `Static` `Readonly` **horizontalAlignmentProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`HorizontalAlignment`](../enums/HorizontalAlignment.md)\>

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[horizontalAlignmentProperty](BaseTextBlock.md#horizontalalignmentproperty)

#### Defined in

[card-elements.ts:128](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L128)

___

### idProperty

▪ `Static` `Readonly` **idProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[idProperty](BaseTextBlock.md#idproperty)

#### Defined in

[card-object.ts:40](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L40)

___

### isSubtleProperty

▪ `Static` `Readonly` **isSubtleProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[isSubtleProperty](BaseTextBlock.md#issubtleproperty)

#### Defined in

[card-elements.ts:757](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L757)

___

### isVisibleProperty

▪ `Static` `Readonly` **isVisibleProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[isVisibleProperty](BaseTextBlock.md#isvisibleproperty)

#### Defined in

[card-elements.ts:117](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L117)

___

### langProperty

▪ `Static` `Readonly` **langProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[langProperty](BaseTextBlock.md#langproperty)

#### Defined in

[card-elements.ts:116](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L116)

___

### maxLinesProperty

▪ `Static` `Readonly` **maxLinesProperty**: [`NumProperty`](NumProperty.md)

#### Defined in

[card-elements.ts:926](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L926)

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

[BaseTextBlock](BaseTextBlock.md).[onRegisterCustomProperties](BaseTextBlock.md#onregistercustomproperties)

#### Defined in

[serialization.ts:809](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L809)

___

### requiresProperty

▪ `Static` `Readonly` **requiresProperty**: [`SerializableObjectProperty`](SerializableObjectProperty.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[requiresProperty](BaseTextBlock.md#requiresproperty)

#### Defined in

[card-object.ts:41](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L41)

___

### rulesProperty

▪ `Static` `Readonly` **rulesProperty**: [`SerializableObjectCollectionProperty`](SerializableObjectCollectionProperty.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[rulesProperty](BaseTextBlock.md#rulesproperty)

#### Defined in

[card-elements.ts:119](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L119)

___

### selectActionProperty

▪ `Static` `Readonly` **selectActionProperty**: [`ActionProperty`](ActionProperty.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[selectActionProperty](BaseTextBlock.md#selectactionproperty)

#### Defined in

[card-elements.ts:765](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L765)

___

### separatorProperty

▪ `Static` `Readonly` **separatorProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[separatorProperty](BaseTextBlock.md#separatorproperty)

#### Defined in

[card-elements.ts:118](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L118)

___

### sizeProperty

▪ `Static` `Readonly` **sizeProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`TextSize`](../enums/TextSize.md)\>

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[sizeProperty](BaseTextBlock.md#sizeproperty)

#### Defined in

[card-elements.ts:742](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L742)

___

### spacingProperty

▪ `Static` `Readonly` **spacingProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`Spacing`](../enums/Spacing.md)\>

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[spacingProperty](BaseTextBlock.md#spacingproperty)

#### Defined in

[card-elements.ts:133](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L133)

___

### textProperty

▪ `Static` `Readonly` **textProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[textProperty](BaseTextBlock.md#textproperty)

#### Defined in

[card-elements.ts:738](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L738)

___

### typeNameProperty

▪ `Static` `Readonly` **typeNameProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[typeNameProperty](BaseTextBlock.md#typenameproperty)

#### Defined in

[card-object.ts:31](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L31)

___

### weightProperty

▪ `Static` `Readonly` **weightProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`TextWeight`](../enums/TextWeight.md)\>

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[weightProperty](BaseTextBlock.md#weightproperty)

#### Defined in

[card-elements.ts:747](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L747)

___

### wrapProperty

▪ `Static` `Readonly` **wrapProperty**: [`BoolProperty`](BoolProperty.md)

#### Defined in

[card-elements.ts:925](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L925)

## Accessors

### allowCustomPadding

• `Protected` `get` **allowCustomPadding**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseTextBlock.allowCustomPadding

#### Defined in

[card-elements.ts:414](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L414)

___

### defaultStyle

• `Protected` `get` **defaultStyle**(): `string`

#### Returns

`string`

#### Inherited from

BaseTextBlock.defaultStyle

#### Defined in

[card-elements.ts:422](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L422)

___

### effectiveColor

• `get` **effectiveColor**(): [`TextColor`](../enums/TextColor.md)

#### Returns

[`TextColor`](../enums/TextColor.md)

#### Inherited from

BaseTextBlock.effectiveColor

#### Defined in

[card-elements.ts:917](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L917)

___

### hasVisibleSeparator

• `get` **hasVisibleSeparator**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseTextBlock.hasVisibleSeparator

#### Defined in

[card-elements.ts:695](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L695)

___

### hostConfig

• `get` **hostConfig**(): [`HostConfig`](HostConfig.md)

#### Returns

[`HostConfig`](HostConfig.md)

#### Inherited from

BaseTextBlock.hostConfig

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

BaseTextBlock.hostConfig

#### Defined in

[card-elements.ts:670](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L670)

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

BaseTextBlock.index

#### Defined in

[card-elements.ts:674](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L674)

___

### isInline

• `get` **isInline**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseTextBlock.isInline

#### Defined in

[card-elements.ts:691](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L691)

___

### isInteractive

• `get` **isInteractive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseTextBlock.isInteractive

#### Defined in

[card-elements.ts:683](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L683)

___

### isStandalone

• `get` **isStandalone**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseTextBlock.isStandalone

#### Defined in

[card-elements.ts:687](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L687)

___

### isVisible

• `get` **isVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseTextBlock.isVisible

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

BaseTextBlock.isVisible

#### Defined in

[card-elements.ts:177](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L177)

___

### lang

• `get` **lang**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

BaseTextBlock.lang

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

BaseTextBlock.lang

#### Defined in

[card-elements.ts:168](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L168)

___

### parent

• `get` **parent**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Inherited from

BaseTextBlock.parent

#### Defined in

[card-elements.ts:708](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L708)

___

### renderedElement

• `get` **renderedElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

BaseTextBlock.renderedElement

#### Defined in

[card-object.ts:142](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L142)

___

### requires

• `get` **requires**(): `HostCapabilities`

#### Returns

`HostCapabilities`

#### Inherited from

BaseTextBlock.requires

#### Defined in

[card-object.ts:54](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L54)

___

### separatorElement

• `get` **separatorElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

BaseTextBlock.separatorElement

#### Defined in

[card-elements.ts:704](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L704)

___

### separatorOrientation

• `Protected` `get` **separatorOrientation**(): [`Orientation`](../enums/Orientation.md)

#### Returns

[`Orientation`](../enums/Orientation.md)

#### Inherited from

BaseTextBlock.separatorOrientation

#### Defined in

[card-elements.ts:418](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L418)

___

### text

• `get` **text**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

BaseTextBlock.text

#### Defined in

[card-elements.ts:790](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L790)

• `set` **text**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

BaseTextBlock.text

#### Defined in

[card-elements.ts:795](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L795)

___

### useDefaultSizing

• `Protected` `get` **useDefaultSizing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseTextBlock.useDefaultSizing

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

[BaseTextBlock](BaseTextBlock.md).[adjustRenderedElementSize](BaseTextBlock.md#adjustrenderedelementsize)

#### Defined in

[card-elements.ts:335](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L335)

___

### applyPadding

▸ `Protected` **applyPadding**(): `void`

#### Returns

`void`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[applyPadding](BaseTextBlock.md#applypadding)

#### Defined in

[card-elements.ts:354](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L354)

___

### applyStylesTo

▸ **applyStylesTo**(`targetElement`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetElement` | `HTMLElement` |

#### Returns

`void`

#### Overrides

[BaseTextBlock](BaseTextBlock.md).[applyStylesTo](BaseTextBlock.md#applystylesto)

#### Defined in

[card-elements.ts:1157](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1157)

___

### asString

▸ **asString**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[asString](BaseTextBlock.md#asstring)

#### Defined in

[card-elements.ts:859](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L859)

___

### createPlaceholderElement

▸ `Protected` **createPlaceholderElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[createPlaceholderElement](BaseTextBlock.md#createplaceholderelement)

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

[BaseTextBlock](BaseTextBlock.md).[getActionAt](BaseTextBlock.md#getactionat)

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

[BaseTextBlock](BaseTextBlock.md).[getActionById](BaseTextBlock.md#getactionbyid)

#### Defined in

[card-elements.ts:646](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L646)

___

### getActionCount

▸ **getActionCount**(): `number`

#### Returns

`number`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getActionCount](BaseTextBlock.md#getactioncount)

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

[BaseTextBlock](BaseTextBlock.md).[getAllInputs](BaseTextBlock.md#getallinputs)

#### Defined in

[card-elements.ts:634](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L634)

___

### getColorDefinition

▸ `Protected` **getColorDefinition**(`colorSet`, `color`): [`TextColorDefinition`](TextColorDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorSet` | [`ColorSetDefinition`](ColorSetDefinition.md) |
| `color` | [`TextColor`](../enums/TextColor.md) |

#### Returns

[`TextColorDefinition`](TextColorDefinition.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getColorDefinition](BaseTextBlock.md#getcolordefinition)

#### Defined in

[card-elements.ts:819](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L819)

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

[BaseTextBlock](BaseTextBlock.md).[getCustomProperty](BaseTextBlock.md#getcustomproperty)

#### Defined in

[serialization.ts:1040](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1040)

___

### getDefaultPadding

▸ `Protected` **getDefaultPadding**(): [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

[`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getDefaultPadding](BaseTextBlock.md#getdefaultpadding)

#### Defined in

[card-elements.ts:390](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L390)

___

### getDefaultSerializationContext

▸ `Protected` **getDefaultSerializationContext**(): [`BaseSerializationContext`](BaseSerializationContext.md)

#### Returns

[`BaseSerializationContext`](BaseSerializationContext.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getDefaultSerializationContext](BaseTextBlock.md#getdefaultserializationcontext)

#### Defined in

[card-elements.ts:316](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L316)

___

### getEffectivePadding

▸ **getEffectivePadding**(): [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

[`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getEffectivePadding](BaseTextBlock.md#geteffectivepadding)

#### Defined in

[card-elements.ts:650](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L650)

___

### getEffectiveStyle

▸ **getEffectiveStyle**(): `string`

#### Returns

`string`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getEffectiveStyle](BaseTextBlock.md#geteffectivestyle)

#### Defined in

[card-elements.ts:440](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L440)

___

### getEffectiveStyleDefinition

▸ **getEffectiveStyleDefinition**(): [`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Returns

[`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getEffectiveStyleDefinition](BaseTextBlock.md#geteffectivestyledefinition)

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

[BaseTextBlock](BaseTextBlock.md).[getElementById](BaseTextBlock.md#getelementbyid)

#### Defined in

[card-elements.ts:642](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L642)

___

### getFontSize

▸ `Protected` **getFontSize**(`fontType`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontType` | [`FontTypeDefinition`](FontTypeDefinition.md) |

#### Returns

`number`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getFontSize](BaseTextBlock.md#getfontsize)

#### Defined in

[card-elements.ts:804](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L804)

___

### getForbiddenActionTypes

▸ **getForbiddenActionTypes**(): [`ActionType`](../README.md#actiontype)[]

#### Returns

[`ActionType`](../README.md#actiontype)[]

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getForbiddenActionTypes](BaseTextBlock.md#getforbiddenactiontypes)

#### Defined in

[card-elements.ts:452](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L452)

___

### getHasBackground

▸ `Protected` **getHasBackground**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getHasBackground](BaseTextBlock.md#gethasbackground)

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

[BaseTextBlock](BaseTextBlock.md).[getImmediateSurroundingPadding](BaseTextBlock.md#getimmediatesurroundingpadding)

#### Defined in

[card-elements.ts:456](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L456)

___

### getJsonTypeName

▸ **getJsonTypeName**(): `string`

#### Returns

`string`

#### Overrides

[BaseTextBlock](BaseTextBlock.md).[getJsonTypeName](BaseTextBlock.md#getjsontypename)

#### Defined in

[card-elements.ts:1205](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1205)

___

### getPadding

▸ `Protected` **getPadding**(): `undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

`undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getPadding](BaseTextBlock.md#getpadding)

#### Defined in

[card-elements.ts:398](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L398)

___

### getParentContainer

▸ **getParentContainer**(): `undefined` \| [`Container`](Container.md)

#### Returns

`undefined` \| [`Container`](Container.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getParentContainer](BaseTextBlock.md#getparentcontainer)

#### Defined in

[card-elements.ts:620](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L620)

___

### getResourceInformation

▸ **getResourceInformation**(): [`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Returns

[`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getResourceInformation](BaseTextBlock.md#getresourceinformation)

#### Defined in

[card-elements.ts:638](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L638)

___

### getRootElement

▸ **getRootElement**(): [`CardElement`](CardElement.md)

#### Returns

[`CardElement`](CardElement.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getRootElement](BaseTextBlock.md#getrootelement)

#### Defined in

[card-elements.ts:616](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L616)

___

### getRootObject

▸ **getRootObject**(): [`CardObject`](CardObject.md)

#### Returns

[`CardObject`](CardObject.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getRootObject](BaseTextBlock.md#getrootobject)

#### Defined in

[card-object.ts:102](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L102)

___

### getSchema

▸ **getSchema**(): [`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Returns

[`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getSchema](BaseTextBlock.md#getschema)

#### Defined in

[serialization.ts:1044](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1044)

___

### getSchemaKey

▸ `Protected` **getSchemaKey**(): `string`

#### Returns

`string`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[getSchemaKey](BaseTextBlock.md#getschemakey)

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

[BaseTextBlock](BaseTextBlock.md).[getValue](BaseTextBlock.md#getvalue)

#### Defined in

[serialization.ts:875](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L875)

___

### hasAllDefaultValues

▸ **hasAllDefaultValues**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[hasAllDefaultValues](BaseTextBlock.md#hasalldefaultvalues)

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

[BaseTextBlock](BaseTextBlock.md).[hasDefaultValue](BaseTextBlock.md#hasdefaultvalue)

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

[BaseTextBlock](BaseTextBlock.md).[indexOf](BaseTextBlock.md#indexof)

#### Defined in

[card-elements.ts:554](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L554)

___

### init

▸ **init**(`textDefinition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `textDefinition` | [`BaseTextDefinition`](BaseTextDefinition.md) |

#### Returns

`void`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[init](BaseTextBlock.md#init)

#### Defined in

[card-elements.ts:852](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L852)

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

[BaseTextBlock](BaseTextBlock.md).[internalParse](BaseTextBlock.md#internalparse)

#### Defined in

[serialization.ts:888](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L888)

___

### internalRender

▸ `Protected` **internalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Overrides

[BaseTextBlock](BaseTextBlock.md).[internalRender](BaseTextBlock.md#internalrender)

#### Defined in

[card-elements.ts:978](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L978)

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

[BaseTextBlock](BaseTextBlock.md).[internalToJSON](BaseTextBlock.md#internaltojson)

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

[BaseTextBlock](BaseTextBlock.md).[internalValidateProperties](BaseTextBlock.md#internalvalidateproperties)

#### Defined in

[card-object.ts:112](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L112)

___

### isAtTheVeryBottom

▸ **isAtTheVeryBottom**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[isAtTheVeryBottom](BaseTextBlock.md#isattheverybottom)

#### Defined in

[card-elements.ts:584](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L584)

___

### isAtTheVeryLeft

▸ **isAtTheVeryLeft**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[isAtTheVeryLeft](BaseTextBlock.md#isattheveryleft)

#### Defined in

[card-elements.ts:572](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L572)

___

### isAtTheVeryRight

▸ **isAtTheVeryRight**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[isAtTheVeryRight](BaseTextBlock.md#isattheveryright)

#### Defined in

[card-elements.ts:576](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L576)

___

### isAtTheVeryTop

▸ **isAtTheVeryTop**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[isAtTheVeryTop](BaseTextBlock.md#isattheverytop)

#### Defined in

[card-elements.ts:580](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L580)

___

### isBleeding

▸ **isBleeding**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[isBleeding](BaseTextBlock.md#isbleeding)

#### Defined in

[card-elements.ts:436](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L436)

___

### isBleedingAtBottom

▸ **isBleedingAtBottom**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[isBleedingAtBottom](BaseTextBlock.md#isbleedingatbottom)

#### Defined in

[card-elements.ts:592](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L592)

___

### isBleedingAtTop

▸ **isBleedingAtTop**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[isBleedingAtTop](BaseTextBlock.md#isbleedingattop)

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

[BaseTextBlock](BaseTextBlock.md).[isBottomElement](BaseTextBlock.md#isbottomelement)

#### Defined in

[card-elements.ts:608](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L608)

___

### isDesignMode

▸ **isDesignMode**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[isDesignMode](BaseTextBlock.md#isdesignmode)

#### Defined in

[card-elements.ts:558](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L558)

___

### isDisplayed

▸ `Protected` **isDisplayed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[isDisplayed](BaseTextBlock.md#isdisplayed)

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

[BaseTextBlock](BaseTextBlock.md).[isFirstElement](BaseTextBlock.md#isfirstelement)

#### Defined in

[card-elements.ts:564](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L564)

___

### isHiddenDueToOverflow

▸ **isHiddenDueToOverflow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[isHiddenDueToOverflow](BaseTextBlock.md#ishiddenduetooverflow)

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

[BaseTextBlock](BaseTextBlock.md).[isLastElement](BaseTextBlock.md#islastelement)

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

[BaseTextBlock](BaseTextBlock.md).[isLeftMostElement](BaseTextBlock.md#isleftmostelement)

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

[BaseTextBlock](BaseTextBlock.md).[isRightMostElement](BaseTextBlock.md#isrightmostelement)

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

[BaseTextBlock](BaseTextBlock.md).[isTopElement](BaseTextBlock.md#istopelement)

#### Defined in

[card-elements.ts:604](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L604)

___

### overrideInternalRender

▸ `Protected` **overrideInternalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[overrideInternalRender](BaseTextBlock.md#overrideinternalrender)

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

[BaseTextBlock](BaseTextBlock.md).[parse](BaseTextBlock.md#parse)

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

[BaseTextBlock](BaseTextBlock.md).[populateSchema](BaseTextBlock.md#populateschema)

#### Defined in

[card-elements.ts:767](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L767)

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

[BaseTextBlock](BaseTextBlock.md).[preProcessPropertyValue](BaseTextBlock.md#preprocesspropertyvalue)

#### Defined in

[card-object.ts:72](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L72)

___

### remove

▸ **remove**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[remove](BaseTextBlock.md#remove)

#### Defined in

[card-elements.ts:515](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L515)

___

### render

▸ **render**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[render](BaseTextBlock.md#render)

#### Defined in

[card-elements.ts:523](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L523)

___

### resetDefaultValues

▸ **resetDefaultValues**(): `void`

#### Returns

`void`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[resetDefaultValues](BaseTextBlock.md#resetdefaultvalues)

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

[BaseTextBlock](BaseTextBlock.md).[setCustomProperty](BaseTextBlock.md#setcustomproperty)

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

[BaseTextBlock](BaseTextBlock.md).[setPadding](BaseTextBlock.md#setpadding)

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

[BaseTextBlock](BaseTextBlock.md).[setParent](BaseTextBlock.md#setparent)

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

[BaseTextBlock](BaseTextBlock.md).[setShouldFallback](BaseTextBlock.md#setshouldfallback)

#### Defined in

[card-object.ts:94](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L94)

___

### setText

▸ `Protected` **setText**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Overrides

[BaseTextBlock](BaseTextBlock.md).[setText](BaseTextBlock.md#settext)

#### Defined in

[card-elements.ts:972](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L972)

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

[BaseTextBlock](BaseTextBlock.md).[setValue](BaseTextBlock.md#setvalue)

#### Defined in

[serialization.ts:879](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L879)

___

### shouldFallback

▸ **shouldFallback**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[shouldFallback](BaseTextBlock.md#shouldfallback)

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

[BaseTextBlock](BaseTextBlock.md).[shouldSerialize](BaseTextBlock.md#shouldserialize)

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

[BaseTextBlock](BaseTextBlock.md).[toJSON](BaseTextBlock.md#tojson)

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

[BaseTextBlock](BaseTextBlock.md).[truncateOverflow](BaseTextBlock.md#truncateoverflow)

#### Defined in

[card-elements.ts:1136](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1136)

___

### undoOverflowTruncation

▸ `Protected` **undoOverflowTruncation**(): `void`

#### Returns

`void`

#### Overrides

[BaseTextBlock](BaseTextBlock.md).[undoOverflowTruncation](BaseTextBlock.md#undooverflowtruncation)

#### Defined in

[card-elements.ts:1144](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1144)

___

### updateLayout

▸ **updateLayout**(`processChildren?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `processChildren` | `boolean` | `false` |

#### Returns

`void`

#### Overrides

[BaseTextBlock](BaseTextBlock.md).[updateLayout](BaseTextBlock.md#updatelayout)

#### Defined in

[card-elements.ts:1209](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1209)

___

### validateProperties

▸ **validateProperties**(): [`ValidationResults`](ValidationResults.md)

#### Returns

[`ValidationResults`](ValidationResults.md)

#### Inherited from

[BaseTextBlock](BaseTextBlock.md).[validateProperties](BaseTextBlock.md#validateproperties)

#### Defined in

[card-object.ts:130](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L130)
