import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";
// import { Button, ButtonVariants } from '../dist/index';

// import Center from '../../lib/center/Center';
import { BeakerIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story: any) => (
      // <Center>
      <Story />
      // </Center>
    ),
  ],
  title: "Elements/Button",
  tags: ["autodocs"],
  args: {
    variant: "primary",
    styleType: "default",
    // iconPosition: 'start',
    size: "regular",
    fullWidth: false,
    // children: {<BeakerIcon /> 'Test'},
    children: "Button",
    disabled: false,
    asChild: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "neutral", "danger"],
      control: { type: "select" },
    },
    children: {
      control: { type: "text" },

      if: { arg: "iconPosition", neq: "none" },
    },
    styleType: {
      options: [
        "default",
        "outline",
        "text",
        "regular",
        "icon",
        "icon-borderless",
      ],
      control: { type: "select" },
    },

    fullWidth: {
      control: { type: "boolean" },
    },

    size: {
      options: ["small", "regular", "large"],
      control: { type: "select" },
    },
    disabled: { control: { type: "boolean" } },
    onClick: { action: "clicked" },

    asChild: {
      control: { type: "boolean" },
    },
    href: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Variant: Story = {
  render: (args) => {
    //console.log(args.styleType);
    if (args.styleType === "icon") {
      args.children = <BeakerIcon />;
    } else if (args.styleType === "icon-borderless") {
      args.children = <BeakerIcon />;
    } else {
      args.children = "Button";
    }
    return (
      <>
        <Button {...args} />
      </>
    );
  },
};
