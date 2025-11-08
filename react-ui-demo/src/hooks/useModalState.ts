import { useCallback, useState } from 'react';

export const useModalState = (initial = false) => {
  const [open, setOpen] = useState(initial);

  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);
  const onToggle = useCallback(() => setOpen((prev) => !prev), []);

  return { open, onOpen, onClose, onToggle };
};

