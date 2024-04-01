import type { Meta, StoryObj } from "@storybook/react";
import { OverFlowMenu, OverflowProps } from ".";
import { showcaseList01, showcaseList02 } from "./OverflowMenuData";
// import { EllipsisVerticalIcon } from './../src/components/ui/Icons';
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

// import Center from '../src/components/lib/center/Center';

const menuArray = {
  SingleSelect: [showcaseList01],
  MultiSelect: [showcaseList01, showcaseList02],
};

const meta: Meta<typeof OverFlowMenu> = {
  component: OverFlowMenu,
  decorators: [],
  title: "Elements/Over Flow Menu",
  tags: ["autodocs"],
  args: {
    // menuGroups: [showcaseList01],
    // launchIcon: <EllipsisVerticalIcon />,
    menuGroups: [showcaseList01],
    // SecondMenu: showcaseList02,
    variant: "om-basic",
    position: "left",
    launchIcon: <EllipsisVerticalIcon />,
  },
  argTypes: {
    variant: {
      options: ["om-basic", "om-multiple", "om-topNav"],
      control: { type: "select" },
    },
    position: {
      options: ["left", "right", "bottom"],
      control: { type: "select" },
    },
    menuGroups: {
      options: Object.keys(menuArray), // An array of serializable values
      mapping: menuArray,
      labels: {
        // 'labels' maps option values to string labels
        SingleSelect: [showcaseList01],
        MultiSelect: [showcaseList01, showcaseList02],
      },
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const OverFlowMenus: Story = {
  args: {
    // menuGroups: [showcaseList01],
    // launchIcon: <EllipsisVerticalIcon />,
    menuGroups: [showcaseList01],
    // SecondMenu: showcaseList02,
    variant: "om-basic",
    position: "left",
    launchIcon: <EllipsisVerticalIcon />,
  },
  render: (args: OverflowProps) => {
    return <OverFlowMenu {...args}></OverFlowMenu>;
  },
};
