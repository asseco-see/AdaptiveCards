export function extractionElementsAndActionsFromExtension(extensionObject: any): { elements: any, actions: any } {
	const definitions: { [key: string]: any } = extensionObject.contributes.definitions;
	const definitionsNames: any[] = Object.keys(extensionObject.contributes.definitions);
	const elements = {};
	const actions = {};

	definitionsNames.forEach(definitionsName => {
		const extensionType = definitions[definitionsName].extends ? definitions[definitionsName].extends.toLowerCase() : null;
		const classType = definitions[definitionsName].classType ? definitions[definitionsName].classType.toLowerCase() : null;

		if (classType === 'enum') {
			actions[definitionsName] = definitions[definitionsName];
			elements[definitionsName] = definitions[definitionsName];
			return;
		}

		if (extensionType) {
			if (extensionType === 'action') {
				actions[definitionsName] = definitions[definitionsName];
			} else {
				elements[definitionsName] = definitions[definitionsName];
			}
		} else {
			if (definitionsName.startsWith('Action.')) {
				actions[definitionsName] = definitions[definitionsName];
			} else {
				elements[definitionsName] = definitions[definitionsName];	
			}
		}
	});

	return {
		elements,
		actions,
	};
}
