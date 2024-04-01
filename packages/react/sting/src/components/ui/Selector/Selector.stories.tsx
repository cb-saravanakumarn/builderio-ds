import type { Meta, StoryObj } from "@storybook/react";
// import { Button, ButtonVariants } from '../src/components/ui/Button';
import { Selector } from ".";

const meta: Meta<typeof Selector> = {
  component: Selector,
  decorators: [(Story: any) => <Story />],
  title: "Elements/Selector",
  tags: ["autodocs"],
  args: {
    variant: "default",
    children: "Selector",
    action: false,
    quantity: false,
    quantityWithAction: false,
    quantityValue: 0,
    selected: false,
    disabled: false,
    onActionClick: (e) => console.log(e),
    onActionIconClick: () => alert("Action Clicked"),
  },
  argTypes: {
    variant: {
      options: [
        "default",

        // 'danger-borderless',
      ],
      control: { type: "select" },
    },

    size: {
      options: ["small", "regular", "large"],
      control: { type: "radio" },
    },

    action: { control: { type: "boolean" } },
    quantity: { control: { type: "boolean" } },
    quantityWithAction: { control: { type: "boolean" } },
    selected: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const variant: Story = {
  args: {
    variant: "default",
    children: "Selector",
    action: false,
    quantity: false,
    quantityWithAction: false,
    quantityValue: 0,
    selected: false,
    disabled: false,
    onActionClick: (e: any) => console.log(e),
    onActionIconClick: () => alert("Action Clicked"),
  },
  render: (args) => {
    return (
      <>
        <Selector {...args}>{args.children}</Selector>
      </>
    );
  },
};
