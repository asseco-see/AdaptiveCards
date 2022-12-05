[Adaptive Cards Javascript SDK](../README.md) / EnumProperty

# Class: EnumProperty<TEnum\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TEnum` | extends `Object` |

## Hierarchy

- [`PropertyDefinition`](PropertyDefinition.md)

  ↳ **`EnumProperty`**

## Table of contents

### Constructors

- [constructor](EnumProperty.md#constructor)

### Properties

- [defaultValue](EnumProperty.md#defaultvalue)
- [enumType](EnumProperty.md#enumtype)
- [isSerializationEnabled](EnumProperty.md#isserializationenabled)
- [name](EnumProperty.md#name)
- [onGetInitialValue](EnumProperty.md#ongetinitialvalue)
- [sequentialNumber](EnumProperty.md#sequentialnumber)
- [targetVersion](EnumProperty.md#targetversion)

### Accessors

- [values](EnumProperty.md#values)

### Methods

- [getInternalName](EnumProperty.md#getinternalname)
- [parse](EnumProperty.md#parse)
- [toJSON](EnumProperty.md#tojson)

## Constructors

### constructor

• **new EnumProperty**<`TEnum`\>(`targetVersion`, `name`, `enumType`, `defaultValue?`, `values?`, `onGetInitialValue?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEnum` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetVersion` | [`Version`](Version.md) |
| `name` | `string` |
| `enumType` | `TEnum` |
| `defaultValue?` | `number` |
| `values?` | [`IVersionedValue`](../interfaces/IVersionedValue.md)<`number`\>[] |
| `onGetInitialValue?` | (`sender`: [`SerializableObject`](SerializableObject.md)) => `number` |

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[constructor](PropertyDefinition.md#constructor)

#### Defined in

[serialization.ts:613](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L613)

## Properties

### defaultValue

• `Optional` `Readonly` **defaultValue**: `number`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[defaultValue](PropertyDefinition.md#defaultvalue)

#### Defined in

[serialization.ts:617](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L617)

___

### enumType

• `Readonly` **enumType**: `TEnum`

#### Defined in

[serialization.ts:616](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L616)

___

### isSerializationEnabled

• **isSerializationEnabled**: `boolean` = `true`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[isSerializationEnabled](PropertyDefinition.md#isserializationenabled)

#### Defined in

[serialization.ts:290](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L290)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[name](PropertyDefinition.md#name)

#### Defined in

[serialization.ts:615](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L615)

___

### onGetInitialValue

• `Optional` `Readonly` **onGetInitialValue**: (`sender`: [`SerializableObject`](SerializableObject.md)) => `number`

#### Type declaration

▸ (`sender`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |

##### Returns

`number`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[onGetInitialValue](PropertyDefinition.md#ongetinitialvalue)

#### Defined in

[serialization.ts:619](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L619)

___

### sequentialNumber

• `Readonly` **sequentialNumber**: `number`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[sequentialNumber](PropertyDefinition.md#sequentialnumber)

#### Defined in

[serialization.ts:288](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L288)

___

### targetVersion

• `Readonly` **targetVersion**: [`Version`](Version.md)

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[targetVersion](PropertyDefinition.md#targetversion)

#### Defined in

[serialization.ts:614](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L614)

## Accessors

### values

• `get` **values**(): [`IVersionedValue`](../interfaces/IVersionedValue.md)<`number`\>[]

#### Returns

[`IVersionedValue`](../interfaces/IVersionedValue.md)<`number`\>[]

#### Defined in

[serialization.ts:636](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L636)

## Methods

### getInternalName

▸ **getInternalName**(): `string`

#### Returns

`string`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[getInternalName](PropertyDefinition.md#getinternalname)

#### Defined in

[serialization.ts:276](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L276)

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

[serialization.ts:538](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L538)

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

[serialization.ts:579](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L579)
