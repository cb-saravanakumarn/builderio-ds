import type { Meta, StoryObj } from "@storybook/react";

import { Input as InputPrimitive, InputProps } from ".";

const iconArray = ["user", "lockIcon"];

const meta: Meta<typeof InputPrimitive> = {
  component: InputPrimitive,
  decorators: [(Story: any) => <Story />],
  title: "Elements/Input",
  tags: ["autodocs"],
  parameters: {
    controls: { exclude: ["inputWidth"] },
  },
  args: {
    variant: "input",
    type: "text",
    placeholder: "Placeholder",
    messageText: "Message",
    inputSize: "regular",
    inputWidth: "inline",
    label: "default",
    labelText: "Label",
    disabled: false,
    error: false,
    withIcon: false,
    iconName: "",
    reset: false,
    readOnly: false,
    onChangeLogic: (e) => console.log(e),
  },
  argTypes: {
    variant: {
      options: ["input", "search"],
      control: { type: "inline-radio" },
    },
    value: {
      control: { type: "text" },
    },
    type: {
      options: ["text", "number", "email", "date", "password"],
      control: { type: "select" },
    },
    inputSize: {
      options: ["regular", "large"],
      control: { type: "inline-radio" },
    },
    inputWidth: {
      options: ["inline", "full"],
      control: { type: "radio" },
    },
    label: {
      options: ["hide", "inline", "default"],
      control: { type: "inline-radio" },
    },

    iconName: {
      options: iconArray,
      control: { type: "select" },
      if: { arg: "withIcon", truthy: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {
  render: (args: InputProps) => {
    return <InputPrimitive {...args} />;
  },
};
