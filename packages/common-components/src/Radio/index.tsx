import { forwardRef, HTMLAttributes, useMemo } from 'react';

import { css, useTheme } from '@emotion/react';

import { getCheckboxColorCode } from '../../utils/utils';
import { Color, Size } from '../Button';

export type RadioProps = HTMLAttributes<HTMLInputElement> & {
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

  /**
   * Name is like a key of radio groups.
   */
  name: string;

  /**
   * Set value to radio box.
   */
  value: string;
};

const RadioBox = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      colorScheme = 'teal',
      size = 'md',
      spacing,
      text = 'Type question text.',
      isDisabled = false,
      name,
      value,
      ...args
    },
    ref
  ) => {
    const theme = useTheme();
    const labelRadioStyle = useMemo(
      () => css`
        ${size === 'lg' &&
        css`
          font-size: ${theme.inputSize.lg.fontSize}px;
        `}
        ${size === 'md' &&
        css`
          font-size: ${theme.inputSize.md.fontSize}px;
        `}
        ${size === 'sm' &&
        css`
          font-size: ${theme.inputSize.sm.fontSize}px;
        `}
        ${size === 'xs' &&
        css`
          font-size: ${theme.inputSize.xs.fontSize}px;
        `} 
        line-height: 2rem;
        padding: 0.2em 0.4em;
      `,
      [size]
    );

    const inputRadioDefaultStyle = useMemo(
      () => css`
        &[type='radio'] {
          vertical-align: middle;
          appearance: none;
          border-style: solid;
          border-color: ${getCheckboxColorCode(theme.colors, colorScheme)};
          border-radius: 50%;
          transition: border 0.5s ease-in-out;
          ${size === 'lg' &&
          css`
            border-width: max(2.2px, 0.125em);
            width: ${theme.radioSize.lg.size}em;
            height: ${theme.radioSize.lg.size}em;
          `}
          ${size === 'md' &&
          css`
            border-width: max(2px, 0.1em);
            width: ${theme.radioSize.md.size}em;
            height: ${theme.radioSize.md.size}em;
          `}
          ${size === 'sm' &&
          css`
            border-width: max(1.8px, 0.075em);
            width: ${theme.radioSize.sm.size}em;
            height: ${theme.radioSize.sm.size}em;
          `}
          ${size === 'xs' &&
          css`
            border-width: max(1.6px, 0.05em);
            width: ${theme.radioSize.xs.size}em;
            height: ${theme.radioSize.xs.size}em;
          `}
        }
      `,
      [size, colorScheme, theme]
    );

    const inputRadioActionStyle = useMemo(
      () => css`
        &[type='radio']:checked {
          border-style: solid;
          border-color: ${getCheckboxColorCode(theme.colors, colorScheme)};
          ${size === 'lg' &&
          css`
            border-width: 0.5em;
          `}
          ${size === 'md' &&
          css`
            border-width: 0.4em;
          `}
          ${size === 'sm' &&
          css`
            border-width: 0.35em;
          `}
          ${size === 'xs' &&
          css`
            border-width: 0.3em;
          `}
        }

        &[type='radio']:focus-visible {
          outline-offset: max(2px, 0.1em);
          outline: max(2px, 0.1em) dotted
            ${getCheckboxColorCode(theme.colors, colorScheme)};
        }

        &[type='radio']:hover {
          box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
          cursor: pointer;
        }
      `,
      [theme, colorScheme, size]
    );

    const inputRadioDisabledStyle = useMemo(
      () => css`
        &[type='radio']:disabled {
          background-color: lightgray;
          border-color: lightgray;
          box-shadow: none;
          opacity: 0.7;
          cursor: not-allowed;
        }

        &[type='radio']:disabled + span {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `,
      []
    );

    const paragraphStyle = useMemo(
      () => css`
        vertical-align: middle;
        margin-left: ${spacing}px;
      `,
      [spacing]
    );
    return (
      <label css={labelRadioStyle}>
        <input
          id={id}
          css={[
            inputRadioDefaultStyle,
            inputRadioActionStyle,
            inputRadioDisabledStyle,
          ]}
          type="radio"
          ref={ref}
          disabled={isDisabled}
          name={name}
          value={value}
          {...args}
        />
        {text && <span css={paragraphStyle}>{text}</span>}
      </label>
    );
  }
);

export default RadioBox;
