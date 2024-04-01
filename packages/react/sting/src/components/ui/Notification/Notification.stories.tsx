import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from ".";

const meta: Meta = {
  component: Notification,
  decorators: [(Story: any) => <Story />],
  title: "Elements/Notification",
  tags: ["autodocs"],
  args: {
    variant: "primary",
    size: "regular",
    icon: false,
    children: "Notification content",
    action: false,
    close: false,
  },
  argTypes: {
    variant: {
      options: [
        "primary",
        "neutral",
        "red",
        "yellow",
        "green",
        "info",
        "brand",
      ],
      control: { type: "select" },
    },
    // icon: {
    //   options: ['close', 'bell'],
    //   control: { type: 'select' },
    // },
    size: {
      options: ["small", "regular", "large"],
      control: { type: "select" },
    },
    width: {
      options: ["inline", "full"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Notifications: Story = {
  render: (args: any) => {
    return (
      <Notification {...args}>
        <span className="notification-copy">{args.children}</span>
        {/*  <span className="notification-actions"></span> */}
      </Notification>
    );
  },
};
