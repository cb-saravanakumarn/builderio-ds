import type { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";
import { Button } from "../Button";

const meta: Meta<typeof Card> = {
  component: Card,
  decorators: [
    (Story: any) => (
      // <Center>
      <Story />
      // </Center>
    ),
  ],
  tags: ["autodocs"],
  title: "Elements/Card",

  argTypes: {
    depth: ["flat", "raised", "regular"],
    padding: ["large", "regular"],
    background: ["transparent", "white"],
    spacey: ["none", "small", "regular", "large", "xlarge", "xxlarge"],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const BaseCard: Story = {
  render: (args) => {
    // let selectedName = args.variant;
    return (
      <Card
        background={args.background}
        depth={args.depth}
        padding={args.padding}
      >
        Card Component
      </Card>
    );
  },
};

// export const CardWithHeaderAction: Story = {
//   render: (args) => {
//     // let selectedName = args.variant;
//     return (
//       <Card
//         background={args.background}
//         depth={args.depth}
//         padding={args.padding}
//       >
//         <Card.Header alignItems={"start"}>
//           <Card.Left>
//             <Card.Title>Header Title</Card.Title>
//             <Card.Description>
//               This space is to add description or subtitle
//             </Card.Description>
//           </Card.Left>
//           <Card.Right>
//             <Button variant="primary" styleType={"outline"}>
//               Action
//             </Button>
//           </Card.Right>
//         </Card.Header>
//       </Card>
//     );
//   },
// };

export const CardWithHeaderTitle: Story = {
  render: (args) => {
    // let selectedName = args.variant;
    return (
      <Card
        background={args.background}
        depth={args.depth}
        padding={args.padding}
        spacey={"regular"}
      >
        <Card.Header
          title="Card Title"
          // titleElement={<Badge>New</Badge>}
          alignItems={"start"}
          actionElement={<Button>Action</Button>}
          // primaryAction={<Button>Action</Button>}
          // secondaryAction={<Button variant={"neutral"}>Another Action</Button>}
          // tertiaryAction={
          //   <Button variant={"neutral"} styleType={"text"}>
          //     Link Action
          //   </Button>
          // }
        />
        <Card.Content>
          <div>Content</div>
        </Card.Content>
      </Card>
    );
  },
};
