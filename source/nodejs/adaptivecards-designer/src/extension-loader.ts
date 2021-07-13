
export class ExtensionConfig {
	url: string;
	extensionsToLoad: string[];
}
export class ExtensionRegistry {
	static extensionsRegistry: Map<string, object> = new Map<string, any>();
	static subscriptions = [];

	static subscribe(fn: any): void {
		this.subscriptions.push(fn);
	}

	static addExtension(name: string, schema: any) {
		this.extensionsRegistry.set(name, schema);
		this.subscriptions.forEach((x) => x(schema));
	}
}

window['extensionLoader'] = ExtensionRegistry;