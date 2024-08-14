import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

/**
 * Since custom hooks can only be rendered in a functional component,
 * you need to use the 'renderHook' function from the '@testing-library/react' library.
 *
 * The 'renderHook' function takes the custom hook as the first argument and an optional object as the second argument, in which you can store the initial props.
 * the renderHook function returns an object with the 'result' field, which contains the return values of the custom hook.
 *
 * Calling the 'act' function from the '@testing-library/react' library is necessary when you want to update
 * the state of the custom hook.
 */
describe('useCounter', () => {
  it('returns the default initial count', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  // When passing props to the hook, you need to use the 'initialProps' field in the 'renderHook' function
  it('returns the initialValue as the count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialValue: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  it('increments the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
    act(() => result.current.increment());
    expect(result.current.count).toBe(2);
  });

  it('decrements the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-2);
  });
});
