import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path, { dirname, join } from 'path';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*.mdx'],

	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
	],

	framework: {
		name: '@storybook/react-vite',
		options: {},
	},

	viteFinal: async (config) => {
		config.plugins?.push(
			tsconfigPaths({
				projects: [
					path.resolve(
						path.dirname(path.dirname(path.dirname(__dirname))),
						'tsconfig.json',
					),
				],
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
