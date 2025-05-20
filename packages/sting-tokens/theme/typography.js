/**
 * Typography tokens for the Sting Design System
 */

const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
};

const fontSize = {
  // Headings
  "heading-2xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.32px" }],
  "heading-xl": ["32px", { lineHeight: "40px", letterSpacing: "-0.24px" }],
  "heading-lg": ["24px", { lineHeight: "32px", letterSpacing: "-0.16px" }],
  "heading-md": ["20px", { lineHeight: "28px", letterSpacing: "-0.08px" }],
  "heading-sm": ["16px", { lineHeight: "24px", letterSpacing: "0px" }],
  "heading-xs": ["14px", { lineHeight: "20px", letterSpacing: "0px" }],

  // Body
  "body-lead": ["16px", { lineHeight: "24px", letterSpacing: "0px" }],
  "body-body": ["14px", { lineHeight: "20px", letterSpacing: "0px" }],
  "body-caption": ["12px", { lineHeight: "16px", letterSpacing: "0px" }],
  "body-tiny": ["10px", { lineHeight: "16px", letterSpacing: "0px" }],
};

/**
 * Typography styles with size, lineHeight, and letterSpacing only
 */
const typography = {
  // Headings
  "heading-2xl": {
    fontWeight: fontWeight.semibold,
    fontSize: "48px",
    lineHeight: "56px",
    letterSpacing: "-0.32px",
  },
  "heading-xl": {
    fontWeight: fontWeight.semibold,
    fontSize: "32px",
    lineHeight: "40px",
    letterSpacing: "-0.24px",
  },
  "heading-lg": {
    fontWeight: fontWeight.medium,
    fontSize: "24px",
    lineHeight: "32px",
    letterSpacing: "-0.16px",
  },
  "heading-md": {
    fontWeight: fontWeight.medium,
    fontSize: "20px",
    lineHeight: "28px",
    letterSpacing: "-0.08px",
  },
  "heading-sm": {
    fontWeight: fontWeight.medium,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0px",
  },
  "heading-xs": {
    fontWeight: fontWeight.medium,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0px",
  },

  // Body variants with default Regular weight
  "body-lead": {
    fontWeight: fontWeight.regular,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0px",
  },
  "body-lead-medium": {
    fontWeight: fontWeight.medium,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0px",
  },
  "body-lead-semibold": {
    fontWeight: fontWeight.semibold,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0px",
  },
  body: {
    fontWeight: fontWeight.regular,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0px",
  },
  "body-medium": {
    fontWeight: fontWeight.medium,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0px",
  },
  "body-semibold": {
    fontWeight: fontWeight.semibold,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0px",
  },
  "body-caption": {
    fontWeight: fontWeight.regular,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0px",
  },
  "body-caption-medium": {
    fontWeight: fontWeight.medium,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0px",
  },
  "body-caption-semibold": {
    fontWeight: fontWeight.semibold,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0px",
  },
  "body-tiny": {
    fontWeight: fontWeight.regular,
    fontSize: "10px",
    lineHeight: "16px",
    letterSpacing: "0px",
  },
  "body-tiny-medium": {
    fontWeight: fontWeight.medium,
    fontSize: "10px",
    lineHeight: "16px",
    letterSpacing: "0px",
  },
};

// Default font stacks for reference only, but not enforced
const fontFamilyReference = {
  heading: ["Inter", "sans-serif"],
  body: ["Inter", "sans-serif"],
};

/**
 * Tailwind typography plugin that adds typography utility classes based on our tokens
 */
const typographyPlugin = function ({ addUtilities, theme, variants, e }) {
  // Generate typography utility classes from our typography tokens
  const textUtilities = {};

  Object.entries(typography).forEach(([name, styles]) => {
    // Create a text- prefixed class that extends Tailwind's built-in text utility
    textUtilities[`.text-${name}`] = {
      fontWeight: styles.fontWeight,
      fontSize: styles.fontSize,
      lineHeight: styles.lineHeight,
      letterSpacing: styles.letterSpacing,
    };
  });

  // Add the utilities with responsive variants
  addUtilities(textUtilities, {
    variants: ["responsive"],
  });
};

module.exports = {
  fontWeight,
  fontSize,
  typography,
  fontFamilyReference,
  typographyPlugin,
};
