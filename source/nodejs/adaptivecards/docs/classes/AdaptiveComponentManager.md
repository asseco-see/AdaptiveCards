[Adaptive Cards Javascript SDK](../README.md) / AdaptiveComponentManager

# Class: AdaptiveComponentManager

## Table of contents

### Constructors

- [constructor](AdaptiveComponentManager.md#constructor)

### Methods

- [getComponentUrl](AdaptiveComponentManager.md#getcomponenturl)
- [loadComponent](AdaptiveComponentManager.md#loadcomponent)

## Constructors

### constructor

• **new AdaptiveComponentManager**()

## Methods

### getComponentUrl

▸ `Static` **getComponentUrl**(`name`, `screensServiceUrl?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `screensServiceUrl?` | `string` |

#### Returns

`string`

#### Defined in

[components.ts:259](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L259)

___

### loadComponent

▸ `Static` **loadComponent**(`name`, `onSuccess`, `onError`, `screensServiceUrl?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `onSuccess` | (`component`: [`AdaptiveComponent`](AdaptiveComponent.md)) => `void` | `undefined` |
| `onError` | (`error`: `string`) => `void` | `undefined` |
| `screensServiceUrl` | `undefined` | `undefined` |

#### Returns

`void`

#### Defined in

[components.ts:268](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L268)
