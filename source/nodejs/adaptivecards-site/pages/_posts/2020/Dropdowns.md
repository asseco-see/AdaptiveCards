---
title: Dropdowns
subtitle:  Toggle contextual overlays for displaying lists of menu items. 
date: 2020-12-25
github_username: MilanCheSkoric
---
Dropdowns
===================================================

Toggle contextual overlays for displaying lists of menu items. 

# Anatomy of A Dropdowns

**Mobile**

![img-elem-web-dropdown](images/ac-elem-mob-dropdown.png)

**Web**

![img-elem-web-dropdown](images/ac-elem-web-dropdown.png)

As shown on the picture above we have twvo parts 

1. **Dropdown trigger**
A button, icon or selector that displays the dropdown list.

2. **Dropdown list**
Contains selectable items that you can group into sub-categories.

# Overview

Dropdowns are designed to be generic and applicable to a variety of situations and structures.
They used useal as Dropdown menus. Dropdown menus present a list of options that can be used to filter content in a specific context. 
Use to let users select an action from a set of choices. They’re toggled by clicking (tapping), not by hovering.

# Example

```json
{
  "type": "AdaptiveCard",
  "body": [
   {
      "type": "Dropdopwns",
      "label": "Click me!",
      "items": [
        {
            "type": "container",
            "items": [
              {
                "type": "TextBlock",
                "text": "Header"
              }
            ]
        },
        {
            "type": "container",
            "items": [
              {
                "type": "TextBlock",
                "text": "Click me!"
              }
            ],
            "selectAction": {
                "type": "Action.OpenUrl",
                "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            }
        },
        {
            "type": "container",
            "separator":"true",
            "items": [
              {
                "type": "TextBlock",
                "text": "Fotter"
              }
            ]
        }
      ]
    }
  ]
}
```

**Header**

Add a header to label sections of actions in any dropdown menu.

```json
        {
            "type": "container",
            "items": [
              {
                "type": "TextBlock",
                "text": "Header"
              }
            ]
        }
```

**Dividers**

Separate groups of related menu items with a divider.

```json
        {
            "type": "container",
            "separator":"true",
            "items": [
              {
                "type": "TextBlock",
                "text": "Fotter"
              }
            ]
        }
```

# Required properties

## type

Must be "Dropdopwns".

* Type: `string`
* Values: `Dropdopwns`

## label

Label for this dropdown, the card element to render inside the Dropdown trigger'

* Type: `string`

## items

The card elements to render inside the 'Dropdown list'

* Type: `Element[]`

## listGorup

The card elements to render inside the 'Dropdown list'

* Type: `Element`
* Values: `ListGroup`

More info : [List group](listgroup.md)

## Optional properties

## icon

Icon hint, dependes on iconType can be url, or font content

* Type: `string`

## iconType

Type hint for **icon**

* Type: `string`
* Values: `Default`, `Image`, `FontIcon`

## selectIcon

Icon hint for SVG-a resource of the right select icon

* Type: `string`
* DefaultValue: `chevron-bottom`

## style

Style hint for **Dropdown trigger**

* Type: `string`
* Values: `Default`, `Bottom`

# Dropdown Variations 

## Bottom

Style Bottom Display Image and Text of the label below image

![img-ac-elem-meni-item1](images/ac-elem-meni-item1.png)

## Default

Display Image on the lefft then text of the label and chevron on right.

![img-ac-elem-meni-item10](images/ac-elem-meni-item10.png)

# General Guidelines 

* Clicking outside the dropdown area closes the element.

* Clicking back button on device closes the element.

* Only one dropdown is visible on screen at a time.

## Other

**Disabled actions**

Displaying actions as disabled, rather than removing them, let the user know they exist under the right conditions. For example, delete is disabled when an item cannot be deleted due to a status change or entitlements setting.

**Scrolling**

In most cases you should avoid putting an excessive number of items in the dropdown list. If necessary, the length of the menu may be capped and a scroll bar will then allow access to all items.

**Writing Labels**

Labels inform users what to expect in a dropdown menu. Use clear labels for the Dropdown trigger so that users understand the purpose. Keep the label short and concise by limiting it to a single line of text.

