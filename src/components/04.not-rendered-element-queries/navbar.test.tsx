import { render, screen } from "@testing-library/react";

import { Navbar } from "./navbar";

/** 
 * To query elements that are potentially not rendered by default, we can use the queryBy.. queries.
 * queryBy.. queries return null if the element is not found, so we can use this to check if the element is not rendered.
 * 
 * The full list is (in order of importance):
 * queryByRole
 * queryByLabelText
 * queryByPlaceholderText
 * queryByText
 * queryByDisplayValue
 * queryByAltText
 * queryByTitle
 * queryByTestId
 *
 * For multiple elements, we can use the queryAllBy.. queries (same list as above).
 */
describe("Navbar", () => {
  it("renders correctly", () => {
    render(<Navbar />);

    const listEl = screen.getByRole("navigation");
    expect(listEl).toBeInTheDocument();
  });

  it("renders a login button", () => {
    render(<Navbar />);

    // We use getByRole as the button should be rendered by default (so it throws no error)
    const loginButtonEl = screen.getByRole("button", { name: "Log in" });
    expect(loginButtonEl).toBeInTheDocument();
  });

  it("does not render a log out button", () => {
    render(<Navbar />);

    // We can't use getByRole as the button is not found (so it throws an error). 
    // We use queryByRole instead which renders null if the element is not found.
    const logoutButtonEl = screen.queryByRole("button", { name: "Log out" });
    expect(logoutButtonEl).not.toBeInTheDocument();
  });
});
