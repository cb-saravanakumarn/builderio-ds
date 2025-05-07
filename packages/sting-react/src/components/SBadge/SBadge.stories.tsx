import type { Meta, StoryObj } from "@storybook/react";
import { SBadge } from "./index";
import { CheckIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Design System/Presentation/SBadge",
  component: SBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Badge",
    variant: "primary",
    size: "regular",
    mode: "light",
    rounded: "full",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText("Default Badge");

    await expect(badge.parentElement).toHaveClass(
      "s-badge",
      "s-badge-primary",
      "s-badge-light",
      "s-radius-full"
    );
    await expect(badge.parentElement).not.toHaveClass("s-badge-large");
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <SBadge variant="primary">Primary</SBadge>
      <SBadge variant="neutral">Neutral</SBadge>
      <SBadge variant="red">Red</SBadge>
      <SBadge variant="yellow">Yellow</SBadge>
      <SBadge variant="green">Green</SBadge>
      <SBadge variant="info">Info</SBadge>
      <SBadge variant="brand">Brand</SBadge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badges = canvas.getAllByText(
      /Primary|Neutral|Red|Yellow|Green|Info|Brand/
    );

    const variants = [
      "primary",
      "neutral",
      "red",
      "yellow",
      "green",
      "info",
      "brand",
    ];
    for (let i = 0; i < badges.length; i++) {
      await expect(badges[i].parentElement).toHaveClass(
        `s-badge-${variants[i]}`
      );
    }
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <SBadge size="regular">Regular</SBadge>
      <SBadge size="large">Large</SBadge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const regularBadge = canvas.getByText("Regular");
    const largeBadge = canvas.getByText("Large");

    await expect(regularBadge.parentElement).not.toHaveClass("s-badge-large");
    await expect(largeBadge.parentElement).toHaveClass("s-badge-large");
  },
};

export const Modes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <SBadge mode="light" variant="primary">
        Light
      </SBadge>
      <SBadge mode="dark" variant="primary">
        Dark
      </SBadge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const lightBadge = canvas.getByText("Light");
    const darkBadge = canvas.getByText("Dark");

    await expect(lightBadge.parentElement).toHaveClass("s-badge-light");
    await expect(darkBadge.parentElement).toHaveClass("s-badge-dark");
  },
};

export const Rounded: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <SBadge rounded="small">Small Radius</SBadge>
      <SBadge rounded="full">Full Radius</SBadge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallBadge = canvas.getByText("Small Radius");
    const fullBadge = canvas.getByText("Full Radius");

    await expect(smallBadge.parentElement).toHaveClass("s-radius-small");
    await expect(fullBadge.parentElement).toHaveClass("s-radius-full");
  },
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <SBadge icon={<CheckIcon />} iconPosition="left">
        Left Icon
      </SBadge>
      <SBadge icon={<InformationCircleIcon />} iconPosition="right">
        Right Icon
      </SBadge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const leftIconBadge = canvas.getByText("Left Icon");
    const rightIconBadge = canvas.getByText("Right Icon");

    const leftBadgeSpan = leftIconBadge.parentElement?.querySelector(".s-span");
    const rightBadgeSpan =
      rightIconBadge.parentElement?.querySelector(".s-span");

    // Check that icons exist
    await expect(leftBadgeSpan?.querySelector("svg")).toBeInTheDocument();
    await expect(rightBadgeSpan?.querySelector("svg")).toBeInTheDocument();

    // Verify icon positions
    // For left icon, the icon span should be the first child
    await expect(leftBadgeSpan?.firstElementChild).toHaveClass("s-badge-icon");
    // For right icon, the icon span should be the last child
    await expect(rightBadgeSpan?.lastElementChild).toHaveClass("s-badge-icon");
  },
};

export const AsChild: Story = {
  render: () => (
    <SBadge asChild>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Clickable Badge
      </a>
    </SBadge>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    const badgeSpan = link.closest(".s-badge");

    // The badge classes should be on the span wrapping the link
    await expect(badgeSpan).toHaveClass(
      "s-badge",
      "s-badge-primary",
      "s-badge-light",
      "s-radius-full"
    );
    await expect(link).toHaveAttribute("href", "#");
  },
};
