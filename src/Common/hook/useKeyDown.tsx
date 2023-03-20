import { useEffect } from 'react';

export function useKeyDown(cb: (e: any) => void) {
  useEffect(() => {
    window.addEventListener('keydown', cb, false);

    return () => {
      window.removeEventListener('keydown', cb, false);
    };
  }, [cb]);
}
