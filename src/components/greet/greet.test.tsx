/**
 * TDD: The Greet component should render the text 'Hello', and if a name prop is passed, it should render 'Hello {name}'.
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("greet renders with a name", () => {
  render(<Greet name="Joe" />);
  const textElement = screen.getByText("Hello Joe");
  expect(textElement).toBeInTheDocument();
});
