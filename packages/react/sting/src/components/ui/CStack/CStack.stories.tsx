import type { Meta, StoryObj } from "@storybook/react";
import { CStack } from ".";

const meta: Meta<any> = {
  decorators: [
    (Story: any) => (
      // <Center>
      <Story />
      // </Center>
    ),
  ],
  tags: ["autodocs"],
  title: "Layout/CStack",
  argTypes: {
    seperator: {
      control: { type: "boolean" },
      defaultValue: true,
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
        <CStack
          breakpoints={{
            lg: { direction: "row", gap: "regular" },
            md: { direction: "col", gap: "large" },
            sm: { direction: "col", gap: "regular" },
          }}
        >
          <div className="s-bg-blue-500 s-p-4 s-border">Item 1</div>
          <div className="s-bg-green-500 s-p-4 s-border">Item 2</div>
          <div className="s-bg-red-500 s-p-4 s-border">Item 3</div>
        </CStack>
        <div className="s-p-4 s-flex md:s-gap-small">
          <div className="s-bg-blue-500 s-p-4 s-border">Item 1</div>
          <div className="s-bg-green-500 s-p-4 s-border">Item 2</div>
          <div className="s-bg-red-500 s-p-4 s-border">Item 3</div>
        </div>
      </div>
    );
  },
};
