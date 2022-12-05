[Adaptive Cards Javascript SDK](../README.md) / FactTextDefinition

# Class: FactTextDefinition

## Hierarchy

- [`BaseTextDefinition`](BaseTextDefinition.md)

  ↳ **`FactTextDefinition`**

  ↳↳ [`FactTitleDefinition`](FactTitleDefinition.md)

## Table of contents

### Constructors

- [constructor](FactTextDefinition.md#constructor)

### Properties

- [color](FactTextDefinition.md#color)
- [isSubtle](FactTextDefinition.md#issubtle)
- [size](FactTextDefinition.md#size)
- [weight](FactTextDefinition.md#weight)
- [wrap](FactTextDefinition.md#wrap)

### Methods

- [getDefaultWeight](FactTextDefinition.md#getdefaultweight)
- [toJSON](FactTextDefinition.md#tojson)

## Constructors

### constructor

• **new FactTextDefinition**(`obj?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | `any` |

#### Overrides

[BaseTextDefinition](BaseTextDefinition.md).[constructor](BaseTextDefinition.md#constructor)

#### Defined in

[host-config.ts:184](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L184)

## Properties

### color

• **color**: [`TextColor`](../enums/TextColor.md) = `Enums.TextColor.Default`

#### Inherited from

[BaseTextDefinition](BaseTextDefinition.md).[color](BaseTextDefinition.md#color)

#### Defined in

[host-config.ts:106](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L106)

___

### isSubtle

• **isSubtle**: `boolean` = `false`

#### Inherited from

[BaseTextDefinition](BaseTextDefinition.md).[isSubtle](BaseTextDefinition.md#issubtle)

#### Defined in

[host-config.ts:107](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L107)

___

### size

• **size**: [`TextSize`](../enums/TextSize.md) = `Enums.TextSize.Default`

#### Inherited from

[BaseTextDefinition](BaseTextDefinition.md).[size](BaseTextDefinition.md#size)

#### Defined in

[host-config.ts:105](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L105)

___

### weight

• **weight**: [`TextWeight`](../enums/TextWeight.md) = `Enums.TextWeight.Default`

#### Inherited from

[BaseTextDefinition](BaseTextDefinition.md).[weight](BaseTextDefinition.md#weight)

#### Defined in

[host-config.ts:108](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L108)

___

### wrap

• **wrap**: `boolean` = `true`

#### Defined in

[host-config.ts:182](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L182)

## Methods

### getDefaultWeight

▸ **getDefaultWeight**(): [`TextWeight`](../enums/TextWeight.md)

#### Returns

[`TextWeight`](../enums/TextWeight.md)

#### Inherited from

[BaseTextDefinition](BaseTextDefinition.md).[getDefaultWeight](BaseTextDefinition.md#getdefaultweight)

#### Defined in

[host-config.ts:119](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L119)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Overrides

[BaseTextDefinition](BaseTextDefinition.md).[toJSON](BaseTextDefinition.md#tojson)

#### Defined in

[host-config.ts:192](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L192)
