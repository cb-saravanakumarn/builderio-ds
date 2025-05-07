import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SCheckList } from ".";

const optionList = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  {
    label:
      "Option 4 with long text: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    value: "4",
  },
];

const meta: Meta<typeof SCheckList> = {
  component: SCheckList,
  decorators: [
    (Story: any) => (
      <div className="s-p-4">
        <Story />
      </div>
    ),
  ],
  title: "Design System/Forms/SCheckList",
  tags: ["autodocs"],
  args: {
    variant: "basic",
    align: "horizontal",
    width: "inline",
    title: "",
    onChangeLogic: (values) => console.log("Selected values:", values),
    listDescription: "",
    selectedValues: ["1"],
  },
  argTypes: {
    variant: {
      options: ["basic", "contained"],
      control: { type: "radio" },
      description: "The visual style variant of the checklist",
      table: {
        defaultValue: { summary: "basic" },
        type: { summary: "string" },
      },
    },
    size: {
      options: ["small", "regular", "large"],
      control: { type: "select" },
      description: "The size of the checklist items",
      if: { arg: "variant", neq: "basic" },
      table: {
        defaultValue: { summary: "regular" },
      },
    },
    align: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
      description: "The layout orientation of the checklist items",
      table: {
        defaultValue: { summary: "horizontal" },
      },
    },
    width: {
      options: ["inline", "full"],
      control: { type: "radio" },
      description: "Whether the checklist takes full width of its container",
      table: {
        defaultValue: { summary: "inline" },
      },
    },
    title: {
      control: { type: "text" },
      description: "Title displayed above the checklist",
    },
    listDescription: {
      control: { type: "text" },
      description: "Description text displayed below the title",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the entire checklist is disabled",
    },
    selectedValues: {
      control: { type: "object" },
      description: "Array of pre-selected values",
    },
    onChangeLogic: {
      action: "selection changed",
      description: "Function called when selection changes",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# SCheckList

A flexible checklist component that supports multiple selection, different layouts, and styling options.

## Features

- Multiple visual variants: basic and contained
- Different size options: small, regular, large
- Horizontal or vertical layout
- Disabled state support
- Custom styling options
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "basic",
    align: "horizontal",
    selectedValues: ["1"],
    onChangeLogic: (values: string[]) => console.log("Changed values:", values),
  },
  render: (args) => (
    <SCheckList {...args} title={args.title || ""} listDescription={args.listDescription || ""}>
      {optionList.map((item, index) => (
        <SCheckList.Item key={index} value={item.value}>
          {item.label}
        </SCheckList.Item>
      ))}
    </SCheckList>
  ),
};

export const WithTitleAndDescription: Story = {
  args: {
    variant: "basic",
    align: "horizontal",
    title: "Favorite Options",
    listDescription: "Please select one or more options from the list below",
    selectedValues: ["1"],
  },
  render: (args) => (
    <SCheckList {...args} title={args.title || ""} listDescription={args.listDescription || ""}>
      {optionList.map((item, index) => (
        <SCheckList.Item key={index} value={item.value}>
          {item.label}
        </SCheckList.Item>
      ))}
    </SCheckList>
  ),
};

export const ContainedVariant: Story = {
  args: {
    variant: "contained",
    align: "horizontal",
    selectedValues: ["1", "3"],
  },
  render: (args) => (
    <SCheckList {...args} title={args.title || ""} listDescription={args.listDescription || ""}>
      {optionList.map((item, index) => (
        <SCheckList.Item key={index} value={item.value}>
          {item.label}
        </SCheckList.Item>
      ))}
    </SCheckList>
  ),
};

export const VerticalAlignment: Story = {
  args: {
    variant: "basic",
    align: "vertical",
    selectedValues: ["2"],
  },
  render: (args) => (
    <SCheckList {...args} title={args.title || ""} listDescription={args.listDescription || ""}>
      {optionList.map((item, index) => (
        <SCheckList.Item key={index} value={item.value}>
          {item.label}
        </SCheckList.Item>
      ))}
    </SCheckList>
  ),
};

export const FullWidth: Story = {
  args: {
    variant: "basic",
    width: "full",
    align: "horizontal",
    selectedValues: [],
  },
  render: (args) => (
    <SCheckList {...args} title={args.title || ""} listDescription={args.listDescription || ""}>
      {optionList.map((item, index) => (
        <SCheckList.Item key={index} value={item.value}>
          {item.label}
        </SCheckList.Item>
      ))}
    </SCheckList>
  ),
};

export const DisabledChecklist: Story = {
  args: {
    variant: "basic",
    disabled: true,
    selectedValues: ["1"],
  },
  render: (args) => (
    <SCheckList {...args} title={args.title || ""} listDescription={args.listDescription || ""}>
      {optionList.map((item, index) => (
        <SCheckList.Item key={index} value={item.value}>
          {item.label}
        </SCheckList.Item>
      ))}
    </SCheckList>
  ),
};

export const MixedDisabledItems: Story = {
  args: {
    variant: "contained",
    selectedValues: ["1"],
  },
  render: (args) => (
    <SCheckList {...args} title={args.title || ""} listDescription={args.listDescription || ""}>
      <SCheckList.Item value="1">Option 1</SCheckList.Item>
      <SCheckList.Item value="2" disabled>
        Option 2 (Disabled)
      </SCheckList.Item>
      <SCheckList.Item value="3">Option 3</SCheckList.Item>
      <SCheckList.Item value="4" disabled>
        Option 4 (Disabled)
      </SCheckList.Item>
    </SCheckList>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="s-flex s-flex-col s-gap-6">
      <SCheckList variant="contained" size="small" title="Small Size" listDescription="">
        {optionList.slice(0, 3).map((item, index) => (
          <SCheckList.Item key={index} value={item.value}>
            {item.label}
          </SCheckList.Item>
        ))}
      </SCheckList>

      <SCheckList variant="contained" size="regular" title="Regular Size" listDescription="">
        {optionList.slice(0, 3).map((item, index) => (
          <SCheckList.Item key={index} value={item.value}>
            {item.label}
          </SCheckList.Item>
        ))}
      </SCheckList>

      <SCheckList variant="contained" size="large" title="Large Size" listDescription="">
        {optionList.slice(0, 3).map((item, index) => (
          <SCheckList.Item key={index} value={item.value}>
            {item.label}
          </SCheckList.Item>
        ))}
      </SCheckList>
    </div>
  ),
};

export const ControlledComponent: Story = {
  render: () => {
    const ControlledExample = () => {
      const [selected, setSelected] = useState<string[]>(["1"]);

      return (
        <div className="s-p-4">
          <h3 className="s-mb-4">Controlled Checklist Example</h3>
          <p className="s-mb-4">Selected values: {selected.join(", ")}</p>

          <SCheckList
            variant="contained"
            title="Select Options"
            listDescription="Please select one or more options."
            selectedValues={selected}
            onChangeLogic={(values) => setSelected(values)}
          >
            {optionList.map((item, index) => (
              <SCheckList.Item key={index} value={item.value}>
                {item.label}
              </SCheckList.Item>
            ))}
          </SCheckList>

          <div className="s-mt-4">
            <button
              className="s-px-3 s-py-1 s-bg-blue-500 s-text-white s-rounded s-mr-2"
              onClick={() => setSelected([])}
            >
              Clear All
            </button>
            <button
              className="s-px-3 s-py-1 s-bg-green-500 s-text-white s-rounded"
              onClick={() => setSelected(optionList.map((item) => item.value))}
            >
              Select All
            </button>
          </div>
        </div>
      );
    };

    return <ControlledExample />;
  },
};

export const IndividualDisabledItems: Story = {
  args: {
    variant: "basic",
    title: "Items with individual disabled states",
    listDescription: "Some items are disabled while others remain interactive",
  },
  render: (args) => {
    const [selected, setSelected] = useState<string[]>(["1"]);

    return (
      <SCheckList
        {...args}
        title={args.title || "Default Title"}
        listDescription={args.listDescription || "Default Description"}
        selectedValues={selected}
        onChangeLogic={(values) => {
          console.log("Changed:", values);
          setSelected(values);
        }}
      >
        <SCheckList.Item value="1">Option 1 (Enabled)</SCheckList.Item>
        <SCheckList.Item value="2" disabled>
          Option 2 (Disabled)
        </SCheckList.Item>
        <SCheckList.Item value="3">Option 3 (Enabled)</SCheckList.Item>
        <SCheckList.Item value="4" disabled>
          Option 4 (Disabled)
        </SCheckList.Item>
      </SCheckList>
    );
  },
};

export const ControlledUsage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "SCheckList is a controlled component. You need to manage the selected values in your state and pass them via the selectedValues prop.",
      },
    },
  },
  render: () => {
    const ControlledExample = () => {
      const [selected, setSelected] = useState<string[]>(["1"]);

      return (
        <div className="s-p-4">
          <h3 className="s-mb-4">Controlled Component Example</h3>
          <p className="s-mb-4">Selected values: {selected.join(", ")}</p>

          <SCheckList
            variant="contained"
            title="Select Options"
            listDescription="Please select one or more options."
            selectedValues={selected}
            onChangeLogic={setSelected}
          >
            {optionList.map((item, index) => (
              <SCheckList.Item key={index} value={item.value}>
                {item.label}
              </SCheckList.Item>
            ))}
          </SCheckList>

          <div className="s-mt-4">
            <button
              className="s-px-3 s-py-1 s-bg-blue-500 s-text-white s-rounded s-mr-2"
              onClick={() => setSelected([])}
            >
              Clear All
            </button>
            <button
              className="s-px-3 s-py-1 s-bg-green-500 s-text-white s-rounded"
              onClick={() => setSelected(optionList.map((item) => item.value))}
            >
              Select All
            </button>
          </div>
        </div>
      );
    };

    return <ControlledExample />;
  },
};
