[Adaptive Cards Javascript SDK](../README.md) / RequiredInputLabelTextDefinition

# Class: RequiredInputLabelTextDefinition

## Hierarchy

- [`BaseTextDefinition`](BaseTextDefinition.md)

  ↳ **`RequiredInputLabelTextDefinition`**

## Table of contents

### Constructors

- [constructor](RequiredInputLabelTextDefinition.md#constructor)

### Properties

- [color](RequiredInputLabelTextDefinition.md#color)
- [isSubtle](RequiredInputLabelTextDefinition.md#issubtle)
- [size](RequiredInputLabelTextDefinition.md#size)
- [suffix](RequiredInputLabelTextDefinition.md#suffix)
- [suffixColor](RequiredInputLabelTextDefinition.md#suffixcolor)
- [weight](RequiredInputLabelTextDefinition.md#weight)

### Methods

- [getDefaultWeight](RequiredInputLabelTextDefinition.md#getdefaultweight)
- [toJSON](RequiredInputLabelTextDefinition.md#tojson)

## Constructors

### constructor

• **new RequiredInputLabelTextDefinition**(`obj?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | `any` |

#### Overrides

[BaseTextDefinition](BaseTextDefinition.md).[constructor](BaseTextDefinition.md#constructor)

#### Defined in

[host-config.ts:137](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L137)

## Properties

### color

• **color**: [`TextColor`](../enums/TextColor.md) = `Enums.TextColor.Default`

#### Inherited from

[BaseTextDefinition](BaseTextDefinition.md).[color](BaseTextDefinition.md#color)

#### Defined in

[host-config.ts:106](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L106)

___

### isSubtle

• **isSubtle**: `boolean` = `false`

#### Inherited from

[BaseTextDefinition](BaseTextDefinition.md).[isSubtle](BaseTextDefinition.md#issubtle)

#### Defined in

[host-config.ts:107](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L107)

___

### size

• **size**: [`TextSize`](../enums/TextSize.md) = `Enums.TextSize.Default`

#### Inherited from

[BaseTextDefinition](BaseTextDefinition.md).[size](BaseTextDefinition.md#size)

#### Defined in

[host-config.ts:105](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L105)

___

### suffix

• `Optional` **suffix**: `string` = `" *"`

#### Defined in

[host-config.ts:134](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L134)

___

### suffixColor

• **suffixColor**: [`TextColor`](../enums/TextColor.md) = `Enums.TextColor.Attention`

#### Defined in

[host-config.ts:135](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L135)

___

### weight

• **weight**: [`TextWeight`](../enums/TextWeight.md) = `Enums.TextWeight.Default`

#### Inherited from

[BaseTextDefinition](BaseTextDefinition.md).[weight](BaseTextDefinition.md#weight)

#### Defined in

[host-config.ts:108](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L108)

## Methods

### getDefaultWeight

▸ **getDefaultWeight**(): [`TextWeight`](../enums/TextWeight.md)

#### Returns

[`TextWeight`](../enums/TextWeight.md)

#### Inherited from

[BaseTextDefinition](BaseTextDefinition.md).[getDefaultWeight](BaseTextDefinition.md#getdefaultweight)

#### Defined in

[host-config.ts:119](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L119)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Overrides

[BaseTextDefinition](BaseTextDefinition.md).[toJSON](BaseTextDefinition.md#tojson)

#### Defined in

[host-config.ts:146](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L146)
