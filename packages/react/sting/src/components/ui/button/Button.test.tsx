import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Button } from "."; // Adjust the import path to your Button stories file

describe("Button Component", () => {
  it("renders the primary button correctly", () => {
    render(<Button variant="primary">Primary Button</Button>);
    const buttonElement = screen.getByRole("button", {
      name: /primary button/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn btn-primary");
  });

  it("renders the neutral button correctly", () => {
    render(<Button variant="neutral">Neutral Button</Button>);
    const buttonElement = screen.getByRole("button", {
      name: /neutral button/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn btn-neutral");
  });

  //   it('handles click events', () => {
  //     const handleClick = jest.fn();
  //     render(<Button onClick={handleClick}>Click Me</Button>);
  //     const buttonElement = screen.getByRole('button', { name: /click me/i });
  //     fireEvent.click(buttonElement);
  //     expect(handleClick).toHaveBeenCalledTimes(1);
  //   });
});
