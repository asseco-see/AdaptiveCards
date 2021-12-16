[Adaptive Cards Javascript SDK](../README.md) › [Chip](chip.md)

# Class: Chip

## Hierarchy

* [SerializableObject](serializableobject.md)

  ↳ **Chip**

## Index

### Constructors

* [constructor](chip.md#constructor)

### Properties

* [maxVersion](chip.md#maxversion)
* [idProperty](chip.md#static-readonly-idproperty)
* [nameProperty](chip.md#static-readonly-nameproperty)
* [onRegisterCustomProperties](chip.md#static-optional-onregistercustomproperties)
* [selectedProperty](chip.md#static-readonly-selectedproperty)

### Accessors

* [id](chip.md#id)
* [name](chip.md#name)
* [selected](chip.md#selected)

### Methods

* [getCustomProperty](chip.md#getcustomproperty)
* [getDefaultSerializationContext](chip.md#protected-getdefaultserializationcontext)
* [getSchema](chip.md#getschema)
* [getSchemaKey](chip.md#protected-getschemakey)
* [getValue](chip.md#protected-getvalue)
* [hasAllDefaultValues](chip.md#hasalldefaultvalues)
* [hasDefaultValue](chip.md#hasdefaultvalue)
* [internalParse](chip.md#protected-internalparse)
* [internalToJSON](chip.md#protected-internaltojson)
* [parse](chip.md#parse)
* [populateSchema](chip.md#protected-populateschema)
* [resetDefaultValues](chip.md#resetdefaultvalues)
* [setCustomProperty](chip.md#setcustomproperty)
* [setValue](chip.md#protected-setvalue)
* [shouldSerialize](chip.md#protected-shouldserialize)
* [toJSON](chip.md#tojson)

## Constructors

###  constructor

\+ **new Chip**(): *[Chip](chip.md)*

*Inherited from [HostCapabilities](hostcapabilities.md).[constructor](hostcapabilities.md#constructor)*

**Returns:** *[Chip](chip.md)*

## Properties

###  maxVersion

• **maxVersion**: *[Version](version.md)* = Versions.v1_3

*Inherited from [HostCapabilities](hostcapabilities.md).[maxVersion](hostcapabilities.md#maxversion)*

___

### `Static` `Readonly` idProperty

▪ **idProperty**: *[StringProperty](stringproperty.md)‹›* = new StringProperty(Versions.v1_0, "id", true)

___

### `Static` `Readonly` nameProperty

▪ **nameProperty**: *[StringProperty](stringproperty.md)‹›* = new StringProperty(Versions.v1_0, "name", true)

___

### `Static` `Optional` onRegisterCustomProperties

▪ **onRegisterCustomProperties**? : *undefined | function*

*Inherited from [HostCapabilities](hostcapabilities.md).[onRegisterCustomProperties](hostcapabilities.md#static-optional-onregistercustomproperties)*

___

### `Static` `Readonly` selectedProperty

▪ **selectedProperty**: *[BoolProperty](boolproperty.md)‹›* = new BoolProperty(Versions.v1_0, "selected", false)

## Accessors

###  id

• **get id**(): *string*

**Returns:** *string*

• **set id**(`value`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  name

• **get name**(): *string*

**Returns:** *string*

• **set name**(`value`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  selected

• **get selected**(): *boolean*

**Returns:** *boolean*

• **set selected**(`value`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *void*

## Methods

###  getCustomProperty

▸ **getCustomProperty**(`name`: string): *any*

*Inherited from [HostCapabilities](hostcapabilities.md).[getCustomProperty](hostcapabilities.md#getcustomproperty)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *any*

___

### `Protected` getDefaultSerializationContext

▸ **getDefaultSerializationContext**(): *[BaseSerializationContext](baseserializationcontext.md)*

*Inherited from [HostCapabilities](hostcapabilities.md).[getDefaultSerializationContext](hostcapabilities.md#protected-getdefaultserializationcontext)*

**Returns:** *[BaseSerializationContext](baseserializationcontext.md)*

___

###  getSchema

▸ **getSchema**(): *[SerializableObjectSchema](serializableobjectschema.md)*

*Inherited from [HostCapabilities](hostcapabilities.md).[getSchema](hostcapabilities.md#getschema)*

**Returns:** *[SerializableObjectSchema](serializableobjectschema.md)*

___

### `Protected` getSchemaKey

▸ **getSchemaKey**(): *string*

*Overrides [SerializableObject](serializableobject.md).[getSchemaKey](serializableobject.md#protected-abstract-getschemakey)*

**Returns:** *string*

___

### `Protected` getValue

▸ **getValue**(`property`: [PropertyDefinition](propertydefinition.md)): *any*

*Inherited from [HostCapabilities](hostcapabilities.md).[getValue](hostcapabilities.md#protected-getvalue)*

**Parameters:**

Name | Type |
------ | ------ |
`property` | [PropertyDefinition](propertydefinition.md) |

**Returns:** *any*

___

###  hasAllDefaultValues

▸ **hasAllDefaultValues**(): *boolean*

*Inherited from [HostCapabilities](hostcapabilities.md).[hasAllDefaultValues](hostcapabilities.md#hasalldefaultvalues)*

**Returns:** *boolean*

___

###  hasDefaultValue

▸ **hasDefaultValue**(`property`: [PropertyDefinition](propertydefinition.md)): *boolean*

*Inherited from [HostCapabilities](hostcapabilities.md).[hasDefaultValue](hostcapabilities.md#hasdefaultvalue)*

**Parameters:**

Name | Type |
------ | ------ |
`property` | [PropertyDefinition](propertydefinition.md) |

**Returns:** *boolean*

___

### `Protected` internalParse

▸ **internalParse**(`source`: [PropertyBag](../README.md#propertybag), `context`: [BaseSerializationContext](baseserializationcontext.md)): *void*

*Inherited from [SerializableObject](serializableobject.md).[internalParse](serializableobject.md#protected-internalparse)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | [PropertyBag](../README.md#propertybag) |
`context` | [BaseSerializationContext](baseserializationcontext.md) |

**Returns:** *void*

___

### `Protected` internalToJSON

▸ **internalToJSON**(`target`: [PropertyBag](../README.md#propertybag), `context`: [BaseSerializationContext](baseserializationcontext.md)): *void*

*Inherited from [SerializableObject](serializableobject.md).[internalToJSON](serializableobject.md#protected-internaltojson)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | [PropertyBag](../README.md#propertybag) |
`context` | [BaseSerializationContext](baseserializationcontext.md) |

**Returns:** *void*

___

###  parse

▸ **parse**(`source`: [PropertyBag](../README.md#propertybag), `context?`: [BaseSerializationContext](baseserializationcontext.md)): *void*

*Inherited from [HostCapabilities](hostcapabilities.md).[parse](hostcapabilities.md#parse)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | [PropertyBag](../README.md#propertybag) |
`context?` | [BaseSerializationContext](baseserializationcontext.md) |

**Returns:** *void*

___

### `Protected` populateSchema

▸ **populateSchema**(`schema`: [SerializableObjectSchema](serializableobjectschema.md)): *void*

*Inherited from [HostCapabilities](hostcapabilities.md).[populateSchema](hostcapabilities.md#protected-populateschema)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [SerializableObjectSchema](serializableobjectschema.md) |

**Returns:** *void*

___

###  resetDefaultValues

▸ **resetDefaultValues**(): *void*

*Inherited from [HostCapabilities](hostcapabilities.md).[resetDefaultValues](hostcapabilities.md#resetdefaultvalues)*

**Returns:** *void*

___

###  setCustomProperty

▸ **setCustomProperty**(`name`: string, `value`: any): *void*

*Inherited from [HostCapabilities](hostcapabilities.md).[setCustomProperty](hostcapabilities.md#setcustomproperty)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | any |

**Returns:** *void*

___

### `Protected` setValue

▸ **setValue**(`property`: [PropertyDefinition](propertydefinition.md), `value`: any): *void*

*Inherited from [HostCapabilities](hostcapabilities.md).[setValue](hostcapabilities.md#protected-setvalue)*

**Parameters:**

Name | Type |
------ | ------ |
`property` | [PropertyDefinition](propertydefinition.md) |
`value` | any |

**Returns:** *void*

___

### `Protected` shouldSerialize

▸ **shouldSerialize**(`context`: [BaseSerializationContext](baseserializationcontext.md)): *boolean*

*Inherited from [HostCapabilities](hostcapabilities.md).[shouldSerialize](hostcapabilities.md#protected-shouldserialize)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [BaseSerializationContext](baseserializationcontext.md) |

**Returns:** *boolean*

___

###  toJSON

▸ **toJSON**(`context?`: [BaseSerializationContext](baseserializationcontext.md)): *[PropertyBag](../README.md#propertybag) | undefined*

*Inherited from [HostCapabilities](hostcapabilities.md).[toJSON](hostcapabilities.md#tojson)*

**Parameters:**

Name | Type |
------ | ------ |
`context?` | [BaseSerializationContext](baseserializationcontext.md) |

**Returns:** *[PropertyBag](../README.md#propertybag) | undefined*
