import React, {
  forwardRef,
  useMemo,
  ReactElement,
  HTMLAttributes,
} from 'react';

import { css } from '@emotion/react';

type StackProps = HTMLAttributes<HTMLDivElement> & {
  direction?: 'column' | 'row';
  gap?: number;
  divider?: ReactElement;
};

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ direction = 'row', gap, divider, children }, ref) => {
    const directionStyle = useMemo(
      () => css`
        ${direction === 'column' &&
        css`
          display: flex;
        `}
      `,
      [direction]
    );
    const gapStyle = useMemo(
      () => css`
        margin-bottom: ${gap}px;
      `,
      [gap]
    );
    return (
      <div ref={ref} css={directionStyle}>
        {React.Children.map(children, child => (
          <div>
            <div css={[gapStyle]} />
            <div className="Row">{child}</div>
            {divider && divider}
          </div>
        ))}
      </div>
    );
  }
);

export default Stack;
