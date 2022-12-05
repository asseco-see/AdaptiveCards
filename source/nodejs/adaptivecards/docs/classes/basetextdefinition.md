[Adaptive Cards Javascript SDK](../README.md) / BaseTextDefinition

# Class: BaseTextDefinition

## Hierarchy

- **`BaseTextDefinition`**

  ↳ [`RequiredInputLabelTextDefinition`](RequiredInputLabelTextDefinition.md)

  ↳ [`FactTextDefinition`](FactTextDefinition.md)

## Table of contents

### Constructors

- [constructor](BaseTextDefinition.md#constructor)

### Properties

- [color](BaseTextDefinition.md#color)
- [isSubtle](BaseTextDefinition.md#issubtle)
- [size](BaseTextDefinition.md#size)
- [weight](BaseTextDefinition.md#weight)

### Methods

- [getDefaultWeight](BaseTextDefinition.md#getdefaultweight)
- [toJSON](BaseTextDefinition.md#tojson)

## Constructors

### constructor

• **new BaseTextDefinition**(`obj?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | `any` |

#### Defined in

[host-config.ts:110](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L110)

## Properties

### color

• **color**: [`TextColor`](../enums/TextColor.md) = `Enums.TextColor.Default`

#### Defined in

[host-config.ts:106](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L106)

___

### isSubtle

• **isSubtle**: `boolean` = `false`

#### Defined in

[host-config.ts:107](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L107)

___

### size

• **size**: [`TextSize`](../enums/TextSize.md) = `Enums.TextSize.Default`

#### Defined in

[host-config.ts:105](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L105)

___

### weight

• **weight**: [`TextWeight`](../enums/TextWeight.md) = `Enums.TextWeight.Default`

#### Defined in

[host-config.ts:108](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L108)

## Methods

### getDefaultWeight

▸ **getDefaultWeight**(): [`TextWeight`](../enums/TextWeight.md)

#### Returns

[`TextWeight`](../enums/TextWeight.md)

#### Defined in

[host-config.ts:119](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L119)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[host-config.ts:123](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L123)
