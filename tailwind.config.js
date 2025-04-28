/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./packages/react/sting/src/components/ui/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "s-",
  theme: {
    extend: {},
  },
  plugins: [require("./packages/stingcss/index.js")],
};
