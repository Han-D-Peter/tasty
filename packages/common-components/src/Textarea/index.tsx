import {
  CSSProperties,
  forwardRef,
  TextareaHTMLAttributes,
  useMemo,
} from 'react';

import { css, useTheme } from '@emotion/react';

import { Color, Size } from '../Button';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  /**
   * This property affects the size of the input height.
   */
  size?: Size;
  /**
   * When input is focused, you can set a line color on border of Input.
   */
  focusBorderLine?: Color;
  /**
   * When Something get wrong. border will be show errorBorder.
   * You can set a line color of error border.
   */
  errorBorderLine?: Color;
  /**
   * This property for user"s typing is wrong.
   */
  isInvalid?: boolean;
  /**
   * This is placeholder text css property
   */
  placeholderStyle?: CSSProperties;
};
const defaultTextareStyle = css`
  resize: vertical;
`;
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      focusBorderLine = 'blue',
      errorBorderLine = 'red',
      placeholderStyle = { color: '#757575' },
      isInvalid,
      ...args
    },
    ref
  ) => {
    const theme = useTheme();
    const inputPlaceholderStyle = useMemo(
      () => css`
        &::placeholder {
          ${{ ...placeholderStyle }}
        }
      `,
      [placeholderStyle]
    );
    const inputOutlineSelectorStyle = useMemo(
      () => css`
        border: 1px solid
          ${isInvalid ? theme.btnActionColor[errorBorderLine].basic : '#CBD5E0'};
        &:focus {
          ${!isInvalid &&
          css`
            outline: none;
            border: 1px solid ${theme.btnActionColor[focusBorderLine].basic};
          `}
        }
      `,
      [isInvalid, errorBorderLine, theme, focusBorderLine]
    );
    return (
      <textarea
        css={[
          defaultTextareStyle,
          inputOutlineSelectorStyle,
          inputPlaceholderStyle,
        ]}
        ref={ref}
        {...args}
      />
    );
  }
);
export default Textarea;
