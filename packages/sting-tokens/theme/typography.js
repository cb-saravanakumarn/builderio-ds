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
    "3rem", // 48px
    { lineHeight: "3.5rem", letterSpacing: "-0.32px", fontWeight: "600" },
  ], // Use case: Hero sections, key feature highlights, landing page titles
  "heading-2xl": [
    "2rem", // 32px
    { lineHeight: "2.5rem", letterSpacing: "-0.24px", fontWeight: "600" },
  ], // Use case: Page headers, main section titles, dashboard headers
  "heading-xl": [
    "1.5rem", // 24px
    { lineHeight: "2rem", letterSpacing: "-0.16px", fontWeight: "600" },
  ], // Use case: Section headers, modal titles, form section headers
  "heading-lg": [
    "1.25rem", // 20px
    { lineHeight: "1.75rem", letterSpacing: "-0.08px", fontWeight: "600" },
  ], // Use case: Card headers, subsections, sidebar navigation headers
  "heading-md": [
    "1rem", // 16px
    { lineHeight: "1.5rem", fontWeight: "600" },
  ], // Use case: Component headers, table headers, list item titles
  "heading-sm": [
    "0.875rem", // 14px
    { lineHeight: "1.25rem", fontWeight: "600" },
  ], // Use case: Minor section headers, accordion headers, tab labels

  // Lead text variations
  "lead-regular": [
    "1rem", // 16px
    { lineHeight: "1.5rem" },
  ], // Use case: Introductory paragraphs, descriptions under headers
  "lead-medium": [
    "1rem", // 16px
    { lineHeight: "1.5rem", fontWeight: "500" },
  ], // Use case: Emphasized introductory text, important descriptions
  "lead-semibold": [
    "1rem", // 16px
    { lineHeight: "1.5rem", fontWeight: "600" },
  ], // Use case: Key messages, highlighted descriptions, call-to-action text

  // Paragraph text variations
  "para-regular": [
    "0.875rem", // 14px
    { lineHeight: "1.25rem" },
  ], // Use case: Body text, form labels, general content
  "para-medium": [
    "0.875rem", // 14px
    { lineHeight: "1.25rem", fontWeight: "500" },
  ], // Use case: Important body text, emphasized content, status messages
  "para-semibold": [
    "0.875rem", // 14px
    { lineHeight: "1.25rem", fontWeight: "600" },
  ], // Use case: Strong emphasis, warnings, key information

  // Caption text variations
  "caption-regular": [
    "0.75rem", // 12px
    { lineHeight: "1rem" },
  ], // Use case: Image captions, helper text, metadata
  "caption-medium": [
    "0.75rem", // 12px
    { lineHeight: "1rem", fontWeight: "500" },
  ], // Use case: Form field descriptions, tooltips, secondary information
  "caption-semibold": [
    "0.75rem", // 12px
    { lineHeight: "1rem", fontWeight: "600" },
  ], // Use case: Labels, badges, tags, important captions

  // Tiny text variations
  "tiny-regular": [
    "0.625rem", // 10px
    { lineHeight: "0.875rem" },
  ], // Use case: Legal text, footnotes, copyright notices
  "tiny-medium": [
    "0.625rem", // 10px
    { lineHeight: "0.875rem", fontWeight: "500" },
  ], // Use case: Small labels, micro-interactions text, timestamps
  "tiny-semibold": [
    "0.625rem", // 10px
    { lineHeight: "0.875rem", fontWeight: "600" },
  ], // Use case: Small badges, micro-labels, notification dots text
};

module.exports = {
  fontWeight,
  fontSize,
};
