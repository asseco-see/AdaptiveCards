[Adaptive Cards Javascript SDK](../README.md) / CustomCardElementRegistry

# Class: CustomCardElementRegistry

## Table of contents

### Constructors

- [constructor](CustomCardElementRegistry.md#constructor)

### Properties

- [cardElementRegistry](CustomCardElementRegistry.md#cardelementregistry)
- [subscriptions](CustomCardElementRegistry.md#subscriptions)

### Methods

- [addExtension](CustomCardElementRegistry.md#addextension)
- [subscribe](CustomCardElementRegistry.md#subscribe)

## Constructors

### constructor

• **new CustomCardElementRegistry**()

## Properties

### cardElementRegistry

▪ `Static` **cardElementRegistry**: `Map`<`string`, `any`\>

#### Defined in

[custom-card-element-registry.ts:2](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/custom-card-element-registry.ts#L2)

___

### subscriptions

▪ `Static` **subscriptions**: `any`[] = `[]`

#### Defined in

[custom-card-element-registry.ts:3](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/custom-card-element-registry.ts#L3)

## Methods

### addExtension

▸ `Static` **addExtension**(`name`, `cardElement`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `cardElement` | `any` |

#### Returns

`void`

#### Defined in

[custom-card-element-registry.ts:9](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/custom-card-element-registry.ts#L9)

___

### subscribe

▸ `Static` **subscribe**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `any` |

#### Returns

`void`

#### Defined in

[custom-card-element-registry.ts:5](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/custom-card-element-registry.ts#L5)
