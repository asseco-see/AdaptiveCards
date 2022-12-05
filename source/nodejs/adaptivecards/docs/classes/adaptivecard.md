[Adaptive Cards Javascript SDK](../README.md) / AdaptiveCard

# Class: AdaptiveCard

## Hierarchy

- [`ContainerWithActions`](ContainerWithActions.md)

  ↳ **`AdaptiveCard`**

## Table of contents

### Constructors

- [constructor](AdaptiveCard.md#constructor)

### Properties

- [\_actionCollection](AdaptiveCard.md#_actioncollection)
- [\_items](AdaptiveCard.md#_items)
- [\_parent](AdaptiveCard.md#_parent)
- [\_renderedElement](AdaptiveCard.md#_renderedelement)
- [\_selectAction](AdaptiveCard.md#_selectaction)
- [allowVerticalOverflow](AdaptiveCard.md#allowverticaloverflow)
- [customCssSelector](AdaptiveCard.md#customcssselector)
- [dataset](AdaptiveCard.md#dataset)
- [designMode](AdaptiveCard.md#designmode)
- [fallbackText](AdaptiveCard.md#fallbacktext)
- [height](AdaptiveCard.md#height)
- [horizontalAlignment](AdaptiveCard.md#horizontalalignment)
- [id](AdaptiveCard.md#id)
- [maxVersion](AdaptiveCard.md#maxversion)
- [minPixelHeight](AdaptiveCard.md#minpixelheight)
- [onAnchorClicked](AdaptiveCard.md#onanchorclicked)
- [onElementVisibilityChanged](AdaptiveCard.md#onelementvisibilitychanged)
- [onExecuteAction](AdaptiveCard.md#onexecuteaction)
- [onImageLoaded](AdaptiveCard.md#onimageloaded)
- [onInlineCardExpanded](AdaptiveCard.md#oninlinecardexpanded)
- [onInputValueChanged](AdaptiveCard.md#oninputvaluechanged)
- [onPreProcessPropertyValue](AdaptiveCard.md#onpreprocesspropertyvalue)
- [rtl](AdaptiveCard.md#rtl)
- [rules](AdaptiveCard.md#rules)
- [separator](AdaptiveCard.md#separator)
- [spacing](AdaptiveCard.md#spacing)
- [speak](AdaptiveCard.md#speak)
- [version](AdaptiveCard.md#version)
- [verticalContentAlignment](AdaptiveCard.md#verticalcontentalignment)
- [$schemaProperty](AdaptiveCard.md#$schemaproperty)
- [backgroundImageProperty](AdaptiveCard.md#backgroundimageproperty)
- [bleedProperty](AdaptiveCard.md#bleedproperty)
- [fallbackTextProperty](AdaptiveCard.md#fallbacktextproperty)
- [heightProperty](AdaptiveCard.md#heightproperty)
- [horizontalAlignmentProperty](AdaptiveCard.md#horizontalalignmentproperty)
- [idProperty](AdaptiveCard.md#idproperty)
- [isVisibleProperty](AdaptiveCard.md#isvisibleproperty)
- [langProperty](AdaptiveCard.md#langproperty)
- [minHeightProperty](AdaptiveCard.md#minheightproperty)
- [onAnchorClicked](AdaptiveCard.md#onanchorclicked-1)
- [onElementVisibilityChanged](AdaptiveCard.md#onelementvisibilitychanged-1)
- [onExecuteAction](AdaptiveCard.md#onexecuteaction-1)
- [onImageLoaded](AdaptiveCard.md#onimageloaded-1)
- [onInlineCardExpanded](AdaptiveCard.md#oninlinecardexpanded-1)
- [onInputValueChanged](AdaptiveCard.md#oninputvaluechanged-1)
- [onProcessMarkdown](AdaptiveCard.md#onprocessmarkdown)
- [onRegisterCustomProperties](AdaptiveCard.md#onregistercustomproperties)
- [requiresProperty](AdaptiveCard.md#requiresproperty)
- [rtlProperty](AdaptiveCard.md#rtlproperty)
- [rulesProperty](AdaptiveCard.md#rulesproperty)
- [schemaUrl](AdaptiveCard.md#schemaurl)
- [selectActionProperty](AdaptiveCard.md#selectactionproperty)
- [separatorProperty](AdaptiveCard.md#separatorproperty)
- [spacingProperty](AdaptiveCard.md#spacingproperty)
- [speakProperty](AdaptiveCard.md#speakproperty)
- [styleProperty](AdaptiveCard.md#styleproperty)
- [typeNameProperty](AdaptiveCard.md#typenameproperty)
- [versionProperty](AdaptiveCard.md#versionproperty)
- [verticalContentAlignmentProperty](AdaptiveCard.md#verticalcontentalignmentproperty)

### Accessors

- [allowCustomPadding](AdaptiveCard.md#allowcustompadding)
- [allowCustomStyle](AdaptiveCard.md#allowcustomstyle)
- [backgroundImage](AdaptiveCard.md#backgroundimage)
- [bleed](AdaptiveCard.md#bleed)
- [bypassVersionCheck](AdaptiveCard.md#bypassversioncheck)
- [defaultStyle](AdaptiveCard.md#defaultstyle)
- [hasBackground](AdaptiveCard.md#hasbackground)
- [hasExplicitStyle](AdaptiveCard.md#hasexplicitstyle)
- [hasVisibleSeparator](AdaptiveCard.md#hasvisibleseparator)
- [hostConfig](AdaptiveCard.md#hostconfig)
- [index](AdaptiveCard.md#index)
- [isInline](AdaptiveCard.md#isinline)
- [isInteractive](AdaptiveCard.md#isinteractive)
- [isSelectable](AdaptiveCard.md#isselectable)
- [isStandalone](AdaptiveCard.md#isstandalone)
- [isVisible](AdaptiveCard.md#isvisible)
- [lang](AdaptiveCard.md#lang)
- [padding](AdaptiveCard.md#padding)
- [parent](AdaptiveCard.md#parent)
- [renderIfEmpty](AdaptiveCard.md#renderifempty)
- [renderedActionCount](AdaptiveCard.md#renderedactioncount)
- [renderedElement](AdaptiveCard.md#renderedelement)
- [requires](AdaptiveCard.md#requires)
- [selectAction](AdaptiveCard.md#selectaction)
- [separatorElement](AdaptiveCard.md#separatorelement)
- [separatorOrientation](AdaptiveCard.md#separatororientation)
- [style](AdaptiveCard.md#style)
- [useDefaultSizing](AdaptiveCard.md#usedefaultsizing)
- [processMarkdown](AdaptiveCard.md#processmarkdown)

### Methods

- [addAction](AdaptiveCard.md#addaction)
- [addDataSource](AdaptiveCard.md#adddatasource)
- [addItem](AdaptiveCard.md#additem)
- [adjustRenderedElementSize](AdaptiveCard.md#adjustrenderedelementsize)
- [applyBackground](AdaptiveCard.md#applybackground)
- [applyPadding](AdaptiveCard.md#applypadding)
- [asString](AdaptiveCard.md#asstring)
- [clear](AdaptiveCard.md#clear)
- [createPlaceholderElement](AdaptiveCard.md#createplaceholderelement)
- [getActionAt](AdaptiveCard.md#getactionat)
- [getActionById](AdaptiveCard.md#getactionbyid)
- [getActionCount](AdaptiveCard.md#getactioncount)
- [getAllInputs](AdaptiveCard.md#getallinputs)
- [getBleed](AdaptiveCard.md#getbleed)
- [getCustomProperty](AdaptiveCard.md#getcustomproperty)
- [getDefaultPadding](AdaptiveCard.md#getdefaultpadding)
- [getDefaultSerializationContext](AdaptiveCard.md#getdefaultserializationcontext)
- [getEffectivePadding](AdaptiveCard.md#geteffectivepadding)
- [getEffectiveStyle](AdaptiveCard.md#geteffectivestyle)
- [getEffectiveStyleDefinition](AdaptiveCard.md#geteffectivestyledefinition)
- [getElementById](AdaptiveCard.md#getelementbyid)
- [getFirstVisibleRenderedItem](AdaptiveCard.md#getfirstvisiblerendereditem)
- [getForbiddenActionTypes](AdaptiveCard.md#getforbiddenactiontypes)
- [getHasBackground](AdaptiveCard.md#gethasbackground)
- [getHasExpandedAction](AdaptiveCard.md#gethasexpandedaction)
- [getImmediateSurroundingPadding](AdaptiveCard.md#getimmediatesurroundingpadding)
- [getItemAt](AdaptiveCard.md#getitemat)
- [getItemCount](AdaptiveCard.md#getitemcount)
- [getItemsCollectionPropertyName](AdaptiveCard.md#getitemscollectionpropertyname)
- [getJsonTypeName](AdaptiveCard.md#getjsontypename)
- [getLastVisibleRenderedItem](AdaptiveCard.md#getlastvisiblerendereditem)
- [getPadding](AdaptiveCard.md#getpadding)
- [getParentContainer](AdaptiveCard.md#getparentcontainer)
- [getResourceInformation](AdaptiveCard.md#getresourceinformation)
- [getRootElement](AdaptiveCard.md#getrootelement)
- [getRootObject](AdaptiveCard.md#getrootobject)
- [getSchema](AdaptiveCard.md#getschema)
- [getSchemaKey](AdaptiveCard.md#getschemakey)
- [getValue](AdaptiveCard.md#getvalue)
- [hasAllDefaultValues](AdaptiveCard.md#hasalldefaultvalues)
- [hasDefaultValue](AdaptiveCard.md#hasdefaultvalue)
- [indexOf](AdaptiveCard.md#indexof)
- [insertItemAfter](AdaptiveCard.md#insertitemafter)
- [insertItemBefore](AdaptiveCard.md#insertitembefore)
- [internalParse](AdaptiveCard.md#internalparse)
- [internalRender](AdaptiveCard.md#internalrender)
- [internalToJSON](AdaptiveCard.md#internaltojson)
- [internalValidateProperties](AdaptiveCard.md#internalvalidateproperties)
- [isAtTheVeryBottom](AdaptiveCard.md#isattheverybottom)
- [isAtTheVeryLeft](AdaptiveCard.md#isattheveryleft)
- [isAtTheVeryRight](AdaptiveCard.md#isattheveryright)
- [isAtTheVeryTop](AdaptiveCard.md#isattheverytop)
- [isBleeding](AdaptiveCard.md#isbleeding)
- [isBleedingAtBottom](AdaptiveCard.md#isbleedingatbottom)
- [isBleedingAtTop](AdaptiveCard.md#isbleedingattop)
- [isBottomElement](AdaptiveCard.md#isbottomelement)
- [isDesignMode](AdaptiveCard.md#isdesignmode)
- [isDisplayed](AdaptiveCard.md#isdisplayed)
- [isElementAllowed](AdaptiveCard.md#iselementallowed)
- [isFirstElement](AdaptiveCard.md#isfirstelement)
- [isHiddenDueToOverflow](AdaptiveCard.md#ishiddenduetooverflow)
- [isLastElement](AdaptiveCard.md#islastelement)
- [isLeftMostElement](AdaptiveCard.md#isleftmostelement)
- [isRightMostElement](AdaptiveCard.md#isrightmostelement)
- [isRtl](AdaptiveCard.md#isrtl)
- [isTopElement](AdaptiveCard.md#istopelement)
- [overrideInternalRender](AdaptiveCard.md#overrideinternalrender)
- [parse](AdaptiveCard.md#parse)
- [populateSchema](AdaptiveCard.md#populateschema)
- [preProcessPropertyValue](AdaptiveCard.md#preprocesspropertyvalue)
- [remove](AdaptiveCard.md#remove)
- [removeItem](AdaptiveCard.md#removeitem)
- [render](AdaptiveCard.md#render)
- [resetDefaultValues](AdaptiveCard.md#resetdefaultvalues)
- [setBleed](AdaptiveCard.md#setbleed)
- [setCustomProperty](AdaptiveCard.md#setcustomproperty)
- [setPadding](AdaptiveCard.md#setpadding)
- [setParent](AdaptiveCard.md#setparent)
- [setShouldFallback](AdaptiveCard.md#setshouldfallback)
- [setValue](AdaptiveCard.md#setvalue)
- [shouldFallback](AdaptiveCard.md#shouldfallback)
- [shouldSerialize](AdaptiveCard.md#shouldserialize)
- [supportsExcplitiHeight](AdaptiveCard.md#supportsexcplitiheight)
- [toJSON](AdaptiveCard.md#tojson)
- [truncateOverflow](AdaptiveCard.md#truncateoverflow)
- [undoOverflowTruncation](AdaptiveCard.md#undooverflowtruncation)
- [updateLayout](AdaptiveCard.md#updatelayout)
- [validateProperties](AdaptiveCard.md#validateproperties)
- [applyMarkdown](AdaptiveCard.md#applymarkdown)

## Constructors

### constructor

• **new AdaptiveCard**()

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[constructor](ContainerWithActions.md#constructor)

#### Defined in

[card-elements.ts:6833](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6833)

## Properties

### \_actionCollection

• **\_actionCollection**: [`ActionCollection`](ActionCollection.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[_actionCollection](ContainerWithActions.md#_actioncollection)

#### Defined in

[card-elements.ts:6769](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6769)

___

### \_items

• **\_items**: [`CardElement`](CardElement.md)[] = `[]`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[_items](ContainerWithActions.md#_items)

#### Defined in

[card-elements.ts:5885](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5885)

___

### \_parent

• `Protected` `Optional` **\_parent**: [`CardObject`](CardObject.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[_parent](ContainerWithActions.md#_parent)

#### Defined in

[card-object.ts:63](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L63)

___

### \_renderedElement

• `Protected` `Optional` **\_renderedElement**: `HTMLElement`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[_renderedElement](ContainerWithActions.md#_renderedelement)

#### Defined in

[card-object.ts:64](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L64)

___

### \_selectAction

• `Protected` `Optional` **\_selectAction**: [`Action`](Action.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[_selectAction](ContainerWithActions.md#_selectaction)

#### Defined in

[card-elements.ts:1937](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1937)

___

### allowVerticalOverflow

• **allowVerticalOverflow**: `boolean` = `false`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[allowVerticalOverflow](ContainerWithActions.md#allowverticaloverflow)

#### Defined in

[card-elements.ts:1977](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1977)

___

### customCssSelector

• `Optional` **customCssSelector**: `string`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[customCssSelector](ContainerWithActions.md#customcssselector)

#### Defined in

[card-elements.ts:426](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L426)

___

### dataset

• `Optional` **dataset**: [`DataSet`](DataSet.md)

#### Defined in

[card-elements.ts:7131](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7131)

___

### designMode

• **designMode**: `boolean` = `false`

#### Defined in

[card-elements.ts:7297](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7297)

___

### fallbackText

• `Optional` **fallbackText**: `string`

#### Defined in

[card-elements.ts:7130](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7130)

___

### height

• **height**: [`CardElementHeight`](../README.md#cardelementheight)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[height](ContainerWithActions.md#height)

#### Defined in

[card-elements.ts:149](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L149)

___

### horizontalAlignment

• **horizontalAlignment**: [`HorizontalAlignment`](../enums/HorizontalAlignment.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[horizontalAlignment](ContainerWithActions.md#horizontalalignment)

#### Defined in

[card-elements.ts:140](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L140)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[id](ContainerWithActions.md#id)

#### Defined in

[card-object.ts:52](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L52)

___

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[maxVersion](ContainerWithActions.md#maxversion)

#### Defined in

[serialization.ts:949](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L949)

___

### minPixelHeight

• `Optional` **minPixelHeight**: `number`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[minPixelHeight](ContainerWithActions.md#minpixelheight)

#### Defined in

[card-elements.ts:5411](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5411)

___

### onAnchorClicked

• `Optional` **onAnchorClicked**: (`element`: [`CardElement`](CardElement.md), `anchor`: `HTMLAnchorElement`) => `boolean`

#### Type declaration

▸ (`element`, `anchor`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`CardElement`](CardElement.md) |
| `anchor` | `HTMLAnchorElement` |

##### Returns

`boolean`

#### Defined in

[card-elements.ts:7290](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7290)

___

### onElementVisibilityChanged

• `Optional` **onElementVisibilityChanged**: (`element`: [`CardElement`](CardElement.md)) => `void`

#### Type declaration

▸ (`element`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`CardElement`](CardElement.md) |

##### Returns

`void`

#### Defined in

[card-elements.ts:7292](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7292)

___

### onExecuteAction

• `Optional` **onExecuteAction**: (`action`: [`Action`](Action.md)) => `void`

#### Type declaration

▸ (`action`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](Action.md) |

##### Returns

`void`

#### Defined in

[card-elements.ts:7291](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7291)

___

### onImageLoaded

• `Optional` **onImageLoaded**: (`image`: [`Image`](Image.md)) => `void`

#### Type declaration

▸ (`image`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`Image`](Image.md) |

##### Returns

`void`

#### Defined in

[card-elements.ts:7293](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7293)

___

### onInlineCardExpanded

• `Optional` **onInlineCardExpanded**: (`action`: [`ShowCardAction`](ShowCardAction.md), `isExpanded`: `boolean`) => `void`

#### Type declaration

▸ (`action`, `isExpanded`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`ShowCardAction`](ShowCardAction.md) |
| `isExpanded` | `boolean` |

##### Returns

`void`

#### Defined in

[card-elements.ts:7294](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7294)

___

### onInputValueChanged

• `Optional` **onInputValueChanged**: (`input`: [`Input`](Input.md)) => `void`

#### Type declaration

▸ (`input`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`Input`](Input.md) |

##### Returns

`void`

#### Defined in

[card-elements.ts:7295](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7295)

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

[ContainerWithActions](ContainerWithActions.md).[onPreProcessPropertyValue](ContainerWithActions.md#onpreprocesspropertyvalue)

#### Defined in

[card-object.ts:66](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L66)

___

### rtl

• `Optional` **rtl**: `boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[rtl](ContainerWithActions.md#rtl)

#### Defined in

[card-elements.ts:5881](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5881)

___

### rules

• **rules**: [`RuleParam`](RuleParam.md)[]

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[rules](ContainerWithActions.md#rules)

#### Defined in

[card-elements.ts:201](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L201)

___

### separator

• **separator**: `boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[separator](ContainerWithActions.md#separator)

#### Defined in

[card-elements.ts:146](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L146)

___

### spacing

• **spacing**: [`Spacing`](../enums/Spacing.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[spacing](ContainerWithActions.md#spacing)

#### Defined in

[card-elements.ts:143](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L143)

___

### speak

• `Optional` **speak**: `string`

#### Defined in

[card-elements.ts:7133](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7133)

___

### version

• **version**: [`Version`](Version.md)

#### Defined in

[card-elements.ts:7127](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7127)

___

### verticalContentAlignment

• **verticalContentAlignment**: [`VerticalAlignment`](../enums/VerticalAlignment.md) = `Enums.VerticalAlignment.Top`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[verticalContentAlignment](ContainerWithActions.md#verticalcontentalignment)

#### Defined in

[card-elements.ts:5878](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5878)

___

### $schemaProperty

▪ `Static` `Protected` `Readonly` **$schemaProperty**: [`CustomProperty`](CustomProperty.md)<`string`\>

#### Defined in

[card-elements.ts:7090](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7090)

___

### backgroundImageProperty

▪ `Static` `Readonly` **backgroundImageProperty**: [`SerializableObjectProperty`](SerializableObjectProperty.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[backgroundImageProperty](ContainerWithActions.md#backgroundimageproperty)

#### Defined in

[card-elements.ts:5865](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5865)

___

### bleedProperty

▪ `Static` `Readonly` **bleedProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[bleedProperty](ContainerWithActions.md#bleedproperty)

#### Defined in

[card-elements.ts:5387](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5387)

___

### fallbackTextProperty

▪ `Static` `Readonly` **fallbackTextProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:7123](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7123)

___

### heightProperty

▪ `Static` `Readonly` **heightProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[heightProperty](ContainerWithActions.md#heightproperty)

#### Defined in

[card-elements.ts:120](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L120)

___

### horizontalAlignmentProperty

▪ `Static` `Readonly` **horizontalAlignmentProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`HorizontalAlignment`](../enums/HorizontalAlignment.md)\>

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[horizontalAlignmentProperty](ContainerWithActions.md#horizontalalignmentproperty)

#### Defined in

[card-elements.ts:128](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L128)

___

### idProperty

▪ `Static` `Readonly` **idProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[idProperty](ContainerWithActions.md#idproperty)

#### Defined in

[card-object.ts:40](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L40)

___

### isVisibleProperty

▪ `Static` `Readonly` **isVisibleProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[isVisibleProperty](ContainerWithActions.md#isvisibleproperty)

#### Defined in

[card-elements.ts:117](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L117)

___

### langProperty

▪ `Static` `Readonly` **langProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[langProperty](ContainerWithActions.md#langproperty)

#### Defined in

[card-elements.ts:116](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L116)

___

### minHeightProperty

▪ `Static` `Readonly` **minHeightProperty**: [`PixelSizeProperty`](PixelSizeProperty.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[minHeightProperty](ContainerWithActions.md#minheightproperty)

#### Defined in

[card-elements.ts:5388](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5388)

___

### onAnchorClicked

▪ `Static` `Optional` **onAnchorClicked**: (`element`: [`CardElement`](CardElement.md), `anchor`: `HTMLAnchorElement`) => `boolean`

#### Type declaration

▸ (`element`, `anchor`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`CardElement`](CardElement.md) |
| `anchor` | `HTMLAnchorElement` |

##### Returns

`boolean`

#### Defined in

[card-elements.ts:7146](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7146)

___

### onElementVisibilityChanged

▪ `Static` `Optional` **onElementVisibilityChanged**: (`element`: [`CardElement`](CardElement.md)) => `void`

#### Type declaration

▸ (`element`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`CardElement`](CardElement.md) |

##### Returns

`void`

#### Defined in

[card-elements.ts:7148](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7148)

___

### onExecuteAction

▪ `Static` `Optional` **onExecuteAction**: (`action`: [`Action`](Action.md)) => `void`

#### Type declaration

▸ (`action`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](Action.md) |

##### Returns

`void`

#### Defined in

[card-elements.ts:7147](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7147)

___

### onImageLoaded

▪ `Static` `Optional` **onImageLoaded**: (`image`: [`Image`](Image.md)) => `void`

#### Type declaration

▸ (`image`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`Image`](Image.md) |

##### Returns

`void`

#### Defined in

[card-elements.ts:7149](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7149)

___

### onInlineCardExpanded

▪ `Static` `Optional` **onInlineCardExpanded**: (`action`: [`ShowCardAction`](ShowCardAction.md), `isExpanded`: `boolean`) => `void`

#### Type declaration

▸ (`action`, `isExpanded`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`ShowCardAction`](ShowCardAction.md) |
| `isExpanded` | `boolean` |

##### Returns

`void`

#### Defined in

[card-elements.ts:7150](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7150)

___

### onInputValueChanged

▪ `Static` `Optional` **onInputValueChanged**: (`input`: [`Input`](Input.md)) => `void`

#### Type declaration

▸ (`input`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`Input`](Input.md) |

##### Returns

`void`

#### Defined in

[card-elements.ts:7151](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7151)

___

### onProcessMarkdown

▪ `Static` `Optional` **onProcessMarkdown**: (`text`: `string`, `result`: [`IMarkdownProcessingResult`](../interfaces/IMarkdownProcessingResult.md)) => `void`

#### Type declaration

▸ (`text`, `result`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `result` | [`IMarkdownProcessingResult`](../interfaces/IMarkdownProcessingResult.md) |

##### Returns

`void`

#### Defined in

[card-elements.ts:7152](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7152)

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

[ContainerWithActions](ContainerWithActions.md).[onRegisterCustomProperties](ContainerWithActions.md#onregistercustomproperties)

#### Defined in

[serialization.ts:809](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L809)

___

### requiresProperty

▪ `Static` `Readonly` **requiresProperty**: [`SerializableObjectProperty`](SerializableObjectProperty.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[requiresProperty](ContainerWithActions.md#requiresproperty)

#### Defined in

[card-object.ts:41](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L41)

___

### rtlProperty

▪ `Static` `Readonly` **rtlProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[rtlProperty](ContainerWithActions.md#rtlproperty)

#### Defined in

[card-elements.ts:5870](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5870)

___

### rulesProperty

▪ `Static` `Readonly` **rulesProperty**: [`SerializableObjectCollectionProperty`](SerializableObjectCollectionProperty.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[rulesProperty](ContainerWithActions.md#rulesproperty)

#### Defined in

[card-elements.ts:119](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L119)

___

### schemaUrl

▪ `Static` `Readonly` **schemaUrl**: ``"http://adaptivecards.io/schemas/adaptive-card.json"``

#### Defined in

[card-elements.ts:7085](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7085)

___

### selectActionProperty

▪ `Static` `Readonly` **selectActionProperty**: [`ActionProperty`](ActionProperty.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[selectActionProperty](ContainerWithActions.md#selectactionproperty)

#### Defined in

[card-elements.ts:1926](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L1926)

___

### separatorProperty

▪ `Static` `Readonly` **separatorProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[separatorProperty](ContainerWithActions.md#separatorproperty)

#### Defined in

[card-elements.ts:118](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L118)

___

### spacingProperty

▪ `Static` `Readonly` **spacingProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`Spacing`](../enums/Spacing.md)\>

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[spacingProperty](ContainerWithActions.md#spacingproperty)

#### Defined in

[card-elements.ts:133](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L133)

___

### speakProperty

▪ `Static` `Readonly` **speakProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:7124](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7124)

___

### styleProperty

▪ `Static` `Readonly` **styleProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[styleProperty](ContainerWithActions.md#styleproperty)

#### Defined in

[card-elements.ts:5376](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5376)

___

### typeNameProperty

▪ `Static` `Readonly` **typeNameProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[typeNameProperty](ContainerWithActions.md#typenameproperty)

#### Defined in

[card-object.ts:31](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L31)

___

### versionProperty

▪ `Static` `Readonly` **versionProperty**: [`CustomProperty`](CustomProperty.md)<`undefined` \| [`Version`](Version.md)\>

#### Defined in

[card-elements.ts:7100](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7100)

___

### verticalContentAlignmentProperty

▪ `Static` `Readonly` **verticalContentAlignmentProperty**: [`EnumProperty`](EnumProperty.md)<typeof [`VerticalAlignment`](../enums/VerticalAlignment.md)\>

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[verticalContentAlignmentProperty](ContainerWithActions.md#verticalcontentalignmentproperty)

#### Defined in

[card-elements.ts:5869](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5869)

## Accessors

### allowCustomPadding

• `Protected` `get` **allowCustomPadding**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ContainerWithActions.allowCustomPadding

#### Defined in

[card-elements.ts:414](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L414)

___

### allowCustomStyle

• `Protected` `get` **allowCustomStyle**(): `boolean`

#### Returns

`boolean`

#### Overrides

ContainerWithActions.allowCustomStyle

#### Defined in

[card-elements.ts:7282](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7282)

___

### backgroundImage

• `get` **backgroundImage**(): [`BackgroundImage`](BackgroundImage.md)

#### Returns

[`BackgroundImage`](BackgroundImage.md)

#### Inherited from

ContainerWithActions.backgroundImage

#### Defined in

[card-elements.ts:5872](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5872)

___

### bleed

• `get` **bleed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ContainerWithActions.bleed

#### Defined in

[card-elements.ts:6252](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6252)

• `set` **bleed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

ContainerWithActions.bleed

#### Defined in

[card-elements.ts:6256](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6256)

___

### bypassVersionCheck

• `Protected` `get` **bypassVersionCheck**(): `boolean`

#### Returns

`boolean`

#### Defined in

[card-elements.ts:7278](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7278)

___

### defaultStyle

• `Protected` `get` **defaultStyle**(): `string`

#### Returns

`string`

#### Inherited from

ContainerWithActions.defaultStyle

#### Defined in

[card-elements.ts:422](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L422)

___

### hasBackground

• `Protected` `get` **hasBackground**(): `boolean`

#### Returns

`boolean`

#### Defined in

[card-elements.ts:7286](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7286)

___

### hasExplicitStyle

• `Protected` `get` **hasExplicitStyle**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ContainerWithActions.hasExplicitStyle

#### Defined in

[card-elements.ts:5530](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5530)

___

### hasVisibleSeparator

• `get` **hasVisibleSeparator**(): `boolean`

#### Returns

`boolean`

#### Overrides

ContainerWithActions.hasVisibleSeparator

#### Defined in

[card-elements.ts:7379](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7379)

___

### hostConfig

• `get` **hostConfig**(): [`HostConfig`](HostConfig.md)

#### Returns

[`HostConfig`](HostConfig.md)

#### Inherited from

ContainerWithActions.hostConfig

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

ContainerWithActions.hostConfig

#### Defined in

[card-elements.ts:670](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L670)

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

ContainerWithActions.index

#### Defined in

[card-elements.ts:674](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L674)

___

### isInline

• `get` **isInline**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ContainerWithActions.isInline

#### Defined in

[card-elements.ts:691](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L691)

___

### isInteractive

• `get` **isInteractive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ContainerWithActions.isInteractive

#### Defined in

[card-elements.ts:683](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L683)

___

### isSelectable

• `Protected` `get` **isSelectable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ContainerWithActions.isSelectable

#### Defined in

[card-elements.ts:6075](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6075)

___

### isStandalone

• `get` **isStandalone**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ContainerWithActions.isStandalone

#### Defined in

[card-elements.ts:6908](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6908)

___

### isVisible

• `get` **isVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ContainerWithActions.isVisible

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

ContainerWithActions.isVisible

#### Defined in

[card-elements.ts:177](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L177)

___

### lang

• `get` **lang**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

ContainerWithActions.lang

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

ContainerWithActions.lang

#### Defined in

[card-elements.ts:168](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L168)

___

### padding

• `get` **padding**(): `undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

`undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

ContainerWithActions.padding

#### Defined in

[card-elements.ts:6236](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6236)

• `set` **padding**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`PaddingDefinition`](PaddingDefinition.md) |

#### Returns

`void`

#### Inherited from

ContainerWithActions.padding

#### Defined in

[card-elements.ts:6240](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6240)

___

### parent

• `get` **parent**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Inherited from

ContainerWithActions.parent

#### Defined in

[card-elements.ts:708](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L708)

___

### renderIfEmpty

• `Protected` `get` **renderIfEmpty**(): `boolean`

#### Returns

`boolean`

#### Overrides

ContainerWithActions.renderIfEmpty

#### Defined in

[card-elements.ts:7274](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7274)

___

### renderedActionCount

• `Protected` `get` **renderedActionCount**(): `number`

#### Returns

`number`

#### Inherited from

ContainerWithActions.renderedActionCount

#### Defined in

[card-elements.ts:6825](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6825)

___

### renderedElement

• `get` **renderedElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

ContainerWithActions.renderedElement

#### Defined in

[card-object.ts:142](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L142)

___

### requires

• `get` **requires**(): `HostCapabilities`

#### Returns

`HostCapabilities`

#### Inherited from

ContainerWithActions.requires

#### Defined in

[card-object.ts:54](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L54)

___

### selectAction

• `get` **selectAction**(): `undefined` \| [`Action`](Action.md)

#### Returns

`undefined` \| [`Action`](Action.md)

#### Inherited from

ContainerWithActions.selectAction

#### Defined in

[card-elements.ts:6244](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6244)

• `set` **selectAction**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`Action`](Action.md) |

#### Returns

`void`

#### Inherited from

ContainerWithActions.selectAction

#### Defined in

[card-elements.ts:6248](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6248)

___

### separatorElement

• `get` **separatorElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

ContainerWithActions.separatorElement

#### Defined in

[card-elements.ts:704](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L704)

___

### separatorOrientation

• `Protected` `get` **separatorOrientation**(): [`Orientation`](../enums/Orientation.md)

#### Returns

[`Orientation`](../enums/Orientation.md)

#### Inherited from

ContainerWithActions.separatorOrientation

#### Defined in

[card-elements.ts:418](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L418)

___

### style

• `get` **style**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

ContainerWithActions.style

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

ContainerWithActions.style

#### Defined in

[card-elements.ts:5403](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5403)

___

### useDefaultSizing

• `Protected` `get` **useDefaultSizing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ContainerWithActions.useDefaultSizing

#### Defined in

[card-elements.ts:410](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L410)

___

### processMarkdown

• `Static` `get` **processMarkdown**(): (`text`: `string`) => `string`

#### Returns

`fn`

▸ (`text`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

##### Returns

`string`

#### Defined in

[card-elements.ts:7154](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7154)

• `Static` `set` **processMarkdown**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | (`text`: `string`) => `string` |

#### Returns

`void`

#### Defined in

[card-elements.ts:7158](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7158)

## Methods

### addAction

▸ **addAction**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](Action.md) |

#### Returns

`void`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[addAction](ContainerWithActions.md#addaction)

#### Defined in

[card-elements.ts:6870](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6870)

___

### addDataSource

▸ **addDataSource**(`dataSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataSource` | [`DataSource`](DataSource.md) |

#### Returns

`void`

#### Defined in

[card-elements.ts:7136](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7136)

___

### addItem

▸ **addItem**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`CardElement`](CardElement.md) |

#### Returns

`void`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[addItem](ContainerWithActions.md#additem)

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

[ContainerWithActions](ContainerWithActions.md).[adjustRenderedElementSize](ContainerWithActions.md#adjustrenderedelementsize)

#### Defined in

[card-elements.ts:5415](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5415)

___

### applyBackground

▸ `Protected` **applyBackground**(): `void`

#### Returns

`void`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[applyBackground](ContainerWithActions.md#applybackground)

#### Defined in

[card-elements.ts:5920](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5920)

___

### applyPadding

▸ `Protected` **applyPadding**(): `void`

#### Returns

`void`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[applyPadding](ContainerWithActions.md#applypadding)

#### Defined in

[card-elements.ts:5435](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5435)

___

### asString

▸ **asString**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[asString](ContainerWithActions.md#asstring)

#### Defined in

[card-elements.ts:432](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L432)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[clear](ContainerWithActions.md#clear)

#### Defined in

[card-elements.ts:6874](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6874)

___

### createPlaceholderElement

▸ `Protected` **createPlaceholderElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[createPlaceholderElement](ContainerWithActions.md#createplaceholderelement)

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

[ContainerWithActions](ContainerWithActions.md).[getActionAt](ContainerWithActions.md#getactionat)

#### Defined in

[card-elements.ts:6843](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6843)

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

[ContainerWithActions](ContainerWithActions.md).[getActionById](ContainerWithActions.md#getactionbyid)

#### Defined in

[card-elements.ts:6852](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6852)

___

### getActionCount

▸ **getActionCount**(): `number`

#### Returns

`number`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getActionCount](ContainerWithActions.md#getactioncount)

#### Defined in

[card-elements.ts:6839](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6839)

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

[ContainerWithActions](ContainerWithActions.md).[getAllInputs](ContainerWithActions.md#getallinputs)

#### Defined in

[card-elements.ts:6880](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6880)

___

### getBleed

▸ `Protected` **getBleed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getBleed](ContainerWithActions.md#getbleed)

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

[ContainerWithActions](ContainerWithActions.md).[getCustomProperty](ContainerWithActions.md#getcustomproperty)

#### Defined in

[serialization.ts:1040](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1040)

___

### getDefaultPadding

▸ `Protected` **getDefaultPadding**(): [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

[`PaddingDefinition`](PaddingDefinition.md)

#### Overrides

[ContainerWithActions](ContainerWithActions.md).[getDefaultPadding](ContainerWithActions.md#getdefaultpadding)

#### Defined in

[card-elements.ts:7262](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7262)

___

### getDefaultSerializationContext

▸ `Protected` **getDefaultSerializationContext**(): [`BaseSerializationContext`](BaseSerializationContext.md)

#### Returns

[`BaseSerializationContext`](BaseSerializationContext.md)

#### Overrides

[ContainerWithActions](ContainerWithActions.md).[getDefaultSerializationContext](ContainerWithActions.md#getdefaultserializationcontext)

#### Defined in

[card-elements.ts:7200](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7200)

___

### getEffectivePadding

▸ **getEffectivePadding**(): [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

[`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getEffectivePadding](ContainerWithActions.md#geteffectivepadding)

#### Defined in

[card-elements.ts:650](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L650)

___

### getEffectiveStyle

▸ **getEffectiveStyle**(): `string`

#### Returns

`string`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getEffectiveStyle](ContainerWithActions.md#geteffectivestyle)

#### Defined in

[card-elements.ts:5569](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5569)

___

### getEffectiveStyleDefinition

▸ **getEffectiveStyleDefinition**(): [`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Returns

[`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getEffectiveStyleDefinition](ContainerWithActions.md#geteffectivestyledefinition)

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

[ContainerWithActions](ContainerWithActions.md).[getElementById](ContainerWithActions.md#getelementbyid)

#### Defined in

[card-elements.ts:2082](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L2082)

___

### getFirstVisibleRenderedItem

▸ **getFirstVisibleRenderedItem**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getFirstVisibleRenderedItem](ContainerWithActions.md#getfirstvisiblerendereditem)

#### Defined in

[card-elements.ts:6087](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6087)

___

### getForbiddenActionTypes

▸ **getForbiddenActionTypes**(): [`ActionType`](../README.md#actiontype)[]

#### Returns

[`ActionType`](../README.md#actiontype)[]

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getForbiddenActionTypes](ContainerWithActions.md#getforbiddenactiontypes)

#### Defined in

[card-elements.ts:452](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L452)

___

### getHasBackground

▸ `Protected` **getHasBackground**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ContainerWithActions](ContainerWithActions.md).[getHasBackground](ContainerWithActions.md#gethasbackground)

#### Defined in

[card-elements.ts:7258](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7258)

___

### getHasExpandedAction

▸ `Protected` **getHasExpandedAction**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getHasExpandedAction](ContainerWithActions.md#gethasexpandedaction)

#### Defined in

[card-elements.ts:6813](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6813)

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

[ContainerWithActions](ContainerWithActions.md).[getImmediateSurroundingPadding](ContainerWithActions.md#getimmediatesurroundingpadding)

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

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getItemAt](ContainerWithActions.md#getitemat)

#### Defined in

[card-elements.ts:6083](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6083)

___

### getItemCount

▸ **getItemCount**(): `number`

#### Returns

`number`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getItemCount](ContainerWithActions.md#getitemcount)

#### Defined in

[card-elements.ts:6079](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6079)

___

### getItemsCollectionPropertyName

▸ `Protected` **getItemsCollectionPropertyName**(): `string`

#### Returns

`string`

#### Overrides

[ContainerWithActions](ContainerWithActions.md).[getItemsCollectionPropertyName](ContainerWithActions.md#getitemscollectionpropertyname)

#### Defined in

[card-elements.ts:7204](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7204)

___

### getJsonTypeName

▸ **getJsonTypeName**(): `string`

#### Returns

`string`

#### Overrides

[ContainerWithActions](ContainerWithActions.md).[getJsonTypeName](ContainerWithActions.md#getjsontypename)

#### Defined in

[card-elements.ts:7299](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7299)

___

### getLastVisibleRenderedItem

▸ **getLastVisibleRenderedItem**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getLastVisibleRenderedItem](ContainerWithActions.md#getlastvisiblerendereditem)

#### Defined in

[card-elements.ts:6099](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6099)

___

### getPadding

▸ `Protected` **getPadding**(): `undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Returns

`undefined` \| [`PaddingDefinition`](PaddingDefinition.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getPadding](ContainerWithActions.md#getpadding)

#### Defined in

[card-elements.ts:398](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L398)

___

### getParentContainer

▸ **getParentContainer**(): `undefined` \| [`Container`](Container.md)

#### Returns

`undefined` \| [`Container`](Container.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getParentContainer](ContainerWithActions.md#getparentcontainer)

#### Defined in

[card-elements.ts:620](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L620)

___

### getResourceInformation

▸ **getResourceInformation**(): [`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Returns

[`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getResourceInformation](ContainerWithActions.md#getresourceinformation)

#### Defined in

[card-elements.ts:6890](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6890)

___

### getRootElement

▸ **getRootElement**(): [`CardElement`](CardElement.md)

#### Returns

[`CardElement`](CardElement.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getRootElement](ContainerWithActions.md#getrootelement)

#### Defined in

[card-elements.ts:616](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L616)

___

### getRootObject

▸ **getRootObject**(): [`CardObject`](CardObject.md)

#### Returns

[`CardObject`](CardObject.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getRootObject](ContainerWithActions.md#getrootobject)

#### Defined in

[card-object.ts:102](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L102)

___

### getSchema

▸ **getSchema**(): [`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Returns

[`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getSchema](ContainerWithActions.md#getschema)

#### Defined in

[serialization.ts:1044](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1044)

___

### getSchemaKey

▸ `Protected` **getSchemaKey**(): `string`

#### Returns

`string`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[getSchemaKey](ContainerWithActions.md#getschemakey)

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

[ContainerWithActions](ContainerWithActions.md).[getValue](ContainerWithActions.md#getvalue)

#### Defined in

[serialization.ts:875](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L875)

___

### hasAllDefaultValues

▸ **hasAllDefaultValues**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[hasAllDefaultValues](ContainerWithActions.md#hasalldefaultvalues)

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

[ContainerWithActions](ContainerWithActions.md).[hasDefaultValue](ContainerWithActions.md#hasdefaultvalue)

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

[ContainerWithActions](ContainerWithActions.md).[indexOf](ContainerWithActions.md#indexof)

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

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[insertItemAfter](ContainerWithActions.md#insertitemafter)

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

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[insertItemBefore](ContainerWithActions.md#insertitembefore)

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

[ContainerWithActions](ContainerWithActions.md).[internalParse](ContainerWithActions.md#internalparse)

#### Defined in

[card-elements.ts:7208](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7208)

___

### internalRender

▸ `Protected` **internalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Overrides

[ContainerWithActions](ContainerWithActions.md).[internalRender](ContainerWithActions.md#internalrender)

#### Defined in

[card-elements.ts:7245](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7245)

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

[ContainerWithActions](ContainerWithActions.md).[internalToJSON](ContainerWithActions.md#internaltojson)

#### Defined in

[card-elements.ts:7239](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7239)

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

[ContainerWithActions](ContainerWithActions.md).[internalValidateProperties](ContainerWithActions.md#internalvalidateproperties)

#### Defined in

[card-elements.ts:7303](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7303)

___

### isAtTheVeryBottom

▸ **isAtTheVeryBottom**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[isAtTheVeryBottom](ContainerWithActions.md#isattheverybottom)

#### Defined in

[card-elements.ts:584](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L584)

___

### isAtTheVeryLeft

▸ **isAtTheVeryLeft**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[isAtTheVeryLeft](ContainerWithActions.md#isattheveryleft)

#### Defined in

[card-elements.ts:572](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L572)

___

### isAtTheVeryRight

▸ **isAtTheVeryRight**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[isAtTheVeryRight](ContainerWithActions.md#isattheveryright)

#### Defined in

[card-elements.ts:576](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L576)

___

### isAtTheVeryTop

▸ **isAtTheVeryTop**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[isAtTheVeryTop](ContainerWithActions.md#isattheverytop)

#### Defined in

[card-elements.ts:580](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L580)

___

### isBleeding

▸ **isBleeding**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[isBleeding](ContainerWithActions.md#isbleeding)

#### Defined in

[card-elements.ts:5538](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L5538)

___

### isBleedingAtBottom

▸ **isBleedingAtBottom**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[isBleedingAtBottom](ContainerWithActions.md#isbleedingatbottom)

#### Defined in

[card-elements.ts:6894](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6894)

___

### isBleedingAtTop

▸ **isBleedingAtTop**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[isBleedingAtTop](ContainerWithActions.md#isbleedingattop)

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

[ContainerWithActions](ContainerWithActions.md).[isBottomElement](ContainerWithActions.md#isbottomelement)

#### Defined in

[card-elements.ts:608](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L608)

___

### isDesignMode

▸ **isDesignMode**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[isDesignMode](ContainerWithActions.md#isdesignmode)

#### Defined in

[card-elements.ts:558](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L558)

___

### isDisplayed

▸ `Protected` **isDisplayed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[isDisplayed](ContainerWithActions.md#isdisplayed)

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

[ContainerWithActions](ContainerWithActions.md).[isElementAllowed](ContainerWithActions.md#iselementallowed)

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

[ContainerWithActions](ContainerWithActions.md).[isFirstElement](ContainerWithActions.md#isfirstelement)

#### Defined in

[card-elements.ts:6115](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6115)

___

### isHiddenDueToOverflow

▸ **isHiddenDueToOverflow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[isHiddenDueToOverflow](ContainerWithActions.md#ishiddenduetooverflow)

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

[ContainerWithActions](ContainerWithActions.md).[isLastElement](ContainerWithActions.md#islastelement)

#### Defined in

[card-elements.ts:6866](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6866)

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

[ContainerWithActions](ContainerWithActions.md).[isLeftMostElement](ContainerWithActions.md#isleftmostelement)

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

[ContainerWithActions](ContainerWithActions.md).[isRightMostElement](ContainerWithActions.md#isrightmostelement)

#### Defined in

[card-elements.ts:600](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L600)

___

### isRtl

▸ **isRtl**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[isRtl](ContainerWithActions.md#isrtl)

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

[ContainerWithActions](ContainerWithActions.md).[isTopElement](ContainerWithActions.md#istopelement)

#### Defined in

[card-elements.ts:604](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L604)

___

### overrideInternalRender

▸ `Protected` **overrideInternalRender**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[overrideInternalRender](ContainerWithActions.md#overrideinternalrender)

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

[ContainerWithActions](ContainerWithActions.md).[parse](ContainerWithActions.md#parse)

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

[ContainerWithActions](ContainerWithActions.md).[populateSchema](ContainerWithActions.md#populateschema)

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

[ContainerWithActions](ContainerWithActions.md).[preProcessPropertyValue](ContainerWithActions.md#preprocesspropertyvalue)

#### Defined in

[card-object.ts:72](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L72)

___

### remove

▸ **remove**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[remove](ContainerWithActions.md#remove)

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

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[removeItem](ContainerWithActions.md#removeitem)

#### Defined in

[card-elements.ts:6178](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6178)

___

### render

▸ **render**(`target?`): `undefined` \| `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `HTMLElement` |

#### Returns

`undefined` \| `HTMLElement`

#### Overrides

[ContainerWithActions](ContainerWithActions.md).[render](ContainerWithActions.md#render)

#### Defined in

[card-elements.ts:7327](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7327)

___

### resetDefaultValues

▸ **resetDefaultValues**(): `void`

#### Returns

`void`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[resetDefaultValues](ContainerWithActions.md#resetdefaultvalues)

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

[ContainerWithActions](ContainerWithActions.md).[setBleed](ContainerWithActions.md#setbleed)

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

[ContainerWithActions](ContainerWithActions.md).[setCustomProperty](ContainerWithActions.md#setcustomproperty)

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

[ContainerWithActions](ContainerWithActions.md).[setPadding](ContainerWithActions.md#setpadding)

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

[ContainerWithActions](ContainerWithActions.md).[setParent](ContainerWithActions.md#setparent)

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

[ContainerWithActions](ContainerWithActions.md).[setShouldFallback](ContainerWithActions.md#setshouldfallback)

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

[ContainerWithActions](ContainerWithActions.md).[setValue](ContainerWithActions.md#setvalue)

#### Defined in

[serialization.ts:879](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L879)

___

### shouldFallback

▸ **shouldFallback**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ContainerWithActions](ContainerWithActions.md).[shouldFallback](ContainerWithActions.md#shouldfallback)

#### Defined in

[card-elements.ts:7375](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7375)

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

[ContainerWithActions](ContainerWithActions.md).[shouldSerialize](ContainerWithActions.md#shouldserialize)

#### Defined in

[card-elements.ts:7270](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7270)

___

### supportsExcplitiHeight

▸ `Protected` **supportsExcplitiHeight**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[supportsExcplitiHeight](ContainerWithActions.md#supportsexcplitiheight)

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

[ContainerWithActions](ContainerWithActions.md).[toJSON](ContainerWithActions.md#tojson)

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

[ContainerWithActions](ContainerWithActions.md).[truncateOverflow](ContainerWithActions.md#truncateoverflow)

#### Defined in

[card-elements.ts:6001](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L6001)

___

### undoOverflowTruncation

▸ `Protected` **undoOverflowTruncation**(): `void`

#### Returns

`void`

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[undoOverflowTruncation](ContainerWithActions.md#undooverflowtruncation)

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

#### Overrides

[ContainerWithActions](ContainerWithActions.md).[updateLayout](ContainerWithActions.md#updatelayout)

#### Defined in

[card-elements.ts:7365](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7365)

___

### validateProperties

▸ **validateProperties**(): [`ValidationResults`](ValidationResults.md)

#### Returns

[`ValidationResults`](ValidationResults.md)

#### Inherited from

[ContainerWithActions](ContainerWithActions.md).[validateProperties](ContainerWithActions.md#validateproperties)

#### Defined in

[card-object.ts:130](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L130)

___

### applyMarkdown

▸ `Static` **applyMarkdown**(`text`): [`IMarkdownProcessingResult`](../interfaces/IMarkdownProcessingResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`IMarkdownProcessingResult`](../interfaces/IMarkdownProcessingResult.md)

#### Defined in

[card-elements.ts:7162](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7162)
