
export class ExtensionConfig {
	url: string;
	extensionsToLoad: string[];
}
export class ExtensionRegistry {
	static extensionsRegistry: Map<string, object> = new Map<string, any>();
	static customCss: Map<string, string> = new Map<string, string>();
	static subscriptions = [];
	static cssSubscriptions = [];

	static subscribe(fn: any): void {
		this.subscriptions.push(fn);
	}
	static subscribeCss(fn: any): void {
		this.cssSubscriptions.push(fn);
	}
	static addExtension(name: string, schema: any) {
		this.extensionsRegistry.set(name, schema);
		this.subscriptions.forEach((x) => x(schema));
	}

	static addCss(name: string, value: string) {
		this.customCss.set(name, value);
		this.cssSubscriptions.forEach((x) => x(name, value));
	}
}

window['extensionLoader'] = ExtensionRegistry;