import { useCallback, useEffect, useMemo, useState } from 'react';

interface PaginationConfig {
  total: number;
  perPage?: number;
}

export const usePagination = ({ total, perPage = 6 }: PaginationConfig) => {
  const [page, setPage] = useState(1);
  const totalPages = useMemo(() => Math.max(1, Math.ceil(total / perPage)), [total, perPage]);

  const next = useCallback(() => setPage((current) => Math.min(current + 1, totalPages)), [totalPages]);
  const previous = useCallback(() => setPage((current) => Math.max(current - 1, 1)), []);
  const reset = useCallback(() => setPage(1), []);

  useEffect(() => {
    setPage((current) => Math.min(current, totalPages));
  }, [totalPages]);

  return {
    page,
    perPage,
    totalPages,
    setPage,
    next,
    previous,
    reset,
    slice<T>(items: T[]): T[] {
      return items.slice((page - 1) * perPage, page * perPage);
    },
  };
};

