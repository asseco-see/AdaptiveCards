[Adaptive Cards Javascript SDK](../README.md) / Downloader

# Class: Downloader

## Table of contents

### Constructors

- [constructor](Downloader.md#constructor)

### Properties

- [onError](Downloader.md#onerror)
- [onSuccess](Downloader.md#onsuccess)
- [url](Downloader.md#url)

### Accessors

- [data](Downloader.md#data)

### Methods

- [download](Downloader.md#download)

## Constructors

### constructor

• **new Downloader**(`url`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Defined in

[downloader.ts:22](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/downloader.ts#L22)

## Properties

### onError

• `Optional` **onError**: (`sender`: [`Downloader`](Downloader.md)) => `void`

#### Type declaration

▸ (`sender`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`Downloader`](Downloader.md) |

##### Returns

`void`

#### Defined in

[downloader.ts:19](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/downloader.ts#L19)

___

### onSuccess

• `Optional` **onSuccess**: (`sender`: [`Downloader`](Downloader.md)) => `void`

#### Type declaration

▸ (`sender`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`Downloader`](Downloader.md) |

##### Returns

`void`

#### Defined in

[downloader.ts:20](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/downloader.ts#L20)

___

### url

• `Readonly` **url**: `string`

#### Defined in

[downloader.ts:22](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/downloader.ts#L22)

## Accessors

### data

• `get` **data**(): `string`

#### Returns

`string`

#### Defined in

[downloader.ts:52](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/downloader.ts#L52)

## Methods

### download

▸ **download**(): `void`

#### Returns

`void`

#### Defined in

[downloader.ts:24](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/downloader.ts#L24)
