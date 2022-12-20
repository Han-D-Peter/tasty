import { forwardRef, useMemo, ReactElement } from 'react';

import { css } from '@emotion/react';

export type StackProps = {
  direction?: 'column' | 'row';
  gap?: number;
  divider?: ReactElement;
};

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ direction = 'row', children }, ref) => {
    const directionStyle = useMemo(
      () => css`
        ${direction === 'column' &&
        css`
          display: flex;
        `}
      `,
      [direction]
    );
    return (
      <div ref={ref} css={directionStyle}>
        {children}
      </div>
    );
  }
);

export default Stack;
