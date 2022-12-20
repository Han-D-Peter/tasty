import { css } from '@emotion/react';
import { Story } from '@storybook/react';

import StackDivider, { StackDividerProps } from './index';

export default {
  title: 'Components/StackDivider',
  component: StackDivider,
  decorators: [
    (Str: Story) => (
      <div
        css={css`
          button + button {
            margin-left: 10px;
          }
        `}
      >
        <Str />
      </div>
    ),
  ],
  argTypes: {
    color: {
      options: [
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'cyan',
        'violet',
        'pink',
      ],
      control: { type: 'select' },
    },
  },
};

export const Basic: Story<StackDividerProps> = ({ ...args }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, auto)',
      gap: '20px',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '5px',
        width: '100px',
      }}
    >
      <StackDivider {...args}>hello</StackDivider>
    </div>
  </div>
);
