import { UserCircleIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";

import { SelectMenu, SelectItem, CSelect } from "./index";

const meta: Meta<typeof SelectMenu> = {
  component: SelectMenu,
  decorators: [(Story: any) => <Story />],
  title: "Elements/SelectMenu",
  tags: ["autodocs"],
  parameters: {
    controls: { exclude: ["initialSelectedOption", "width"] },
  },
  argTypes: {
    label: {
      options: ["default", "inline", "hide"],
      control: { type: "inline-radio" },
    },
    size: { options: ["regular", "large"], control: { type: "inline-radio" } },
    labelText: { control: { type: "text" } },
    multiSelect: { control: { type: "boolean" } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const testData = [
  {
    value: "Option 1",
    label: "Option 1",
    icon: <UserCircleIcon className="s-h-5 s-w-5 s-text-red-400" />,
  },
  {
    value: "Option 2",
    label: "Option 2",
    icon: <UserCircleIcon className="s-h-5 s-w-5 s-text-green-400" />,
  },
  {
    value: "Option 3",
    label: "Option 3",
    icon: <UserCircleIcon className="s-h-5 s-w-5 s-text-blue-400" />,
  },
];

export const SelectMenuBasic: Story = {
  args: {
    size: "regular",
    label: "default",
    labelText: "default",

    placeholder: "Select an option",
    onValueChange: (e: string | string[]) => console.log(e),
    showIndication: false,
  },
  render: (args: any) => {
    return (
      <CSelect {...args}>
        {testData.map((item) => (
          <CSelect.Item
            key={item.label}
            showIndication={args.showIndication}
            value={`${item.label}`}
          >
            {`${item.value}`}
          </CSelect.Item>
        ))}
      </CSelect>
    );
  },
};

export const SelectMenuWithIcon: Story = {
  args: {
    size: "regular",
    label: "default",
    labelText: "default",
    selectIcon: <UserCircleIcon className="s-h-5 s-w-5 " />,
    selectItemIcon: <UserCircleIcon className="s-h-5 s-w-5" />,
    placeholder: "Select an option",
    onValueChange: (value: string | string[]) => console.log(value),
    showIndication: false,
    disabled: true
  
  },
  render: (args: any) => {
   
    return (
      <SelectMenu {...args}>
        {testData.map((item) => (
          <SelectItem
            key={item.label}
            showIndication={args.showIndication}
            selectItemIcon={item.icon}
            value={`${item.label}`}
          >
            {`${item.value}`}
          </SelectItem>
        ))}
      </SelectMenu>
    );
  },
};