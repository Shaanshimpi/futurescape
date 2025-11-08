import { useCallback, useState } from 'react';

export const useFilterState = <T extends string>(initial: T | 'All' = 'All') => {
  const [value, setValue] = useState<T | 'All'>(initial);

  const select = useCallback((next: T | 'All') => {
    setValue(next);
  }, []);

  const reset = useCallback(() => setValue('All'), []);

  const isActive = useCallback((candidate: T | 'All') => candidate === value, [value]);

  return {
    value,
    select,
    reset,
    isActive,
  };
};

