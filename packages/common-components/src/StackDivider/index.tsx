import { ReactElement } from 'react';

import { css, useTheme } from '@emotion/react';

import { getCheckboxColorCode } from '../Checkbox/utils';

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

export type StackDividerProps = {
  color?: Color;
};

const StackDivider = ({ color = 'teal' }: StackDividerProps) => {
  const theme = useTheme();
  const deviderStyle = css`
    width: 100%;
    height: 2px;
    background-color: ${getCheckboxColorCode(theme.colors, color)};
  `;

  return <div css={deviderStyle} />;
};

export default StackDivider;
