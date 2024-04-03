import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from ".";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  decorators: [(Story: any) => <Story />],
  title: "Elements/Toggle",
  args: {
    // onChange: (e) => alert(e)
  },
  argTypes: {
    size: ["small", "regular"],
    state: ["disabled", "enabled"],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Variant: Story = {
  render: (args) => {
    // let selectedName = args.variant;
    return (
      <Toggle {...args}>
        <p>Hello</p>
      </Toggle>
    );
  },
};
