module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss")("./sting-css/themes/tailwind.config.js"),
  ],
}
