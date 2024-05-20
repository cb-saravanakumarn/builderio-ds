import type { Meta, StoryObj } from "@storybook/react";

import { CView } from ".";

const meta: Meta<typeof CView> = {
  component: CView,
  tags: ["autodocs"],
  args: {},
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
      <CView gap="none" direction="columnSmRow" wrap={"wrap"}>
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
