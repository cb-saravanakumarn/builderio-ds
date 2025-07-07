const stingTokens = require('../sting-tokens');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: stingTokens.colors,
			spacing: stingTokens.spacing,
			borderRadius: stingTokens.borderRadius,
			fontSize: stingTokens.fontSize,
			fontWeight: stingTokens.fontWeight,
		},
	},
	plugins: [],
};
