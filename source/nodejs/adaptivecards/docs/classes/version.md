[Adaptive Cards Javascript SDK](../README.md) / Version

# Class: Version

## Table of contents

### Constructors

- [constructor](Version.md#constructor)

### Accessors

- [isValid](Version.md#isvalid)
- [label](Version.md#label)
- [major](Version.md#major)
- [minor](Version.md#minor)

### Methods

- [compareTo](Version.md#compareto)
- [toJSON](Version.md#tojson)
- [toString](Version.md#tostring)
- [parse](Version.md#parse)

## Constructors

### constructor

• **new Version**(`major?`, `minor?`, `label?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `major` | `number` | `1` |
| `minor` | `number` | `1` |
| `label?` | `string` | `undefined` |

#### Defined in

[serialization.ts:22](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L22)

## Accessors

### isValid

• `get` **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[serialization.ts:98](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L98)

___

### label

• `get` **label**(): `string`

#### Returns

`string`

#### Defined in

[serialization.ts:86](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L86)

___

### major

• `get` **major**(): `number`

#### Returns

`number`

#### Defined in

[serialization.ts:90](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L90)

___

### minor

• `get` **minor**(): `number`

#### Returns

`number`

#### Defined in

[serialization.ts:94](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L94)

## Methods

### compareTo

▸ **compareTo**(`otherVersion`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherVersion` | [`Version`](Version.md) |

#### Returns

`number`

#### Defined in

[serialization.ts:65](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L65)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[serialization.ts:61](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L61)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[serialization.ts:57](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L57)

___

### parse

▸ `Static` **parse**(`versionString`, `context`): `undefined` \| [`Version`](Version.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `versionString` | `string` |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`undefined` \| [`Version`](Version.md)

#### Defined in

[serialization.ts:28](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/serialization.ts#L28)
