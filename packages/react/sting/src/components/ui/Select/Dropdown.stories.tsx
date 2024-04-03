import { UserCircleIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";

import { SelectMenu, SelectItem } from "./index";

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
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SelectMenuBasic: Story = {
  args: {
    size: "regular",
    label: "default",
    labelText: "default",
    withIcon: false,
    placeholder: "Select an option",
    onValueChange: (e: string) => console.log(e),
    showIndication: false,
  },
  render: (args: any) => {
    return (
      <SelectMenu {...args}>
        <SelectItem showIndication={args.showIndication} value="Option1">
          1
        </SelectItem>
        <SelectItem showIndication={args.showIndication} value="Option2">
          Option 2
        </SelectItem>
        <SelectItem showIndication={args.showIndication} value="Option3">
          Option 3
        </SelectItem>
        <SelectItem showIndication={args.showIndication} value="Option4">
          Option 4
        </SelectItem>
      </SelectMenu>
    );
  },
};

export const SelectMenuWithIcon: Story = {
  args: {
    size: "regular",
    label: "default",
    labelText: "default",
    withIcon: false,
    placeholder: "Select an option",
    onValueChange: (e: string) => console.log(e),
    showIndication: true,
    SelectIcon: <UserCircleIcon className="w-4 h-4 text-neutral-500 " />,
  },
  render: (args: any) => {
    return (
      <div className="flex flex-col gap-8">
        <SelectMenu options={args.options} {...args}>
          <SelectItem showIndication={args.showIndication} value="Option1">
            Option 1
          </SelectItem>
          <SelectItem showIndication={args.showIndication} value="Option2">
            Option 2
          </SelectItem>
          <SelectItem showIndication={args.showIndication} value="Option3">
            Option 3
          </SelectItem>
          <SelectItem showIndication={args.showIndication} value="Option4">
            Option 4
          </SelectItem>
        </SelectMenu>
      </div>
    );
  },
};
