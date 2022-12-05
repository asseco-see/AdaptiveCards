[Adaptive Cards Javascript SDK](../README.md) / CardObjectRegistry

# Class: CardObjectRegistry<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SerializableObject`](SerializableObject.md) |

## Table of contents

### Constructors

- [constructor](CardObjectRegistry.md#constructor)

### Methods

- [clear](CardObjectRegistry.md#clear)
- [createInstance](CardObjectRegistry.md#createinstance)
- [findByName](CardObjectRegistry.md#findbyname)
- [getItemAt](CardObjectRegistry.md#getitemat)
- [getItemCount](CardObjectRegistry.md#getitemcount)
- [register](CardObjectRegistry.md#register)
- [unregister](CardObjectRegistry.md#unregister)

## Constructors

### constructor

• **new CardObjectRegistry**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SerializableObject`](SerializableObject.md)<`T`\> |

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[registry.ts:18](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/registry.ts#L18)

___

### createInstance

▸ **createInstance**(`typeName`, `targetVersion`): `undefined` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | `string` |
| `targetVersion` | [`Version`](Version.md) |

#### Returns

`undefined` \| `T`

#### Defined in

[registry.ts:43](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/registry.ts#L43)

___

### findByName

▸ **findByName**(`typeName`): `undefined` \| [`ITypeRegistration`](../interfaces/ITypeRegistration.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | `string` |

#### Returns

`undefined` \| [`ITypeRegistration`](../interfaces/ITypeRegistration.md)<`T`\>

#### Defined in

[registry.ts:14](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/registry.ts#L14)

___

### getItemAt

▸ **getItemAt**(`index`): [`ITypeRegistration`](../interfaces/ITypeRegistration.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`ITypeRegistration`](../interfaces/ITypeRegistration.md)<`T`\>

#### Defined in

[registry.ts:53](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/registry.ts#L53)

___

### getItemCount

▸ **getItemCount**(): `number`

#### Returns

`number`

#### Defined in

[registry.ts:49](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/registry.ts#L49)

___

### register

▸ **register**(`typeName`, `objectType`, `schemaVersion?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `typeName` | `string` | `undefined` |
| `objectType` | () => `T` | `undefined` |
| `schemaVersion` | [`Version`](Version.md) | `Versions.v1_0` |

#### Returns

`void`

#### Defined in

[registry.ts:22](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/registry.ts#L22)

___

### unregister

▸ **unregister**(`typeName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | `string` |

#### Returns

`void`

#### Defined in

[registry.ts:39](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/registry.ts#L39)
