import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Input } from './input';

/**
 * We are using the user-event library for convenient user interactions using the keyboard.
 * Before each test, setup the user (user.setup), and perform any actions you'd need.
 * The type method is part of the Convenience API that wraps the Keyboard API: https://testing-library.com/docs/user-event/convenience
 *
 * Alternatively to user-event, the Keyboard API is available for more specific mouse clicks (e.g. press and hold, multikeys, etc):
 * https://testing-library.com/docs/user-event/keyboard
 */
describe('Input', () => {
  it('renders correctly', () => {
    render(<Input />);

    const inputEl = screen.getByRole('textbox', { name: 'Lastname' });
    expect(inputEl).toBeInTheDocument();

    const outputEl = screen.getByText(/Lastname:/);
    expect(outputEl).toBeInTheDocument();

    const clearBtnEl = screen.getByRole('button', { name: 'Clear' });
    expect(clearBtnEl).toBeInTheDocument();
  });

  it('renders the lastname in the output when typing', async () => {
    user.setup();
    render(<Input />);

    const inputEl = screen.getByRole('textbox', { name: 'Lastname' });
    await user.type(inputEl, 'Doe');
    expect(inputEl).toHaveValue('Doe');

    const outputEl = screen.getByText(/Lastname:/);
    expect(outputEl).toHaveTextContent('Doe');
  });

  it('sets focus in the correct order', async () => {
    user.setup();
    render(<Input />);

    const inputEl = screen.getByRole('textbox', { name: 'Lastname' });
    const clearBtnEl = screen.getByRole('button', { name: 'Clear' });

    await user.tab();
    expect(inputEl).toHaveFocus();
    await user.tab();
    expect(clearBtnEl).toHaveFocus();
  });

  it('clears the input when the clear button is clicked using keyboard', async () => {
    user.setup();
    render(<Input />);

    const inputEl = screen.getByRole('textbox', { name: 'Lastname' });

    await user.type(inputEl, 'Doe');

    expect(inputEl).toHaveValue('Doe');

    await user.tab();
    await user.keyboard('{enter}');

    expect(inputEl).toHaveValue('');
    const outputEl = screen.getByText(/Lastname:/);
    expect(outputEl).not.toHaveTextContent('Doe');
  });
});
