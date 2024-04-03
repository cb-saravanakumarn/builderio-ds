import type { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";

const meta: Meta<typeof Card> = {
  component: Card,
  decorators: [
    (Story: any) => (
      // <Center>
      <Story />
      // </Center>
    ),
  ],
  title: "Elements/Card",
  argTypes: {
    depth: ["flat", "raised", "regular"],
    padding: ["large", "regular"],
    background: ["transparent", "white"],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Variant: Story = {
  render: (args) => {
    // let selectedName = args.variant;
    return (
      <Card {...args}>
        <p>Hello</p>
      </Card>
    );
  },
};
