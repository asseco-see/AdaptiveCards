[Adaptive Cards Javascript SDK](../README.md) / ActionParam

# Class: ActionParam

## Hierarchy

- [`SerializableObject`](SerializableObject.md)

  ↳ **`ActionParam`**

## Table of contents

### Constructors

- [constructor](ActionParam.md#constructor)

### Properties

- [data](ActionParam.md#data)
- [dialogId](ActionParam.md#dialogid)
- [elementId](ActionParam.md#elementid)
- [inputId](ActionParam.md#inputid)
- [inputValue](ActionParam.md#inputvalue)
- [kind](ActionParam.md#kind)
- [maxVersion](ActionParam.md#maxversion)
- [propertyName](ActionParam.md#propertyname)
- [propertyValue](ActionParam.md#propertyvalue)
- [type](ActionParam.md#type)
- [dataProperty](ActionParam.md#dataproperty)
- [dialogIdProperty](ActionParam.md#dialogidproperty)
- [elementIdProperty](ActionParam.md#elementidproperty)
- [inputIdProperty](ActionParam.md#inputidproperty)
- [inputValueProperty](ActionParam.md#inputvalueproperty)
- [kindProperty](ActionParam.md#kindproperty)
- [onRegisterCustomProperties](ActionParam.md#onregistercustomproperties)
- [propertyNameProperty](ActionParam.md#propertynameproperty)
- [propertyValueProperty](ActionParam.md#propertyvalueproperty)
- [typeProperty](ActionParam.md#typeproperty)

### Methods

- [getCustomProperty](ActionParam.md#getcustomproperty)
- [getDefaultSerializationContext](ActionParam.md#getdefaultserializationcontext)
- [getSchema](ActionParam.md#getschema)
- [getSchemaKey](ActionParam.md#getschemakey)
- [getValue](ActionParam.md#getvalue)
- [hasAllDefaultValues](ActionParam.md#hasalldefaultvalues)
- [hasDefaultValue](ActionParam.md#hasdefaultvalue)
- [internalParse](ActionParam.md#internalparse)
- [internalToJSON](ActionParam.md#internaltojson)
- [parse](ActionParam.md#parse)
- [populateSchema](ActionParam.md#populateschema)
- [resetDefaultValues](ActionParam.md#resetdefaultvalues)
- [setCustomProperty](ActionParam.md#setcustomproperty)
- [setValue](ActionParam.md#setvalue)
- [shouldSerialize](ActionParam.md#shouldserialize)
- [toJSON](ActionParam.md#tojson)

## Constructors

### constructor

• **new ActionParam**()

#### Inherited from

[SerializableObject](SerializableObject.md).[constructor](SerializableObject.md#constructor)

#### Defined in

[serialization.ts:951](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L951)

## Properties

### data

• `Optional` **data**: `string`

#### Defined in

[card-elements.ts:42](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L42)

___

### dialogId

• `Optional` **dialogId**: `string`

#### Defined in

[card-elements.ts:54](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L54)

___

### elementId

• `Optional` **elementId**: `string`

#### Defined in

[card-elements.ts:44](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L44)

___

### inputId

• `Optional` **inputId**: `string`

#### Defined in

[card-elements.ts:46](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L46)

___

### inputValue

• `Optional` **inputValue**: `string`

#### Defined in

[card-elements.ts:48](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L48)

___

### kind

• `Optional` **kind**: `string`

#### Defined in

[card-elements.ts:38](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L38)

___

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[SerializableObject](SerializableObject.md).[maxVersion](SerializableObject.md#maxversion)

#### Defined in

[serialization.ts:949](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L949)

___

### propertyName

• `Optional` **propertyName**: `string`

#### Defined in

[card-elements.ts:50](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L50)

___

### propertyValue

• `Optional` **propertyValue**: `string`

#### Defined in

[card-elements.ts:52](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L52)

___

### type

• `Optional` **type**: `string`

#### Defined in

[card-elements.ts:40](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L40)

___

### dataProperty

▪ `Static` `Readonly` **dataProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:29](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L29)

___

### dialogIdProperty

▪ `Static` `Readonly` **dialogIdProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:35](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L35)

___

### elementIdProperty

▪ `Static` `Readonly` **elementIdProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:30](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L30)

___

### inputIdProperty

▪ `Static` `Readonly` **inputIdProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:31](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L31)

___

### inputValueProperty

▪ `Static` `Readonly` **inputValueProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:32](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L32)

___

### kindProperty

▪ `Static` `Readonly` **kindProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:28](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L28)

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

[SerializableObject](SerializableObject.md).[onRegisterCustomProperties](SerializableObject.md#onregistercustomproperties)

#### Defined in

[serialization.ts:809](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L809)

___

### propertyNameProperty

▪ `Static` `Readonly` **propertyNameProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:33](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L33)

___

### propertyValueProperty

▪ `Static` `Readonly` **propertyValueProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:34](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L34)

___

### typeProperty

▪ `Static` `Readonly` **typeProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:27](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L27)

## Methods

### getCustomProperty

▸ **getCustomProperty**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[SerializableObject](SerializableObject.md).[getCustomProperty](SerializableObject.md#getcustomproperty)

#### Defined in

[serialization.ts:1040](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1040)

___

### getDefaultSerializationContext

▸ `Protected` **getDefaultSerializationContext**(): [`BaseSerializationContext`](BaseSerializationContext.md)

#### Returns

[`BaseSerializationContext`](BaseSerializationContext.md)

#### Inherited from

[SerializableObject](SerializableObject.md).[getDefaultSerializationContext](SerializableObject.md#getdefaultserializationcontext)

#### Defined in

[serialization.ts:818](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L818)

___

### getSchema

▸ **getSchema**(): [`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Returns

[`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Inherited from

[SerializableObject](SerializableObject.md).[getSchema](SerializableObject.md#getschema)

#### Defined in

[serialization.ts:1044](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1044)

___

### getSchemaKey

▸ `Protected` **getSchemaKey**(): `string`

#### Returns

`string`

#### Overrides

[SerializableObject](SerializableObject.md).[getSchemaKey](SerializableObject.md#getschemakey)

#### Defined in

[card-elements.ts:56](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L56)

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

[SerializableObject](SerializableObject.md).[getValue](SerializableObject.md#getvalue)

#### Defined in

[serialization.ts:875](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L875)

___

### hasAllDefaultValues

▸ **hasAllDefaultValues**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[SerializableObject](SerializableObject.md).[hasAllDefaultValues](SerializableObject.md#hasalldefaultvalues)

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

[SerializableObject](SerializableObject.md).[hasDefaultValue](SerializableObject.md#hasdefaultvalue)

#### Defined in

[serialization.ts:1001](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1001)

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

[SerializableObject](SerializableObject.md).[internalParse](SerializableObject.md#internalparse)

#### Defined in

[card-elements.ts:72](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L72)

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

[SerializableObject](SerializableObject.md).[internalToJSON](SerializableObject.md#internaltojson)

#### Defined in

[card-elements.ts:60](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L60)

___

### parse

▸ **parse**(`source`, `context?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`PropertyBag`](../README.md#propertybag) |
| `context?` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`void`

#### Inherited from

[SerializableObject](SerializableObject.md).[parse](SerializableObject.md#parse)

#### Defined in

[serialization.ts:963](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L963)

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

[SerializableObject](SerializableObject.md).[populateSchema](SerializableObject.md#populateschema)

#### Defined in

[serialization.ts:822](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L822)

___

### resetDefaultValues

▸ **resetDefaultValues**(): `void`

#### Returns

`void`

#### Inherited from

[SerializableObject](SerializableObject.md).[resetDefaultValues](SerializableObject.md#resetdefaultvalues)

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

[SerializableObject](SerializableObject.md).[setCustomProperty](SerializableObject.md#setcustomproperty)

#### Defined in

[serialization.ts:1029](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1029)

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

[SerializableObject](SerializableObject.md).[setValue](SerializableObject.md#setvalue)

#### Defined in

[serialization.ts:879](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L879)

___

### shouldSerialize

▸ `Protected` **shouldSerialize**(`context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`boolean`

#### Inherited from

[SerializableObject](SerializableObject.md).[shouldSerialize](SerializableObject.md#shouldserialize)

#### Defined in

[serialization.ts:945](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L945)

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

[SerializableObject](SerializableObject.md).[toJSON](SerializableObject.md#tojson)

#### Defined in

[serialization.ts:967](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L967)
