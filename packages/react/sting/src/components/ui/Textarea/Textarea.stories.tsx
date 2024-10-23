import type { Meta, StoryObj } from "@storybook/react";

import Textarea from ".";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: "Form/Textarea",
  tags: ["autodocs"],
  argTypes: {
    height: {
      options: ["small", "regular", "large"],
      control: { type: "inline-radio" },
    },
    width: {
      options: ["full", "inline"],
      control: { type: "inline-radio" },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    error: {
      control: {
        type: "boolean",
      },
    },
    messageText: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    label: {
      options: ["hide", "default"],
      control: { type: "inline-radio" },
    },
    labelText: {
      control: {
        type: "text",
      },
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Textarea {...args} />,
};

export default meta;
