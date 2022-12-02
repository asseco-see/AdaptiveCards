[Adaptive Cards Javascript SDK](../README.md) / ContainerStyleSet

# Class: ContainerStyleSet

## Table of contents

### Constructors

- [constructor](ContainerStyleSet.md#constructor)

### Accessors

- [default](ContainerStyleSet.md#default)
- [emphasis](ContainerStyleSet.md#emphasis)

### Methods

- [getStyleByName](ContainerStyleSet.md#getstylebyname)
- [toJSON](ContainerStyleSet.md#tojson)

## Constructors

### constructor

• **new ContainerStyleSet**(`obj?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | `any` |

#### Defined in

[host-config.ts:391](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L391)

## Accessors

### default

• `get` **default**(): [`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Returns

[`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Defined in

[host-config.ts:462](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L462)

___

### emphasis

• `get` **emphasis**(): [`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Returns

[`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Defined in

[host-config.ts:466](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L466)

## Methods

### getStyleByName

▸ **getStyleByName**(`name`, `defaultValue?`): [`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `undefined` \| `string` |
| `defaultValue?` | [`ContainerStyleDefinition`](ContainerStyleDefinition.md) |

#### Returns

[`ContainerStyleDefinition`](ContainerStyleDefinition.md)

#### Defined in

[host-config.ts:453](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L453)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[host-config.ts:428](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/host-config.ts#L428)
