[Adaptive Cards Javascript SDK](../README.md) / PropertyDefinition

# Class: PropertyDefinition

## Hierarchy

- **`PropertyDefinition`**

  ↳ [`StringProperty`](StringProperty.md)

  ↳ [`BoolProperty`](BoolProperty.md)

  ↳ [`ObjectProperty`](ObjectProperty.md)

  ↳ [`NumProperty`](NumProperty.md)

  ↳ [`PixelSizeProperty`](PixelSizeProperty.md)

  ↳ [`ValueSetProperty`](ValueSetProperty.md)

  ↳ [`EnumProperty`](EnumProperty.md)

  ↳ [`SerializableObjectProperty`](SerializableObjectProperty.md)

  ↳ [`SerializableObjectCollectionProperty`](SerializableObjectCollectionProperty.md)

  ↳ [`CustomProperty`](CustomProperty.md)

  ↳ [`ActionProperty`](ActionProperty.md)

  ↳ [`SchemaPropertiesProperty`](SchemaPropertiesProperty.md)

  ↳ [`DictionaryProperty`](DictionaryProperty.md)

## Table of contents

### Constructors

- [constructor](PropertyDefinition.md#constructor)

### Properties

- [defaultValue](PropertyDefinition.md#defaultvalue)
- [isSerializationEnabled](PropertyDefinition.md#isserializationenabled)
- [name](PropertyDefinition.md#name)
- [onGetInitialValue](PropertyDefinition.md#ongetinitialvalue)
- [sequentialNumber](PropertyDefinition.md#sequentialnumber)
- [targetVersion](PropertyDefinition.md#targetversion)

### Methods

- [getInternalName](PropertyDefinition.md#getinternalname)
- [parse](PropertyDefinition.md#parse)
- [toJSON](PropertyDefinition.md#tojson)

## Constructors

### constructor

• **new PropertyDefinition**(`targetVersion`, `name`, `defaultValue?`, `onGetInitialValue?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetVersion` | [`Version`](Version.md) |
| `name` | `string` |
| `defaultValue?` | `any` |
| `onGetInitialValue?` | (`sender`: [`SerializableObject`](SerializableObject.md)) => `any` |

#### Defined in

[serialization.ts:292](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L292)

## Properties

### defaultValue

• `Optional` `Readonly` **defaultValue**: `any`

#### Defined in

[serialization.ts:295](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L295)

___

### isSerializationEnabled

• **isSerializationEnabled**: `boolean` = `true`

#### Defined in

[serialization.ts:290](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L290)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[serialization.ts:294](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L294)

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

#### Defined in

[serialization.ts:296](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L296)

___

### sequentialNumber

• `Readonly` **sequentialNumber**: `number`

#### Defined in

[serialization.ts:288](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L288)

___

### targetVersion

• `Readonly` **targetVersion**: [`Version`](Version.md)

#### Defined in

[serialization.ts:293](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L293)

## Methods

### getInternalName

▸ **getInternalName**(): `string`

#### Returns

`string`

#### Defined in

[serialization.ts:276](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L276)

___

### parse

▸ **parse**(`sender`, `source`, `context`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `source` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`any`

#### Defined in

[serialization.ts:280](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L280)

___

### toJSON

▸ **toJSON**(`sender`, `target`, `value`, `context`, `forceDeleteIfNullOrDefault?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) | `undefined` |
| `target` | [`PropertyBag`](../README.md#propertybag) | `undefined` |
| `value` | `any` | `undefined` |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) | `undefined` |
| `forceDeleteIfNullOrDefault` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[serialization.ts:284](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L284)
