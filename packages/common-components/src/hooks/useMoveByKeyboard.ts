import { useEffect, useRef, useState } from 'react';

const useMoveByKeyboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [selectIndex, setSelectedIndex] = useState<number | null>(null);

  const onKeyboardDown = (event: globalThis.KeyboardEvent) => {
    const maximum = ref.current?.childNodes.length as number;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSelectedIndex((prev: number | null) => {
        if (prev === null) {
          return 0;
        }
        return (prev + 1) % maximum;
      });
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelectedIndex((prev: number | null) => {
        if (prev === 0 || prev === null) {
          return maximum - 1;
        }
        return (prev - 1) % maximum;
      });
    }
  };

  useEffect(() => {
    if (ref.current && selectIndex !== null) {
      const button = ref.current?.childNodes[selectIndex]
        ?.firstChild as HTMLButtonElement;
      button.focus();
    }
  }, [selectIndex]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyboardDown);

    return () => {
      document.removeEventListener('keydown', onKeyboardDown);
    };
  }, []);

  return ref;
};

export default useMoveByKeyboard;
