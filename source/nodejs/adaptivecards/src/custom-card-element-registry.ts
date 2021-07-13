export class CustomCardElementRegistry {
	static cardElementRegistry: Map<string, any> = new Map<string, any>();
	static subscriptions: any[] = [];

	static subscribe(fn: any): void {
		this.subscriptions.push(fn);
	}

	static addExtension(name: string, cardElement: any) {
		this.cardElementRegistry.set(name, cardElement);
		this.subscriptions.forEach((x) => x(name, cardElement));
	}
}
