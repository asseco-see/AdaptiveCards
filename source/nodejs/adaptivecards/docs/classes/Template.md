[Adaptive Cards Javascript SDK](../README.md) / Template

# Class: Template

Represents a template that can be bound to data.

## Table of contents

### Constructors

- [constructor](Template.md#constructor)

### Methods

- [expand](Template.md#expand)

## Constructors

### constructor

• **new Template**(`payload`)

Initializes a new Template instance based on the provided payload.
Once created, the instance can be bound to different data objects
in a loop.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `any` | The template payload. |

#### Defined in

[template-engine.ts:428](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/template-engine.ts#L428)

## Methods

### expand

▸ **expand**(`context`): `any`

Expands the template using the provided context. Template expansion involves
evaluating the expressions used in the original template payload, as well as
repeating (expanding) parts of that payload that are bound to arrays.

Example:

```typescript
let context = {
    $root: {
        firstName: "John",
        lastName: "Doe",
        children: [
            { fullName: "Jane Doe", age: 9 },
            { fullName: "Alex Doe", age: 12 }
        ]
    }
}

let templatePayload = {
    type: "AdaptiveCard",
    version: "1.2",
    body: [
        {
            type: "TextBlock",
            text: "${firstName} ${lastName}"
        },
        {
            type: "TextBlock",
            $data: "${children}",
            text: "${fullName} (${age})"
        }
    ]
}

let template = new Template(templatePayload);

let expandedTemplate = template.expand(context);
```

With the above code, the value of `expandedTemplate` will be

```json
{
    type: "AdaptiveCard",
    version: "1.2",
    body: [
        {
            type: "TextBlock",
            text: "John Doe"
        },
        {
            type: "TextBlock",
            text: "Jane Doe (9)"
        },
        {
            type: "TextBlock",
            text: "Alex Doe (12)"
        }
    ]
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`IEvaluationContext`](../interfaces/IEvaluationContext.md) | The context to bind the template to. |

#### Returns

`any`

A value representing the expanded template. The type of that value
  is dependent on the type of the original template payload passed to the constructor.

#### Defined in

[template-engine.ts:499](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/template-engine.ts#L499)
