---
title: Screen
subtitle: Model-driven app design
date: 2020-12-25
github_username: MilanCheSkoric
---

Model-driven app design
===================================================

Model-driven application design involves the development of applications using ready-made elements (*assets*) with a little bit of coding (*Low-Code*). Model-driven applications can be quite simple but also very complex. Unlike *Canvas* applications, where we have complete control over the appearance of the application, in model-based applications most of the layout is determined by the elements that are added to the application. These are the basic characteristics of this approach:

* Rich user interface elements focused on **no-code** as well as non-visual elements that manage the configuration

* Allows you to create complex **responsive** applications with a similar user interface on a variety of screen sizes, from the web to mobile devices

* Applications created in this way, as well as its modifications, can be easily and often distributed (**CI/CD**) to end users

The development of `Model-driven` applications consists of:

* **Presentation model** - Behavioral and data modeling that are exclusively intended for the user interface

* **Business process flows** - Defining navigation, simple UI Flow, as well as complex business processes that extend across multiple applications

* **Composite UI** - Composition of applications from ready-made `asset'-s, i.e. elements

The main feature of these applications is that they use the so-called `metadata-driven` architecture so that the application can be fully customized to the needs of the clients with very little coding. Metadata is the data about data and it defines the structure of the `Model-driven' applications in the system.

# Composing the model-driven app

We are currently focusing here on the composition of the applications. The applications are sorted by selecting and configuring the ready-made elements with the use of the 'app designer' tool or with the help of JSON.

These are the basic elements:

* **Application** - The application represents one or more *Host* -s into which screens are loaded.
* **Host** - represents the space in which metadata is downloaded from the server and converted into *native* UI. The *Host* consists of one or more screen metadata. In addition, the *Host* contains other settings that may affect the consistent display of the screen.
* **Screen or Card** - *Cross-platform, cross-app snippets of UI* encapsulate the structure of the UI for a specific functionality or functional areas of the solution. The screens consist of a composition of metadata about components and elements.
* **Component** - Represent complex user interface elements that can be reused in multiple screens. The components consist of metadata related to UI control and other components. These elements represent the molecules of the system.
* **UI Controls** - Basic metadata about UI elements of the application that the *Host* understands and of which the previous ones are composed and cannot be broken down into smaller elements. These elements represent the atoms of the system.
* **Native Elements** - Represent complex organisms that some *Host* -s can understand (e.g.  scanning accounts, maps, etc.) and they can be part of a screen or a component.

The division into atoms, molecules and organisms was taken from [Brad Frost’s Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)

## Application

The application can have multiple hosts (e.g., a host for pre-login, a host for post-login, a host for mToken) as functional areas. Some of them can also be divided according to technical characteristics - into web and mobile hosts, for example.

Moreover, we have

- Web 

    * Pre-Login Host Web
    * Post-Login Host Web

- Mobile Host

    * Pre-Login Host Mobile
    * Post-Login Host Mobile
    * IPS Host Mobile
    * mToken Host Mobile

![img-de-composite-app](images/de-composite-app.png)

> A composite app consists of loosely coupled host that are dynamically discovered and composed at run 
> time. Host contain visual and non-visual components representing the different vertical slices of 
> the system (see picture above). The visual components (screen) are composed in an application that 
> acts as the host for all of the app's content. Composite application provides services that tie these 
> host-level components together. 

One Host never directly references another host, nor any of its elements, such as the screen. Instead, they use application services, events, URIs to communicate with each other in order to offer an appropriate response to the user’s action in the application.

Further information available at [Communicating between loosely coupled components](https://bankapi.net/demdemo/site/docs/quick-starts/components-communication/index.html)

### Master screen 

Currently, the AdaptiveCards specification does not support the possibility to define a template or Master screen.
But if we compose an application of multiple Hosts, we can lower that definition to the Host configuration.
In this way, each host can define its Master screen in the configuration, i.e. URI to Master screen metadata. Thereby, the web host and the mobile host can also have different Master screens, and additionally, each functional area, e.g. a post-login host can have one that is different from other hosts.

> Master screen provide the look and feel and standard behavior (e.g. navigation, header and footer links to global pages and so on) 
> for all of the screen that use that master screen. Together with cards, they produce the output that is rendered in host.

Each *Host* can have special definitions in the configuration, e.g.

**Post Loign Host on Web**

"MasterScreen",
"v1/SampleBank/WebPostLoginMasterScreen"

a **Post Login Host on Mobile**

"MasterScreen",
"v1/SampleBank/MobilePostLoginMasterScreen"

More information on [Host configuration can be found here](https://docs.microsoft.com/en-us/adaptive-cards/rendering-cards/host-config).

If the Master Screen is defined by the specification, both values again indicate the card definitions, e.g.  **"v1/SampleBank/WebPostLoginMasterScreen"**

```json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/ApplicationMenuHolder"
    },
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/ApplicationScreenHeader"
    },
    {
      "type": "Container",
      "id": "MainRegion",
    }
  ]
}
```
Here we’ve used the `"id"` field to have a unique named container.
By convention, the Master must contain a Container with a simple *placeholder*, the so-called `"MainRegion"`, i.e. a place where the content of the screen will be inserted. With this composition we get the so-called visual inheritance of the screen.

In other words, the *Host* will insert the body as part of the Dashboard screen into the Container called `MainRegion`, i.e.

```json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/ApplicationMenuHolder"
    },
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/ApplicationScreenHeader"
    },
    {
      "type": "Container",
      "id": "MainRegion",
      "items": [
        {
            "type": "Component",
            "name": "v1/AdaptiveCards/WidgetHolder"
        }
      ]
    }
  ]
}
```

> [!Note]
> By applying the abovementioned principles, one screen can be contained in two hosts at the same time, i.e. both in the Pre-Login and in the Post-Login Master screen.
> It is the case that we have the same screens in two hosts but in different places that are defined through the Master screen.

If we want to have more Containers within the master page, we need to expand the AdaptiveCard specification to know what goes where.

The following example uses the pre-existing elements for extension, so let’s take a look at the Mobile Master Screen **"v1/SampleBank/MobilePostLoginMasterScreen"**:

```json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Container",
      "id": "ScreenHeader",
    },
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/ApplicationMenuHolder"
    },
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/ApplicationScreenHeader"
    },
    {
      "type": "Container",
      "id": "MainRegion",
    }
  ]
}
```

And afterwards, we indicate on the screen the place of each component; for that purpose I have used the field ["requires"](https://github.com/microsoft/adaptivecards/issues/2019) from the AdaptiveCards specification.

```json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/ScreenTitleView",
      "requires": {
        "-asee-container-name": "ScreenHeader",
        "adaptiveCard": "1.3"
      },
    },
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/ApplicationSearch",
      "requires": {
        "-asee-container-name": "ScreenHeader",
        "adaptiveCard": "1.3"
      },
    },
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/WidgetHolder"
    }
  ]
}
```

Within `Requires`, I’ve added some kind of `namespace` in order to be differentiated from others. So that's how the prefix **-asee-** is always part of all our extensions, i.e. custom attributes.

We can use this as well, even though the Master is defined by the technology of the (*native*) device and it’s not described by the specification but it only contains a list of named *container* -s as global constants where components can be placed. So, this mechanism also supports the possibility to make Master screens in design-time while everything with the specification allows us to work in run-time.

> Using a container removes the need for the host to have any specific reference to the application UI or 
> have any knowledge of how the elements (components or screen) injected will be laid out and displayed.

#### Rendering

The host uses this specification to arrange the elements of the screen conventionally, from left to right and from top to bottom.

The length of these components can be defined by basic attributes, e.g.

```json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/ApplicationMenuHolder",
      "height": "stretch",
      "verticalContentAlignment": "top"
    },
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/ApplicationScreenHeader",
      "verticalContentAlignment": "top",
      "height": "auto"
    },
    {
      "type": "Container",
      "id": "MainRegion",
      "verticalContentAlignment": "center"
    }
  ]
}
```

The attribute `"height": "stretch"` means that it occupies the full height of the screen and `"height": "auto"` the height defined by the component itself. And if it’s not specified, it takes up the remaining space.

Using the abovementioned attributes, we’ve defined the layout, so firstly goes "v1/AdaptiveCards/ApplicationMenuHolder" which occupies the top and the full height, then "v1/AdaptiveCards/ApplicationScreenHeader" which also occupies the top but the height is determined only by the component, and finally "Asee.ContentPlaceHolder" which occupies the rest of the free screen area.

![img-dac-web-layout](images/ac-web-layout.png)

#### Advanced layout

Complex screen layouts can be created using the following [Container](https://adaptivecards.io/explorer/Container.html) elements:

* **Container** - Defines a a collection of elements
* **ColumnSet/Column** - Defines a collection of columns, each column is a container
* **FactSet** - Container of Facts
* **ImageSet** - Container of Images so that UI can show appropriate photo gallery experience for a collection of images.

As in the example below:

```json
{
  "type": "AdaptiveCard",
  "body": [
    {
        "type": "Container",
        "id": "TopRegion",
        "height": "auto",
        "verticalContentAlignment": "top"
    },
    {
      "type": "ColumnSet",
      "height": "stretch",
      "columns": [
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "TextBlock",
              "text": "(auto)"
            },
            {
              "type": "Image",
              "url": "http://adaptivecards.io/content/adaptive-card-50.png"
            },
            {
              "type": "Container",
              "id": "LeftRegion"
            }
          ]
        },
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "TextBlock",
              "horizontalAlignment": "center",
              "text": "(stretch)"
            },
            {
              "type": "Image",
              "horizontalAlignment": "center",
              "url": "http://adaptivecards.io/content/adaptive-card-50.png"
            },
            {
              "type": "Container",
              "id": "MainRegion",
              "verticalContentAlignment": "center"
            }
          ]
        },
        {
          "type": "Column",
          "width": "80px",
          "items": [
            {
              "type": "TextBlock",
              "text": "(80px)"
            },
            {
              "type": "Container",
              "id": "RightRegion"
            }
          ]
        }
      ]
    },
    {
        "type": "Container",
        "id": "BottomRegion",
        "height": "auto",
        "verticalContentAlignment": "bottom"
    },
  ]
}
```

![img-dac-web-layout](images/ac-advanced-layout.png)

In addition, I would definitely use the `Style` attribute, so the Host can have more complex rules defined by the named style, e.g. `"Style": "aside"` - the web host can interpret this in a way that the CSS style aside is applied to the given component, when it comes to the WEB, or some other set of settings if it is a mobile device.

Native styling:

* [JavaScript](https://docs.microsoft.com/en-us/adaptive-cards/sdk/rendering-cards/javascript/native-styling)
* [.NET HTML](https://docs.microsoft.com/en-us/adaptive-cards/sdk/rendering-cards/net-html/native-styling)
* [WPF](https://docs.microsoft.com/en-us/adaptive-cards/sdk/rendering-cards/net-wpf/native-styling)
* [Android](https://docs.microsoft.com/en-us/adaptive-cards/sdk/rendering-cards/android/native-styling)


#### Locally Scoped Container

Initially, we can only have one Master screen per Host within the application, so then, each Container is global.
This covers a large number of scenarios, but sometimes there are situations where it is necessary to have a Container that also exists locally.

In that case, the screens that possess such containers behave like mini-hosts, in other words, each screen can have its own Container, the same way the Master has it.


This can be implemented with a local Container and additional configuration on the Host page or extended with a specification by adding a 'basedOn' attribute, as in the example below:

```json
{
  "type": "AdaptiveCard",
  "basedOn": "v1/AdaptiveCards/Mester/AccountDetailsScreen",
  "body": []
}
```
 
The advantage of these composite screens is that instead of one large screen with very complex logic that is responsible for displaying different UIs depending on data (e.g. type of account - current or credit), there is a composition of smaller screens.

With the composition, we can dynamically determine only the relevant parts of the component by type, and more easily expand such screens.

![img-ac-baseon1](images/ac-baseon1.png)

So, the screen CurrentAccountDetailsScreen is composed of CurrentAccountOverview and CurrentAccountActionList components and the AccountDetailsScreen contains all of it. AccountDetailsScreen is a basic screen that has everything that is common to all accounts, while, for example, LoanAccountDetilsScreen can also have a component with a repayment plan, etc.

![img-ac-baseon1](images/ac-baseon2.png)

Best of all, we do not affect the base screens of which the composition is made and, as we’ve already mentioned, there is no excessive logic in determining what and when something is or isn’t visible, etc.


If we do not want to change the specification, this can also be achieved by having a repeated screen for each specific case with everything included, even common components, so, for example, CurrentAccountDetailsScreen can contain both its own and the common components.

And then we repeat those common components again on the LoanAccountDetilsScreen screen as well as those defined only for credit accounts.

![img-ac-baseon1](images/ac-baseon3.png)

## Screen or Card

It is necessary that the definition of `AddaptiveCards` supports the components of Microsoft in order for the cards to be declared screens.
Currently [AdaptiveCard components](https://adaptivecards.io/blog/2020/Community-Call-October/) are only planned, but if they don’t support it, then we can use our extension which will give the card until the evening instead of the component.

The screen or card defined in this way may contain one and/or more cards and/or elements. They are cited as references within themselves, i.e. `body`-s.


```json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/WidgetHolder"
    }
}
```

Each screen should be uniquely identified by a URI which is then used to navigate between screens.
While the Presentation model, which is related to the screen, should follow the convention, such as adding the suffix ViewModel to each name, e.g. Screen Name + ViewModel.
By applying this, we can have a centralized repository of screens, e.g. `v1/AdaptiveCards/screens/{ScreenName}` as well as the ViewModel `v1/PresentationModel/{ScreenName}ViewMddel`.

**WidgetHolder**

The widget-holder is a black-box component that displays the elements of the Dashboard. Such a component cannot be decomposed into other molecules or atoms, but its behavior is determined by the Host itself. Such components are called native components or organisms due to their complexity.

I have used the widget-holder instead of simply listing the components as it has the functionality of shifting schedules, saving for the end user, etc.

If we have an intersection of the client list widget and the list widget defined by the application, this component is needed to take care of the layout of the widgets- to have the *drag and drop* functionality, etc.

### Dashboard Card

If the screen has only a simple enumeration and doesn’t have to remember the way the end user arranges them on the screen, then we can only list them as in the example:

```json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/ScreenTitleView",
      "requires": {
        "-asee-container": "ScreenHeader",
        "adaptiveCard": "1.3"
      },
    },
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/ApplicationSearch",
      "requires": {
        "-asee-container": "ScreenHeader",
        "adaptiveCard": "1.3"
      },
    },
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/AccountSummary"
    },
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/ExhcnageRates"
    },
    {
      "type": "Component",
      "name": "v1/AdaptiveCards/BannerAd"
    }
  ]
}
```

By applying this, we can have a centralized repository of widgets, e.g. `v1/AdaptiveCards/widgets`, from where we can download the components and place them on the screen.

> [!Note]
> The example above only contains references to components, which is good because if we pull off a component once
> we can cache it on the Host and use it for multiple screens. Of course, the part of the server which 
> delivers the screens to the client can also include the possibility to get a developed form in one call
> so that we wouldn’t have to drag each component separately.

## Component

Here is an example of the look of one of the components from the Dashboard screen:

**Account Piceker**

> On their own, atoms don’t provide much substance. However, they become meaningful once you begin to group them together like molecules: 

```json
{
    "type": "AdaptiveComponent",
    "componentName": "v1/AdaptiveCards/AccountPicker",
    "schema": {
        "properties": {
            "accounts": {
                "type": "array"
            },
            "backgroundImage": {
                "type": "string"
            }
        },
        "required": [ "accounts" ]
    },
    "views": {
        "default": 
        {
            "type": "Container",
            "data": "${accounts}",
            "backgroundImage": "${backgroundImage}",
            "items": [
            {
                "type": "ColumnSet",
                "columns": [
                    {
                        "type": "Column",
                        "width": "stretch",
                        "items": [
                            {
                                "type": "TextBlock",
                                "text": "${DisplayName}"
                            },
                            {
                                "type": "TextBlock",
                                "text": "${DisplayNumber}"
                            },
                            {
                                "type": "TextBlock",
                                "text": "${DisplayBalance}",
                                "weight": "Bolder",
                                "size": "ExtraLarge",
			                    "$when": "${!IsMultiCurrency}",
                                "spacing": "None"
                            },
                            {      
                                "choices": [
                                    {
                                        "$data": "${DisplayBalanceList}",
                                        "title": "${Amount} ${Currency}",
                                        "value": "${Currency}"
                                    }
                                ],
            		            "type": "Input.ChoiceSet",
                                "$when": "${accountIsMultiCurrency}",
        		            }
                        ]
                    },
                    {
                        "type": "Column",
                        "width": "auto",
                        "items": [
                            {
                                "type": "Image",
                                "url": "${DisplayImageUrl}",
                                "size": "auto"
                            }
                        ]
                    }
                ] 
            ]
        }
    ],
    "actions": [
        {
            "type": "Action.OpenUrl",
            "title": "More Info",
            "url": "${AccountOverviewUri}"
        }
    ]
}
```

By applying this, we can have a centralized repository of components, e.g. `v1/AdaptiveCards/components`

More information about [AdaptiveCards components](https://github.com/microsoft/AdaptiveCards/issues/4761)

## Native elements
 
In general, we do not break down these elements into smaller ones, e.g. the Asse.DonutChart component, since it would be too complex. But the Host knows how to display such a component and adjust what is most important instead of having full control over it.

> Organisms on our planet range in size and complexity, so the same goes for your product’s “organisms.” 
> They could be as small as a navigation bar or as large as an entire page.

**AccountSummary Sample Widget** 

```json
{
    "type": "AdaptiveComponent",
    "componentName": "v1/AdaptiveCards/AccountSummary",
    "schema": {
        "properties": {
            "entries": {
                "type": "array"
            }
        },
        "required": [ "entries" ]
    },
    "views": {
        "default": 
        {
            "type": "Container",
            "requires": {
              "-asee-DonutChart": "*",
              "adaptiveCard": "1.3"
            },
            "items": [
                {
                    "type": "TextBlock",
                    "text": "Account Summary"
                },
                {
                    "type": "Asse.DonutChart",
                    "items": "$(entries)"
                }
            ],
            "fallback": {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": "Account Summary Raw data"
                    },
                    {
                        "type": "TextBlock",
                        "data": "$(entries)",
                        "text": "* $(label} - **$(value}**"
                    }
                ]
            }
        }
    }
}
```

