const colors = require("./theme/colors");
const spacing = require("./theme/spacing");
const typography = require("./theme/typography");

/**
 * Sting Design System Tailwind configuration
 * @returns {Object} Tailwind configuration object that can be spread into any tailwind.config.js
 */
module.exports = {
  theme: {
    extend: {
      colors: colors.colors || {},
      spacing: spacing.spacing || {},
      borderRadius: spacing.borderRadius || {},
      fontWeight: typography.fontWeight,
      fontSize: typography.fontSize,
    },
  },
};
