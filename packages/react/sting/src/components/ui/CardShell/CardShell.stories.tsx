import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
// import { CView } from "../CView";
import { CGap } from "../CGap";
import { SelectItem, SelectMenu } from "../CSelect";
import { Input } from "../Input";
import { Button } from "../Button";
import {
  ArrowLongDownIcon,
  ArrowLongUpIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { Badge } from "../Badge";
import { RadioButton, RadioGroup } from "../RadioGroup";

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
        <CGap gap="small" className={`${seperator}`}>
          <div className="s-flex s-flex-col md:s-flex-row s-gap-large ">
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
            <div className="s-flex-grow-0 md:s-flex-grow-0 md:s-w-auto ">
              <Button
                size="small"
                styleType="icon-borderless"
                variant="neutral"
              >
                <TrashIcon />
              </Button>
            </div>
          </div>

          <div className="s-flex s-flex-col md:s-flex-row s-gap-large">
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
          </div>
        </CGap>

        <div>
          <Button size="regular" styleType="text" variant="neutral">
            <PlusIcon /> Add condition
          </Button>
        </div>
      </Card>
    );
  },
};

export const ApprovalsStage: Story = {
  render: (args) => {
    console.log("args", args);
    return (
      <Card background={"neutral"} depth={"flat"} className="s-card-shell">
        <CGap gap="large">
          <Card.Header
            alignItems="start"
            titleElement={
              <Badge variant="brand" size="large">
                Stage 1
              </Badge>
            }
            actionElement={
              <>
                <Button
                  onClick={() => {}}
                  size="regular"
                  styleType="text"
                  variant="neutral"
                >
                  <ArrowLongUpIcon /> Move up
                </Button>
                <Button
                  onClick={() => {}}
                  size="regular"
                  styleType="text"
                  variant="neutral"
                >
                  <ArrowLongDownIcon /> Move down
                </Button>
                <Button
                  onClick={() => {}}
                  size="regular"
                  styleType="text"
                  variant="neutral"
                >
                  <TrashIcon />
                </Button>
              </>
            }
          />
          <CGap gap="xlarge" className=" ">
            <div className="s-w-1/2">
              <Input
                inputSize="regular"
                inputWidth="inline"
                label="inline"
                labelText="Stage name"
                messageText=""
                onChangeLogic={() => {}}
                placeholder="Eg. Sales"
                type="text"
                variant="input"
              />
            </div>
            <CGap gap="regular">
              <h4 className="s-text-base s-text-neutral-700 s-font-semibold ">
                Approvers
              </h4>
              <div>Test</div>
            </CGap>
            <RadioGroup
              align="horizontal"
              defaultValue="option value"
              description=""
              onChangeLogic={() => {}}
              size="regular"
              title="How should the approval happen?"
              variant="contained"
              width={null}
            >
              <RadioButton contained id="option1" value="option value">
                <label htmlFor="option1">Everyone must approve</label>
              </RadioButton>
              <RadioButton contained id="option2" value="option value 2">
                <label htmlFor="option2">Just notify - no action needed</label>
              </RadioButton>
            </RadioGroup>
          </CGap>
        </CGap>
      </Card>
    );
  },
};
