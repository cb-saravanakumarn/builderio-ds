import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger, Button } from "./../";

import { action } from "@storybook/addon-actions";

const meta: Meta<typeof PopoverContent> = {
  component: PopoverContent,

  decorators: [(Story: any) => <Story />],
  title: "Elements/Popover",
  tags: ["autodocs"],

  args: {
    sideOffset: 5,
    side: "bottom",
    align: "start",
    modal: false,
    asChild: false,
    arrow: true,
    alignOffset: 5,
    arrowColour: "fill-primary-50",

    onOpenChange: action("onOpenChange"),
  },

  argTypes: {
    side: {
      control: "select",
      description: "Preferred side of the content relative to the trigger",
      options: ["top", "right", "bottom", "left"],
    },

    align: {
      control: "select",
      description: "Alignments of the content relative to the trigger",
      options: ["start", "center", "end"],
      defaultValue: "start",
    },
    sideOffset: {
      control: "number",
      description: "Offset from the trigger on the main axis",
    },

    onOpenChange: {
      description: "Callback when the open state changes",
    },
    arrow: {
      control: "boolean",
      description: "Whether to show arrow on popover",
      default: true,
    },
    alignOffset: {
      control: "number",
      description: "Offset from the trigger alignment on the main axis",
    },
    modal: {
      control: "boolean",
      description: "Whether clicking outside the popover closes it",
      default: false,
    },
    asChild: {
      control: "boolean",
      description: "Whether trigger is child of content",
      default: false,
    },
    sticky: {
      control: "select",
      options: ["full", "partial", "always"],
      defaultValue: "",
    },
    arrowColour: {
      control: "text",
      description: "Colour of the arrow",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PopoverComponent: Story = {
  render: (args: any) => {
    console.log(args);
    return (
      <Popover
        modal={args.modal}
        onOpenChange={args.onOpenChange}
        defaultOpen={args.defaultOpen}
      >
        <PopoverTrigger asChild={args.asChild}>
          <Button>Popover</Button>
        </PopoverTrigger>
        <PopoverContent
          sideOffset={args.sideOffset}
          side={args.side}
          arrow={args.arrow}
          alignOffset={args.alignOffset}
          align={args.align}
          sticky={args.sticky}
          arrowColour={args.arrowColour}
          className=" bg-primary-50  w-44 h-44 p-4 text-center rounded-lg"
        >
          Popover
        </PopoverContent>
      </Popover>
    );
  },
};
