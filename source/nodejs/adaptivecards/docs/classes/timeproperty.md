[Adaptive Cards Javascript SDK](../README.md) / TimeProperty

# Class: TimeProperty

## Hierarchy

- [`CustomProperty`](CustomProperty.md)<`string` \| `undefined`\>

  ↳ **`TimeProperty`**

## Table of contents

### Constructors

- [constructor](TimeProperty.md#constructor)

### Properties

- [defaultValue](TimeProperty.md#defaultvalue)
- [isSerializationEnabled](TimeProperty.md#isserializationenabled)
- [name](TimeProperty.md#name)
- [onGetInitialValue](TimeProperty.md#ongetinitialvalue)
- [onParse](TimeProperty.md#onparse)
- [onToJSON](TimeProperty.md#ontojson)
- [sequentialNumber](TimeProperty.md#sequentialnumber)
- [targetVersion](TimeProperty.md#targetversion)

### Methods

- [getInternalName](TimeProperty.md#getinternalname)
- [parse](TimeProperty.md#parse)
- [toJSON](TimeProperty.md#tojson)

## Constructors

### constructor

• **new TimeProperty**(`targetVersion`, `name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetVersion` | [`Version`](Version.md) |
| `name` | `string` |

#### Overrides

[CustomProperty](CustomProperty.md).[constructor](CustomProperty.md#constructor)

#### Defined in

[card-elements.ts:3648](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3648)

## Properties

### defaultValue

• `Optional` `Readonly` **defaultValue**: `string`

#### Inherited from

[CustomProperty](CustomProperty.md).[defaultValue](CustomProperty.md#defaultvalue)

#### Defined in

[serialization.ts:733](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L733)

___

### isSerializationEnabled

• **isSerializationEnabled**: `boolean` = `true`

#### Inherited from

[CustomProperty](CustomProperty.md).[isSerializationEnabled](CustomProperty.md#isserializationenabled)

#### Defined in

[serialization.ts:290](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L290)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[CustomProperty](CustomProperty.md).[name](CustomProperty.md#name)

#### Defined in

[card-elements.ts:3648](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3648)

___

### onGetInitialValue

• `Optional` `Readonly` **onGetInitialValue**: (`sender`: [`SerializableObject`](SerializableObject.md)) => `undefined` \| `string`

#### Type declaration

▸ (`sender`): `undefined` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |

##### Returns

`undefined` \| `string`

#### Inherited from

[CustomProperty](CustomProperty.md).[onGetInitialValue](CustomProperty.md#ongetinitialvalue)

#### Defined in

[serialization.ts:734](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L734)

___

### onParse

• `Readonly` **onParse**: (`sender`: [`SerializableObject`](SerializableObject.md), `property`: [`PropertyDefinition`](PropertyDefinition.md), `source`: [`PropertyBag`](../README.md#propertybag), `context`: [`BaseSerializationContext`](BaseSerializationContext.md)) => `undefined` \| `string`

#### Type declaration

▸ (`sender`, `property`, `source`, `context`): `undefined` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `property` | [`PropertyDefinition`](PropertyDefinition.md) |
| `source` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

##### Returns

`undefined` \| `string`

#### Inherited from

[CustomProperty](CustomProperty.md).[onParse](CustomProperty.md#onparse)

#### Defined in

[serialization.ts:731](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L731)

___

### onToJSON

• `Readonly` **onToJSON**: (`sender`: [`SerializableObject`](SerializableObject.md), `property`: [`PropertyDefinition`](PropertyDefinition.md), `target`: [`PropertyBag`](../README.md#propertybag), `value`: `undefined` \| `string`, `context`: [`BaseSerializationContext`](BaseSerializationContext.md)) => `void`

#### Type declaration

▸ (`sender`, `property`, `target`, `value`, `context`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `property` | [`PropertyDefinition`](PropertyDefinition.md) |
| `target` | [`PropertyBag`](../README.md#propertybag) |
| `value` | `undefined` \| `string` |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

##### Returns

`void`

#### Inherited from

[CustomProperty](CustomProperty.md).[onToJSON](CustomProperty.md#ontojson)

#### Defined in

[serialization.ts:732](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L732)

___

### sequentialNumber

• `Readonly` **sequentialNumber**: `number`

#### Inherited from

[CustomProperty](CustomProperty.md).[sequentialNumber](CustomProperty.md#sequentialnumber)

#### Defined in

[serialization.ts:288](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L288)

___

### targetVersion

• `Readonly` **targetVersion**: [`Version`](Version.md)

#### Inherited from

[CustomProperty](CustomProperty.md).[targetVersion](CustomProperty.md#targetversion)

#### Defined in

[card-elements.ts:3648](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L3648)

## Methods

### getInternalName

▸ **getInternalName**(): `string`

#### Returns

`string`

#### Inherited from

[CustomProperty](CustomProperty.md).[getInternalName](CustomProperty.md#getinternalname)

#### Defined in

[serialization.ts:276](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L276)

___

### parse

▸ **parse**(`sender`, `source`, `context`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `source` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`undefined` \| `string`

#### Inherited from

[CustomProperty](CustomProperty.md).[parse](CustomProperty.md#parse)

#### Defined in

[serialization.ts:720](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L720)

___

### toJSON

▸ **toJSON**(`sender`, `target`, `value`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `target` | [`PropertyBag`](../README.md#propertybag) |
| `value` | `undefined` \| `string` |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`void`

#### Inherited from

[CustomProperty](CustomProperty.md).[toJSON](CustomProperty.md#tojson)

#### Defined in

[serialization.ts:724](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L724)
