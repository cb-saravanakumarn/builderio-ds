import type { Meta, StoryObj } from "@storybook/react";
import { SBadge, badgeVariants } from "./index";
import { CheckIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { expect, within } from "@storybook/test";
import { VariantProps } from "tailwind-variants";

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
      badgeVariants({ variant: "primary", mode: "light", rounded: "full" })
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <SBadge variant="primary">Primary</SBadge>
      <SBadge variant="neutral">Neutral</SBadge>
      <SBadge variant="danger">Danger</SBadge>
      <SBadge variant="warning">Warning</SBadge>
      <SBadge variant="success">Success</SBadge>
      <SBadge variant="info">Info</SBadge>
      <SBadge variant="brand">Brand</SBadge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badges = canvas.getAllByText(
      /Primary|Neutral|Danger|Warning|Success|Info|Brand/
    );

    const variants = [
      "primary",
      "neutral",
      "danger",
      "warning",
      "success",
      "info",
      "brand",
    ] as VariantProps<typeof badgeVariants>["variant"][];
    for (let i = 0; i < badges.length; i++) {
      // Check parent span contains the variant class
      await expect(badges[i].parentElement).toHaveClass(
        badgeVariants({ variant: variants[i] })
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

    await expect(regularBadge.parentElement).toHaveClass(
      badgeVariants({ size: "regular" })
    );
    await expect(largeBadge.parentElement).toHaveClass(
      badgeVariants({ size: "large" })
    );
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

    await expect(lightBadge.parentElement).toHaveClass(
      badgeVariants({ mode: "light", variant: "primary" })
    );
    await expect(darkBadge.parentElement).toHaveClass(
      badgeVariants({ mode: "dark", variant: "primary" })
    );
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

    await expect(smallBadge.parentElement).toHaveClass(
      badgeVariants({ rounded: "small" })
    );
    await expect(fullBadge.parentElement).toHaveClass(
      badgeVariants({ rounded: "full" })
    );
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

    // Find icon spans using role="presentation" since that's what the component uses
    const leftIconContainer = leftIconBadge.parentElement?.querySelector(
      '[role="presentation"]'
    );
    const rightIconContainer = rightIconBadge.parentElement?.querySelector(
      '[role="presentation"]'
    );

    // Check that icons exist
    await expect(leftIconContainer?.querySelector("svg")).toBeInTheDocument();
    await expect(rightIconContainer?.querySelector("svg")).toBeInTheDocument();

    // Verify icon positions
    // For right icon, the container should have the order-1 class for flexbox ordering
    await expect(rightIconContainer).toHaveClass("s-order-1");
    await expect(leftIconContainer).not.toHaveClass("s-order-1");

    // Both icons should have the s-size-4 class
    await expect(leftIconContainer).toHaveClass("s-size-4");
    await expect(rightIconContainer).toHaveClass("s-size-4");
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

    // When using asChild, the link should be rendered directly
    // And the span with badge classes should be inside the link
    await expect(link.querySelector("span")).toHaveClass(
      badgeVariants({ variant: "primary", mode: "light", rounded: "full" })
    );
    await expect(link).toHaveAttribute("href", "#");
  },
};
