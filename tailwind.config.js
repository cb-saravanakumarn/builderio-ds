/** @type {import('tailwindcss').Config} */
const colors = require("./packages/stingcss/theming/colors");
const spacing = require("./packages/stingcss/theming/spacing");

function generateColorsUtility(colorsObj) {
  const utilities = {};
  for (const [key, value] of Object.entries(colorsObj)) {
    for (const [shade, hexValue] of Object.entries(value)) {
      const name = `${key}-${shade}`;
      utilities[name] = hexValue;
    }
  }
  return utilities;
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./packages/sting-react/src/components/**/*.{js,ts,jsx,tsx}",
  ],
  // prefix: "s-",
  theme: {
    extend: {
      textColor: {
        ...generateColorsUtility(colors),
        lightest: colors.neutral[500],
        light: colors.neutral[600],
        regular: colors.neutral[700],
        dark: colors.neutral[800],
        darkest: colors.neutral[900],
      },
      height: {
        xsmall: "1.25rem",
        small: "1.75rem",
        regular: "2rem",
        large: "2.5rem",
      },
      colors,
      spacing,
    },
  },
  // plugins: [require("./packages/stingcss/index.js")],
};
