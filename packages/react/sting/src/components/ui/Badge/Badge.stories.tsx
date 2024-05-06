import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  component: Badge,
  decorators: [
    (Story: any) => (
      // <Center>
      <Story />
      // </Center>
    ),
  ],
  title: "Elements/Badge",
  tags: ["autodocs"],
  args: {
    //   action: 'clear',
    children: "Badge",
    //   startIcon: 'clear',
    //   trend: 'clear',
    //   data: 'clear'
  },
  argTypes: {
    variant: {
      options: ["primary", "neutral", "red", "yellow", "green", "info", "brand"],
      control: { type: "select" },
    },
    size: {
      options: ["regular", "large"],
      control: { type: "select" },
    },
    mode: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Variant: Story = {
  render: (args) => {
    // let selectedName = args.variant;

    return <Badge {...args}>{args.children}</Badge>;
  },
};
