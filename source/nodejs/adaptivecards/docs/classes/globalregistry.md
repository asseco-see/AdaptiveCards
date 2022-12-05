[Adaptive Cards Javascript SDK](../README.md) / GlobalRegistry

# Class: GlobalRegistry

## Table of contents

### Constructors

- [constructor](GlobalRegistry.md#constructor)

### Properties

- [actions](GlobalRegistry.md#actions)
- [elements](GlobalRegistry.md#elements)

### Methods

- [populateWithDefaultActions](GlobalRegistry.md#populatewithdefaultactions)
- [populateWithDefaultElements](GlobalRegistry.md#populatewithdefaultelements)
- [populateWithExtension](GlobalRegistry.md#populatewithextension)
- [reset](GlobalRegistry.md#reset)

## Constructors

### constructor

• **new GlobalRegistry**()

## Properties

### actions

▪ `Static` `Readonly` **actions**: [`CardObjectRegistry`](CardObjectRegistry.md)<[`Action`](Action.md)\>

#### Defined in

[card-elements.ts:7610](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7610)

___

### elements

▪ `Static` `Readonly` **elements**: [`CardObjectRegistry`](CardObjectRegistry.md)<[`CardElement`](CardElement.md)\>

#### Defined in

[card-elements.ts:7609](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7609)

## Methods

### populateWithDefaultActions

▸ `Static` **populateWithDefaultActions**(`registry`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `registry` | [`CardObjectRegistry`](CardObjectRegistry.md)<[`Action`](Action.md)\> |

#### Returns

`void`

#### Defined in

[card-elements.ts:7471](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7471)

___

### populateWithDefaultElements

▸ `Static` **populateWithDefaultElements**(`registry`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `registry` | [`CardObjectRegistry`](CardObjectRegistry.md)<[`CardElement`](CardElement.md)\> |

#### Returns

`void`

#### Defined in

[card-elements.ts:7445](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7445)

___

### populateWithExtension

▸ `Static` **populateWithExtension**(`registry`, `definitions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `registry` | [`CardObjectRegistry`](CardObjectRegistry.md)<[`CardElement`](CardElement.md) \| [`Action`](Action.md)\> |
| `definitions` | `any` |

#### Returns

`void`

#### Defined in

[card-elements.ts:7480](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7480)

___

### reset

▸ `Static` **reset**(): `void`

#### Returns

`void`

#### Defined in

[card-elements.ts:7612](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7612)
