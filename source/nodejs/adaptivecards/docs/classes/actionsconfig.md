[Adaptive Cards Javascript SDK](../README.md) / ActionsConfig

# Class: ActionsConfig

## Table of contents

### Constructors

- [constructor](ActionsConfig.md#constructor)

### Properties

- [actionAlignment](ActionsConfig.md#actionalignment)
- [actionsOrientation](ActionsConfig.md#actionsorientation)
- [allowTitleToWrap](ActionsConfig.md#allowtitletowrap)
- [buttonSpacing](ActionsConfig.md#buttonspacing)
- [iconPlacement](ActionsConfig.md#iconplacement)
- [iconSize](ActionsConfig.md#iconsize)
- [maxActions](ActionsConfig.md#maxactions)
- [preExpandSingleShowCardAction](ActionsConfig.md#preexpandsingleshowcardaction)
- [showCard](ActionsConfig.md#showcard)
- [spacing](ActionsConfig.md#spacing)

### Methods

- [toJSON](ActionsConfig.md#tojson)

## Constructors

### constructor

• **new ActionsConfig**(`obj?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | `any` |

#### Defined in

[host-config.ts:266](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L266)

## Properties

### actionAlignment

• **actionAlignment**: [`ActionAlignment`](../enums/ActionAlignment.md) = `Enums.ActionAlignment.Left`

#### Defined in

[host-config.ts:261](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L261)

___

### actionsOrientation

• **actionsOrientation**: [`Orientation`](../enums/Orientation.md) = `Enums.Orientation.Horizontal`

#### Defined in

[host-config.ts:260](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L260)

___

### allowTitleToWrap

• **allowTitleToWrap**: `boolean` = `false`

#### Defined in

[host-config.ts:263](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L263)

___

### buttonSpacing

• **buttonSpacing**: `number` = `20`

#### Defined in

[host-config.ts:257](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L257)

___

### iconPlacement

• **iconPlacement**: [`ActionIconPlacement`](../enums/ActionIconPlacement.md) = `Enums.ActionIconPlacement.LeftOfTitle`

#### Defined in

[host-config.ts:262](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L262)

___

### iconSize

• **iconSize**: `number` = `16`

#### Defined in

[host-config.ts:264](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L264)

___

### maxActions

• **maxActions**: `number` = `5`

#### Defined in

[host-config.ts:255](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L255)

___

### preExpandSingleShowCardAction

• `Optional` **preExpandSingleShowCardAction**: `boolean` = `false`

#### Defined in

[host-config.ts:259](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L259)

___

### showCard

• `Readonly` **showCard**: [`ShowCardActionConfig`](ShowCardActionConfig.md)

#### Defined in

[host-config.ts:258](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L258)

___

### spacing

• **spacing**: [`Spacing`](../enums/Spacing.md) = `Enums.Spacing.Default`

#### Defined in

[host-config.ts:256](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L256)

## Methods

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `actionAlignment` | `string` |
| `actionsOrientation` | `string` |
| `buttonSpacing` | `number` |
| `maxActions` | `number` |
| `preExpandSingleShowCardAction` | `undefined` \| `boolean` |
| `showCard` | [`ShowCardActionConfig`](ShowCardActionConfig.md) |
| `spacing` | `string` |

#### Defined in

[host-config.ts:291](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L291)
