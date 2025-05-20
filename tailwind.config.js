/** @type {import('tailwindcss').Config} */
const stingTokens = require("./packages/sting-tokens");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./packages/sting-react/src/components/**/*.{js,ts,jsx,tsx}",
  ],
  // prefix: "s-",
  theme: {
    extend: {
      ...stingTokens.theme.extend,
    },
  },
};
