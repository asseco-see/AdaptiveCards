[Adaptive Cards Javascript SDK](../README.md) / ActionCollection

# Class: ActionCollection

## Table of contents

### Constructors

- [constructor](ActionCollection.md#constructor)

### Properties

- [buttons](ActionCollection.md#buttons)
- [items](ActionCollection.md#items)

### Accessors

- [expandedAction](ActionCollection.md#expandedaction)
- [renderedActionCount](ActionCollection.md#renderedactioncount)

### Methods

- [actionExecuted](ActionCollection.md#actionexecuted)
- [addAction](ActionCollection.md#addaction)
- [clear](ActionCollection.md#clear)
- [getActionById](ActionCollection.md#getactionbyid)
- [getAllInputs](ActionCollection.md#getallinputs)
- [getResourceInformation](ActionCollection.md#getresourceinformation)
- [parse](ActionCollection.md#parse)
- [removeAction](ActionCollection.md#removeaction)
- [render](ActionCollection.md#render)
- [toJSON](ActionCollection.md#tojson)
- [validateProperties](ActionCollection.md#validateproperties)

## Constructors

### constructor

• **new ActionCollection**(`owner`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | [`CardElement`](CardElement.md) |

#### Defined in

[card-elements.ts:4950](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4950)

## Properties

### buttons

• **buttons**: `ActionButton`[] = `[]`

#### Defined in

[card-elements.ts:4948](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4948)

___

### items

• **items**: [`Action`](Action.md)[] = `[]`

#### Defined in

[card-elements.ts:4947](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4947)

## Accessors

### expandedAction

• `get` **expandedAction**(): `undefined` \| [`ShowCardAction`](ShowCardAction.md)

#### Returns

`undefined` \| [`ShowCardAction`](ShowCardAction.md)

#### Defined in

[card-elements.ts:5274](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5274)

___

### renderedActionCount

• `get` **renderedActionCount**(): `number`

#### Returns

`number`

#### Defined in

[card-elements.ts:5270](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5270)

## Methods

### actionExecuted

▸ **actionExecuted**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](Action.md) |

#### Returns

`void`

#### Defined in

[card-elements.ts:4954](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4954)

___

### addAction

▸ **addAction**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](Action.md) |

#### Returns

`void`

#### Defined in

[card-elements.ts:5193](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5193)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[card-elements.ts:5240](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5240)

___

### getActionById

▸ **getActionById**(`id`): `undefined` \| [`Action`](Action.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Action`](Action.md)

#### Defined in

[card-elements.ts:4990](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4990)

___

### getAllInputs

▸ **getAllInputs**(`processActions?`): [`Input`](Input.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `processActions` | `boolean` | `true` |

#### Returns

[`Input`](Input.md)[]

#### Defined in

[card-elements.ts:5248](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5248)

___

### getResourceInformation

▸ **getResourceInformation**(): [`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Returns

[`IResourceInformation`](../interfaces/IResourceInformation.md)[]

#### Defined in

[card-elements.ts:5260](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5260)

___

### parse

▸ **parse**(`source`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `any` |
| `context` | [`SerializationContext`](SerializationContext.md) |

#### Returns

`void`

#### Defined in

[card-elements.ts:4968](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4968)

___

### removeAction

▸ **removeAction**(`action`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](Action.md) |

#### Returns

`boolean`

#### Defined in

[card-elements.ts:5212](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5212)

___

### render

▸ **render**(`orientation`, `isDesignMode`): `undefined` \| `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `orientation` | [`Orientation`](../enums/Orientation.md) |
| `isDesignMode` | `boolean` |

#### Returns

`undefined` \| `HTMLElement`

#### Defined in

[card-elements.ts:5031](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5031)

___

### toJSON

▸ **toJSON**(`target`, `propertyName`, `context`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`PropertyBag`](../README.md#propertybag) |
| `propertyName` | `string` |
| `context` | [`SerializationContext`](SerializationContext.md) |

#### Returns

`any`

#### Defined in

[card-elements.ts:4986](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L4986)

___

### validateProperties

▸ **validateProperties**(`context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ValidationResults`](ValidationResults.md) |

#### Returns

`void`

#### Defined in

[card-elements.ts:5004](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/card-elements.ts#L5004)
