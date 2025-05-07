import type { Meta, StoryObj } from "@storybook/react";
import { SModal } from ".";
import { SButton as Button } from "../SButton";

type SModalProps = React.ComponentProps<typeof SModal.Root> & {
  size: "xsmall" | "small" | "regular" | "large" | "xlarge";
  variant: "default" | "fullscreen";
  space: "xsmall" | "small" | "regular" | "large" | "xlarge" | "xxlarge";
  bodyHeight: "small" | "regular" | "large";
  showCloseButton: boolean;
  textSize: "xsmall" | "small" | "regular" | "large" | "xlarge" | "xxlarge";
  padding: "xsmall" | "small" | "regular" | "large" | "xlarge" | "xxlarge";
  showShadow: boolean;
};

const meta: Meta<SModalProps> = {
  title: "Design System/Actions/SModal",
  component: SModal.Root,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A modal dialog component built with Radix UI Dialog primitive. It supports different sizes, variants, and can be used for various use cases like forms, confirmations, etc.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xsmall", "small", "regular", "large", "xlarge"],
      description: "The size of the modal.",
      table: {
        category: "Content",
      },
    },
    bodyHeight: {
      control: { type: "select" },
      options: ["small", "regular", "large"],
      description: "The height of the modal body.",
      table: {
        category: "Content",
      },
    },
    variant: {
      control: { type: "select" },
      options: ["default", "fullscreen"],
      description: "The variant of the modal.",
      table: {
        category: "Content",
      },
    },
    space: {
      control: { type: "select" },
      options: ["xsmall", "small", "regular", "large", "xlarge", "xxlarge"],
      description: "The spacing inside the modal.",
      table: {
        category: "Content",
      },
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Whether to show the close button in the header.",
      table: {
        category: "Header",
      },
    },
    textSize: {
      control: { type: "select" },
      options: ["xsmall", "small", "regular", "large", "xlarge", "xxlarge"],
      description: "The size of the text in the modal.",
      table: {
        category: "Title",
      },
    },
    padding: {
      control: { type: "select" },
      options: ["xsmall", "small", "regular", "large", "xlarge", "xxlarge"],
      description: "The padding of the modal.",
      table: {
        category: "Content",
      },
    },
    showShadow: {
      control: { type: "boolean" },
      description: "Whether to show the shadow around the modal.",
      table: {
        category: "Header",
      },
    },
  },
};

export default meta;
type Story = StoryObj<SModalProps>;

// Default Modal
export const Default: Story = {
  args: {
    variant: "default",
    size: "regular",
    space: "regular",
    showCloseButton: true,
    textSize: "regular",
    showShadow: false,
    padding: "regular",
  },
  render: (args) => (
    <SModal.Root>
      <SModal.Trigger asChild>
        <Button>Open Modal</Button>
      </SModal.Trigger>
      <SModal.Content
        size={args.size}
        variant={args.variant}
        padding={args.padding}
        space={args.space}
      >
        <SModal.Header
          showShadow={args.showShadow}
          showCloseButton={args.showCloseButton}
        >
          <SModal.Title textSize={args.textSize}>
            Default Modal Default Modal Default Modal Default Modal Default
            Modal Default Modal Default Modal Default Modal
          </SModal.Title>
        </SModal.Header>

        <SModal.Body className="py-4">
          This is a default modal with regular size and spacing. This is a
          default modal with regular size and spacing. This is a default modal
          with regular size and spacing. This is a default modal with regular
          size and spacing. This is a default modal with regular size and
          spacing. This is a default modal with regular size and spacing. This
          is a default modal with regular size and spacing. This is a default
          modal with regular size and spacing. This is a default modal with
          regular size and spacing. This is a default modal with regular size
          and spacing. This is a default modal with regular size and spacing.
          This is a default modal with regular size and spacing. This is a
          default modal with regular size and spacing. This is a default modal
          with regular size and spacing. This is a default modal with regular
          size and spacing. This is a default modal with regular size and
          spacing. This is a default modal with regular size and spacing. This
          is a default modal with regular size and spacing. This is a default
          modal with regular size and spacing. This is a default modal with
          regular size and spacing. This is a default modal with regular size
          and spacing. This is a default modal with regular size and spacing.
          This is a default modal with regular size and spacing. This is a
          default modal with regular size and spacing. This is a default modal
          with regular size and spacing. This is a default modal with regular
          size and spacing. This is a default modal with regular size and
          spacing. This is a default modal with regular size and spacing. This
          is a default modal with regular size and spacing. This is a default
          modal with regular size and spacing. This is a default modal with
          regular size and spacing. This is a default modal with regular size
          and spacing. This is a default modal with regular size and spacing.
          This is a default modal with regular size and spacing. This is a
          default modal with regular size and spacing. This is a default modal
          with regular size and spacing. This is a default modal with regular
          size and spacing. This is a default modal with regular size and
          spacing. This is a default modal with regular size and spacing. This
          is a default modal with regular size and spacing. This is a default
          modal with regular size and spacing. This is a default modal with
          regular size and spacing. This is a default modal with regular size
          and spacing. This is a default modal with regular size and spacing.
          This is a default modal with regular size and spacing. This is a
          default modal with regular size and spacing. This is a default modal
          with regular size and spacing. This is a default modal with regular
          size and spacing. This is a default modal with regular size and
          spacing. This is a default modal with regular size and spacing. This
          is a default modal with regular size and spacing. This is a default
          modal with regular size and spacing. This is a default modal with
          regular size and spacing. This is a default modal with regular size
          and spacing. This is a default modal with regular size and spacing.
          This is a default modal with regular size and spacing.
        </SModal.Body>
        <SModal.Footer>
          <SModal.Close asChild>
            <Button
              variant={"neutral"}
              className={"s-w-full s-flex s-justify-center md:s-w-auto"}
            >
              Cancel
            </Button>
          </SModal.Close>
          <Button className={"s-w-full s-flex s-justify-center md:s-w-auto"}>
            Save changes
          </Button>
        </SModal.Footer>
      </SModal.Content>
    </SModal.Root>
  ),
};

// Small Modal
export const Small: Story = {
  render: () => (
    <SModal.Root>
      <SModal.Trigger asChild>
        <Button>Small Modal</Button>
      </SModal.Trigger>
      <SModal.Content size="small" space="small">
        <SModal.Header>
          <SModal.Title>Small Modal</SModal.Title>
          <SModal.Description>
            A more compact modal with small size and spacing.
          </SModal.Description>
        </SModal.Header>
        <SModal.Footer>
          <Button>OK</Button>
        </SModal.Footer>
      </SModal.Content>
    </SModal.Root>
  ),
};

// Fullscreen Modal
export const Fullscreen: Story = {
  render: () => (
    <SModal.Root>
      <SModal.Trigger asChild>
        <Button>Fullscreen Modal</Button>
      </SModal.Trigger>
      <SModal.Content variant="fullscreen" space="large">
        <SModal.Header>
          <SModal.Title>Fullscreen Modal</SModal.Title>
          <SModal.Description>
            A fullscreen modal that takes up the entire viewport.
          </SModal.Description>
        </SModal.Header>
        <div className="flex-1 py-4">Fullscreen content here</div>
        <SModal.Footer>
          <SModal.Close asChild>
            <Button>Close</Button>
          </SModal.Close>
        </SModal.Footer>
      </SModal.Content>
    </SModal.Root>
  ),
};

// Form Modal
export const WithForm: Story = {
  render: () => (
    <SModal.Root>
      <SModal.Trigger asChild>
        <Button>Open Form</Button>
      </SModal.Trigger>
      <SModal.Content size="large">
        <SModal.Header>
          <SModal.Title>Edit Profile</SModal.Title>
          <SModal.Description>
            Make changes to your profile here.
          </SModal.Description>
        </SModal.Header>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input id="name" className="col-span-3 rounded-md border p-2" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="email" className="text-right">
              Email
            </label>
            <input id="email" className="col-span-3 rounded-md border p-2" />
          </div>
        </div>
        <SModal.Footer>
          <SModal.Close asChild>
            <Button className={"!w-full"}>Cancel</Button>
          </SModal.Close>
          <Button>Save changes</Button>
        </SModal.Footer>
      </SModal.Content>
    </SModal.Root>
  ),
};
