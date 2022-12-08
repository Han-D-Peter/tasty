import { useMemo } from 'react';

import { css, keyframes, useTheme } from '@emotion/react';

// eslint-disable-next-line import/no-cycle
import { Color, Size } from '../Button/index';

export interface SpinnerProps {
  color: Color;
  size: Size;
}

const Spinner = ({ color = 'teal', size = 'md' }: SpinnerProps) => {
  const theme = useTheme();
  const spinnerStyle = useMemo(() => {
    const rotation = keyframes`
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    `;
    return css`
      box-sizing: border-box;
      width: ${theme.btnSize[size].width / 4}px;
      height: ${theme.btnSize[size].width / 4}px;
      border-radius: 50%;
      border: ${theme.btnSize[size].width / 20}px solid transparent;
      border-top-color: ${color};
      border-bottom-color: ${color};
      animation: ${rotation} 0.8s ease infinite;
    `;
  }, [color, size, theme]);

  return (
    <div>
      <div css={spinnerStyle} />
    </div>
  );
};

export default Spinner;
