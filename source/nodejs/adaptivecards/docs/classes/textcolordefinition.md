[Adaptive Cards Javascript SDK](../README.md) / TextColorDefinition

# Class: TextColorDefinition

## Hierarchy

- [`ColorDefinition`](ColorDefinition.md)

  ↳ **`TextColorDefinition`**

## Table of contents

### Constructors

- [constructor](TextColorDefinition.md#constructor)

### Properties

- [default](TextColorDefinition.md#default)
- [highlightColors](TextColorDefinition.md#highlightcolors)
- [subtle](TextColorDefinition.md#subtle)

### Methods

- [parse](TextColorDefinition.md#parse)

## Constructors

### constructor

• **new TextColorDefinition**(`defaultColor?`, `subtleColor?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultColor?` | `string` |
| `subtleColor?` | `string` |

#### Inherited from

[ColorDefinition](ColorDefinition.md).[constructor](ColorDefinition.md#constructor)

#### Defined in

[host-config.ts:26](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L26)

## Properties

### default

• **default**: `string` = `"#000000"`

#### Inherited from

[ColorDefinition](ColorDefinition.md).[default](ColorDefinition.md#default)

#### Defined in

[host-config.ts:23](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L23)

___

### highlightColors

• `Readonly` **highlightColors**: [`ColorDefinition`](ColorDefinition.md)

#### Defined in

[host-config.ts:45](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L45)

___

### subtle

• **subtle**: `string` = `"#666666"`

#### Inherited from

[ColorDefinition](ColorDefinition.md).[subtle](ColorDefinition.md#subtle)

#### Defined in

[host-config.ts:24](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L24)

## Methods

### parse

▸ **parse**(`obj?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | `any` |

#### Returns

`void`

#### Overrides

[ColorDefinition](ColorDefinition.md).[parse](ColorDefinition.md#parse)

#### Defined in

[host-config.ts:47](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L47)
