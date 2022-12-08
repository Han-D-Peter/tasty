import { css } from '@emotion/react';
import { Story } from '@storybook/react';

import Button, { ButtonProps } from './index';

export default {
  title: 'Components/Button',
  component: Button,
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
    variant: {
      options: ['solid', 'outline', 'ghost', 'link'],
      control: { type: 'select' },
    },
    colorScheme: {
      options: [
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'cyan',
        'purple',
        'pink',
      ],
      control: { type: 'select' },
    },
    leftIcon: {
      options: [<div>hello</div>, <div>bye</div>],
      controls: { type: 'radio' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    isLoading: {
      options: [true, false],
      control: { type: 'radio' },
    },
    loadingText: {
      options: [true, false],
      control: { type: 'radio' },
    },
    spinnerPlacement: {
      options: ['start', 'end'],
      control: { type: 'select' },
    },
  },
};

export const Basic: Story<ButtonProps> = ({ ...args }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, auto)',
      gap: '20px',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
      <Button {...args}>Button</Button>
    </div>
  </div>
);
