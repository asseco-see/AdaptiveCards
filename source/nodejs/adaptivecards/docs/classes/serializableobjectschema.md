[Adaptive Cards Javascript SDK](../README.md) / SerializableObjectSchema

# Class: SerializableObjectSchema

## Table of contents

### Constructors

- [constructor](SerializableObjectSchema.md#constructor)

### Methods

- [add](SerializableObjectSchema.md#add)
- [getCount](SerializableObjectSchema.md#getcount)
- [getItemAt](SerializableObjectSchema.md#getitemat)
- [indexOf](SerializableObjectSchema.md#indexof)
- [remove](SerializableObjectSchema.md#remove)

## Constructors

### constructor

• **new SerializableObjectSchema**()

## Methods

### add

▸ **add**(`...properties`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...properties` | [`PropertyDefinition`](PropertyDefinition.md)[] |

#### Returns

`void`

#### Defined in

[serialization.ts:760](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L760)

___

### getCount

▸ **getCount**(): `number`

#### Returns

`number`

#### Defined in

[serialization.ts:787](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L787)

___

### getItemAt

▸ **getItemAt**(`index`): [`PropertyDefinition`](PropertyDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`PropertyDefinition`](PropertyDefinition.md)

#### Defined in

[serialization.ts:783](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L783)

___

### indexOf

▸ **indexOf**(`property`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`PropertyDefinition`](PropertyDefinition.md) |

#### Returns

`number`

#### Defined in

[serialization.ts:750](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L750)

___

### remove

▸ **remove**(`...properties`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...properties` | [`PropertyDefinition`](PropertyDefinition.md)[] |

#### Returns

`void`

#### Defined in

[serialization.ts:768](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L768)
