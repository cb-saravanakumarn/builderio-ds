import type { Meta, StoryObj } from "@storybook/react";
import { Loader, LoaderProps } from ".";

const meta: Meta<typeof Loader> = {
  component: Loader,
  decorators: [(Story: any) => <Story />],
  title: "Elements/Loader",
  tags: ["autodocs"],
  args: {
    size: "regular",
    text: "",
  },
  argTypes: {
    size: {
      options: ["small", "regular", "large"],
      control: { type: "inline-radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    size: "regular",
    text: "",
    children: "", // Add the children property here
  },
  render: (args: LoaderProps) => {
    return <Loader {...args} />;
  },
};
