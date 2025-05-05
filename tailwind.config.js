/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./packages/sting-react/src/components/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "s-",
  theme: {
    extend: {},
  },
  plugins: [require("./packages/stingcss/index.js")],
};
