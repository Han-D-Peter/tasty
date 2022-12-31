import { css } from '@emotion/react';
import { Story } from '@storybook/react';

import Flex, { FlexProps } from './index';

export default {
  title: 'Components/Flex',
  component: Flex,
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
  argTypes: {},
};

export const Basic: Story<FlexProps> = ({ ...args }) => (
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
      <Flex {...args}>
        <div>box</div>
        <div>box</div>
        <div>box</div>
      </Flex>
    </div>
  </div>
);
