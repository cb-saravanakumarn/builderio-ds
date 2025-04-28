import { render, screen } from "@testing-library/react";
import { SBadge } from ".";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("SBadge Component", () => {
  // Render tests
  it("renders the primary badge correctly", () => {
    render(<SBadge variant="primary">Primary Badge</SBadge>);
    const badgeElement = screen.getByText("Primary Badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.parentElement).toHaveClass("s-badge s-badge-primary");
  });

  it("renders the neutral badge correctly", () => {
    render(<SBadge variant="neutral">Neutral Badge</SBadge>);
    const badgeElement = screen.getByText("Neutral Badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.parentElement).toHaveClass("s-badge s-badge-neutral");
  });

  it("renders the red badge correctly", () => {
    render(<SBadge variant="red">Red Badge</SBadge>);
    const badgeElement = screen.getByText("Red Badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.parentElement).toHaveClass("s-badge s-badge-red");
  });

  it("renders the yellow badge correctly", () => {
    render(<SBadge variant="yellow">Yellow Badge</SBadge>);
    const badgeElement = screen.getByText("Yellow Badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.parentElement).toHaveClass("s-badge s-badge-yellow");
  });

  it("renders the green badge correctly", () => {
    render(<SBadge variant="green">Green Badge</SBadge>);
    const badgeElement = screen.getByText("Green Badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.parentElement).toHaveClass("s-badge s-badge-green");
  });

  it("renders the info badge correctly", () => {
    render(<SBadge variant="info">Info Badge</SBadge>);
    const badgeElement = screen.getByText("Info Badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.parentElement).toHaveClass("s-badge s-badge-info");
  });

  it("renders the brand badge correctly", () => {
    render(<SBadge variant="brand">Brand Badge</SBadge>);
    const badgeElement = screen.getByText("Brand Badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.parentElement).toHaveClass("s-badge s-badge-brand");
  });

  // Size tests
  it("applies the correct size class when size is regular", () => {
    render(<SBadge size="regular">Regular Badge</SBadge>);
    const badgeElement = screen.getByText("Regular Badge");
    expect(badgeElement.parentElement).not.toHaveClass("s-badge-large");
  });

  it("applies the correct size class when size is large", () => {
    render(<SBadge size="large">Large Badge</SBadge>);
    const badgeElement = screen.getByText("Large Badge");
    expect(badgeElement.parentElement).toHaveClass("s-badge-large");
  });

  // Mode tests
  it("applies the light mode correctly", () => {
    render(<SBadge mode="light">Light Mode Badge</SBadge>);
    const badgeElement = screen.getByText("Light Mode Badge");
    expect(badgeElement.parentElement).toHaveClass("s-badge-light");
  });

  it("applies the dark mode correctly", () => {
    render(<SBadge mode="dark">Dark Mode Badge</SBadge>);
    const badgeElement = screen.getByText("Dark Mode Badge");
    expect(badgeElement.parentElement).toHaveClass("s-badge-dark");
  });

  // Rounded tests
  it("applies the small rounded class correctly", () => {
    render(<SBadge rounded="small">Small Rounded Badge</SBadge>);
    const badgeElement = screen.getByText("Small Rounded Badge");
    expect(badgeElement.parentElement).toHaveClass("s-radius-small");
  });

  it("applies the full rounded class correctly", () => {
    render(<SBadge rounded="full">Full Rounded Badge</SBadge>);
    const badgeElement = screen.getByText("Full Rounded Badge");
    expect(badgeElement.parentElement).toHaveClass("s-radius-full");
  });

  // Slot (asChild) tests
  it("renders a link when asChild prop is true", () => {
    render(
      <SBadge asChild>
        <a href="/home">Link Badge</a>
      </SBadge>
    );
    const linkElement = screen.getByRole("link", { name: /link badge/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/home");
  });

  // Icon tests
  it("renders the icon on the left when iconPosition is left", () => {
    render(
      <SBadge
        icon={<span data-testid="test-icon">Icon</span>}
        iconPosition="left"
      >
        Badge with Left Icon
      </SBadge>
    );
    const badgeElement = screen.getByText("Badge with Left Icon");
    const iconElement = screen.getByTestId("test-icon");
    expect(badgeElement.parentElement).toContainElement(
      iconElement.parentElement
    );
    // The icon should be before the text
    expect(iconElement.parentElement).toBe(badgeElement.firstChild);
  });

  it("renders the icon on the right when iconPosition is right", () => {
    render(
      <SBadge
        icon={<span data-testid="test-icon">Icon</span>}
        iconPosition="right"
      >
        Badge with Right Icon
      </SBadge>
    );
    const badgeElement = screen.getByText("Badge with Right Icon");
    const iconElement = screen.getByTestId("test-icon");
    expect(badgeElement.parentElement).toContainElement(
      iconElement.parentElement
    );
  });

  // Additional class tests
  it("applies additional className", () => {
    render(<SBadge className="custom-class">Custom Class Badge</SBadge>);
    const badgeElement = screen.getByText("Custom Class Badge");
    expect(badgeElement.parentElement).toHaveClass("custom-class");
    expect(badgeElement.parentElement).toHaveClass("s-badge"); // Still has base class
  });

  // Default props test
  it("uses default props when not specified", () => {
    render(<SBadge>Default Props Badge</SBadge>);
    const badgeElement = screen.getByText("Default Props Badge");
    const parentElement = badgeElement.parentElement;
    expect(parentElement).toHaveClass("s-badge");
    expect(parentElement).toHaveClass("s-badge-primary"); // default variant
    expect(parentElement).toHaveClass("s-badge-light"); // default mode
    expect(parentElement).toHaveClass("s-radius-full"); // default rounded
    expect(parentElement).not.toHaveClass("s-badge-large"); // default size is regular
  });

  // Combination test
  it("combines multiple props correctly", () => {
    render(
      <SBadge
        variant="brand"
        size="large"
        mode="dark"
        rounded="small"
        className="custom-class"
      >
        Combined Props Badge
      </SBadge>
    );
    const badgeElement = screen.getByText("Combined Props Badge");
    const parentElement = badgeElement.parentElement;
    expect(parentElement).toHaveClass("s-badge");
    expect(parentElement).toHaveClass("s-badge-brand");
    expect(parentElement).toHaveClass("s-badge-large");
    expect(parentElement).toHaveClass("s-badge-dark");
    expect(parentElement).toHaveClass("s-radius-small");
    expect(parentElement).toHaveClass("custom-class");
  });
});
