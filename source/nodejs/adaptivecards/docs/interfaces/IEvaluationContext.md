[Adaptive Cards Javascript SDK](../README.md) / IEvaluationContext

# Interface: IEvaluationContext

Holds the context used to expand a template.

## Table of contents

### Properties

- [$root](IEvaluationContext.md#$root)

## Properties

### $root

• **$root**: `any`

The root data object the template will bind to. Expressions that refer to $root in the template payload
map to this field. Initially, $data also maps to $root.

#### Defined in

[template-engine.ts:251](https://github.com/asseco-see/AdaptiveCards/blob/1f0afdc45/source/nodejs/adaptivecards/src/template-engine.ts#L251)
