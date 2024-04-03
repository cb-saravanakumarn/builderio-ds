import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from ".";
import { Button } from "../Button";

const meta: Meta<typeof Banner> = {
  component: Banner,
  decorators: [(Story: any) => <Story />],
  title: "Elements/Banner",
  tags: ["autodocs"],
  args: {
    children: (
      <div className="banner-buttons">
        <Button
          onClick={() => alert("Clicked Button 1")}
          size="regular"
          styleType="default"
          variant="primary"
        >
          Click Me
        </Button>
        <Button
          onClick={() => alert("Clicked Button 2")}
          size="regular"
          styleType="default"
          variant="neutral"
        >
          Learn More
        </Button>
      </div>
    ),
    variant: "Hero",
    size: "regular",
    theme: "Default",
  },
  argTypes: {
    variants: {
      options: ["Hero", "Communication"],
      defaultValue: "Hero",
      control: { type: "select" },
      table: {
        type: { summary: "Sting class name" },
        defaultValue: { summary: "Hero" },
      },
    },
    size: {
      options: ["small", "regular", "large"],
      control: { type: "select" },
    },
    theme: {
      options: ["Default", "Deep", "Ice and Sand"],
      control: { type: "select" },
    },
    children: {
      table: { disable: true },
    },
    title: {
      control: { type: "text" },
    },
    paragraph: {
      control: { type: "text" },
    },
    imgSrc: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Variant: Story = {
  render: (args) => {
    // let selectedName = args.variant;

    return <Banner {...args}>{args.children}</Banner>;
  },
};
