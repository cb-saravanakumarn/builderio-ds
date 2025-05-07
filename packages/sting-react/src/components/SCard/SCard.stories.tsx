import type { Meta, StoryObj } from "@storybook/react";

import { SCard as Card } from ".";
import { SButton as Button } from "../SButton";
import { SBadge as Badge } from "../SBadge";

const dummyContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

const meta: Meta<typeof Card> = {
  component: Card,
  decorators: [(Story: any) => <Story />],
  tags: ["autodocs"],
  title: "Design System/Presentation/Card",

  argTypes: {
    depth: ["flat", "raised", "regular"],
    padding: ["large", "regular", "small", "null"],
    background: ["transparent", "white"],
    spacey: ["none", "small", "regular", "large", "xlarge", "xxlarge"],
    border: ["none", "dotted"],
    rounded: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const BaseCard: Story = {
  render: (args) => {
    return <Card {...args}>Card Component</Card>;
  },
};

export const CardWithHeader: Story = {
  render: (args) => {
    return (
      <Card {...args}>
        <Card.Header
          title="Card Title"
          alignItems={"start"}
          actionElement={<Button size={"small"}>Action</Button>}
          description="This space is to add description or subtitle"
        />
        <Card.Content>
          <div>Content</div>
        </Card.Content>
      </Card>
    );
  },
};

export const HeroCardWithHeader: Story = {
  render: (args) => {
    // let selectedName = args.variant;
    return (
      <Card {...args}>
        <Card.Header
          title="Card Title"
          variant={"hero"}
          alignItems={"start"}
          description="This space is to add description or subtitle"
          actionElement={
            <Button variant={"neutral"} size={"small"}>
              Action
            </Button>
          }
        />

        <Card.Content>{dummyContent} </Card.Content>
      </Card>
    );
  },
};

export const HeroCardWithHeaderAndAction: Story = {
  render: (args) => {
    // let selectedName = args.variant;
    return (
      <Card {...args}>
        <Card.Header
          title="Card Title"
          variant={"hero"}
          alignItems={"start"}
          description="This space is to add description or subtitle"
          actionElement={
            <div className="s-gap-regular s-flex s-items-center">
              <Badge variant={"info"}>New</Badge> <Badge>Primary</Badge>
              <Button variant={"neutral"}>Tertiary</Button>
              <Button variant={"neutral"}>Secondary</Button>
              <Button variant={"primary"}>Primary</Button>
            </div>
          }
        />

        <Card.Content>{dummyContent}</Card.Content>
      </Card>
    );
  },
};
