import { screen, render } from '../../test-utils';
import { DarkMode } from './dark-mode';

/**
 * Alternatively to passing the AppProviders wrapper to the render function, you can also use the custom render function.
 * The official docs explain how it is done: https://testing-library.com/docs/react-testing-library/setup#custom-render
 *
 * In a nutshell, the custom render function is a superset of the default render function from the testing library.
 * In the custom render function, we can set up the providers that we want to wrap around the component that we are testing,
 * which makes the testing setup reusable across multiple tests and stays consistent.
 *
 * The test in this file is identical to the one in section 09.provider-testing, but instead of passing the AppProviders wrapper,
 * we use the custom render function from "test-utils.tsx", which handles the wrapper internally
 */
describe('DarkMode', () => {
  it('renders correctly', () => {
    render(<DarkMode />);

    const darkModeTextEl = screen.getByRole('heading', { level: 3 });
    // The useTheme hook returns a light theme by default, so the text content will be "light mode" if we don't pass the AppProviders wrapper
    // The AppProviders wrapper will set the theme to dark mode, so the text content will be "dark mode"
    expect(darkModeTextEl).toHaveTextContent('dark mode');
  });
});
