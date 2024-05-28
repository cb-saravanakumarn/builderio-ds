import type { Meta, StoryObj } from "@storybook/react";
import { ProgressTracker, Step } from ".";

const meta: Meta<typeof ProgressTracker> = {
  component: ProgressTracker,
  decorators: [
    (Story: any) => (
      // <Center>
      <Story />
      // </Center>
    ),
  ],
  tags: ["autodocs"],
  title: "Elements/ProgressTracker",

  argTypes: {
    align: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
      description:
        'The variant of the list. "basic" for a standard list, "menu" for a menu-like list.',
    },
    active: {
      control: { type: "radio" },
      options: ["primary", "brand"],
    },
    width: {
      control: { type: "select" },
      options: ["full", "inline"],
      description:
        'The padding size of the list items. Can be "small", "regular", or "large".',
    },
    size: {
      control: { type: "select" },
      options: ["small", "regular", "large"],
      description:
        'The padding size of the list items. Can be "small", "regular", or "large".',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const steps = [
  {
    id: 1,
    label: "Step 1",
    description: "Step 1 Description",
    isActive: true,
  },
  {
    id: 2,
    label: "Step 2",
    description: "Step 2 Description",
    isActive: false,
  },
  {
    id: 3,
    label: "Step 3",
    description: "Step 3 Description",
    isActive: false,
  },
  {
    id: 4,
    label: "Step 4",
    description: "Step 4 Descriptiasn",
    isActive: false,
  },
];

export const ProgressTrackerDefault: Story = {
  render: (args) => {
    return (
      <ProgressTracker {...args}>
        {steps.map((step, index) => (
          <Step
            key={step.id}
            label={++index}
            showBar={index !== steps.length}
            isActive={step.isActive}
          >
            {step.description}
          </Step>
        ))}
      </ProgressTracker>
    );
  },
};
