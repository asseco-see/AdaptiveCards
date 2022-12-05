[Adaptive Cards Javascript SDK](../README.md) / ValidationResults

# Class: ValidationResults

## Table of contents

### Constructors

- [constructor](ValidationResults.md#constructor)

### Properties

- [allIds](ValidationResults.md#allids)
- [validationEvents](ValidationResults.md#validationevents)

### Methods

- [addFailure](ValidationResults.md#addfailure)

## Constructors

### constructor

• **new ValidationResults**()

## Properties

### allIds

• `Readonly` **allIds**: [`Dictionary`](../README.md#dictionary)<`number`\> = `{}`

#### Defined in

[card-object.ts:11](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L11)

___

### validationEvents

• `Readonly` **validationEvents**: [`IValidationEvent`](../interfaces/IValidationEvent.md)[] = `[]`

#### Defined in

[card-object.ts:12](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L12)

## Methods

### addFailure

▸ **addFailure**(`cardObject`, `event`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardObject` | [`CardObject`](CardObject.md) |
| `event` | [`ValidationEvent`](../enums/ValidationEvent.md) |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[card-object.ts:14](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-object.ts#L14)
