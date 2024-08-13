import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

import { Counter } from "./counter";

/**
 * Here we are using the user-event library for convenient user interactions. 
 * Before each test, setup the user (user.setup), and perform any actions you'd need.
 * The click method is part of the Convenience API that wraps the Pointer API: https://testing-library.com/docs/user-event/convenience
 * 
 * Alternatively to user-event, the Pointer API is available for more specific mouse clicks (e.g. click and hold, sequence left and right, etc):
 * https://testing-library.com/docs/user-event/pointer/ 
 */
describe("Counter", () => {
  it("renders correctly", () => {
    render(<Counter />);

    const headingEl = screen.getByRole("heading", { name: /Count:/ });
    expect(headingEl).toBeInTheDocument();

    const incrementButtonEl = screen.getByRole("button", { name: "Increment" });
    expect(incrementButtonEl).toBeInTheDocument();
  });

  it("renders a count of 0", () => {
    render(<Counter />);

    const headingEl = screen.getByRole("heading", { level: 1 });
    expect(headingEl).toHaveTextContent("Count: 0");
  });

  it("renders a count of 1 when the increment button is clicked once", async () => {
    user.setup();
    render(<Counter />);

    const incrementButtonEl = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButtonEl);

    const headingEl = screen.getByRole("heading", { level: 1 });
    expect(headingEl).toHaveTextContent("1");
  });

  it("renders a count of 3 when the increment button is clicked thrice", async () => {
    user.setup();
    render(<Counter />);

    const incrementButtonEl = screen.getByRole("button", { name: "Increment" });

    await user.tripleClick(incrementButtonEl);

    const headingEl = screen.getByRole("heading", { level: 1 });
    expect(headingEl).toHaveTextContent("3");
  })

  it("interacts with the pointer API", async () => {
    user.setup();
    render(<Counter />);

    const incrementButtonEl = screen.getByRole("button", { name: "Increment" });

    await user.pointer({keys: '[MouseLeft]', target: incrementButtonEl});

    const headingEl = screen.getByRole("heading", { level: 1 });
    expect(headingEl).toHaveTextContent("1");
  })
});
