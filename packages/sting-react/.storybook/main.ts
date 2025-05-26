import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path, { dirname, join } from 'path';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

	addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@storybook/addon-onboarding'),
		getAbsolutePath('@storybook/addon-interactions'),
		getAbsolutePath('@storybook/addon-a11y'),
	],

	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {},
	},

	viteFinal: async (config) => {
		config.plugins?.push(
			tsconfigPaths({
				projects: [path.resolve(path.dirname(path.dirname(path.dirname(__dirname))), 'tsconfig.json')],
			}),
		);

		config.resolve = config.resolve || {};
		config.resolve.alias = {
			...config.resolve.alias,
			'chargebee-ui': path.resolve(__dirname, '../dist'),
			'@': path.resolve(__dirname, '../src'),
		};

		return config;
	},

	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},
};
export default config;

function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')));
}
