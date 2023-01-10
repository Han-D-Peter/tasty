import { forwardRef, ReactElement, SelectHTMLAttributes, useMemo } from 'react';

import { css, useTheme } from '@emotion/react';

import { getCheckboxColorCode } from '../../utils/utils';
import { Color, Size } from '../Button/index';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactElement<HTMLOptionElement>[];
  size?: Size;
  placeholder: string;
  colorScheme?: Color;
  icon?: ReactElement;
  variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
};

const defaultSelectStyle = css`
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-left: 10px;
`;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      children,
      size = 'md',
      colorScheme = 'teal',
      placeholder = '--select--',
      icon,
      ...args
    },
    ref
  ) => {
    const theme = useTheme();
    const sizeStyle = useMemo(
      () => css`
        ${size === 'lg' &&
        css`
          ${theme.inputSize.lg}
        `}
        ${size === 'md' &&
        css`
          ${theme.inputSize.md}
        `}
        ${size === 'sm' &&
        css`
          ${theme.inputSize.sm};
        `}
        ${size === 'xs' &&
        css`
          ${theme.inputSize.xs}
        `}
      `,
      [size]
    );

    const iconStyle = useMemo(
      () => css`
        top: 0;
        width: 100%;
        position: absolute;
        ${sizeStyle}
        display: flex;
        justify-content: end;
        align-items: center;
      `,
      [sizeStyle]
    );

    const colorStyle = useMemo(
      () => css`
        border-color: ${getCheckboxColorCode(theme.colors, colorScheme)};
        &:focus-within {
          border-color: ${getCheckboxColorCode(theme.colors, colorScheme, 6)};
          border-width: 2px;
        }
      `,
      [colorScheme]
    );

    return (
      <div
        css={css`
          position: relative;
        `}
      >
        <select
          ref={ref}
          css={[defaultSelectStyle, sizeStyle, colorStyle]}
          {...args}
        >
          {placeholder && <option>{placeholder}</option>}
          {children}
        </select>
        <div css={iconStyle}>{icon}</div>
      </div>
    );
  }
);

export default Select;
