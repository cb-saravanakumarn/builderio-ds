import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from ".";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  decorators: [(Story: any) => <Story />],
  title: "Elements/Drawer",
  tags: ["autodocs"],
  argTypes: {
    placement: ["top", "bottom", "right", "left"],
    width: ["narrow", "regular", "wide"],
    height: ["short", "regular"],
    show: ["show", "hide"],
  },
  args: {
    title: "Did you you call me?",
    onClose: () => {
      console.log("clicked outiside");
    },
    placement: "right",
    height: "short",
    show: "show",
    hasCloseIcon: true,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Variant: Story = {
  args: {
    title: "Did you you call me?",
    onClose: () => {
      console.log("clicked outiside");
    },
    placement: "right",
    height: "short",
    show: "show",
    hasCloseIcon: true,
  },
  render: (args) => {
    // let selectedName = args.variant;

    return (
      <Drawer {...args}>
        <div className="s-w-full s-flex s-gap-4 s-justify-end">
          <p>Drawer content comes here</p>
        </div>
      </Drawer>
    );
  },
};
