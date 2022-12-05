[Adaptive Cards Javascript SDK](../README.md) / HttpHeader

# Class: HttpHeader

## Hierarchy

- [`SerializableObject`](SerializableObject.md)

  ↳ **`HttpHeader`**

## Table of contents

### Constructors

- [constructor](HttpHeader.md#constructor)

### Properties

- [maxVersion](HttpHeader.md#maxversion)
- [name](HttpHeader.md#name)
- [nameProperty](HttpHeader.md#nameproperty)
- [onRegisterCustomProperties](HttpHeader.md#onregistercustomproperties)
- [valueProperty](HttpHeader.md#valueproperty)

### Accessors

- [value](HttpHeader.md#value)

### Methods

- [getCustomProperty](HttpHeader.md#getcustomproperty)
- [getDefaultSerializationContext](HttpHeader.md#getdefaultserializationcontext)
- [getReferencedInputs](HttpHeader.md#getreferencedinputs)
- [getSchema](HttpHeader.md#getschema)
- [getSchemaKey](HttpHeader.md#getschemakey)
- [getValue](HttpHeader.md#getvalue)
- [hasAllDefaultValues](HttpHeader.md#hasalldefaultvalues)
- [hasDefaultValue](HttpHeader.md#hasdefaultvalue)
- [internalParse](HttpHeader.md#internalparse)
- [internalToJSON](HttpHeader.md#internaltojson)
- [parse](HttpHeader.md#parse)
- [populateSchema](HttpHeader.md#populateschema)
- [prepareForExecution](HttpHeader.md#prepareforexecution)
- [resetDefaultValues](HttpHeader.md#resetdefaultvalues)
- [setCustomProperty](HttpHeader.md#setcustomproperty)
- [setValue](HttpHeader.md#setvalue)
- [shouldSerialize](HttpHeader.md#shouldserialize)
- [toJSON](HttpHeader.md#tojson)

## Constructors

### constructor

• **new HttpHeader**(`name?`, `value?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `""` |
| `value` | `string` | `""` |

#### Overrides

[SerializableObject](SerializableObject.md).[constructor](SerializableObject.md#constructor)

#### Defined in

[card-elements.ts:4583](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4583)

## Properties

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

[card-elements.ts:4576](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4576)

___

### nameProperty

▪ `Static` `Readonly` **nameProperty**: [`StringProperty`](StringProperty.md)

#### Defined in

[card-elements.ts:4568](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4568)

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

### valueProperty

▪ `Static` `Readonly` **valueProperty**: `StringWithSubstitutionProperty`

#### Defined in

[card-elements.ts:4569](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4569)

## Accessors

### value

• `get` **value**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[card-elements.ts:4598](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4598)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[card-elements.ts:4602](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4602)

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

### getReferencedInputs

▸ **getReferencedInputs**(`inputs`, `referencedInputs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [`Input`](Input.md)[] |
| `referencedInputs` | [`Dictionary`](../README.md#dictionary)<[`Input`](Input.md)\> |

#### Returns

`void`

#### Defined in

[card-elements.ts:4590](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4590)

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

[card-elements.ts:4571](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4571)

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

### prepareForExecution

▸ **prepareForExecution**(`inputs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [`Dictionary`](../README.md#dictionary)<[`Input`](Input.md)\> |

#### Returns

`void`

#### Defined in

[card-elements.ts:4594](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/card-elements.ts#L4594)

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
