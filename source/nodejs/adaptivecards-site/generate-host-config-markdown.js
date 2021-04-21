const fs = require('fs');
const schemaBuilderUtilities = require('./themes/adaptivecards/scripts/utilities/schema-builder-extension-utilities');
const documentHeader = `
# Adaptive Cards Host Config

HostConfig is a **cross-platform configuration object** that specifies how an Adaptive Card Renderer generates UI.

This allows properties which are platform agnostic to be shared among renderers on different platforms and devices. It also allows tooling to be created which gives you an idea of the look and feel that card would have for a given environment.

See a sample [HostConfig.json](https://github.com/Microsoft/AdaptiveCards/blob/master/samples/HostConfig/sample.json) to get a feeling for its contents.

---\n`;

const tableHeader = 
`|Property|Type|Required|Description|Version|
|--------|----|--------|-----------|-------|`;

const newLine = '\n';
const lineBreak = newLine + '<br/>' + newLine;
const hyperlinkPrefix = '/platform/adaptive-cards/host-config';

try {
	const hostConfig = require('../../../schemas/host-config.json');

	//Merge host config
	const extensions = schemaBuilderUtilities.loadExtendedDefinitions('../../../schemas/extensions/');
	for (const extension of extensions) {
		mergeHostConfigWithExtension(hostConfig, extension);
	}

	if (hostConfig.definitions['AdaptiveCardConfig'] && hostConfig.properties) {
		for(const propName in hostConfig.properties) {
			hostConfig.definitions['AdaptiveCardConfig'].properties[propName] = hostConfig.properties[propName];
		}
	}

	const headerMarkdown = [];
	const bodyMarkdown = [];

	for (const defName in hostConfig.definitions) {
		const def = hostConfig.definitions[defName];
		// headerMarkdown.push(`   * [\`${defName}\`](${hyperlinkPrefix}/#schema-${defName.toLocaleLowerCase()}) - ${def.description}`)
		headerMarkdown.push(`   * \`${defName}\` - ${def.description}`)
		
		bodyMarkdown.push(`<a name="schema-${defName.toLocaleLowerCase()}"></a>`);
		bodyMarkdown.push(`## ${defName}`); 
		bodyMarkdown.push(def.description); 
		bodyMarkdown.push(newLine);
		bodyMarkdown.push(tableHeader);
		for (const propName in def.properties) {
			let propSchema = def.properties[propName];
			let propType = 'object';
			if (propSchema['$ref']) {
				propType = propSchema['$ref'].split('/').pop();
				propSchema = hostConfig.definitions[propType];
			} else {
				propType = propSchema.type;
			}

			const propRequired = propSchema.required ? 'Yes' : 'No';
			const propDescription = propSchema.description ? propSchema.description : '';
			const propVersion = propSchema.version ? propSchema.version : '1.0';

			bodyMarkdown.push(`|**${propName}**|\`${propType}\`|${propRequired}|${propDescription}|${propVersion}`);
		}
		
		bodyMarkdown.push(lineBreak);
	}

	headerMarkdown.push(newLine);
	let result = documentHeader  + newLine + headerMarkdown.join(newLine) + lineBreak + newLine + bodyMarkdown.join(newLine); 
	fs.writeFileSync('./pages/host-config/index.md', result);

} catch (err) {
	console.error(err);
}

function toCamelCase(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    });
}

function toPascalCase(string) {
    return `${string}`
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(
            new RegExp(/\s+(.)(\w+)/, 'g'),
            ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
        )
        .replace(new RegExp(/\s/, 'g'), '')
        .replace(new RegExp(/\w/), s => s.toUpperCase());
}


function mergeHostConfigWithExtension(schema, extension) {
    const id = extension.id;

    if (!id) {
        console.error('Extension Id is missing');
        return;
    }

    if (!extension.hostConfig || !extension.hostConfig.properties) {
        console.warn(`Extension ${id} does not contain host config part`);
        return;
    }

    const hostConfigPropertyName = toCamelCase(id);
    if (!hostConfigPropertyName) {
        console.error('Extension Id is invalid');
        return;
    }

    let hostConfigDefinitionName = toPascalCase(id);
    if (!hostConfigDefinitionName) {
        console.error('Extension Id is invalid');
        return;
    }

    hostConfigDefinitionName += 'Config';

    if (!schema.properties) {
        console.error('Host config schema does not contain properties field');
        return;
    }

    if (schema.properties.extensions && schema.properties.extensions[hostConfigPropertyName]) {
        console.error(`Host config schema already contains ${hostConfigPropertyName} property`);
        return;
    }

	if (!schema.properties.extensions) {
		schema.properties.extensions = {
			'$ref' : '#/definitions/ExtensionsConfig'
		};

		schema.definitions.ExtensionsConfig = {
			type: 'object',
			description: 'Host Configuration for renderer extensions',
			properties: {}
		};
	}

    schema.definitions.ExtensionsConfig.properties[hostConfigPropertyName] = {
        '$ref': `#/definitions/${hostConfigDefinitionName}`,
    };

    const extensionHostConfigProperties = extension.hostConfig.properties;
	Object.keys(extensionHostConfigProperties).forEach((v) => {
		extensionHostConfigProperties[v].version = extension.version;
	});

    schema.definitions[hostConfigDefinitionName] = {
        type: 'object',
        description: `Parameters controlling the ${id}`,
        properties: extensionHostConfigProperties
    };

}
