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
      // <CView {...args}>
      //   <CView>
      //     <p className="s-border">Hello</p>
      //   </CView>
      //   <p className="s-border s-p-reular">Hellos</p>
      // </CView>
      <></>
    );
  },
};
