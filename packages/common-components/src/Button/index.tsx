import { ButtonHTMLAttributes, forwardRef, useMemo, ReactNode } from 'react';

import { css, useTheme } from '@emotion/react';

// eslint-disable-next-line import/no-cycle
import Spinner from '../Spinner';

export type Color =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'cyan'
  | 'violet'
  | 'pink';
export type Size = 'xs' | 'sm' | 'md' | 'lg';
export type Variant = 'solid' | 'outline' | 'ghost' | 'link';
export type Placement = 'start' | 'end';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;

  /**
   * What type to use for
   */
  type?: 'button' | 'reset' | 'submit';

  /**
   * What color to use. default: 'teal'
   */
  colorScheme: Color;

  /**
   * How large should the button be? default: 'md'
   */
  size: Size;

  /**
   * Visual Style of the Button. default: 'solid'
   */
  variant: Variant;

  /**
   * You can add left icon to the Button
   */
  leftIcon?: ReactNode;
  /**
   * You can add right icon to the Button
   */
  rightIcon?: ReactNode;

  /**
   * isLoading state will show a spinner
   */
  isLoading: boolean;

  /**
   * while is loading, you can show loadingText in Button
   * You should loadingText property after using isLoading.
   */
  loadingText: boolean;

  /**
   * where spinner is, on left of loadingText or right of loadingText
   * default: 'start'
   */
  spinnerPlacement: Placement;

  children: ReactNode;

  /**
   * Optional click handler
   */
  onClick?: () => void;
};

const defaultButtonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
`;

const loadingTextStyle = css`
  margin-left: 5px;
  margin-right: 5px;
`;

const flattenContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      colorScheme = 'teal',
      size = 'md',
      variant = 'solid',
      leftIcon,
      rightIcon,
      isLoading,
      loadingText,
      spinnerPlacement = 'start',
      children,
    },
    ref
  ) => {
    const theme = useTheme();

    const activeBtnStyle = useMemo(() => {
      if (variant === 'solid') {
        return css`
          color: ${theme.colors.gray.gray0};
          border: none;
          background: ${theme.btnActionColor[colorScheme]?.basic};
          &:hover {
            background-color: ${theme.btnActionColor[colorScheme]?.solid.hover};
          }
          &:active {
            background-color: ${theme.btnActionColor[colorScheme]?.solid
              .active};
          }
        `;
      }
      if (variant === 'outline') {
        return css`
          color: ${theme.btnActionColor[colorScheme]?.basic};
          border: 1px solid ${theme.btnActionColor[colorScheme]?.basic};
          background: white;
          &:hover {
            background-color: ${theme.btnActionColor[colorScheme]?.outline
              .hover};
          }
          &:active {
            background-color: ${theme.btnActionColor[colorScheme]?.outline
              .active};
          }
        `;
      }
      if (variant === 'ghost') {
        return css`
          color: ${theme.btnActionColor[colorScheme]?.basic};
          border: none;
          background: white;
          &:hover {
            background-color: ${theme.btnActionColor[colorScheme]?.ghost.hover};
          }
          &:active {
            background-color: ${theme.btnActionColor[colorScheme]?.ghost
              .active};
          }
        `;
      }
      if (variant === 'link') {
        return css`
          color: ${theme.btnActionColor[colorScheme]?.basic};
          border: none;
          background: white;
          &:hover {
            text-decoration: underline;
          }
          &:active {
            text-decoration: underline;
          }
        `;
      }
      return css``;
    }, [variant, colorScheme]);

    const buttonSize = useMemo(
      () => css`
        width: ${theme.btnSize[size].width}px;
        height: ${theme.btnSize[size].height}px;
      `,
      [size]
    );

    if (isLoading && loadingText) {
      return (
        <button
          type="button"
          css={[defaultButtonStyle, activeBtnStyle, buttonSize]}
          ref={ref}
        >
          <div css={flattenContainerStyle}>
            {spinnerPlacement === 'start' && (
              <>
                <Spinner color={colorScheme} size={size} />
                <div css={loadingTextStyle}>Loading</div>
              </>
            )}
            {spinnerPlacement === 'end' && (
              <>
                <div css={loadingTextStyle}>Loading</div>
                <Spinner color={colorScheme} size={size} />
              </>
            )}
          </div>
        </button>
      );
    }

    if (isLoading && !loadingText) {
      return (
        <button
          type="button"
          css={[defaultButtonStyle, activeBtnStyle, buttonSize]}
          ref={ref}
        >
          <Spinner color={colorScheme} size={size} />
        </button>
      );
    }
    return (
      <button
        type="button"
        css={[defaultButtonStyle, activeBtnStyle, buttonSize]}
        ref={ref}
      >
        {!isLoading && (
          <div css={flattenContainerStyle}>
            {leftIcon && <div>{leftIcon}</div>}
            <div>{children}</div>
            {rightIcon && <div>{rightIcon}</div>}
          </div>
        )}
      </button>
    );
  }
);

export default Button;
