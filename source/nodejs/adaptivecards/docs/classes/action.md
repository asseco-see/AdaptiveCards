[Adaptive Cards Javascript SDK](../README.md) / Action

# Class: Action

## Hierarchy

- [`CardObject`](CardObject.md)

  ↳ **`Action`**

  ↳↳ [`SubmitAction`](SubmitAction.md)

  ↳↳ [`OpenUrlAction`](OpenUrlAction.md)

  ↳↳ [`ToggleVisibilityAction`](ToggleVisibilityAction.md)

  ↳↳ [`HttpAction`](HttpAction.md)

  ↳↳ [`ShowCardAction`](ShowCardAction.md)

  ↳↳ [`GenericAction`](GenericAction.md)

## Table of contents

### Constructors

- [constructor](Action.md#constructor)

### Properties

- [\_parent](Action.md#_parent)
- [\_renderedElement](Action.md#_renderedelement)
- [iconUrl](Action.md#iconurl)
- [id](Action.md#id)
- [maxVersion](Action.md#maxversion)
- [onExecute](Action.md#onexecute)
- [onPreProcessPropertyValue](Action.md#onpreprocesspropertyvalue)
- [rules](Action.md#rules)
- [style](Action.md#style)
- [title](Action.md#title)
- [iconUrlProperty](Action.md#iconurlproperty)
- [idProperty](Action.md#idproperty)
- [ignoreInputValidationProperty](Action.md#ignoreinputvalidationproperty)
- [onRegisterCustomProperties](Action.md#onregistercustomproperties)
- [requiresProperty](Action.md#requiresproperty)
- [rulesProperty](Action.md#rulesproperty)
- [styleProperty](Action.md#styleproperty)
- [titleProperty](Action.md#titleproperty)
- [typeNameProperty](Action.md#typenameproperty)

### Accessors

- [hostConfig](Action.md#hostconfig)
- [ignoreInputValidation](Action.md#ignoreinputvalidation)
- [isPrimary](Action.md#isprimary)
- [parent](Action.md#parent)
- [renderedElement](Action.md#renderedelement)
- [requires](Action.md#requires)

### Methods

- [addCssClasses](Action.md#addcssclasses)
- [execute](Action.md#execute)
- [getActionById](Action.md#getactionbyid)
- [getAllInputs](Action.md#getallinputs)
- [getAriaRole](Action.md#getariarole)
- [getCustomProperty](Action.md#getcustomproperty)
- [getDefaultSerializationContext](Action.md#getdefaultserializationcontext)
- [getHref](Action.md#gethref)
- [getJsonTypeName](Action.md#getjsontypename)
- [getReferencedInputs](Action.md#getreferencedinputs)
- [getResourceInformation](Action.md#getresourceinformation)
- [getRootObject](Action.md#getrootobject)
- [getSchema](Action.md#getschema)
- [getSchemaKey](Action.md#getschemakey)
- [getValue](Action.md#getvalue)
- [hasAllDefaultValues](Action.md#hasalldefaultvalues)
- [hasDefaultValue](Action.md#hasdefaultvalue)
- [internalGetReferencedInputs](Action.md#internalgetreferencedinputs)
- [internalParse](Action.md#internalparse)
- [internalPrepareForExecution](Action.md#internalprepareforexecution)
- [internalToJSON](Action.md#internaltojson)
- [internalValidateInputs](Action.md#internalvalidateinputs)
- [internalValidateProperties](Action.md#internalvalidateproperties)
- [parse](Action.md#parse)
- [populateSchema](Action.md#populateschema)
- [preProcessPropertyValue](Action.md#preprocesspropertyvalue)
- [prepareForExecution](Action.md#prepareforexecution)
- [raiseExecuteActionEvent](Action.md#raiseexecuteactionevent)
- [remove](Action.md#remove)
- [render](Action.md#render)
- [resetDefaultValues](Action.md#resetdefaultvalues)
- [setCustomProperty](Action.md#setcustomproperty)
- [setParent](Action.md#setparent)
- [setShouldFallback](Action.md#setshouldfallback)
- [setValue](Action.md#setvalue)
- [shouldFallback](Action.md#shouldfallback)
- [shouldSerialize](Action.md#shouldserialize)
- [toJSON](Action.md#tojson)
- [updateActionButtonCssStyle](Action.md#updateactionbuttoncssstyle)
- [validateInputs](Action.md#validateinputs)
- [validateProperties](Action.md#validateproperties)

## Constructors

### constructor

• **new Action**()

#### Inherited from

[CardObject](CardObject.md).[constructor](CardObject.md#constructor)

#### Defined in

[serialization.ts:951](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L951)

## Properties

### \_parent

• `Protected` `Optional` **\_parent**: [`CardObject`](CardObject.md)

#### Inherited from

[CardObject](CardObject.md).[_parent](CardObject.md#_parent)

#### Defined in

[card-object.ts:63](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L63)

___

### \_renderedElement

• `Protected` `Optional` **\_renderedElement**: `HTMLElement`

#### Inherited from

[CardObject](CardObject.md).[_renderedElement](CardObject.md#_renderedelement)

#### Defined in

[card-object.ts:64](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L64)

___

### iconUrl

• `Optional` **iconUrl**: `string`

#### Defined in

[card-elements.ts:4068](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4068)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[CardObject](CardObject.md).[id](CardObject.md#id)

#### Defined in

[card-object.ts:52](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L52)

___

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[CardObject](CardObject.md).[maxVersion](CardObject.md#maxversion)

#### Defined in

[serialization.ts:949](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L949)

___

### onExecute

• **onExecute**: (`sender`: [`Action`](Action.md)) => `void`

#### Type declaration

▸ (`sender`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`Action`](Action.md) |

##### Returns

`void`

#### Defined in

[card-elements.ts:4124](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4124)

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

[CardObject](CardObject.md).[onPreProcessPropertyValue](CardObject.md#onpreprocesspropertyvalue)

#### Defined in

[card-object.ts:66](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L66)

___

### rules

• **rules**: [`RuleParam`](RuleParam.md)[]

#### Defined in

[card-elements.ts:4074](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4074)

___

### style

• **style**: `string` = `Enums.ActionStyle.Default`

#### Defined in

[card-elements.ts:4071](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4071)

___

### title

• `Optional` **title**: `string`

#### Defined in

[card-elements.ts:4065](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4065)

___

### iconUrlProperty

▪ `Static` `Readonly` **iconUrlProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:4050](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4050)

___

### idProperty

▪ `Static` `Readonly` **idProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[CardObject](CardObject.md).[idProperty](CardObject.md#idproperty)

#### Defined in

[card-object.ts:40](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L40)

___

### ignoreInputValidationProperty

▪ `Static` `Readonly` **ignoreInputValidationProperty**: [`BoolProperty`](BoolProperty.md)

#### Defined in

[card-elements.ts:4062](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4062)

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

[CardObject](CardObject.md).[onRegisterCustomProperties](CardObject.md#onregistercustomproperties)

#### Defined in

[serialization.ts:809](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L809)

___

### requiresProperty

▪ `Static` `Readonly` **requiresProperty**: [`SerializableObjectProperty`](SerializableObjectProperty.md)

#### Inherited from

[CardObject](CardObject.md).[requiresProperty](CardObject.md#requiresproperty)

#### Defined in

[card-object.ts:41](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L41)

___

### rulesProperty

▪ `Static` `Readonly` **rulesProperty**: [`SerializableObjectCollectionProperty`](SerializableObjectCollectionProperty.md)

#### Defined in

[card-elements.ts:4051](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4051)

___

### styleProperty

▪ `Static` `Readonly` **styleProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Defined in

[card-elements.ts:4052](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4052)

___

### titleProperty

▪ `Static` `Readonly` **titleProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:4049](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4049)

___

### typeNameProperty

▪ `Static` `Readonly` **typeNameProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[CardObject](CardObject.md).[typeNameProperty](CardObject.md#typenameproperty)

#### Defined in

[card-object.ts:31](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L31)

## Accessors

### hostConfig

• `get` **hostConfig**(): [`HostConfig`](HostConfig.md)

#### Returns

[`HostConfig`](HostConfig.md)

#### Overrides

CardObject.hostConfig

#### Defined in

[card-elements.ts:4285](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4285)

___

### ignoreInputValidation

• `get` **ignoreInputValidation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[card-elements.ts:4281](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4281)

___

### isPrimary

• `get` **isPrimary**(): `boolean`

#### Returns

`boolean`

#### Defined in

[card-elements.ts:4266](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4266)

• `set` **isPrimary**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[card-elements.ts:4270](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4270)

___

### parent

• `get` **parent**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Overrides

CardObject.parent

#### Defined in

[card-elements.ts:4289](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4289)

___

### renderedElement

• `get` **renderedElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

CardObject.renderedElement

#### Defined in

[card-object.ts:142](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L142)

___

### requires

• `get` **requires**(): `HostCapabilities`

#### Returns

`HostCapabilities`

#### Inherited from

CardObject.requires

#### Defined in

[card-object.ts:54](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L54)

## Methods

### addCssClasses

▸ `Protected` **addCssClasses**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

#### Returns

`void`

#### Defined in

[card-elements.ts:4084](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4084)

___

### execute

▸ **execute**(): `void`

#### Returns

`void`

#### Defined in

[card-elements.ts:4210](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4210)

___

### getActionById

▸ **getActionById**(`id`): `undefined` \| [`Action`](Action.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Action`](Action.md)

#### Defined in

[card-elements.ts:4249](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4249)

___

### getAllInputs

▸ **getAllInputs**(`processActions?`): [`Input`](Input.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `processActions` | `boolean` | `true` |

#### Returns

[`Input`](Input.md)[]

#### Defined in

[card-elements.ts:4241](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4241)

___

### getAriaRole

▸ **getAriaRole**(): `string`

#### Returns

`string`

#### Defined in

[card-elements.ts:4130](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4130)

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

[CardObject](CardObject.md).[getCustomProperty](CardObject.md#getcustomproperty)

#### Defined in

[serialization.ts:1040](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1040)

___

### getDefaultSerializationContext

▸ `Protected` **getDefaultSerializationContext**(): [`BaseSerializationContext`](BaseSerializationContext.md)

#### Returns

[`BaseSerializationContext`](BaseSerializationContext.md)

#### Overrides

[CardObject](CardObject.md).[getDefaultSerializationContext](CardObject.md#getdefaultserializationcontext)

#### Defined in

[card-elements.ts:4080](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4080)

___

### getHref

▸ **getHref**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[card-elements.ts:4126](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4126)

___

### getJsonTypeName

▸ `Abstract` **getJsonTypeName**(): `string`

#### Returns

`string`

#### Inherited from

[CardObject](CardObject.md).[getJsonTypeName](CardObject.md#getjsontypename)

#### Defined in

[card-object.ts:68](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L68)

___

### getReferencedInputs

▸ **getReferencedInputs**(): `undefined` \| [`Dictionary`](../README.md#dictionary)<[`Input`](Input.md)\>

#### Returns

`undefined` \| [`Dictionary`](../README.md#dictionary)<[`Input`](Input.md)\>

#### Defined in

[card-elements.ts:4253](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4253)

___

### getResourceInformation

▸ **getResourceInformation**(): [`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Returns

[`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Defined in

[card-elements.ts:4245](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4245)

___

### getRootObject

▸ **getRootObject**(): [`CardObject`](CardObject.md)

#### Returns

[`CardObject`](CardObject.md)

#### Inherited from

[CardObject](CardObject.md).[getRootObject](CardObject.md#getrootobject)

#### Defined in

[card-object.ts:102](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L102)

___

### getSchema

▸ **getSchema**(): [`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Returns

[`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Inherited from

[CardObject](CardObject.md).[getSchema](CardObject.md#getschema)

#### Defined in

[serialization.ts:1044](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1044)

___

### getSchemaKey

▸ `Protected` **getSchemaKey**(): `string`

#### Returns

`string`

#### Inherited from

[CardObject](CardObject.md).[getSchemaKey](CardObject.md#getschemakey)

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

[CardObject](CardObject.md).[getValue](CardObject.md#getvalue)

#### Defined in

[serialization.ts:875](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L875)

___

### hasAllDefaultValues

▸ **hasAllDefaultValues**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardObject](CardObject.md).[hasAllDefaultValues](CardObject.md#hasalldefaultvalues)

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

[CardObject](CardObject.md).[hasDefaultValue](CardObject.md#hasdefaultvalue)

#### Defined in

[serialization.ts:1001](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1001)

___

### internalGetReferencedInputs

▸ `Protected` **internalGetReferencedInputs**(): [`Dictionary`](../README.md#dictionary)<[`Input`](Input.md)\>

#### Returns

[`Dictionary`](../README.md#dictionary)<[`Input`](Input.md)\>

#### Defined in

[card-elements.ts:4088](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4088)

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

[CardObject](CardObject.md).[internalParse](CardObject.md#internalparse)

#### Defined in

[serialization.ts:888](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L888)

___

### internalPrepareForExecution

▸ `Protected` **internalPrepareForExecution**(`inputs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | `undefined` \| [`Dictionary`](../README.md#dictionary)<[`Input`](Input.md)\> |

#### Returns

`void`

#### Defined in

[card-elements.ts:4092](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4092)

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

[CardObject](CardObject.md).[internalToJSON](CardObject.md#internaltojson)

#### Defined in

[serialization.ts:927](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L927)

___

### internalValidateInputs

▸ `Protected` **internalValidateInputs**(`referencedInputs`): [`Input`](Input.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `referencedInputs` | `undefined` \| [`Dictionary`](../README.md#dictionary)<[`Input`](Input.md)\> |

#### Returns

[`Input`](Input.md)[]

#### Defined in

[card-elements.ts:4096](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4096)

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

[CardObject](CardObject.md).[internalValidateProperties](CardObject.md#internalvalidateproperties)

#### Defined in

[card-object.ts:112](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L112)

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

#### Overrides

[CardObject](CardObject.md).[parse](CardObject.md#parse)

#### Defined in

[card-elements.ts:4138](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4138)

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

[CardObject](CardObject.md).[populateSchema](CardObject.md#populateschema)

#### Defined in

[serialization.ts:822](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L822)

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

[CardObject](CardObject.md).[preProcessPropertyValue](CardObject.md#preprocesspropertyvalue)

#### Defined in

[card-object.ts:72](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L72)

___

### prepareForExecution

▸ **prepareForExecution**(): `boolean`

#### Returns

`boolean`

#### Defined in

[card-elements.ts:4218](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4218)

___

### raiseExecuteActionEvent

▸ `Protected` **raiseExecuteActionEvent**(): `void`

#### Returns

`void`

#### Defined in

[card-elements.ts:4116](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4116)

___

### remove

▸ **remove**(): `boolean`

#### Returns

`boolean`

#### Defined in

[card-elements.ts:4233](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4233)

___

### render

▸ **render**(`baseCssClass?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `baseCssClass` | `string` | `"ac-pushButton"` |

#### Returns

`void`

#### Defined in

[card-elements.ts:4142](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4142)

___

### resetDefaultValues

▸ **resetDefaultValues**(): `void`

#### Returns

`void`

#### Inherited from

[CardObject](CardObject.md).[resetDefaultValues](CardObject.md#resetdefaultvalues)

#### Defined in

[serialization.ts:1019](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1019)

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

[CardObject](CardObject.md).[setCustomProperty](CardObject.md#setcustomproperty)

#### Defined in

[serialization.ts:1029](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1029)

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

[CardObject](CardObject.md).[setParent](CardObject.md#setparent)

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

[CardObject](CardObject.md).[setShouldFallback](CardObject.md#setshouldfallback)

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

[CardObject](CardObject.md).[setValue](CardObject.md#setvalue)

#### Defined in

[serialization.ts:879](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L879)

___

### shouldFallback

▸ **shouldFallback**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CardObject](CardObject.md).[shouldFallback](CardObject.md#shouldfallback)

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

[CardObject](CardObject.md).[shouldSerialize](CardObject.md#shouldserialize)

#### Defined in

[card-elements.ts:4112](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4112)

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

[CardObject](CardObject.md).[toJSON](CardObject.md#tojson)

#### Defined in

[serialization.ts:967](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L967)

___

### updateActionButtonCssStyle

▸ **updateActionButtonCssStyle**(`actionButtonElement`, `buttonState?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actionButtonElement` | `HTMLElement` | `undefined` |
| `buttonState` | `ActionButtonState` | `ActionButtonState.Normal` |

#### Returns

`void`

#### Defined in

[card-elements.ts:4134](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4134)

___

### validateInputs

▸ **validateInputs**(): [`Input`](Input.md)[]

Validates the inputs associated with this action.

#### Returns

[`Input`](Input.md)[]

A list of inputs that failed validation, or an empty array if no input failed validation.

#### Defined in

[card-elements.ts:4262](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4262)

___

### validateProperties

▸ **validateProperties**(): [`ValidationResults`](ValidationResults.md)

#### Returns

[`ValidationResults`](ValidationResults.md)

#### Inherited from

[CardObject](CardObject.md).[validateProperties](CardObject.md#validateproperties)

#### Defined in

[card-object.ts:130](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-object.ts#L130)
