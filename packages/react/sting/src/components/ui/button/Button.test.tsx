import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "."; // Adjust the import path to your Button component

// describe("Button Component", () => {
//   it("renders the primary button correctly", () => {
//     render(<Button variant="primary">Primary Button</Button>);
//     const buttonElement = screen.getByRole("button", {
//       name: /primary button/i,
//     });
//     expect(buttonElement).toBeInTheDocument();
//     expect(buttonElement).toHaveClass("btn btn-primary");
//   });

//     it("renders the neutral button correctly", () => {
//       render(<Button variant="neutral">Neutral Button</Button>);
//       const buttonElement = screen.getByRole("button", {
//         name: /neutral button/i,
//       });
//       expect(buttonElement).toBeInTheDocument();
//       expect(buttonElement).toHaveClass("btn btn-neutral");
//     });

//   Uncomment and adjust the following test if you have an onClick handler
//   it('handles click events', () => {
//     const handleClick = jest.fn();
//     render(<Button onClick={handleClick}>Click Me</Button>);
//     const buttonElement = screen.getByRole('button', { name: /click me/i });
//     fireEvent.click(buttonElement);
//     expect(handleClick).toHaveBeenCalledTimes(1);
//   });
// });

test("test render button", async () => {
  const handleClick = jest.fn();

  render(<Button onClick={handleClick}>Primary</Button>);

  fireEvent.click(screen.getByRole("button"));

  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(screen.getByRole("button")).toHaveTextContent("Primary");
});
