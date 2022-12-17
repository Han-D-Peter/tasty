import { css } from '@emotion/react';
import { Story } from '@storybook/react';

import Box, { BoxProps } from './index';

export default {
  title: 'Components/Box',
  component: Box,
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
    display: {
      options: ['block', 'flex'],
      control: { type: 'radio' },
    },
    backgroundColor: {
      options: ['red', 'blue'],
      control: { type: 'radio' },
    },
  },
};

export const Basic: Story<BoxProps> = ({ ...args }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, auto)',
      gap: '20px',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
      <Box {...args}>hello</Box>
    </div>
  </div>
);
