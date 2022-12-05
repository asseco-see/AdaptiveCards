[Adaptive Cards Javascript SDK](../README.md) / SchemaProperty

# Class: SchemaProperty

## Hierarchy

- [`SerializableObject`](SerializableObject.md)

  ↳ **`SchemaProperty`**

  ↳↳ [`StringSchemaProperty`](StringSchemaProperty.md)

  ↳↳ [`NumberSchemaProperty`](NumberSchemaProperty.md)

## Table of contents

### Constructors

- [constructor](SchemaProperty.md#constructor)

### Properties

- [displayName](SchemaProperty.md#displayname)
- [maxVersion](SchemaProperty.md#maxversion)
- [name](SchemaProperty.md#name)
- [displayNameProperty](SchemaProperty.md#displaynameproperty)
- [nameProperty](SchemaProperty.md#nameproperty)
- [onRegisterCustomProperties](SchemaProperty.md#onregistercustomproperties)

### Methods

- [getCustomProperty](SchemaProperty.md#getcustomproperty)
- [getDefaultSerializationContext](SchemaProperty.md#getdefaultserializationcontext)
- [getSchema](SchemaProperty.md#getschema)
- [getSchemaKey](SchemaProperty.md#getschemakey)
- [getValue](SchemaProperty.md#getvalue)
- [hasAllDefaultValues](SchemaProperty.md#hasalldefaultvalues)
- [hasDefaultValue](SchemaProperty.md#hasdefaultvalue)
- [internalParse](SchemaProperty.md#internalparse)
- [internalToJSON](SchemaProperty.md#internaltojson)
- [parse](SchemaProperty.md#parse)
- [populateSchema](SchemaProperty.md#populateschema)
- [resetDefaultValues](SchemaProperty.md#resetdefaultvalues)
- [setCustomProperty](SchemaProperty.md#setcustomproperty)
- [setValue](SchemaProperty.md#setvalue)
- [shouldSerialize](SchemaProperty.md#shouldserialize)
- [toJSON](SchemaProperty.md#tojson)
- [parse](SchemaProperty.md#parse-1)
- [registerSchemaPropertyClass](SchemaProperty.md#registerschemapropertyclass)

## Constructors

### constructor

• **new SchemaProperty**()

#### Inherited from

[SerializableObject](SerializableObject.md).[constructor](SerializableObject.md#constructor)

#### Defined in

[serialization.ts:951](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L951)

## Properties

### displayName

• **displayName**: `string`

#### Defined in

[components.ts:24](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L24)

___

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[SerializableObject](SerializableObject.md).[maxVersion](SerializableObject.md#maxversion)

#### Defined in

[serialization.ts:949](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L949)

___

### name

• **name**: `string`

#### Defined in

[components.ts:21](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L21)

___

### displayNameProperty

▪ `Static` `Readonly` **displayNameProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[components.ts:18](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L18)

___

### nameProperty

▪ `Static` `Readonly` **nameProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[components.ts:17](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L17)

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

▸ `Protected` `Abstract` **getSchemaKey**(): `string`

#### Returns

`string`

#### Inherited from

[SerializableObject](SerializableObject.md).[getSchemaKey](SerializableObject.md#getschemakey)

#### Defined in

[serialization.ts:816](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L816)

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
| `source` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`void`

#### Inherited from

[SerializableObject](SerializableObject.md).[internalParse](SerializableObject.md#internalparse)

#### Defined in

[serialization.ts:888](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L888)

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

[SerializableObject](SerializableObject.md).[internalToJSON](SerializableObject.md#internaltojson)

#### Defined in

[serialization.ts:927](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L927)

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

___

### parse

▸ `Static` **parse**(`property`): `undefined` \| [`SchemaProperty`](SchemaProperty.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `any` |

#### Returns

`undefined` \| [`SchemaProperty`](SchemaProperty.md)

#### Defined in

[components.ts:35](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L35)

___

### registerSchemaPropertyClass

▸ `Static` **registerSchemaPropertyClass**(`type`, `propertyClass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `propertyClass` | `SchemaPropertyClass` |

#### Returns

`void`

#### Defined in

[components.ts:30](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L30)
