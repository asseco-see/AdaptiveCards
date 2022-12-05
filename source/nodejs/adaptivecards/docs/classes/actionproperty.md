[Adaptive Cards Javascript SDK](../README.md) / ActionProperty

# Class: ActionProperty

## Hierarchy

- [`PropertyDefinition`](PropertyDefinition.md)

  ↳ **`ActionProperty`**

## Table of contents

### Constructors

- [constructor](ActionProperty.md#constructor)

### Properties

- [defaultValue](ActionProperty.md#defaultvalue)
- [forbiddenActionTypes](ActionProperty.md#forbiddenactiontypes)
- [isSerializationEnabled](ActionProperty.md#isserializationenabled)
- [name](ActionProperty.md#name)
- [onGetInitialValue](ActionProperty.md#ongetinitialvalue)
- [sequentialNumber](ActionProperty.md#sequentialnumber)
- [targetVersion](ActionProperty.md#targetversion)

### Methods

- [getInternalName](ActionProperty.md#getinternalname)
- [parse](ActionProperty.md#parse)
- [toJSON](ActionProperty.md#tojson)

## Constructors

### constructor

• **new ActionProperty**(`targetVersion`, `name`, `forbiddenActionTypes?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `targetVersion` | [`Version`](Version.md) | `undefined` |
| `name` | `string` | `undefined` |
| `forbiddenActionTypes` | `string`[] | `[]` |

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[constructor](PropertyDefinition.md#constructor)

#### Defined in

[card-elements.ts:727](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L727)

## Properties

### defaultValue

• `Optional` `Readonly` **defaultValue**: `any`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[defaultValue](PropertyDefinition.md#defaultvalue)

#### Defined in

[serialization.ts:295](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L295)

___

### forbiddenActionTypes

• `Readonly` **forbiddenActionTypes**: `string`[] = `[]`

#### Defined in

[card-elements.ts:730](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L730)

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

[card-elements.ts:729](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L729)

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

[card-elements.ts:728](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L728)

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

▸ **parse**(`sender`, `source`, `context`): `undefined` \| [`Action`](Action.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `source` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`SerializationContext`](SerializationContext.md) |

#### Returns

`undefined` \| [`Action`](Action.md)

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[parse](PropertyDefinition.md#parse)

#### Defined in

[card-elements.ts:713](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L713)

___

### toJSON

▸ **toJSON**(`sender`, `target`, `value`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `target` | [`PropertyBag`](../README.md#propertybag) |
| `value` | `undefined` \| [`Action`](Action.md) |
| `context` | [`SerializationContext`](SerializationContext.md) |

#### Returns

`void`

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[toJSON](PropertyDefinition.md#tojson)

#### Defined in

[card-elements.ts:723](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L723)
