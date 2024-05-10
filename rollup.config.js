import postcss from 'rollup-plugin-postcss';

export default {
  input: './packages/stingcss/sting-css/combined.css',
  output: {
    file: '/packages/stingcss/sting-css/dist/combined.css',
    format: 'cjs' // Output format is CommonJS for CSS
  },
  plugins: [
    postcss({
      extract: true,
      minimize: true,
      plugins: [
        require('autoprefixer'),
        require('tailwindcss')
      ]
    })
  ]
};
