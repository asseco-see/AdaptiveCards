[Adaptive Cards Javascript SDK](../README.md) / BaseSerializationContext

# Class: BaseSerializationContext

## Hierarchy

- **`BaseSerializationContext`**

  ↳ [`SerializationContext`](SerializationContext.md)

## Table of contents

### Constructors

- [constructor](BaseSerializationContext.md#constructor)

### Properties

- [targetVersion](BaseSerializationContext.md#targetversion)
- [toJSONOriginalParam](BaseSerializationContext.md#tojsonoriginalparam)

### Accessors

- [eventCount](BaseSerializationContext.md#eventcount)

### Methods

- [clearEvents](BaseSerializationContext.md#clearevents)
- [getEventAt](BaseSerializationContext.md#geteventat)
- [logEvent](BaseSerializationContext.md#logevent)
- [logParseEvent](BaseSerializationContext.md#logparseevent)
- [serializeArray](BaseSerializationContext.md#serializearray)
- [serializeEnum](BaseSerializationContext.md#serializeenum)
- [serializeNumber](BaseSerializationContext.md#serializenumber)
- [serializeObject](BaseSerializationContext.md#serializeobject)
- [serializeValue](BaseSerializationContext.md#serializevalue)

## Constructors

### constructor

• **new BaseSerializationContext**(`targetVersion?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `targetVersion` | [`Version`](Version.md) | `Versions.latest` |

#### Defined in

[serialization.ts:264](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L264)

## Properties

### targetVersion

• **targetVersion**: [`Version`](Version.md) = `Versions.latest`

#### Defined in

[serialization.ts:264](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L264)

___

### toJSONOriginalParam

• **toJSONOriginalParam**: `any`

#### Defined in

[serialization.ts:133](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L133)

## Accessors

### eventCount

• `get` **eventCount**(): `number`

#### Returns

`number`

#### Defined in

[serialization.ts:266](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L266)

## Methods

### clearEvents

▸ **clearEvents**(): `void`

#### Returns

`void`

#### Defined in

[serialization.ts:237](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L237)

___

### getEventAt

▸ **getEventAt**(`index`): [`IValidationEvent`](../interfaces/IValidationEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`IValidationEvent`](../interfaces/IValidationEvent.md)

#### Defined in

[serialization.ts:260](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L260)

___

### logEvent

▸ **logEvent**(`source`, `phase`, `event`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `undefined` \| [`SerializableObject`](SerializableObject.md) |
| `phase` | [`ValidationPhase`](../enums/ValidationPhase.md) |
| `event` | [`ValidationEvent`](../enums/ValidationEvent.md) |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[serialization.ts:241](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L241)

___

### logParseEvent

▸ **logParseEvent**(`source`, `event`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `undefined` \| [`SerializableObject`](SerializableObject.md) |
| `event` | [`ValidationEvent`](../enums/ValidationEvent.md) |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[serialization.ts:256](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L256)

___

### serializeArray

▸ **serializeArray**(`target`, `propertyName`, `propertyValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyName` | `string` |
| `propertyValue` | `undefined` \| `any`[] |

#### Returns

`void`

#### Defined in

[serialization.ts:182](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L182)

___

### serializeEnum

▸ **serializeEnum**(`enumType`, `target`, `propertyName`, `propertyValue`, `defaultValue?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `enumType` | `Object` | `undefined` |
| `target` | `Object` | `undefined` |
| `propertyName` | `string` | `undefined` |
| `propertyValue` | `undefined` \| `number` | `undefined` |
| `defaultValue` | `undefined` \| `number` | `undefined` |

#### Returns

`void`

#### Defined in

[serialization.ts:155](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L155)

___

### serializeNumber

▸ **serializeNumber**(`target`, `propertyName`, `propertyValue`, `defaultValue?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | `Object` | `undefined` |
| `propertyName` | `string` | `undefined` |
| `propertyValue` | `undefined` \| `number` | `undefined` |
| `defaultValue` | `undefined` \| `number` | `undefined` |

#### Returns

`void`

#### Defined in

[serialization.ts:146](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L146)

___

### serializeObject

▸ **serializeObject**(`target`, `propertyName`, `propertyValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyName` | `string` |
| `propertyValue` | `undefined` \| [`SerializableObject`](SerializableObject.md) |

#### Returns

`void`

#### Defined in

[serialization.ts:215](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L215)

___

### serializeValue

▸ **serializeValue**(`target`, `propertyName`, `propertyValue`, `defaultValue?`, `forceDeleteIfNullOrDefault?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | `Object` | `undefined` |
| `propertyName` | `string` | `undefined` |
| `propertyValue` | `any` | `undefined` |
| `defaultValue` | `any` | `undefined` |
| `forceDeleteIfNullOrDefault` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[serialization.ts:135](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L135)
