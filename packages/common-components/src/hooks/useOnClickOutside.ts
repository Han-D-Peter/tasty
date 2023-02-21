import { RefObject, useCallback, useEffect, useState } from 'react';

const useOnClickOutside = (
  ref: RefObject<HTMLElement> | undefined,
  callback: (event: Event) => void
) => {
  const [isTouchEvent, setTouchEvent] = useState(false);
  const eventType = isTouchEvent ? 'touchend' : 'click';

  const handleEvent = useCallback(
    (event: Event) => {
      if (event.type === 'click' && isTouchEvent) {
        return;
      }

      if (ref?.current && event.target !== null) {
        if (!ref.current.contains(event.target as Node)) {
          callback(event);
        }
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener(eventType, handleEvent);

    return () => {
      document.removeEventListener(eventType, handleEvent);
    };
  });

  useEffect(() => {
    setTouchEvent('ontouchstart' in document.documentElement);
  }, []);
};

export default useOnClickOutside;
