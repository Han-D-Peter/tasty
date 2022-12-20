import { css } from '@emotion/react';
import { Story } from '@storybook/react';

import StackDivider from '../StackDivider/index';

import Stack, { StackProps } from './index';

export default {
  title: 'Components/Stack',
  component: Stack,
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
    divider: {
      options: [<StackDivider />],
      control: 'select',
    },
  },
};

export const Basic: Story<StackProps> = ({ ...args }) => (
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
        width: '200px',
        height: '200px',
        flexDirection: 'column',
        margin: '5px',
      }}
    >
      <Stack {...args}>
        <div>box</div>
        <div>box</div>
        <div>box</div>
      </Stack>
    </div>
  </div>
);
