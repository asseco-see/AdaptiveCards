
# Adaptive Cards Host Config

HostConfig is a **cross-platform configuration object** that specifies how an Adaptive Card Renderer generates UI.

This allows properties which are platform agnostic to be shared among renderers on different platforms and devices. It also allows tooling to be created which gives you an idea of the look and feel that card would have for a given environment.

See a sample [HostConfig.json](https://github.com/Microsoft/AdaptiveCards/blob/master/samples/HostConfig/sample.json) to get a feeling for its contents.

---

   * [`ActionsConfig`](/platform/adaptive-cards/host-config/#schema-actionsconfig) - Options for `Action`s
   * [`AdaptiveCardConfig`](/platform/adaptive-cards/host-config/#schema-adaptivecardconfig) - Toplevel options for `AdaptiveCards`
   * [`ContainerStyleConfig`](/platform/adaptive-cards/host-config/#schema-containerstyleconfig) - Controls styling of a container
   * [`ContainerStylesConfig`](/platform/adaptive-cards/host-config/#schema-containerstylesconfig) - Controls styling for default and emphasis containers
   * [`ErrorMessageConfig`](/platform/adaptive-cards/host-config/#schema-errormessageconfig) - Controls styling for input error messages
   * [`FactSetConfig`](/platform/adaptive-cards/host-config/#schema-factsetconfig) - Controls the display of `FactSet`s
   * [`FontColorConfig`](/platform/adaptive-cards/host-config/#schema-fontcolorconfig) - undefined
   * [`FontSizesConfig`](/platform/adaptive-cards/host-config/#schema-fontsizesconfig) - Controls font size metrics for different text styles
   * [`FontWeightsConfig`](/platform/adaptive-cards/host-config/#schema-fontweightsconfig) - Controls font weight metrics
   * [`ForegroundColorsConfig`](/platform/adaptive-cards/host-config/#schema-foregroundcolorsconfig) - Controls various font colors
   * [`ImageSetConfig`](/platform/adaptive-cards/host-config/#schema-imagesetconfig) - Controls how `ImageSet`s are displayed
   * [`ImageSizesConfig`](/platform/adaptive-cards/host-config/#schema-imagesizesconfig) - Controls `Image` sizes
   * [`InputsConfig`](/platform/adaptive-cards/host-config/#schema-inputsconfig) - Controls display and behavior of Input types
   * [`InputLabelConfig`](/platform/adaptive-cards/host-config/#schema-inputlabelconfig) - Controls display of input labels
   * [`LabelConfig`](/platform/adaptive-cards/host-config/#schema-labelconfig) - Controls display of input labels
   * [`MediaConfig`](/platform/adaptive-cards/host-config/#schema-mediaconfig) - Controls the display and behavior of `Media` elements
   * [`SeparatorConfig`](/platform/adaptive-cards/host-config/#schema-separatorconfig) - Controls how separators are displayed
   * [`ShowCardConfig`](/platform/adaptive-cards/host-config/#schema-showcardconfig) - Controls behavior and styling of `Action.ShowCard`
   * [`SpacingsConfig`](/platform/adaptive-cards/host-config/#schema-spacingsconfig) - Controls how elements are to be laid out
   * [`TextBlockConfig`](/platform/adaptive-cards/host-config/#schema-textblockconfig) - Parameters controlling the display of text
   * [`ExtensionsConfig`](/platform/adaptive-cards/host-config/#schema-extensionsconfig) - Host Configuration for renderer extensions
   * [`CheckDigitConfig`](/platform/adaptive-cards/host-config/#schema-checkdigitconfig) - Parameters controlling the check-digit


<br/>

<a name="schema-actionsconfig"></a>
## ActionsConfig
Options for `Action`s


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**actionsOrientation**|`string`|No|Controls how buttons are laid out|1.0
|**actionAlignment**|`string`|No|Control layout of buttons|1.0
|**buttonSpacing**|`integer`|No|Controls how much spacing to use between buttons|1.0
|**maxActions**|`integer`|No|Controls how many actions are allowed in total|1.0
|**spacing**|`string`|No|Controls overall spacing of action element|1.0
|**showCard**|`ShowCardConfig`|No|Controls behavior and styling of `Action.ShowCard`|1.0
|**iconPlacement**|`string`|No|Controls where to place the action icon|1.0
|**iconSize**|`integer`|No|Controls size of action icon|1.0

<br/>

<a name="schema-adaptivecardconfig"></a>
## AdaptiveCardConfig
Toplevel options for `AdaptiveCards`


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**allowCustomStyle**|`boolean`|No|Controls whether custom styling is allowed|1.0
|**supportsInteractivity**|`boolean`|No|Control whether interactive `Action`s are allowed to be invoke|1.0
|**imageBaseUrl**|`string`|No|Base URL to be used when loading resources|1.0
|**fontFamily**|`string`|No|Font face to use when rendering text|1.0
|**actions**|`ActionsConfig`|No|Options for `Action`s|1.0
|**adaptiveCard**|`AdaptiveCardConfig`|No|Toplevel options for `AdaptiveCards`|1.0
|**containerStyles**|`ContainerStylesConfig`|No|Controls styling for default and emphasis containers|1.0
|**imageSizes**|`ImageSizesConfig`|No|Controls `Image` sizes|1.0
|**imageSet**|`ImageSetConfig`|No|Controls how `ImageSet`s are displayed|1.0
|**factSet**|`FactSetConfig`|No|Controls the display of `FactSet`s|1.0
|**fontSizes**|`FontSizesConfig`|No|Controls font size metrics for different text styles|1.0
|**fontWeights**|`FontWeightsConfig`|No|Controls font weight metrics|1.0
|**spacing**|`SpacingsConfig`|No|Controls how elements are to be laid out|1.0
|**separator**|`SeparatorConfig`|No|Controls how separators are displayed|1.0
|**media**|`MediaConfig`|No|Controls the display and behavior of `Media` elements|1.1
|**inputs**|`InputsConfig`|No|Controls display and behavior of Input types|1.3
|**extensions**|`ExtensionsConfig`|No|Host Configuration for renderer extensions|1.0

<br/>

<a name="schema-containerstyleconfig"></a>
## ContainerStyleConfig
Controls styling of a container


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**backgroundColor**|`string,null`|No||1.0
|**foregroundColors**|`ForegroundColorsConfig`|No|Controls various font colors|1.0

<br/>

<a name="schema-containerstylesconfig"></a>
## ContainerStylesConfig
Controls styling for default and emphasis containers


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**default**|`ContainerStyleConfig`|No|Controls styling of a container|1.0
|**emphasis**|`ContainerStyleConfig`|No|Controls styling of a container|1.0

<br/>

<a name="schema-errormessageconfig"></a>
## ErrorMessageConfig
Controls styling for input error messages


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**size**|`string`|No|Font size to use for the error message|1.0
|**spacing**|`string`|No|Amount of spacing to be used between input and error message|1.0
|**weight**|`string`|No|Font weight that should be used for error messages|1.0

<br/>

<a name="schema-factsetconfig"></a>
## FactSetConfig
Controls the display of `FactSet`s


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**title**|`TextBlockConfig`|No|Parameters controlling the display of text|1.0
|**value**|`TextBlockConfig`|No|Parameters controlling the display of text|1.0
|**spacing**|`integer`|No||1.0

<br/>

<a name="schema-fontcolorconfig"></a>
## FontColorConfig



|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**default**|`string,null`|No|Color to use when displaying default text|1.0
|**subtle**|`string,null`|No|Color to use when displaying subtle text|1.0

<br/>

<a name="schema-fontsizesconfig"></a>
## FontSizesConfig
Controls font size metrics for different text styles


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**small**|`integer`|No|Small font size|1.0
|**default**|`integer`|No|Default font size|1.0
|**medium**|`integer`|No|Medium font size|1.0
|**large**|`integer`|No|Large font size|1.0
|**extraLarge**|`integer`|No|Extra large font size|1.0

<br/>

<a name="schema-fontweightsconfig"></a>
## FontWeightsConfig
Controls font weight metrics


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**lighter**|`integer`|No||1.0
|**default**|`integer`|No||1.0
|**bolder**|`integer`|No||1.0

<br/>

<a name="schema-foregroundcolorsconfig"></a>
## ForegroundColorsConfig
Controls various font colors


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**default**|`FontColorConfig`|No||1.0
|**accent**|`FontColorConfig`|No||1.0
|**dark**|`FontColorConfig`|No||1.0
|**light**|`FontColorConfig`|No||1.0
|**good**|`FontColorConfig`|No||1.0
|**warning**|`FontColorConfig`|No||1.0
|**attention**|`FontColorConfig`|No||1.0

<br/>

<a name="schema-imagesetconfig"></a>
## ImageSetConfig
Controls how `ImageSet`s are displayed


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**imageSize**|`string`|No|Controls individual image sizing|1.0
|**maxImageHeight**|`integer`|No|Constrain image height to this value|1.0

<br/>

<a name="schema-imagesizesconfig"></a>
## ImageSizesConfig
Controls `Image` sizes


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**small**|`integer`|No|Small image size value|1.0
|**medium**|`integer`|No|Medium image size value|1.0
|**large**|`integer`|No|Large image size value|1.0

<br/>

<a name="schema-inputsconfig"></a>
## InputsConfig
Controls display and behavior of Input types


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**label**|`LabelConfig`|No|Controls display of input labels|1.3
|**errorMessage**|`ErrorMessageConfig`|No|Controls styling for input error messages|1.3

<br/>

<a name="schema-inputlabelconfig"></a>
## InputLabelConfig
Controls display of input labels


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**color**|`string`|No|Color of the label|1.0
|**isSubtle**|`boolean`|No|Whether the label should be displayed using a lighter weight font|1.0
|**size**|`string`|No|Size of the label text|1.0
|**suffix**|`string`|No|Suffix that should be appended to labels of this type|1.0
|**weight**|`string`|No|Font weight that should be used for this type of label|1.0

<br/>

<a name="schema-labelconfig"></a>
## LabelConfig
Controls display of input labels


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**inputSpacing**|`string`|No|Amount of spacing to be used between label and input|1.0
|**requiredInputs**|`InputLabelConfig`|No|Controls display of input labels|1.3
|**optionalInputs**|`InputLabelConfig`|No|Controls display of input labels|1.3

<br/>

<a name="schema-mediaconfig"></a>
## MediaConfig
Controls the display and behavior of `Media` elements


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**defaultPoster**|`string`|No|URI to image to display when play button hasn't been invoked|1.0
|**playButton**|`string`|No|Image to display as play button|1.0
|**allowInlinePlayback**|`boolean`|No|Whether to display media inline or invoke externally|1.0

<br/>

<a name="schema-separatorconfig"></a>
## SeparatorConfig
Controls how separators are displayed


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**lineThickness**|`integer`|No|Thickness of separator line|1.0
|**lineColor**|`string,null`|No|Color to use when drawing separator line|1.0

<br/>

<a name="schema-showcardconfig"></a>
## ShowCardConfig
Controls behavior and styling of `Action.ShowCard`


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**actionMode**|`string`|No|Controls how the card is displayed. Note: Popup show cards are not recommended for cards with input validation, and may be deprecated in the future.|1.0
|**style**|`ContainerStyleConfig`|No|Controls styling of a container|1.0
|**inlineTopMargin**|`integer`|No|Amount of margin to use when displaying the card|1.0

<br/>

<a name="schema-spacingsconfig"></a>
## SpacingsConfig
Controls how elements are to be laid out


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**small**|`integer`|No|Small spacing value|1.0
|**default**|`integer`|No|Default spacing value|1.0
|**medium**|`integer`|No|Medium spacing value|1.0
|**large**|`integer`|No|Large spacing value|1.0
|**extraLarge**|`integer`|No|Extra large spacing value|1.0
|**padding**|`integer`|No|Padding value|1.0

<br/>

<a name="schema-textblockconfig"></a>
## TextBlockConfig
Parameters controlling the display of text


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**size**|`string`|No|Font size to use when a card doesn't specify|1.0
|**weight**|`string`|No|Font weight to use when a card doesn't specify|1.0
|**color**|`string`|No|Font color to use when a card doesn't specify|1.0
|**isSubtle**|`boolean`|No|Should text be subtle if a card doesn't specify|1.0
|**wrap**|`boolean`|No|Should text wrap if a card doesn't specify|1.0
|**maxWidth**|`integer`|No|Maximum width to use if a card doesn't specify|1.0

<br/>

<a name="schema-extensionsconfig"></a>
## ExtensionsConfig
Host Configuration for renderer extensions


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**checkDigit**|`CheckDigitConfig`|No|Parameters controlling the check-digit|1.0

<br/>

<a name="schema-checkdigitconfig"></a>
## CheckDigitConfig
Parameters controlling the check-digit


|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|
|**registries**|`array`|No|The list of registries to lookup templates|0.1

<br/>

<br/>
<script>
var hrefs = document.querySelectorAll('a');
hrefs.forEach(href => {
	href.setAttribute('target', '_parent');
})
</script>