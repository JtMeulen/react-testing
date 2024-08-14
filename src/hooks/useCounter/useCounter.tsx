import { useState } from 'react';
import { UseCounterProps } from './useCounter.types';

export const useCounter = ({ initialValue = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return { count, increment, decrement };
};
