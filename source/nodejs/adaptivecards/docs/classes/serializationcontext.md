[Adaptive Cards Javascript SDK](../README.md) / SerializationContext

# Class: SerializationContext

## Hierarchy

- [`BaseSerializationContext`](BaseSerializationContext.md)

  ↳ **`SerializationContext`**

## Table of contents

### Constructors

- [constructor](SerializationContext.md#constructor)

### Properties

- [onParseAction](SerializationContext.md#onparseaction)
- [onParseElement](SerializationContext.md#onparseelement)
- [targetVersion](SerializationContext.md#targetversion)
- [toJSONOriginalParam](SerializationContext.md#tojsonoriginalparam)

### Accessors

- [actionRegistry](SerializationContext.md#actionregistry)
- [elementRegistry](SerializationContext.md#elementregistry)
- [eventCount](SerializationContext.md#eventcount)

### Methods

- [cardObjectParsed](SerializationContext.md#cardobjectparsed)
- [clearEvents](SerializationContext.md#clearevents)
- [getEventAt](SerializationContext.md#geteventat)
- [logEvent](SerializationContext.md#logevent)
- [logParseEvent](SerializationContext.md#logparseevent)
- [parseAction](SerializationContext.md#parseaction)
- [parseCardObject](SerializationContext.md#parsecardobject)
- [parseElement](SerializationContext.md#parseelement)
- [serializeArray](SerializationContext.md#serializearray)
- [serializeEnum](SerializationContext.md#serializeenum)
- [serializeNumber](SerializationContext.md#serializenumber)
- [serializeObject](SerializationContext.md#serializeobject)
- [serializeValue](SerializationContext.md#serializevalue)
- [setActionRegistry](SerializationContext.md#setactionregistry)
- [setElementRegistry](SerializationContext.md#setelementregistry)

## Constructors

### constructor

• **new SerializationContext**(`targetVersion?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `targetVersion` | [`Version`](Version.md) | `Versions.latest` |

#### Inherited from

[BaseSerializationContext](BaseSerializationContext.md).[constructor](BaseSerializationContext.md#constructor)

#### Defined in

[serialization.ts:264](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L264)

## Properties

### onParseAction

• `Optional` **onParseAction**: (`action`: [`Action`](Action.md), `source`: `any`, `context`: [`SerializationContext`](SerializationContext.md)) => `void`

#### Type declaration

▸ (`action`, `source`, `context`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](Action.md) |
| `source` | `any` |
| `context` | [`SerializationContext`](SerializationContext.md) |

##### Returns

`void`

#### Defined in

[card-elements.ts:7697](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7697)

___

### onParseElement

• `Optional` **onParseElement**: (`element`: [`CardElement`](CardElement.md), `source`: `any`, `context`: [`SerializationContext`](SerializationContext.md)) => `void`

#### Type declaration

▸ (`element`, `source`, `context`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`CardElement`](CardElement.md) |
| `source` | `any` |
| `context` | [`SerializationContext`](SerializationContext.md) |

##### Returns

`void`

#### Defined in

[card-elements.ts:7698](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7698)

___

### targetVersion

• **targetVersion**: [`Version`](Version.md) = `Versions.latest`

#### Inherited from

[BaseSerializationContext](BaseSerializationContext.md).[targetVersion](BaseSerializationContext.md#targetversion)

#### Defined in

[serialization.ts:264](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L264)

___

### toJSONOriginalParam

• **toJSONOriginalParam**: `any`

#### Inherited from

[BaseSerializationContext](BaseSerializationContext.md).[toJSONOriginalParam](BaseSerializationContext.md#tojsonoriginalparam)

#### Defined in

[serialization.ts:133](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L133)

## Accessors

### actionRegistry

• `get` **actionRegistry**(): [`CardObjectRegistry`](CardObjectRegistry.md)<[`Action`](Action.md)\>

#### Returns

[`CardObjectRegistry`](CardObjectRegistry.md)<[`Action`](Action.md)\>

#### Defined in

[card-elements.ts:7787](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7787)

___

### elementRegistry

• `get` **elementRegistry**(): [`CardObjectRegistry`](CardObjectRegistry.md)<[`CardElement`](CardElement.md)\>

#### Returns

[`CardObjectRegistry`](CardObjectRegistry.md)<[`CardElement`](CardElement.md)\>

#### Defined in

[card-elements.ts:7777](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7777)

___

### eventCount

• `get` **eventCount**(): `number`

#### Returns

`number`

#### Inherited from

BaseSerializationContext.eventCount

#### Defined in

[serialization.ts:266](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L266)

## Methods

### cardObjectParsed

▸ `Protected` **cardObjectParsed**(`o`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`SerializableObject`](SerializableObject.md) |
| `source` | `any` |

#### Returns

`void`

#### Defined in

[card-elements.ts:7688](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7688)

___

### clearEvents

▸ **clearEvents**(): `void`

#### Returns

`void`

#### Inherited from

[BaseSerializationContext](BaseSerializationContext.md).[clearEvents](BaseSerializationContext.md#clearevents)

#### Defined in

[serialization.ts:237](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L237)

___

### getEventAt

▸ **getEventAt**(`index`): [`IValidationEvent`](../interfaces/IValidationEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`IValidationEvent`](../interfaces/IValidationEvent.md)

#### Inherited from

[BaseSerializationContext](BaseSerializationContext.md).[getEventAt](BaseSerializationContext.md#geteventat)

#### Defined in

[serialization.ts:260](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L260)

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

#### Inherited from

[BaseSerializationContext](BaseSerializationContext.md).[logEvent](BaseSerializationContext.md#logevent)

#### Defined in

[serialization.ts:241](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L241)

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

#### Inherited from

[BaseSerializationContext](BaseSerializationContext.md).[logParseEvent](BaseSerializationContext.md#logparseevent)

#### Defined in

[serialization.ts:256](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L256)

___

### parseAction

▸ **parseAction**(`parent`, `source`, `forbiddenActionTypes`, `allowFallback`): `undefined` \| [`Action`](Action.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`CardElement`](CardElement.md) |
| `source` | `any` |
| `forbiddenActionTypes` | `string`[] |
| `allowFallback` | `boolean` |

#### Returns

`undefined` \| [`Action`](Action.md)

#### Defined in

[card-elements.ts:7748](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7748)

___

### parseCardObject

▸ **parseCardObject**<`T`\>(`parent`, `source`, `forbiddenTypeNames`, `allowFallback`, `createInstanceCallback`, `logParseEvent`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CardObject`](CardObject.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `undefined` \| [`CardElement`](CardElement.md) |
| `source` | `any` |
| `forbiddenTypeNames` | `string`[] |
| `allowFallback` | `boolean` |
| `createInstanceCallback` | (`typeName`: `string`) => `undefined` \| `T` |
| `logParseEvent` | (`typeName`: `string`, `errorType`: `TypeErrorType`) => `void` |

#### Returns

`undefined` \| `T`

#### Defined in

[card-elements.ts:7700](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7700)

___

### parseElement

▸ **parseElement**(`parent`, `source`, `allowFallback`): `undefined` \| [`CardElement`](CardElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `undefined` \| [`CardElement`](CardElement.md) |
| `source` | `any` |
| `allowFallback` | `boolean` |

#### Returns

`undefined` \| [`CardElement`](CardElement.md)

#### Defined in

[card-elements.ts:7722](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7722)

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

#### Inherited from

[BaseSerializationContext](BaseSerializationContext.md).[serializeArray](BaseSerializationContext.md#serializearray)

#### Defined in

[serialization.ts:182](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L182)

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

#### Inherited from

[BaseSerializationContext](BaseSerializationContext.md).[serializeEnum](BaseSerializationContext.md#serializeenum)

#### Defined in

[serialization.ts:155](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L155)

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

#### Inherited from

[BaseSerializationContext](BaseSerializationContext.md).[serializeNumber](BaseSerializationContext.md#serializenumber)

#### Defined in

[serialization.ts:146](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L146)

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

#### Inherited from

[BaseSerializationContext](BaseSerializationContext.md).[serializeObject](BaseSerializationContext.md#serializeobject)

#### Defined in

[serialization.ts:215](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L215)

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

#### Inherited from

[BaseSerializationContext](BaseSerializationContext.md).[serializeValue](BaseSerializationContext.md#serializevalue)

#### Defined in

[serialization.ts:135](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L135)

___

### setActionRegistry

▸ **setActionRegistry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`CardObjectRegistry`](CardObjectRegistry.md)<[`Action`](Action.md)\> |

#### Returns

`void`

#### Defined in

[card-elements.ts:7793](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7793)

___

### setElementRegistry

▸ **setElementRegistry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`CardObjectRegistry`](CardObjectRegistry.md)<[`CardElement`](CardElement.md)\> |

#### Returns

`void`

#### Defined in

[card-elements.ts:7783](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L7783)
