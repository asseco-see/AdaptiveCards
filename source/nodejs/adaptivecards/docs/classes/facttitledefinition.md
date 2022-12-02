[Adaptive Cards Javascript SDK](../README.md) / FactTitleDefinition

# Class: FactTitleDefinition

## Hierarchy

- [`FactTextDefinition`](FactTextDefinition.md)

  ↳ **`FactTitleDefinition`**

## Table of contents

### Constructors

- [constructor](FactTitleDefinition.md#constructor)

### Properties

- [color](FactTitleDefinition.md#color)
- [isSubtle](FactTitleDefinition.md#issubtle)
- [maxWidth](FactTitleDefinition.md#maxwidth)
- [size](FactTitleDefinition.md#size)
- [weight](FactTitleDefinition.md#weight)
- [wrap](FactTitleDefinition.md#wrap)

### Methods

- [getDefaultWeight](FactTitleDefinition.md#getdefaultweight)
- [toJSON](FactTitleDefinition.md#tojson)

## Constructors

### constructor

• **new FactTitleDefinition**(`obj?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | `any` |

#### Overrides

[FactTextDefinition](FactTextDefinition.md).[constructor](FactTextDefinition.md#constructor)

#### Defined in

[host-config.ts:204](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L204)

## Properties

### color

• **color**: [`TextColor`](../enums/TextColor.md) = `Enums.TextColor.Default`

#### Inherited from

[FactTextDefinition](FactTextDefinition.md).[color](FactTextDefinition.md#color)

#### Defined in

[host-config.ts:106](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L106)

___

### isSubtle

• **isSubtle**: `boolean` = `false`

#### Inherited from

[FactTextDefinition](FactTextDefinition.md).[isSubtle](FactTextDefinition.md#issubtle)

#### Defined in

[host-config.ts:107](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L107)

___

### maxWidth

• `Optional` **maxWidth**: `number` = `150`

#### Defined in

[host-config.ts:201](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L201)

___

### size

• **size**: [`TextSize`](../enums/TextSize.md) = `Enums.TextSize.Default`

#### Inherited from

[FactTextDefinition](FactTextDefinition.md).[size](FactTextDefinition.md#size)

#### Defined in

[host-config.ts:105](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L105)

___

### weight

• **weight**: [`TextWeight`](../enums/TextWeight.md) = `Enums.TextWeight.Bolder`

#### Overrides

[FactTextDefinition](FactTextDefinition.md).[weight](FactTextDefinition.md#weight)

#### Defined in

[host-config.ts:202](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L202)

___

### wrap

• **wrap**: `boolean` = `true`

#### Inherited from

[FactTextDefinition](FactTextDefinition.md).[wrap](FactTextDefinition.md#wrap)

#### Defined in

[host-config.ts:182](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L182)

## Methods

### getDefaultWeight

▸ **getDefaultWeight**(): [`TextWeight`](../enums/TextWeight.md)

#### Returns

[`TextWeight`](../enums/TextWeight.md)

#### Overrides

[FactTextDefinition](FactTextDefinition.md).[getDefaultWeight](FactTextDefinition.md#getdefaultweight)

#### Defined in

[host-config.ts:213](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L213)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[FactTextDefinition](FactTextDefinition.md).[toJSON](FactTextDefinition.md#tojson)

#### Defined in

[host-config.ts:192](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L192)
