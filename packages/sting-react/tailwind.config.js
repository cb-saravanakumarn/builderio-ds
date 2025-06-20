const stingTokens = require('../sting-tokens');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			...stingTokens,
		},
	},
	plugins: [require('tailwindcss-animate')],
};
