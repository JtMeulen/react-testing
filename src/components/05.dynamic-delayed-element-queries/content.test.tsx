import { render, screen } from "@testing-library/react";

import { Content } from "./content";

/**
 * When elements are loaded asynchronously, we need to wait for them to be rendered before querying them.
 * To do this we can utilize the findBy.. queries, which are async and will wait for the element to appear.
 * findBy returns a Promise that resolves when the element is found, or rejects if the element is not found (after default 1000ms).
 *
 * The full list is (in order of importance):
 * findByRole
 * findByLabelText
 * findByPlaceholderText
 * findByText
 * findByDisplayValue
 * findByAltText
 * findByTitle
 * findByTestId
 *
 * For multiple elements, we can use the findAllBy.. queries (same list as above).
 */
describe("Content", () => {
  it("renders correctly", () => {
    render(<Content />);

    const mainEl = screen.getByRole("main");
    expect(mainEl).toBeInTheDocument();
  });

  it("renders renders the data after the query", async () => {
    render(<Content />);

    // Finding by text as findByRole does not support "paragraph" role
    const dataEl = await screen.findByText(
      "Hello world!",
      {},
      { timeout: 2000 } // Override the default 1000ms
    );
    expect(dataEl).toBeInTheDocument();
  });
});
