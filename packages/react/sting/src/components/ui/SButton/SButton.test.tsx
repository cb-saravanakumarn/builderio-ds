import { render, screen, fireEvent } from "@testing-library/react";
import { SButton } from ".";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("SButton Component", () => {
  // Render tests
  it("renders the primary button correctly", () => {
    render(<SButton variant="primary">Primary Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /primary button/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("s-btn s-btn-primary");
  });

  it("renders the neutral button correctly", () => {
    render(<SButton variant="neutral">Neutral Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /neutral button/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("s-btn s-btn-neutral");
  });

  it("renders the danger button correctly", () => {
    render(<SButton variant="danger">Danger Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /danger button/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("s-btn s-btn-danger");
  });

  it("renders the warning button correctly", () => {
    render(<SButton variant="warning">Warning Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /warning button/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("s-btn s-btn-warning");
  });

  it("renders the ghost button correctly", () => {
    render(<SButton variant="ghost">Ghost Button</SButton>);
    const buttonElement = screen.getByRole("button", { name: /ghost button/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("s-btn s-btn-ghost");
  });

  it("renders the success button correctly", () => {
    render(<SButton variant="success">Success Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /success button/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("s-btn s-btn-success");
  });

  // Style type tests
  it("renders an outline style button correctly", () => {
    render(<SButton styleType="outline">Outline Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /outline button/i,
    });
    expect(buttonElement).toHaveClass("s-btn-outline");
  });

  it("renders a text style button correctly", () => {
    render(<SButton styleType="text">Text Button</SButton>);
    const buttonElement = screen.getByRole("button", { name: /text button/i });
    expect(buttonElement).toHaveClass("s-btn-text");
  });

  it("renders an icon style button correctly", () => {
    render(
      <SButton styleType="icon" aria-label="Icon Button">
        <span>Icon</span>
      </SButton>
    );
    const buttonElement = screen.getByRole("button", { name: /icon button/i });
    expect(buttonElement).toHaveClass("s-btn-icon");
  });

  // Size tests
  it("applies the correct size class when size is small", () => {
    render(<SButton size="small">Small Button</SButton>);
    const buttonElement = screen.getByRole("button", { name: /small button/i });
    expect(buttonElement).toHaveClass("s-btn-small");
  });

  it("applies the correct size class when size is regular", () => {
    render(<SButton size="regular">Regular Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /regular button/i,
    });
    expect(buttonElement).not.toHaveClass("s-btn-small");
    expect(buttonElement).not.toHaveClass("s-btn-large");
  });

  it("applies the correct size class when size is large", () => {
    render(<SButton size="large">Large Button</SButton>);
    const buttonElement = screen.getByRole("button", { name: /large button/i });
    expect(buttonElement).toHaveClass("s-btn-large");
  });

  // State tests
  it("renders the button as disabled", () => {
    render(<SButton disabled>Disabled Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /disabled button/i,
    });
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass("s-btn-disabled");
    expect(buttonElement).toHaveAttribute("aria-disabled", "true");
  });

  it("renders the loading state correctly", () => {
    render(<SButton loading>Loading Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /loading button/i,
    });
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveAttribute("aria-disabled", "true");
    expect(buttonElement).toHaveAttribute("data-state", "loading");
    expect(screen.getByRole("button")).toContainHTML(
      '<svg class="s-animate-spin'
    );
  });

  // Width tests
  it("renders the full-width button", () => {
    render(<SButton fullWidth>Full Width Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /full width button/i,
    });
    expect(buttonElement).toHaveClass("s-btn-full-width");
  });

  // Slot (asChild) tests
  it("renders a link when asChild prop is true", () => {
    render(
      <SButton asChild>
        <a href="/home">Link Button</a>
      </SButton>
    );
    const linkElement = screen.getByRole("link", { name: /link button/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/home");
  });

  // Icon tests
  it("renders the icon on the left when iconPosition is left", () => {
    render(
      <SButton
        icon={<span data-testid="test-icon">Icon</span>}
        iconPosition="left"
      >
        Button with Left Icon
      </SButton>
    );
    const buttonElement = screen.getByRole("button", {
      name: /button with left icon/i,
    });
    const iconElement = screen.getByTestId("test-icon");
    expect(buttonElement).toContainElement(iconElement);
    expect(buttonElement.firstChild?.firstChild).toContainElement(iconElement);
  });

  it("renders the icon on the right when iconPosition is right", () => {
    render(
      <SButton
        icon={<span data-testid="test-icon">Icon</span>}
        iconPosition="right"
      >
        Button with Right Icon
      </SButton>
    );
    const buttonElement = screen.getByRole("button", {
      name: /button with right icon/i,
    });
    const iconElement = screen.getByTestId("test-icon");
    expect(buttonElement).toContainElement(iconElement);
    // The icon should be after the text
    expect(buttonElement.firstChild?.lastChild).toContainElement(iconElement);
  });

  // Rounded tests
  it("applies the correct rounded class", () => {
    render(<SButton rounded="full">Rounded Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /rounded button/i,
    });
    expect(buttonElement).toHaveClass("s-rounded-full");
  });

  // Event tests
  it("fires onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<SButton onClick={handleClick}>Clickable Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /clickable button/i,
    });

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not fire onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <SButton onClick={handleClick} disabled>
        Disabled Button
      </SButton>
    );
    const buttonElement = screen.getByRole("button", {
      name: /disabled button/i,
    });

    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("does not fire onClick when loading", () => {
    const handleClick = vi.fn();
    render(
      <SButton onClick={handleClick} loading>
        Loading Button
      </SButton>
    );
    const buttonElement = screen.getByRole("button", {
      name: /loading button/i,
    });

    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  // Type tests
  it("renders with the default type of button", () => {
    render(<SButton>Default Type Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /default type button/i,
    });
    expect(buttonElement).toHaveAttribute("type", "button");
  });

  it("renders with specified type", () => {
    render(<SButton type="submit">Submit Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /submit button/i,
    });
    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  // Additional class tests
  it("applies additional className", () => {
    render(<SButton className="custom-class">Custom Class Button</SButton>);
    const buttonElement = screen.getByRole("button", {
      name: /custom class button/i,
    });
    expect(buttonElement).toHaveClass("custom-class");
    expect(buttonElement).toHaveClass("s-btn"); // Still has base class
  });
});
