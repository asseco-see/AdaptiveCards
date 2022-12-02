[Adaptive Cards Javascript SDK](../README.md) / ValueSetProperty

# Class: ValueSetProperty

## Hierarchy

- [`PropertyDefinition`](PropertyDefinition.md)

  ↳ **`ValueSetProperty`**

## Table of contents

### Constructors

- [constructor](ValueSetProperty.md#constructor)

### Properties

- [defaultValue](ValueSetProperty.md#defaultvalue)
- [isSerializationEnabled](ValueSetProperty.md#isserializationenabled)
- [name](ValueSetProperty.md#name)
- [onGetInitialValue](ValueSetProperty.md#ongetinitialvalue)
- [sequentialNumber](ValueSetProperty.md#sequentialnumber)
- [targetVersion](ValueSetProperty.md#targetversion)
- [values](ValueSetProperty.md#values)

### Methods

- [getInternalName](ValueSetProperty.md#getinternalname)
- [isValidValue](ValueSetProperty.md#isvalidvalue)
- [parse](ValueSetProperty.md#parse)
- [toJSON](ValueSetProperty.md#tojson)

## Constructors

### constructor

• **new ValueSetProperty**(`targetVersion`, `name`, `values`, `defaultValue?`, `onGetInitialValue?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetVersion` | [`Version`](Version.md) |
| `name` | `string` |
| `values` | [`IVersionedValue`](../interfaces/IVersionedValue.md)<`string`\>[] |
| `defaultValue?` | `string` |
| `onGetInitialValue?` | (`sender`: [`SerializableObject`](SerializableObject.md)) => `string` |

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[constructor](PropertyDefinition.md#constructor)

#### Defined in

[serialization.ts:525](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L525)

## Properties

### defaultValue

• `Optional` `Readonly` **defaultValue**: `string`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[defaultValue](PropertyDefinition.md#defaultvalue)

#### Defined in

[serialization.ts:529](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L529)

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

[serialization.ts:527](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L527)

___

### onGetInitialValue

• `Optional` `Readonly` **onGetInitialValue**: (`sender`: [`SerializableObject`](SerializableObject.md)) => `string`

#### Type declaration

▸ (`sender`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |

##### Returns

`string`

#### Inherited from

[PropertyDefinition](PropertyDefinition.md).[onGetInitialValue](PropertyDefinition.md#ongetinitialvalue)

#### Defined in

[serialization.ts:530](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L530)

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

[serialization.ts:526](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L526)

___

### values

• `Readonly` **values**: [`IVersionedValue`](../interfaces/IVersionedValue.md)<`string`\>[]

#### Defined in

[serialization.ts:528](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L528)

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

### isValidValue

▸ **isValidValue**(`value`, `context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`boolean`

#### Defined in

[serialization.ts:439](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L439)

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

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[parse](PropertyDefinition.md#parse)

#### Defined in

[serialization.ts:451](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L451)

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

#### Overrides

[PropertyDefinition](PropertyDefinition.md).[toJSON](PropertyDefinition.md#tojson)

#### Defined in

[serialization.ts:490](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L490)
