import { useCallback, useState } from 'react';

const useIsShown = (initialValue?: boolean) => {
  const [boolean, setBoolean] = useState(initialValue ?? false);

  const turnTrue = useCallback(() => {
    setBoolean(true);
  }, []);

  const turnFalse = useCallback(() => {
    setBoolean(false);
  }, []);

  return { boolean, turnTrue, turnFalse } as const;
};

export default useIsShown;
