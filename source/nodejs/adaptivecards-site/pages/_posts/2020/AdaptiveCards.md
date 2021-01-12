---
title: Adaptive cards
subtitle: Adaptive cards intro
date: 2020-12-25
github_username: MilanCheSkoric
---

Adaptive cards
===================================================

Designing a good user interface that is responsive, intuitive and functional is the dream of any developer. Adapting it to each possible platform is their nightmare.

Long, long time ago several teams at Microsoft came up with a similar idea. The request for a visual map display came from the bot framework team (cards as a message), the Windows team (live tiles, notifications) and the Outlook team (actionable messages). In the past it would not have been surprising if each team had cooked its own soup, but it turned out differently: The Adaptive Cards were born. 

# What are adaptive cards?
------------
Today it’s crucial to create appealing interfaces and an enjoyable experience across all devices. In order to achieve interface consistency, web and mobile design trends are moving toward the **card-based UI design** approach.

> Cards are those little rectangles full of inclusive images and text that serve as entry points to more detailed information. The word ‘cards’ is an excellent metaphor since they look like real-world tangible cards in user interfaces.
> [Designing Card-Based User Interfaces](https://www.smashingmagazine.com/2016/10/designing-card-based-user-interfaces/)

Adaptive Cards aims to standardize the layouting of Cards independent of the platform.

In Adaptive Cards, the JSON is designed to “transform and adapt” into the native UI of whichever environment they’re being used,  giving the host ultimate control over design and integration with a light-weight UI for all main platforms and networks. 

![img-2-768x280](images/Image-2-768x280.png)

*[Image Source - "SketchNote” by Luise Freese, where she masterfully recreates key moments from the presentation in real-time as they are happening](https://developer.microsoft.com/en-us/sharepoint/blogs/adaptive-cards-community-call-november-14-2019/)* 

The goal is to just need to define the card once, and then being able to make it portable to the different platforms, skinning it according to the platform own requirements. Think of a chameleon, adapting to its surroundings to best mimic them, and you’ll see how an Adaptive Card works.

![img-ac-apps](images/ac-apps.png)
*Overview of one Adaptive Card across different styles*

Adopting more [Card-based UX](https://uxplanet.org/card-based-design-the-pros-cons-and-the-best-practice-2e5ccd6a606d) is generally a great move for any business that wants to create better experiences.

# A little of history

The story began early in 2016, when several teams at Microsoft came to a decision that they all need a similar solution to communicate information in an enhanced way. Windows team was developing Live Tiles, Exchange created Message Cards for actionable messages, Bot framework was using something even different. Moreover at that time other platforms such as Facebook Messenger, Slack, etc.. were defining their own format of cards. 

Therefore a group of several Microsoft employees gathered and together decided to build and define open card format and a set SDKs. 

The result of this work were first Message Cards (introduced around 2017) later transformed into Adaptive Cards (2018).

The main principle behind the cards is their declarative format (thanks to that they are extremely secure, there is no way to inject malicious code). Moreover it is not designed to be only used by Microsoft. It’s not meant to be Microsoft’s property since the beginning. It is an open technology, however its evolution is governed by the “Adaptive Card Working Group” – set of Microsoft employees. What you also need to understand about the cards is that the the hosting app only owns look&feel, however all the content other than plain text is owned by cards authors and hosted elsewhere.

More to read:

* [The history and principles](https://docs.microsoft.com/en-us/adaptive-cards/resources/principles)

## Message Cards

As you already read, Message Cards is the technology that arrived first. It was primarily used for Exchange – to send interactive cards as part of e-mail messages:
The project was being developed for I think nearly two years and made a solid ground for creating Adaptive Cards. Nevertheless you are still able to use Message Cards, they are slightly different to Adaptive Cards

And lastly, what is really significant, is the advise from Microsoft, to try to migrate to Adaptive Cards where possible, as the [Message Cards format is de-emphasized](https://docs.microsoft.com/en-us/outlook/actionable-messages/adaptive-card).

More to read:
 
* [Message Cards](https://docs.microsoft.com/en-us/outlook/actionable-messages/message-card-reference)
* [Message Cards designer and Playground](https://messagecardplayground.azurewebsites.net/)

# Benefits of using Adaptive Cards

The technology was released for public tests in 2018 (during Microsoft Build 2018). It evolved from Message Cards, following the below assumptions:

![img-adaptivecards-splash](images/adaptivecards-splash.png)

**Native rendering**. It must be possible to render it on any platform, thanks to SDKs.

**Develop once, use everywhere**. The card layout only needs to be done once before the different solutions make the card seem native of the respective UI.

**Automatically adapt**. It must adopt to the host UX – therefore designer shouldn’t really take care about it’s look&feel as this will be inherited from the host.

**Purely declarative**. Declarative code is a key for it’s security. No third party code injection thanks to SDK. As Matt said during MS Build 2019:

>It’s all done in a purely declarative way. It’s expressed via JSON, so these apps – the main thing why you would want the purely declarative stuff is teams, outlook, they’re all building extensibility platforms. They need to trust that content from anyone. Anyone can write a bot. You need to make sure that code that comes down that they’re running, they need to know they can trust it. Because there’s no explicit code and there’s just the payload from the layout and some interactivity can be confident that, if you represent an adaptive card, coming from an external source in your own application, you’re not going to subject the users to unnecessary risks, and that’s very true for Microsoft 365 applications like Outlook and Teams as well. 
>*Matt Hidinger, during MS Build 2019* 

The aim was to create an interchangeable, JSON-based scheme for describing simple, visual maps and, in addition, to offer SDKs that can render this map description (examples can be seen in the middle).

![img-middle-earth](images/middle-earth.png)

>I think what you just said answers somewhat of a burning question or question we received multiple times, why would i use Adaptive Cards instead of React Native, instead of flutter, instead of HTML5 and whatnot? The response to that is you don’t. Adaptive Cards is not a full blown app development technology. It’s something that can help you get to results faster in a more beautiful way, in a lightweight way. It’s ready to be integrated in your application regardless of the framework that you’ve decided to use. We’re not asking you to change anything from what you’ve chosen before. 
>*David Claux, referring to Matt’s presentation, MS Build 2019*

Adaptive Cards could therefore easily be confused with a UI framework, because there are also control elements such as text blocks, images and buttons in the Adaptive Card format. Will we write our UI in Adaptive Card format instead of XAML or HTML? Of course not. Just as Markdown has only a fraction of the capabilities of Microsoft Word, the Adaptive Card format focuses on very simple use cases. There is also no code-behind or other means of packaging executable code in an adaptive card.

As we mentioned before, Adaptive Cards is one of these actionable card technologies that goes really well with the MS stack, since they are the ones who came up with the idea. 

Adaptive Cards team already has long list of supported platforms (some official ones like Email, Teams, Cortana, Windows Notifications and Timeline, Bot Framework’s web chat and Outlook’s actionable messages; and other “experimental” ones such as Emulator, Facebook, Slack, Smooch, Webchat, Kik, Telegram, SMS, GroupMe and GitHub, among others).

![img-ac-where](images/ac-where.png)

Also Adaptive cards fits in your applications too

![img-ac-your](images/ac-your.png)

**How they work**

Card Authors describe their content as a simple JSON object. That content can then be rendered natively inside a Host Application, automatically adapting to the look and feel of the Host.

# Adaptive cards - Introduction for Card Authors

"Cross-platform, cross-app snippets of UI". For me they're like amazing little chameleon content carriers. Depending on where you send it, it always looks and feels like it belongs there.

![img-ac-your](images/ac-home.png)

On top of that, these are some of the tech-stuff advantages of implementing Adaptive Cards:
 
1. **Actionable**. Apart from showing data, it will also allow to interact with the form, input data, actively work with it.

2. **Native Performance**. The code works as a “recipe” for the card structure, from which the card’s skinning is determined by the channel in which it is deployed. 
 
3. **Rich functionality**. Adaptive Cards offer a wide range of interactivity. The inputs include dropdowns, text boxes and buttons, and individual sections can be dynamically shown or hidden. This range of functions is larger than that offered by Alexa Presentation Language or Slack Block Kit, for example. When developing the card’s JSON, administrators can also specify what part of the card should be read when voice output is supported.

An Adaptive Card is a JSON-serialized card object model. Every Adaptive Card can be represented as a JSON object that follows a specific schema. The schema defines everything that you can put in an Adaptive Card. Every host application that supports Adaptive Cards must be able to interpret the schema in a way that follows certain rules, but the nature of Adaptive Cards still allows for a lot of flexibility and variation between applications. 

## Adaptive Card structure

The basic structure of a card is as follows:

- **AdaptiveCard** - The root object describes the AdaptiveCard itself, including its element makeup, its actions, how it should be spoken, and the schema version required to render it.
- **body** - The body of the card is made up of building-blocks known as elements. Elements can be composed in nearly infinite arrangements to create many types of cards.
- **actions** - Many cards have a set of actions a user may take on it. This property describes those actions which typically get rendered in an "action bar" at the bottom.

![img-ac-schema](images/ac-schema.png)

In the body of an Adaptive Card, administrators can both display information and gather input from the user. They can also define card actions, what the card does whenever the user clicks on it. Such actions can be either in the card’s body or separated from the body and displayed as buttons that integrate into the UI of each channel .

Property       | Examples              |
---------------|-----------------------|
Cards | AdaptiveCards |
Card element | used to present actual content. These are: TextBlock(Label), RichTextBlock, Media, Image |
Containers | Objects allowing to group controls together, for a better look&feel. These are ActionSet, Container, ColumnSet, FactSet, ImageSet |
Actions | OpenUrl, ShowCard, Submit, ToggleVisibility |
Inputs | used to display form fields, so that user can not only consume information, but also provide their own. There are for example: Text, Toggle, Date, ChoiceSet, Time, Number |

> [!Note] 
> All media (videos, music, images) that are provided as the source of a control has to be available via a secure URL (https). Also, make sure that if you have a multiline text, all new lines are replaced by \n character, to avoid errors in JSON format.

> [!Note] 
> Important note about accessibility: In version 1.3 of the schema we introduced a label property on Inputs to improve accessibility. If the Host app you are targetting supports v1.3 you should use label intead of a TextBlock as seen in some samples below. Once most Host apps have updated to the latest version we will update the samples accordingly. 

## How to start - Tools

To get an Adaptive Card and creating the associated JSON object, there are several options. You can study the schema documentation https://adaptivecards.io/explorer/ and write the JSON in the text editor of your choice. 

### AdaptiveCards Designer

It is much easier to use the online designer https://adaptivecards.io/designer/. The tool offers a WYSIWYG editor for creating maps and generates the corresponding JSON payload in parallel. You can also get inspiration from the examples in the online gallery https://adaptivecards.io/samples/. These can be transferred to the designer with a mouse click and serve as the basis for the map. 

The designer is also available as an npm package and can be integrated into your own web application https://www.npmjs.com/package/adaptivecards-designer. 

### App Studio in Microsoft Teams

Authors can add a new app to their Microsoft Teams where they can author cards and use them right away. Simply go to “More added apps” in your desktop client, then click “More apps” type “app studio” in the search box
    
### Adaptive Card Viewer extension in Visual Studio Code

You can add it as an add-in to your VS Code (https://marketplace.visualstudio.com/items?itemName=tomlm.vscode-adaptivecards). Next, if you edit a JSON file that has a valid adaptive card $schema property ("$schema": "http://adaptivecards.io/schemas/adaptive-card.json"), you can view it by using Ctrl+Shift+V A.

### Author Cards easily directly in Visual Studio Code

Get it in the Marketplace: https://marketplace.visualstudio.com/items?itemName=madewithcardsio.adaptivecardsstudiobeta/

Get the sources: https://github.com/madewithcards/adaptivecardsstudio

### Adaptive Cards CMS” or “Card Author Services”

Adaptive Cards Management System (ACMS) [introduced in April '20](https://adaptivecards.io/blog/2020/Community-Call-April/). You can try release candidate [here](https://adaptivecms-stage.azurewebsites.net/templates/all/results?isClient=true&sortBy=alphabetical).

![img-ac-acms](images/ac-acms.png)

This product offers a centralized place to create, manage, share, and use card templates for your own apps or the entire organization. It includes a user-friendly card management portal, configurable storage and authentication, and a REST API for accessing your cards.

### SDK

SDK is the engine that takes JSON code and using it renders nice looking Adaptive Card. 

The SDK for Authoring Cards, which is available for JavaScript as well as for .NET https://docs.microsoft.com/en-us/adaptive-cards/sdk/authoring-cards/net can be used to create a card at runtime. 

There are already SDKs prepared for the most common platforms, but developers can use SDK to create their own instances of renderers.

Today you can use Adaptive Cards on the following platforms (https://docs.microsoft.com/en-us/adaptive-cards/rendering-cards/getting-started#adaptive-cards-sdks):

* **JavaScript**
* **.NET WPF**
* **.NET HTML**
* **Windows UWP**
* **Android**
* **iOS**
* And also when writting apps using **Flutter** (https://flutterawesome.com/a-flutter-implementation-of-adaptive-cards/)
* **Xamarin** and **React Native** is coming

Where SDK is implemented today and therefore can be used?

* **Microsoft Teams** (SDK is in Bot Framework)
* **Bots** (in general :))
* **Speech** (Bot Framework again)
* **Windows Timeline** (SDK from Windows UWP)
* **Cortana Skills** (SDK in Windows WPF)
* **Email** (Outlook Actionable Messages, SDK built in)
* **Mobile email** (Outlook Actionable Messages, SDK built in, currently only iOS)
* **Skype** (SDK in Bot Framework)
* **Custom solutions** (custom implementation of SDK)

List of partners is availible at (https://docs.microsoft.com/en-us/adaptive-cards/resources/partners#live)

## Sample : Hello, Card!

First we need to prepare the JSON code of the card. Listing below shows the description of a simple card with a heading, running text and an image.

```json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "TextBlock",
      "size": "Medium",
      "weight": "Bolder",
      "text": "Hello, Card!"
    },
    {
      "type": "TextBlock",
      "text": "This is my very first Adaptive Card.",
      "wrap": true
    },
    {
      "type": "Image",
      "url": "https://pixabay.com/..._640.jpg",
      "size": "Medium"
    }
  ],
  "version": "1.2"
}
```

![img-ac-schema](images/ac-hello-card.png)

Listing below shows the C# code ,which creates exactly the same Adaptive Card as in Listing above.

```csharp
AdaptiveCard card = new AdaptiveCard(new AdaptiveSchemaVersion(1, 2));
 
card.Body.Add(new AdaptiveTextBlock()
  {
    Size = AdaptiveTextSize.Medium,
    Weight = AdaptiveTextWeight.Bolder,
    Text = "Hello, Card"
  });
 
card.Body.Add(new AdaptiveTextBlock()
  {
    Text = "This is my very first Adaptive Card.",
    Wrap = true
  });
 
card.Body.Add(new AdaptiveImage()
  {
    Url = new Uri("https://pixabay.com/..._640.jpg"),
    Size = AdaptiveImageSize.Medium
  });
 
string json = card.ToJson();
}
```

## Actions

Adaptive cards can also contain input fields and buttons to interact with the user. The possibilities are very limited: Text and number input, date and time selection, a selection list and a checkbox are available as control elements. Longer, more complex forms will therefore not be designed with Adaptive Cards, but the options available are sufficient for quick feedback from the user.

Buttons (actions) can only expressly express what they are supposed to trigger - as already described, no code to be executed is supplied with the card due to the technology independence. The standard actions that can be selected are OpenUrl (to open a specified URL), Submit (to send all form entries ) and ShowCard (to display another Adaptive Card, either as a pop-up or below the card). As soon as an action is triggered by the user, the host application receives a notification (modeled as an event in the WPF SDK, for example) and has to decide which code should be executed. 

```csharp
// Register for OnAction event
renderedCard.OnAction += (card, eventArgs) =>
{
  if (eventArgs.Action is AdaptiveOpenUrlAction openUrlAction)
  {
    var url = openUrlAction.Url;
    Process.Start(url.AbsoluteUri);
  }
};
```

If the host application is a WPF application, the OpenUrl-Action, for example, an external browser can be opened (code abowe) - or the link can be displayed in an embedded web browser control.

> [!Note] 
> Card actions can be used in the card’s body when an element has a selectAction property. 
> Adaptive Cards 1.2 introduced the ability for the card author to specify where and how they want actions to appear by including an ActionSet.

### Inline Action

**SelectAction** represent Action that will be invoked when the Container is tapped or selected. Action.ShowCard is not supported.

You can either add a selectAction to the whole card or different components in the card like an image or a container. 

```json
{
	"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
	"type": "AdaptiveCard",
	"version": "1.0",
	"body": [
		{
			"type": "Container",
			"items": [
				{
					"type": "TextBlock",
					"text": "This is some text"
				}
			],
			"selectAction": {
				"type": "Action.OpenUrl",
				"title": "cool link",
				"url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
			}
		},
		{
			"type": "Container",
			"style": "emphasis",
			"items": [
				{
					"type": "TextBlock",
					"text": "Emphasis container"
				}
			],
			"selectAction": {
				"type": "Action.OpenUrl",
				"title": "cool link 2",
				"url": "https://msn.com"
			}
		},
		{
			"type": "Container",
			"items": [
				{
					"type": "TextBlock",
					"text": "Default container again, using ShowCard",
					"wrap": true
				}
			],
			"selectAction": {
				"type": "Action.Submit",
				"title": "Submit action",
				"data": "Submitted!"
			}
		},
		{
			"type": "Container",
			"items": [
				{
					"type": "TextBlock",
					"text": "Submit action"
				}
			],
			"selectAction": {
				"type": "Action.Submit",
				"title": "Submit action",
				"data": {
					"info": "My submit action data"
				}
			}
		}
	]
}
```

Use a Container to associate an action with group of elements: by setting the selectAction property of a Container, the Container and its content become a single clickable area that triggers the specified action.

### Submit Action

If you look at [Action.Submit in the schema](https://adaptivecards.io/explorer/Action.Submit.html), you will see that a submit action’s data property can be either a string or an object. A submit action has two possible behaviors that correspond to these two possible data types. If you use a string as a submit action’s data property then the submit action will behave in a way that can be referred to as the “string” submit action behavior. If you use an object as a submit action’s data property or if you omit the data property then the submit action will behave in a way that can be referred to as the “object” submit action behavior.

A string submit action automatically sends a message from the user to the bot that shows up in the client application’s conversation history as though the user typed the message and sent it manually. An object submit action automatically sends an invisible message from the user to the bot that contains hidden data. (To draw an analogy to the actions of other types of rich cards like hero cards and receipt cards, string submit actions and object submit actions roughly correspond to the card actions known as imBack and postBack respectively.) Here’s what it might look like when you click on a string submit action:

```json
{
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.0",
  "actions": [
    {
      "type": "Action.Submit",
      "title": "Click here to say \"Hello\"",
      "data": "Hello"
    }
  ]
}
```

The reason behind the name “submit action” becomes clear when an Adaptive Card contains input fields. A submit action is used to “submit” the information provided in the input fields by combining that information with anything already in the data property and sending it to the bot. Because a string cannot have properties added to it, you cannot use a string submit action in a card that contains input fields. If the submit action tries to combine the input fields with the data property and the data property is a string then the action will fail.

When using the Bot Framework, clicking on a submit action will send a Bot Framework message activity to the bot. A string submit action will simply transfer its string data into the activity’s text property. An object submit action has a somewhat more complicated process of populating the activity’s value property while leaving the text property empty. Each input field in the object submit action’s card will be represented as a property of that value object and the properties will be named according to each input field’s ID. Any properties already in the object submit action’s data property will also be present in the value object. For example, you might have an Adaptive Card like this:

```json
{
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.0",
  "body": [
    {
      "type": "Input.Text",
      "id": "id_text"
    },
    {
      "type": "Input.Number",
      "id": "id_number"
    }
  ],
  "actions": [
    {
      "type": "Action.Submit",
      "title": "Submit",
      "data": {
        "prop1": true,
        "prop2": []
      }
    }
  ]
}
```

When the user clicks the submit button, an invisible message activity will be sent from the user to the bot. That activity will have the following object as its value property:

```json
{
  "id_number": "30",
  "id_text": "Kyle",
  "prop1": true,
  "prop2": []
}
```

More info

* [Cards Reference](https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-reference)
* [How To Read Data On Action Buttons In Adaptive Card](https://www.c-sharpcorner.com/article/botframework-reactive-adaptive-cards-how-to-read-data-on-action-buttons-in-adap2/)

### Http Action

Outlook Actionable Messages use an HTTP-based action model via the Action.Http type. Action.Http makes it possible to make a GET or POST request to a specific target url as a result of a user taking an action in a card.

```json
{
  "type": "AdaptiveCard",
  "version": "1.0",
  "body": [
    {
      "type": "TextBlock",
      "text": "Hello world!"
    }
  ],
  "actions": [
    {
      "type": "Action.Http",
      "title": "Click me!",
      "method": "POST",
      "url": "https://contoso.com/api/...",
      "body": "<body of the POST request>",
      "headers": [
        { "name": "Content-Type", "value": "application/json" }
      ]
    }
  ]
}
```


**Implementing the Web API**

The URL specified in the url property must conform to the following requirements.

* The endpoint must accept POST requests.
* The endpoint should accept the contents of the body property.
* The endpoint should use the JWT sent in the Authorization header to verify that requests come from Microsoft.

**Input value substitution**

Adaptive Cards may contain inputs, and it may be necessary to pass the values of these inputs to the target endpoint via an Action.Http action. This is done using input value substitution. Consider the following example:

```json
{
  "type": "AdaptiveCard",
  "version": "1.0",
  "body": [
    {
      "type": "TextBlock",
      "text": "What's your name?"
    },
    {
      "type": "Input.Text",
      "id": "nameInput",
      "placeholder": "Type your name"
    }
  ],
  "actions": [
    {
      "type": "Action.Http",
      "title": "Say hello",
      "method": "GET",
      "url": "https://contoso.com/sayhello?name={{nameInput.value}}"
    }
  ]
}
```

The above card defines a text input and sets it id property to nameInput. It also defines an Action.Http action that makes a GET call to an endpoint on domain contoso.com. With the inclusion of ?name={{nameInput.value}} on the target URL, the value of the input with id nameInput will be dynamically substituted at the time the action is taken by the user. So if the user had entered the name David in the text input, the target URL after substitution would be https://contoso.com/sayhello?name=David

Input value substitution also works in the body property of an Action.Http action. For example:

```json
{
  "type": "AdaptiveCard",
  "version": "1.0",
  "body": [
    {
      "type": "TextBlock",
      "text": "What's your name?"
    },
    {
      "type": "Input.Text",
      "id": "nameInput",
      "placeholder": "Type your name"
    }
  ],
  "actions": [
    {
      "type": "Action.Http",
      "title": "Say hello",
      "method": "POST",
      "url": "https://contoso.com/sayhello",
      "body": "{{nameInput.value}}"
    }
  ]
}
```

**Reporting Action.Http execution success or failure**

Your service should return an HTTP 200 status code when it successfully executes an Action.Http action. If the action execution fails, your service should return an HTTP 4xx status code, and it should also include the CARD-ACTION-STATUS HTTP header in its response to specify a custom error message. The value of that header will be displayed to the end-user in case the Action.Http fails to execute.

**Refresh cards**

Refresh cards are a very powerful mechanism that allow Action.Http actions to fully update the card on the fly as the action successfully completes

To refresh a card as a result of an Action.Http action, a service needs to do the following:

* Include the JSON payload of the new card in the body of the response to the HTTP POST request it received.
* Add the CARD-UPDATE-IN-BODY: true HTTP header to the response, in order to let the receiving client know that it should parse the response body and extract a new card (this is to avoid unnecessary processing when no refresh card is included.)

More info

* [Actionable messages in Outlook and Office 365 Groups](https://docs.microsoft.com/en-us/outlook/actionable-messages/#outlook-version-requirements-for-actionable-messages)
* [Designing Outlook Actionable Message cards with the Adaptive Card format](https://docs.microsoft.com/en-us/outlook/actionable-messages/adaptive-card#outlook-specific-adaptive-card-properties-and-features?WT.mc_id=DX-MVP-5003911)

# Templating

The possibility of separating the layout of the Adaptive Card from the specific data is relatively new. Distantly comparable to View and ViewModel, the JSON of the card is provided with data binding expressions that are later dynamically applied to a DataContext. Simple expressions such as conditions or iterations are also possible and make creating a dynamic adaptive card much easier. 

Listing below shows a data binding expression for composing a salutation based on gender and last name. A list of hobbies is rendered below. If the $ data property is set to an array on an element ( hobbies), an instance is automatically created for each array item. The rendering SDKs offer methods to merge the client layout and data into a map - but the data object can also be supplied as part of the map JSON.

```json
{
  "type": "AdaptiveCard",
  "version": "1.2",
  "body": [
    {
      "type": "TextBlock",
      "text": "Hallo ${if(gender == 'm', 'Herr', 'Frau')} ${lastName}!",
      "weight": "bolder"
    },
    {
      "type": "TextBlock",
      "$data": "${hobbies}",
      "text": "${hobby}"
    }
  ],
  "$data": {
    "lastName": "Schacherl",
    "gender": "m",
    "hobbies": [
      { "hobby": "Development" },
      { "hobby": "Music" },
      { "hobby": "Tennis" }
    ]
  }
}
```

Writing a template is as simple as replacing the "non-static" content of your card with *binding expressions* for example `"text": "Hello ${name}"` instand of `"text": "Hello Matt"`

## Basic data binding

Within your JSON file you can use placeholders like {person.firstName} or even access multiple levels with like {person.address.streeet} or {person.contact[2].phone}. The templating library is capable of running functions over your data, can repeat JSON structures based on arrays and a few more things.

You can easily access your data using these placeholders to start with:

```json
{
 "{<property>}": "Implicitly binds to `$data.<property>`",
 "$data": "The current data object",
 "$root": "The root data object.",
 "$index": "The current index when iterating",
 "$host": "Access properties of the host *(not working yet)*"
}
```

### Iterations and Conditions

All this gets even more interesting when we add iterations and conditions to the plate. Let us admit we have the following data returned from any API or database

```json
{
 "title": "My list of people:",
 "count": 4,
 "people": [{
   "firstName": "Micky",
   "lastName": "Mouse",
   "age": 44
  },
  {
   "firstName": "Donald",
   "lastName": "Duck",
   "age": 12
  },
  {
   "firstName": "Harry",
   "lastName": "Potter",
   "age": 18
  },
  {
   "firstName": "Matt",
   "lastName": "Hidinger",
   "age": "28"
  }
 ]
}
```

Now we want to bind this onto the following JSON template:

```json
{
    "type": "AdaptiveCard",
    "body": [
        {
            "type": "TextBlock",
            "size": "Medium",
            "weight": "Bolder",
            "text": "{title}"
        },
        {
            "type": "FactSet",
            "facts": [
                {
                  "$data": "{people}",
                  "$when": "{$index.age > 12}",
                  "title": "{$index.firstName} {$index.lastName}",
                  "value": "{$index.age}"
                }
            ]
        }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.0"
}
```

As you can see we access the properties from the data like the title but also firstName and lastName from the people’s array. the $when condition makes sure we only render people who are older than 12.
After transforming the data the resulting JSON will be this:

```json
{
 "type": "AdaptiveCard",
 "body": [{
   "type": "TextBlock",
   "size": "Medium",
   "weight": "Bolder",
   "text": "My list of people"
  },
  {
   "type": "FactSet",
   "facts": [{
     "title": "Micky Mouse",
     "value": "44"
    },
    {
     "title": "Harry Potter",
     "value": "18"
    },
    {
     "title": "Matt Hidinger",
     "value": "28"
    }
   ]
  }
 ],
 "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
 "version": "1.0"
}
```

The transformation ignored Donald because his age is not above 12. But it repeatedly added facts for each of the people with condition met.

## Providing the data

Now that you have a template, you'll want to provide the data that makes it complete. You have two options to do this:

* **Option A**: Inline within the template payload. You can provide the data inline within the AdaptiveCard template payload. To do so, simply add a $data attribute to the root AdaptiveCard object.
* **Option B**: As a separate data object. With this option you provide two separate objects to the Templating SDK at runtime: the template and the data. This will be the more common approach, since typically you will create a template and want to provide dynamic data later.

### Separating the template from the data

Alternatively (and more likely), you'll create a re-usable card template without including the data. This template could be stored as a file and added to source control.

```json
{
    "type": "AdaptiveCard",
    "body": [
        {
            "type": "TextBlock",
            "text": "Hi ${employee.name}! Here's a bit about your org..."
        },
        {
            "type": "TextBlock",
            "text": "Your manager is: ${employee.manager.name}"
        },
        {
            "type": "TextBlock",
            "text": "3 of your peers are: ${employee.peers[0].name}, ${employee.peers[1].name}, ${employee.peers[2].name}"
        }
    ]
}
```

Then load it up and provide the data at runtime using the Templating SDKs.

**JavaScript example**

Using the adaptivecards-templating package.

```js
var template = new ACData.Template({ 
    // EmployeeCardTemplate goes here
});

// Specify data at runtime
var card = template.expand({
    $root: {
        "employee": {
            "name": "Matt",
            "manager": { "name": "Thomas" },
            "peers": [{
                "name": "Andrew" 
            }, { 
                "name": "Lei"
            }, { 
                "name": "Mary Anne"
            }, { 
                "name": "Adam"
            }]
        }
    }
});

// Now you have an AdaptiveCard ready to render!
```

More Info

* [Get started with templating and the new Adaptive Expression Language](https://adaptivecards.io/blog/2020/Templating-RC/)

## Extensibility 

If the existing functionality of the Adaptive Cards specification is insufficient, the format can also be expanded. For example, there is currently no progress bar - and one could get the idea of ​​wanting to provide such an element for adaptive cards. Let's take a look at code belove: 

```json
{
  "type": "AdaptiveCard",
  "version": "1.2",
  "body": [
    {
      "type": "ProgressBar",
      "value": 30,
      "fallback": {
        "type": "TextBlock",
        "text": "Aktueller Status: 30 %"
      }
    }
  ]
}
```

ProgressBar is simply specified as the type , and we also define a value . Since the individual rendering SDKs cannot do anything with it, it is advisable to also use the fallback property of the adaptive cards and specify an alternative visualization there.

The (technology-dependent) renderer must be extended so that the Progress Bar can be visualized. In extreme cases, this means that you have to take care of the appropriate implementation in WPF, JavaScript, Xamarin, etc. so that the Adaptive Card is displayed correctly everywhere. If we stay in the world of WPF in our example:

```csharp
public class MyAdaptiveProgressBar : AdaptiveElement
{
  public MyAdaptiveProgressBar()
  {
    this.Type = "ProgressBar";
  }
 
  public override string Type { get; set; }
 
  public double Value { get; set; }
 
  public static FrameworkElement Render(
    MyAdaptiveProgressBar progressBar, 
    AdaptiveRenderContext context)
  {
    return new ProgressBar()
    {
      Height = 20,
      Value = progressBar.Value
    };
  }
}
```

Code above shows the implementation of the MyAdaptiveProgressBar control . The class is derived from the abstract AdaptiveElement class and sets the Type Property to the value that was also used in JSON. All other properties from the Adaptive Card JSON are automatically mapped to properties of the same name in the class (in this case the Value property ). The static Render method ultimately contains the code that provides the visual element.

Before parsing and rendering, it is now necessary to make the new type known (code below). If a suitable renderer is found at the time of the RenderCard method, this is used - if not, the fallback visualization is used. 

```csharp
// Register progress bar element// for parser
AdaptiveTypedElementConverter.RegisterTypedElement<MyAdaptiveProgressBar>();
 
// Parse
var parseResult = AdaptiveCard.FromJson(json);
var adaptiveCard = parseResult.Card;
 
// Add progress bar renderer
var renderer = new AdaptiveCardRenderer();
renderer.ElementRenderers.Set<MyAdaptiveProgressBar>(
  MyAdaptiveProgressBar.Render);
 
// Render the card
var renderedCard = renderer.RenderCard(adaptiveCard);
```

You have to be aware that adding additional controls contradicts the original idea of ​​the adaptive cards, since interoperability suffers as a result. It is possible that the map can then only be displayed correctly in one UI technology. The goal of having a description language that is as simple as possible can also be diluted quickly with extensions. Used with measure and goal, it can still be helpful to adapt the Adaptive Cards even closer to your own requirements.

More Info

* [Extensibility with the JavaScript SDK version 2.0 and greater](https://docs.microsoft.com/en-us/adaptive-cards/sdk/rendering-cards/javascript/extensibility)
* [Card Script](https://wmfs.github.io/tymly-website/reference/#cardscript)
* [Designing Outlook Actionable Message cards with the Adaptive Card format](https://docs.microsoft.com/en-us/outlook/actionable-messages/adaptive-card)
* [Cards reference](https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-reference)

## Rendering

A major goal when designing the Adaptive Cards was to make the description independent of UI frameworks. 
At the time the card is created, it does not matter whether the visualization is later on the web, in the WPF, Xamarin, iOS, a chatbot or simply in the form of an image. 

Various rendering SDKs are all-ready available from Microsoft, which can represent an adaptive card in the respective technology using the native control elements. 

The specific look and feel therefore lies in the target environment and technology (the so-called host application) - adaptive cards will never be pixel-perfect. 

Nevertheless - similar to Markdown - the intention can be expressed very well:What is important? What should be shown next to each other? Should this text be written smaller? Is normal text or an email address entered in this field?

In order to display the previously created simple Adaptive Card in the WPF application, the NuGet Package AdaptiveCards.Rendering.Wpf is required. Unfortunately, it is currently only available for the .NET Framework and not for .NET Core. 

With the help of the AdaptiveCardRenderer class, an Adaptive Card can be converted to a FrameworkElement and displayed, as shown in code below:

```csharp
// Load and parse the card
var json = File.ReadAllText("hellocard.json");
var parseResult = AdaptiveCard.FromJson(json);
 
// Render the card
var renderer = new AdaptiveCardRenderer();
var renderedCard = renderer.RenderCard(parseResult.Card);
 
// Add the FrameworkElement to the UI
this.dashboardPanel.Children.Add(renderedCard.FrameworkElement);
```

### Customization

There are several ways you can customize what is rendered.

**Host Config**

A [HostConfig](https://docs.microsoft.com/en-us/adaptive-cards/rendering-cards/host-config) is a shared, cross-platform configuration object that controls the basic styling and behavior of cards inside your app. It defines things like font sizes, spacing between elements, colors, number of supported actions, etc.

**Native platform styling**

Most UI frameworks allow you to style the rendered card by using the native UI framework styling. For example, in HTML you can specify CSS classes for the HTML, or in XAML you can pass in a custom ResourceDictionary for fine-grained control of the output.

Native styling:

* [JavaScript](https://docs.microsoft.com/en-us/adaptive-cards/sdk/rendering-cards/javascript/native-styling)
* [.NET HTML](https://docs.microsoft.com/en-us/adaptive-cards/sdk/rendering-cards/net-html/native-styling)
* [WPF](https://docs.microsoft.com/en-us/adaptive-cards/sdk/rendering-cards/net-wpf/native-styling)
* [Android](https://docs.microsoft.com/en-us/adaptive-cards/sdk/rendering-cards/android/native-styling)

**Implement a renderer**

The following specification describes how implement an Adaptive Card renderer on any UI platform https://docs.microsoft.com/en-us/adaptive-cards/rendering-cards/implement-a-renderer

# Adaptive Cards and Microservices

Why are Adaptive Cards interesting for web or Windows developers? Think of the following scenario: In many applications, only a dashboard can help counter the fear of the empty, white start page. In addition to current notifications, more or less useful data and facts serve as a starting point for the application. It is not uncommon for this dashboard to be adaptable and expandable. The individual cards could now be written with the UI technology of your choice - or you could use adaptive cards. 

The big advantage arises in microservice architectures: What if the different services were able to independently provide cards for the dashboard? The user interface only makes the space available and fetches the contributions for the dashboard from the individual services - not only in the form of the raw data, but also in the form of an adaptive card visualization. Due to the minimalist and declarative description, there is a visually coherent overall picture even with several cards: colors or font sizes are not absolutely specified, but only with expressions such as Small, Medium, Large or Accent, Warning, Attention .

## Adaptive Card Components

Adaptive Components are a new concept that enable the creation of high-level UI “components” powered by templating and Adaptive Card elements. You can think of them like “molecules”, built by arranging Adaptive Card elements (“atoms”) into unique and helpful ways.

Components can be rendered within the card body by providing the name of the component you want to use, using the convention of [COMPONENT-DOMAIN]/[COMPONENT-NAME]. For example, if you want to use the File Chiclet component seen above, you’ll use the name "graph.microsoft.com/file" and provide the file properties received from the Graph API.

Notice only the data properties are needed to render the component, so for Files, you pass along the name, fileType, and webUrl.

```json
{
    "type": "AdaptiveCard",
    "body": [
        {
            "type": "Component",
            "name": "graph.microsoft.com/file",
            "properties": {
               "name": "FY2020-Contoso.docx",
               "fileType": "docx",
               "webUrl": "https://adaptivecardsblob.blob.core.windows.net/assets/AdaptiveCardsSpec.docx"
            }
        }
    ]
}
```

When authoring a component for others to use, the creator gives the component a name, describes the shape of the data it expects, and uses Templating and Expressions to transform the data into Adaptive Card elements. 

The power of components is really in 3 areas:

* Allow apps to learn new UI components on the fly. Because Components are purely declarative, we can rely on component registries to allow the fetching of remote components via HTTP.
* Help bootstrap the sharing of common types of UI among teams internally or with the public. Components can be hosted in GitHub repos and shared with others, making developers much more productive when building Cards.
* Support multiple views over data. Lastly, we plan to make a component broadly useful, on different Hosts, with different display constraints, and different renderer schema versions. The example below shows a simple “Thing” component that has 3 different views over the same data.

More Info 

* [Issue 4761](https://github.com/microsoft/AdaptiveCards/issues/4761)
* [Components Designer](https://adaptivecardsci.z5.web.core.windows.net/pr/4894/designer)
* [Video](https://www.youtube.com/watch?v=rG5QtL4vhRk&feature=youtu.be)

# Challenges when using Adaptive Cards

But there are also some other quite fundamental issues to running your own Card infrastructure where you'll be own your own, namely:

**User authentication**
For anything other than completely public Cards you need to know "Who's looking at the Card?" Will users log in separately to see your Cards or should they share a session with, say, your SharePoint?

**Permissions**
What Cards may a user see or find? What will they see if there they don't have permission?

**Audiences**
Will users be able to personalize what Cards they see? If so, where will these preferences be stored? And what Cards may have to be mandatory for everyone?

**Multi-lingual**
If you speak French you want to see French buttons, user help and labels everywhere. Not to mention that the natural language processing should understand you, too.

**Dates and formats**
Oftentimes JSON shows time as Unix time, but don't expect Adaptive Cards to be able to cleverly reformat this into user-friendly timestamps like "X minutes ago." Or in Europe they need dates to be formatted DD.MM, not MM/DD as commonly used in the US.

**Updated data detection**
Let's say the API with your "Open Helpdesk tickets" has changed. How will this update be detected? And how will the Card know to get refreshed or recalled?

**Transforming data**
Sometimes what you get in JSON, say from an API, isn't immediately ready for your use case. For example, you may need to run one endpoint's results against another endpoint for more details, or you may want to reformat or truncate inputs or change various aspects about the incoming data. A JS runtime like Node.js could be an answer, but that isn't part of Adaptive Cards.

# Roadmap

Major investment areas and what to expect for the rest of 2020 and throughout 2021.

![img-ac-roadmap](images/ac-roadmap.png)

**Adaptive Cards 1.1**

It was released in [October 2018](https://github.com/Microsoft/AdaptiveCards/wiki/1.1-Feature-List). It contained 10 important features:

**Adaptive Cards 1.2**

This [release notes](https://github.com/microsoft/AdaptiveCards/releases/tag/v1.2.0) was delivered to the market in June 2019

**Adaptive Cards 1.3**

This [release notes](https://github.com/microsoft/AdaptiveCards/releases/tag/2020.07) was delivered to the market in August 2020

**Adaptive Cards 2.0, vNext**

In parallel with the 1.x version of the Cards Matt’s team is developing a side project under 2.x or vNext code-name. Coming in Q4 and Q1 2021

This feature pack is still under development. You can [monitor what is going to be released here](https://portal.productboard.com/adaptivecards/1-adaptive-cards-features/tabs/4-under-consideration). 

**Currently supported Versions**

Product       | Version              |
--------------|----------------------| 
MS Teams | 1.2* |
Outlook Desktop | 1.2 |
Outlook Web & Mobile | 1.2 |
Power Platform | 1.2** |
Bot Framework | 1.3 |
Web Chat | 1.3 |
Webex Teams |1.3 |

* MS Teams does not support all features. 
** Power Flow uses a custom template binding syntax

More Info

* [Aadaptive Cards 1.3 simpler cards more powerfull](https://medium.com/@tim.cadenbach/adaptivecards-1-3-simpler-cards-more-powerfull-49cb382f471f)
* [Adaptive Cards Roadmap](https://adaptivecards.io/roadmap/)
* [Adaptive Cards Issues](https://github.com/Microsoft/AdaptiveCards/issues)
* [Technical questions](https://stackoverflow.com/questions/tagged/adaptive-cards)
* [Adaptive Card Blog](https://adaptivecards.io/blog/)

# Are there alternatives?

Although Adaptive Cards are supported in other programs as well, some competitors (such as Slack) and other platforms (like Discord, mostly for gamers) are releasing [their own technologies too](https://api.slack.com/block-kit).

Despite we understand the competitive spirit of this race to the top, we hope that this does not last for long. The whole point of Adaptive Cards was to provide a way to develop platform-agnostic UI software, and with the current situation we might instead end up having different standards for all the different platforms, again.

There are platforms that actually work alongside Adaptive Cards to augment them with all the features organizations typically require. With Digital Assistant for example users get the most native experience for the platform they're using.

In a browser environment, we have our own Assistant Cards which are HTML5. But for Microsoft Teams we translate this Card into an Adaptive Card on the fly (see example on the right).
And for other platforms we use their native layouts, too: For Slack the Assistant shows Cards as [Block Kit](https://www.adenin.com/glossary/slack-block-kit/), with Alexa the native format is called [APL](https://www.adenin.com/glossary/alexa-presentation-language-apl/) and Google Assistant responses are in the [Rich responses](https://developers.google.com/assistant/conversational/df-asdk/rich-responses) format.
It is this cross-platform compatibility that makes it easy for organizations to truly write a Card once, and deploy it everywhere without having to familiarize yourself with every nuance of every target channel.

# Recap

Adaptive Cards can do many things and serve many purposes. New features have lately been added to Adaptive Cards and will likely continue to be added in the future. It’s also likely that more applications will adopt greater support for Adaptive Cards as they gain popularity.

More Info: 

* [Save Adaptive Cards work using VS Code Extension – Adaptive Cards Studio](https://d365demystified.com/2020/11/27/save-adaptive-cards-work-using-vs-code-extension-adaptive-cards-studio-quick-tip/amp/)
* [Adaptive App in Web Apps Angular .Net 5](https://www.youtube.com/watch?v=Nz0UqQSHxcU&feature=youtu.be)
* [Elevate user experiences with Teams and Adaptive Cards ](https://techcommunity.microsoft.com/t5/video-hub/elevate-user-experiences-with-teams-and-adaptive-cards/m-p/1689460)
* [Adaptive Cards Web Component](https://github.com/DeeJayTC/adaptivecards-wc)
* [Haaaave you met Adaptive Cards?](https://www.virtualpowergroup.co.uk/blog/haaaave-you-met-adaptive-cards)
* [Adaptive Cards: Actionable Messages in Outlook](https://www.virtualpowergroup.co.uk/completed-event/ac2)
* [Last action hero with adaptive cards for cloud demo system ES5](https://blogs.sap.com/2020/09/18/last-action-hero-with-adaptive-cards-for-cloud-demo-system-es5/)
* [Adaptive Cards for Outlook Actionable Messages using Power Automate | Power Platform](https://d365demystified.com/2020/11/23/adaptive-cards-for-outlook-actionable-messages-using-power-automate-power-platform/amp/)
* [Why templating for Adaptive Cards is a game-changer](https://medium.com/@tim.cadenbach/why-templating-for-adaptive-cards-is-a-game-changer-1606de3226ed)
* [Consistent Cards](https://github.com/microsoft/AdaptiveCards/blob/main/specs/DesignDiscussions/ConsistentCards.md)
* [Adaptive Cards, what else can you use them for?](https://medium.com/@tim.cadenbach/adaptive-cards-what-else-can-you-use-them-for-1cf6f9819c1a)
* [Adaptive Cards in Andorid](https://medium.com/@sasanksunkavalli/introduction-to-microsoft-adaptive-cards-in-android-1d5b19ad1c20)
* [Adaptive Cards for Blazor](https://www.adaptivecardsblazor.com/)
* [Multi line Approvals with Adaptive Cards, Outlook and Power Automate](https://www.bythedevs.com/amp/multi-line-approvals-with-adaptive-cards-outlook-and-power-automate)
* [Using Adaptive Cards in Flutter: Open-Source library from Neohelden](https://neohelden.com/blog/tech/using-adaptive-cards-in-flutter/)
* [Adaptive Cards in Outlook – ultimate guide](https://poszytek.eu/en/microsoft-en/office-365-en/powerautomate-en/adaptive-cards-in-outlook-ultimate-guide/)
* [Video: Microsoft VirtualHub - Adaptive Cards in Microsoft Teams processes](https://youtu.be/_mqg9eSHtUA)
* [Using Adaptive Cards in PCF](https://www.dancingwithcrm.com/adaptive-cards-and-pcf/)
* [Microsoft's Adaptive Cards framework aims to unify design across platforms](https://www.windowscentral.com/adaptive-cards)
* [guidance-for-adaptive-cards-custom-visual-1-0-2-fact-set](https://blog.paradigmbi.com.au/post/2020/11/01/guidance-for-adaptive-cards-custom-visual-1-0-2-fact-set)