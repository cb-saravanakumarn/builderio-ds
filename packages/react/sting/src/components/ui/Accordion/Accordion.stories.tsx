import type { Meta, StoryObj } from "@storybook/react";

import { Accordion, AccordionItem } from ".";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  decorators: [(Story: any) => <Story />],
  title: "Elements/Accordion",
  argTypes: {
    size: ["small", "regular", "large"],
    border: {
      options: ["border", "no-border"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Variant: Story = {
  render: (args) => {
    // let selectedName = args.variant;

    return (
      <Accordion {...args}>
        <AccordionItem {...args} title="Item 1">
          <div>Hello</div>
        </AccordionItem>
        <AccordionItem {...args} title="Item 2">
          <div>Hello</div>
        </AccordionItem>
      </Accordion>
    );
  },
};
