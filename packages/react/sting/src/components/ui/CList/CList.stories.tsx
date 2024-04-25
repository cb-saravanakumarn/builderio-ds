import type { Meta, StoryObj } from "@storybook/react";
import { CList } from ".";

const meta: Meta<typeof CList> = {
  component: CList,
  decorators: [(Story: any) => <Story />],
  title: "Elements/CList",
  tags: ["autodocs"],
  args: {},
  argTypes: {
    link: {
      control: { type: "boolean" },
    },
    // size: {
    //   options: ["small", "regular", "large"],
    //   contro: ["radio"],
    //   if: { arg: "variant", neq: "basic" },
    // },
    // align: {
    //   options: ["horizontal", "vertical"],
    //   control: { type: "select" },
    // },
    // width: {
    //   if: { arg: "variant", neq: "basic" },
    // },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const clist: Story = {
  render: (args) => {
    return (
      <>
        <CList {...args} />
      </>
    );
  },
};
