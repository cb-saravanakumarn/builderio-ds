import type { Meta, StoryObj } from "@storybook/react";

import { CView } from ".";

const meta: Meta<typeof CView> = {
  component: CView,
  tags: ["autodocs"],
  args: {},
  argTypes: {
    direction: {
      options: ["default", "row", "column"],
      control: { type: "inline-radio" },
    },
    gap: {
      options: ["none", "small", "regular", "large"],
      control: { type: "inline-radio" },
    },
    wrap: {
      options: ["noWrap", "wrap", "wrapReverse"],
      control: { type: "inline-radio" },
    },
  },
  decorators: [
    (Story: any) => (
      // <Center>
      <Story />
      // </Center>
    ),
  ],
  title: "Grid/CView",
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Variant: Story = {
  render: (args) => {
    console.log(args);
    // let selectedName = args.variant;
    return (
      <CView {...args}>
        <div className="s-border">Hello</div>
        <div className="s-border ">Hellos</div>
        <div className="s-border ">Hellos</div>
        <div className="s-border ">Hellos</div>
        <div className="s-border ">Hellos</div>
        <div className="s-border ">Hellos</div>
      </CView>
    );
  },
};
