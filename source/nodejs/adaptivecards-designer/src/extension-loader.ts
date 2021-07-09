
export class ExtensionConfig {
	url: string;
	extensionsToLoad: string[];
}

export class ExtensionLoader {
	private _configPromise;
	private _extensionsPromise;
	private _baseUrl: string;
	private _extensionConfig: ExtensionConfig;
	private _configLoaded: boolean = false;
	private _extensions: any[] = null;

	private static _instance: ExtensionLoader;

	public static get Instance(): ExtensionLoader {
		return this._instance || (this._instance = new this());
	}

	private constructor() { }

	public async getExtensions(): Promise<any[]> {
		if (!this._configPromise) {
			this._configPromise = new Promise((resolve) => {
				this.downloadConfiguration().then(config => {
					this._baseUrl = config.baseUrl;
					this._extensionConfig = config.extensions;
					this._configLoaded = true;
					resolve(config);
				});
			});
		}

		if (!this._configLoaded) {
			await this._configPromise;
		}

		if (!this._extensionsPromise) {
			this._extensionsPromise = new Promise((resolve) => {
				this.downloadExtensions().then(result => {
					this._extensions = result;
					resolve(result);
				});
			});
		}

		if (this._extensions === null) {
			await this._extensionsPromise;
		}

		return this._extensions;
	}

	private async  downloadConfiguration(): Promise<any> {
		const res = await fetch(this.getBaseUrl() + 'configuration.json');

		return await res.json();
	}

	private async downloadExtensions(): Promise<any[]> {
		let baseUrl: string;
		if (this.isLocalPath(this._extensionConfig.url)) {
			if (!this._baseUrl.endsWith('/')) {
				baseUrl = '/';
			}

			baseUrl = baseUrl + this._extensionConfig.url.replace(/^\//, '');
		} else {
			baseUrl = this._extensionConfig.url;
		}

		const extensions = [];
		for (const name of this._extensionConfig.extensionsToLoad) {
			const res = await fetch(baseUrl + name + '.json');
			extensions.push(await res.json());
		}

		return extensions;
	}

	private isLocalPath(path: string): boolean {
		if (path.startsWith('http') || path.startsWith('https')) {
			return false;
		}

		return true;
	}

	private getBaseUrl(): string {
		let host = window.location.protocol + "//" + window.location.host;
		const base = document.getElementsByTagName("base")[0];
		if (base && base.href && base.href.indexOf('http') !== -1) {
			return base.href;
		} else if (base && base.href && base.href.indexOf('http') === -1) {
			host += base.href;
		}
		return host;
	}
}
