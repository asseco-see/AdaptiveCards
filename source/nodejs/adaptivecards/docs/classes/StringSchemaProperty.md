[Adaptive Cards Javascript SDK](../README.md) / StringSchemaProperty

# Class: StringSchemaProperty

## Hierarchy

- [`SchemaProperty`](SchemaProperty.md)

  ↳ **`StringSchemaProperty`**

## Table of contents

### Constructors

- [constructor](StringSchemaProperty.md#constructor)

### Properties

- [displayName](StringSchemaProperty.md#displayname)
- [isMultiline](StringSchemaProperty.md#ismultiline)
- [maxVersion](StringSchemaProperty.md#maxversion)
- [name](StringSchemaProperty.md#name)
- [displayNameProperty](StringSchemaProperty.md#displaynameproperty)
- [isMultilineProperty](StringSchemaProperty.md#ismultilineproperty)
- [nameProperty](StringSchemaProperty.md#nameproperty)
- [onRegisterCustomProperties](StringSchemaProperty.md#onregistercustomproperties)

### Methods

- [getCustomProperty](StringSchemaProperty.md#getcustomproperty)
- [getDefaultSerializationContext](StringSchemaProperty.md#getdefaultserializationcontext)
- [getSchema](StringSchemaProperty.md#getschema)
- [getSchemaKey](StringSchemaProperty.md#getschemakey)
- [getValue](StringSchemaProperty.md#getvalue)
- [hasAllDefaultValues](StringSchemaProperty.md#hasalldefaultvalues)
- [hasDefaultValue](StringSchemaProperty.md#hasdefaultvalue)
- [internalParse](StringSchemaProperty.md#internalparse)
- [internalToJSON](StringSchemaProperty.md#internaltojson)
- [parse](StringSchemaProperty.md#parse)
- [populateSchema](StringSchemaProperty.md#populateschema)
- [resetDefaultValues](StringSchemaProperty.md#resetdefaultvalues)
- [setCustomProperty](StringSchemaProperty.md#setcustomproperty)
- [setValue](StringSchemaProperty.md#setvalue)
- [shouldSerialize](StringSchemaProperty.md#shouldserialize)
- [toJSON](StringSchemaProperty.md#tojson)
- [parse](StringSchemaProperty.md#parse-1)
- [registerSchemaPropertyClass](StringSchemaProperty.md#registerschemapropertyclass)

## Constructors

### constructor

• **new StringSchemaProperty**()

#### Inherited from

[SchemaProperty](SchemaProperty.md).[constructor](SchemaProperty.md#constructor)

#### Defined in

[serialization.ts:951](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L951)

## Properties

### displayName

• **displayName**: `string`

#### Inherited from

[SchemaProperty](SchemaProperty.md).[displayName](SchemaProperty.md#displayname)

#### Defined in

[components.ts:24](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L24)

___

### isMultiline

• **isMultiline**: `boolean` = `false`

#### Defined in

[components.ts:57](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L57)

___

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[SchemaProperty](SchemaProperty.md).[maxVersion](SchemaProperty.md#maxversion)

#### Defined in

[serialization.ts:949](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L949)

___

### name

• **name**: `string`

#### Inherited from

[SchemaProperty](SchemaProperty.md).[name](SchemaProperty.md#name)

#### Defined in

[components.ts:21](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L21)

___

### displayNameProperty

▪ `Static` `Readonly` **displayNameProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[SchemaProperty](SchemaProperty.md).[displayNameProperty](SchemaProperty.md#displaynameproperty)

#### Defined in

[components.ts:18](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L18)

___

### isMultilineProperty

▪ `Static` `Readonly` **isMultilineProperty**: [`BoolProperty`](BoolProperty.md)

#### Defined in

[components.ts:54](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L54)

___

### nameProperty

▪ `Static` `Readonly` **nameProperty**: [`StringProperty`](StringProperty.md)

#### Inherited from

[SchemaProperty](SchemaProperty.md).[nameProperty](SchemaProperty.md#nameproperty)

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

[SchemaProperty](SchemaProperty.md).[onRegisterCustomProperties](SchemaProperty.md#onregistercustomproperties)

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

[SchemaProperty](SchemaProperty.md).[getCustomProperty](SchemaProperty.md#getcustomproperty)

#### Defined in

[serialization.ts:1040](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1040)

___

### getDefaultSerializationContext

▸ `Protected` **getDefaultSerializationContext**(): [`BaseSerializationContext`](BaseSerializationContext.md)

#### Returns

[`BaseSerializationContext`](BaseSerializationContext.md)

#### Inherited from

[SchemaProperty](SchemaProperty.md).[getDefaultSerializationContext](SchemaProperty.md#getdefaultserializationcontext)

#### Defined in

[serialization.ts:818](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L818)

___

### getSchema

▸ **getSchema**(): [`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Returns

[`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Inherited from

[SchemaProperty](SchemaProperty.md).[getSchema](SchemaProperty.md#getschema)

#### Defined in

[serialization.ts:1044](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1044)

___

### getSchemaKey

▸ `Protected` **getSchemaKey**(): `string`

#### Returns

`string`

#### Overrides

[SchemaProperty](SchemaProperty.md).[getSchemaKey](SchemaProperty.md#getschemakey)

#### Defined in

[components.ts:61](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L61)

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

[SchemaProperty](SchemaProperty.md).[getValue](SchemaProperty.md#getvalue)

#### Defined in

[serialization.ts:875](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L875)

___

### hasAllDefaultValues

▸ **hasAllDefaultValues**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[SchemaProperty](SchemaProperty.md).[hasAllDefaultValues](SchemaProperty.md#hasalldefaultvalues)

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

[SchemaProperty](SchemaProperty.md).[hasDefaultValue](SchemaProperty.md#hasdefaultvalue)

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

[SchemaProperty](SchemaProperty.md).[internalParse](SchemaProperty.md#internalparse)

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

[SchemaProperty](SchemaProperty.md).[internalToJSON](SchemaProperty.md#internaltojson)

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

[SchemaProperty](SchemaProperty.md).[parse](SchemaProperty.md#parse)

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

[SchemaProperty](SchemaProperty.md).[populateSchema](SchemaProperty.md#populateschema)

#### Defined in

[serialization.ts:822](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L822)

___

### resetDefaultValues

▸ **resetDefaultValues**(): `void`

#### Returns

`void`

#### Inherited from

[SchemaProperty](SchemaProperty.md).[resetDefaultValues](SchemaProperty.md#resetdefaultvalues)

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

[SchemaProperty](SchemaProperty.md).[setCustomProperty](SchemaProperty.md#setcustomproperty)

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

[SchemaProperty](SchemaProperty.md).[setValue](SchemaProperty.md#setvalue)

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

[SchemaProperty](SchemaProperty.md).[shouldSerialize](SchemaProperty.md#shouldserialize)

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

[SchemaProperty](SchemaProperty.md).[toJSON](SchemaProperty.md#tojson)

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

#### Inherited from

[SchemaProperty](SchemaProperty.md).[parse](SchemaProperty.md#parse-1)

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

#### Inherited from

[SchemaProperty](SchemaProperty.md).[registerSchemaPropertyClass](SchemaProperty.md#registerschemapropertyclass)

#### Defined in

[components.ts:30](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L30)
