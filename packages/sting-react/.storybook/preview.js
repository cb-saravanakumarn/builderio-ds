import '../src/components/tailwind.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				order: ['Getting Started', ['Installation', '*'], '*'],
			},
		},
		docs: {
			autodocs: true,
		},
	},
};

export default preview;
