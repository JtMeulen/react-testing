/**
 * TDD: The Greet component should render the text 'Hello', and if a name prop is passed, it should render 'Hello {name}'.
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  // Instead of using the test() function, we can use the it() function to write the test.
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
  
  test("renders with a name", () => {
    render(<Greet name="Joe" />);
    const textElement = screen.getByText("Hello Joe");
    expect(textElement).toBeInTheDocument();
  });
});