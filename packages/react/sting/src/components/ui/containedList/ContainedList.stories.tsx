import { CheckCircleIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { ContainedList, ContainedListItem } from "./../";

import { action } from "@storybook/addon-actions";

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
  },
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: { type: "select" },
      options: ["basic", "menu"],
    },
    padding: {
      control: { type: "select" },
      options: ["small", "regular", "large"],
    },
    labels: {
      control: { type: "select" },
      options: ["none", "inline", "block", "rows"],
      if: { arg: "variant", neq: "menu" },
    },
    align: {
      options: ["left", "justified"],
      disabled: true,
      if: { arg: "labels", eq: "inline" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const containedList: Story = {
  args: {
    variant: "basic",
    labels: "none",
    align: "left",
    // padding: 'regular',
    header: "",
    onClick: action("itemClicked"),
    description: "",
  },
  render: (args: any) => {
    return (
      <ContainedList {...args}>
        <ContainedListItem
          label="Billing"
          value={"value"}
          indicatorIcon={
            <CheckCircleIcon className="w-5 h-5 text-green-400 " />
          }
          onClick={() => console.log("ContainedListItem clicked")}
        />
        <ContainedListItem
          label="Label"
          value="Value"
          indicatorIcon={
            <CheckCircleIcon className="w-5 h-5 text-green-400 " />
          }
          onClick={action("Clicked Billing")} // Pass the onClick prop
        />
        <ContainedListItem
          label="Label"
          value="Value"
          indicatorIcon={
            <CheckCircleIcon className="w-5 h-5 text-green-400 " />
          }
        />
      </ContainedList>
    );
  },
};
