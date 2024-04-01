import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProps } from ".";
import { BellIcon } from "../Icons";

const openTimeArray = {
  "Three Seconds": 3000,
  "Five Seconds": 5000,
  Manual: 0,
};

const meta: Meta<typeof Toast> = {
  component: Toast,
  decorators: [],
  title: "Elements/Toast",
  tags: ["autodocs"],
  args: {
    variant: "Primary",
    width: "Wide",
    description:
      "Some issues need review, and may require choosing a different dependency.",
    action: { label: "Action", logic: () => alert("Action Clicked") },
    icon: <BellIcon />,
    // openTime: 3000,
    // toastOpen: true
    closeAction: true,
  },
  argTypes: {
    openTime: {
      options: Object.keys(openTimeArray), // An array of serializable values
      mapping: openTimeArray,
      labels: {
        // 'labels' maps option values to string labels
        "Three Seconds": 3000,
        "Five Seconds": 5000,
        Manual: 0,
      },
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ToastNotifcation: Story = {
  render: (args: ToastProps) => {
    return <Toast {...args}></Toast>;
  },
};
