/** @type {import('tailwindcss').Config} */
const stingTokens = require("./packages/sting-tokens");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./packages/sting-react/src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...stingTokens,
    },
  },
  plugins: [require("tailwindcss-animate")],
};
