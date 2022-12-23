import { css } from '@emotion/react';
import { Story } from '@storybook/react';

import Flex from './index';

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

export const Basic: Story<typeof Flex> = ({ ...args }) => (
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
        <div>box1</div>
        <div>box2</div>
        <div>box3</div>
      </Flex>
    </div>
  </div>
);
