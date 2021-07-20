export function extractionElementsAndActionsFromExtension(extensionObject: any): { elements: any, actions: any } {
	const definitions: { [key: string]: any } = extensionObject.contributes.definitions;
	const definitionsNames: any[] = Object.keys(extensionObject.contributes.definitions);
	const elements = {};
	const actions = {};

	definitionsNames.forEach(definitionsName => {
		if (definitions[definitionsName].extends && definitions[definitionsName].extends.toLowerCase() === 'action') {
			actions[definitionsName] = definitions[definitionsName];
		} else if (definitions[definitionsName].extends) {
			elements[definitionsName] = definitions[definitionsName];
		} else {
			actions[definitionsName] = definitions[definitionsName];
			elements[definitionsName] = definitions[definitionsName];
		}
	});

	return {
		elements,
		actions,
	};
}
