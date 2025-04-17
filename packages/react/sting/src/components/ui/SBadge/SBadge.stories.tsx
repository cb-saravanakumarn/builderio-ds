import type { Meta, StoryObj } from "@storybook/react";
import { SBadge } from "./index";
import { CheckIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

const meta = {
  title: "Design System/Actions/SBadge",
  component: SBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "primary",
          "neutral",
          "red",
          "yellow",
          "green",
          "info",
          "brand",
        ],
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["regular", "large"],
      },
    },
    mode: {
      control: {
        type: "radio",
        options: ["light", "dark"],
      },
    },
    rounded: {
      control: {
        type: "radio",
        options: ["small", "full"],
      },
    },
    iconPosition: {
      control: {
        type: "radio",
        options: ["left", "right"],
      },
    },
  },
} satisfies Meta<typeof SBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Badge",
    variant: "primary",
    size: "regular",
    mode: "light",
    rounded: "full",
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <SBadge variant="primary">Primary</SBadge>
      <SBadge variant="neutral">Neutral</SBadge>
      <SBadge variant="red">Red</SBadge>
      <SBadge variant="yellow">Yellow</SBadge>
      <SBadge variant="green">Green</SBadge>
      <SBadge variant="info">Info</SBadge>
      <SBadge variant="brand">Brand</SBadge>
      <SBadge variant="danger">Danger</SBadge>
      <SBadge variant="warning">Warning</SBadge>
      <SBadge variant="success">Success</SBadge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <SBadge size="regular">Regular</SBadge>
      <SBadge size="large">Large</SBadge>
    </div>
  ),
};

export const Modes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <SBadge mode="light" variant="primary">
        Light
      </SBadge>
      <SBadge mode="dark" variant="primary">
        Dark
      </SBadge>
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <SBadge rounded="small">Small Radius</SBadge>
      <SBadge rounded="full">Full Radius</SBadge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <SBadge icon={<CheckIcon />} iconPosition="left">
        Left Icon
      </SBadge>
      <SBadge icon={<InformationCircleIcon />} iconPosition="right">
        Right Icon
      </SBadge>
    </div>
  ),
};

export const AsChild: Story = {
  render: () => (
    <SBadge asChild>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          alert("Badge clicked!");
        }}
      >
        Clickable Badge
      </a>
    </SBadge>
  ),
};
