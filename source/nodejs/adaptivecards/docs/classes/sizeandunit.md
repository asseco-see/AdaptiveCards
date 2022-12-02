[Adaptive Cards Javascript SDK](../README.md) / SizeAndUnit

# Class: SizeAndUnit

## Table of contents

### Constructors

- [constructor](SizeAndUnit.md#constructor)

### Properties

- [physicalSize](SizeAndUnit.md#physicalsize)
- [unit](SizeAndUnit.md#unit)

### Methods

- [parse](SizeAndUnit.md#parse)

## Constructors

### constructor

• **new SizeAndUnit**(`physicalSize`, `unit`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `physicalSize` | `number` |
| `unit` | [`SizeUnit`](../enums/SizeUnit.md) |

#### Defined in

[shared.ts:208](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L208)

## Properties

### physicalSize

• **physicalSize**: `number`

#### Defined in

[shared.ts:176](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L176)

___

### unit

• **unit**: [`SizeUnit`](../enums/SizeUnit.md)

#### Defined in

[shared.ts:177](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L177)

## Methods

### parse

▸ `Static` **parse**(`input`, `requireUnitSpecifier?`): [`SizeAndUnit`](SizeAndUnit.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `string` | `undefined` |
| `requireUnitSpecifier` | `boolean` | `false` |

#### Returns

[`SizeAndUnit`](SizeAndUnit.md)

#### Defined in

[shared.ts:179](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L179)
