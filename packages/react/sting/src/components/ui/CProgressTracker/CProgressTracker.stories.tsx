import type { Meta, StoryObj } from "@storybook/react";
import { CProgressTracker } from ".";
import { Badge } from "../Badge";

const meta: Meta<typeof CProgressTracker> = {
  component: CProgressTracker,
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
        'The alignment of the progress tracker. Can be "vertical" or "horizontal".',
    },
    themes: {
      control: { type: "radio" },
      options: ["neutral", "primary", "brand"],
      description: 'The theme of the progress tracker. Can be "neutral", "primary", or "brand".',
    },
    width: {
      control: { type: "select" },
      options: ["full", "inline"],
      description:
        'The width of the progress tracker. Can be "full" or "inline".',
    },
    size: {
      control: { type: "select" },
      options: ["small", "regular", "large"],
      description:
        'The size of the progress tracker. Can be "small", "regular", or "large".',
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
    name: ["Jones", "Andrway"],
    isDone: true,
  },
  {
    id: 2,
    label: "Step 2",
    description: "Step 2 Description",
    isActive: true,
    name: ["Andrway"],
    isDone: false,
  },
  {
    id: 3,
    label: "Step 3",
    description: (
      <>
        <div>Test</div>
        <div>Test</div>
      </>
    ),
    isActive: false,
    isDone: false,
  },
  {
    id: 4,
    label: "Step 4",
    description: "Step 4 Description",
    isActive: false,
    isDone: false,
  },
];

export const ProgressTrackerDefault: Story = {
  render: (args) => {
    return (
      <CProgressTracker {...args}>
        {steps.map((step, index) => (
          <CProgressTracker.Step
            key={step.id}
            label={index + 1}
            showBar={index !== steps.length - 1}
            isActive={step.isActive}
            isDone={step.isDone}
          >
            <CProgressTracker.Title>{step.description}</CProgressTracker.Title>
            {step.name &&
              step.name.map((name) => (
                <span key={name}>
                  <Badge key={name} color="primary" className="me-1">
                    {name}
                  </Badge>
                </span>
              ))}
          </CProgressTracker.Step>
        ))}
      </CProgressTracker>
    );
  },
  args: {
    align: "horizontal",
    size: "small",
    width: "full",
    themes: "neutral",
  }
};
