import type { Meta, StoryObj } from "@storybook/react";
import { CheckList } from ".";

const options = [
  {
    label: "Option 1",
    value: "option1",
    name: "name1",
  },
  {
    label: "Option 2",
    value: "option2",
    name: "name2",
  },
  {
    label: "Option 3",
    value: "option3",
    name: "name3",
  },
];

const meta: Meta<typeof CheckList> = {
  component: CheckList,
  decorators: [(Story: any) => <Story />],
  title: "Elements/CheckList",
  tags: ["autodocs"],
  args: {
    variant: "basic",
    align: "horizontal",
    options: options,
    width: "inline",
    title: "",
    onChangeLogic: (e) => console.log(e),
    listDescription: "",
  },
  argTypes: {
    size: {
      options: ["small", "regular", "large"],
      contro: ["radio"],
      if: { arg: "variant", neq: "basic" },
    },

    align: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
    },
    width: {
      if: { arg: "variant", neq: "basic" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const checkBox: Story = {
  args: {
    variant: "basic",
    align: "horizontal",
    options: options,
    width: "inline",
    title: "",
    onChangeLogic: (e: any) => console.log(e),
    listDescription: "",
  },
  render: (args) => {
    return (
      <>
        <CheckList {...args} />
      </>
    );
  },
};
