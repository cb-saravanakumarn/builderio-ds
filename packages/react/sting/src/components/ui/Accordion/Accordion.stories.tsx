import type { Meta, StoryObj } from "@storybook/react";

import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from ".";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  decorators: [(Story: any) => <Story />],
  title: "Elements/Accordion",
  args: {
    size: "large",
    border: "border",
    // defaultValue: 'Item-1',
    disabled: false,
    type: "single",
    dir: "ltr",
    onValueChange: (e) => console.log(e, "Ad"),
  },
  argTypes: {
    size: ["small", "regular", "large"],
    border: {
      options: ["border", "no-border"],
      control: { type: "select" },
    },
    defaultValue: {
      control: { type: "text" },
    },
    type: {
      options: ["single", "multiple"],
      control: { type: "inline-radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Variant: Story = {
  render: (args) => {
    // let selectedName = args.variant;
    console.log(args.defaultValue, "value");
    return (
      <Accordion border={args.border}>
        {[1, 2, 3].map((v, index) => {
          const val = `Item-${v}`;
          console.log(val, "value inside");
          return (
            <AccordionItem key={index} value={val} size={args.size}>
              <AccordionTrigger value={val}>
                <div>Hello</div>
              </AccordionTrigger>
              <AccordionContent>Content</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    );
  },
};
