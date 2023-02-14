import { KeyboardEvent, useEffect, useRef, useState } from 'react';

const useMoveByKeyboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [selectIndex, setSelectedIndex] = useState(0);

  const onKeyboardDown = (event: globalThis.KeyboardEvent) => {
    const maximum = ref.current?.childNodes.length as number;
    if (event.key === 'ArrowDown') {
      setSelectedIndex((prev: number) => (prev + 1) % maximum);
    }
    if (event.key === 'ArrowUp') {
      setSelectedIndex((prev: number) => {
        if (prev === 0) {
          return maximum - 1;
        }
        return (prev - 1) % maximum;
      });
    }
  };

  useEffect(() => {
    if (ref.current) {
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
