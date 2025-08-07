import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import React from "react";
import { Button } from "./Button";
import type { ButtonProps } from "./Button.types";

/**
 * The Button component is a versatile, accessible button with multiple variants and sizes.
 * Built with Tailwind CSS and optimized for Builder.io integration.
 *
 * ## Features
 * - 4 visual variants: Primary, Secondary, Outline, Ghost
 * - 3 sizes: Small, Medium, Large
 * - Loading and disabled states
 * - Icon support (start/end)
 * - Link functionality with href
 * - Full accessibility support
 * - Builder.io compatibility
 */
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The Button component provides a consistent, accessible way to trigger actions in your application.
Built with Tailwind CSS for consistent styling and optimized for Builder.io visual editing.

### Usage Guidelines
- Use **Primary** buttons for main actions (submit, save, etc.)
- Use **Secondary** buttons for secondary actions
- Use **Outline** buttons for alternatives to primary actions
- Use **Ghost** buttons for subtle actions or navigation

### Accessibility
- Supports keyboard navigation (Tab, Enter, Space)
- Includes proper ARIA attributes
- Screen reader friendly
- High contrast mode support
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost"],
      description: "Visual style variant of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      control: { type: "boolean" },
      description: "Whether the button shows loading state with spinner",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Whether the button takes full width of its container",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    text: {
      control: { type: "text" },
      description: "Text content (useful for Builder.io integration)",
      table: {
        type: { summary: "string" },
      },
    },
    href: {
      control: { type: "text" },
      description: "If provided, renders button as a link",
      table: {
        type: { summary: "string" },
      },
    },
    target: {
      control: { type: "select" },
      options: ["_blank", "_self", "_parent", "_top"],
      description: "Link target (when href is provided)",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "_self" },
      },
    },
    ariaLabel: {
      control: { type: "text" },
      description: "Accessibility label for screen readers",
      table: {
        type: { summary: "string" },
      },
    },
    onClick: {
      action: "clicked",
      description: "Click event handler",
      table: {
        type: { summary: "function" },
      },
    },
  },
  args: {
    onClick: action("button-click"),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: "Button",
  },
};

// Variant stories
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Primary buttons are used for main actions like submit, save, or primary navigation.",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Secondary buttons are used for secondary actions or when you need a less prominent button.",
      },
    },
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Outline buttons provide an alternative to primary buttons with less visual weight.",
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Ghost buttons are subtle and work well for navigation or tertiary actions.",
      },
    },
  },
};

// Size stories
export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Small buttons are perfect for dense layouts or when space is limited.",
      },
    },
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: "Medium Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Medium is the default size, suitable for most use cases.",
      },
    },
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Large buttons create more prominence and are good for important actions.",
      },
    },
  },
};

// State stories
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Disabled buttons prevent user interaction and are visually muted.",
      },
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Loading buttons show a spinner and prevent additional clicks during async operations.",
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button",
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Full width buttons span the entire width of their container.",
      },
    },
  },
};

// Icon stories
export const WithStartIcon: Story = {
  args: {
    startIcon: <span>📥</span>,
    children: "Download",
  },
  parameters: {
    docs: {
      description: {
        story: "Buttons can include icons before the text content.",
      },
    },
  },
};

export const WithEndIcon: Story = {
  args: {
    endIcon: <span>→</span>,
    children: "Continue",
  },
  parameters: {
    docs: {
      description: {
        story: "Buttons can include icons after the text content.",
      },
    },
  },
};

export const WithBothIcons: Story = {
  args: {
    startIcon: <span>❤️</span>,
    endIcon: <span>🎉</span>,
    children: "Like & Share",
  },
  parameters: {
    docs: {
      description: {
        story: "Buttons can include icons both before and after the text.",
      },
    },
  },
};

// Link stories
export const AsLink: Story = {
  args: {
    href: "https://builder.io",
    target: "_blank",
    children: "Visit Builder.io",
  },
  parameters: {
    docs: {
      description: {
        story:
          "When href is provided, the button renders as an accessible link.",
      },
    },
  },
};

export const InternalLink: Story = {
  args: {
    href: "#section",
    variant: "outline",
    children: "Jump to Section",
  },
  parameters: {
    docs: {
      description: {
        story:
          'Internal links don\'t need target="_blank" and work for page navigation.',
      },
    },
  },
};

// Builder.io compatibility story
export const BuilderIOCompatible: Story = {
  args: {
    text: "Builder.io Text Prop",
    variant: "secondary",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The text prop makes this component compatible with Builder.io's visual editor.",
      },
    },
  },
};

// Accessibility story
export const WithAriaLabel: Story = {
  args: {
    ariaLabel: "Save your work",
    children: "💾",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use aria-label for buttons with only icons to provide accessible labels.",
      },
    },
  },
};

// Interactive testing story
export const InteractiveTest: Story = {
  args: {
    variant: "primary",
    children: "Click Me!",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    // Test that button is present and clickable
    await expect(button).toBeInTheDocument();
    await expect(button).toBeEnabled();

    // Test click interaction
    await userEvent.click(button);
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story includes automated interaction testing to verify button behavior.",
      },
    },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="space-x-4">
        <Button variant="primary" disabled>
          Primary Disabled
        </Button>
        <Button variant="secondary" loading>
          Secondary Loading
        </Button>
        <Button variant="outline" size="small">
          Small Outline
        </Button>
        <Button variant="ghost" size="large">
          Large Ghost
        </Button>
      </div>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Overview of all button variants and states in one place.",
      },
    },
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Comparison of all available button sizes.",
      },
    },
  },
};
