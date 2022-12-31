import { forwardRef, CSSProperties, ReactChild, useMemo } from 'react';

import { css } from '@emotion/react';

export type Color =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'cyan'
  | 'violet'
  | 'pink';
export type Size = 'xs' | 'sm' | 'md' | 'lg';
export type Variant = 'solid' | 'outline' | 'ghost' | 'link';
export type Placement = 'start' | 'end';

export type BoxProps = CSSProperties & {
  children?: ReactChild;

  /**
   * You can choose a centered position of child contents.
   */
  centered: boolean;
};

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, centered, ...args }, ref) => {
    const centeredOrNotStyle = useMemo(
      () => css`
        ${centered &&
        css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      `,
      [centered]
    );

    const defaultStyle = useMemo(
      () => css`
        ${{ ...args }}
      `,
      [args]
    );
    return (
      <div ref={ref} css={[centeredOrNotStyle, defaultStyle]}>
        {children}
      </div>
    );
  }
);

export default Box;
