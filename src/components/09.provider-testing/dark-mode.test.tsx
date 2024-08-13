import { screen, render } from "@testing-library/react";
import { AppProviders } from "../../providers/AppProviders";
import { DarkMode } from "./dark-mode";

/**
 * Whenever the component that is tested relies on a provider, like the DarkMode component in this case, or context providers,
 * you need to wrap the component in the 'wrapper' field when rendering it in the test.
 *
 */
describe("DarkMode", () => {
  it("renders correctly", () => {
    render(<DarkMode />, { wrapper: AppProviders });

    const darkModeTextEl = screen.getByRole("heading", { level: 3 });
    // The useTheme hook returns a light theme by default, so the text content will be "light mode" if we don't pass the AppProviders wrapper
    // The AppProviders wrapper will set the theme to dark mode, so the text content will be "dark mode" 
    expect(darkModeTextEl).toHaveTextContent("dark mode");
  });
});
