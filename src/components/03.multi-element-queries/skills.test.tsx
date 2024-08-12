import { render, screen } from "@testing-library/react";

import { Skills } from "./skills";

/**
 * Here we are using the getAllByRole query to get all the list items in the Skills component.
 * The getAllBy.. queries are similar as the single element queries: `src/components/02.single-element-queries/job-application-form.test.tsx`
 *
 * The full list is (in order of importance):
 * getAllByRole
 * getAllByLabelText
 * getAllByPlaceholderText
 * getAllByText
 * getAllByDisplayValue
 * getAllByAltText
 * getAllByTitle
 * getAllByTestId
 */
describe("Skills", () => {
  const skills = ["React", "TypeScript", "Jest"];

  it("renders correctly", () => {
    render(<Skills />);

    const listEl = screen.getByRole("list");
    expect(listEl).toBeInTheDocument();
  });

  it("render a list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemEls = screen.getAllByRole("listitem");
    expect(listItemEls).toHaveLength(skills.length);
  });

  it("render a list of skills with correct text", () => {
    render(<Skills skills={skills} />);

    const listItemEls = screen.getAllByRole("listitem");

    listItemEls.forEach((listItemEl, index) => {
      expect(listItemEl).toHaveTextContent(skills[index]);
    });
  });
});
