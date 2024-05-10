import { UserCircleIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";

import { SHeader } from "./index";

const meta: Meta<typeof SHeader> = {
  component: SHeader,
  decorators: [(Story: any) => <Story />],
  title: "Elements/SelectMenu",
  tags: ["autodocs"],
  parameters: {
    controls: { exclude: ["initialSelectedOption", "width"] },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;
