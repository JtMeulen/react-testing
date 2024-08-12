import { screen, render } from "@testing-library/react";
import { JobApplicationForm } from "./job-application-form";

describe("JobApplicationForm", () => {
  // Primary form of making element queries
  // List of all roles: https://www.w3.org/TR/html-aria/#docconformance
  it("renders correctly using getByRole", () => {
    render(<JobApplicationForm />);

    const pageHeadingEl = screen.getByRole("heading", { level: 1 });
    expect(pageHeadingEl).toBeInTheDocument();
    expect(pageHeadingEl).toHaveTextContent("Job Application Form");

    const sectionHeadingEl = screen.getByRole("heading", { level: 2 });
    expect(sectionHeadingEl).toBeInTheDocument();
    expect(sectionHeadingEl).toHaveTextContent("Section 1");

    const nameInputEl = screen.getByRole("textbox", { name: "Name" }); // the name key relates to the label of the element
    expect(nameInputEl).toBeInTheDocument();

    const bioTextareaEl = screen.getByRole("textbox", { name: "Bio" });
    expect(bioTextareaEl).toBeInTheDocument();

    const locationSelectEl = screen.getByRole("combobox");
    expect(locationSelectEl).toBeInTheDocument();

    const termsCheckboxEl = screen.getByRole("checkbox");
    expect(termsCheckboxEl).toBeInTheDocument();

    const submitButtonEl = screen.getByRole("button");
    expect(submitButtonEl).toBeInTheDocument();
  });

  // Works for form elements that have a label
  it("renders correctly using getByLabelText", () => {
    render(<JobApplicationForm />);

    const nameInputEl = screen.getByLabelText("Name", { selector: "input" }); // Selector can be used to differentiate further
    expect(nameInputEl).toBeInTheDocument();

    const bioTextareaEl = screen.getByLabelText("Bio");
    expect(bioTextareaEl).toBeInTheDocument();

    const locationSelectEl = screen.getByLabelText("Job location");
    expect(locationSelectEl).toBeInTheDocument();

    const termsCheckboxEl = screen.getByLabelText(
      "I accept the terms and conditions"
    );
    expect(termsCheckboxEl).toBeInTheDocument();
  });

  // Works for form elements that have a placeholder
  it("renders correctly using getByPlaceholderText", () => {
    render(<JobApplicationForm />);

    const nameInputEl = screen.getByPlaceholderText("Fullname");
    expect(nameInputEl).toBeInTheDocument();
  });

  // Works for elements that have text content (e.g. div, span, p, etc.)
  it("renders correctly using getByText", () => {
    render(<JobApplicationForm />);

    const pageHeadingEl = screen.getByText("Job Application Form");
    expect(pageHeadingEl).toBeInTheDocument();

    // ! Alternatively, we can have substring matching
    const pageHeadingEl2 = screen.getByText("job app", { exact: false });
    expect(pageHeadingEl2).toBeInTheDocument();

    // ! Or use regex (also case-insensitive or substring matching)
    const pageHeadingEl3 = screen.getByText(/job app/i);
    expect(pageHeadingEl3).toBeInTheDocument();

    // ! And it even accepts a function that should return a boolean
    const pageHeadingEl4 = screen.getByText(
      (content, element) =>
        content.startsWith("Job App") && element?.tagName.toLowerCase() === "h1"
    );
    expect(pageHeadingEl4).toBeInTheDocument();

    const sectionHeadingEl = screen.getByText("Section 1", { selector: "h2" }); // Possible to pass options for more specificity
    expect(sectionHeadingEl).toBeInTheDocument();

    const paragraphEl = screen.getByText("All fields are mandatory");
    expect(paragraphEl).toBeInTheDocument();
  });

  // Works for form elements that have a value/defaultValue assigned
  it("renders correctly using getByDisplayValue", () => {
    render(<JobApplicationForm />);

    const nameInputEl = screen.getByDisplayValue("Joey");
    expect(nameInputEl).toBeInTheDocument();

    const bioTextareaEl = screen.getByDisplayValue("Default value text"); // Can also query based on defaultValue
    expect(bioTextareaEl).toBeInTheDocument();
  });

  // Works for elements that accept an alt attribute (e.g. img, area, input[type="image"], etc.)
  it("renders correctly using getByAltText", () => {
    render(<JobApplicationForm />);

    const imageEl = screen.getByAltText("This is the alt text");
    expect(imageEl).toBeInTheDocument();
  });

  // Works for elements that have a title attribute (e.g. <abbr>, <area>, <input>, <img>, <object>, <time>, etc.)
  it("renders correctly using getByTitle", () => {
    render(<JobApplicationForm />);

    const titleEl = screen.getByTitle("close");
    expect(titleEl).toBeInTheDocument;
  });

  it("renders correctly using getByTestId", () => {
    render(<JobApplicationForm />);

    const customEl = screen.getByTestId("custom-element");
    expect(customEl).toBeInTheDocument();
  });
});
