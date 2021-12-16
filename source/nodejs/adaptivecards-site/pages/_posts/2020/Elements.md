---
title: Elements
subtitle:  An extended Adaptive Cards specification for defining user interfaces. Bold elements represent extension of Adaptive Cards specification and italic represent customization.
date: 2020-12-25
github_username: MilanCheSkoric
---

Adaptive UI 
===================================================

An extended Adaptive Cards specification for defining user interfaces. Bold elements represent
extension of Adaptiv Cards specification and italic represent customization. 
     
# UI Elements

Smallest building blocks of application represent atoms of solution.


## Containers 

Objects allowing to group controls together, for a better look&feel. 

Type           | Description           |
---------------|-----------------------|
ActionSet           | ActionSet allows actions to be displayed within a card.
Column              | Defines a container that is part of a ColumnSet.
ColumnSet           | ColumnSet divides a region into Columns, allowing elements to sit side-by-side. 
Container           | Containers group items together. 
ImageSet            | The ImageSet displays a collection of images similar to a gallery.
FactSet             | The FactSet element displays a series of facts (i.e. name/value pairs) in a tabular form.
Fact                | Describes a Fact in a FactSet as a key/value pair.
**ScrollContainer** | Containers group items together With Scroll. 
**Tab**             | Defines a container that is part of a TabSet.
**TabSet**          | TabSet allows to display content through various tabs.
**Collapsible**     | An Accordion is a simple way of showing, hiding, and breaking down content. It can be expanded or collapsed, which helps you read or find information, as well as reduce page length.
**[Dropdowns](dropdowns.md)**       | Dropdowns are toggleable, contextual overlays for displaying menu items.
**[List group](listgroup.md)**      | Group a series of content. 

## Elements

Element is used to present the actual content

Type           | Description           |
---------------|-----------------------|
TextBlock               | Displays text, allowing control over font sizes, weight, and color.
Image                   | Displays an image. Acceptable formats are PNG, JPEG, and GIF
Media                   | Displays a media player for audio or video content.
MediaSource             | Defines a source for a Media element
RichTextBlock           | Defines an array of inlines, allowing for inline text formatting.
TextRun                 | Defines a single run of formatted text. A TextRun with no properties set can be represented in the json as string containing the text as a shorthand for the json object. These two representations are equivalent.
**FiledSet**            | Displays a section heder with description if is available
**FontIconView**        | Displays an font icon
**SVGView**             | Displays an SVG-a
**TableView**           | Tables are used to logically structure content in a grid. 
**AvatarView**          | Is a graphical representation of the object (user, order, transaction, et.) image view that can be customized by adding an icon, text | 
**BadgeView**           | Badges are labels that hold small amount of information to help the user’s attention to new, relevant, or updated content within the system. |  
**Chips**               | Displays a tag.
**Stepper**             | Use steppers to help users keep track of their progress when completing a specific task divided in a set of steps. Steppers display to users where they are in the flow and can be used to navigate through the process by selecting steps.

## Inputs 

Used to display form fields, so that user can not only consume information but also provide their own.  

Type           | Description           |
---------------|-----------------------|
Input.Text              | Lets a user enter text.
Input.Number            | Allows a user to enter a number.
Input.Date              | Lets a user choose a date.
Input.Time              | Lets a user select a time.
Input.Toggle            | Lets a user choose between two options.
Input.ChoiceSet         | Allows a user to input a Choice.
Input.Choice            | Describes a choice for use in a ChoiceSet.
**Input.Currency**      | Lets a user enter a currency value.
**Input.FileUpload**    | Lets a user upload one or more files.
**Input.Search**        | Lets a user search with a recent list
**Input.Pin**           | Lets a user to enter a pin code
**Input.Slider**        | Lets a user select a range
**Input.Lookup**        | Lets a user lookup a value via an API
**Input.Segment**       | Is a linear segment made up of multiple segments and allows users to select between multiple options.
**Input.Chips**         | Represent a tagging control.

## Actions

Actions add buttons to the card

Type           | Description           |
---------------|-----------------------|
Action.OpenUrl              | When invoked, show the given URL either by launching it in an external web browser or showing it within an embedded web browser.
*Action.Submit*             | Gathers input fields, merges with the optional data field, and sends an event to the client. It is up to the client to determine how this data is processed. 
Action.ShowCard             | Defines an AdaptiveCard which is shown to the user when the button or link is clicked.
Action.ToggleVisibility     | An action that toggles the visibility of associated card elements.
**Action.SetValues**        | Set values to other target elements for example on selection or index change in input choice.
**Action.ShowModalCard**    | Show Card in the modal
**Action.Authorization**    | When invoked, show the given card for authorization and let's user to authorize payment order or request
**Action.ShowMConfirmationCard** | Display confirmation card
**Action.ShowPopupCard**   | Show Card in the popup
**Action.CopyToClippboard** | Allows user to copy content of target element to the clippoboard

# Components

On their own, atoms don’t provide much substance. However, they become meaningful once you begin to group them together like molecules.

Adaptive Components are a new concept that enables the creation of high-level UI “components” powered by templating and Adaptive Card elements. You can think of them as “molecules”, built by arranging Adaptive Card elements (“atoms”) into unique and helpful ways.

[Support for the components](issues.md#support-for-components). Components has own repository  `v1/AdaptiveCards/components/{ComponentName}`

Type           | Description           |
---------------|-----------------------|
[DisplayMenuItem](menuitem.md)          | Display menu icon, text, description 
DisplayValue            | Display of value with the label, action or link
DisplayStatus           | Consistent display of the status
DisplayAmountCurrency   | Display of amount with currency
LogoView                | Represent a view of logo short, medium or large.
Alert                   | Alerts are used to provide contextual feedback messages that provide relevant information to users. According to different use cases, alerts can be used to display related optional actions and be styled in a way that reflects different severity levels.
PartyAddressComponent   | Lets a user enter an address.
EmptyViewComponent      | Lets a display an empty view with image, description, link etc.
TermsViewComponent      | Lets a display a terms and condition checkbox, link
Hero                | An component typically placed at the top of a card to describe its purpose.

## DataTemplate

Data Template is a component used as a child of other items components. A DataTemplate is used to specify the appearance of data on supported components and native elements and typically binds to the data to be displayed.

[Data Templates](issues.md#Support-for-Data-Templates)

Type      | Description                |
---------------|-----------------------|
AccountPickerDataTemplate | Represent presentation of account in the account picker
AccountProductDataTemplate | Represent presentation of the product in product selector

## Widget   

Widget is a component used as a child of the widget holder on the dashboard screen. Widget has own repository  `v1/AdaptiveCards/widget/{WidgetName}`

[Widgets](issues.md##widgets--widgetholder)

Type      | Description                |
---------------|-----------------------|
ActivityWidget | Represent presentation of the last most important customer events with the system

# Native Elements

Organisms on our planet range in size and complexity, so the same goes for our product’s “organisms.” They could be as small as a chart or as large as an entire page.

Type      | Description              |
---------------|-----------------------|
ChooseLang        | Lets a user select a language
ChooseContacts      | Show local device contacts, enable search and selection
ChooseParty        | Select a context
HelpTip             | More than just a tooltip, these are fully formatted messages typically presented in a modeless dialog.
ChooseAccount      | Used to select an account for the payment. Binds to the list of banking accounts and contains a DateTample of account  |
ChooseProduct    | Provide native behavior of selecting and searching for the product items and link them to the overview. Binds to the list of arrangements and contains a DateTample of arrangement  |   
[WidgetHolder](issues.md##widgets--widgetholder)        | Used to arrange widgets on the screen, allow drag and drop of widgets |  
ActionSwipeSet      | ActionSet allows actions to be displayed on swipe
MapView             | Displays a map.
GrpahView           | **TODO** | 
WebViewer           | **TODO** | 
ScannerView         | **TODO** | 

# Behaviors

Behaviors lets you add functionality to user interface controls without having to subclass them.

Type      | Description              |
---------------|-----------------------|
EventToAction       | Behaviors also enable more advanced scenarios. In the context of commanding, behaviors are a useful approach for connecting a control to a adaptive card action. In addition, they can be used to associate actions with controls that were not designed to interact with actions. For example, they can be used to invoke a action in response to an event firing. |
InfiniteScroll      | **TODO** |

# Card

Used to present actual content. The root element in an Adaptive Card.



Property       | Description           |
---------------|-----------------------|
**[Uri](issues.md#using-uri-for-element-discovering)**  | Central repository of cards `v1/AdaptiveCards/cards/{ScreenName}` and ViewModels `v1/Aggregation/{ScreenName}ViewModel`.
**[basedOn](issues.md#locally-scoped-container)**       | Cards can inherit from other cards to reduce duplication and enable composition. This is achieved by setting the basedOn property to a URI of a master card specification |


## Mester Template 

Central repository of mester screen

* `v1/AdaptiveCards/masterscreens/{ScreenName}`

# Host

Property       | Description           |
---------------|-----------------------|
**[MasterScreen](issues.md#support-for-multi-host-application-environment)**        | Master screen provide the look and feel and standard behavior (e.g. navigation, header and footer links to global pages and so on) for all of the screen that uses that master screen. Together with cards, they produce the output that is rendered in the host. |
**NavigationMobileStyle**     | Define a style of navigation for mobile applications like tabbed, flyout, or both.

More info [about Host](https://docs.microsoft.com/en-us/adaptive-cards/rendering-cards/host-config). 

# Application

Configuration of application will propagate to all child elements as listed above.

Property       | Description           |
---------------|-----------------------|
**FlowDirection**  | Enumerates values that control the layout direction for UI: LeftToRight, RightToLeft 

# Template Extensions

Localization of a Card using a custom Template Extension for example `"$!{TRANSLATION_KEY}"` 

# Navigation

External URLs - point to resources outside of an application are specified with valid absolute URI.

`"http://..."`

Navigation inside the application is specified with a valid relative URI to the screen (card).

`"currentaccountdetails"`

The routing system will attempt to match the URI to a Screen or Card. Therefore, if all the routes in an application are unique, navigation can be performed by only specifying the unique route name as a relative URI. 

Data can be passed as query parameters when performing navigation for example

`"currentaccountdetails?accountNumber=${AccountNumber}"`

Know query names for example ReturnUrl

`"login?ReturnUrl=currentaccountdetails"`

Know parameters, Host wile replace the placeholder with current value from the global context

`"currentaccountdetails?CustomerNumber=*$!*{CurrentCustomerNumber}"`

[Navigation](issues.md#Relative-URL-for-internal-navigation-and-absolute-for-the-external)

More Info:

* [Atomic Design and UI Components: Theory to Practice](https://blog.bitsrc.io/atomic-design-and-ui-components-theory-to-practice-f200db337c24)
* [Designing Card-Based User Interfaces](https://www.smashingmagazine.com/2016/10/designing-card-based-user-interfaces/)
* [Atoms, molecules, organisms, templates, and pages](https://atomicdesign.bradfrost.com/chapter-2/)
* [A Guide to Component Driven Development (CDD)](https://blog.bitsrc.io/a-guide-to-component-driven-development-cdd-69dbd3d07bf0)
* [Adaptive Cards Schema](https://adaptivecards.io/explorer/)
* [Adaptive Cards Components](https://adaptivecards.io/blog/2020/Community-Call-October/) 
* [Consistent Cards](https://github.com/microsoft/AdaptiveCards/blob/main/specs/DesignDiscussions/ConsistentCards.md)
* [Adaptive Cards Features](https://portal.productboard.com/adaptivecards/1-adaptive-cards-features/tabs/4-under-consideration)
* [CardScript](https://wmfs.github.io/tymly-website/reference/#cardscript)
* [Backbase Component List](https://designsystem.backbase.com/v2/component-status)
* [DEM Controls](https://bankapi.net/demdemo/site/docs/quick-starts/controls/index.html)
* [XAML Contorls](https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-controls)
* [Data Templates](https://docs.microsoft.com/en-us/dotnet/desktop/wpf/data/data-templating-overview?view=netframeworkdesktop-4.8)

