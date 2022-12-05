[Adaptive Cards Javascript SDK](../README.md) / ShowCardActionConfig

# Class: ShowCardActionConfig

## Table of contents

### Constructors

- [constructor](ShowCardActionConfig.md#constructor)

### Properties

- [actionMode](ShowCardActionConfig.md#actionmode)
- [inlineTopMargin](ShowCardActionConfig.md#inlinetopmargin)
- [style](ShowCardActionConfig.md#style)

### Methods

- [toJSON](ShowCardActionConfig.md#tojson)

## Constructors

### constructor

• **new ShowCardActionConfig**(`obj?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | `any` |

#### Defined in

[host-config.ts:237](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L237)

## Properties

### actionMode

• **actionMode**: [`ShowCardActionMode`](../enums/ShowCardActionMode.md) = `Enums.ShowCardActionMode.Inline`

#### Defined in

[host-config.ts:233](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L233)

___

### inlineTopMargin

• **inlineTopMargin**: `number` = `16`

#### Defined in

[host-config.ts:234](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L234)

___

### style

• `Optional` **style**: `string` = `Enums.ContainerStyle.Emphasis`

#### Defined in

[host-config.ts:235](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L235)

## Methods

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `actionMode` | `string` |
| `inlineTopMargin` | `number` |
| `style` | `undefined` \| `string` |

#### Defined in

[host-config.ts:245](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L245)
