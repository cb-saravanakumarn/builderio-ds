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
  "heading-1": ["3rem", { lineHeight: "3.5rem", letterSpacing: "-0.32px" }], // 48px - Hero sections, key feature highlights
  "heading-2": ["2rem", { lineHeight: "2.5rem", letterSpacing: "-0.24px" }], // 32px - Page headers
  "heading-3": ["1.5rem", { lineHeight: "2.5rem", letterSpacing: "-0.16px" }], // 24px - Section headers
  "heading-4": ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.08px" }], // 20px - Card headers, subsections
  "heading-5": ["1rem", { lineHeight: "1.5rem" }], // 16px - Component headers
  "heading-6": ["0.875rem", { lineHeight: "1.25rem" }], // 14px - Minor section headers

  // Body text variations
  "lead-regular": ["1rem", { lineHeight: "1.5rem" }],
  "lead-medium": ["1rem", { lineHeight: "1.5rem", fontWeight: "500" }],
  "lead-semibold": ["1rem", { lineHeight: "1.5rem", fontWeight: "600" }],
  "body-regular": ["0.875rem", { lineHeight: "1.25rem" }],
  "body-medium": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "500" }],
  "body-semibold": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "600" }],
  "caption-regular": ["0.75rem", { lineHeight: "1rem" }],
  "caption-medium": ["0.75rem", { lineHeight: "1rem", fontWeight: "500" }],
  "caption-semibold": ["0.75rem", { lineHeight: "1rem", fontWeight: "600" }],
  "tiny-regular": ["0.625rem", { lineHeight: "1rem" }],
  "tiny-medium": ["0.625rem", { lineHeight: "1rem", fontWeight: "500" }],
  "tiny-semibold": ["0.625rem", { lineHeight: "1rem", fontWeight: "600" }],
};

module.exports = {
  fontWeight,
  fontSize,
};
