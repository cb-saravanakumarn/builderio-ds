const { colors } = require("./theme/colors");
const { spacing, borderRadius } = require("./theme/spacing");
const { fontSize, fontWeight } = require("./theme/typography");

/**
 * Sting Design System Tailwind configuration
 * @returns {Object} Tailwind configuration object that can be spread into any tailwind.config.js
 */
module.exports = {
  tokens: {
    colors,
    spacing,
    borderRadius,
    fontSize,
    fontWeight,
  },
};
