[Adaptive Cards Javascript SDK](../README.md) / DictionaryProperty

# Class: DictionaryProperty<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

## Hierarchy

- [`PropertyDefinition`](PropertyDefinition.md)

  ↳ **`DictionaryProperty`**

## Table of contents

### Constructors

- [constructor](DictionaryProperty.md#constructor)

### Properties

- [defaultValue](DictionaryProperty.md#defaultvalue)
- [isSerializationEnabled](DictionaryProperty.md#isserializationenabled)
- [name](DictionaryProperty.md#name)
- [onGetInitialValue](DictionaryProperty.md#ongetinitialvalue)
- [sequentialNumber](DictionaryProperty.md#sequentialnumber)
- [targetVersion](DictionaryProperty.md#targetversion)

### Methods

- [getInternalName](DictionaryProperty.md#getinternalname)
- [parse](DictionaryProperty.md#parse)
- [toJSON](DictionaryProperty.md#tojson)

## Constructors

### constructor

• **new DictionaryProperty**<`T`\>(`targetVersion`, `name`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetVersion` | [`Version`](Version.md) |
| `name` | `string` |

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[constructor](PropertyDefinition.md#constructor)

#### Defined in

[components.ts:146](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L146)

## Properties

### defaultValue

• `Optional` `Readonly` **defaultValue**: `any`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[defaultValue](PropertyDefinition.md#defaultvalue)

#### Defined in

[serialization.ts:295](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L295)

___

### isSerializationEnabled

• **isSerializationEnabled**: `boolean` = `true`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[isSerializationEnabled](PropertyDefinition.md#isserializationenabled)

#### Defined in

[serialization.ts:290](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L290)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[name](PropertyDefinition.md#name)

#### Defined in

[components.ts:146](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L146)

___

### onGetInitialValue

• `Optional` `Readonly` **onGetInitialValue**: (`sender`: [`SerializableObject`](SerializableObject.md)) => `any`

#### Type declaration

▸ (`sender`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |

##### Returns

`any`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[onGetInitialValue](PropertyDefinition.md#ongetinitialvalue)

#### Defined in

[serialization.ts:296](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L296)

___

### sequentialNumber

• `Readonly` **sequentialNumber**: `number`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[sequentialNumber](PropertyDefinition.md#sequentialnumber)

#### Defined in

[serialization.ts:288](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L288)

___

### targetVersion

• `Readonly` **targetVersion**: [`Version`](Version.md)

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[targetVersion](PropertyDefinition.md#targetversion)

#### Defined in

[components.ts:146](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L146)

## Methods

### getInternalName

▸ **getInternalName**(): `string`

#### Returns

`string`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[getInternalName](PropertyDefinition.md#getinternalname)

#### Defined in

[serialization.ts:276](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L276)

___

### parse

▸ **parse**(`sender`, `source`, `context`): [`Dictionary`](../README.md#dictionary)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `source` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

[`Dictionary`](../README.md#dictionary)<`T`\>

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[parse](PropertyDefinition.md#parse)

#### Defined in

[components.ts:128](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L128)

___

### toJSON

▸ **toJSON**(`sender`, `target`, `value`, `context`, `forceDeleteIfNullOrDefault?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) | `undefined` |
| `target` | [`PropertyBag`](../README.md#propertybag) | `undefined` |
| `value` | `any` | `undefined` |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) | `undefined` |
| `forceDeleteIfNullOrDefault` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[toJSON](PropertyDefinition.md#tojson)

#### Defined in

[serialization.ts:284](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L284)
