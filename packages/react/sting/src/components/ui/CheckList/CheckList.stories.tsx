import type { Meta, StoryObj } from "@storybook/react";
import { CheckList } from ".";

const optionList = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
]

const meta: Meta<typeof CheckList> = {
  component: CheckList,
  decorators: [(Story: any) => <Story />],
  title: "Elements/CheckList",
  tags: ["autodocs"],
  args: {
    variant: "basic",
    align: "horizontal",
    width: "inline",
    title: "",
    onChangeLogic: (e) => console.log(e),
    listDescription: "",
    selectedValues: ["1", "2"],
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
        <CheckList {...args} >
        {optionList.map((item, index) => (
          <CheckList.Item key={index} value={item.value}>
            {item.label}
          </CheckList.Item>
        ))}
          </CheckList>
      </>
    );
  },
};
