[Adaptive Cards Javascript SDK](../README.md) / NumProperty

# Class: NumProperty

## Hierarchy

- [`PropertyDefinition`](PropertyDefinition.md)

  ↳ **`NumProperty`**

## Table of contents

### Constructors

- [constructor](NumProperty.md#constructor)

### Properties

- [defaultValue](NumProperty.md#defaultvalue)
- [isSerializationEnabled](NumProperty.md#isserializationenabled)
- [name](NumProperty.md#name)
- [onGetInitialValue](NumProperty.md#ongetinitialvalue)
- [sequentialNumber](NumProperty.md#sequentialnumber)
- [targetVersion](NumProperty.md#targetversion)

### Methods

- [getInternalName](NumProperty.md#getinternalname)
- [parse](NumProperty.md#parse)
- [toJSON](NumProperty.md#tojson)

## Constructors

### constructor

• **new NumProperty**(`targetVersion`, `name`, `defaultValue?`, `onGetInitialValue?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetVersion` | [`Version`](Version.md) |
| `name` | `string` |
| `defaultValue?` | `any` |
| `onGetInitialValue?` | (`sender`: [`SerializableObject`](SerializableObject.md)) => `any` |

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[constructor](PropertyDefinition.md#constructor)

#### Defined in

[serialization.ts:292](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L292)

## Properties

### defaultValue

• `Optional` `Readonly` **defaultValue**: `any`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[defaultValue](PropertyDefinition.md#defaultvalue)

#### Defined in

[serialization.ts:295](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L295)

___

### isSerializationEnabled

• **isSerializationEnabled**: `boolean` = `true`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[isSerializationEnabled](PropertyDefinition.md#isserializationenabled)

#### Defined in

[serialization.ts:290](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L290)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[name](PropertyDefinition.md#name)

#### Defined in

[serialization.ts:294](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L294)

___

### onGetInitialValue

• `Optional` `Readonly` **onGetInitialValue**: (`sender`: [`SerializableObject`](SerializableObject.md)) => `any`

#### Type declaration

▸ (`sender`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |

##### Returns

`any`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[onGetInitialValue](PropertyDefinition.md#ongetinitialvalue)

#### Defined in

[serialization.ts:296](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L296)

___

### sequentialNumber

• `Readonly` **sequentialNumber**: `number`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[sequentialNumber](PropertyDefinition.md#sequentialnumber)

#### Defined in

[serialization.ts:288](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L288)

___

### targetVersion

• `Readonly` **targetVersion**: [`Version`](Version.md)

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[targetVersion](PropertyDefinition.md#targetversion)

#### Defined in

[serialization.ts:293](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L293)

## Methods

### getInternalName

▸ **getInternalName**(): `string`

#### Returns

`string`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[getInternalName](PropertyDefinition.md#getinternalname)

#### Defined in

[serialization.ts:276](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L276)

___

### parse

▸ **parse**(`sender`, `source`, `context`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `source` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`undefined` \| `number`

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[parse](PropertyDefinition.md#parse)

#### Defined in

[serialization.ts:380](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L380)

___

### toJSON

▸ **toJSON**(`sender`, `target`, `value`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `target` | [`PropertyBag`](../README.md#propertybag) |
| `value` | `undefined` \| `number` |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`void`

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[toJSON](PropertyDefinition.md#tojson)

#### Defined in

[serialization.ts:384](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L384)
