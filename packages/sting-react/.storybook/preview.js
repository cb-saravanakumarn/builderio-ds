import '../src/components/tailwind.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    // Configuration to keep sidebar folders always expanded
    sidebar: {
      showRoots: true,
      collapsedRoots: [],
      expandedRoots: ['design-system', ]
    },
  },
};

export default preview;