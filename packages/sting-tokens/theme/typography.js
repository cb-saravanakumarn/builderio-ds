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
  "heading-2xl": ["3rem", { lineHeight: "3.5rem", letterSpacing: "-0.32px" }], // 48px
  "heading-xl": ["2rem", { lineHeight: "2.5rem", letterSpacing: "-0.24px" }], // 32px
  "heading-lg": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.16px" }], // 24px
  "heading-md": ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.08px" }], // 20px
  "heading-sm": ["1rem", { lineHeight: "1.5rem", letterSpacing: "0px" }], // 16px
  "heading-xs": ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0px" }], // 14px

  // Body
  "body-lead": ["1rem", { lineHeight: "1.5rem", letterSpacing: "0px" }], // 16px
  "body": ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0px" }], // 14px
  "body-caption": ["0.75rem", { lineHeight: "1rem", letterSpacing: "0px" }], // 12px
  "body-tiny": ["0.625rem", { lineHeight: "1rem", letterSpacing: "0px" }], // 10px
};

module.exports = {
  fontWeight,
  fontSize,
};
