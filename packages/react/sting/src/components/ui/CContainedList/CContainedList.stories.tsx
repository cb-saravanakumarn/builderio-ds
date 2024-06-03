import { CheckCircleIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ContainedList,
  ContainedTitle,
  ContainedDescription,
  ContainedListProps,
  CContainedList,
} from ".";

import { action } from "@storybook/addon-actions";

const items = [
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
];

const meta: Meta<typeof ContainedList> = {
  component: ContainedList,
  decorators: [(Story: any) => <Story />],
  title: "Elements/ContainedList",
  tags: ["autodocs"],
  args: {
    variant: "basic",
    labels: "none",
    align: "left",
    padding: "regular",
    header: "",
    description: "",
    boldLabel: false,
    // showHeader: true,
  },
  argTypes: {
    onClick: {
      action: "clicked",
      description: "Function to be called when the list item is clicked.",
    },
    variant: {
      control: { type: "select" },
      options: ["basic", "menu"],
      description:
        'The variant of the list. "basic" for a standard list, "menu" for a menu-like list.',
    },
    padding: {
      control: { type: "select" },
      options: ["small", "regular", "large"],
      description:
        'The padding size of the list items. Can be "small", "regular", or "large".',
    },
    labels: {
      control: { type: "select" },
      options: ["none", "inline", "block", "rows"],
      if: { arg: "variant", neq: "menu" },
      description:
        'The layout of the labels in the list items. Can be "none", "inline", "block", or "rows". Not applicable if variant is "menu".',
    },
    align: {
      options: ["left", "justified"],
      disabled: true,
      if: { arg: "labels", eq: "inline" },
      description:
        'The alignment of the list items. Can be "left" or "justified". Disabled if labels are "inline".',
    },
    // showHeader: {
    //   control: { type: 'boolean' },
    //   description: 'Controls the visibility of the header.',
    // },
  },
};

export default meta;

interface ContainedListStoryArgs extends ContainedListProps {
  showHeader: boolean;
  showTitle: boolean;
  showDescription: boolean;
}

// type Story = StoryObj<typeof meta>;

type Story = StoryObj<ContainedListStoryArgs>;

export const containedList: Story = {
  args: {
    variant: "basic",
    labels: "none",
    align: "left",
    showHeader: true,
    showTitle: true,
    showDescription: true,
    // padding: 'regular',

    onClick: action("itemClicked"),
  },

  argTypes: {
    showHeader: {
      control: { type: "boolean" },
    },
    showTitle: {
      defaultValue: true,
    },
    showDescription: {
      defaultValue: true,
    },
  },
  render: (args: any) => {
    return (
      <CContainedList {...args}>
        {args.showHeader && (
          <CContainedList.Header>
            {args.showTitle && <ContainedTitle>Test Titledads</ContainedTitle>}
            {args.showDescription && (
              <ContainedDescription>Test Description</ContainedDescription>
            )}
          </CContainedList.Header>
        )}

        <CContainedList.Items>
          {items.map((item) => {
            return (
              <CContainedList.Item
                key={item.value}
                indicatorIcon={
                  <CheckCircleIcon className="s-w-5 s-h-5 s-text-green-400 " />
                }
                onClick={() => console.log("ContainedListItem clicked")}
              >
                <CContainedList.Label boldLabel={args.boldLabel}>
                  {item.label}
                </CContainedList.Label>
                <CContainedList.Value>{item.value}</CContainedList.Value>
              </CContainedList.Item>
            );
          })}
        </CContainedList.Items>
      </CContainedList>
    );
  },
};
