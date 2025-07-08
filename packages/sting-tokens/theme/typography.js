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
  "heading-3xl": [
    "3rem",
    { lineHeight: "3.5rem", letterSpacing: "-0.32px", fontWeight: "600" },
  ], // 48px - Hero sections, key feature highlights
  "heading-2xl": [
    "2rem",
    { lineHeight: "2.5rem", letterSpacing: "-0.24px", fontWeight: "600" },
  ], // 32px - Page headers
  "heading-xl": [
    "1.5rem",
    { lineHeight: "2rem", letterSpacing: "-0.16px", fontWeight: "600" },
  ], // 24px - Section headers
  "heading-lg": [
    "1.25rem",
    { lineHeight: "1.75rem", letterSpacing: "-0.08px", fontWeight: "600" },
  ], // 20px - Card headers, subsections
  "heading-md": ["1rem", { lineHeight: "1.5rem", fontWeight: "600" }], // 16px - Component headers
  "heading-sm": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "600" }], // 14px - Minor section headers

  // Lead text variations
  "lead-regular": ["1rem", { lineHeight: "1.5rem" }],
  "lead-medium": ["1rem", { lineHeight: "1.5rem", fontWeight: "500" }],
  "lead-semibold": ["1rem", { lineHeight: "1.5rem", fontWeight: "600" }],

  // Paragraph text variations
  "para-regular": ["0.875rem", { lineHeight: "1.25rem" }],
  "para-medium": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "500" }],
  "para-semibold": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "600" }],

  // Caption text variations
  "caption-regular": ["0.75rem", { lineHeight: "1rem" }],
  "caption-medium": ["0.75rem", { lineHeight: "1rem", fontWeight: "500" }],
  "caption-semibold": ["0.75rem", { lineHeight: "1rem", fontWeight: "600" }],

  // Tiny text variations
  "tiny-regular": ["0.625rem", { lineHeight: "0.875rem" }],
  "tiny-medium": ["0.625rem", { lineHeight: "0.875rem", fontWeight: "500" }],
  "tiny-semibold": ["0.625rem", { lineHeight: "0.875rem", fontWeight: "600" }],
};

module.exports = {
  fontWeight,
  fontSize,
};
