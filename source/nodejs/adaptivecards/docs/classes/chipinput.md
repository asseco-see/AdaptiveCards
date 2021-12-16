[Adaptive Cards Javascript SDK](../README.md) › [ChipInput](chipinput.md)

# Class: ChipInput

## Hierarchy

  ↳ [Input](input.md)

  ↳ **ChipInput**

## Implements

* [IInput](../interfaces/iinput.md)

## Index

### Constructors

* [constructor](chipinput.md#constructor)

### Properties

* [_parent](chipinput.md#protected-optional-_parent)
* [_renderedElement](chipinput.md#protected-optional-_renderedelement)
* [customCssSelector](chipinput.md#optional-customcssselector)
* [errorMessage](chipinput.md#optional-errormessage)
* [height](chipinput.md#height)
* [horizontalAlignment](chipinput.md#horizontalalignment)
* [isRequired](chipinput.md#isrequired)
* [label](chipinput.md#optional-label)
* [maxVersion](chipinput.md#maxversion)
* [onPreProcessPropertyValue](chipinput.md#optional-onpreprocesspropertyvalue)
* [onValueChanged](chipinput.md#onvaluechanged)
* [separator](chipinput.md#separator)
* [spacing](chipinput.md#spacing)
* [JsonTypeName](chipinput.md#static-readonly-jsontypename)
* [chipsProperty](chipinput.md#static-readonly-chipsproperty)
* [colorProperty](chipinput.md#static-readonly-colorproperty)
* [errorMessageProperty](chipinput.md#static-readonly-errormessageproperty)
* [heightProperty](chipinput.md#static-readonly-heightproperty)
* [horizontalAlignmentProperty](chipinput.md#static-readonly-horizontalalignmentproperty)
* [idProperty](chipinput.md#static-readonly-idproperty)
* [isRequiredProperty](chipinput.md#static-readonly-isrequiredproperty)
* [isVisibleProperty](chipinput.md#static-readonly-isvisibleproperty)
* [labelProperty](chipinput.md#static-readonly-labelproperty)
* [langProperty](chipinput.md#static-readonly-langproperty)
* [onRegisterCustomProperties](chipinput.md#static-optional-onregistercustomproperties)
* [placeholderProperty](chipinput.md#static-readonly-placeholderproperty)
* [removableProperty](chipinput.md#static-readonly-removableproperty)
* [requiresProperty](chipinput.md#static-readonly-requiresproperty)
* [selectedAttribute](chipinput.md#static-readonly-selectedattribute)
* [separatorProperty](chipinput.md#static-readonly-separatorproperty)
* [spacingProperty](chipinput.md#static-readonly-spacingproperty)
* [typeNameProperty](chipinput.md#static-readonly-typenameproperty)

### Accessors

* [allowCustomPadding](chipinput.md#protected-allowcustompadding)
* [color](chipinput.md#color)
* [defaultStyle](chipinput.md#protected-defaultstyle)
* [hasVisibleSeparator](chipinput.md#hasvisibleseparator)
* [hostConfig](chipinput.md#hostconfig)
* [id](chipinput.md#id)
* [index](chipinput.md#index)
* [inputControlContainerElement](chipinput.md#protected-inputcontrolcontainerelement)
* [isInline](chipinput.md#isinline)
* [isInteractive](chipinput.md#isinteractive)
* [isNullable](chipinput.md#protected-isnullable)
* [isStandalone](chipinput.md#isstandalone)
* [isVisible](chipinput.md#isvisible)
* [lang](chipinput.md#lang)
* [parent](chipinput.md#parent)
* [placeholder](chipinput.md#placeholder)
* [removable](chipinput.md#removable)
* [renderedElement](chipinput.md#renderedelement)
* [renderedInputControlElement](chipinput.md#protected-renderedinputcontrolelement)
* [requires](chipinput.md#requires)
* [separatorElement](chipinput.md#separatorelement)
* [separatorOrientation](chipinput.md#protected-separatororientation)
* [useDefaultSizing](chipinput.md#protected-usedefaultsizing)
* [value](chipinput.md#value)

### Methods

* [addChip](chipinput.md#addchip)
* [addInput](chipinput.md#addinput)
* [adjustRenderedElementSize](chipinput.md#protected-adjustrenderedelementsize)
* [applyPadding](chipinput.md#protected-applypadding)
* [asString](chipinput.md#asstring)
* [createPlaceholderElement](chipinput.md#protected-createplaceholderelement)
* [focus](chipinput.md#focus)
* [getActionAt](chipinput.md#getactionat)
* [getActionById](chipinput.md#getactionbyid)
* [getActionCount](chipinput.md#getactioncount)
* [getAllInputs](chipinput.md#getallinputs)
* [getAllLabelIds](chipinput.md#protected-getalllabelids)
* [getBgColor](chipinput.md#getbgcolor)
* [getCustomProperty](chipinput.md#getcustomproperty)
* [getDefaultPadding](chipinput.md#protected-getdefaultpadding)
* [getDefaultSerializationContext](chipinput.md#protected-getdefaultserializationcontext)
* [getEffectivePadding](chipinput.md#geteffectivepadding)
* [getEffectiveStyle](chipinput.md#geteffectivestyle)
* [getEffectiveStyleDefinition](chipinput.md#geteffectivestyledefinition)
* [getElementById](chipinput.md#getelementbyid)
* [getForbiddenActionTypes](chipinput.md#getforbiddenactiontypes)
* [getHasBackground](chipinput.md#protected-gethasbackground)
* [getImmediateSurroundingPadding](chipinput.md#getimmediatesurroundingpadding)
* [getJsonTypeName](chipinput.md#getjsontypename)
* [getPadding](chipinput.md#protected-getpadding)
* [getParentContainer](chipinput.md#getparentcontainer)
* [getResourceInformation](chipinput.md#getresourceinformation)
* [getRootElement](chipinput.md#getrootelement)
* [getRootObject](chipinput.md#getrootobject)
* [getSchema](chipinput.md#getschema)
* [getSchemaKey](chipinput.md#protected-getschemakey)
* [getValue](chipinput.md#protected-getvalue)
* [hasAllDefaultValues](chipinput.md#hasalldefaultvalues)
* [hasDefaultValue](chipinput.md#hasdefaultvalue)
* [indexOf](chipinput.md#indexof)
* [internalParse](chipinput.md#protected-internalparse)
* [internalRender](chipinput.md#protected-internalrender)
* [internalToJSON](chipinput.md#protected-internaltojson)
* [internalValidateProperties](chipinput.md#internalvalidateproperties)
* [isAtTheVeryBottom](chipinput.md#isattheverybottom)
* [isAtTheVeryLeft](chipinput.md#isattheveryleft)
* [isAtTheVeryRight](chipinput.md#isattheveryright)
* [isAtTheVeryTop](chipinput.md#isattheverytop)
* [isBleeding](chipinput.md#isbleeding)
* [isBleedingAtBottom](chipinput.md#isbleedingatbottom)
* [isBleedingAtTop](chipinput.md#isbleedingattop)
* [isBottomElement](chipinput.md#isbottomelement)
* [isDesignMode](chipinput.md#isdesignmode)
* [isDisplayed](chipinput.md#protected-isdisplayed)
* [isFirstElement](chipinput.md#isfirstelement)
* [isHiddenDueToOverflow](chipinput.md#ishiddenduetooverflow)
* [isLastElement](chipinput.md#islastelement)
* [isLeftMostElement](chipinput.md#isleftmostelement)
* [isRightMostElement](chipinput.md#isrightmostelement)
* [isSet](chipinput.md#isset)
* [isTopElement](chipinput.md#istopelement)
* [isValid](chipinput.md#isvalid)
* [overrideInternalRender](chipinput.md#protected-overrideinternalrender)
* [parse](chipinput.md#parse)
* [populateSchema](chipinput.md#protected-populateschema)
* [preProcessPropertyValue](chipinput.md#preprocesspropertyvalue)
* [remove](chipinput.md#remove)
* [render](chipinput.md#render)
* [resetDefaultValues](chipinput.md#resetdefaultvalues)
* [resetValidationFailureCue](chipinput.md#protected-resetvalidationfailurecue)
* [setCustomProperty](chipinput.md#setcustomproperty)
* [setPadding](chipinput.md#protected-setpadding)
* [setParent](chipinput.md#setparent)
* [setShouldFallback](chipinput.md#setshouldfallback)
* [setValue](chipinput.md#protected-setvalue)
* [shouldFallback](chipinput.md#shouldfallback)
* [shouldSerialize](chipinput.md#protected-shouldserialize)
* [showValidationErrorMessage](chipinput.md#protected-showvalidationerrormessage)
* [toJSON](chipinput.md#tojson)
* [truncateOverflow](chipinput.md#protected-truncateoverflow)
* [undoOverflowTruncation](chipinput.md#protected-undooverflowtruncation)
* [updateInputControlAriaLabelledBy](chipinput.md#protected-updateinputcontrolarialabelledby)
* [updateLayout](chipinput.md#updatelayout)
* [validateProperties](chipinput.md#validateproperties)
* [validateValue](chipinput.md#validatevalue)
* [valueChanged](chipinput.md#protected-valuechanged)

## Constructors

###  constructor

\+ **new ChipInput**(): *[ChipInput](chipinput.md)*

*Inherited from [HostCapabilities](hostcapabilities.md).[constructor](hostcapabilities.md#constructor)*

**Returns:** *[ChipInput](chipinput.md)*

## Properties

### `Protected` `Optional` _parent

• **_parent**? : *[CardObject](cardobject.md)*

*Inherited from [CardObject](cardobject.md).[_parent](cardobject.md#protected-optional-_parent)*

___

### `Protected` `Optional` _renderedElement

• **_renderedElement**? : *HTMLElement*

*Inherited from [CardObject](cardobject.md).[_renderedElement](cardobject.md#protected-optional-_renderedelement)*

___

### `Optional` customCssSelector

• **customCssSelector**? : *undefined | string*

*Inherited from [CardElement](cardelement.md).[customCssSelector](cardelement.md#optional-customcssselector)*

___

### `Optional` errorMessage

• **errorMessage**? : *undefined | string*

*Inherited from [Input](input.md).[errorMessage](input.md#optional-errormessage)*

___

###  height

• **height**: *[CardElementHeight](../README.md#cardelementheight)*

*Implementation of [IInput](../interfaces/iinput.md).[height](../interfaces/iinput.md#optional-height)*

*Inherited from [CardElement](cardelement.md).[height](cardelement.md#height)*

___

###  horizontalAlignment

• **horizontalAlignment**: *[HorizontalAlignment](../enums/horizontalalignment.md)*

*Implementation of [IInput](../interfaces/iinput.md).[horizontalAlignment](../interfaces/iinput.md#optional-horizontalalignment)*

*Inherited from [CardElement](cardelement.md).[horizontalAlignment](cardelement.md#horizontalalignment)*

___

###  isRequired

• **isRequired**: *boolean*

*Inherited from [Input](input.md).[isRequired](input.md#isrequired)*

___

### `Optional` label

• **label**? : *undefined | string*

*Inherited from [Input](input.md).[label](input.md#optional-label)*

___

###  maxVersion

• **maxVersion**: *[Version](version.md)* = Versions.v1_3

*Inherited from [HostCapabilities](hostcapabilities.md).[maxVersion](hostcapabilities.md#maxversion)*

___

### `Optional` onPreProcessPropertyValue

• **onPreProcessPropertyValue**? : *undefined | function*

*Inherited from [CardObject](cardobject.md).[onPreProcessPropertyValue](cardobject.md#optional-onpreprocesspropertyvalue)*

___

###  onValueChanged

• **onValueChanged**: *function*

*Inherited from [Input](input.md).[onValueChanged](input.md#onvaluechanged)*

#### Type declaration:

▸ (`sender`: [Input](input.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`sender` | [Input](input.md) |

___

###  separator

• **separator**: *boolean*

*Implementation of [IInput](../interfaces/iinput.md).[separator](../interfaces/iinput.md#optional-separator)*

*Inherited from [CardElement](cardelement.md).[separator](cardelement.md#separator)*

___

###  spacing

• **spacing**: *[Spacing](../enums/spacing.md)*

*Implementation of [IInput](../interfaces/iinput.md).[spacing](../interfaces/iinput.md#optional-spacing)*

*Inherited from [CardElement](cardelement.md).[spacing](cardelement.md#spacing)*

___

### `Static` `Readonly` JsonTypeName

▪ **JsonTypeName**: *"Input.Chips"* = "Input.Chips"

___

### `Static` `Readonly` chipsProperty

▪ **chipsProperty**: *[SerializableObjectCollectionProperty](serializableobjectcollectionproperty.md)‹›* = new SerializableObjectCollectionProperty(Versions.v1_0, "chips", Chip)

___

### `Static` `Readonly` colorProperty

▪ **colorProperty**: *[StringProperty](stringproperty.md)‹›* = new StringProperty(Versions.v1_0, "color", true)

___

### `Static` `Readonly` errorMessageProperty

▪ **errorMessageProperty**: *[StringProperty](stringproperty.md)‹›* = new StringProperty(Versions.v1_3, "errorMessage", true)

*Inherited from [Input](input.md).[errorMessageProperty](input.md#static-readonly-errormessageproperty)*

___

### `Static` `Readonly` heightProperty

▪ **heightProperty**: *[ValueSetProperty](valuesetproperty.md)‹›* = new ValueSetProperty(
        Versions.v1_1,
        "height",
        [
            { value: "auto" },
            { value: "stretch" }
        ],
        "auto")

*Inherited from [CardElement](cardelement.md).[heightProperty](cardelement.md#static-readonly-heightproperty)*

___

### `Static` `Readonly` horizontalAlignmentProperty

▪ **horizontalAlignmentProperty**: *[EnumProperty](enumproperty.md)‹[HorizontalAlignment](../enums/horizontalalignment.md)›* = new EnumProperty(
        Versions.v1_0,
        "horizontalAlignment",
        Enums.HorizontalAlignment,
        Enums.HorizontalAlignment.Left)

*Inherited from [CardElement](cardelement.md).[horizontalAlignmentProperty](cardelement.md#static-readonly-horizontalalignmentproperty)*

___

### `Static` `Readonly` idProperty

▪ **idProperty**: *[StringProperty](stringproperty.md)‹›* = new StringProperty(Versions.v1_0, "id", true)

*Overrides [CardObject](cardobject.md).[idProperty](cardobject.md#static-readonly-idproperty)*

___

### `Static` `Readonly` isRequiredProperty

▪ **isRequiredProperty**: *[BoolProperty](boolproperty.md)‹›* = new BoolProperty(Versions.v1_3, "isRequired", false)

*Inherited from [Input](input.md).[isRequiredProperty](input.md#static-readonly-isrequiredproperty)*

___

### `Static` `Readonly` isVisibleProperty

▪ **isVisibleProperty**: *[BoolProperty](boolproperty.md)‹›* = new BoolProperty(Versions.v1_2, "isVisible", true)

*Inherited from [CardElement](cardelement.md).[isVisibleProperty](cardelement.md#static-readonly-isvisibleproperty)*

___

### `Static` `Readonly` labelProperty

▪ **labelProperty**: *[StringProperty](stringproperty.md)‹›* = new StringProperty(Versions.v1_3, "label", true)

*Inherited from [Input](input.md).[labelProperty](input.md#static-readonly-labelproperty)*

___

### `Static` `Readonly` langProperty

▪ **langProperty**: *[StringProperty](stringproperty.md)‹›* = new StringProperty(Versions.v1_1, "lang", true, /^[a-z]{2,3}$/ig)

*Inherited from [CardElement](cardelement.md).[langProperty](cardelement.md#static-readonly-langproperty)*

___

### `Static` `Optional` onRegisterCustomProperties

▪ **onRegisterCustomProperties**? : *undefined | function*

*Inherited from [HostCapabilities](hostcapabilities.md).[onRegisterCustomProperties](hostcapabilities.md#static-optional-onregistercustomproperties)*

___

### `Static` `Readonly` placeholderProperty

▪ **placeholderProperty**: *[StringProperty](stringproperty.md)‹›* = new StringProperty(Versions.v1_0, "placeholder", true)

___

### `Static` `Readonly` removableProperty

▪ **removableProperty**: *[BoolProperty](boolproperty.md)‹›* = new BoolProperty(Versions.v1_0, "removable", true)

___

### `Static` `Readonly` requiresProperty

▪ **requiresProperty**: *[SerializableObjectProperty](serializableobjectproperty.md)‹›* = new SerializableObjectProperty(
        Versions.v1_2,
        "requires",
        HostCapabilities,
        new HostCapabilities())

*Inherited from [CardObject](cardobject.md).[requiresProperty](cardobject.md#static-readonly-requiresproperty)*

___

### `Static` `Readonly` selectedAttribute

▪ **selectedAttribute**: *"data-selected"* = "data-selected"

___

### `Static` `Readonly` separatorProperty

▪ **separatorProperty**: *[BoolProperty](boolproperty.md)‹›* = new BoolProperty(Versions.v1_0, "separator", false)

*Inherited from [CardElement](cardelement.md).[separatorProperty](cardelement.md#static-readonly-separatorproperty)*

___

### `Static` `Readonly` spacingProperty

▪ **spacingProperty**: *[EnumProperty](enumproperty.md)‹[Spacing](../enums/spacing.md)›* = new EnumProperty(
        Versions.v1_0,
        "spacing",
        Enums.Spacing,
        Enums.Spacing.Default)

*Inherited from [CardElement](cardelement.md).[spacingProperty](cardelement.md#static-readonly-spacingproperty)*

___

### `Static` `Readonly` typeNameProperty

▪ **typeNameProperty**: *[StringProperty](stringproperty.md)‹›* = new StringProperty(
        Versions.v1_0,
        "type",
        undefined,
        undefined,
        undefined,
        (sender: object) => {
            return (<CardObject>sender).getJsonTypeName()
        })

*Inherited from [CardObject](cardobject.md).[typeNameProperty](cardobject.md#static-readonly-typenameproperty)*

## Accessors

### `Protected` allowCustomPadding

• **get allowCustomPadding**(): *boolean*

*Inherited from [CardElement](cardelement.md).[allowCustomPadding](cardelement.md#protected-allowcustompadding)*

**Returns:** *boolean*

___

###  color

• **get color**(): *string*

**Returns:** *string*

• **set color**(`value`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

### `Protected` defaultStyle

• **get defaultStyle**(): *string*

*Inherited from [CardElement](cardelement.md).[defaultStyle](cardelement.md#protected-defaultstyle)*

**Returns:** *string*

___

###  hasVisibleSeparator

• **get hasVisibleSeparator**(): *boolean*

*Inherited from [CardElement](cardelement.md).[hasVisibleSeparator](cardelement.md#hasvisibleseparator)*

**Returns:** *boolean*

___

###  hostConfig

• **get hostConfig**(): *[HostConfig](hostconfig.md)*

*Inherited from [CardElement](cardelement.md).[hostConfig](cardelement.md#hostconfig)*

*Overrides [CardObject](cardobject.md).[hostConfig](cardobject.md#hostconfig)*

**Returns:** *[HostConfig](hostconfig.md)*

• **set hostConfig**(`value`: [HostConfig](hostconfig.md)): *void*

*Inherited from [CardElement](cardelement.md).[hostConfig](cardelement.md#hostconfig)*

*Overrides [CardObject](cardobject.md).[hostConfig](cardobject.md#hostconfig)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [HostConfig](hostconfig.md) |

**Returns:** *void*

___

###  id

• **get id**(): *string*

*Overrides [CardObject](cardobject.md).[id](cardobject.md#optional-id)*

**Returns:** *string*

• **set id**(`value`: string): *void*

*Overrides [CardObject](cardobject.md).[id](cardobject.md#optional-id)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  index

• **get index**(): *number*

*Inherited from [CardElement](cardelement.md).[index](cardelement.md#index)*

**Returns:** *number*

___

### `Protected` inputControlContainerElement

• **get inputControlContainerElement**(): *HTMLElement*

*Inherited from [Input](input.md).[inputControlContainerElement](input.md#protected-inputcontrolcontainerelement)*

**Returns:** *HTMLElement*

___

###  isInline

• **get isInline**(): *boolean*

*Inherited from [CardElement](cardelement.md).[isInline](cardelement.md#isinline)*

**Returns:** *boolean*

___

###  isInteractive

• **get isInteractive**(): *boolean*

*Inherited from [Input](input.md).[isInteractive](input.md#isinteractive)*

*Overrides [CardElement](cardelement.md).[isInteractive](cardelement.md#isinteractive)*

**Returns:** *boolean*

___

### `Protected` isNullable

• **get isNullable**(): *boolean*

*Inherited from [Input](input.md).[isNullable](input.md#protected-isnullable)*

**Returns:** *boolean*

___

###  isStandalone

• **get isStandalone**(): *boolean*

*Inherited from [CardElement](cardelement.md).[isStandalone](cardelement.md#isstandalone)*

**Returns:** *boolean*

___

###  isVisible

• **get isVisible**(): *boolean*

*Inherited from [CardElement](cardelement.md).[isVisible](cardelement.md#isvisible)*

**Returns:** *boolean*

• **set isVisible**(`value`: boolean): *void*

*Inherited from [CardElement](cardelement.md).[isVisible](cardelement.md#isvisible)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *void*

___

###  lang

• **get lang**(): *string | undefined*

*Inherited from [CardElement](cardelement.md).[lang](cardelement.md#lang)*

**Returns:** *string | undefined*

• **set lang**(`value`: string | undefined): *void*

*Inherited from [CardElement](cardelement.md).[lang](cardelement.md#lang)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; undefined |

**Returns:** *void*

___

###  parent

• **get parent**(): *[CardElement](cardelement.md) | undefined*

*Inherited from [CardElement](cardelement.md).[parent](cardelement.md#parent)*

*Overrides [CardObject](cardobject.md).[parent](cardobject.md#parent)*

**Returns:** *[CardElement](cardelement.md) | undefined*

___

###  placeholder

• **get placeholder**(): *string*

**Returns:** *string*

• **set placeholder**(`value`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  removable

• **get removable**(): *boolean*

**Returns:** *boolean*

• **set removable**(`value`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *void*

___

###  renderedElement

• **get renderedElement**(): *HTMLElement | undefined*

*Inherited from [CardObject](cardobject.md).[renderedElement](cardobject.md#renderedelement)*

**Returns:** *HTMLElement | undefined*

___

### `Protected` renderedInputControlElement

• **get renderedInputControlElement**(): *HTMLElement | undefined*

*Inherited from [Input](input.md).[renderedInputControlElement](input.md#protected-renderedinputcontrolelement)*

**Returns:** *HTMLElement | undefined*

___

###  requires

• **get requires**(): *[HostCapabilities](hostcapabilities.md)*

*Inherited from [CardObject](cardobject.md).[requires](cardobject.md#requires)*

**Returns:** *[HostCapabilities](hostcapabilities.md)*

___

###  separatorElement

• **get separatorElement**(): *HTMLElement | undefined*

*Inherited from [CardElement](cardelement.md).[separatorElement](cardelement.md#separatorelement)*

**Returns:** *HTMLElement | undefined*

___

### `Protected` separatorOrientation

• **get separatorOrientation**(): *[Orientation](../enums/orientation.md)*

*Inherited from [CardElement](cardelement.md).[separatorOrientation](cardelement.md#protected-separatororientation)*

**Returns:** *[Orientation](../enums/orientation.md)*

___

### `Protected` useDefaultSizing

• **get useDefaultSizing**(): *boolean*

*Inherited from [CardElement](cardelement.md).[useDefaultSizing](cardelement.md#protected-usedefaultsizing)*

**Returns:** *boolean*

___

###  value

• **get value**(): *any*

*Overrides [Input](input.md).[value](input.md#value)*

**Returns:** *any*

## Methods

###  addChip

▸ **addChip**(`chip`: [ChipData](../interfaces/chipdata.md), `parent`: HTMLElement): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chip` | [ChipData](../interfaces/chipdata.md) |
`parent` | HTMLElement |

**Returns:** *void*

___

###  addInput

▸ **addInput**(`parent`: HTMLElement): *void*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | HTMLElement |

**Returns:** *void*

___

### `Protected` adjustRenderedElementSize

▸ **adjustRenderedElementSize**(`renderedElement`: HTMLElement): *void*

*Inherited from [CardElement](cardelement.md).[adjustRenderedElementSize](cardelement.md#protected-adjustrenderedelementsize)*

**Parameters:**

Name | Type |
------ | ------ |
`renderedElement` | HTMLElement |

**Returns:** *void*

___

### `Protected` applyPadding

▸ **applyPadding**(): *void*

*Inherited from [CardElement](cardelement.md).[applyPadding](cardelement.md#protected-applypadding)*

**Returns:** *void*

___

###  asString

▸ **asString**(): *string | undefined*

*Inherited from [CardElement](cardelement.md).[asString](cardelement.md#asstring)*

**Returns:** *string | undefined*

___

### `Protected` createPlaceholderElement

▸ **createPlaceholderElement**(): *HTMLElement*

*Inherited from [CardElement](cardelement.md).[createPlaceholderElement](cardelement.md#protected-createplaceholderelement)*

**Returns:** *HTMLElement*

___

###  focus

▸ **focus**(): *void*

*Inherited from [Input](input.md).[focus](input.md#focus)*

**Returns:** *void*

___

###  getActionAt

▸ **getActionAt**(`index`: number): *[Action](action.md) | undefined*

*Inherited from [CardElement](cardelement.md).[getActionAt](cardelement.md#getactionat)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Action](action.md) | undefined*

___

###  getActionById

▸ **getActionById**(`id`: string): *[Action](action.md) | undefined*

*Inherited from [CardElement](cardelement.md).[getActionById](cardelement.md#getactionbyid)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[Action](action.md) | undefined*

___

###  getActionCount

▸ **getActionCount**(): *number*

*Inherited from [CardElement](cardelement.md).[getActionCount](cardelement.md#getactioncount)*

**Returns:** *number*

___

###  getAllInputs

▸ **getAllInputs**(`processActions`: boolean): *[Input](input.md)[]*

*Inherited from [Input](input.md).[getAllInputs](input.md#getallinputs)*

*Overrides [CardElement](cardelement.md).[getAllInputs](cardelement.md#getallinputs)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`processActions` | boolean | true |

**Returns:** *[Input](input.md)[]*

___

### `Protected` getAllLabelIds

▸ **getAllLabelIds**(): *string[]*

*Inherited from [Input](input.md).[getAllLabelIds](input.md#protected-getalllabelids)*

**Returns:** *string[]*

___

###  getBgColor

▸ **getBgColor**(`color`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`color` | string |

**Returns:** *string*

___

###  getCustomProperty

▸ **getCustomProperty**(`name`: string): *any*

*Inherited from [HostCapabilities](hostcapabilities.md).[getCustomProperty](hostcapabilities.md#getcustomproperty)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *any*

___

### `Protected` getDefaultPadding

▸ **getDefaultPadding**(): *[PaddingDefinition](paddingdefinition.md)*

*Inherited from [CardElement](cardelement.md).[getDefaultPadding](cardelement.md#protected-getdefaultpadding)*

**Returns:** *[PaddingDefinition](paddingdefinition.md)*

___

### `Protected` getDefaultSerializationContext

▸ **getDefaultSerializationContext**(): *[BaseSerializationContext](baseserializationcontext.md)*

*Inherited from [CardElement](cardelement.md).[getDefaultSerializationContext](cardelement.md#protected-getdefaultserializationcontext)*

*Overrides [HostCapabilities](hostcapabilities.md).[getDefaultSerializationContext](hostcapabilities.md#protected-getdefaultserializationcontext)*

**Returns:** *[BaseSerializationContext](baseserializationcontext.md)*

___

###  getEffectivePadding

▸ **getEffectivePadding**(): *[PaddingDefinition](paddingdefinition.md)*

*Inherited from [CardElement](cardelement.md).[getEffectivePadding](cardelement.md#geteffectivepadding)*

**Returns:** *[PaddingDefinition](paddingdefinition.md)*

___

###  getEffectiveStyle

▸ **getEffectiveStyle**(): *string*

*Inherited from [CardElement](cardelement.md).[getEffectiveStyle](cardelement.md#geteffectivestyle)*

**Returns:** *string*

___

###  getEffectiveStyleDefinition

▸ **getEffectiveStyleDefinition**(): *[ContainerStyleDefinition](containerstyledefinition.md)*

*Inherited from [CardElement](cardelement.md).[getEffectiveStyleDefinition](cardelement.md#geteffectivestyledefinition)*

**Returns:** *[ContainerStyleDefinition](containerstyledefinition.md)*

___

###  getElementById

▸ **getElementById**(`id`: string): *[CardElement](cardelement.md) | undefined*

*Inherited from [CardElement](cardelement.md).[getElementById](cardelement.md#getelementbyid)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[CardElement](cardelement.md) | undefined*

___

###  getForbiddenActionTypes

▸ **getForbiddenActionTypes**(): *[ActionType](../README.md#actiontype)[]*

*Inherited from [CardElement](cardelement.md).[getForbiddenActionTypes](cardelement.md#getforbiddenactiontypes)*

**Returns:** *[ActionType](../README.md#actiontype)[]*

___

### `Protected` getHasBackground

▸ **getHasBackground**(): *boolean*

*Inherited from [CardElement](cardelement.md).[getHasBackground](cardelement.md#protected-gethasbackground)*

**Returns:** *boolean*

___

###  getImmediateSurroundingPadding

▸ **getImmediateSurroundingPadding**(`result`: [PaddingDefinition](paddingdefinition.md), `processTop`: boolean, `processRight`: boolean, `processBottom`: boolean, `processLeft`: boolean): *void*

*Inherited from [CardElement](cardelement.md).[getImmediateSurroundingPadding](cardelement.md#getimmediatesurroundingpadding)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`result` | [PaddingDefinition](paddingdefinition.md) | - |
`processTop` | boolean | true |
`processRight` | boolean | true |
`processBottom` | boolean | true |
`processLeft` | boolean | true |

**Returns:** *void*

___

###  getJsonTypeName

▸ **getJsonTypeName**(): *string*

*Overrides [CardObject](cardobject.md).[getJsonTypeName](cardobject.md#abstract-getjsontypename)*

**Returns:** *string*

___

### `Protected` getPadding

▸ **getPadding**(): *[PaddingDefinition](paddingdefinition.md) | undefined*

*Inherited from [CardElement](cardelement.md).[getPadding](cardelement.md#protected-getpadding)*

**Returns:** *[PaddingDefinition](paddingdefinition.md) | undefined*

___

###  getParentContainer

▸ **getParentContainer**(): *[Container](container.md) | undefined*

*Inherited from [CardElement](cardelement.md).[getParentContainer](cardelement.md#getparentcontainer)*

**Returns:** *[Container](container.md) | undefined*

___

###  getResourceInformation

▸ **getResourceInformation**(): *[IResourceInformation](../interfaces/iresourceinformation.md)[]*

*Inherited from [CardElement](cardelement.md).[getResourceInformation](cardelement.md#getresourceinformation)*

**Returns:** *[IResourceInformation](../interfaces/iresourceinformation.md)[]*

___

###  getRootElement

▸ **getRootElement**(): *[CardElement](cardelement.md)*

*Inherited from [CardElement](cardelement.md).[getRootElement](cardelement.md#getrootelement)*

**Returns:** *[CardElement](cardelement.md)*

___

###  getRootObject

▸ **getRootObject**(): *[CardObject](cardobject.md)*

*Inherited from [CardObject](cardobject.md).[getRootObject](cardobject.md#getrootobject)*

**Returns:** *[CardObject](cardobject.md)*

___

###  getSchema

▸ **getSchema**(): *[SerializableObjectSchema](serializableobjectschema.md)*

*Inherited from [HostCapabilities](hostcapabilities.md).[getSchema](hostcapabilities.md#getschema)*

**Returns:** *[SerializableObjectSchema](serializableobjectschema.md)*

___

### `Protected` getSchemaKey

▸ **getSchemaKey**(): *string*

*Inherited from [CardObject](cardobject.md).[getSchemaKey](cardobject.md#protected-getschemakey)*

*Overrides [SerializableObject](serializableobject.md).[getSchemaKey](serializableobject.md#protected-abstract-getschemakey)*

**Returns:** *string*

___

### `Protected` getValue

▸ **getValue**(`property`: [PropertyDefinition](propertydefinition.md)): *any*

*Inherited from [HostCapabilities](hostcapabilities.md).[getValue](hostcapabilities.md#protected-getvalue)*

**Parameters:**

Name | Type |
------ | ------ |
`property` | [PropertyDefinition](propertydefinition.md) |

**Returns:** *any*

___

###  hasAllDefaultValues

▸ **hasAllDefaultValues**(): *boolean*

*Inherited from [HostCapabilities](hostcapabilities.md).[hasAllDefaultValues](hostcapabilities.md#hasalldefaultvalues)*

**Returns:** *boolean*

___

###  hasDefaultValue

▸ **hasDefaultValue**(`property`: [PropertyDefinition](propertydefinition.md)): *boolean*

*Inherited from [HostCapabilities](hostcapabilities.md).[hasDefaultValue](hostcapabilities.md#hasdefaultvalue)*

**Parameters:**

Name | Type |
------ | ------ |
`property` | [PropertyDefinition](propertydefinition.md) |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`cardElement`: [CardElement](cardelement.md)): *number*

*Inherited from [CardElement](cardelement.md).[indexOf](cardelement.md#indexof)*

**Parameters:**

Name | Type |
------ | ------ |
`cardElement` | [CardElement](cardelement.md) |

**Returns:** *number*

___

### `Protected` internalParse

▸ **internalParse**(`source`: [PropertyBag](../README.md#propertybag), `context`: [BaseSerializationContext](baseserializationcontext.md)): *void*

*Inherited from [SerializableObject](serializableobject.md).[internalParse](serializableobject.md#protected-internalparse)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | [PropertyBag](../README.md#propertybag) |
`context` | [BaseSerializationContext](baseserializationcontext.md) |

**Returns:** *void*

___

### `Protected` internalRender

▸ **internalRender**(): *HTMLElement*

*Overrides [CardElement](cardelement.md).[internalRender](cardelement.md#protected-abstract-internalrender)*

**Returns:** *HTMLElement*

___

### `Protected` internalToJSON

▸ **internalToJSON**(`target`: [PropertyBag](../README.md#propertybag), `context`: [BaseSerializationContext](baseserializationcontext.md)): *void*

*Inherited from [SerializableObject](serializableobject.md).[internalToJSON](serializableobject.md#protected-internaltojson)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | [PropertyBag](../README.md#propertybag) |
`context` | [BaseSerializationContext](baseserializationcontext.md) |

**Returns:** *void*

___

###  internalValidateProperties

▸ **internalValidateProperties**(`context`: [ValidationResults](validationresults.md)): *void*

*Inherited from [Input](input.md).[internalValidateProperties](input.md#internalvalidateproperties)*

*Overrides [CardObject](cardobject.md).[internalValidateProperties](cardobject.md#internalvalidateproperties)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [ValidationResults](validationresults.md) |

**Returns:** *void*

___

###  isAtTheVeryBottom

▸ **isAtTheVeryBottom**(): *boolean*

*Inherited from [CardElement](cardelement.md).[isAtTheVeryBottom](cardelement.md#isattheverybottom)*

**Returns:** *boolean*

___

###  isAtTheVeryLeft

▸ **isAtTheVeryLeft**(): *boolean*

*Inherited from [CardElement](cardelement.md).[isAtTheVeryLeft](cardelement.md#isattheveryleft)*

**Returns:** *boolean*

___

###  isAtTheVeryRight

▸ **isAtTheVeryRight**(): *boolean*

*Inherited from [CardElement](cardelement.md).[isAtTheVeryRight](cardelement.md#isattheveryright)*

**Returns:** *boolean*

___

###  isAtTheVeryTop

▸ **isAtTheVeryTop**(): *boolean*

*Inherited from [CardElement](cardelement.md).[isAtTheVeryTop](cardelement.md#isattheverytop)*

**Returns:** *boolean*

___

###  isBleeding

▸ **isBleeding**(): *boolean*

*Inherited from [CardElement](cardelement.md).[isBleeding](cardelement.md#isbleeding)*

**Returns:** *boolean*

___

###  isBleedingAtBottom

▸ **isBleedingAtBottom**(): *boolean*

*Inherited from [CardElement](cardelement.md).[isBleedingAtBottom](cardelement.md#isbleedingatbottom)*

**Returns:** *boolean*

___

###  isBleedingAtTop

▸ **isBleedingAtTop**(): *boolean*

*Inherited from [CardElement](cardelement.md).[isBleedingAtTop](cardelement.md#isbleedingattop)*

**Returns:** *boolean*

___

###  isBottomElement

▸ **isBottomElement**(`element`: [CardElement](cardelement.md)): *boolean*

*Inherited from [CardElement](cardelement.md).[isBottomElement](cardelement.md#isbottomelement)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [CardElement](cardelement.md) |

**Returns:** *boolean*

___

###  isDesignMode

▸ **isDesignMode**(): *boolean*

*Inherited from [CardElement](cardelement.md).[isDesignMode](cardelement.md#isdesignmode)*

**Returns:** *boolean*

___

### `Protected` isDisplayed

▸ **isDisplayed**(): *boolean*

*Inherited from [CardElement](cardelement.md).[isDisplayed](cardelement.md#protected-isdisplayed)*

**Returns:** *boolean*

___

###  isFirstElement

▸ **isFirstElement**(`element`: [CardElement](cardelement.md)): *boolean*

*Inherited from [CardElement](cardelement.md).[isFirstElement](cardelement.md#isfirstelement)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [CardElement](cardelement.md) |

**Returns:** *boolean*

___

###  isHiddenDueToOverflow

▸ **isHiddenDueToOverflow**(): *boolean*

*Inherited from [CardElement](cardelement.md).[isHiddenDueToOverflow](cardelement.md#ishiddenduetooverflow)*

**Returns:** *boolean*

___

###  isLastElement

▸ **isLastElement**(`element`: [CardElement](cardelement.md)): *boolean*

*Inherited from [CardElement](cardelement.md).[isLastElement](cardelement.md#islastelement)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [CardElement](cardelement.md) |

**Returns:** *boolean*

___

###  isLeftMostElement

▸ **isLeftMostElement**(`element`: [CardElement](cardelement.md)): *boolean*

*Inherited from [CardElement](cardelement.md).[isLeftMostElement](cardelement.md#isleftmostelement)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [CardElement](cardelement.md) |

**Returns:** *boolean*

___

###  isRightMostElement

▸ **isRightMostElement**(`element`: [CardElement](cardelement.md)): *boolean*

*Inherited from [CardElement](cardelement.md).[isRightMostElement](cardelement.md#isrightmostelement)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [CardElement](cardelement.md) |

**Returns:** *boolean*

___

###  isSet

▸ **isSet**(): *boolean*

*Overrides [Input](input.md).[isSet](input.md#abstract-isset)*

**Returns:** *boolean*

___

###  isTopElement

▸ **isTopElement**(`element`: [CardElement](cardelement.md)): *boolean*

*Inherited from [CardElement](cardelement.md).[isTopElement](cardelement.md#istopelement)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [CardElement](cardelement.md) |

**Returns:** *boolean*

___

###  isValid

▸ **isValid**(): *boolean*

*Inherited from [Input](input.md).[isValid](input.md#isvalid)*

**Returns:** *boolean*

___

### `Protected` overrideInternalRender

▸ **overrideInternalRender**(): *HTMLElement | undefined*

*Inherited from [Input](input.md).[overrideInternalRender](input.md#protected-overrideinternalrender)*

*Overrides [CardElement](cardelement.md).[overrideInternalRender](cardelement.md#protected-overrideinternalrender)*

**Returns:** *HTMLElement | undefined*

___

###  parse

▸ **parse**(`source`: any, `context?`: [SerializationContext](serializationcontext.md)): *void*

*Inherited from [CardElement](cardelement.md).[parse](cardelement.md#parse)*

*Overrides [HostCapabilities](hostcapabilities.md).[parse](hostcapabilities.md#parse)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | any |
`context?` | [SerializationContext](serializationcontext.md) |

**Returns:** *void*

___

### `Protected` populateSchema

▸ **populateSchema**(`schema`: [SerializableObjectSchema](serializableobjectschema.md)): *void*

*Inherited from [HostCapabilities](hostcapabilities.md).[populateSchema](hostcapabilities.md#protected-populateschema)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [SerializableObjectSchema](serializableobjectschema.md) |

**Returns:** *void*

___

###  preProcessPropertyValue

▸ **preProcessPropertyValue**(`property`: [PropertyDefinition](propertydefinition.md), `propertyValue?`: any): *any*

*Inherited from [CardObject](cardobject.md).[preProcessPropertyValue](cardobject.md#preprocesspropertyvalue)*

**Parameters:**

Name | Type |
------ | ------ |
`property` | [PropertyDefinition](propertydefinition.md) |
`propertyValue?` | any |

**Returns:** *any*

___

###  remove

▸ **remove**(): *boolean*

*Inherited from [CardElement](cardelement.md).[remove](cardelement.md#remove)*

**Returns:** *boolean*

___

###  render

▸ **render**(): *HTMLElement | undefined*

*Inherited from [CardElement](cardelement.md).[render](cardelement.md#render)*

**Returns:** *HTMLElement | undefined*

___

###  resetDefaultValues

▸ **resetDefaultValues**(): *void*

*Inherited from [HostCapabilities](hostcapabilities.md).[resetDefaultValues](hostcapabilities.md#resetdefaultvalues)*

**Returns:** *void*

___

### `Protected` resetValidationFailureCue

▸ **resetValidationFailureCue**(): *void*

*Inherited from [Input](input.md).[resetValidationFailureCue](input.md#protected-resetvalidationfailurecue)*

**Returns:** *void*

___

###  setCustomProperty

▸ **setCustomProperty**(`name`: string, `value`: any): *void*

*Inherited from [HostCapabilities](hostcapabilities.md).[setCustomProperty](hostcapabilities.md#setcustomproperty)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | any |

**Returns:** *void*

___

### `Protected` setPadding

▸ **setPadding**(`value`: [PaddingDefinition](paddingdefinition.md) | undefined): *void*

*Inherited from [CardElement](cardelement.md).[setPadding](cardelement.md#protected-setpadding)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [PaddingDefinition](paddingdefinition.md) &#124; undefined |

**Returns:** *void*

___

###  setParent

▸ **setParent**(`value`: [CardObject](cardobject.md) | undefined): *void*

*Inherited from [CardObject](cardobject.md).[setParent](cardobject.md#setparent)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [CardObject](cardobject.md) &#124; undefined |

**Returns:** *void*

___

###  setShouldFallback

▸ **setShouldFallback**(`value`: boolean): *void*

*Inherited from [CardObject](cardobject.md).[setShouldFallback](cardobject.md#setshouldfallback)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *void*

___

### `Protected` setValue

▸ **setValue**(`property`: [PropertyDefinition](propertydefinition.md), `value`: any): *void*

*Inherited from [HostCapabilities](hostcapabilities.md).[setValue](hostcapabilities.md#protected-setvalue)*

**Parameters:**

Name | Type |
------ | ------ |
`property` | [PropertyDefinition](propertydefinition.md) |
`value` | any |

**Returns:** *void*

___

###  shouldFallback

▸ **shouldFallback**(): *boolean*

*Inherited from [CardObject](cardobject.md).[shouldFallback](cardobject.md#shouldfallback)*

**Returns:** *boolean*

___

### `Protected` shouldSerialize

▸ **shouldSerialize**(`context`: [SerializationContext](serializationcontext.md)): *boolean*

*Inherited from [CardElement](cardelement.md).[shouldSerialize](cardelement.md#protected-shouldserialize)*

*Overrides [HostCapabilities](hostcapabilities.md).[shouldSerialize](hostcapabilities.md#protected-shouldserialize)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SerializationContext](serializationcontext.md) |

**Returns:** *boolean*

___

### `Protected` showValidationErrorMessage

▸ **showValidationErrorMessage**(): *void*

*Inherited from [Input](input.md).[showValidationErrorMessage](input.md#protected-showvalidationerrormessage)*

**Returns:** *void*

___

###  toJSON

▸ **toJSON**(`context?`: [BaseSerializationContext](baseserializationcontext.md)): *[PropertyBag](../README.md#propertybag) | undefined*

*Inherited from [HostCapabilities](hostcapabilities.md).[toJSON](hostcapabilities.md#tojson)*

**Parameters:**

Name | Type |
------ | ------ |
`context?` | [BaseSerializationContext](baseserializationcontext.md) |

**Returns:** *[PropertyBag](../README.md#propertybag) | undefined*

___

### `Protected` truncateOverflow

▸ **truncateOverflow**(`maxHeight`: number): *boolean*

*Inherited from [CardElement](cardelement.md).[truncateOverflow](cardelement.md#protected-truncateoverflow)*

**Parameters:**

Name | Type |
------ | ------ |
`maxHeight` | number |

**Returns:** *boolean*

___

### `Protected` undoOverflowTruncation

▸ **undoOverflowTruncation**(): *void*

*Inherited from [CardElement](cardelement.md).[undoOverflowTruncation](cardelement.md#protected-undooverflowtruncation)*

**Returns:** *void*

___

### `Protected` updateInputControlAriaLabelledBy

▸ **updateInputControlAriaLabelledBy**(): *void*

*Inherited from [Input](input.md).[updateInputControlAriaLabelledBy](input.md#protected-updateinputcontrolarialabelledby)*

**Returns:** *void*

___

###  updateLayout

▸ **updateLayout**(`processChildren`: boolean): *void*

*Overrides [CardElement](cardelement.md).[updateLayout](cardelement.md#updatelayout)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`processChildren` | boolean | true |

**Returns:** *void*

___

###  validateProperties

▸ **validateProperties**(): *[ValidationResults](validationresults.md)*

*Inherited from [CardObject](cardobject.md).[validateProperties](cardobject.md#validateproperties)*

**Returns:** *[ValidationResults](validationresults.md)*

___

###  validateValue

▸ **validateValue**(): *boolean*

*Implementation of [IInput](../interfaces/iinput.md)*

*Inherited from [Input](input.md).[validateValue](input.md#validatevalue)*

**Returns:** *boolean*

___

### `Protected` valueChanged

▸ **valueChanged**(): *void*

*Inherited from [Input](input.md).[valueChanged](input.md#protected-valuechanged)*

**Returns:** *void*
