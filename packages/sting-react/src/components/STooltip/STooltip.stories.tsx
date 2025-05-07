import type { Meta, StoryObj } from "@storybook/react";
import { STooltip, STooltipProps } from ".";
import { SButton as Button } from "../SButton";

const meta: Meta<typeof STooltip> = {
  component: STooltip,
  decorators: [],
  title: "Design System/Presentation/STooltip",
  tags: ["autodocs"],
  args: {
    placement: "top",
    color: "dark",
    width: "Regular",
    label: "Tooltip Content",
    link: {
      label: "Learn More",
      href: "#",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InfoTooltip: Story = {
  render: (args: STooltipProps) => {
    return (
      <STooltip {...args}>
        <Button
          onClick={() => {}}
          size="regular"
          styleType="default"
          variant="primary"
        >
          Button
        </Button>
      </STooltip>
    );
  },
};
