import { forwardRef, InputHTMLAttributes, useMemo } from 'react';

import { css, useTheme } from '@emotion/react';

import { Color, Size } from '../Button';

import { getCheckboxColorCode } from './utils';

export type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * domElement id
   */
  id?: string;

  /**
   * Whether checkbox is abled or not.
   */
  isDisabled?: boolean;

  /**
   * This is input color style.
   */
  colorScheme?: Color;

  /**
   * How large should the button be? default: 'md'
   */
  size?: Size;

  /**
   * Gap amount of checkbox between text.
   */
  spacing?: number;

  /**
   * Text aside from checkbox.
   */
  text?: string;
};

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  (
    {
      id,
      colorScheme = 'teal',
      size = 'md',
      spacing,
      text,
      isDisabled = false,
      ...args
    },
    ref
  ) => {
    const theme = useTheme();

    const inputCheckboxDefaultStyle = useMemo(
      () => css`
        appearance: none;
        ${size === 'md' &&
        css`
          width: 1.5rem;
          height: 1.5rem;
        `}
        ${size === 'lg' &&
        css`
          width: 1.7rem;
          height: 1.7rem;
        `}
        ${size === 'sm' &&
        css`
          width: 1.3rem;
          height: 1.3rem;
        `}
        ${size === 'xs' &&
        css`
          width: 1.1rem;
          height: 1.1rem;
        `}
       
        border-radius: 0.35rem;
        ${!isDisabled &&
        css`
          border: 1.5px solid ${theme.colors.gray.gray4};
          background-color: ${theme.colors.gray.gray3};
        `}
        ${isDisabled &&
        css`
          border: 1.5px solid ${getCheckboxColorCode(theme.colors, colorScheme)};
          &:checked {
            border-color: transparent;
            background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
            background-size: 100% 100%;
            background-position: 50%;
            background-repeat: no-repeat;
            background-color: ${getCheckboxColorCode(
              theme.colors,
              colorScheme
            )};
          }
        `}
      `,
      [colorScheme, size, isDisabled]
    );

    const labelCheckboxStyle = useMemo(
      () => css`
        display: flex;
        align-items: center;
        user-select: none;
      `,
      []
    );

    const paragraphStyle = useMemo(
      () => css`
        margin-left: ${spacing ? 0.25 * spacing : 0.25}rem;
      `,
      [spacing]
    );

    return (
      <label css={labelCheckboxStyle}>
        <input
          id={id}
          css={inputCheckboxDefaultStyle}
          type="checkbox"
          ref={ref}
          {...args}
        />
        {text && <p css={paragraphStyle}>{text}</p>}
      </label>
    );
  }
);

export default CheckBox;
