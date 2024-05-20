import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { CView } from "../CView";
import { SelectItem, SelectMenu } from "../Select";
import { Input } from "../Input";
import { Button } from "../Button";
import { PlusIcon, TrashIcon } from "@heroicons/react/16/solid";

const meta: Meta<any> = {
  decorators: [
    (Story: any) => (
      // <Center>
      <Story />
      // </Center>
    ),
  ],
  tags: ["autodocs"],
  title: "Template/CardShell",
  argTypes: {
    seperator: {
      control: { type: "boolean" },
      defaultValue: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const ApprovalsCondition: Story = {
  render: (args) => {
    // let selectedName = args.variant;
    const seperator = args.seperator ? "s-card-divider" : "s-card-no-divider";
    return (
      <Card background={"neutral"} depth={"flat"} className="s-card-shell">
        <CView direction="column" gap="regular" className={seperator}>
          <CView direction="columnMdRow" gap={"large"}>
            <div className="md:s-w-1/3">
              <SelectMenu
                label="inline"
                labelText={"Label: "}
                onValueChange={() => {}}
                placeholder="Choose property"
                size="regular"
              >
                <div className="s-p-regular">
                  <Input placeholder="Search" />
                </div>
                <SelectItem value={"option"}>Option</SelectItem>
                <SelectItem value={"option2"}>Option</SelectItem>
              </SelectMenu>
            </div>
            <div className=" md:s-w-1/4">
              <SelectMenu
                onValueChange={() => {}}
                placeholder="Choose Operator"
                size="regular"
              >
                <div className="s-p-regular">
                  <Input placeholder="Search" />
                </div>
                <SelectItem value={"option"}>Option</SelectItem>
                <SelectItem value={"option2"}>Option</SelectItem>
              </SelectMenu>
            </div>
            <div className="md:s-w-1/3 ">
              <SelectMenu
                onValueChange={() => {}}
                placeholder="Choose Value"
                size="regular"
              >
                <SelectItem value={"option"}>Option</SelectItem>
                <SelectItem value={"option2"}>Option</SelectItem>
              </SelectMenu>
            </div>
            <div className="s-flex-grow-0 md:s-flex-grow-0 md:s-w-auto">
              <Button
                size="small"
                styleType="icon-borderless"
                variant="neutral"
              >
                <TrashIcon />
              </Button>
            </div>
          </CView>

          <CView direction="columnMdRow" gap={"large"}>
            <div className="md:s-w-1/3">
              <SelectMenu
                label="inline"
                labelText={"Label: "}
                onValueChange={() => {}}
                placeholder="Choose property"
                size="regular"
              >
                <div className="s-p-regular">
                  <Input placeholder="Search" />
                </div>
                <SelectItem value={"option"}>Option</SelectItem>
                <SelectItem value={"option2"}>Option</SelectItem>
              </SelectMenu>
            </div>
            <div className=" md:s-w-1/4">
              <SelectMenu
                onValueChange={() => {}}
                placeholder="Choose Operator"
                size="regular"
              >
                <div className="s-p-regular">
                  <Input placeholder="Search" />
                </div>
                <SelectItem value={"option"}>Option</SelectItem>
                <SelectItem value={"option2"}>Option</SelectItem>
              </SelectMenu>
            </div>
            <div className="md:s-w-1/3 ">
              <SelectMenu
                onValueChange={() => {}}
                placeholder="Choose Value"
                size="regular"
              >
                <SelectItem value={"option"}>Option</SelectItem>
                <SelectItem value={"option2"}>Option</SelectItem>
              </SelectMenu>
            </div>
            <div className="s-flex-grow-0 md:s-flex-grow-0 md:s-w-auto">
              <Button
                size="small"
                styleType="icon-borderless"
                variant="neutral"
              >
                <TrashIcon />
              </Button>
            </div>
          </CView>
        </CView>

        <div>
          <Button size="regular" styleType="text" variant="neutral">
            <PlusIcon /> Add condition
          </Button>
        </div>
      </Card>
    );
  },
};
