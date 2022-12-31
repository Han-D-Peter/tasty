import { forwardRef, useMemo, ReactNode } from 'react';

import { css } from '@emotion/react';

type Globals =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset';

export type FlexProps = {
  flexDirection?: Globals | 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexFlow?:
    | Globals
    | 'column'
    | 'column-reverse'
    | 'nowrap'
    | 'row'
    | 'row-reverse'
    | 'wrap'
    | 'wrap-reverse';

  flexWrap?: Globals | 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right';
  alignItems?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'start'
    | 'end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline';
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  children?: ReactNode;
};

const defaultStyle = css`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      flexDirection,
      flexFlow,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      gap,
      rowGap,
      columnGap,
    },
    ref
  ) => {
    const flexStyle = useMemo(
      () => css`
        flex-direction: ${flexDirection};
        flex-flow: ${flexFlow};
        flex-wrap: ${flexWrap};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        align-content: ${alignContent};
        gap: ${gap};
        row-gap: ${rowGap};
        column-gap: ${columnGap};
      `,
      [
        flexDirection,
        flexFlow,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        gap,
        rowGap,
        columnGap,
      ]
    );
    return (
      <div ref={ref} css={[defaultStyle, flexStyle]}>
        {children}
      </div>
    );
  }
);

export default Flex;
