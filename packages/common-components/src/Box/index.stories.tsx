import { css } from '@emotion/react';
import { Story } from '@storybook/react';

import Box from './index';

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
};

export const Basic: Story<typeof Box> = ({ ...args }) => (
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
