import { forwardRef, InputHTMLAttributes, useMemo } from 'react';

import { css, useTheme } from '@emotion/react';

import { getCheckboxColorCode } from '../../utils/utils';
import { Color, Size } from '../Button';

export type ToggleProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * This is input color style.
   */
  colorScheme?: Color;

  /**
   * How large should the button be? default: 'md'
   */
  size?: Size;
};

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ colorScheme = 'teal', size = 'md', ...args }, ref) => {
    const theme = useTheme();

    const toggleSizeStyle = useMemo(
      () => css`
        ${size === 'lg' &&
        css`
          width: 36px;
          height: 17px;
          &:checked {
            ::before {
              left: 18px;
            }
          }
          ::before {
            width: 24px;
            height: 24px;
          }
        `}
        ${size === 'md' &&
        css`
          width: 30px;
          height: 14px;
          &:checked {
            ::before {
              left: 15px;
            }
          }
          ::before {
            width: 20px;
            height: 20px;
          }
        `}
        ${size === 'sm' &&
        css`
          width: 24px;
          height: 12px;
          &:checked {
            ::before {
              left: 12px;
            }
          }
          &::before {
            width: 17px;
            height: 17px;
          }
        `}
        ${size === 'xs' &&
        css`
          width: 18px;
          height: 8px;
          &:checked {
            ::before {
              left: 9px;
            }
          }
          &::before {
            width: 13px;
            height: 13px;
          }
        `}
      `,
      [size]
    );

    const toggleStyle = useMemo(
      () => css`
        position: relative;
        appearance: none;
        outline: none;
        border-radius: 20px;
        background: #c2c2c2;
        transition: 0.2s;
        &:checked {
          background: ${getCheckboxColorCode(theme.colors, colorScheme, 2)};
          ::before {
            background: ${getCheckboxColorCode(theme.colors, colorScheme)};
          }
        }
        &::before {
          content: '';
          position: absolute;
          border-radius: 20px;
          top: -3.6px;
          left: -1px;
          background: #f5f5f5;
          transform: scale(1);
          box-shadow: 0 2px 5px rgb(0, 0, 0, 0.2);
          transition: 0.2s;
        }
        &:disabled {
          background: #cac9c9;
          ::before {
            background: rgb(250, 250, 250);
          }
        }
      `,
      [colorScheme, theme]
    );

    return (
      <input
        id={args.id}
        css={[toggleStyle, toggleSizeStyle]}
        type="checkbox"
        ref={ref}
        {...args}
      />
    );
  }
);

export default Toggle;
