[Adaptive Cards Javascript SDK](../README.md) / ToggleVisibilityAction

# Class: ToggleVisibilityAction

## Hierarchy

- [`Action`](Action.md)

  ↳ **`ToggleVisibilityAction`**

## Table of contents

### Constructors

- [constructor](ToggleVisibilityAction.md#constructor)

### Properties

- [\_parent](ToggleVisibilityAction.md#_parent)
- [\_renderedElement](ToggleVisibilityAction.md#_renderedelement)
- [iconUrl](ToggleVisibilityAction.md#iconurl)
- [id](ToggleVisibilityAction.md#id)
- [maxVersion](ToggleVisibilityAction.md#maxversion)
- [onExecute](ToggleVisibilityAction.md#onexecute)
- [onPreProcessPropertyValue](ToggleVisibilityAction.md#onpreprocesspropertyvalue)
- [rules](ToggleVisibilityAction.md#rules)
- [style](ToggleVisibilityAction.md#style)
- [targetElements](ToggleVisibilityAction.md#targetelements)
- [title](ToggleVisibilityAction.md#title)
- [JsonTypeName](ToggleVisibilityAction.md#jsontypename)
- [iconUrlProperty](ToggleVisibilityAction.md#iconurlproperty)
- [idProperty](ToggleVisibilityAction.md#idproperty)
- [ignoreInputValidationProperty](ToggleVisibilityAction.md#ignoreinputvalidationproperty)
- [onRegisterCustomProperties](ToggleVisibilityAction.md#onregistercustomproperties)
- [requiresProperty](ToggleVisibilityAction.md#requiresproperty)
- [rulesProperty](ToggleVisibilityAction.md#rulesproperty)
- [styleProperty](ToggleVisibilityAction.md#styleproperty)
- [targetElementsProperty](ToggleVisibilityAction.md#targetelementsproperty)
- [titleProperty](ToggleVisibilityAction.md#titleproperty)
- [typeNameProperty](ToggleVisibilityAction.md#typenameproperty)

### Accessors

- [hostConfig](ToggleVisibilityAction.md#hostconfig)
- [ignoreInputValidation](ToggleVisibilityAction.md#ignoreinputvalidation)
- [isPrimary](ToggleVisibilityAction.md#isprimary)
- [parent](ToggleVisibilityAction.md#parent)
- [renderedElement](ToggleVisibilityAction.md#renderedelement)
- [requires](ToggleVisibilityAction.md#requires)

### Methods

- [addCssClasses](ToggleVisibilityAction.md#addcssclasses)
- [addTargetElement](ToggleVisibilityAction.md#addtargetelement)
- [execute](ToggleVisibilityAction.md#execute)
- [getActionById](ToggleVisibilityAction.md#getactionbyid)
- [getAllInputs](ToggleVisibilityAction.md#getallinputs)
- [getAriaRole](ToggleVisibilityAction.md#getariarole)
- [getCustomProperty](ToggleVisibilityAction.md#getcustomproperty)
- [getDefaultSerializationContext](ToggleVisibilityAction.md#getdefaultserializationcontext)
- [getHref](ToggleVisibilityAction.md#gethref)
- [getJsonTypeName](ToggleVisibilityAction.md#getjsontypename)
- [getReferencedInputs](ToggleVisibilityAction.md#getreferencedinputs)
- [getResourceInformation](ToggleVisibilityAction.md#getresourceinformation)
- [getRootObject](ToggleVisibilityAction.md#getrootobject)
- [getSchema](ToggleVisibilityAction.md#getschema)
- [getSchemaKey](ToggleVisibilityAction.md#getschemakey)
- [getValue](ToggleVisibilityAction.md#getvalue)
- [hasAllDefaultValues](ToggleVisibilityAction.md#hasalldefaultvalues)
- [hasDefaultValue](ToggleVisibilityAction.md#hasdefaultvalue)
- [internalGetReferencedInputs](ToggleVisibilityAction.md#internalgetreferencedinputs)
- [internalParse](ToggleVisibilityAction.md#internalparse)
- [internalPrepareForExecution](ToggleVisibilityAction.md#internalprepareforexecution)
- [internalToJSON](ToggleVisibilityAction.md#internaltojson)
- [internalValidateInputs](ToggleVisibilityAction.md#internalvalidateinputs)
- [internalValidateProperties](ToggleVisibilityAction.md#internalvalidateproperties)
- [parse](ToggleVisibilityAction.md#parse)
- [populateSchema](ToggleVisibilityAction.md#populateschema)
- [preProcessPropertyValue](ToggleVisibilityAction.md#preprocesspropertyvalue)
- [prepareForExecution](ToggleVisibilityAction.md#prepareforexecution)
- [raiseExecuteActionEvent](ToggleVisibilityAction.md#raiseexecuteactionevent)
- [remove](ToggleVisibilityAction.md#remove)
- [removeTargetElement](ToggleVisibilityAction.md#removetargetelement)
- [render](ToggleVisibilityAction.md#render)
- [resetDefaultValues](ToggleVisibilityAction.md#resetdefaultvalues)
- [setCustomProperty](ToggleVisibilityAction.md#setcustomproperty)
- [setParent](ToggleVisibilityAction.md#setparent)
- [setShouldFallback](ToggleVisibilityAction.md#setshouldfallback)
- [setValue](ToggleVisibilityAction.md#setvalue)
- [shouldFallback](ToggleVisibilityAction.md#shouldfallback)
- [shouldSerialize](ToggleVisibilityAction.md#shouldserialize)
- [toJSON](ToggleVisibilityAction.md#tojson)
- [updateActionButtonCssStyle](ToggleVisibilityAction.md#updateactionbuttoncssstyle)
- [validateInputs](ToggleVisibilityAction.md#validateinputs)
- [validateProperties](ToggleVisibilityAction.md#validateproperties)

## Constructors

### constructor

• **new ToggleVisibilityAction**()

#### Inherited from

[Action](Action.md).[constructor](Action.md#constructor)

#### Defined in

[serialization.ts:951](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L951)

## Properties

### \_parent

• `Protected` `Optional` **\_parent**: [`CardObject`](CardObject.md)

#### Inherited from

[Action](Action.md).[_parent](Action.md#_parent)

#### Defined in

[card-object.ts:63](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L63)

___

### \_renderedElement

• `Protected` `Optional` **\_renderedElement**: `HTMLElement`

#### Inherited from

[Action](Action.md).[_renderedElement](Action.md#_renderedelement)

#### Defined in

[card-object.ts:64](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L64)

___

### iconUrl

• `Optional` **iconUrl**: `string`

#### Inherited from

[Action](Action.md).[iconUrl](Action.md#iconurl)

#### Defined in

[card-elements.ts:4068](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4068)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[Action](Action.md).[id](Action.md#id)

#### Defined in

[card-object.ts:52](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L52)

___

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[Action](Action.md).[maxVersion](Action.md#maxversion)

#### Defined in

[serialization.ts:949](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L949)

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

#### Inherited from

[Action](Action.md).[onExecute](Action.md#onexecute)

#### Defined in

[card-elements.ts:4124](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4124)

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

[Action](Action.md).[onPreProcessPropertyValue](Action.md#onpreprocesspropertyvalue)

#### Defined in

[card-object.ts:66](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L66)

___

### rules

• **rules**: [`RuleParam`](RuleParam.md)[]

#### Inherited from

[Action](Action.md).[rules](Action.md#rules)

#### Defined in

[card-elements.ts:4074](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4074)

___

### style

• **style**: `string` = `Enums.ActionStyle.Default`

#### Inherited from

[Action](Action.md).[style](Action.md#style)

#### Defined in

[card-elements.ts:4071](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4071)

___

### targetElements

• **targetElements**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[card-elements.ts:4485](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4485)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[Action](Action.md).[title](Action.md#title)

#### Defined in

[card-elements.ts:4065](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4065)

___

### JsonTypeName

▪ `Static` `Readonly` **JsonTypeName**: ``"Action.ToggleVisibility"``

#### Defined in

[card-elements.ts:4491](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4491)

___

### iconUrlProperty

▪ `Static` `Readonly` **iconUrlProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[Action](Action.md).[iconUrlProperty](Action.md#iconurlproperty)

#### Defined in

[card-elements.ts:4050](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4050)

___

### idProperty

▪ `Static` `Readonly` **idProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[Action](Action.md).[idProperty](Action.md#idproperty)

#### Defined in

[card-object.ts:40](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L40)

___

### ignoreInputValidationProperty

▪ `Static` `Readonly` **ignoreInputValidationProperty**: [`BoolProperty`](BoolProperty.md)

#### Inherited from

[Action](Action.md).[ignoreInputValidationProperty](Action.md#ignoreinputvalidationproperty)

#### Defined in

[card-elements.ts:4062](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4062)

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

[Action](Action.md).[onRegisterCustomProperties](Action.md#onregistercustomproperties)

#### Defined in

[serialization.ts:809](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L809)

___

### requiresProperty

▪ `Static` `Readonly` **requiresProperty**: [`SerializableObjectProperty`](SerializableObjectProperty.md)

#### Inherited from

[Action](Action.md).[requiresProperty](Action.md#requiresproperty)

#### Defined in

[card-object.ts:41](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L41)

___

### rulesProperty

▪ `Static` `Readonly` **rulesProperty**: [`SerializableObjectCollectionProperty`](SerializableObjectCollectionProperty.md)

#### Inherited from

[Action](Action.md).[rulesProperty](Action.md#rulesproperty)

#### Defined in

[card-elements.ts:4051](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4051)

___

### styleProperty

▪ `Static` `Readonly` **styleProperty**: [`ValueSetProperty`](ValueSetProperty.md)

#### Inherited from

[Action](Action.md).[styleProperty](Action.md#styleproperty)

#### Defined in

[card-elements.ts:4052](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4052)

___

### targetElementsProperty

▪ `Static` `Readonly` **targetElementsProperty**: [`CustomProperty`](CustomProperty.md)<[`PropertyBag`](../README.md#propertybag)\>

#### Defined in

[card-elements.ts:4439](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4439)

___

### titleProperty

▪ `Static` `Readonly` **titleProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[Action](Action.md).[titleProperty](Action.md#titleproperty)

#### Defined in

[card-elements.ts:4049](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4049)

___

### typeNameProperty

▪ `Static` `Readonly` **typeNameProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[Action](Action.md).[typeNameProperty](Action.md#typenameproperty)

#### Defined in

[card-object.ts:31](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L31)

## Accessors

### hostConfig

• `get` **hostConfig**(): [`HostConfig`](HostConfig.md)

#### Returns

[`HostConfig`](HostConfig.md)

#### Inherited from

Action.hostConfig

#### Defined in

[card-elements.ts:4285](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4285)

___

### ignoreInputValidation

• `get` **ignoreInputValidation**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Action.ignoreInputValidation

#### Defined in

[card-elements.ts:4281](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4281)

___

### isPrimary

• `get` **isPrimary**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Action.isPrimary

#### Defined in

[card-elements.ts:4266](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4266)

• `set` **isPrimary**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Action.isPrimary

#### Defined in

[card-elements.ts:4270](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4270)

___

### parent

• `get` **parent**(): `undefined` \| [`CardElement`](CardElement.md)

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Inherited from

Action.parent

#### Defined in

[card-elements.ts:4289](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4289)

___

### renderedElement

• `get` **renderedElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

Action.renderedElement

#### Defined in

[card-object.ts:142](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L142)

___

### requires

• `get` **requires**(): `HostCapabilities`

#### Returns

`HostCapabilities`

#### Inherited from

Action.requires

#### Defined in

[card-object.ts:54](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L54)

## Methods

### addCssClasses

▸ `Protected` **addCssClasses**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

#### Returns

`void`

#### Inherited from

[Action](Action.md).[addCssClasses](Action.md#addcssclasses)

#### Defined in

[card-elements.ts:4084](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4084)

___

### addTargetElement

▸ **addTargetElement**(`elementId`, `isVisible?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `elementId` | `string` | `undefined` |
| `isVisible` | `undefined` \| `boolean` | `undefined` |

#### Returns

`void`

#### Defined in

[card-elements.ts:4535](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4535)

___

### execute

▸ **execute**(): `void`

#### Returns

`void`

#### Overrides

[Action](Action.md).[execute](Action.md#execute)

#### Defined in

[card-elements.ts:4518](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4518)

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

[Action](Action.md).[getActionById](Action.md#getactionbyid)

#### Defined in

[card-elements.ts:4249](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4249)

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

[Action](Action.md).[getAllInputs](Action.md#getallinputs)

#### Defined in

[card-elements.ts:4241](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4241)

___

### getAriaRole

▸ **getAriaRole**(): `string`

#### Returns

`string`

#### Inherited from

[Action](Action.md).[getAriaRole](Action.md#getariarole)

#### Defined in

[card-elements.ts:4130](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4130)

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

[Action](Action.md).[getCustomProperty](Action.md#getcustomproperty)

#### Defined in

[serialization.ts:1040](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1040)

___

### getDefaultSerializationContext

▸ `Protected` **getDefaultSerializationContext**(): [`BaseSerializationContext`](BaseSerializationContext.md)

#### Returns

[`BaseSerializationContext`](BaseSerializationContext.md)

#### Inherited from

[Action](Action.md).[getDefaultSerializationContext](Action.md#getdefaultserializationcontext)

#### Defined in

[card-elements.ts:4080](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4080)

___

### getHref

▸ **getHref**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[Action](Action.md).[getHref](Action.md#gethref)

#### Defined in

[card-elements.ts:4126](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4126)

___

### getJsonTypeName

▸ **getJsonTypeName**(): `string`

#### Returns

`string`

#### Overrides

[Action](Action.md).[getJsonTypeName](Action.md#getjsontypename)

#### Defined in

[card-elements.ts:4509](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4509)

___

### getReferencedInputs

▸ **getReferencedInputs**(): `undefined` \| [`Dictionary`](../README.md#dictionary)<[`Input`](Input.md)\>

#### Returns

`undefined` \| [`Dictionary`](../README.md#dictionary)<[`Input`](Input.md)\>

#### Inherited from

[Action](Action.md).[getReferencedInputs](Action.md#getreferencedinputs)

#### Defined in

[card-elements.ts:4253](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4253)

___

### getResourceInformation

▸ **getResourceInformation**(): [`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Returns

[`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Inherited from

[Action](Action.md).[getResourceInformation](Action.md#getresourceinformation)

#### Defined in

[card-elements.ts:4245](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4245)

___

### getRootObject

▸ **getRootObject**(): [`CardObject`](CardObject.md)

#### Returns

[`CardObject`](CardObject.md)

#### Inherited from

[Action](Action.md).[getRootObject](Action.md#getrootobject)

#### Defined in

[card-object.ts:102](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L102)

___

### getSchema

▸ **getSchema**(): [`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Returns

[`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Inherited from

[Action](Action.md).[getSchema](Action.md#getschema)

#### Defined in

[serialization.ts:1044](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1044)

___

### getSchemaKey

▸ `Protected` **getSchemaKey**(): `string`

#### Returns

`string`

#### Inherited from

[Action](Action.md).[getSchemaKey](Action.md#getschemakey)

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

[Action](Action.md).[getValue](Action.md#getvalue)

#### Defined in

[serialization.ts:875](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L875)

___

### hasAllDefaultValues

▸ **hasAllDefaultValues**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Action](Action.md).[hasAllDefaultValues](Action.md#hasalldefaultvalues)

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

[Action](Action.md).[hasDefaultValue](Action.md#hasdefaultvalue)

#### Defined in

[serialization.ts:1001](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1001)

___

### internalGetReferencedInputs

▸ `Protected` **internalGetReferencedInputs**(): [`Dictionary`](../README.md#dictionary)<[`Input`](Input.md)\>

#### Returns

[`Dictionary`](../README.md#dictionary)<[`Input`](Input.md)\>

#### Inherited from

[Action](Action.md).[internalGetReferencedInputs](Action.md#internalgetreferencedinputs)

#### Defined in

[card-elements.ts:4088](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4088)

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

[Action](Action.md).[internalParse](Action.md#internalparse)

#### Defined in

[serialization.ts:888](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L888)

___

### internalPrepareForExecution

▸ `Protected` **internalPrepareForExecution**(`inputs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | `undefined` \| [`Dictionary`](../README.md#dictionary)<[`Input`](Input.md)\> |

#### Returns

`void`

#### Inherited from

[Action](Action.md).[internalPrepareForExecution](Action.md#internalprepareforexecution)

#### Defined in

[card-elements.ts:4092](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4092)

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

[Action](Action.md).[internalToJSON](Action.md#internaltojson)

#### Defined in

[serialization.ts:927](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L927)

___

### internalValidateInputs

▸ `Protected` **internalValidateInputs**(`referencedInputs`): [`Input`](Input.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `referencedInputs` | `undefined` \| [`Dictionary`](../README.md#dictionary)<[`Input`](Input.md)\> |

#### Returns

[`Input`](Input.md)[]

#### Inherited from

[Action](Action.md).[internalValidateInputs](Action.md#internalvalidateinputs)

#### Defined in

[card-elements.ts:4096](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4096)

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

[Action](Action.md).[internalValidateProperties](Action.md#internalvalidateproperties)

#### Defined in

[card-object.ts:112](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L112)

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

[Action](Action.md).[parse](Action.md#parse)

#### Defined in

[card-elements.ts:4138](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4138)

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

[Action](Action.md).[populateSchema](Action.md#populateschema)

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

[Action](Action.md).[preProcessPropertyValue](Action.md#preprocesspropertyvalue)

#### Defined in

[card-object.ts:72](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L72)

___

### prepareForExecution

▸ **prepareForExecution**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Action](Action.md).[prepareForExecution](Action.md#prepareforexecution)

#### Defined in

[card-elements.ts:4218](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4218)

___

### raiseExecuteActionEvent

▸ `Protected` **raiseExecuteActionEvent**(): `void`

#### Returns

`void`

#### Inherited from

[Action](Action.md).[raiseExecuteActionEvent](Action.md#raiseexecuteactionevent)

#### Defined in

[card-elements.ts:4116](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4116)

___

### remove

▸ **remove**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Action](Action.md).[remove](Action.md#remove)

#### Defined in

[card-elements.ts:4233](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4233)

___

### removeTargetElement

▸ **removeTargetElement**(`elementId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementId` | `string` |

#### Returns

`void`

#### Defined in

[card-elements.ts:4540](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4540)

___

### render

▸ **render**(`baseCssClass?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `baseCssClass` | `string` | `"ac-pushButton"` |

#### Returns

`void`

#### Overrides

[Action](Action.md).[render](Action.md#render)

#### Defined in

[card-elements.ts:4513](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4513)

___

### resetDefaultValues

▸ **resetDefaultValues**(): `void`

#### Returns

`void`

#### Inherited from

[Action](Action.md).[resetDefaultValues](Action.md#resetdefaultvalues)

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

[Action](Action.md).[setCustomProperty](Action.md#setcustomproperty)

#### Defined in

[serialization.ts:1029](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1029)

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

[Action](Action.md).[setParent](Action.md#setparent)

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

[Action](Action.md).[setShouldFallback](Action.md#setshouldfallback)

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

[Action](Action.md).[setValue](Action.md#setvalue)

#### Defined in

[serialization.ts:879](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L879)

___

### shouldFallback

▸ **shouldFallback**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Action](Action.md).[shouldFallback](Action.md#shouldfallback)

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

[Action](Action.md).[shouldSerialize](Action.md#shouldserialize)

#### Defined in

[card-elements.ts:4112](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4112)

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

[Action](Action.md).[toJSON](Action.md#tojson)

#### Defined in

[serialization.ts:967](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L967)

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

#### Inherited from

[Action](Action.md).[updateActionButtonCssStyle](Action.md#updateactionbuttoncssstyle)

#### Defined in

[card-elements.ts:4134](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4134)

___

### validateInputs

▸ **validateInputs**(): [`Input`](Input.md)[]

Validates the inputs associated with this action.

#### Returns

[`Input`](Input.md)[]

A list of inputs that failed validation, or an empty array if no input failed validation.

#### Inherited from

[Action](Action.md).[validateInputs](Action.md#validateinputs)

#### Defined in

[card-elements.ts:4262](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4262)

___

### validateProperties

▸ **validateProperties**(): [`ValidationResults`](ValidationResults.md)

#### Returns

[`ValidationResults`](ValidationResults.md)

#### Inherited from

[Action](Action.md).[validateProperties](Action.md#validateproperties)

#### Defined in

[card-object.ts:130](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L130)
