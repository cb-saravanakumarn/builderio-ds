import type { Meta, StoryObj } from "@storybook/react";
import { CGap } from ".";

const meta: Meta<typeof CGap> = {
  decorators: [
    (Story: any) => (
      // <Center>
      <Story />
      // </Center>
    ),
  ],
  tags: ["autodocs"],
  title: "Layout/GapWrapper",
  argTypes: {
    gap: {
      options: ["none", "small", "regular", "large", "xlarge", "xxlarge"],
      control: { type: "inline-radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const StackView: Story = {
  render: (args) => {
    console.log(args, "args");
    return (
      <div className="s-p-4">
        <CGap {...args}>
          <div className="s-bg-blue-500 s-p-4 s-border">Item 1</div>
          <div className="s-bg-green-500 s-p-4 s-border">Item 2</div>
          <div className="s-bg-red-500 s-p-4 s-border">Item 3</div>
        </CGap>
      </div>
    );
  },
};
