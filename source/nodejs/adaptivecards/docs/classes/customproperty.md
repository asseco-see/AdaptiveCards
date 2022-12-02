[Adaptive Cards Javascript SDK](../README.md) / CustomProperty

# Class: CustomProperty<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`PropertyDefinition`](PropertyDefinition.md)

  ↳ **`CustomProperty`**

  ↳↳ [`TimeProperty`](TimeProperty.md)

## Table of contents

### Constructors

- [constructor](CustomProperty.md#constructor)

### Properties

- [defaultValue](CustomProperty.md#defaultvalue)
- [isSerializationEnabled](CustomProperty.md#isserializationenabled)
- [name](CustomProperty.md#name)
- [onGetInitialValue](CustomProperty.md#ongetinitialvalue)
- [onParse](CustomProperty.md#onparse)
- [onToJSON](CustomProperty.md#ontojson)
- [sequentialNumber](CustomProperty.md#sequentialnumber)
- [targetVersion](CustomProperty.md#targetversion)

### Methods

- [getInternalName](CustomProperty.md#getinternalname)
- [parse](CustomProperty.md#parse)
- [toJSON](CustomProperty.md#tojson)

## Constructors

### constructor

• **new CustomProperty**<`T`\>(`targetVersion`, `name`, `onParse`, `onToJSON`, `defaultValue?`, `onGetInitialValue?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetVersion` | [`Version`](Version.md) |
| `name` | `string` |
| `onParse` | (`sender`: [`SerializableObject`](SerializableObject.md), `property`: [`PropertyDefinition`](PropertyDefinition.md), `source`: [`PropertyBag`](../README.md#propertybag), `context`: [`BaseSerializationContext`](BaseSerializationContext.md)) => `T` |
| `onToJSON` | (`sender`: [`SerializableObject`](SerializableObject.md), `property`: [`PropertyDefinition`](PropertyDefinition.md), `target`: [`PropertyBag`](../README.md#propertybag), `value`: `T`, `context`: [`BaseSerializationContext`](BaseSerializationContext.md)) => `void` |
| `defaultValue?` | `T` |
| `onGetInitialValue?` | (`sender`: [`SerializableObject`](SerializableObject.md)) => `T` |

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[constructor](PropertyDefinition.md#constructor)

#### Defined in

[serialization.ts:728](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L728)

## Properties

### defaultValue

• `Optional` `Readonly` **defaultValue**: `T`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[defaultValue](PropertyDefinition.md#defaultvalue)

#### Defined in

[serialization.ts:733](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L733)

___

### isSerializationEnabled

• **isSerializationEnabled**: `boolean` = `true`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[isSerializationEnabled](PropertyDefinition.md#isserializationenabled)

#### Defined in

[serialization.ts:290](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L290)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[name](PropertyDefinition.md#name)

#### Defined in

[serialization.ts:730](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L730)

___

### onGetInitialValue

• `Optional` `Readonly` **onGetInitialValue**: (`sender`: [`SerializableObject`](SerializableObject.md)) => `T`

#### Type declaration

▸ (`sender`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |

##### Returns

`T`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[onGetInitialValue](PropertyDefinition.md#ongetinitialvalue)

#### Defined in

[serialization.ts:734](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L734)

___

### onParse

• `Readonly` **onParse**: (`sender`: [`SerializableObject`](SerializableObject.md), `property`: [`PropertyDefinition`](PropertyDefinition.md), `source`: [`PropertyBag`](../README.md#propertybag), `context`: [`BaseSerializationContext`](BaseSerializationContext.md)) => `T`

#### Type declaration

▸ (`sender`, `property`, `source`, `context`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `property` | [`PropertyDefinition`](PropertyDefinition.md) |
| `source` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

##### Returns

`T`

#### Defined in

[serialization.ts:731](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L731)

___

### onToJSON

• `Readonly` **onToJSON**: (`sender`: [`SerializableObject`](SerializableObject.md), `property`: [`PropertyDefinition`](PropertyDefinition.md), `target`: [`PropertyBag`](../README.md#propertybag), `value`: `T`, `context`: [`BaseSerializationContext`](BaseSerializationContext.md)) => `void`

#### Type declaration

▸ (`sender`, `property`, `target`, `value`, `context`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `property` | [`PropertyDefinition`](PropertyDefinition.md) |
| `target` | [`PropertyBag`](../README.md#propertybag) |
| `value` | `T` |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

##### Returns

`void`

#### Defined in

[serialization.ts:732](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L732)

___

### sequentialNumber

• `Readonly` **sequentialNumber**: `number`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[sequentialNumber](PropertyDefinition.md#sequentialnumber)

#### Defined in

[serialization.ts:288](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L288)

___

### targetVersion

• `Readonly` **targetVersion**: [`Version`](Version.md)

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[targetVersion](PropertyDefinition.md#targetversion)

#### Defined in

[serialization.ts:729](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L729)

## Methods

### getInternalName

▸ **getInternalName**(): `string`

#### Returns

`string`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[getInternalName](PropertyDefinition.md#getinternalname)

#### Defined in

[serialization.ts:276](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L276)

___

### parse

▸ **parse**(`sender`, `source`, `context`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `source` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`T`

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[parse](PropertyDefinition.md#parse)

#### Defined in

[serialization.ts:720](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L720)

___

### toJSON

▸ **toJSON**(`sender`, `target`, `value`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `target` | [`PropertyBag`](../README.md#propertybag) |
| `value` | `T` |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`void`

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[toJSON](PropertyDefinition.md#tojson)

#### Defined in

[serialization.ts:724](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L724)
