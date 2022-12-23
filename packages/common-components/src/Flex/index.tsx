import { CSSProperties, forwardRef, ReactChild, useMemo } from 'react';

import { css } from '@emotion/react';

import Box from '../Box/index';

type FlexProps = {
  children?: ReactChild[] | ReactChild | null;

  /**
   * You can inject styles as 'style' properties on react node.
   */
  boxStyle?: CSSProperties;

  /**
   * You can choose a position of contents.
   */
  centered?: boolean;

  /**
   * You can choose a direction of contents.
   */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
};

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, boxStyle, centered, direction }, ref) => {
    const flexCenteredStyles = useMemo(() => {
      if (centered) {
        return {
          justifyContent: 'center',
          alignItems: 'center',
        };
      }
      return {};
    }, [centered]);

    const flexDirectionStyles = useMemo(() => {
      if (direction) {
        return {
          flexDirection: direction,
        };
      }
      return {};
    }, [direction]);

    return (
      <Box
        ref={ref}
        boxStyle={{
          display: 'flex',
          ...flexCenteredStyles,
          ...flexDirectionStyles,
          ...boxStyle,
        }}
      >
        {children}
      </Box>
    );
  }
);

export default Flex;
