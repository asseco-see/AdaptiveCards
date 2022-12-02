[Adaptive Cards Javascript SDK](../README.md) / IAdaptiveCard

# Interface: IAdaptiveCard

## Hierarchy

- [`ICardElement`](ICardElement.md)

  ↳ **`IAdaptiveCard`**

## Table of contents

### Properties

- [actions](IAdaptiveCard.md#actions)
- [backgroundImage](IAdaptiveCard.md#backgroundimage)
- [body](IAdaptiveCard.md#body)
- [height](IAdaptiveCard.md#height)
- [horizontalAlignment](IAdaptiveCard.md#horizontalalignment)
- [id](IAdaptiveCard.md#id)
- [separator](IAdaptiveCard.md#separator)
- [spacing](IAdaptiveCard.md#spacing)
- [speak](IAdaptiveCard.md#speak)
- [type](IAdaptiveCard.md#type)
- [version](IAdaptiveCard.md#version)

## Properties

### actions

• `Optional` **actions**: (`ISubmitAction` \| `IOpenUrlAction` \| `IShowCardAction`)[]

#### Defined in

[schema.ts:170](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/schema.ts#L170)

___

### backgroundImage

• `Optional` **backgroundImage**: `string` \| `IBackgroundImage`

#### Defined in

[schema.ts:168](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/schema.ts#L168)

___

### body

• `Optional` **body**: (`ITextBlock` \| `IContainer` \| `IColumnSet` \| `IFactSet` \| `IImage` \| `IImageSet`)[]

#### Defined in

[schema.ts:169](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/schema.ts#L169)

___

### height

• `Optional` **height**: ``"auto"`` \| ``"stretch"``

#### Inherited from

[ICardElement](ICardElement.md).[height](ICardElement.md#height)

#### Defined in

[schema.ts:39](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/schema.ts#L39)

___

### horizontalAlignment

• `Optional` **horizontalAlignment**: `HorizontalAlignment`

#### Inherited from

[ICardElement](ICardElement.md).[horizontalAlignment](ICardElement.md#horizontalalignment)

#### Defined in

[schema.ts:36](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/schema.ts#L36)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[ICardElement](ICardElement.md).[id](ICardElement.md#id)

#### Defined in

[schema.ts:34](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/schema.ts#L34)

___

### separator

• `Optional` **separator**: `boolean`

#### Inherited from

[ICardElement](ICardElement.md).[separator](ICardElement.md#separator)

#### Defined in

[schema.ts:38](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/schema.ts#L38)

___

### spacing

• `Optional` **spacing**: `Spacing`

#### Inherited from

[ICardElement](ICardElement.md).[spacing](ICardElement.md#spacing)

#### Defined in

[schema.ts:37](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/schema.ts#L37)

___

### speak

• `Optional` **speak**: `string`

#### Overrides

[ICardElement](ICardElement.md).[speak](ICardElement.md#speak)

#### Defined in

[schema.ts:171](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/schema.ts#L171)

___

### type

• **type**: ``"AdaptiveCard"``

#### Defined in

[schema.ts:166](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/schema.ts#L166)

___

### version

• `Optional` **version**: `string` \| `IVersion`

#### Defined in

[schema.ts:167](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/schema.ts#L167)
