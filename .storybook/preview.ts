import type { Preview } from "@storybook/react";
// import './../packages/react/base-styles/dist/tailwind.css';
// import './../packages/stingcss/dist/styled.css';
import './../src/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
