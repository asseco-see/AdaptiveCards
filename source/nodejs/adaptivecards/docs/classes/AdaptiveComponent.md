[Adaptive Cards Javascript SDK](../README.md) / AdaptiveComponent

# Class: AdaptiveComponent

## Hierarchy

- [`SerializableObject`](SerializableObject.md)

  ↳ **`AdaptiveComponent`**

## Table of contents

### Constructors

- [constructor](AdaptiveComponent.md#constructor)

### Properties

- [description](AdaptiveComponent.md#description)
- [displayName](AdaptiveComponent.md#displayname)
- [maxVersion](AdaptiveComponent.md#maxversion)
- [name](AdaptiveComponent.md#name)
- [sampleData](AdaptiveComponent.md#sampledata)
- [schema](AdaptiveComponent.md#schema)
- [views](AdaptiveComponent.md#views)
- [descriptionProperty](AdaptiveComponent.md#descriptionproperty)
- [displayNameProperty](AdaptiveComponent.md#displaynameproperty)
- [nameProperty](AdaptiveComponent.md#nameproperty)
- [onRegisterCustomProperties](AdaptiveComponent.md#onregistercustomproperties)
- [sampleDataProperty](AdaptiveComponent.md#sampledataproperty)
- [schemaProperty](AdaptiveComponent.md#schemaproperty)
- [viewsProperty](AdaptiveComponent.md#viewsproperty)

### Methods

- [getCustomProperty](AdaptiveComponent.md#getcustomproperty)
- [getDefaultSerializationContext](AdaptiveComponent.md#getdefaultserializationcontext)
- [getSchema](AdaptiveComponent.md#getschema)
- [getSchemaKey](AdaptiveComponent.md#getschemakey)
- [getValue](AdaptiveComponent.md#getvalue)
- [getView](AdaptiveComponent.md#getview)
- [hasAllDefaultValues](AdaptiveComponent.md#hasalldefaultvalues)
- [hasDefaultValue](AdaptiveComponent.md#hasdefaultvalue)
- [internalParse](AdaptiveComponent.md#internalparse)
- [internalToJSON](AdaptiveComponent.md#internaltojson)
- [parse](AdaptiveComponent.md#parse)
- [populateSchema](AdaptiveComponent.md#populateschema)
- [resetDefaultValues](AdaptiveComponent.md#resetdefaultvalues)
- [setCustomProperty](AdaptiveComponent.md#setcustomproperty)
- [setValue](AdaptiveComponent.md#setvalue)
- [shouldSerialize](AdaptiveComponent.md#shouldserialize)
- [toJSON](AdaptiveComponent.md#tojson)

## Constructors

### constructor

• **new AdaptiveComponent**()

#### Inherited from

[SerializableObject](SerializableObject.md).[constructor](SerializableObject.md#constructor)

#### Defined in

[serialization.ts:951](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L951)

## Properties

### description

• `Optional` **description**: `string`

#### Defined in

[components.ts:183](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L183)

___

### displayName

• `Optional` **displayName**: `string`

#### Defined in

[components.ts:180](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L180)

___

### maxVersion

• **maxVersion**: [`Version`](Version.md) = `Versions.v1_4`

#### Inherited from

[SerializableObject](SerializableObject.md).[maxVersion](SerializableObject.md#maxversion)

#### Defined in

[serialization.ts:949](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L949)

___

### name

• **name**: `string`

#### Defined in

[components.ts:177](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L177)

___

### sampleData

• **sampleData**: `any`

#### Defined in

[components.ts:192](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L192)

___

### schema

• `Optional` **schema**: [`ComponentSchema`](ComponentSchema.md)

#### Defined in

[components.ts:186](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L186)

___

### views

• **views**: [`Dictionary`](../README.md#dictionary)<`object`\>

#### Defined in

[components.ts:189](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L189)

___

### descriptionProperty

▪ `Static` `Readonly` **descriptionProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[components.ts:171](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L171)

___

### displayNameProperty

▪ `Static` `Readonly` **displayNameProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[components.ts:170](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L170)

___

### nameProperty

▪ `Static` `Readonly` **nameProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[components.ts:169](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L169)

___

### onRegisterCustomProperties

▪ `Static` `Optional` **onRegisterCustomProperties**: (`sender`: [`SerializableObject`](SerializableObject.md), `schema`: [`SerializableObjectSchema`](SerializableObjectSchema.md)) => `void`

#### Type declaration

▸ (`sender`, `schema`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`SerializableObject`](SerializableObject.md) |
| `schema` | [`SerializableObjectSchema`](SerializableObjectSchema.md) |

##### Returns

`void`

#### Inherited from

[SerializableObject](SerializableObject.md).[onRegisterCustomProperties](SerializableObject.md#onregistercustomproperties)

#### Defined in

[serialization.ts:809](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L809)

___

### sampleDataProperty

▪ `Static` `Readonly` **sampleDataProperty**: [`ObjectProperty`](ObjectProperty.md)

#### Defined in

[components.ts:174](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L174)

___

### schemaProperty

▪ `Static` `Readonly` **schemaProperty**: [`SerializableObjectProperty`](SerializableObjectProperty.md)

#### Defined in

[components.ts:172](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L172)

___

### viewsProperty

▪ `Static` `Readonly` **viewsProperty**: [`DictionaryProperty`](DictionaryProperty.md)<`object`\>

#### Defined in

[components.ts:173](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L173)

## Methods

### getCustomProperty

▸ **getCustomProperty**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[SerializableObject](SerializableObject.md).[getCustomProperty](SerializableObject.md#getcustomproperty)

#### Defined in

[serialization.ts:1040](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1040)

___

### getDefaultSerializationContext

▸ `Protected` **getDefaultSerializationContext**(): [`BaseSerializationContext`](BaseSerializationContext.md)

#### Returns

[`BaseSerializationContext`](BaseSerializationContext.md)

#### Inherited from

[SerializableObject](SerializableObject.md).[getDefaultSerializationContext](SerializableObject.md#getdefaultserializationcontext)

#### Defined in

[serialization.ts:818](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L818)

___

### getSchema

▸ **getSchema**(): [`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Returns

[`SerializableObjectSchema`](SerializableObjectSchema.md)

#### Inherited from

[SerializableObject](SerializableObject.md).[getSchema](SerializableObject.md#getschema)

#### Defined in

[serialization.ts:1044](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1044)

___

### getSchemaKey

▸ `Protected` **getSchemaKey**(): `string`

#### Returns

`string`

#### Overrides

[SerializableObject](SerializableObject.md).[getSchemaKey](SerializableObject.md#getschemakey)

#### Defined in

[components.ts:196](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L196)

___

### getValue

▸ `Protected` **getValue**(`property`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`PropertyDefinition`](PropertyDefinition.md) |

#### Returns

`any`

#### Inherited from

[SerializableObject](SerializableObject.md).[getValue](SerializableObject.md#getvalue)

#### Defined in

[serialization.ts:875](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L875)

___

### getView

▸ **getView**(`name`): `undefined` \| `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `undefined` \| `string` |

#### Returns

`undefined` \| `object`

#### Defined in

[components.ts:200](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/components.ts#L200)

___

### hasAllDefaultValues

▸ **hasAllDefaultValues**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[SerializableObject](SerializableObject.md).[hasAllDefaultValues](SerializableObject.md#hasalldefaultvalues)

#### Defined in

[serialization.ts:1005](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1005)

___

### hasDefaultValue

▸ **hasDefaultValue**(`property`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`PropertyDefinition`](PropertyDefinition.md) |

#### Returns

`boolean`

#### Inherited from

[SerializableObject](SerializableObject.md).[hasDefaultValue](SerializableObject.md#hasdefaultvalue)

#### Defined in

[serialization.ts:1001](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1001)

___

### internalParse

▸ `Protected` **internalParse**(`source`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`void`

#### Inherited from

[SerializableObject](SerializableObject.md).[internalParse](SerializableObject.md#internalparse)

#### Defined in

[serialization.ts:888](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L888)

___

### internalToJSON

▸ `Protected` **internalToJSON**(`target`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`PropertyBag`](../README.md#propertybag) |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`void`

#### Inherited from

[SerializableObject](SerializableObject.md).[internalToJSON](SerializableObject.md#internaltojson)

#### Defined in

[serialization.ts:927](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L927)

___

### parse

▸ **parse**(`source`, `context?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`PropertyBag`](../README.md#propertybag) |
| `context?` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`void`

#### Inherited from

[SerializableObject](SerializableObject.md).[parse](SerializableObject.md#parse)

#### Defined in

[serialization.ts:963](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L963)

___

### populateSchema

▸ `Protected` **populateSchema**(`schema`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`SerializableObjectSchema`](SerializableObjectSchema.md) |

#### Returns

`void`

#### Inherited from

[SerializableObject](SerializableObject.md).[populateSchema](SerializableObject.md#populateschema)

#### Defined in

[serialization.ts:822](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L822)

___

### resetDefaultValues

▸ **resetDefaultValues**(): `void`

#### Returns

`void`

#### Inherited from

[SerializableObject](SerializableObject.md).[resetDefaultValues](SerializableObject.md#resetdefaultvalues)

#### Defined in

[serialization.ts:1019](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1019)

___

### setCustomProperty

▸ **setCustomProperty**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[SerializableObject](SerializableObject.md).[setCustomProperty](SerializableObject.md#setcustomproperty)

#### Defined in

[serialization.ts:1029](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L1029)

___

### setValue

▸ `Protected` **setValue**(`property`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`PropertyDefinition`](PropertyDefinition.md) |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[SerializableObject](SerializableObject.md).[setValue](SerializableObject.md#setvalue)

#### Defined in

[serialization.ts:879](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L879)

___

### shouldSerialize

▸ `Protected` **shouldSerialize**(`context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`boolean`

#### Inherited from

[SerializableObject](SerializableObject.md).[shouldSerialize](SerializableObject.md#shouldserialize)

#### Defined in

[serialization.ts:945](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L945)

___

### toJSON

▸ **toJSON**(`context?`): `undefined` \| [`PropertyBag`](../README.md#propertybag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | [`BaseSerializationContext`](BaseSerializationContext.md) |

#### Returns

`undefined` \| [`PropertyBag`](../README.md#propertybag)

#### Inherited from

[SerializableObject](SerializableObject.md).[toJSON](SerializableObject.md#tojson)

#### Defined in

[serialization.ts:967](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/serialization.ts#L967)
