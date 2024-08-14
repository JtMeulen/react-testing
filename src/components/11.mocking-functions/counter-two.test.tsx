import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { CounterTwo } from './counter-two';

describe('CounterTwo', () => {
  it('renders correctly', () => {
    render(<CounterTwo count={0} />);

    const headingEl = screen.getByRole('heading', { level: 1 });
    expect(headingEl).toBeInTheDocument();
  });

  it('handles the increment and decrement buttons correctly', async () => {
    const mockIncrementHandler = jest.fn();
    const mockDecrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={mockIncrementHandler}
        handleDecrement={mockDecrementHandler}
      />,
    );

    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    const decrementBtn = screen.getByRole('button', { name: /decrement/i });

    // Optionally checking if these are rendered. We can asume they are though, as we will perform user actions on them
    expect(incrementBtn).toBeInTheDocument();
    expect(decrementBtn).toBeInTheDocument();

    await user.click(incrementBtn);
    await user.click(decrementBtn);

    expect(mockIncrementHandler).toHaveBeenCalledTimes(1);
    expect(mockDecrementHandler).toHaveBeenCalledTimes(1);
  });
});
