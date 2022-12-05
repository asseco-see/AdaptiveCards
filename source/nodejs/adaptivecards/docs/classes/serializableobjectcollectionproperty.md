[Adaptive Cards Javascript SDK](../README.md) / SerializableObjectCollectionProperty

# Class: SerializableObjectCollectionProperty

## Hierarchy

- [`PropertyDefinition`](PropertyDefinition.md)

  ↳ **`SerializableObjectCollectionProperty`**

## Table of contents

### Constructors

- [constructor](SerializableObjectCollectionProperty.md#constructor)

### Properties

- [defaultValue](SerializableObjectCollectionProperty.md#defaultvalue)
- [isSerializationEnabled](SerializableObjectCollectionProperty.md#isserializationenabled)
- [name](SerializableObjectCollectionProperty.md#name)
- [objectType](SerializableObjectCollectionProperty.md#objecttype)
- [onGetInitialValue](SerializableObjectCollectionProperty.md#ongetinitialvalue)
- [onItemAdded](SerializableObjectCollectionProperty.md#onitemadded)
- [sequentialNumber](SerializableObjectCollectionProperty.md#sequentialnumber)
- [targetVersion](SerializableObjectCollectionProperty.md#targetversion)

### Methods

- [getInternalName](SerializableObjectCollectionProperty.md#getinternalname)
- [parse](SerializableObjectCollectionProperty.md#parse)
- [toJSON](SerializableObjectCollectionProperty.md#tojson)

## Constructors

### constructor

• **new SerializableObjectCollectionProperty**(`targetVersion`, `name`, `objectType`, `onItemAdded?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetVersion` | [`Version`](Version.md) |
| `name` | `string` |
| `objectType` | [`SerializableObjectType`](../README.md#serializableobjecttype) |
| `onItemAdded?` | (`sender`: [`SerializableObject`](SerializableObject.md), `item`: [`SerializableObject`](SerializableObject.md)) => `void` |

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[constructor](PropertyDefinition.md#constructor)

#### Defined in

[serialization.ts:706](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L706)

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

[serialization.ts:708](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L708)

___

### objectType

• `Readonly` **objectType**: [`SerializableObjectType`](../README.md#serializableobjecttype)

#### Defined in

[serialization.ts:709](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L709)

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

### onItemAdded

• `Optional` `Readonly` **onItemAdded**: (`sender`: [`SerializableObject`](SerializableObject.md), `item`: [`SerializableObject`](SerializableObject.md)) => `void`

#### Type declaration

▸ (`sender`, `item`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `item` | [`SerializableObject`](SerializableObject.md) |

##### Returns

`void`

#### Defined in

[serialization.ts:710](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L710)

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

[serialization.ts:707](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L707)

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

▸ **parse**(`sender`, `source`, `context`): `undefined` \| [`SerializableObject`](SerializableObject.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `source` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`undefined` \| [`SerializableObject`](SerializableObject.md)[]

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[parse](PropertyDefinition.md#parse)

#### Defined in

[serialization.ts:681](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L681)

___

### toJSON

▸ **toJSON**(`sender`, `target`, `value`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `target` | [`PropertyBag`](../README.md#propertybag) |
| `value` | `undefined` \| [`SerializableObject`](SerializableObject.md)[] |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`void`

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[toJSON](PropertyDefinition.md#tojson)

#### Defined in

[serialization.ts:702](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L702)
