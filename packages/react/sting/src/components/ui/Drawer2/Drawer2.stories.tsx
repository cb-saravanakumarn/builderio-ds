import type { Meta, StoryObj } from "@storybook/react";

import { Drawer, DrawerTrigger, DrawerOverlays, DrawerContent } from ".";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  decorators: [(Story: any) => <Story />],
  title: "Elements/Drawer2",
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: {
        type: "select",
      },
      options: ["top", "bottom", "right", "left"],
    },
    width: {
      control: {
        type: "select",
      },
      options: ["narrow", "regular", "wide"],
    },
    height: { control: { type: "select" }, options: ["short", "regular"] },
    show: { control: { type: "radio" }, options: ["show", "hide"] },
  },
  args: {
    placement: "right",
    height: "short",
    show: "show",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Variant: Story = {
  args: {
    placement: "right",
    height: "short",
    show: "show",
  },
  render: (args) => {
    // let selectedName = args.variant;

    return (
      <Drawer {...args}>
        <DrawerTrigger>Test</DrawerTrigger>
        <DrawerOverlays />
        <DrawerContent>Testing</DrawerContent>
      </Drawer>
    );
  },
};
