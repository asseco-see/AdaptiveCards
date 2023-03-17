using System;
using System.Linq;
using System.Text;
using System.Web;
using Microsoft.PowerFx;
using Microsoft.PowerFx.Core;
using Microsoft.PowerFx.Intellisense;
using Microsoft.PowerFx.Types;


public class PowerFxHelper
{
    public static string ConvertToString(FormulaValue result)
    {
        var sb = new StringBuilder();
        try
        {
            ConvertToString(result, sb);
        }
        catch (Exception e)
        {
            sb.Append($"<exception writing result: {e.Message}>");
        }

        string actualStr = sb.ToString();
        return actualStr;
    }

    internal static void ConvertToString(FormulaValue result, StringBuilder sb)
    {
        if (result is NumberValue n)
        {
            sb.Append(n.Value);
        }
        else if (result is BooleanValue b)
        {
            sb.Append(b.Value ? "true" : "false");
        }
        else if (result is StringValue s)
        {
            sb.Append('"' + s.Value + '"');
        }
        else if (result is TableValue t)
        {
            var tableType = (TableType)t.Type;
            var canUseSquareBracketSyntax = t.IsColumn && t.Rows.All(r => r.IsValue) && tableType.FieldNames.First() == "Value";
            if (canUseSquareBracketSyntax)
            {
                sb.Append('[');
            }
            else
            {
                sb.Append("Table(");
            }

            var dil = string.Empty;
            foreach (var row in t.Rows)
            {
                sb.Append(dil);
                dil = ",";

                if (canUseSquareBracketSyntax)
                {
                    var val = row.Value.Fields.First().Value;
                    ConvertToString(val, sb);
                }
                else
                {
                    if (row.IsValue)
                    {
                        ConvertToString(row.Value, sb);
                    }
                    else
                    {
                        ConvertToString(row.ToFormulaValue(), sb);
                    }
                }

                dil = ",";
            }

            if (canUseSquareBracketSyntax)
            {
                sb.Append(']');
            }
            else
            {
                sb.Append(')');
            }
        }
        else if (result is RecordValue r)
        {
            var fields = r.Fields.ToArray();
            Array.Sort(fields, (a, b) => string.CompareOrdinal(a.Name, b.Name));

            sb.Append('{');
            var dil = string.Empty;

            foreach (var field in fields)
            {
                sb.Append(dil);
                sb.Append(field.Name);
                sb.Append(':');
                ConvertToString(field.Value, sb);

                dil = ",";
            }

            sb.Append('}');
        }
        else if (result is TimeValue tv)
        {
            sb.Append(tv.Value.ToString());
        }
        else if (result is BlankValue)
        {
            sb.Append("");
        }
        else if (result is DateValue d)
        {
            // Date(YYYY,MM,DD)
            var date = d.Value;
            sb.Append($"Date({date.Year},{date.Month},{date.Day})");
        }
        else if (result is DateTimeValue dt)
        {
            // DateTime(yyyy,MM,dd,HH,mm,ss,fff)
            var dateTime = dt.Value;
            sb.Append($"DateTime({dateTime.Year},{dateTime.Month},{dateTime.Day},{dateTime.Hour},{dateTime.Minute},{dateTime.Second},{dateTime.Millisecond})");
        }
        else if (result is ErrorValue)
        {
            sb.Append(result);
        }
        else
        {
            throw new InvalidOperationException($"unsupported value type: {result.GetType().Name}");
        }
    }
}

public class PowerFxScopeFactory : IPowerFxScopeFactory
{
    // Ensure that we're getting the same engine used by intellisense (LSP) and evaluation.
    public RecalcEngine GetEngine()
    {
        // If the engine requires additional symbols to load, server
        // should find a way to safely cache it. 
        var engine = new RecalcEngine();

        return engine;
    }

    // A scope wraps the engine and provides parameters used for intellisense.
    public EditorContextScope GetScope(string contextJson)
    {
        var engine = GetEngine();

        ParserOptions opts = new ParserOptions();
        var record = (RecordValue) FormulaValue.FromJson(contextJson);
        var symbols = ReadOnlySymbolTable.NewFromRecord(record.Type);

        var scope = engine.CreateEditorScope(opts, symbols);
        return scope;
    }

    // Uri is passed in from the front-end and specifies which formula bar. 
    // Returns an object that provides intellisense support. 
    public IPowerFxScope GetOrCreateInstance(string documentUri)
    {
        // The host could pass in additional information in the Uri here to help 
        // initialize a formula bar or distinguish between multiple formula bars. 

        // The context is additional symbols passed by the host.             
        var uriObj = new Uri(documentUri);
        var contextJson = HttpUtility.ParseQueryString(uriObj.Query).Get("context");
        if (contextJson == null)
        {
            contextJson = "{}";
        }

        var scope = GetScope(contextJson);
        return scope;
    }
}
