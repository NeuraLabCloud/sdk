export interface Options {
	api_key: string;
}

export class NeuralabSDK {
	private options: Options;

	public constructor(options: Options) {
		this.options = options;
	}

	public get_options(): Options {
		return Object.keys(this.options).reduce((acc, key) => {
			if (key === 'api_key') {
				return { ...acc, [key]: 'null' };
			}

			if (key in this.options) {
				return { ...acc, [key]: this.options[key as keyof Options] };
			}

			return acc;
		}, {} as Options);
	}
}
