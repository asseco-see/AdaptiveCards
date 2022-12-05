[Adaptive Cards Javascript SDK](../README.md) / HostConfig

# Class: HostConfig

## Table of contents

### Constructors

- [constructor](HostConfig.md#constructor)

### Properties

- [actions](HostConfig.md#actions)
- [adaptiveCard](HostConfig.md#adaptivecard)
- [alwaysAllowBleed](HostConfig.md#alwaysallowbleed)
- [choiceSetInputValueSeparator](HostConfig.md#choicesetinputvalueseparator)
- [containerStyles](HostConfig.md#containerstyles)
- [cssClassNamePrefix](HostConfig.md#cssclassnameprefix)
- [factSet](HostConfig.md#factset)
- [fontTypes](HostConfig.md#fonttypes)
- [hostCapabilities](HostConfig.md#hostcapabilities)
- [imageSet](HostConfig.md#imageset)
- [imageSizes](HostConfig.md#imagesizes)
- [inputs](HostConfig.md#inputs)
- [lineHeights](HostConfig.md#lineheights)
- [media](HostConfig.md#media)
- [separator](HostConfig.md#separator)
- [spacing](HostConfig.md#spacing)
- [supportsInteractivity](HostConfig.md#supportsinteractivity)

### Accessors

- [fontFamily](HostConfig.md#fontfamily)
- [fontSizes](HostConfig.md#fontsizes)
- [fontWeights](HostConfig.md#fontweights)

### Methods

- [getEffectiveSpacing](HostConfig.md#geteffectivespacing)
- [getFontTypeDefinition](HostConfig.md#getfonttypedefinition)
- [makeCssClassName](HostConfig.md#makecssclassname)
- [makeCssClassNames](HostConfig.md#makecssclassnames)
- [paddingDefinitionToSpacingDefinition](HostConfig.md#paddingdefinitiontospacingdefinition)

## Constructors

### constructor

• **new HostConfig**(`obj?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | `any` |

#### Defined in

[host-config.ts:593](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L593)

## Properties

### actions

• `Readonly` **actions**: [`ActionsConfig`](ActionsConfig.md)

#### Defined in

[host-config.ts:584](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L584)

___

### adaptiveCard

• `Readonly` **adaptiveCard**: [`AdaptiveCardConfig`](AdaptiveCardConfig.md)

#### Defined in

[host-config.ts:585](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L585)

___

### alwaysAllowBleed

• **alwaysAllowBleed**: `boolean` = `false`

#### Defined in

[host-config.ts:591](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L591)

___

### choiceSetInputValueSeparator

• **choiceSetInputValueSeparator**: `string` = `","`

#### Defined in

[host-config.ts:557](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L557)

___

### containerStyles

• `Readonly` **containerStyles**: [`ContainerStyleSet`](ContainerStyleSet.md)

#### Defined in

[host-config.ts:582](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L582)

___

### cssClassNamePrefix

• `Optional` **cssClassNamePrefix**: `string`

#### Defined in

[host-config.ts:590](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L590)

___

### factSet

• `Readonly` **factSet**: [`FactSetConfig`](FactSetConfig.md)

#### Defined in

[host-config.ts:588](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L588)

___

### fontTypes

• `Optional` **fontTypes**: [`FontTypeSet`](FontTypeSet.md)

#### Defined in

[host-config.ts:560](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L560)

___

### hostCapabilities

• `Readonly` **hostCapabilities**: `HostCapabilities`

#### Defined in

[host-config.ts:553](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L553)

___

### imageSet

• `Readonly` **imageSet**: [`ImageSetConfig`](ImageSetConfig.md)

#### Defined in

[host-config.ts:586](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L586)

___

### imageSizes

• `Readonly` **imageSizes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `large` | `number` |
| `medium` | `number` |
| `small` | `number` |

#### Defined in

[host-config.ts:576](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L576)

___

### inputs

• `Readonly` **inputs**: [`InputConfig`](InputConfig.md)

#### Defined in

[host-config.ts:583](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L583)

___

### lineHeights

• `Optional` **lineHeights**: [`ILineHeightDefinitions`](../interfaces/ILineHeightDefinitions.md)

#### Defined in

[host-config.ts:559](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L559)

___

### media

• `Readonly` **media**: [`MediaConfig`](MediaConfig.md)

#### Defined in

[host-config.ts:587](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L587)

___

### separator

• `Readonly` **separator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lineColor` | `string` |
| `lineThickness` | `number` |

#### Defined in

[host-config.ts:571](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L571)

___

### spacing

• `Readonly` **spacing**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default` | `number` |
| `extraLarge` | `number` |
| `large` | `number` |
| `medium` | `number` |
| `padding` | `number` |
| `small` | `number` |

#### Defined in

[host-config.ts:562](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L562)

___

### supportsInteractivity

• **supportsInteractivity**: `boolean` = `true`

#### Defined in

[host-config.ts:558](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L558)

## Accessors

### fontFamily

• `get` **fontFamily**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[host-config.ts:700](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L700)

• `set` **fontFamily**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[host-config.ts:704](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L704)

___

### fontSizes

• `get` **fontSizes**(): [`IFontSizeDefinitions`](../interfaces/IFontSizeDefinitions.md)

#### Returns

[`IFontSizeDefinitions`](../interfaces/IFontSizeDefinitions.md)

#### Defined in

[host-config.ts:708](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L708)

___

### fontWeights

• `get` **fontWeights**(): [`IFontWeightDefinitions`](../interfaces/IFontWeightDefinitions.md)

#### Returns

[`IFontWeightDefinitions`](../interfaces/IFontWeightDefinitions.md)

#### Defined in

[host-config.ts:712](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L712)

## Methods

### getEffectiveSpacing

▸ **getEffectiveSpacing**(`spacing`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spacing` | [`Spacing`](../enums/Spacing.md) |

#### Returns

`number`

#### Defined in

[host-config.ts:657](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L657)

___

### getFontTypeDefinition

▸ **getFontTypeDefinition**(`style?`): [`FontTypeDefinition`](FontTypeDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `style?` | [`FontType`](../enums/FontType.md) |

#### Returns

[`FontTypeDefinition`](FontTypeDefinition.md)

#### Defined in

[host-config.ts:648](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L648)

___

### makeCssClassName

▸ **makeCssClassName**(`...classNames`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...classNames` | `string`[] |

#### Returns

`string`

#### Defined in

[host-config.ts:694](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L694)

___

### makeCssClassNames

▸ **makeCssClassNames**(`...classNames`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `...classNames` | `string`[] |

#### Returns

`string`[]

#### Defined in

[host-config.ts:684](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L684)

___

### paddingDefinitionToSpacingDefinition

▸ **paddingDefinitionToSpacingDefinition**(`paddingDefinition`): [`SpacingDefinition`](SpacingDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `paddingDefinition` | [`PaddingDefinition`](PaddingDefinition.md) |

#### Returns

[`SpacingDefinition`](SpacingDefinition.md)

#### Defined in

[host-config.ts:676](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/host-config.ts#L676)
