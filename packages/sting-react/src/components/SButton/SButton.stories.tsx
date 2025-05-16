import { ArrowRightIcon, BeakerIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { SButton } from "./index";

const meta = {
  title: "Design System/Actions/SButton",
  component: SButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "primary",
    asChild: false,
    loading: false,
    fullWidth: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    // Test initial state
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass("s-btn s-btn-primary");

    // Test click interaction
    await userEvent.click(button);
    await expect(button).toHaveFocus();
  },
};

export const WithLeftIcon: Story = {
  render: (args) => (
    <SButton
      {...args}
      icon={<BeakerIcon className="w-5 h-5" />}
      iconPosition="left"
    >
      {args.children}
    </SButton>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    const icon = button.querySelector("svg");

    await expect(icon).toBeInTheDocument();
    await expect(button.firstElementChild?.firstElementChild).toContainElement(
      icon as SVGElement
    );
  },
};

export const WithRightIcon: Story = {
  render: (args) => (
    <SButton
      {...args}
      icon={<ArrowRightIcon className="w-5 h-5" />}
      iconPosition="right"
    >
      {args.children}
    </SButton>
  ),
  args: {
    children: "With Right Icon",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    const icon = button.querySelector("svg");

    await expect(icon).toBeInTheDocument();
    await expect(button.firstElementChild?.lastElementChild).toContainElement(
      icon as SVGElement
    );
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute("aria-disabled", "true");
    await expect(button).toHaveAttribute("data-state", "loading");
    await expect(button).toContainHTML('class="s-animate-spin');

    // Verify button cannot be clicked while loading
    await userEvent.click(button);
    await expect(button).toBeDisabled();
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute("aria-disabled", "true");
    await expect(button).toHaveClass("s-btn-disabled");

    // Verify button cannot be clicked while disabled
    await userEvent.click(button);
    await expect(button).toBeDisabled();
  },
};

export const AsLink: Story = {
  render: (args) => (
    <SButton {...args} asChild>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Link as Button
      </a>
    </SButton>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");

    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute("href", "#");
  },
};

export const Rounded: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <SButton rounded="none">Squared</SButton>
      <SButton rounded="sm">Small Radius</SButton>
      <SButton rounded="md">Medium Radius</SButton>
      <SButton rounded="lg">Large Radius</SButton>
      <SButton rounded="full">Fully Rounded</SButton>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    await expect(buttons[0]).toHaveClass("s-rounded-none");
    await expect(buttons[1]).toHaveClass("s-rounded-sm");
    await expect(buttons[2]).toHaveClass("s-rounded-md");
    await expect(buttons[3]).toHaveClass("s-rounded-lg");
    await expect(buttons[4]).toHaveClass("s-rounded-full");
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-wrap gap-4">
        <SButton variant="primary">Primary</SButton>
        <SButton variant="neutral">Neutral</SButton>
        <SButton variant="danger">Danger</SButton>
      </div>
      <div className="flex flex-wrap gap-4">
        <SButton variant="primary" styleType="outline">
          Primary Outline
        </SButton>
        <SButton variant="neutral" styleType="outline">
          Neutral Outline
        </SButton>
        <SButton variant="danger" styleType="outline">
          Danger Outline
        </SButton>
      </div>
      <div className="flex flex-wrap gap-4">
        <SButton variant="primary" styleType="text">
          Primary Text
        </SButton>
        <SButton variant="neutral" styleType="text">
          Neutral Text
        </SButton>
        <SButton variant="danger" styleType="text">
          Danger Text
        </SButton>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    // Test default variants
    await expect(buttons[0]).toHaveClass("s-btn-primary");
    await expect(buttons[1]).toHaveClass("s-btn-neutral");
    await expect(buttons[2]).toHaveClass("s-btn-danger");
    await expect(buttons[3]).toHaveClass("s-btn-warning");

    // Test outline variants
    for (let i = 4; i < 8; i++) {
      await expect(buttons[i]).toHaveClass("s-btn-outline");
    }

    // Test text variants
    for (let i = 8; i < 12; i++) {
      await expect(buttons[i]).toHaveClass("s-btn-text");
    }
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <SButton size="small">Small</SButton>
      <SButton size="regular">Regular</SButton>
      <SButton size="large">Large</SButton>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    await expect(buttons[0]).toHaveClass("s-btn-small");
    await expect(buttons[1]).not.toHaveClass("s-btn-small");
    await expect(buttons[1]).not.toHaveClass("s-btn-large");
    await expect(buttons[2]).toHaveClass("s-btn-large");
  },
};

export const FullWidth: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full">
      <SButton fullWidth>Full Width Button</SButton>
      <SButton fullWidth variant="neutral">
        Full Width Neutral
      </SButton>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    for (const button of buttons) {
      await expect(button).toHaveClass("s-btn-full-width");
    }
  },
};

export const IconButtons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {["primary", "neutral", "danger", "warning"].map((variant) => (
        <SButton
          key={variant}
          variant={variant as any}
          styleType="icon"
          aria-label={`${variant} icon button`}
        >
          <BeakerIcon className="w-5 h-5" />
        </SButton>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    for (const button of buttons) {
      await expect(button).toHaveClass("s-btn-icon");
      const icon = button.querySelector("svg");
      await expect(icon).toBeInTheDocument();
    }
  },
};

export const IconButtonSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <SButton styleType="icon" size="small" aria-label="Small icon">
        <BeakerIcon className="w-4 h-4" />
      </SButton>
      <SButton styleType="icon" size="regular" aria-label="Regular icon">
        <BeakerIcon className="w-5 h-5" />
      </SButton>
      <SButton styleType="icon" size="large" aria-label="Large icon">
        <BeakerIcon className="w-6 h-6" />
      </SButton>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    await expect(buttons[0]).toHaveClass("s-btn-small");
    await expect(buttons[1]).not.toHaveClass("s-btn-small", "s-btn-large");
    await expect(buttons[2]).toHaveClass("s-btn-large");
  },
};

export const LoadingStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <SButton loading>Loading</SButton>
      <SButton variant="danger" loading>
        Loading Danger
      </SButton>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    for (const button of buttons) {
      await expect(button).toBeDisabled();
      await expect(button).toHaveAttribute("aria-disabled", "true");
      await expect(button).toHaveAttribute("data-state", "loading");
      await expect(button).toContainHTML('class="s-animate-spin');
    }
  },
};
