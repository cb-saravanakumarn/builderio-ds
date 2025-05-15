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
    dataTestId: "default-badge",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByTestId("default-badge");

    await expect(badge.querySelector("span")).toHaveClass(
      badgeVariants({ variant: "primary", mode: "light", rounded: "full" })
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <SBadge variant="primary" data-testid="badge-primary">
        Primary
      </SBadge>
      <SBadge variant="neutral" data-testid="badge-neutral">
        Neutral
      </SBadge>
      <SBadge variant="danger" data-testid="badge-danger">
        Danger
      </SBadge>
      <SBadge variant="warning" data-testid="badge-warning">
        Warning
      </SBadge>
      <SBadge variant="success" data-testid="badge-success">
        Success
      </SBadge>
      <SBadge variant="info" data-testid="badge-info">
        Info
      </SBadge>
      <SBadge variant="brand" data-testid="badge-brand">
        Brand
      </SBadge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const variants = [
      "primary",
      "neutral",
      "danger",
      "warning",
      "success",
      "info",
      "brand",
    ] as VariantProps<typeof badgeVariants>["variant"][];

    for (const variant of variants) {
      const badge = canvas.getByTestId(`badge-${variant}`);
      await expect(badge.querySelector("span")).toHaveClass(
        badgeVariants({ variant })
      );
    }
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <SBadge size="regular" data-testid="badge-regular">
        Regular
      </SBadge>
      <SBadge size="large" data-testid="badge-large">
        Large
      </SBadge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const regularBadge = canvas.getByTestId("badge-regular");
    const largeBadge = canvas.getByTestId("badge-large");

    await expect(regularBadge.querySelector("span")).toHaveClass(
      badgeVariants({ size: "regular" })
    );
    await expect(largeBadge.querySelector("span")).toHaveClass(
      badgeVariants({ size: "large" })
    );
  },
};

export const Modes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <SBadge mode="light" variant="primary" data-testid="badge-light">
        Light
      </SBadge>
      <SBadge mode="dark" variant="primary" data-testid="badge-dark">
        Dark
      </SBadge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const lightBadge = canvas.getByTestId("badge-light");
    const darkBadge = canvas.getByTestId("badge-dark");

    await expect(lightBadge.querySelector("span")).toHaveClass(
      badgeVariants({ mode: "light", variant: "primary" })
    );
    await expect(darkBadge.querySelector("span")).toHaveClass(
      badgeVariants({ mode: "dark", variant: "primary" })
    );
  },
};

export const Rounded: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <SBadge rounded="small" data-testid="badge-small-radius">
        Small Radius
      </SBadge>
      <SBadge rounded="full" data-testid="badge-full-radius">
        Full Radius
      </SBadge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallBadge = canvas.getByTestId("badge-small-radius");
    const fullBadge = canvas.getByTestId("badge-full-radius");

    await expect(smallBadge.querySelector("span")).toHaveClass(
      badgeVariants({ rounded: "small" })
    );
    await expect(fullBadge.querySelector("span")).toHaveClass(
      badgeVariants({ rounded: "full" })
    );
  },
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <SBadge
        icon={<CheckIcon />}
        iconPosition="left"
        data-testid="badge-left-icon"
      >
        Left Icon
      </SBadge>
      <SBadge
        icon={<InformationCircleIcon />}
        iconPosition="right"
        data-testid="badge-right-icon"
      >
        Right Icon
      </SBadge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find icon containers using the custom icon test IDs
    const leftIconContainer = canvas.getByTestId("badge-left-icon-icon");
    const rightIconContainer = canvas.getByTestId("badge-right-icon-icon");

    // Check that icons exist
    await expect(leftIconContainer.querySelector("svg")).toBeInTheDocument();
    await expect(rightIconContainer.querySelector("svg")).toBeInTheDocument();

    // Verify icon positions
    // For right icon, the container should have the s-order-1 class for flexbox ordering
    await expect(rightIconContainer).toHaveClass("s-order-1");
    await expect(leftIconContainer).not.toHaveClass("s-order-1");

    // Both icons should have the size-3.5 class
    await expect(leftIconContainer).toHaveClass("size-3.5");
    await expect(rightIconContainer).toHaveClass("size-3.5");
  },
};

export const AsChild: Story = {
  render: () => (
    <SBadge asChild data-testid="badge-as-child">
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
    const link = canvas.getByTestId("badge-as-child");

    const badgeSpan = link.querySelector("span");

    // We need to use the exact class string format that badgeVariants produces
    await expect(badgeSpan).toHaveClass(
      badgeVariants({
        variant: "primary",
        size: "regular",
        rounded: "full",
        mode: "light",
      })
    );

    // Verify that the link has the href attribute
    await expect(link).toHaveAttribute("href", "#");
  },
};
