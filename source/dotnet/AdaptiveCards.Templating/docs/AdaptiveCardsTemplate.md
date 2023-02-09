<a name='assembly'></a>
# AdaptiveCards.Templating

## Contents

- [AdaptiveCardTemplate](#T-AdaptiveCards-Templating-AdaptiveCardTemplate 'AdaptiveCards.Templating.AdaptiveCardTemplate')
  - [#ctor(jsonTemplate)](#M-AdaptiveCards-Templating-AdaptiveCardTemplate-#ctor-System-Object- 'AdaptiveCards.Templating.AdaptiveCardTemplate.#ctor(System.Object)')
  - [Expand(context,nullSubstitutionOption)](#M-AdaptiveCards-Templating-AdaptiveCardTemplate-Expand-AdaptiveCards-Templating-EvaluationContext,System-Func{System-String,System-Object}- 'AdaptiveCards.Templating.AdaptiveCardTemplate.Expand(AdaptiveCards.Templating.EvaluationContext,System.Func{System.String,System.Object})')
  - [Expand(rootData,nullSubstitutionOption)](#M-AdaptiveCards-Templating-AdaptiveCardTemplate-Expand-System-Object,System-Func{System-String,System-Object}- 'AdaptiveCards.Templating.AdaptiveCardTemplate.Expand(System.Object,System.Func{System.String,System.Object})')
  - [GetLastTemplateExpansionWarnings()](#M-AdaptiveCards-Templating-AdaptiveCardTemplate-GetLastTemplateExpansionWarnings 'AdaptiveCards.Templating.AdaptiveCardTemplate.GetLastTemplateExpansionWarnings')
- [AdaptiveCardsTemplateParserBaseListener](#T-AdaptiveCardsTemplateParserBaseListener 'AdaptiveCardsTemplateParserBaseListener')
  - [EnterArray(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterArray-AdaptiveCardsTemplateParser-ArrayContext- 'AdaptiveCardsTemplateParserBaseListener.EnterArray(AdaptiveCardsTemplateParser.ArrayContext)')
  - [EnterEveryRule()](#M-AdaptiveCardsTemplateParserBaseListener-EnterEveryRule-Antlr4-Runtime-ParserRuleContext- 'AdaptiveCardsTemplateParserBaseListener.EnterEveryRule(Antlr4.Runtime.ParserRuleContext)')
  - [EnterJson(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterJson-AdaptiveCardsTemplateParser-JsonContext- 'AdaptiveCardsTemplateParserBaseListener.EnterJson(AdaptiveCardsTemplateParser.JsonContext)')
  - [EnterJsonPair(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterJsonPair-AdaptiveCardsTemplateParser-JsonPairContext- 'AdaptiveCardsTemplateParserBaseListener.EnterJsonPair(AdaptiveCardsTemplateParser.JsonPairContext)')
  - [EnterObj(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterObj-AdaptiveCardsTemplateParser-ObjContext- 'AdaptiveCardsTemplateParserBaseListener.EnterObj(AdaptiveCardsTemplateParser.ObjContext)')
  - [EnterTemplateData(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterTemplateData-AdaptiveCardsTemplateParser-TemplateDataContext- 'AdaptiveCardsTemplateParserBaseListener.EnterTemplateData(AdaptiveCardsTemplateParser.TemplateDataContext)')
  - [EnterTemplateRootData(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterTemplateRootData-AdaptiveCardsTemplateParser-TemplateRootDataContext- 'AdaptiveCardsTemplateParserBaseListener.EnterTemplateRootData(AdaptiveCardsTemplateParser.TemplateRootDataContext)')
  - [EnterTemplateStringWithRoot(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterTemplateStringWithRoot-AdaptiveCardsTemplateParser-TemplateStringWithRootContext- 'AdaptiveCardsTemplateParserBaseListener.EnterTemplateStringWithRoot(AdaptiveCardsTemplateParser.TemplateStringWithRootContext)')
  - [EnterTemplateWhen(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterTemplateWhen-AdaptiveCardsTemplateParser-TemplateWhenContext- 'AdaptiveCardsTemplateParserBaseListener.EnterTemplateWhen(AdaptiveCardsTemplateParser.TemplateWhenContext)')
  - [EnterTemplatedString(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterTemplatedString-AdaptiveCardsTemplateParser-TemplatedStringContext- 'AdaptiveCardsTemplateParserBaseListener.EnterTemplatedString(AdaptiveCardsTemplateParser.TemplatedStringContext)')
  - [EnterValueArray(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterValueArray-AdaptiveCardsTemplateParser-ValueArrayContext- 'AdaptiveCardsTemplateParserBaseListener.EnterValueArray(AdaptiveCardsTemplateParser.ValueArrayContext)')
  - [EnterValueFalse(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterValueFalse-AdaptiveCardsTemplateParser-ValueFalseContext- 'AdaptiveCardsTemplateParserBaseListener.EnterValueFalse(AdaptiveCardsTemplateParser.ValueFalseContext)')
  - [EnterValueNull(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterValueNull-AdaptiveCardsTemplateParser-ValueNullContext- 'AdaptiveCardsTemplateParserBaseListener.EnterValueNull(AdaptiveCardsTemplateParser.ValueNullContext)')
  - [EnterValueNumber(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterValueNumber-AdaptiveCardsTemplateParser-ValueNumberContext- 'AdaptiveCardsTemplateParserBaseListener.EnterValueNumber(AdaptiveCardsTemplateParser.ValueNumberContext)')
  - [EnterValueObject(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterValueObject-AdaptiveCardsTemplateParser-ValueObjectContext- 'AdaptiveCardsTemplateParserBaseListener.EnterValueObject(AdaptiveCardsTemplateParser.ValueObjectContext)')
  - [EnterValueString(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterValueString-AdaptiveCardsTemplateParser-ValueStringContext- 'AdaptiveCardsTemplateParserBaseListener.EnterValueString(AdaptiveCardsTemplateParser.ValueStringContext)')
  - [EnterValueTemplateExpression(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterValueTemplateExpression-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext- 'AdaptiveCardsTemplateParserBaseListener.EnterValueTemplateExpression(AdaptiveCardsTemplateParser.ValueTemplateExpressionContext)')
  - [EnterValueTemplateString(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterValueTemplateString-AdaptiveCardsTemplateParser-ValueTemplateStringContext- 'AdaptiveCardsTemplateParserBaseListener.EnterValueTemplateString(AdaptiveCardsTemplateParser.ValueTemplateStringContext)')
  - [EnterValueTemplateStringWithRoot(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterValueTemplateStringWithRoot-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext- 'AdaptiveCardsTemplateParserBaseListener.EnterValueTemplateStringWithRoot(AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext)')
  - [EnterValueTrue(context)](#M-AdaptiveCardsTemplateParserBaseListener-EnterValueTrue-AdaptiveCardsTemplateParser-ValueTrueContext- 'AdaptiveCardsTemplateParserBaseListener.EnterValueTrue(AdaptiveCardsTemplateParser.ValueTrueContext)')
  - [ExitArray(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitArray-AdaptiveCardsTemplateParser-ArrayContext- 'AdaptiveCardsTemplateParserBaseListener.ExitArray(AdaptiveCardsTemplateParser.ArrayContext)')
  - [ExitEveryRule()](#M-AdaptiveCardsTemplateParserBaseListener-ExitEveryRule-Antlr4-Runtime-ParserRuleContext- 'AdaptiveCardsTemplateParserBaseListener.ExitEveryRule(Antlr4.Runtime.ParserRuleContext)')
  - [ExitJson(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitJson-AdaptiveCardsTemplateParser-JsonContext- 'AdaptiveCardsTemplateParserBaseListener.ExitJson(AdaptiveCardsTemplateParser.JsonContext)')
  - [ExitJsonPair(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitJsonPair-AdaptiveCardsTemplateParser-JsonPairContext- 'AdaptiveCardsTemplateParserBaseListener.ExitJsonPair(AdaptiveCardsTemplateParser.JsonPairContext)')
  - [ExitObj(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitObj-AdaptiveCardsTemplateParser-ObjContext- 'AdaptiveCardsTemplateParserBaseListener.ExitObj(AdaptiveCardsTemplateParser.ObjContext)')
  - [ExitTemplateData(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitTemplateData-AdaptiveCardsTemplateParser-TemplateDataContext- 'AdaptiveCardsTemplateParserBaseListener.ExitTemplateData(AdaptiveCardsTemplateParser.TemplateDataContext)')
  - [ExitTemplateRootData(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitTemplateRootData-AdaptiveCardsTemplateParser-TemplateRootDataContext- 'AdaptiveCardsTemplateParserBaseListener.ExitTemplateRootData(AdaptiveCardsTemplateParser.TemplateRootDataContext)')
  - [ExitTemplateStringWithRoot(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitTemplateStringWithRoot-AdaptiveCardsTemplateParser-TemplateStringWithRootContext- 'AdaptiveCardsTemplateParserBaseListener.ExitTemplateStringWithRoot(AdaptiveCardsTemplateParser.TemplateStringWithRootContext)')
  - [ExitTemplateWhen(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitTemplateWhen-AdaptiveCardsTemplateParser-TemplateWhenContext- 'AdaptiveCardsTemplateParserBaseListener.ExitTemplateWhen(AdaptiveCardsTemplateParser.TemplateWhenContext)')
  - [ExitTemplatedString(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitTemplatedString-AdaptiveCardsTemplateParser-TemplatedStringContext- 'AdaptiveCardsTemplateParserBaseListener.ExitTemplatedString(AdaptiveCardsTemplateParser.TemplatedStringContext)')
  - [ExitValueArray(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitValueArray-AdaptiveCardsTemplateParser-ValueArrayContext- 'AdaptiveCardsTemplateParserBaseListener.ExitValueArray(AdaptiveCardsTemplateParser.ValueArrayContext)')
  - [ExitValueFalse(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitValueFalse-AdaptiveCardsTemplateParser-ValueFalseContext- 'AdaptiveCardsTemplateParserBaseListener.ExitValueFalse(AdaptiveCardsTemplateParser.ValueFalseContext)')
  - [ExitValueNull(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitValueNull-AdaptiveCardsTemplateParser-ValueNullContext- 'AdaptiveCardsTemplateParserBaseListener.ExitValueNull(AdaptiveCardsTemplateParser.ValueNullContext)')
  - [ExitValueNumber(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitValueNumber-AdaptiveCardsTemplateParser-ValueNumberContext- 'AdaptiveCardsTemplateParserBaseListener.ExitValueNumber(AdaptiveCardsTemplateParser.ValueNumberContext)')
  - [ExitValueObject(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitValueObject-AdaptiveCardsTemplateParser-ValueObjectContext- 'AdaptiveCardsTemplateParserBaseListener.ExitValueObject(AdaptiveCardsTemplateParser.ValueObjectContext)')
  - [ExitValueString(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitValueString-AdaptiveCardsTemplateParser-ValueStringContext- 'AdaptiveCardsTemplateParserBaseListener.ExitValueString(AdaptiveCardsTemplateParser.ValueStringContext)')
  - [ExitValueTemplateExpression(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitValueTemplateExpression-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext- 'AdaptiveCardsTemplateParserBaseListener.ExitValueTemplateExpression(AdaptiveCardsTemplateParser.ValueTemplateExpressionContext)')
  - [ExitValueTemplateString(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitValueTemplateString-AdaptiveCardsTemplateParser-ValueTemplateStringContext- 'AdaptiveCardsTemplateParserBaseListener.ExitValueTemplateString(AdaptiveCardsTemplateParser.ValueTemplateStringContext)')
  - [ExitValueTemplateStringWithRoot(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitValueTemplateStringWithRoot-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext- 'AdaptiveCardsTemplateParserBaseListener.ExitValueTemplateStringWithRoot(AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext)')
  - [ExitValueTrue(context)](#M-AdaptiveCardsTemplateParserBaseListener-ExitValueTrue-AdaptiveCardsTemplateParser-ValueTrueContext- 'AdaptiveCardsTemplateParserBaseListener.ExitValueTrue(AdaptiveCardsTemplateParser.ValueTrueContext)')
  - [VisitErrorNode()](#M-AdaptiveCardsTemplateParserBaseListener-VisitErrorNode-Antlr4-Runtime-Tree-IErrorNode- 'AdaptiveCardsTemplateParserBaseListener.VisitErrorNode(Antlr4.Runtime.Tree.IErrorNode)')
  - [VisitTerminal()](#M-AdaptiveCardsTemplateParserBaseListener-VisitTerminal-Antlr4-Runtime-Tree-ITerminalNode- 'AdaptiveCardsTemplateParserBaseListener.VisitTerminal(Antlr4.Runtime.Tree.ITerminalNode)')
- [AdaptiveCardsTemplateParserBaseVisitor\`1](#T-AdaptiveCardsTemplateParserBaseVisitor`1 'AdaptiveCardsTemplateParserBaseVisitor`1')
  - [VisitArray(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitArray-AdaptiveCardsTemplateParser-ArrayContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitArray(AdaptiveCardsTemplateParser.ArrayContext)')
  - [VisitJson(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitJson-AdaptiveCardsTemplateParser-JsonContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitJson(AdaptiveCardsTemplateParser.JsonContext)')
  - [VisitJsonPair(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitJsonPair-AdaptiveCardsTemplateParser-JsonPairContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitJsonPair(AdaptiveCardsTemplateParser.JsonPairContext)')
  - [VisitObj(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitObj-AdaptiveCardsTemplateParser-ObjContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitObj(AdaptiveCardsTemplateParser.ObjContext)')
  - [VisitTemplateData(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitTemplateData-AdaptiveCardsTemplateParser-TemplateDataContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitTemplateData(AdaptiveCardsTemplateParser.TemplateDataContext)')
  - [VisitTemplateRootData(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitTemplateRootData-AdaptiveCardsTemplateParser-TemplateRootDataContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitTemplateRootData(AdaptiveCardsTemplateParser.TemplateRootDataContext)')
  - [VisitTemplateStringWithRoot(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitTemplateStringWithRoot-AdaptiveCardsTemplateParser-TemplateStringWithRootContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitTemplateStringWithRoot(AdaptiveCardsTemplateParser.TemplateStringWithRootContext)')
  - [VisitTemplateWhen(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitTemplateWhen-AdaptiveCardsTemplateParser-TemplateWhenContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitTemplateWhen(AdaptiveCardsTemplateParser.TemplateWhenContext)')
  - [VisitTemplatedString(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitTemplatedString-AdaptiveCardsTemplateParser-TemplatedStringContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitTemplatedString(AdaptiveCardsTemplateParser.TemplatedStringContext)')
  - [VisitValueArray(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueArray-AdaptiveCardsTemplateParser-ValueArrayContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitValueArray(AdaptiveCardsTemplateParser.ValueArrayContext)')
  - [VisitValueFalse(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueFalse-AdaptiveCardsTemplateParser-ValueFalseContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitValueFalse(AdaptiveCardsTemplateParser.ValueFalseContext)')
  - [VisitValueNull(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueNull-AdaptiveCardsTemplateParser-ValueNullContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitValueNull(AdaptiveCardsTemplateParser.ValueNullContext)')
  - [VisitValueNumber(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueNumber-AdaptiveCardsTemplateParser-ValueNumberContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitValueNumber(AdaptiveCardsTemplateParser.ValueNumberContext)')
  - [VisitValueObject(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueObject-AdaptiveCardsTemplateParser-ValueObjectContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitValueObject(AdaptiveCardsTemplateParser.ValueObjectContext)')
  - [VisitValueString(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueString-AdaptiveCardsTemplateParser-ValueStringContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitValueString(AdaptiveCardsTemplateParser.ValueStringContext)')
  - [VisitValueTemplateExpression(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueTemplateExpression-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitValueTemplateExpression(AdaptiveCardsTemplateParser.ValueTemplateExpressionContext)')
  - [VisitValueTemplateString(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueTemplateString-AdaptiveCardsTemplateParser-ValueTemplateStringContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitValueTemplateString(AdaptiveCardsTemplateParser.ValueTemplateStringContext)')
  - [VisitValueTemplateStringWithRoot(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueTemplateStringWithRoot-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitValueTemplateStringWithRoot(AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext)')
  - [VisitValueTrue(context)](#M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueTrue-AdaptiveCardsTemplateParser-ValueTrueContext- 'AdaptiveCardsTemplateParserBaseVisitor`1.VisitValueTrue(AdaptiveCardsTemplateParser.ValueTrueContext)')
- [AdaptiveCardsTemplateResult](#T-AdaptiveCards-Templating-AdaptiveCardsTemplateResult 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult')
  - [#ctor()](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-#ctor 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult.#ctor')
  - [#ctor(capturedString)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-#ctor-System-String- 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult.#ctor(System.String)')
  - [#ctor(capturedString,predicate)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-#ctor-System-String,System-String- 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult.#ctor(System.String,System.String)')
  - [HasItBeenDropped](#P-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-HasItBeenDropped 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult.HasItBeenDropped')
  - [IsWhen](#P-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-IsWhen 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult.IsWhen')
  - [Predicate](#P-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-Predicate 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult.Predicate')
  - [WhenEvaluationResult](#P-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-WhenEvaluationResult 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult.WhenEvaluationResult')
  - [Append(capturedString)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-Append-System-String- 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult.Append(System.String)')
  - [Append(result)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-Append-AdaptiveCards-Templating-AdaptiveCardsTemplateResult- 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult.Append(AdaptiveCards.Templating.AdaptiveCardsTemplateResult)')
  - [ToString()](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-ToString 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult.ToString')
- [AdaptiveCardsTemplateSimpleObjectMemory](#T-AdaptiveCards-Templating-AdaptiveCardsTemplateSimpleObjectMemory 'AdaptiveCards.Templating.AdaptiveCardsTemplateSimpleObjectMemory')
  - [#ctor(memory)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateSimpleObjectMemory-#ctor-System-Object- 'AdaptiveCards.Templating.AdaptiveCardsTemplateSimpleObjectMemory.#ctor(System.Object)')
  - [SetValue(path,value)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateSimpleObjectMemory-SetValue-System-String,System-Object- 'AdaptiveCards.Templating.AdaptiveCardsTemplateSimpleObjectMemory.SetValue(System.String,System.Object)')
  - [TryGetValue(path,value)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateSimpleObjectMemory-TryGetValue-System-String,System-Object@- 'AdaptiveCards.Templating.AdaptiveCardsTemplateSimpleObjectMemory.TryGetValue(System.String,System.Object@)')
  - [Version()](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateSimpleObjectMemory-Version 'AdaptiveCards.Templating.AdaptiveCardsTemplateSimpleObjectMemory.Version')
- [AdaptiveCardsTemplateVisitor](#T-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor')
  - [#ctor(nullSubstitutionOption,data)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-#ctor-System-Func{System-String,System-Object},System-String- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.#ctor(System.Func{System.String,System.Object},System.String)')
  - [Expand(unboundString,data,isTemplatedString,options)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-Expand-System-String,AdaptiveExpressions-Memory-IMemory,System-Boolean,AdaptiveExpressions-Options- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.Expand(System.String,AdaptiveExpressions.Memory.IMemory,System.Boolean,AdaptiveExpressions.Options)')
  - [ExpandTemplatedString(node,isExpanded)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-ExpandTemplatedString-Antlr4-Runtime-Tree-ITerminalNode,System-Boolean- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.ExpandTemplatedString(Antlr4.Runtime.Tree.ITerminalNode,System.Boolean)')
  - [GetCurrentDataContext()](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-GetCurrentDataContext 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.GetCurrentDataContext')
  - [HasDataContext()](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-HasDataContext 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.HasDataContext')
  - [IsTrue(predicate,data)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-IsTrue-System-String,Newtonsoft-Json-Linq-JToken- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.IsTrue(System.String,Newtonsoft.Json.Linq.JToken)')
  - [PopDataContext()](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-PopDataContext 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.PopDataContext')
  - [PushDataContext(stringToParse,rootDataContext)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-PushDataContext-System-String,Newtonsoft-Json-Linq-JToken- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.PushDataContext(System.String,Newtonsoft.Json.Linq.JToken)')
  - [PushDataContext(context)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-PushDataContext-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.PushDataContext(AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.DataContext)')
  - [PushTemplatedDataContext(jpath)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-PushTemplatedDataContext-System-String- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.PushTemplatedDataContext(System.String)')
  - [VisitArray(context)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitArray-AdaptiveCardsTemplateParser-ArrayContext- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.VisitArray(AdaptiveCardsTemplateParser.ArrayContext)')
  - [VisitChildren(node)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
  - [VisitObj(context)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitObj-AdaptiveCardsTemplateParser-ObjContext- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.VisitObj(AdaptiveCardsTemplateParser.ObjContext)')
  - [VisitTemplateData(context)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitTemplateData-AdaptiveCardsTemplateParser-TemplateDataContext- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.VisitTemplateData(AdaptiveCardsTemplateParser.TemplateDataContext)')
  - [VisitTemplateRootData(context)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitTemplateRootData-AdaptiveCardsTemplateParser-TemplateRootDataContext- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.VisitTemplateRootData(AdaptiveCardsTemplateParser.TemplateRootDataContext)')
  - [VisitTemplateStringWithRoot(context)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitTemplateStringWithRoot-AdaptiveCardsTemplateParser-TemplateStringWithRootContext- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.VisitTemplateStringWithRoot(AdaptiveCardsTemplateParser.TemplateStringWithRootContext)')
  - [VisitTemplateWhen(context)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitTemplateWhen-AdaptiveCardsTemplateParser-TemplateWhenContext- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.VisitTemplateWhen(AdaptiveCardsTemplateParser.TemplateWhenContext)')
  - [VisitTerminal(node)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitTerminal-Antlr4-Runtime-Tree-ITerminalNode- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.VisitTerminal(Antlr4.Runtime.Tree.ITerminalNode)')
  - [VisitValueObject(context)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitValueObject-AdaptiveCardsTemplateParser-ValueObjectContext- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.VisitValueObject(AdaptiveCardsTemplateParser.ValueObjectContext)')
  - [VisitValueTemplateExpression(context)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitValueTemplateExpression-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.VisitValueTemplateExpression(AdaptiveCardsTemplateParser.ValueTemplateExpressionContext)')
  - [VisitValueTemplateString(context)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitValueTemplateString-AdaptiveCardsTemplateParser-ValueTemplateStringContext- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.VisitValueTemplateString(AdaptiveCardsTemplateParser.ValueTemplateStringContext)')
  - [getTemplateVisitorWarnings()](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-getTemplateVisitorWarnings 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.getTemplateVisitorWarnings')
- [AdaptiveTemplateException](#T-AdaptiveCards-Templating-AdaptiveTemplateException 'AdaptiveCards.Templating.AdaptiveTemplateException')
  - [#ctor()](#M-AdaptiveCards-Templating-AdaptiveTemplateException-#ctor 'AdaptiveCards.Templating.AdaptiveTemplateException.#ctor')
  - [#ctor(message)](#M-AdaptiveCards-Templating-AdaptiveTemplateException-#ctor-System-String- 'AdaptiveCards.Templating.AdaptiveTemplateException.#ctor(System.String)')
  - [#ctor(message,innerException)](#M-AdaptiveCards-Templating-AdaptiveTemplateException-#ctor-System-String,System-Exception- 'AdaptiveCards.Templating.AdaptiveTemplateException.#ctor(System.String,System.Exception)')
- [DataContext](#T-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.DataContext')
  - [#ctor(jtoken,rootDataContext)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext-#ctor-Newtonsoft-Json-Linq-JToken,Newtonsoft-Json-Linq-JToken- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.DataContext.#ctor(Newtonsoft.Json.Linq.JToken,Newtonsoft.Json.Linq.JToken)')
  - [#ctor(text,rootDataContext)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext-#ctor-System-String,Newtonsoft-Json-Linq-JToken- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.DataContext.#ctor(System.String,Newtonsoft.Json.Linq.JToken)')
  - [GetDataContextAtIndex(index)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext-GetDataContextAtIndex-System-Int32- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.DataContext.GetDataContextAtIndex(System.Int32)')
  - [Init(jtoken,rootDataContext)](#M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext-Init-Newtonsoft-Json-Linq-JToken,Newtonsoft-Json-Linq-JToken- 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.DataContext.Init(Newtonsoft.Json.Linq.JToken,Newtonsoft.Json.Linq.JToken)')
- [EvaluationContext](#T-AdaptiveCards-Templating-EvaluationContext 'AdaptiveCards.Templating.EvaluationContext')
  - [#ctor()](#M-AdaptiveCards-Templating-EvaluationContext-#ctor 'AdaptiveCards.Templating.EvaluationContext.#ctor')
  - [#ctor(rootData)](#M-AdaptiveCards-Templating-EvaluationContext-#ctor-System-Object- 'AdaptiveCards.Templating.EvaluationContext.#ctor(System.Object)')
  - [Root](#P-AdaptiveCards-Templating-EvaluationContext-Root 'AdaptiveCards.Templating.EvaluationContext.Root')
- [EvaluationResult](#T-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-EvaluationResult 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult.EvaluationResult')
  - [EvaluatedToFalse](#F-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-EvaluationResult-EvaluatedToFalse 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult.EvaluationResult.EvaluatedToFalse')
  - [EvaluatedToTrue](#F-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-EvaluationResult-EvaluatedToTrue 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult.EvaluationResult.EvaluatedToTrue')
  - [NotEvaluated](#F-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-EvaluationResult-NotEvaluated 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult.EvaluationResult.NotEvaluated')
- [IAdaptiveCardsTemplateParserListener](#T-IAdaptiveCardsTemplateParserListener 'IAdaptiveCardsTemplateParserListener')
  - [EnterArray(context)](#M-IAdaptiveCardsTemplateParserListener-EnterArray-AdaptiveCardsTemplateParser-ArrayContext- 'IAdaptiveCardsTemplateParserListener.EnterArray(AdaptiveCardsTemplateParser.ArrayContext)')
  - [EnterJson(context)](#M-IAdaptiveCardsTemplateParserListener-EnterJson-AdaptiveCardsTemplateParser-JsonContext- 'IAdaptiveCardsTemplateParserListener.EnterJson(AdaptiveCardsTemplateParser.JsonContext)')
  - [EnterJsonPair(context)](#M-IAdaptiveCardsTemplateParserListener-EnterJsonPair-AdaptiveCardsTemplateParser-JsonPairContext- 'IAdaptiveCardsTemplateParserListener.EnterJsonPair(AdaptiveCardsTemplateParser.JsonPairContext)')
  - [EnterObj(context)](#M-IAdaptiveCardsTemplateParserListener-EnterObj-AdaptiveCardsTemplateParser-ObjContext- 'IAdaptiveCardsTemplateParserListener.EnterObj(AdaptiveCardsTemplateParser.ObjContext)')
  - [EnterTemplateData(context)](#M-IAdaptiveCardsTemplateParserListener-EnterTemplateData-AdaptiveCardsTemplateParser-TemplateDataContext- 'IAdaptiveCardsTemplateParserListener.EnterTemplateData(AdaptiveCardsTemplateParser.TemplateDataContext)')
  - [EnterTemplateRootData(context)](#M-IAdaptiveCardsTemplateParserListener-EnterTemplateRootData-AdaptiveCardsTemplateParser-TemplateRootDataContext- 'IAdaptiveCardsTemplateParserListener.EnterTemplateRootData(AdaptiveCardsTemplateParser.TemplateRootDataContext)')
  - [EnterTemplateStringWithRoot(context)](#M-IAdaptiveCardsTemplateParserListener-EnterTemplateStringWithRoot-AdaptiveCardsTemplateParser-TemplateStringWithRootContext- 'IAdaptiveCardsTemplateParserListener.EnterTemplateStringWithRoot(AdaptiveCardsTemplateParser.TemplateStringWithRootContext)')
  - [EnterTemplateWhen(context)](#M-IAdaptiveCardsTemplateParserListener-EnterTemplateWhen-AdaptiveCardsTemplateParser-TemplateWhenContext- 'IAdaptiveCardsTemplateParserListener.EnterTemplateWhen(AdaptiveCardsTemplateParser.TemplateWhenContext)')
  - [EnterTemplatedString(context)](#M-IAdaptiveCardsTemplateParserListener-EnterTemplatedString-AdaptiveCardsTemplateParser-TemplatedStringContext- 'IAdaptiveCardsTemplateParserListener.EnterTemplatedString(AdaptiveCardsTemplateParser.TemplatedStringContext)')
  - [EnterValueArray(context)](#M-IAdaptiveCardsTemplateParserListener-EnterValueArray-AdaptiveCardsTemplateParser-ValueArrayContext- 'IAdaptiveCardsTemplateParserListener.EnterValueArray(AdaptiveCardsTemplateParser.ValueArrayContext)')
  - [EnterValueFalse(context)](#M-IAdaptiveCardsTemplateParserListener-EnterValueFalse-AdaptiveCardsTemplateParser-ValueFalseContext- 'IAdaptiveCardsTemplateParserListener.EnterValueFalse(AdaptiveCardsTemplateParser.ValueFalseContext)')
  - [EnterValueNull(context)](#M-IAdaptiveCardsTemplateParserListener-EnterValueNull-AdaptiveCardsTemplateParser-ValueNullContext- 'IAdaptiveCardsTemplateParserListener.EnterValueNull(AdaptiveCardsTemplateParser.ValueNullContext)')
  - [EnterValueNumber(context)](#M-IAdaptiveCardsTemplateParserListener-EnterValueNumber-AdaptiveCardsTemplateParser-ValueNumberContext- 'IAdaptiveCardsTemplateParserListener.EnterValueNumber(AdaptiveCardsTemplateParser.ValueNumberContext)')
  - [EnterValueObject(context)](#M-IAdaptiveCardsTemplateParserListener-EnterValueObject-AdaptiveCardsTemplateParser-ValueObjectContext- 'IAdaptiveCardsTemplateParserListener.EnterValueObject(AdaptiveCardsTemplateParser.ValueObjectContext)')
  - [EnterValueString(context)](#M-IAdaptiveCardsTemplateParserListener-EnterValueString-AdaptiveCardsTemplateParser-ValueStringContext- 'IAdaptiveCardsTemplateParserListener.EnterValueString(AdaptiveCardsTemplateParser.ValueStringContext)')
  - [EnterValueTemplateExpression(context)](#M-IAdaptiveCardsTemplateParserListener-EnterValueTemplateExpression-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext- 'IAdaptiveCardsTemplateParserListener.EnterValueTemplateExpression(AdaptiveCardsTemplateParser.ValueTemplateExpressionContext)')
  - [EnterValueTemplateString(context)](#M-IAdaptiveCardsTemplateParserListener-EnterValueTemplateString-AdaptiveCardsTemplateParser-ValueTemplateStringContext- 'IAdaptiveCardsTemplateParserListener.EnterValueTemplateString(AdaptiveCardsTemplateParser.ValueTemplateStringContext)')
  - [EnterValueTemplateStringWithRoot(context)](#M-IAdaptiveCardsTemplateParserListener-EnterValueTemplateStringWithRoot-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext- 'IAdaptiveCardsTemplateParserListener.EnterValueTemplateStringWithRoot(AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext)')
  - [EnterValueTrue(context)](#M-IAdaptiveCardsTemplateParserListener-EnterValueTrue-AdaptiveCardsTemplateParser-ValueTrueContext- 'IAdaptiveCardsTemplateParserListener.EnterValueTrue(AdaptiveCardsTemplateParser.ValueTrueContext)')
  - [ExitArray(context)](#M-IAdaptiveCardsTemplateParserListener-ExitArray-AdaptiveCardsTemplateParser-ArrayContext- 'IAdaptiveCardsTemplateParserListener.ExitArray(AdaptiveCardsTemplateParser.ArrayContext)')
  - [ExitJson(context)](#M-IAdaptiveCardsTemplateParserListener-ExitJson-AdaptiveCardsTemplateParser-JsonContext- 'IAdaptiveCardsTemplateParserListener.ExitJson(AdaptiveCardsTemplateParser.JsonContext)')
  - [ExitJsonPair(context)](#M-IAdaptiveCardsTemplateParserListener-ExitJsonPair-AdaptiveCardsTemplateParser-JsonPairContext- 'IAdaptiveCardsTemplateParserListener.ExitJsonPair(AdaptiveCardsTemplateParser.JsonPairContext)')
  - [ExitObj(context)](#M-IAdaptiveCardsTemplateParserListener-ExitObj-AdaptiveCardsTemplateParser-ObjContext- 'IAdaptiveCardsTemplateParserListener.ExitObj(AdaptiveCardsTemplateParser.ObjContext)')
  - [ExitTemplateData(context)](#M-IAdaptiveCardsTemplateParserListener-ExitTemplateData-AdaptiveCardsTemplateParser-TemplateDataContext- 'IAdaptiveCardsTemplateParserListener.ExitTemplateData(AdaptiveCardsTemplateParser.TemplateDataContext)')
  - [ExitTemplateRootData(context)](#M-IAdaptiveCardsTemplateParserListener-ExitTemplateRootData-AdaptiveCardsTemplateParser-TemplateRootDataContext- 'IAdaptiveCardsTemplateParserListener.ExitTemplateRootData(AdaptiveCardsTemplateParser.TemplateRootDataContext)')
  - [ExitTemplateStringWithRoot(context)](#M-IAdaptiveCardsTemplateParserListener-ExitTemplateStringWithRoot-AdaptiveCardsTemplateParser-TemplateStringWithRootContext- 'IAdaptiveCardsTemplateParserListener.ExitTemplateStringWithRoot(AdaptiveCardsTemplateParser.TemplateStringWithRootContext)')
  - [ExitTemplateWhen(context)](#M-IAdaptiveCardsTemplateParserListener-ExitTemplateWhen-AdaptiveCardsTemplateParser-TemplateWhenContext- 'IAdaptiveCardsTemplateParserListener.ExitTemplateWhen(AdaptiveCardsTemplateParser.TemplateWhenContext)')
  - [ExitTemplatedString(context)](#M-IAdaptiveCardsTemplateParserListener-ExitTemplatedString-AdaptiveCardsTemplateParser-TemplatedStringContext- 'IAdaptiveCardsTemplateParserListener.ExitTemplatedString(AdaptiveCardsTemplateParser.TemplatedStringContext)')
  - [ExitValueArray(context)](#M-IAdaptiveCardsTemplateParserListener-ExitValueArray-AdaptiveCardsTemplateParser-ValueArrayContext- 'IAdaptiveCardsTemplateParserListener.ExitValueArray(AdaptiveCardsTemplateParser.ValueArrayContext)')
  - [ExitValueFalse(context)](#M-IAdaptiveCardsTemplateParserListener-ExitValueFalse-AdaptiveCardsTemplateParser-ValueFalseContext- 'IAdaptiveCardsTemplateParserListener.ExitValueFalse(AdaptiveCardsTemplateParser.ValueFalseContext)')
  - [ExitValueNull(context)](#M-IAdaptiveCardsTemplateParserListener-ExitValueNull-AdaptiveCardsTemplateParser-ValueNullContext- 'IAdaptiveCardsTemplateParserListener.ExitValueNull(AdaptiveCardsTemplateParser.ValueNullContext)')
  - [ExitValueNumber(context)](#M-IAdaptiveCardsTemplateParserListener-ExitValueNumber-AdaptiveCardsTemplateParser-ValueNumberContext- 'IAdaptiveCardsTemplateParserListener.ExitValueNumber(AdaptiveCardsTemplateParser.ValueNumberContext)')
  - [ExitValueObject(context)](#M-IAdaptiveCardsTemplateParserListener-ExitValueObject-AdaptiveCardsTemplateParser-ValueObjectContext- 'IAdaptiveCardsTemplateParserListener.ExitValueObject(AdaptiveCardsTemplateParser.ValueObjectContext)')
  - [ExitValueString(context)](#M-IAdaptiveCardsTemplateParserListener-ExitValueString-AdaptiveCardsTemplateParser-ValueStringContext- 'IAdaptiveCardsTemplateParserListener.ExitValueString(AdaptiveCardsTemplateParser.ValueStringContext)')
  - [ExitValueTemplateExpression(context)](#M-IAdaptiveCardsTemplateParserListener-ExitValueTemplateExpression-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext- 'IAdaptiveCardsTemplateParserListener.ExitValueTemplateExpression(AdaptiveCardsTemplateParser.ValueTemplateExpressionContext)')
  - [ExitValueTemplateString(context)](#M-IAdaptiveCardsTemplateParserListener-ExitValueTemplateString-AdaptiveCardsTemplateParser-ValueTemplateStringContext- 'IAdaptiveCardsTemplateParserListener.ExitValueTemplateString(AdaptiveCardsTemplateParser.ValueTemplateStringContext)')
  - [ExitValueTemplateStringWithRoot(context)](#M-IAdaptiveCardsTemplateParserListener-ExitValueTemplateStringWithRoot-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext- 'IAdaptiveCardsTemplateParserListener.ExitValueTemplateStringWithRoot(AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext)')
  - [ExitValueTrue(context)](#M-IAdaptiveCardsTemplateParserListener-ExitValueTrue-AdaptiveCardsTemplateParser-ValueTrueContext- 'IAdaptiveCardsTemplateParserListener.ExitValueTrue(AdaptiveCardsTemplateParser.ValueTrueContext)')
- [IAdaptiveCardsTemplateParserVisitor\`1](#T-IAdaptiveCardsTemplateParserVisitor`1 'IAdaptiveCardsTemplateParserVisitor`1')
  - [VisitArray(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitArray-AdaptiveCardsTemplateParser-ArrayContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitArray(AdaptiveCardsTemplateParser.ArrayContext)')
  - [VisitJson(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitJson-AdaptiveCardsTemplateParser-JsonContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitJson(AdaptiveCardsTemplateParser.JsonContext)')
  - [VisitJsonPair(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitJsonPair-AdaptiveCardsTemplateParser-JsonPairContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitJsonPair(AdaptiveCardsTemplateParser.JsonPairContext)')
  - [VisitObj(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitObj-AdaptiveCardsTemplateParser-ObjContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitObj(AdaptiveCardsTemplateParser.ObjContext)')
  - [VisitTemplateData(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitTemplateData-AdaptiveCardsTemplateParser-TemplateDataContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitTemplateData(AdaptiveCardsTemplateParser.TemplateDataContext)')
  - [VisitTemplateRootData(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitTemplateRootData-AdaptiveCardsTemplateParser-TemplateRootDataContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitTemplateRootData(AdaptiveCardsTemplateParser.TemplateRootDataContext)')
  - [VisitTemplateStringWithRoot(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitTemplateStringWithRoot-AdaptiveCardsTemplateParser-TemplateStringWithRootContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitTemplateStringWithRoot(AdaptiveCardsTemplateParser.TemplateStringWithRootContext)')
  - [VisitTemplateWhen(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitTemplateWhen-AdaptiveCardsTemplateParser-TemplateWhenContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitTemplateWhen(AdaptiveCardsTemplateParser.TemplateWhenContext)')
  - [VisitTemplatedString(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitTemplatedString-AdaptiveCardsTemplateParser-TemplatedStringContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitTemplatedString(AdaptiveCardsTemplateParser.TemplatedStringContext)')
  - [VisitValueArray(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueArray-AdaptiveCardsTemplateParser-ValueArrayContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitValueArray(AdaptiveCardsTemplateParser.ValueArrayContext)')
  - [VisitValueFalse(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueFalse-AdaptiveCardsTemplateParser-ValueFalseContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitValueFalse(AdaptiveCardsTemplateParser.ValueFalseContext)')
  - [VisitValueNull(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueNull-AdaptiveCardsTemplateParser-ValueNullContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitValueNull(AdaptiveCardsTemplateParser.ValueNullContext)')
  - [VisitValueNumber(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueNumber-AdaptiveCardsTemplateParser-ValueNumberContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitValueNumber(AdaptiveCardsTemplateParser.ValueNumberContext)')
  - [VisitValueObject(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueObject-AdaptiveCardsTemplateParser-ValueObjectContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitValueObject(AdaptiveCardsTemplateParser.ValueObjectContext)')
  - [VisitValueString(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueString-AdaptiveCardsTemplateParser-ValueStringContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitValueString(AdaptiveCardsTemplateParser.ValueStringContext)')
  - [VisitValueTemplateExpression(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueTemplateExpression-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitValueTemplateExpression(AdaptiveCardsTemplateParser.ValueTemplateExpressionContext)')
  - [VisitValueTemplateString(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueTemplateString-AdaptiveCardsTemplateParser-ValueTemplateStringContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitValueTemplateString(AdaptiveCardsTemplateParser.ValueTemplateStringContext)')
  - [VisitValueTemplateStringWithRoot(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueTemplateStringWithRoot-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitValueTemplateStringWithRoot(AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext)')
  - [VisitValueTrue(context)](#M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueTrue-AdaptiveCardsTemplateParser-ValueTrueContext- 'IAdaptiveCardsTemplateParserVisitor`1.VisitValueTrue(AdaptiveCardsTemplateParser.ValueTrueContext)')

<a name='T-AdaptiveCards-Templating-AdaptiveCardTemplate'></a>
## AdaptiveCardTemplate `type`

##### Namespace

AdaptiveCards.Templating

##### Summary

The main `AdaptiveCardTemplate` class
Contain all methods for performaing data binding to `AdaptiveCardTemplate`

<a name='M-AdaptiveCards-Templating-AdaptiveCardTemplate-#ctor-System-Object-'></a>
### #ctor(jsonTemplate) `constructor`

##### Summary

Creates an instance of AdaptiveCardTemplate

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| jsonTemplate | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | string in json or seriazable object |

##### Example

```
 var jsonTemplate = "
 {
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "TextBlock",
            "text": "Hello ${person.firstName}"
        }
    ]
}"
 var template = new AdaptiveCardTemplate(jsonTemplate);
 
```

##### Remarks

Once created, it will contain a parsed tree based on jsonTemplate

Data is bound by calling `Expand` on the object

The intance can be rebound with different data by calling `Expand`

[Expand](#M-AdaptiveCards-Templating-AdaptiveCardTemplate-Expand-AdaptiveCards-Templating-EvaluationContext,System-Func{System-String,System-Object}- 'AdaptiveCards.Templating.AdaptiveCardTemplate.Expand(AdaptiveCards.Templating.EvaluationContext,System.Func{System.String,System.Object})')

<a name='M-AdaptiveCards-Templating-AdaptiveCardTemplate-Expand-AdaptiveCards-Templating-EvaluationContext,System-Func{System-String,System-Object}-'></a>
### Expand(context,nullSubstitutionOption) `method`

##### Summary

Bind data in `context` to the instance of AdaptiveCardTemplate

##### Returns

json as string

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCards.Templating.EvaluationContext](#T-AdaptiveCards-Templating-EvaluationContext 'AdaptiveCards.Templating.EvaluationContext') | provides data context |
| nullSubstitutionOption | [System.Func{System.String,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{System.String,System.Object}') | defines behavior when no suitable data is found for a template entry |

##### Example

```
var template = new AdaptiveCardTemplate(jsonTemplate);
var context = new AdaptiveCardsEvaluationContext(jsonData);
template.Expand(context);
```

##### Remarks

Data can be also inlined in AdaptiveCardTemplate payload

Expand can be called multiple times with different or same `context`

Returned string can be invalid AdaptiveCards, such validation will be performed by AdaptiveCards Parser

`nullSubstitutionOption` defines behavior when no suitable data is found for a template entry

Default behavior is leaving templated string unchanged

##### See Also

- [AdaptiveCards.Templating.EvaluationContext](#T-AdaptiveCards-Templating-EvaluationContext 'AdaptiveCards.Templating.EvaluationContext')

<a name='M-AdaptiveCards-Templating-AdaptiveCardTemplate-Expand-System-Object,System-Func{System-String,System-Object}-'></a>
### Expand(rootData,nullSubstitutionOption) `method`

##### Summary

Create a root data context using `rootData`, and bind it to the instance of AdaptiveCardTemplate

##### Returns

json as string

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| rootData | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | Serializable object or a string in valid json format that will be used as data context |
| nullSubstitutionOption | [System.Func{System.String,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{System.String,System.Object}') | Defines behavior when no suitable data is found for a template entry |

##### Example

```
var template = new AdaptiveCardTemplate(jsonTemplate);
template.Expand(rootData);
```

##### Remarks

Data can be also inlined in AdaptiveCardTemplate payload

Expand can be called multiple times with different or same `rootData`

Returned string can be invalid AdaptiveCards, such validation will be performed by AdaptiveCards Parser

`nullSubstitutionOption` defines behavior when no suitable data is found for a template entry

Default behavior is leaving templated string unchanged

##### See Also

- [AdaptiveCards.Templating.EvaluationContext](#T-AdaptiveCards-Templating-EvaluationContext 'AdaptiveCards.Templating.EvaluationContext')

<a name='M-AdaptiveCards-Templating-AdaptiveCardTemplate-GetLastTemplateExpansionWarnings'></a>
### GetLastTemplateExpansionWarnings() `method`

##### Summary

Getter method for the array of warning strings from the last template expansion

##### Returns

ArrayList

##### Parameters

This method has no parameters.

<a name='T-AdaptiveCardsTemplateParserBaseListener'></a>
## AdaptiveCardsTemplateParserBaseListener `type`

##### Namespace



##### Summary

This class provides an empty implementation of [IAdaptiveCardsTemplateParserListener](#T-IAdaptiveCardsTemplateParserListener 'IAdaptiveCardsTemplateParserListener'),
which can be extended to create a listener which only needs to handle a subset
of the available methods.

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterArray-AdaptiveCardsTemplateParser-ArrayContext-'></a>
### EnterArray(context) `method`

##### Summary

Enter a parse tree produced by [array](#M-AdaptiveCardsTemplateParser-array 'AdaptiveCardsTemplateParser.array').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ArrayContext](#T-AdaptiveCardsTemplateParser-ArrayContext 'AdaptiveCardsTemplateParser.ArrayContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterEveryRule-Antlr4-Runtime-ParserRuleContext-'></a>
### EnterEveryRule() `method`

##### Summary

*Inherit from parent.*

##### Parameters

This method has no parameters.

##### Remarks

The default implementation does nothing.

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterJson-AdaptiveCardsTemplateParser-JsonContext-'></a>
### EnterJson(context) `method`

##### Summary

Enter a parse tree produced by [json](#M-AdaptiveCardsTemplateParser-json 'AdaptiveCardsTemplateParser.json').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.JsonContext](#T-AdaptiveCardsTemplateParser-JsonContext 'AdaptiveCardsTemplateParser.JsonContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterJsonPair-AdaptiveCardsTemplateParser-JsonPairContext-'></a>
### EnterJsonPair(context) `method`

##### Summary

Enter a parse tree produced by the `jsonPair`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.JsonPairContext](#T-AdaptiveCardsTemplateParser-JsonPairContext 'AdaptiveCardsTemplateParser.JsonPairContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterObj-AdaptiveCardsTemplateParser-ObjContext-'></a>
### EnterObj(context) `method`

##### Summary

Enter a parse tree produced by [obj](#M-AdaptiveCardsTemplateParser-obj 'AdaptiveCardsTemplateParser.obj').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ObjContext](#T-AdaptiveCardsTemplateParser-ObjContext 'AdaptiveCardsTemplateParser.ObjContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterTemplateData-AdaptiveCardsTemplateParser-TemplateDataContext-'></a>
### EnterTemplateData(context) `method`

##### Summary

Enter a parse tree produced by the `templateData`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateDataContext](#T-AdaptiveCardsTemplateParser-TemplateDataContext 'AdaptiveCardsTemplateParser.TemplateDataContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterTemplateRootData-AdaptiveCardsTemplateParser-TemplateRootDataContext-'></a>
### EnterTemplateRootData(context) `method`

##### Summary

Enter a parse tree produced by the `templateRootData`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateRootDataContext](#T-AdaptiveCardsTemplateParser-TemplateRootDataContext 'AdaptiveCardsTemplateParser.TemplateRootDataContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterTemplateStringWithRoot-AdaptiveCardsTemplateParser-TemplateStringWithRootContext-'></a>
### EnterTemplateStringWithRoot(context) `method`

##### Summary

Enter a parse tree produced by the `templateStringWithRoot`
labeled alternative in [templateRoot](#M-AdaptiveCardsTemplateParser-templateRoot 'AdaptiveCardsTemplateParser.templateRoot').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateStringWithRootContext](#T-AdaptiveCardsTemplateParser-TemplateStringWithRootContext 'AdaptiveCardsTemplateParser.TemplateStringWithRootContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterTemplateWhen-AdaptiveCardsTemplateParser-TemplateWhenContext-'></a>
### EnterTemplateWhen(context) `method`

##### Summary

Enter a parse tree produced by the `templateWhen`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateWhenContext](#T-AdaptiveCardsTemplateParser-TemplateWhenContext 'AdaptiveCardsTemplateParser.TemplateWhenContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterTemplatedString-AdaptiveCardsTemplateParser-TemplatedStringContext-'></a>
### EnterTemplatedString(context) `method`

##### Summary

Enter a parse tree produced by the `templatedString`
labeled alternative in [templateString](#M-AdaptiveCardsTemplateParser-templateString 'AdaptiveCardsTemplateParser.templateString').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplatedStringContext](#T-AdaptiveCardsTemplateParser-TemplatedStringContext 'AdaptiveCardsTemplateParser.TemplatedStringContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterValueArray-AdaptiveCardsTemplateParser-ValueArrayContext-'></a>
### EnterValueArray(context) `method`

##### Summary

Enter a parse tree produced by the `valueArray`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueArrayContext](#T-AdaptiveCardsTemplateParser-ValueArrayContext 'AdaptiveCardsTemplateParser.ValueArrayContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterValueFalse-AdaptiveCardsTemplateParser-ValueFalseContext-'></a>
### EnterValueFalse(context) `method`

##### Summary

Enter a parse tree produced by the `valueFalse`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueFalseContext](#T-AdaptiveCardsTemplateParser-ValueFalseContext 'AdaptiveCardsTemplateParser.ValueFalseContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterValueNull-AdaptiveCardsTemplateParser-ValueNullContext-'></a>
### EnterValueNull(context) `method`

##### Summary

Enter a parse tree produced by the `valueNull`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueNullContext](#T-AdaptiveCardsTemplateParser-ValueNullContext 'AdaptiveCardsTemplateParser.ValueNullContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterValueNumber-AdaptiveCardsTemplateParser-ValueNumberContext-'></a>
### EnterValueNumber(context) `method`

##### Summary

Enter a parse tree produced by the `valueNumber`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueNumberContext](#T-AdaptiveCardsTemplateParser-ValueNumberContext 'AdaptiveCardsTemplateParser.ValueNumberContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterValueObject-AdaptiveCardsTemplateParser-ValueObjectContext-'></a>
### EnterValueObject(context) `method`

##### Summary

Enter a parse tree produced by the `valueObject`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueObjectContext](#T-AdaptiveCardsTemplateParser-ValueObjectContext 'AdaptiveCardsTemplateParser.ValueObjectContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterValueString-AdaptiveCardsTemplateParser-ValueStringContext-'></a>
### EnterValueString(context) `method`

##### Summary

Enter a parse tree produced by the `valueString`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueStringContext](#T-AdaptiveCardsTemplateParser-ValueStringContext 'AdaptiveCardsTemplateParser.ValueStringContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterValueTemplateExpression-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext-'></a>
### EnterValueTemplateExpression(context) `method`

##### Summary

Enter a parse tree produced by the `valueTemplateExpression`
labeled alternative in [templateExpression](#M-AdaptiveCardsTemplateParser-templateExpression 'AdaptiveCardsTemplateParser.templateExpression').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateExpressionContext](#T-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext 'AdaptiveCardsTemplateParser.ValueTemplateExpressionContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterValueTemplateString-AdaptiveCardsTemplateParser-ValueTemplateStringContext-'></a>
### EnterValueTemplateString(context) `method`

##### Summary

Enter a parse tree produced by the `valueTemplateString`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateStringContext](#T-AdaptiveCardsTemplateParser-ValueTemplateStringContext 'AdaptiveCardsTemplateParser.ValueTemplateStringContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterValueTemplateStringWithRoot-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext-'></a>
### EnterValueTemplateStringWithRoot(context) `method`

##### Summary

Enter a parse tree produced by the `valueTemplateStringWithRoot`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext](#T-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext 'AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-EnterValueTrue-AdaptiveCardsTemplateParser-ValueTrueContext-'></a>
### EnterValueTrue(context) `method`

##### Summary

Enter a parse tree produced by the `valueTrue`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTrueContext](#T-AdaptiveCardsTemplateParser-ValueTrueContext 'AdaptiveCardsTemplateParser.ValueTrueContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitArray-AdaptiveCardsTemplateParser-ArrayContext-'></a>
### ExitArray(context) `method`

##### Summary

Exit a parse tree produced by [array](#M-AdaptiveCardsTemplateParser-array 'AdaptiveCardsTemplateParser.array').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ArrayContext](#T-AdaptiveCardsTemplateParser-ArrayContext 'AdaptiveCardsTemplateParser.ArrayContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitEveryRule-Antlr4-Runtime-ParserRuleContext-'></a>
### ExitEveryRule() `method`

##### Summary

*Inherit from parent.*

##### Parameters

This method has no parameters.

##### Remarks

The default implementation does nothing.

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitJson-AdaptiveCardsTemplateParser-JsonContext-'></a>
### ExitJson(context) `method`

##### Summary

Exit a parse tree produced by [json](#M-AdaptiveCardsTemplateParser-json 'AdaptiveCardsTemplateParser.json').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.JsonContext](#T-AdaptiveCardsTemplateParser-JsonContext 'AdaptiveCardsTemplateParser.JsonContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitJsonPair-AdaptiveCardsTemplateParser-JsonPairContext-'></a>
### ExitJsonPair(context) `method`

##### Summary

Exit a parse tree produced by the `jsonPair`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.JsonPairContext](#T-AdaptiveCardsTemplateParser-JsonPairContext 'AdaptiveCardsTemplateParser.JsonPairContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitObj-AdaptiveCardsTemplateParser-ObjContext-'></a>
### ExitObj(context) `method`

##### Summary

Exit a parse tree produced by [obj](#M-AdaptiveCardsTemplateParser-obj 'AdaptiveCardsTemplateParser.obj').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ObjContext](#T-AdaptiveCardsTemplateParser-ObjContext 'AdaptiveCardsTemplateParser.ObjContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitTemplateData-AdaptiveCardsTemplateParser-TemplateDataContext-'></a>
### ExitTemplateData(context) `method`

##### Summary

Exit a parse tree produced by the `templateData`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateDataContext](#T-AdaptiveCardsTemplateParser-TemplateDataContext 'AdaptiveCardsTemplateParser.TemplateDataContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitTemplateRootData-AdaptiveCardsTemplateParser-TemplateRootDataContext-'></a>
### ExitTemplateRootData(context) `method`

##### Summary

Exit a parse tree produced by the `templateRootData`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateRootDataContext](#T-AdaptiveCardsTemplateParser-TemplateRootDataContext 'AdaptiveCardsTemplateParser.TemplateRootDataContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitTemplateStringWithRoot-AdaptiveCardsTemplateParser-TemplateStringWithRootContext-'></a>
### ExitTemplateStringWithRoot(context) `method`

##### Summary

Exit a parse tree produced by the `templateStringWithRoot`
labeled alternative in [templateRoot](#M-AdaptiveCardsTemplateParser-templateRoot 'AdaptiveCardsTemplateParser.templateRoot').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateStringWithRootContext](#T-AdaptiveCardsTemplateParser-TemplateStringWithRootContext 'AdaptiveCardsTemplateParser.TemplateStringWithRootContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitTemplateWhen-AdaptiveCardsTemplateParser-TemplateWhenContext-'></a>
### ExitTemplateWhen(context) `method`

##### Summary

Exit a parse tree produced by the `templateWhen`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateWhenContext](#T-AdaptiveCardsTemplateParser-TemplateWhenContext 'AdaptiveCardsTemplateParser.TemplateWhenContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitTemplatedString-AdaptiveCardsTemplateParser-TemplatedStringContext-'></a>
### ExitTemplatedString(context) `method`

##### Summary

Exit a parse tree produced by the `templatedString`
labeled alternative in [templateString](#M-AdaptiveCardsTemplateParser-templateString 'AdaptiveCardsTemplateParser.templateString').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplatedStringContext](#T-AdaptiveCardsTemplateParser-TemplatedStringContext 'AdaptiveCardsTemplateParser.TemplatedStringContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitValueArray-AdaptiveCardsTemplateParser-ValueArrayContext-'></a>
### ExitValueArray(context) `method`

##### Summary

Exit a parse tree produced by the `valueArray`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueArrayContext](#T-AdaptiveCardsTemplateParser-ValueArrayContext 'AdaptiveCardsTemplateParser.ValueArrayContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitValueFalse-AdaptiveCardsTemplateParser-ValueFalseContext-'></a>
### ExitValueFalse(context) `method`

##### Summary

Exit a parse tree produced by the `valueFalse`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueFalseContext](#T-AdaptiveCardsTemplateParser-ValueFalseContext 'AdaptiveCardsTemplateParser.ValueFalseContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitValueNull-AdaptiveCardsTemplateParser-ValueNullContext-'></a>
### ExitValueNull(context) `method`

##### Summary

Exit a parse tree produced by the `valueNull`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueNullContext](#T-AdaptiveCardsTemplateParser-ValueNullContext 'AdaptiveCardsTemplateParser.ValueNullContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitValueNumber-AdaptiveCardsTemplateParser-ValueNumberContext-'></a>
### ExitValueNumber(context) `method`

##### Summary

Exit a parse tree produced by the `valueNumber`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueNumberContext](#T-AdaptiveCardsTemplateParser-ValueNumberContext 'AdaptiveCardsTemplateParser.ValueNumberContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitValueObject-AdaptiveCardsTemplateParser-ValueObjectContext-'></a>
### ExitValueObject(context) `method`

##### Summary

Exit a parse tree produced by the `valueObject`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueObjectContext](#T-AdaptiveCardsTemplateParser-ValueObjectContext 'AdaptiveCardsTemplateParser.ValueObjectContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitValueString-AdaptiveCardsTemplateParser-ValueStringContext-'></a>
### ExitValueString(context) `method`

##### Summary

Exit a parse tree produced by the `valueString`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueStringContext](#T-AdaptiveCardsTemplateParser-ValueStringContext 'AdaptiveCardsTemplateParser.ValueStringContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitValueTemplateExpression-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext-'></a>
### ExitValueTemplateExpression(context) `method`

##### Summary

Exit a parse tree produced by the `valueTemplateExpression`
labeled alternative in [templateExpression](#M-AdaptiveCardsTemplateParser-templateExpression 'AdaptiveCardsTemplateParser.templateExpression').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateExpressionContext](#T-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext 'AdaptiveCardsTemplateParser.ValueTemplateExpressionContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitValueTemplateString-AdaptiveCardsTemplateParser-ValueTemplateStringContext-'></a>
### ExitValueTemplateString(context) `method`

##### Summary

Exit a parse tree produced by the `valueTemplateString`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateStringContext](#T-AdaptiveCardsTemplateParser-ValueTemplateStringContext 'AdaptiveCardsTemplateParser.ValueTemplateStringContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitValueTemplateStringWithRoot-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext-'></a>
### ExitValueTemplateStringWithRoot(context) `method`

##### Summary

Exit a parse tree produced by the `valueTemplateStringWithRoot`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext](#T-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext 'AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-ExitValueTrue-AdaptiveCardsTemplateParser-ValueTrueContext-'></a>
### ExitValueTrue(context) `method`

##### Summary

Exit a parse tree produced by the `valueTrue`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation does nothing.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTrueContext](#T-AdaptiveCardsTemplateParser-ValueTrueContext 'AdaptiveCardsTemplateParser.ValueTrueContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseListener-VisitErrorNode-Antlr4-Runtime-Tree-IErrorNode-'></a>
### VisitErrorNode() `method`

##### Summary

*Inherit from parent.*

##### Parameters

This method has no parameters.

##### Remarks

The default implementation does nothing.

<a name='M-AdaptiveCardsTemplateParserBaseListener-VisitTerminal-Antlr4-Runtime-Tree-ITerminalNode-'></a>
### VisitTerminal() `method`

##### Summary

*Inherit from parent.*

##### Parameters

This method has no parameters.

##### Remarks

The default implementation does nothing.

<a name='T-AdaptiveCardsTemplateParserBaseVisitor`1'></a>
## AdaptiveCardsTemplateParserBaseVisitor\`1 `type`

##### Namespace



##### Summary

This class provides an empty implementation of [IAdaptiveCardsTemplateParserVisitor\`1](#T-IAdaptiveCardsTemplateParserVisitor`1 'IAdaptiveCardsTemplateParserVisitor`1'),
which can be extended to create a visitor which only needs to handle a subset
of the available methods.

##### Generic Types

| Name | Description |
| ---- | ----------- |
| Result | The return type of the visit operation. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitArray-AdaptiveCardsTemplateParser-ArrayContext-'></a>
### VisitArray(context) `method`

##### Summary

Visit a parse tree produced by [array](#M-AdaptiveCardsTemplateParser-array 'AdaptiveCardsTemplateParser.array').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ArrayContext](#T-AdaptiveCardsTemplateParser-ArrayContext 'AdaptiveCardsTemplateParser.ArrayContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitJson-AdaptiveCardsTemplateParser-JsonContext-'></a>
### VisitJson(context) `method`

##### Summary

Visit a parse tree produced by [json](#M-AdaptiveCardsTemplateParser-json 'AdaptiveCardsTemplateParser.json').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.JsonContext](#T-AdaptiveCardsTemplateParser-JsonContext 'AdaptiveCardsTemplateParser.JsonContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitJsonPair-AdaptiveCardsTemplateParser-JsonPairContext-'></a>
### VisitJsonPair(context) `method`

##### Summary

Visit a parse tree produced by the `jsonPair`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.JsonPairContext](#T-AdaptiveCardsTemplateParser-JsonPairContext 'AdaptiveCardsTemplateParser.JsonPairContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitObj-AdaptiveCardsTemplateParser-ObjContext-'></a>
### VisitObj(context) `method`

##### Summary

Visit a parse tree produced by [obj](#M-AdaptiveCardsTemplateParser-obj 'AdaptiveCardsTemplateParser.obj').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ObjContext](#T-AdaptiveCardsTemplateParser-ObjContext 'AdaptiveCardsTemplateParser.ObjContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitTemplateData-AdaptiveCardsTemplateParser-TemplateDataContext-'></a>
### VisitTemplateData(context) `method`

##### Summary

Visit a parse tree produced by the `templateData`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateDataContext](#T-AdaptiveCardsTemplateParser-TemplateDataContext 'AdaptiveCardsTemplateParser.TemplateDataContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitTemplateRootData-AdaptiveCardsTemplateParser-TemplateRootDataContext-'></a>
### VisitTemplateRootData(context) `method`

##### Summary

Visit a parse tree produced by the `templateRootData`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateRootDataContext](#T-AdaptiveCardsTemplateParser-TemplateRootDataContext 'AdaptiveCardsTemplateParser.TemplateRootDataContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitTemplateStringWithRoot-AdaptiveCardsTemplateParser-TemplateStringWithRootContext-'></a>
### VisitTemplateStringWithRoot(context) `method`

##### Summary

Visit a parse tree produced by the `templateStringWithRoot`
labeled alternative in [templateRoot](#M-AdaptiveCardsTemplateParser-templateRoot 'AdaptiveCardsTemplateParser.templateRoot').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateStringWithRootContext](#T-AdaptiveCardsTemplateParser-TemplateStringWithRootContext 'AdaptiveCardsTemplateParser.TemplateStringWithRootContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitTemplateWhen-AdaptiveCardsTemplateParser-TemplateWhenContext-'></a>
### VisitTemplateWhen(context) `method`

##### Summary

Visit a parse tree produced by the `templateWhen`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateWhenContext](#T-AdaptiveCardsTemplateParser-TemplateWhenContext 'AdaptiveCardsTemplateParser.TemplateWhenContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitTemplatedString-AdaptiveCardsTemplateParser-TemplatedStringContext-'></a>
### VisitTemplatedString(context) `method`

##### Summary

Visit a parse tree produced by the `templatedString`
labeled alternative in [templateString](#M-AdaptiveCardsTemplateParser-templateString 'AdaptiveCardsTemplateParser.templateString').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplatedStringContext](#T-AdaptiveCardsTemplateParser-TemplatedStringContext 'AdaptiveCardsTemplateParser.TemplatedStringContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueArray-AdaptiveCardsTemplateParser-ValueArrayContext-'></a>
### VisitValueArray(context) `method`

##### Summary

Visit a parse tree produced by the `valueArray`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueArrayContext](#T-AdaptiveCardsTemplateParser-ValueArrayContext 'AdaptiveCardsTemplateParser.ValueArrayContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueFalse-AdaptiveCardsTemplateParser-ValueFalseContext-'></a>
### VisitValueFalse(context) `method`

##### Summary

Visit a parse tree produced by the `valueFalse`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueFalseContext](#T-AdaptiveCardsTemplateParser-ValueFalseContext 'AdaptiveCardsTemplateParser.ValueFalseContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueNull-AdaptiveCardsTemplateParser-ValueNullContext-'></a>
### VisitValueNull(context) `method`

##### Summary

Visit a parse tree produced by the `valueNull`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueNullContext](#T-AdaptiveCardsTemplateParser-ValueNullContext 'AdaptiveCardsTemplateParser.ValueNullContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueNumber-AdaptiveCardsTemplateParser-ValueNumberContext-'></a>
### VisitValueNumber(context) `method`

##### Summary

Visit a parse tree produced by the `valueNumber`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueNumberContext](#T-AdaptiveCardsTemplateParser-ValueNumberContext 'AdaptiveCardsTemplateParser.ValueNumberContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueObject-AdaptiveCardsTemplateParser-ValueObjectContext-'></a>
### VisitValueObject(context) `method`

##### Summary

Visit a parse tree produced by the `valueObject`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueObjectContext](#T-AdaptiveCardsTemplateParser-ValueObjectContext 'AdaptiveCardsTemplateParser.ValueObjectContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueString-AdaptiveCardsTemplateParser-ValueStringContext-'></a>
### VisitValueString(context) `method`

##### Summary

Visit a parse tree produced by the `valueString`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueStringContext](#T-AdaptiveCardsTemplateParser-ValueStringContext 'AdaptiveCardsTemplateParser.ValueStringContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueTemplateExpression-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext-'></a>
### VisitValueTemplateExpression(context) `method`

##### Summary

Visit a parse tree produced by the `valueTemplateExpression`
labeled alternative in [templateExpression](#M-AdaptiveCardsTemplateParser-templateExpression 'AdaptiveCardsTemplateParser.templateExpression').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateExpressionContext](#T-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext 'AdaptiveCardsTemplateParser.ValueTemplateExpressionContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueTemplateString-AdaptiveCardsTemplateParser-ValueTemplateStringContext-'></a>
### VisitValueTemplateString(context) `method`

##### Summary

Visit a parse tree produced by the `valueTemplateString`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateStringContext](#T-AdaptiveCardsTemplateParser-ValueTemplateStringContext 'AdaptiveCardsTemplateParser.ValueTemplateStringContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueTemplateStringWithRoot-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext-'></a>
### VisitValueTemplateStringWithRoot(context) `method`

##### Summary

Visit a parse tree produced by the `valueTemplateStringWithRoot`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext](#T-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext 'AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext') | The parse tree. |

<a name='M-AdaptiveCardsTemplateParserBaseVisitor`1-VisitValueTrue-AdaptiveCardsTemplateParser-ValueTrueContext-'></a>
### VisitValueTrue(context) `method`

##### Summary

Visit a parse tree produced by the `valueTrue`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

The default implementation returns the result of calling [VisitChildren](#M-Antlr4-Runtime-Tree-AbstractParseTreeVisitor`1-VisitChildren-Antlr4-Runtime-Tree-IRuleNode- 'Antlr4.Runtime.Tree.AbstractParseTreeVisitor`1.VisitChildren(Antlr4.Runtime.Tree.IRuleNode)')
on `context`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTrueContext](#T-AdaptiveCardsTemplateParser-ValueTrueContext 'AdaptiveCardsTemplateParser.ValueTrueContext') | The parse tree. |

<a name='T-AdaptiveCards-Templating-AdaptiveCardsTemplateResult'></a>
## AdaptiveCardsTemplateResult `type`

##### Namespace

AdaptiveCards.Templating

##### Summary

Used by AdaptiveCardsTemplateVisitorClass to return result from its visitor methods

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-#ctor'></a>
### #ctor() `constructor`

##### Summary

constructor for `AdaptiveCardsTemplateResult` class

##### Parameters

This constructor has no parameters.

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-#ctor-System-String-'></a>
### #ctor(capturedString) `constructor`

##### Summary

constructs a result instance with `capturedString`

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| capturedString | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-#ctor-System-String,System-String-'></a>
### #ctor(capturedString,predicate) `constructor`

##### Summary

construct a result instance for $when expression

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| capturedString | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | result string after parsing $when expression |
| predicate | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | predicate of $when |

<a name='P-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-HasItBeenDropped'></a>
### HasItBeenDropped `property`

##### Summary

Indicates that parsing Context has been dropped

<a name='P-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-IsWhen'></a>
### IsWhen `property`

##### Summary

Indicates that this instance captures the result of $when

<a name='P-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-Predicate'></a>
### Predicate `property`

##### Summary

Predicate of $when expression

<a name='P-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-WhenEvaluationResult'></a>
### WhenEvaluationResult `property`

##### Summary

Indicates the result of evaluation result of $when expression

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-Append-System-String-'></a>
### Append(capturedString) `method`

##### Summary

Appends `capturedString` to its result

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| capturedString | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-Append-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-'></a>
### Append(result) `method`

##### Summary

Appends another `result` instance to its result

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| result | [AdaptiveCards.Templating.AdaptiveCardsTemplateResult](#T-AdaptiveCards-Templating-AdaptiveCardsTemplateResult 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-ToString'></a>
### ToString() `method`

##### Summary

returns string representation

##### Returns

`string`

##### Parameters

This method has no parameters.

<a name='T-AdaptiveCards-Templating-AdaptiveCardsTemplateSimpleObjectMemory'></a>
## AdaptiveCardsTemplateSimpleObjectMemory `type`

##### Namespace

AdaptiveCards.Templating

##### Summary

Implements AEL's IMemory interface

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateSimpleObjectMemory-#ctor-System-Object-'></a>
### #ctor(memory) `constructor`

##### Summary

Simple implementation of AEL.Memory.IMemory
It serves as an entry points to additional customazation and optimazation

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| memory | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateSimpleObjectMemory-SetValue-System-String,System-Object-'></a>
### SetValue(path,value) `method`

##### Summary

Set value to a given path

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Memory path |
| value | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | Value to set |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateSimpleObjectMemory-TryGetValue-System-String,System-Object@-'></a>
### TryGetValue(path,value) `method`

##### Summary

Try get value from a given path.
Expansion of the template is done in the context of serialized json payload,
However, the memory that bounds to the template is in deserialized form.
This is normally not an issue for types other than string
This override serializes the value if it's string

##### Returns

True if the memory contains an element with the specified key; otherwise, false

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Given path |
| value | [System.Object@](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object@ 'System.Object@') | Resolved value |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateSimpleObjectMemory-Version'></a>
### Version() `method`

##### Summary



##### Returns



##### Parameters

This method has no parameters.

<a name='T-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor'></a>
## AdaptiveCardsTemplateVisitor `type`

##### Namespace

AdaptiveCards.Templating

##### Summary

an intance of this class is used in visiting a parse tree that's been generated by antlr4 parser

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-#ctor-System-Func{System-String,System-Object},System-String-'></a>
### #ctor(nullSubstitutionOption,data) `constructor`

##### Summary

a constructor for AdaptiveCardsTemplateVisitor

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| nullSubstitutionOption | [System.Func{System.String,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{System.String,System.Object}') | it will called upon when AEL finds no suitable functions registered in given AEL expression during evaluation the expression |
| data | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | json data in string which will be set as a root data context |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-Expand-System-String,AdaptiveExpressions-Memory-IMemory,System-Boolean,AdaptiveExpressions-Options-'></a>
### Expand(unboundString,data,isTemplatedString,options) `method`

##### Summary

Expands template expression using Adaptive Expression Library (AEL)

##### Returns

`string`

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| unboundString | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| data | [AdaptiveExpressions.Memory.IMemory](#T-AdaptiveExpressions-Memory-IMemory 'AdaptiveExpressions.Memory.IMemory') |  |
| isTemplatedString | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') |  |
| options | [AdaptiveExpressions.Options](#T-AdaptiveExpressions-Options 'AdaptiveExpressions.Options') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-ExpandTemplatedString-Antlr4-Runtime-Tree-ITerminalNode,System-Boolean-'></a>
### ExpandTemplatedString(node,isExpanded) `method`

##### Summary

Visitor method for `templatdString` label in `AdaptiveCardsTemplateParser.g4`

##### Returns

`AdaptiveCardsTemplateResult`

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| node | [Antlr4.Runtime.Tree.ITerminalNode](#T-Antlr4-Runtime-Tree-ITerminalNode 'Antlr4.Runtime.Tree.ITerminalNode') |  |
| isExpanded | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-GetCurrentDataContext'></a>
### GetCurrentDataContext() `method`

##### Summary

returns current data context

##### Returns

[DataContext](#T-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.DataContext')

##### Parameters

This method has no parameters.

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-HasDataContext'></a>
### HasDataContext() `method`

##### Summary

Checks if there is a data context

##### Returns



##### Parameters

This method has no parameters.

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-IsTrue-System-String,Newtonsoft-Json-Linq-JToken-'></a>
### IsTrue(predicate,data) `method`

##### Summary

Evaluates a predicate

##### Returns

`true` if predicate is evaluated to `true`

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| predicate | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| data | [Newtonsoft.Json.Linq.JToken](#T-Newtonsoft-Json-Linq-JToken 'Newtonsoft.Json.Linq.JToken') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-PopDataContext'></a>
### PopDataContext() `method`

##### Summary

Pops a data context

##### Parameters

This method has no parameters.

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-PushDataContext-System-String,Newtonsoft-Json-Linq-JToken-'></a>
### PushDataContext(stringToParse,rootDataContext) `method`

##### Summary

creates [JToken](#T-Newtonsoft-Json-Linq-JToken 'Newtonsoft.Json.Linq.JToken') object based on stringToParse, and pushes the object onto a stack

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| stringToParse | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| rootDataContext | [Newtonsoft.Json.Linq.JToken](#T-Newtonsoft-Json-Linq-JToken 'Newtonsoft.Json.Linq.JToken') | current root data context |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-PushDataContext-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext-'></a>
### PushDataContext(context) `method`

##### Summary

push a `DataContext` onto a stack

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.DataContext](#T-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.DataContext') | `context` to push |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-PushTemplatedDataContext-System-String-'></a>
### PushTemplatedDataContext(jpath) `method`

##### Summary

Given a `jpath`, create a new [DataContext](#T-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.DataContext') based on a current [DataContext](#T-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext 'AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor.DataContext')

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| jpath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | a json selection path |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitArray-AdaptiveCardsTemplateParser-ArrayContext-'></a>
### VisitArray(context) `method`

##### Summary

Visit method for `array` grammar in `AdaptiveCardsTemplateParser.g4`

##### Returns

AdaptiveCardsTemplateResult

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ArrayContext](#T-AdaptiveCardsTemplateParser-ArrayContext 'AdaptiveCardsTemplateParser.ArrayContext') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitChildren-Antlr4-Runtime-Tree-IRuleNode-'></a>
### VisitChildren(node) `method`

##### Summary

Visits each children in IRuleNode

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| node | [Antlr4.Runtime.Tree.IRuleNode](#T-Antlr4-Runtime-Tree-IRuleNode 'Antlr4.Runtime.Tree.IRuleNode') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitObj-AdaptiveCardsTemplateParser-ObjContext-'></a>
### VisitObj(context) `method`

##### Summary

Visitor method for `obj` grammar rule `AdaptiveCardsTemplateParser.g4`

##### Returns

`AdaptiveCardsTemplateResult`

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ObjContext](#T-AdaptiveCardsTemplateParser-ObjContext 'AdaptiveCardsTemplateParser.ObjContext') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitTemplateData-AdaptiveCardsTemplateParser-TemplateDataContext-'></a>
### VisitTemplateData(context) `method`

##### Summary

antlr runtime wil call this method when parse tree's context is [TemplateDataContext](#T-AdaptiveCardsTemplateParser-TemplateDataContext 'AdaptiveCardsTemplateParser.TemplateDataContext')

It is used in parsing a pair that has $data as key

It creates new data context, and set it as current memory scope

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateDataContext](#T-AdaptiveCardsTemplateParser-TemplateDataContext 'AdaptiveCardsTemplateParser.TemplateDataContext') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitTemplateRootData-AdaptiveCardsTemplateParser-TemplateRootDataContext-'></a>
### VisitTemplateRootData(context) `method`

##### Summary

Visitor method for `templateRootData` grammar rule in `AdaptiveCardsTemplateParser.g4`

##### Returns

[AdaptiveCardsTemplateResult](#T-AdaptiveCards-Templating-AdaptiveCardsTemplateResult 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult')

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateRootDataContext](#T-AdaptiveCardsTemplateParser-TemplateRootDataContext 'AdaptiveCardsTemplateParser.TemplateRootDataContext') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitTemplateStringWithRoot-AdaptiveCardsTemplateParser-TemplateStringWithRootContext-'></a>
### VisitTemplateStringWithRoot(context) `method`

##### Summary

Visitor method for `templateRoot` grammar in `AdaptiveCardsTemplateParser.g4`

##### Returns

[AdaptiveCardsTemplateResult](#T-AdaptiveCards-Templating-AdaptiveCardsTemplateResult 'AdaptiveCards.Templating.AdaptiveCardsTemplateResult')

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateStringWithRootContext](#T-AdaptiveCardsTemplateParser-TemplateStringWithRootContext 'AdaptiveCardsTemplateParser.TemplateStringWithRootContext') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitTemplateWhen-AdaptiveCardsTemplateParser-TemplateWhenContext-'></a>
### VisitTemplateWhen(context) `method`

##### Summary

return the parsed result of $when from pair context

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateWhenContext](#T-AdaptiveCardsTemplateParser-TemplateWhenContext 'AdaptiveCardsTemplateParser.TemplateWhenContext') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitTerminal-Antlr4-Runtime-Tree-ITerminalNode-'></a>
### VisitTerminal(node) `method`

##### Summary

Visitor method for `ITernminalNode`

collects token as string and expand template if needed

##### Returns

`AdaptiveCardsTemplateResult`

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| node | [Antlr4.Runtime.Tree.ITerminalNode](#T-Antlr4-Runtime-Tree-ITerminalNode 'Antlr4.Runtime.Tree.ITerminalNode') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitValueObject-AdaptiveCardsTemplateParser-ValueObjectContext-'></a>
### VisitValueObject(context) `method`

##### Summary

Visitor method for `valueObject` grammar rule `AdaptiveCardsTemplateParser.g4`

##### Returns

`AdaptiveCardsTemplateResult`

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueObjectContext](#T-AdaptiveCardsTemplateParser-ValueObjectContext 'AdaptiveCardsTemplateParser.ValueObjectContext') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitValueTemplateExpression-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext-'></a>
### VisitValueTemplateExpression(context) `method`

##### Summary

Visitor method for `valueTemplateExpresssion` grammar rule `AdaptiveCardsTemplateParser.g4`

##### Returns

AdaptiveCardsTemplateResult

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateExpressionContext](#T-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext 'AdaptiveCardsTemplateParser.ValueTemplateExpressionContext') |  |

##### Remarks

parsed string has a form of "$when" : ${}

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-VisitValueTemplateString-AdaptiveCardsTemplateParser-ValueTemplateStringContext-'></a>
### VisitValueTemplateString(context) `method`

##### Summary

Visitor method for `valueTemplateString` grammar rule `AdaptiveCardsTemplateParser.g4`

##### Returns

`AdaptiveCardsTemplateResult`

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateStringContext](#T-AdaptiveCardsTemplateParser-ValueTemplateStringContext 'AdaptiveCardsTemplateParser.ValueTemplateStringContext') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-getTemplateVisitorWarnings'></a>
### getTemplateVisitorWarnings() `method`

##### Summary

Getter for templateVisitorWarnings

##### Returns

ArrayList

##### Parameters

This method has no parameters.

<a name='T-AdaptiveCards-Templating-AdaptiveTemplateException'></a>
## AdaptiveTemplateException `type`

##### Namespace

AdaptiveCards.Templating

##### Summary

AdaptiveCardTemplate Library's Exception class

<a name='M-AdaptiveCards-Templating-AdaptiveTemplateException-#ctor'></a>
### #ctor() `constructor`

##### Summary

Default constructor

##### Parameters

This constructor has no parameters.

<a name='M-AdaptiveCards-Templating-AdaptiveTemplateException-#ctor-System-String-'></a>
### #ctor(message) `constructor`

##### Summary

Constructor that takes single argument that is exception message

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The error message that explains the reason for the exception |

<a name='M-AdaptiveCards-Templating-AdaptiveTemplateException-#ctor-System-String,System-Exception-'></a>
### #ctor(message,innerException) `constructor`

##### Summary

Constructor that takes message and inner exception to pass

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The error message that explains the reason for the exception |
| innerException | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The exception that is the cause of the current exception |

<a name='T-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext'></a>
## DataContext `type`

##### Namespace

AdaptiveCards.Templating.AdaptiveCardsTemplateVisitor

##### Summary

maintains data context

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext-#ctor-Newtonsoft-Json-Linq-JToken,Newtonsoft-Json-Linq-JToken-'></a>
### #ctor(jtoken,rootDataContext) `constructor`

##### Summary

constructs a data context of which current data is jtoken

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| jtoken | [Newtonsoft.Json.Linq.JToken](#T-Newtonsoft-Json-Linq-JToken 'Newtonsoft.Json.Linq.JToken') | new data to kept as data context |
| rootDataContext | [Newtonsoft.Json.Linq.JToken](#T-Newtonsoft-Json-Linq-JToken 'Newtonsoft.Json.Linq.JToken') | root data context |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext-#ctor-System-String,Newtonsoft-Json-Linq-JToken-'></a>
### #ctor(text,rootDataContext) `constructor`

##### Summary

overload contructor that takes `text` which is `string`

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| text | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | json in string |
| rootDataContext | [Newtonsoft.Json.Linq.JToken](#T-Newtonsoft-Json-Linq-JToken 'Newtonsoft.Json.Linq.JToken') | a root data context |

##### Exceptions

| Name | Description |
| ---- | ----------- |
| [Newtonsoft.Json.JsonException](#T-Newtonsoft-Json-JsonException 'Newtonsoft.Json.JsonException') | `JToken.Parse(text)` can throw JsonException if `text` is invalid json |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext-GetDataContextAtIndex-System-Int32-'></a>
### GetDataContextAtIndex(index) `method`

##### Summary

retrieve a [JObject](#T-Newtonsoft-Json-Linq-JObject 'Newtonsoft.Json.Linq.JObject') from this DataContext instance if [JToken](#T-Newtonsoft-Json-Linq-JToken 'Newtonsoft.Json.Linq.JToken') is a [JArray](#T-Newtonsoft-Json-Linq-JArray 'Newtonsoft.Json.Linq.JArray') at `index`

##### Returns

[JObject](#T-Newtonsoft-Json-Linq-JObject 'Newtonsoft.Json.Linq.JObject') at`index` of a [JArray](#T-Newtonsoft-Json-Linq-JArray 'Newtonsoft.Json.Linq.JArray')

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') |  |

<a name='M-AdaptiveCards-Templating-AdaptiveCardsTemplateVisitor-DataContext-Init-Newtonsoft-Json-Linq-JToken,Newtonsoft-Json-Linq-JToken-'></a>
### Init(jtoken,rootDataContext) `method`

##### Summary

Initializer method that takes jtoken and root data context to initialize a data context object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| jtoken | [Newtonsoft.Json.Linq.JToken](#T-Newtonsoft-Json-Linq-JToken 'Newtonsoft.Json.Linq.JToken') | current data context |
| rootDataContext | [Newtonsoft.Json.Linq.JToken](#T-Newtonsoft-Json-Linq-JToken 'Newtonsoft.Json.Linq.JToken') | root data context |

<a name='T-AdaptiveCards-Templating-EvaluationContext'></a>
## EvaluationContext `type`

##### Namespace

AdaptiveCards.Templating

##### Summary

Provides Data Context to AdaptiveCardsTemplate Parser

<a name='M-AdaptiveCards-Templating-EvaluationContext-#ctor'></a>
### #ctor() `constructor`

##### Summary

default consturctor

##### Parameters

This constructor has no parameters.

<a name='M-AdaptiveCards-Templating-EvaluationContext-#ctor-System-Object-'></a>
### #ctor(rootData) `constructor`

##### Summary

constructor for `EvaluationContext` that takes one argument that will be used for root data context

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| rootData | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |

<a name='P-AdaptiveCards-Templating-EvaluationContext-Root'></a>
### Root `property`

##### Summary

Provides Root Data Context

##### Example

```
 
 string jsonData = @"{
     ""person"": {
         ""firstName"": ""Hello"",
         ""lastName"": ""World""
 }";
 var context = new EvaluationContext()
 {
     Root = jsonData
 };
 
```

<a name='T-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-EvaluationResult'></a>
## EvaluationResult `type`

##### Namespace

AdaptiveCards.Templating.AdaptiveCardsTemplateResult

##### Summary

Indicates evaluation result of $when expression

<a name='F-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-EvaluationResult-EvaluatedToFalse'></a>
### EvaluatedToFalse `constants`

##### Summary

Expression evaluated false

<a name='F-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-EvaluationResult-EvaluatedToTrue'></a>
### EvaluatedToTrue `constants`

##### Summary

Expression evaluated true

<a name='F-AdaptiveCards-Templating-AdaptiveCardsTemplateResult-EvaluationResult-NotEvaluated'></a>
### NotEvaluated `constants`

##### Summary

Expression has not been evaluated

<a name='T-IAdaptiveCardsTemplateParserListener'></a>
## IAdaptiveCardsTemplateParserListener `type`

##### Namespace



##### Summary

This interface defines a complete listener for a parse tree produced by
[AdaptiveCardsTemplateParser](#T-AdaptiveCardsTemplateParser 'AdaptiveCardsTemplateParser').

<a name='M-IAdaptiveCardsTemplateParserListener-EnterArray-AdaptiveCardsTemplateParser-ArrayContext-'></a>
### EnterArray(context) `method`

##### Summary

Enter a parse tree produced by [array](#M-AdaptiveCardsTemplateParser-array 'AdaptiveCardsTemplateParser.array').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ArrayContext](#T-AdaptiveCardsTemplateParser-ArrayContext 'AdaptiveCardsTemplateParser.ArrayContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterJson-AdaptiveCardsTemplateParser-JsonContext-'></a>
### EnterJson(context) `method`

##### Summary

Enter a parse tree produced by [json](#M-AdaptiveCardsTemplateParser-json 'AdaptiveCardsTemplateParser.json').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.JsonContext](#T-AdaptiveCardsTemplateParser-JsonContext 'AdaptiveCardsTemplateParser.JsonContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterJsonPair-AdaptiveCardsTemplateParser-JsonPairContext-'></a>
### EnterJsonPair(context) `method`

##### Summary

Enter a parse tree produced by the `jsonPair`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.JsonPairContext](#T-AdaptiveCardsTemplateParser-JsonPairContext 'AdaptiveCardsTemplateParser.JsonPairContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterObj-AdaptiveCardsTemplateParser-ObjContext-'></a>
### EnterObj(context) `method`

##### Summary

Enter a parse tree produced by [obj](#M-AdaptiveCardsTemplateParser-obj 'AdaptiveCardsTemplateParser.obj').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ObjContext](#T-AdaptiveCardsTemplateParser-ObjContext 'AdaptiveCardsTemplateParser.ObjContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterTemplateData-AdaptiveCardsTemplateParser-TemplateDataContext-'></a>
### EnterTemplateData(context) `method`

##### Summary

Enter a parse tree produced by the `templateData`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateDataContext](#T-AdaptiveCardsTemplateParser-TemplateDataContext 'AdaptiveCardsTemplateParser.TemplateDataContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterTemplateRootData-AdaptiveCardsTemplateParser-TemplateRootDataContext-'></a>
### EnterTemplateRootData(context) `method`

##### Summary

Enter a parse tree produced by the `templateRootData`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateRootDataContext](#T-AdaptiveCardsTemplateParser-TemplateRootDataContext 'AdaptiveCardsTemplateParser.TemplateRootDataContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterTemplateStringWithRoot-AdaptiveCardsTemplateParser-TemplateStringWithRootContext-'></a>
### EnterTemplateStringWithRoot(context) `method`

##### Summary

Enter a parse tree produced by the `templateStringWithRoot`
labeled alternative in [templateRoot](#M-AdaptiveCardsTemplateParser-templateRoot 'AdaptiveCardsTemplateParser.templateRoot').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateStringWithRootContext](#T-AdaptiveCardsTemplateParser-TemplateStringWithRootContext 'AdaptiveCardsTemplateParser.TemplateStringWithRootContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterTemplateWhen-AdaptiveCardsTemplateParser-TemplateWhenContext-'></a>
### EnterTemplateWhen(context) `method`

##### Summary

Enter a parse tree produced by the `templateWhen`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateWhenContext](#T-AdaptiveCardsTemplateParser-TemplateWhenContext 'AdaptiveCardsTemplateParser.TemplateWhenContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterTemplatedString-AdaptiveCardsTemplateParser-TemplatedStringContext-'></a>
### EnterTemplatedString(context) `method`

##### Summary

Enter a parse tree produced by the `templatedString`
labeled alternative in [templateString](#M-AdaptiveCardsTemplateParser-templateString 'AdaptiveCardsTemplateParser.templateString').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplatedStringContext](#T-AdaptiveCardsTemplateParser-TemplatedStringContext 'AdaptiveCardsTemplateParser.TemplatedStringContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterValueArray-AdaptiveCardsTemplateParser-ValueArrayContext-'></a>
### EnterValueArray(context) `method`

##### Summary

Enter a parse tree produced by the `valueArray`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueArrayContext](#T-AdaptiveCardsTemplateParser-ValueArrayContext 'AdaptiveCardsTemplateParser.ValueArrayContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterValueFalse-AdaptiveCardsTemplateParser-ValueFalseContext-'></a>
### EnterValueFalse(context) `method`

##### Summary

Enter a parse tree produced by the `valueFalse`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueFalseContext](#T-AdaptiveCardsTemplateParser-ValueFalseContext 'AdaptiveCardsTemplateParser.ValueFalseContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterValueNull-AdaptiveCardsTemplateParser-ValueNullContext-'></a>
### EnterValueNull(context) `method`

##### Summary

Enter a parse tree produced by the `valueNull`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueNullContext](#T-AdaptiveCardsTemplateParser-ValueNullContext 'AdaptiveCardsTemplateParser.ValueNullContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterValueNumber-AdaptiveCardsTemplateParser-ValueNumberContext-'></a>
### EnterValueNumber(context) `method`

##### Summary

Enter a parse tree produced by the `valueNumber`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueNumberContext](#T-AdaptiveCardsTemplateParser-ValueNumberContext 'AdaptiveCardsTemplateParser.ValueNumberContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterValueObject-AdaptiveCardsTemplateParser-ValueObjectContext-'></a>
### EnterValueObject(context) `method`

##### Summary

Enter a parse tree produced by the `valueObject`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueObjectContext](#T-AdaptiveCardsTemplateParser-ValueObjectContext 'AdaptiveCardsTemplateParser.ValueObjectContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterValueString-AdaptiveCardsTemplateParser-ValueStringContext-'></a>
### EnterValueString(context) `method`

##### Summary

Enter a parse tree produced by the `valueString`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueStringContext](#T-AdaptiveCardsTemplateParser-ValueStringContext 'AdaptiveCardsTemplateParser.ValueStringContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterValueTemplateExpression-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext-'></a>
### EnterValueTemplateExpression(context) `method`

##### Summary

Enter a parse tree produced by the `valueTemplateExpression`
labeled alternative in [templateExpression](#M-AdaptiveCardsTemplateParser-templateExpression 'AdaptiveCardsTemplateParser.templateExpression').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateExpressionContext](#T-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext 'AdaptiveCardsTemplateParser.ValueTemplateExpressionContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterValueTemplateString-AdaptiveCardsTemplateParser-ValueTemplateStringContext-'></a>
### EnterValueTemplateString(context) `method`

##### Summary

Enter a parse tree produced by the `valueTemplateString`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateStringContext](#T-AdaptiveCardsTemplateParser-ValueTemplateStringContext 'AdaptiveCardsTemplateParser.ValueTemplateStringContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterValueTemplateStringWithRoot-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext-'></a>
### EnterValueTemplateStringWithRoot(context) `method`

##### Summary

Enter a parse tree produced by the `valueTemplateStringWithRoot`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext](#T-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext 'AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-EnterValueTrue-AdaptiveCardsTemplateParser-ValueTrueContext-'></a>
### EnterValueTrue(context) `method`

##### Summary

Enter a parse tree produced by the `valueTrue`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTrueContext](#T-AdaptiveCardsTemplateParser-ValueTrueContext 'AdaptiveCardsTemplateParser.ValueTrueContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitArray-AdaptiveCardsTemplateParser-ArrayContext-'></a>
### ExitArray(context) `method`

##### Summary

Exit a parse tree produced by [array](#M-AdaptiveCardsTemplateParser-array 'AdaptiveCardsTemplateParser.array').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ArrayContext](#T-AdaptiveCardsTemplateParser-ArrayContext 'AdaptiveCardsTemplateParser.ArrayContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitJson-AdaptiveCardsTemplateParser-JsonContext-'></a>
### ExitJson(context) `method`

##### Summary

Exit a parse tree produced by [json](#M-AdaptiveCardsTemplateParser-json 'AdaptiveCardsTemplateParser.json').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.JsonContext](#T-AdaptiveCardsTemplateParser-JsonContext 'AdaptiveCardsTemplateParser.JsonContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitJsonPair-AdaptiveCardsTemplateParser-JsonPairContext-'></a>
### ExitJsonPair(context) `method`

##### Summary

Exit a parse tree produced by the `jsonPair`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.JsonPairContext](#T-AdaptiveCardsTemplateParser-JsonPairContext 'AdaptiveCardsTemplateParser.JsonPairContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitObj-AdaptiveCardsTemplateParser-ObjContext-'></a>
### ExitObj(context) `method`

##### Summary

Exit a parse tree produced by [obj](#M-AdaptiveCardsTemplateParser-obj 'AdaptiveCardsTemplateParser.obj').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ObjContext](#T-AdaptiveCardsTemplateParser-ObjContext 'AdaptiveCardsTemplateParser.ObjContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitTemplateData-AdaptiveCardsTemplateParser-TemplateDataContext-'></a>
### ExitTemplateData(context) `method`

##### Summary

Exit a parse tree produced by the `templateData`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateDataContext](#T-AdaptiveCardsTemplateParser-TemplateDataContext 'AdaptiveCardsTemplateParser.TemplateDataContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitTemplateRootData-AdaptiveCardsTemplateParser-TemplateRootDataContext-'></a>
### ExitTemplateRootData(context) `method`

##### Summary

Exit a parse tree produced by the `templateRootData`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateRootDataContext](#T-AdaptiveCardsTemplateParser-TemplateRootDataContext 'AdaptiveCardsTemplateParser.TemplateRootDataContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitTemplateStringWithRoot-AdaptiveCardsTemplateParser-TemplateStringWithRootContext-'></a>
### ExitTemplateStringWithRoot(context) `method`

##### Summary

Exit a parse tree produced by the `templateStringWithRoot`
labeled alternative in [templateRoot](#M-AdaptiveCardsTemplateParser-templateRoot 'AdaptiveCardsTemplateParser.templateRoot').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateStringWithRootContext](#T-AdaptiveCardsTemplateParser-TemplateStringWithRootContext 'AdaptiveCardsTemplateParser.TemplateStringWithRootContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitTemplateWhen-AdaptiveCardsTemplateParser-TemplateWhenContext-'></a>
### ExitTemplateWhen(context) `method`

##### Summary

Exit a parse tree produced by the `templateWhen`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateWhenContext](#T-AdaptiveCardsTemplateParser-TemplateWhenContext 'AdaptiveCardsTemplateParser.TemplateWhenContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitTemplatedString-AdaptiveCardsTemplateParser-TemplatedStringContext-'></a>
### ExitTemplatedString(context) `method`

##### Summary

Exit a parse tree produced by the `templatedString`
labeled alternative in [templateString](#M-AdaptiveCardsTemplateParser-templateString 'AdaptiveCardsTemplateParser.templateString').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplatedStringContext](#T-AdaptiveCardsTemplateParser-TemplatedStringContext 'AdaptiveCardsTemplateParser.TemplatedStringContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitValueArray-AdaptiveCardsTemplateParser-ValueArrayContext-'></a>
### ExitValueArray(context) `method`

##### Summary

Exit a parse tree produced by the `valueArray`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueArrayContext](#T-AdaptiveCardsTemplateParser-ValueArrayContext 'AdaptiveCardsTemplateParser.ValueArrayContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitValueFalse-AdaptiveCardsTemplateParser-ValueFalseContext-'></a>
### ExitValueFalse(context) `method`

##### Summary

Exit a parse tree produced by the `valueFalse`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueFalseContext](#T-AdaptiveCardsTemplateParser-ValueFalseContext 'AdaptiveCardsTemplateParser.ValueFalseContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitValueNull-AdaptiveCardsTemplateParser-ValueNullContext-'></a>
### ExitValueNull(context) `method`

##### Summary

Exit a parse tree produced by the `valueNull`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueNullContext](#T-AdaptiveCardsTemplateParser-ValueNullContext 'AdaptiveCardsTemplateParser.ValueNullContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitValueNumber-AdaptiveCardsTemplateParser-ValueNumberContext-'></a>
### ExitValueNumber(context) `method`

##### Summary

Exit a parse tree produced by the `valueNumber`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueNumberContext](#T-AdaptiveCardsTemplateParser-ValueNumberContext 'AdaptiveCardsTemplateParser.ValueNumberContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitValueObject-AdaptiveCardsTemplateParser-ValueObjectContext-'></a>
### ExitValueObject(context) `method`

##### Summary

Exit a parse tree produced by the `valueObject`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueObjectContext](#T-AdaptiveCardsTemplateParser-ValueObjectContext 'AdaptiveCardsTemplateParser.ValueObjectContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitValueString-AdaptiveCardsTemplateParser-ValueStringContext-'></a>
### ExitValueString(context) `method`

##### Summary

Exit a parse tree produced by the `valueString`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueStringContext](#T-AdaptiveCardsTemplateParser-ValueStringContext 'AdaptiveCardsTemplateParser.ValueStringContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitValueTemplateExpression-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext-'></a>
### ExitValueTemplateExpression(context) `method`

##### Summary

Exit a parse tree produced by the `valueTemplateExpression`
labeled alternative in [templateExpression](#M-AdaptiveCardsTemplateParser-templateExpression 'AdaptiveCardsTemplateParser.templateExpression').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateExpressionContext](#T-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext 'AdaptiveCardsTemplateParser.ValueTemplateExpressionContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitValueTemplateString-AdaptiveCardsTemplateParser-ValueTemplateStringContext-'></a>
### ExitValueTemplateString(context) `method`

##### Summary

Exit a parse tree produced by the `valueTemplateString`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateStringContext](#T-AdaptiveCardsTemplateParser-ValueTemplateStringContext 'AdaptiveCardsTemplateParser.ValueTemplateStringContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitValueTemplateStringWithRoot-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext-'></a>
### ExitValueTemplateStringWithRoot(context) `method`

##### Summary

Exit a parse tree produced by the `valueTemplateStringWithRoot`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext](#T-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext 'AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserListener-ExitValueTrue-AdaptiveCardsTemplateParser-ValueTrueContext-'></a>
### ExitValueTrue(context) `method`

##### Summary

Exit a parse tree produced by the `valueTrue`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTrueContext](#T-AdaptiveCardsTemplateParser-ValueTrueContext 'AdaptiveCardsTemplateParser.ValueTrueContext') | The parse tree. |

<a name='T-IAdaptiveCardsTemplateParserVisitor`1'></a>
## IAdaptiveCardsTemplateParserVisitor\`1 `type`

##### Namespace



##### Summary

This interface defines a complete generic visitor for a parse tree produced
by [AdaptiveCardsTemplateParser](#T-AdaptiveCardsTemplateParser 'AdaptiveCardsTemplateParser').

##### Generic Types

| Name | Description |
| ---- | ----------- |
| Result | The return type of the visit operation. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitArray-AdaptiveCardsTemplateParser-ArrayContext-'></a>
### VisitArray(context) `method`

##### Summary

Visit a parse tree produced by [array](#M-AdaptiveCardsTemplateParser-array 'AdaptiveCardsTemplateParser.array').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ArrayContext](#T-AdaptiveCardsTemplateParser-ArrayContext 'AdaptiveCardsTemplateParser.ArrayContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitJson-AdaptiveCardsTemplateParser-JsonContext-'></a>
### VisitJson(context) `method`

##### Summary

Visit a parse tree produced by [json](#M-AdaptiveCardsTemplateParser-json 'AdaptiveCardsTemplateParser.json').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.JsonContext](#T-AdaptiveCardsTemplateParser-JsonContext 'AdaptiveCardsTemplateParser.JsonContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitJsonPair-AdaptiveCardsTemplateParser-JsonPairContext-'></a>
### VisitJsonPair(context) `method`

##### Summary

Visit a parse tree produced by the `jsonPair`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.JsonPairContext](#T-AdaptiveCardsTemplateParser-JsonPairContext 'AdaptiveCardsTemplateParser.JsonPairContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitObj-AdaptiveCardsTemplateParser-ObjContext-'></a>
### VisitObj(context) `method`

##### Summary

Visit a parse tree produced by [obj](#M-AdaptiveCardsTemplateParser-obj 'AdaptiveCardsTemplateParser.obj').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ObjContext](#T-AdaptiveCardsTemplateParser-ObjContext 'AdaptiveCardsTemplateParser.ObjContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitTemplateData-AdaptiveCardsTemplateParser-TemplateDataContext-'></a>
### VisitTemplateData(context) `method`

##### Summary

Visit a parse tree produced by the `templateData`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateDataContext](#T-AdaptiveCardsTemplateParser-TemplateDataContext 'AdaptiveCardsTemplateParser.TemplateDataContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitTemplateRootData-AdaptiveCardsTemplateParser-TemplateRootDataContext-'></a>
### VisitTemplateRootData(context) `method`

##### Summary

Visit a parse tree produced by the `templateRootData`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateRootDataContext](#T-AdaptiveCardsTemplateParser-TemplateRootDataContext 'AdaptiveCardsTemplateParser.TemplateRootDataContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitTemplateStringWithRoot-AdaptiveCardsTemplateParser-TemplateStringWithRootContext-'></a>
### VisitTemplateStringWithRoot(context) `method`

##### Summary

Visit a parse tree produced by the `templateStringWithRoot`
labeled alternative in [templateRoot](#M-AdaptiveCardsTemplateParser-templateRoot 'AdaptiveCardsTemplateParser.templateRoot').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateStringWithRootContext](#T-AdaptiveCardsTemplateParser-TemplateStringWithRootContext 'AdaptiveCardsTemplateParser.TemplateStringWithRootContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitTemplateWhen-AdaptiveCardsTemplateParser-TemplateWhenContext-'></a>
### VisitTemplateWhen(context) `method`

##### Summary

Visit a parse tree produced by the `templateWhen`
labeled alternative in [pair](#M-AdaptiveCardsTemplateParser-pair 'AdaptiveCardsTemplateParser.pair').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplateWhenContext](#T-AdaptiveCardsTemplateParser-TemplateWhenContext 'AdaptiveCardsTemplateParser.TemplateWhenContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitTemplatedString-AdaptiveCardsTemplateParser-TemplatedStringContext-'></a>
### VisitTemplatedString(context) `method`

##### Summary

Visit a parse tree produced by the `templatedString`
labeled alternative in [templateString](#M-AdaptiveCardsTemplateParser-templateString 'AdaptiveCardsTemplateParser.templateString').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.TemplatedStringContext](#T-AdaptiveCardsTemplateParser-TemplatedStringContext 'AdaptiveCardsTemplateParser.TemplatedStringContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueArray-AdaptiveCardsTemplateParser-ValueArrayContext-'></a>
### VisitValueArray(context) `method`

##### Summary

Visit a parse tree produced by the `valueArray`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueArrayContext](#T-AdaptiveCardsTemplateParser-ValueArrayContext 'AdaptiveCardsTemplateParser.ValueArrayContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueFalse-AdaptiveCardsTemplateParser-ValueFalseContext-'></a>
### VisitValueFalse(context) `method`

##### Summary

Visit a parse tree produced by the `valueFalse`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueFalseContext](#T-AdaptiveCardsTemplateParser-ValueFalseContext 'AdaptiveCardsTemplateParser.ValueFalseContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueNull-AdaptiveCardsTemplateParser-ValueNullContext-'></a>
### VisitValueNull(context) `method`

##### Summary

Visit a parse tree produced by the `valueNull`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueNullContext](#T-AdaptiveCardsTemplateParser-ValueNullContext 'AdaptiveCardsTemplateParser.ValueNullContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueNumber-AdaptiveCardsTemplateParser-ValueNumberContext-'></a>
### VisitValueNumber(context) `method`

##### Summary

Visit a parse tree produced by the `valueNumber`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueNumberContext](#T-AdaptiveCardsTemplateParser-ValueNumberContext 'AdaptiveCardsTemplateParser.ValueNumberContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueObject-AdaptiveCardsTemplateParser-ValueObjectContext-'></a>
### VisitValueObject(context) `method`

##### Summary

Visit a parse tree produced by the `valueObject`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueObjectContext](#T-AdaptiveCardsTemplateParser-ValueObjectContext 'AdaptiveCardsTemplateParser.ValueObjectContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueString-AdaptiveCardsTemplateParser-ValueStringContext-'></a>
### VisitValueString(context) `method`

##### Summary

Visit a parse tree produced by the `valueString`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueStringContext](#T-AdaptiveCardsTemplateParser-ValueStringContext 'AdaptiveCardsTemplateParser.ValueStringContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueTemplateExpression-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext-'></a>
### VisitValueTemplateExpression(context) `method`

##### Summary

Visit a parse tree produced by the `valueTemplateExpression`
labeled alternative in [templateExpression](#M-AdaptiveCardsTemplateParser-templateExpression 'AdaptiveCardsTemplateParser.templateExpression').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateExpressionContext](#T-AdaptiveCardsTemplateParser-ValueTemplateExpressionContext 'AdaptiveCardsTemplateParser.ValueTemplateExpressionContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueTemplateString-AdaptiveCardsTemplateParser-ValueTemplateStringContext-'></a>
### VisitValueTemplateString(context) `method`

##### Summary

Visit a parse tree produced by the `valueTemplateString`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateStringContext](#T-AdaptiveCardsTemplateParser-ValueTemplateStringContext 'AdaptiveCardsTemplateParser.ValueTemplateStringContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueTemplateStringWithRoot-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext-'></a>
### VisitValueTemplateStringWithRoot(context) `method`

##### Summary

Visit a parse tree produced by the `valueTemplateStringWithRoot`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext](#T-AdaptiveCardsTemplateParser-ValueTemplateStringWithRootContext 'AdaptiveCardsTemplateParser.ValueTemplateStringWithRootContext') | The parse tree. |

<a name='M-IAdaptiveCardsTemplateParserVisitor`1-VisitValueTrue-AdaptiveCardsTemplateParser-ValueTrueContext-'></a>
### VisitValueTrue(context) `method`

##### Summary

Visit a parse tree produced by the `valueTrue`
labeled alternative in [value](#M-AdaptiveCardsTemplateParser-value 'AdaptiveCardsTemplateParser.value').

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [AdaptiveCardsTemplateParser.ValueTrueContext](#T-AdaptiveCardsTemplateParser-ValueTrueContext 'AdaptiveCardsTemplateParser.ValueTrueContext') | The parse tree. |
