[Adaptive Cards Javascript SDK](../README.md) / GlobalSettings

# Class: GlobalSettings

## Table of contents

### Constructors

- [constructor](GlobalSettings.md#constructor)

### Properties

- [allowMarkForTextHighlighting](GlobalSettings.md#allowmarkfortexthighlighting)
- [allowPreProcessingPropertyValues](GlobalSettings.md#allowpreprocessingpropertyvalues)
- [alwaysBleedSeparators](GlobalSettings.md#alwaysbleedseparators)
- [displayInputValidationErrors](GlobalSettings.md#displayinputvalidationerrors)
- [enableFallback](GlobalSettings.md#enablefallback)
- [enableFullJsonRoundTrip](GlobalSettings.md#enablefulljsonroundtrip)
- [getUndefinedFieldValueSubstitutionString](GlobalSettings.md#getundefinedfieldvaluesubstitutionstring)
- [screensServiceBaseUrl](GlobalSettings.md#screensservicebaseurl)
- [setTabIndexAtCardRoot](GlobalSettings.md#settabindexatcardroot)
- [useAdvancedCardBottomTruncation](GlobalSettings.md#useadvancedcardbottomtruncation)
- [useAdvancedTextBlockTruncation](GlobalSettings.md#useadvancedtextblocktruncation)
- [useMarkdownInRadioButtonAndCheckbox](GlobalSettings.md#usemarkdowninradiobuttonandcheckbox)

## Constructors

### constructor

• **new GlobalSettings**()

## Properties

### allowMarkForTextHighlighting

▪ `Static` **allowMarkForTextHighlighting**: `boolean` = `false`

#### Defined in

[shared.ts:9](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L9)

___

### allowPreProcessingPropertyValues

▪ `Static` **allowPreProcessingPropertyValues**: `boolean` = `false`

#### Defined in

[shared.ts:13](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L13)

___

### alwaysBleedSeparators

▪ `Static` **alwaysBleedSeparators**: `boolean` = `false`

#### Defined in

[shared.ts:10](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L10)

___

### displayInputValidationErrors

▪ `Static` **displayInputValidationErrors**: `boolean` = `true`

#### Defined in

[shared.ts:12](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L12)

___

### enableFallback

▪ `Static` **enableFallback**: `boolean` = `true`

#### Defined in

[shared.ts:15](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L15)

___

### enableFullJsonRoundTrip

▪ `Static` **enableFullJsonRoundTrip**: `boolean` = `false`

#### Defined in

[shared.ts:11](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L11)

___

### getUndefinedFieldValueSubstitutionString

▪ `Static` `Optional` **getUndefinedFieldValueSubstitutionString**: (`path`: `string`) => `undefined` \| `string` = `undefined`

#### Type declaration

▸ (`path`): `undefined` \| `string`

Callback invoked when expression evaluation needs the value of a field in the source data object
and that field is undefined or null. By default, expression evaluation will substitute an undefined
field with its binding expression (e.g. `${field}`). This callback makes it possible to customize that
behavior.

**Example**
Given this data object:

```json
{
    firstName: "David"
}
```

The expression `${firstName} ${lastName}` will evaluate to "David ${lastName}" because the `lastName`
field is undefined.

Now let's set the callback:
```typescript
GlobalSettings.getUndefinedFieldValueSubstitutionString = (path: string) => { return "<undefined value>"; }
```

With that, the above expression will evaluate to "David &lt;undefined value&gt;"

##### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

##### Returns

`undefined` \| `string`

#### Defined in

[shared.ts:42](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L42)

___

### screensServiceBaseUrl

▪ `Static` **screensServiceBaseUrl**: `string` = `"https://dev.pim.asseco.rs/alpha/screens"`

#### Defined in

[shared.ts:16](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L16)

___

### setTabIndexAtCardRoot

▪ `Static` **setTabIndexAtCardRoot**: `boolean` = `true`

#### Defined in

[shared.ts:14](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L14)

___

### useAdvancedCardBottomTruncation

▪ `Static` **useAdvancedCardBottomTruncation**: `boolean` = `false`

#### Defined in

[shared.ts:7](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L7)

___

### useAdvancedTextBlockTruncation

▪ `Static` **useAdvancedTextBlockTruncation**: `boolean` = `true`

#### Defined in

[shared.ts:6](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L6)

___

### useMarkdownInRadioButtonAndCheckbox

▪ `Static` **useMarkdownInRadioButtonAndCheckbox**: `boolean` = `true`

#### Defined in

[shared.ts:8](https://github.com/asseco-see/AdaptiveCards/blob/d5d2c7b75/source/nodejs/adaptivecards/src/shared.ts#L8)
