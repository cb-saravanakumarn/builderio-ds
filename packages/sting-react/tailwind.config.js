module.exports = {
  darkMode: "selector",
  content: [
    // Paths to all of your components' files
    "../sting/src/components/**/*.{js,jsx,ts,tsx}",
    "../sting/src/components/ui/**/*.{js,jsx,ts,tsx}",
    "../input/src/**/*.{js,jsx,ts,tsx}",
    // Any other packages you have
  ],
  prefix: "s-",
  theme: {},
  plugins: [
    // require('@chargebee/cb-sting')
    // require('./../stingcss')
    require("./../stingcss/index"),
  ],
  safelist: [
    {
      pattern: /s-grid-cols-(\d+)/, // Safelist for grid column classes
      variants: ["sm", "md", "lg", "xl"], // Include responsive variants
    },
    {
      pattern: /s-gap-\d+/, // Safelist for gap classes
      variants: ["sm", "md", "lg", "xl"], // Include responsive variants
    },
  ],
};
