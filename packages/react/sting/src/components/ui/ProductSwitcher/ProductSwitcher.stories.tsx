import type { Meta, StoryObj } from "@storybook/react";

import {
  ProductSwitcher,
  ProductSwitcherTrigger,
  ProductSwitcherContent,
} from ".";

import { action } from "@storybook/addon-actions";
import { Button } from "./../";

const meta: Meta<typeof ProductSwitcher> = {
  component: ProductSwitcher,
  decorators: [(Story: any) => <Story />],
  title: "Template/Product Switcher",
  tags: ["autodocs"],
  args: {
    items: [
      {
        label: "Billing",
        value:
          "Manage subscription billing, invoicing, and payment processing at scale.",
        accessible: true,
      },
      {
        label: "RevRec",
        value:
          "Auto-calculate revenue and achieve GAAP-compliant revenue recognition.",
        accessible: true,
      },
      {
        label: "Receivables",
        value:
          "Recover failed payments. Identify and take action on potential future defaulters.",
        accessible: false,
      },
      {
        label: "Retention",
        value:
          "Gain insights on cancellations and retain more customers with personalized offers.",
        accessible: false,
      },
    ],
    // triggerComponent: <button className="trigger-button">Open Switcher</button>,
    align: "start",
    side: "bottom",
    sideOffset: 0,
    onOpenChange: action("onOpenChange"),
    onListItemClick: action("onListItemClick"),
    forceMount: undefined,
    modal: false,
    asChild: false,
  },
  argTypes: {
    // Add Popover.Content props
    side: {
      control: "select",
      description: "Preferred side of the content relative to the trigger",
      options: ["top", "right", "bottom", "left"],
    },
    align: {
      control: "select",
      description: "Alignment of the content relative to the trigger",
      options: ["start", "center", "end"],
    },
    sideOffset: {
      control: "number",
      description: "Offset from the trigger on the main axis",
    },
    modal: {
      control: "boolean",
      description: "Whether clicking outside the popover closes it",
      default: false,
    },
    onOpenChange: {
      description: "Callback when the open state changes",
    },
    onListItemClick: {
      description: "Callback when a list item is clicked",
    },
    forceMount: {
      description: "Whether to mount the popover on initial render",
      control: "select",
      options: [undefined, true],
      table: {
        disable: true, // Hide this arg from the controls panel
      },
    },
    arrow: {
      table: {
        disable: true, // Hide this arg from the controls panel
      },
    },
    triggerComponent: {
      table: {
        disable: true, // Hide this arg from the controls panel
      },
    },
    arrowColour: {
      table: {
        disable: true, // Hide this arg from the controls panel
      },
    },
    contentClassName: {
      table: {
        disable: true, // Hide this arg from the controls panel
      },
    },
    // Add other Popover.Content props as needed
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Switcher: Story = {
  render: (args: any) => {
    return (
      <ProductSwitcher onOpenChange={args.onOpenChange} modal={args.modal}>
        <ProductSwitcherTrigger>
          <div className="flex gap-1">
            <Button styleType={"icon-borderless"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </Button>
          </div>
        </ProductSwitcherTrigger>
        <ProductSwitcherContent
          className="w-96"
          items={args.items}
          onListItemClick={args.onListItemClick}
          side={args.side}
          align={args.align}
          sideOffset={args.sideOffset}
          forceMount={args.forceMount}
        />
      </ProductSwitcher>
    );
  },
};
