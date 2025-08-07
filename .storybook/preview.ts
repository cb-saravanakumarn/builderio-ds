import type { Preview } from "@storybook/react";
import React from "react";
import "../dist/styles.css"; // Import our generated Tailwind CSS

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
      source: {
        state: "open",
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#1f2937",
        },
        {
          name: "gray",
          value: "#f3f4f6",
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "667px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1024px",
            height: "768px",
          },
        },
        large: {
          name: "Large Desktop",
          styles: {
            width: "1440px",
            height: "900px",
          },
        },
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";

      return React.createElement(
        "div",
        {
          className: `p-4 min-h-screen ${
            theme === "dark"
              ? "bg-secondary-900 text-white"
              : "bg-white text-secondary-900"
          }`,
          style: {
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            transition: "background-color 0.3s ease",
          },
        },
        React.createElement(Story)
      );
    },
  ],
};

export default preview;
