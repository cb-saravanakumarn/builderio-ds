import type { Meta, StoryObj } from "@storybook/react";

import { CStackedList, CStackedItem } from ".";
// import { Button } from "../Button";
import { Card } from "../Card";

const people = [
  {
    id: "p1",
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    id: "p2",
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    id: "p3",
    name: "Michael Foaster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    id: "p4",
    name: "Michael Foaster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
];

const meta: Meta<typeof CStackedList> = {
  component: CStackedList,
  decorators: [(Story: any) => <Story />],
  title: "Components/CStackedList",
  tags: ["autodocs"],
  parameters: {
    controls: { exclude: ["initialSelectedOption", "width"] },
  },
  argTypes: {
    divider: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    selectable: {
      control: { type: "boolean" },
      defaultValue: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CStackListBasic: Story = {
  render: (args) => {
    const deleteHandler = () => {
      alert("Delete handler called");
    };
    return (
      <Card padding="none" background="white">
        <CStackedList {...args}>
          {people.map((item) => (
            <CStackedItem
              key={item.name}
              id={item.id}
              //   leftIcon={
              //     <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              //   }
              leftAvatar={item.imageUrl}
              title="Titles 1"
              subTitle="Description 1"
              checked={true}
              trash={false}
              onDelete={deleteHandler}
              // actionElement={
              //   <>
              //     <span>
              //       <Badge mode="dark" size="regular" variant="yellow">
              //         Waiting
              //       </Badge>
              //     </span>
              //   </>
              // }
            />
          ))}
        </CStackedList>
      </Card>
    );
  },
};
