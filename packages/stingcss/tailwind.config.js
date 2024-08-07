const plugin = require("tailwindcss/plugin")
const colors = require('./theming/colors');
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
  content: [{ raw: "" }],
  theme: {
    extend: {
      fontSize: {
        // old sizes
        display: "2.566rem", //41.05px
        h1: "1.802rem", //28.83px
        h2: "1.602rem", //25.63px
        h3: "1.424rem", //20.25px
        h4: "1.266rem", //18px
        h5: "1.125rem", //16px
        h6: "0.889rem", //14.22px
        upper: "0.79rem", //12.64px
        subtitle: "1rem",
        copy: "0.889rem",
        small: "0.79rem",
        "copy-large": "1rem",
        "copy-regular": "0.889rem",
        "copy-small": "0.79rem",
        "copy-upper": "0.702rem",
        // new sizes
        '2xs': 'var(--font-size-2xs, 0.64rem)',
        xs: 'var(--font-size-xs, 0.6875rem)',
        sm: 'var(--font-size-sm, 0.75rem)',
        base: 'var(--font-size-base, 0.8125rem)',
        md: 'var(--font-size-md, 0.9375rem)',
        lg: 'var(--font-size-lg, 0.9375rem)',
        xl: 'var(--font-size-xl, 1.1875rem)',
        '2xl': 'var(--font-size-2xl, 1.4375rem)',
        '3xl': 'var(--font-size-3xl, 1.6875rem)',
        '4xl': 'var(--font-size-4xl, 2.0625rem)',
        '5xl': 'var(--font-size-5xl, 2.281rem)',
        '6xl': 'var(--font-size-6xl, 2.566rem)',
        '7xl': 'var(--font-size-7xl, 2.887rem)',
        '8xl': 'var(--font-size-8xl, 3.247rem)',
        '9xl': 'var(--font-size-9xl, 3.653rem)',
        '10xl': 'var(--font-size-10xl, 4.11rem)',
        '11xl': 'var(--font-size-11xl, 4.624rem)',
        '12xl': 'var(--font-size-12xl, 5.202rem)',
        '13xl': 'var(--font-size-13xl, 5.852rem)',
      }
      ,
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Sora: ["Sora", "sans-serif"],
        'fira-code': 'var(--fira-code)',
      },
      // fontSize: fontStyle.fontSize,
      fontWeight: {
        semibold: 'var(--bold, 800)',
        semibold: 'var(--semibold, 600)',
        medium: 'var(--medium, 500)',
        regular: 'var(--regular, 400)',
      },
      height: {
        'xsmall': '1.25rem',
        'small': '1.75rem',
        'regular': '2rem',
        'large': '2.75rem'
      },
      minHeight: {
        'none': '1rem',
        'small': '1.75rem',
        'regular': '2rem',
        'large': '2.75rem'
      },
      lineHeight: {
        '2xs': 'var(--base-line-height, 150%)',
        xs: 'var(--base-line-height, 145%)',
        sm: 'var(--base-line-height, 140%)',
        base: 'var(--base-line-height, 135%)',
        md: 'var(--base-line-height, 135%)',
        lg: 'var(--base-line-height, 130%)',
        xl: 'var(--base-line-height, 130%)',
        '2xl': 'var(--base-line-height, 130%)',
        '3xl': 'var(--base-line-height, 130%)',
        '4xl': 'var(--base-line-height, 130%)',
      },
      // padding: {
      //   'small': '0.25rem 0.5rem',
      //   'regular': '0.5rem 0.75rem',
      //   'large': '0.75rem 1rem'
      // },
      letterSpacing: {
        ultratight: 'var(--letter-spacing-ultratight, -.09375em)',
        tightest: 'var(--letter-spacing-tightest, -.0625em)',
        tighter: 'var(--letter-spacing-tighter, -.03125em)',
        tight: 'var(--letter-spacing-tight, -.015625em)',
        normal: 'var(--letter-spacing-normal, 0)',
        wide: 'var(--letter-spacing-wide, .0625em)',
        wider: 'var(--letter-spacing-wider, .125em)',
        widest: 'var(--letter-spacing-widest, .1875em)',
      },
      textTransform: {
        uppercase: 'var(--uppercase, uppercase)',
        lowercase: 'var(--lowercase, lowercase)',
      },
      boxShadow: {
        sm: 'rgba(1, 42, 56, 0.15) 0px 1px 1px, rgba(227, 227, 227, 1) 0px 0px 1px 1px',
        md: 'rgba(1, 42, 56, 0.25) 0px 4px 8px -2px, rgba(1, 42, 56, 0.08) 0px 0px 0px 1px',
        lg: 'rgba(1, 42, 56, 0.1) 0px 4px 16px, rgba(1, 42, 56, 0.1) 0px 8px 24px, rgba(1, 42, 56, 0.1) 0px 16px 56px'
      },
      colors,
      inset: {
        "1/2": "50%",
      },
      fontSize: {
        'xxs': '0.64rem',
        'xs': '0.6875rem',
        'sm': '0.75rem',
        'base': '0.8125rem', //0.875rem
        'lg': '0.9375rem', //1.05rem
        'xl': '1.1875rem', //1.26rem
        '2xl': '1.4375rem', //1.512rem
        '3xl': '1.6875rem', //1.8144rem
        '4xl': '2.0625rem' //2.1773rem
      },
      fontWeight: {
        'thin': '200',
        'light': '200',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '800',
        'extrabold': '800',
        'black': '800',
      },
      height: {
        'xsmall': '1.25rem',
        'small': '1.75rem',
        'regular': '2rem',
        'large': '2.5rem'
      },
      minHeight: {
        'none': '1rem',
        'small': '1.75rem',
        'regular': '2rem',
        'large': '2.5rem'
      },
      boxShadow: {
        sm: 'rgba(1, 42, 56, 0.15) 0px 1px 1px, rgba(227, 227, 227, 1) 0px 0px 1px 1px',
        md: 'rgba(1, 42, 56, 0.25) 0px 4px 8px -2px, rgba(1, 42, 56, 0.08) 0px 0px 0px 1px',
        lg: 'rgba(1, 42, 56, 0.1) 0px 4px 16px, rgba(1, 42, 56, 0.1) 0px 8px 24px, rgba(1, 42, 56, 0.1) 0px 16px 56px'
      },
      backgroundColor: generateColorsUtility(colors),
      textColor: {
        ...generateColorsUtility(colors),
        'lightest': colors.neutral[500],
        'light': colors.neutral[600],
        'regular': colors.neutral[700],
        'dark': colors.neutral[800],
        'darkest': colors.neutral[900]
      },
      ringColor: {
        ...generateColorsUtility(colors),
        'lightest': colors.neutral[200],
        'light': colors.neutral[300],
        'regular': colors.neutral[500],
        'dark': colors.neutral[600],
        'darkest': colors.neutral[700]
      },
      borderColor: {
        ...generateColorsUtility(colors),
        'lightest': colors.neutral[50],
        'light': colors.neutral[100],
        'regular': colors.neutral[200],
        'dark': colors.neutral[300],
        'darkest': colors.neutral[400]
      },
      spacing: {
        'xsmall': '0.125rem',
        'small': '0.25rem',   // py-1 px-2
        'regular': '0.5rem', // py-2 px-3
        'medium': '0.75rem',
        'large': '1rem',     // py-2 px-4
        'xlarge': '1.5rem',
        'xxlarge': '2rem',
      },
      borderRadius: {
        'small': '0.25rem',
        'max': "9999px"
      }
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, addComponents, matchUtilities, matchComponents, theme }) {
      // addUtilities(require("./dist/utilities")),
      // addComponents(require("./dist/combined"))
    })
  ]
}