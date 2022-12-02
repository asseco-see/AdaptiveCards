[Adaptive Cards Javascript SDK](../README.md) / Fact

# Class: Fact

## Hierarchy

- [`SerializableObject`](SerializableObject.md)

  ↳ **`Fact`**

## Table of contents

### Constructors

- [constructor](Fact.md#constructor)

### Properties

- [maxVersion](Fact.md#maxversion)
- [name](Fact.md#name)
- [value](Fact.md#value)
- [onRegisterCustomProperties](Fact.md#onregistercustomproperties)
- [titleProperty](Fact.md#titleproperty)
- [valueProperty](Fact.md#valueproperty)

### Methods

- [getCustomProperty](Fact.md#getcustomproperty)
- [getDefaultSerializationContext](Fact.md#getdefaultserializationcontext)
- [getSchema](Fact.md#getschema)
- [getSchemaKey](Fact.md#getschemakey)
- [getValue](Fact.md#getvalue)
- [hasAllDefaultValues](Fact.md#hasalldefaultvalues)
- [hasDefaultValue](Fact.md#hasdefaultvalue)
- [internalParse](Fact.md#internalparse)
- [internalToJSON](Fact.md#internaltojson)
- [parse](Fact.md#parse)
- [populateSchema](Fact.md#populateschema)
- [resetDefaultValues](Fact.md#resetdefaultvalues)
- [setCustomProperty](Fact.md#setcustomproperty)
- [setValue](Fact.md#setvalue)
- [shouldSerialize](Fact.md#shouldserialize)
- [toJSON](Fact.md#tojson)

## Constructors

### constructor

• **new Fact**(`name?`, `value?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `value?` | `string` |

#### Overrides

[SerializableObject](SerializableObject.md).[constructor](SerializableObject.md#constructor)

#### Defined in

[card-elements.ts:1520](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L1520)

## Properties

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[SerializableObject](SerializableObject.md).[maxVersion](SerializableObject.md#maxversion)

#### Defined in

[serialization.ts:949](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L949)

___

### name

• `Optional` **name**: `string`

#### Defined in

[card-elements.ts:1509](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L1509)

___

### value

• `Optional` **value**: `string`

#### Defined in

[card-elements.ts:1512](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L1512)

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

[serialization.ts:809](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L809)

___

### titleProperty

▪ `Static` `Readonly` **titleProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:1504](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L1504)

___

### valueProperty

▪ `Static` `Readonly` **valueProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:1505](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L1505)

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

[serialization.ts:1040](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1040)

___

### getDefaultSerializationContext

▸ `Protected` **getDefaultSerializationContext**(): [`BaseSerializationContext`](BaseSerializationContext.md)

#### Returns

[`BaseSerializationContext`](BaseSerializationContext.md)

#### Inherited from

[SerializableObject](SerializableObject.md).[getDefaultSerializationContext](SerializableObject.md#getdefaultserializationcontext)

#### Defined in

[serialization.ts:818](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L818)

___

### getSchema

▸ **getSchema**(): [`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Returns

[`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Inherited from

[SerializableObject](SerializableObject.md).[getSchema](SerializableObject.md#getschema)

#### Defined in

[serialization.ts:1044](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1044)

___

### getSchemaKey

▸ `Protected` **getSchemaKey**(): `string`

#### Returns

`string`

#### Overrides

[SerializableObject](SerializableObject.md).[getSchemaKey](SerializableObject.md#getschemakey)

#### Defined in

[card-elements.ts:1516](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L1516)

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

[serialization.ts:875](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L875)

___

### hasAllDefaultValues

▸ **hasAllDefaultValues**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[SerializableObject](SerializableObject.md).[hasAllDefaultValues](SerializableObject.md#hasalldefaultvalues)

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

[SerializableObject](SerializableObject.md).[hasDefaultValue](SerializableObject.md#hasdefaultvalue)

#### Defined in

[serialization.ts:1001](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1001)

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

[serialization.ts:888](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L888)

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

[serialization.ts:927](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L927)

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

[serialization.ts:963](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L963)

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

[serialization.ts:822](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L822)

___

### resetDefaultValues

▸ **resetDefaultValues**(): `void`

#### Returns

`void`

#### Inherited from

[SerializableObject](SerializableObject.md).[resetDefaultValues](SerializableObject.md#resetdefaultvalues)

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

[SerializableObject](SerializableObject.md).[setCustomProperty](SerializableObject.md#setcustomproperty)

#### Defined in

[serialization.ts:1029](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L1029)

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

[serialization.ts:879](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L879)

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

[serialization.ts:945](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L945)

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

[serialization.ts:967](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L967)
