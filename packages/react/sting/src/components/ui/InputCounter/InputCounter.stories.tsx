import type { Meta, StoryObj } from "@storybook/react";
import { InputCounter } from ".";

const meta: Meta<typeof InputCounter> = {
  component: InputCounter,
  decorators: [],
  title: "Elements/InputCounter",
  tags: ["autodocs"],
  args: {
    Placement: "top",
    width: "Regular",
    // label: "Tooltip Content",
    // link: {
    //   label: "Learn More",
    //   href: "#"
    // },
  },
  argTypes: {
    // variant: {
    //   options: ['om-basic', 'om-multiple', 'om-topNav'],
    //   control: { type: 'select' },
    // },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InputCounterField: Story = {
  render: () => {
    return <InputCounter />;
  },
};
