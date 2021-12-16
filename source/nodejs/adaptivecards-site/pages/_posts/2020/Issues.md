---
title: Issues
subtitle: 
date: 2020-12-25
github_username: MilanCheSkoric
---

Issues
===================================================


# Support for multi-host application environment

Currently, the AdaptiveCards specification does not support the ability to define a Mester template or Master screen (card).
And if we compose an application of multiple Hosts then we can lower that definition to the Host configuration.

[More Info](https://github.com/asseco-see/adaptive-ui/issues/8)

# Whether the Master Template is native or defined by a specification

If we want to have more Containers within the master template we need to expand the AdaptiveCard specification to know what goes where.

I have currently used the ["requires"] field [microsoft/AdaptiveCards#2019](https://github.com/microsoft/AdaptiveCards/issues/2019) from the AdaptiveCards specification.

We can use the same even though the Master is defined by the technology (native or device-specific) of the device and is not described by the specification but only contains a list named containers as global constants where components can be placed.

[More Info](https://github.com/asseco-see/adaptive-ui/issues/9)

# Locally Scoped Container

Initially, we can only have one Master screen per Host within the application, so then each Container is global.
This covers a large number of scenarios, but sometimes we have situations where it is necessary to have a Container that also exists locally.

In that case, screens that have such containers behave like mini-hosts, in other words, each screen can have its own Container as the Master has.

We can expand the specification by adding the 'basedOn' attribute, as in the example below:

```json
{
   "type": "AdaptiveCard",
   "basedOn": "v1 / AdaptiveCards / Mester / AccountDetailsScreen",
   "body": []
}
```

If we do not want to change the specification, this can also be achieved by having a repeated screen for each specific case
with all and even common components

[More Info](https://github.com/asseco-see/adaptive-ui/issues/10)

# Support for components

It is necessary that the definition of AddaptiveCards by Microsoft supports the components in order for the cards to be declared as screens. Currently, [AdaptiveCard components](https://adaptivecards.io/blog/2020/Community-Call-October/) are only in the announcement!

Otherwise, we need to make our extension that will hold the card as a support for the components.

[More Info](https://github.com/asseco-see/adaptive-ui/issues/11)

# Using URI for element discovering

Use URIs to uniquely find screens and other solution elements such as master templates, components, cards, and widgets.

For example central repository of cards v1/AdaptiveCards/cards/{ScreenName} and ViewModels v1/Aggregations/{ScreenName}ViewModel.

[More Info](https://github.com/asseco-see/adaptive-ui/issues/12)

# Widgets & WidgetHolder

Widget is a component used as a child of the widget holder on the dashboard screen. The widget has its own repository v1/AdaptiveCards/widget/{WidgetName} and configuration for the app owner (bank) and for the user. We need support for creating and publishing widgets regardless of the same support for components.

WidgetHolder is a native element used to arrange widgets on the screen, allow drag and drop of widgets etc.

[More Info](https://github.com/asseco-see/adaptive-ui/issues/13)

# Support for Data Templates

A DataTemplate is used to specify the appearance of data on supported components and native elements and typically binds to the data to be displayed. For example Account Picker (ChooseProduct) it a native element with their own behavior for selecting and search of the product items and link them to the overview. And that native element has a template for presenting data as a child item.

In this way we separate behavior and presentation, the behavior is completely defined by a native element that offers a small number of options while the presentation is completely under the control of delivery with the specification of adaptive card and they can change data as the input and presentation without changing the behavior of the native element.

[More Info](https://github.com/asseco-see/adaptive-ui/issues/14)

# Relative URL for internal navigation and absolute for the external


[More Info](https://github.com/asseco-see/adaptive-ui/issues/15)


