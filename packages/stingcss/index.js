const plugin = require("tailwindcss/plugin");
const defaultTheme = require('tailwindcss/defaultTheme');
// const base = require("./dist/base")
// const utilities = require("./dist/utilities")
const styled = require("./dist/styled")
const colors = require("./theming/colors");
const spacing = require("./theming/spacing");
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
module.exports = plugin.withOptions(
  function () {
    return function (options) {
      const { addBase, addComponents, addUtilities } = options;
      // addBase(base)
      // addUtilities(utilities, { variants: ["responsive"] })
      addComponents(styled, { variants: ["responsive"] })
    };
  },
  // function () {
  //   return {
  //     theme: {
  //       extend: {
  //         fontFamily: {
  //           sans: ['Inter', ...defaultTheme.fontFamily.sans]
  //         },
  //         fontSize: {
  //           'xxs': '0.64rem',
  //           'xs': '0.6875rem',
  //           'sm': '0.75rem',
  //           'base': '0.8125rem', //0.875rem
  //           'lg': '0.9375rem', //1.05rem
  //           'xl': '1.1875rem', //1.26rem
  //           '2xl': '1.4375rem', //1.512rem
  //           '3xl': '1.6875rem', //1.8144rem
  //           '4xl': '2.0625rem' //2.1773rem
  //         },
  //         fontWeight: {
  //           'thin': '200',
  //           'light': '200',
  //           'normal': '400',
  //           'medium': '500',
  //           'semibold': '600',
  //           'bold': '800',
  //           'extrabold': '800',
  //           'black': '800',
  //         },
  //         height: {
  //           'xsmall': '1.25rem',
  //           'small': '1.75rem',
  //           'regular': '2rem',
  //           'large': '2.5rem'
  //         },
  //         minHeight: {
  //           'none': '1rem',
  //           'small': '1.75rem',
  //           'regular': '2rem',
  //           'large': '2.5rem'
  //         },
  //         boxShadow: {
  //           sm: 'rgba(1, 42, 56, 0.15) 0px 1px 1px, rgba(227, 227, 227, 1) 0px 0px 1px 1px',
  //           md: 'rgba(1, 42, 56, 0.25) 0px 4px 8px -2px, rgba(1, 42, 56, 0.08) 0px 0px 0px 1px',
  //           lg: 'rgba(1, 42, 56, 0.1) 0px 4px 16px, rgba(1, 42, 56, 0.1) 0px 8px 24px, rgba(1, 42, 56, 0.1) 0px 16px 56px'
  //         },
  //         backgroundColor: generateColorsUtility(colors),
  //         textColor: {
  //           ...generateColorsUtility(colors),
  //           'lightest': colors.neutral[500],
  //           'light': colors.neutral[600],
  //           'regular': colors.neutral[700],
  //           'dark': colors.neutral[800],
  //           'darkest': colors.neutral[900]
  //         },
  //         ringColor: {
  //           ...generateColorsUtility(colors),
  //           'lightest': colors.neutral[200],
  //           'light': colors.neutral[300],
  //           'regular': colors.neutral[500],
  //           'dark': colors.neutral[600],
  //           'darkest': colors.neutral[700]
  //         },
  //         borderColor: {
  //           ...generateColorsUtility(colors),
  //           'lightest': colors.neutral[50],
  //           'light': colors.neutral[100],
  //           'regular': colors.neutral[200],
  //           'dark': colors.neutral[300],
  //           'darkest': colors.neutral[400]
  //         },
  //         padding: {
  //           'small': '0.25rem 0.5rem',   // py-1 px-2
  //           'regular': '0.5rem 0.75rem', // py-2 px-3
  //           'large': '0.5rem 1rem'      // py-2 px-4
  //         },
  //         colors,
  //         spacing,
  //         inset: {
  //           "1/2": "50%",
  //         },
  //       },
  //     },
  //   }
  // }
);