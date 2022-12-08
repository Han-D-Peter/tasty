import {
  CSSProperties,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useMemo,
} from 'react';

import { css, useTheme } from '@emotion/react';

import { Color, Size } from '../Button';

type inputVariants = 'outline' | 'unstyled' | 'flushed' | 'filled';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * domElement id
   */
  id?: string;

  /**
   * This property affects the size of the input height.
   */
  size?: Size;

  /**
   * This is input style variant property.
   */
  variant?: inputVariants;

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
   * This property for user's typing is wrong.
   */
  isInvalid?: boolean;

  /**
   * This property is for text of placeholder.
   */
  placeholderText: string;

  /**
   * This is placeholder text css property
   */
  _placeholder?: CSSProperties;
};

const defaultInputStyle = css`
  width: 100%;
  padding-left: 10px;
`;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      id,
      variant = 'outline',
      focusBorderLine = 'blue',
      errorBorderLine = 'red',
      isInvalid = false,
      placeholderText = 'placeholder...',
      _placeholder = { color: '#757575' },
      ...args
    },
    ref
  ) => {
    const theme = useTheme();

    const inputPlaceholderStyle = useMemo(
      () => css`
        &::placeholder {
          ${{ ..._placeholder }}
        }
      `,
      [_placeholder]
    );

    const inputStyle = useMemo(
      () => css`
        ${size === 'lg' &&
        css`
          height: ${theme.inputSize.lg.height}px;
          border-radius: ${theme.inputSize.lg.borderRadius}px;
          font-size: ${theme.inputSize.lg.fontSize}px;
        `}
        ${size === 'md' &&
        css`
          height: ${theme.inputSize.md.height}px;
          border-radius: ${theme.inputSize.md.borderRadius}px;
          font-size: ${theme.inputSize.md.fontSize}px;
        `}
            ${size === 'sm' &&
        css`
          height: ${theme.inputSize.sm.height}px;
          border-radius: ${theme.inputSize.sm.borderRadius}px;
          font-size: ${theme.inputSize.sm.fontSize}px;
        `}
            ${size === 'xs' &&
        css`
          height: ${theme.inputSize.xs.height}px;
          border-radius: ${theme.inputSize.xs.borderRadius}px;
          font-size: ${theme.inputSize.xs.fontSize}px;
        `};
      `,
      [size]
    );

    const inputOutlineSelectorStyle = useMemo(
      () => css`
        border: 1px solid ${isInvalid ? errorBorderLine : '#cbd5e0'};
        &:focus {
          ${!isInvalid &&
          css`
            outline: none;
            border: 1px solid ${focusBorderLine};
          `}
        }
      `,
      [isInvalid, focusBorderLine, errorBorderLine]
    );

    const inputFilledSelectorStyle = useMemo(
      () => css`
        ${isInvalid
          ? css`
              border: 1px solid errorBorderLine;
            `
          : css`
              border: 1px solid ${theme.colors.gray.gray2};
            `}

        &:focus {
          background-color: white;
          ${!isInvalid &&
          css`
            outline: none;
            border: 1px solid ${focusBorderLine};
          `}
        }
      `,
      [isInvalid, focusBorderLine, errorBorderLine]
    );

    const inputFilledStyle = useMemo(
      () =>
        css`
          background-color: ${theme.colors.gray.gray2};
          ${inputStyle};
        `,
      [inputStyle]
    );

    const inputFlushedStyle = useMemo(
      () =>
        css`
          ${inputStyle};
          border: 0;
          border-radius: 0;
          outline: none;
          ${isInvalid
            ? css`
                border-bottom: 1px solid ${errorBorderLine};
              `
            : css`
                border-bottom: 1px solid ${theme.colors.gray.gray2};
              `}
        `,
      [inputStyle, isInvalid, errorBorderLine]
    );

    const inputFlushedSelectorStyle = useMemo(
      () => css`
        &:focus {
          outline: none;
          border-bottom: 1px solid ${focusBorderLine};
        }
      `,
      [isInvalid, focusBorderLine]
    );

    const inputUnstyledStyle = useMemo(
      () =>
        css`
          ${inputStyle};
          outline: none;
          border: 0;
        `,
      [inputStyle, isInvalid, errorBorderLine]
    );

    const inputUnstyledSelectorStyle = useMemo(
      () => css`
        &:focus {
          outline: none;
          border: 0;
        }
      `,
      [isInvalid, focusBorderLine]
    );

    if (variant === 'filled')
      return (
        <input
          css={[
            defaultInputStyle,
            inputFilledStyle,
            inputFilledSelectorStyle,
            inputPlaceholderStyle,
          ]}
          id={id}
          ref={ref}
          placeholder={placeholderText}
          {...args}
        />
      );

    if (variant === 'flushed')
      return (
        <input
          css={[
            defaultInputStyle,
            inputFlushedStyle,
            inputFlushedSelectorStyle,
            inputPlaceholderStyle,
          ]}
          id={id}
          ref={ref}
          placeholder={placeholderText}
          {...args}
        />
      );

    if (variant === 'unstyled')
      return (
        <input
          css={[
            defaultInputStyle,
            inputUnstyledStyle,
            inputUnstyledSelectorStyle,
            inputPlaceholderStyle,
          ]}
          id={id}
          ref={ref}
          placeholder={placeholderText}
          {...args}
        />
      );

    return (
      <input
        css={[
          defaultInputStyle,
          inputStyle,
          inputOutlineSelectorStyle,
          inputPlaceholderStyle,
        ]}
        id={id}
        ref={ref}
        placeholder={placeholderText}
        {...args}
      />
    );
  }
);

export default Input;
