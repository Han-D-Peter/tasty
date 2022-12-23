import {
  forwardRef,
  CSSProperties,
  ReactChild,
  useMemo,
  HTMLAttributes,
} from 'react';

import { css } from '@emotion/react';

type BoxProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactChild;
  boxStyle?: CSSProperties;
};

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...args }, ref) => {
    const defaultStyle = useMemo(
      () => css`
        ${{ ...args.boxStyle }}
      `,
      [args.boxStyle]
    );
    return (
      <div ref={ref} css={[defaultStyle]}>
        {children}
      </div>
    );
  }
);

export default Box;
