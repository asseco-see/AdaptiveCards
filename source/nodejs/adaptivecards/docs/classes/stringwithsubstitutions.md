[Adaptive Cards Javascript SDK](../README.md) / StringWithSubstitutions

# Class: StringWithSubstitutions

## Table of contents

### Constructors

- [constructor](StringWithSubstitutions.md#constructor)

### Methods

- [get](StringWithSubstitutions.md#get)
- [getOriginal](StringWithSubstitutions.md#getoriginal)
- [getReferencedInputs](StringWithSubstitutions.md#getreferencedinputs)
- [set](StringWithSubstitutions.md#set)
- [substituteInputValues](StringWithSubstitutions.md#substituteinputvalues)

## Constructors

### constructor

• **new StringWithSubstitutions**()

## Methods

### get

▸ **get**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[shared.ts:126](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/shared.ts#L126)

___

### getOriginal

▸ **getOriginal**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[shared.ts:122](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/shared.ts#L122)

___

### getReferencedInputs

▸ **getReferencedInputs**(`inputs`, `referencedInputs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [`IInput`](../interfaces/IInput.md)[] |
| `referencedInputs` | [`Dictionary`](../README.md#dictionary)<[`IInput`](../interfaces/IInput.md)\> |

#### Returns

`void`

#### Defined in

[shared.ts:71](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/shared.ts#L71)

___

### set

▸ **set**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[shared.ts:135](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/shared.ts#L135)

___

### substituteInputValues

▸ **substituteInputValues**(`inputs`, `contentType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [`Dictionary`](../README.md#dictionary)<[`IInput`](../interfaces/IInput.md)\> |
| `contentType` | `string` |

#### Returns

`void`

#### Defined in

[shared.ts:85](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/shared.ts#L85)
