import { render, screen, logDOM, logRoles } from '@testing-library/react';

import { Footer } from './footer';

/**
 * Debugging test can be done by logging the output of the rendered component.
 *
 * There are two ways to do this:
 * use the debug function from the screen method (screen.debug())
 * or use logDOM or logRoles from RTL
 *
 * Remove the .skip from the test to run it (we dont want to see this every time)
 */
describe.skip('Footer', () => {
  it('renders correctly', () => {
    render(<Footer />);

    const footerEl = screen.getByRole('contentinfo');
    expect(footerEl).toBeInTheDocument();
  });

  // We will show the debug output of the screen object before and after useEffect is triggered to show the difference
  it('shows debug output using screen.debug()', async () => {
    render(<Footer />);

    screen.debug();
    const linkEl = await screen.findByRole('link');
    expect(linkEl).toBeInTheDocument();
    screen.debug();
  });

  // To log the roles of the rendered component, we can use the logRoles function from RTL
  // We can also log the complete DOM using logDOM.
  // We need to store the return value of the render method to do so
  it('shows debug output using logDOM and logRoles', async () => {
    const view = render(<Footer />);

    logDOM(view.container);
    logRoles(view.container);

    const linkEl = await screen.findByRole('link');
    expect(linkEl).toBeInTheDocument();

    logDOM(view.container);
    logRoles(view.container);
  });
});
