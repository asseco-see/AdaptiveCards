export function extractionElementsAndActionsFromExtension(extensionObject: any): { elements: any, actions: any } {
	const elements = {};
	const actions = {};

	if (!extensionObject || !extensionObject.contributes || !extensionObject.contributes.definitions) {
		return {
			elements,
			actions,
		};
	}

	const definitions: { [key: string]: any } = extensionObject.contributes.definitions;
	const definitionsNames: any[] = Object.keys(extensionObject.contributes.definitions);


	definitionsNames.forEach(definitionsName => {
		const extensionType = definitions[definitionsName].extends ? definitions[definitionsName].extends.toLowerCase() : null;
		const classType = definitions[definitionsName].classType ? definitions[definitionsName].classType.toLowerCase() : null;

		if (classType === 'enum' || classType === 'class') {
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
