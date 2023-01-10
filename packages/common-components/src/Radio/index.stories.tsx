import { css } from '@emotion/react';
import { Story } from '@storybook/react';

import RadioBox, { RadioProps } from './index';

export default {
  title: 'Components/RadioBox',
  component: RadioBox,
  decorators: [
    (Str: Story) => (
      <div
        css={css`
          input + input {
            margin-left: 10px;
          }
        `}
      >
        <Str />
      </div>
    ),
  ],
  argTypes: {
    isDisabled: {
      control: { type: 'boolean' },
    },
    size: {
      options: ['lg', 'md', 'sm', 'xs'],
      control: { type: 'radio' },
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
        'violet',
        'pink',
      ],
      control: { type: 'select' },
    },
    spacing: {
      control: { type: 'number' },
    },
    text: {
      control: { type: 'text' },
    },
  },
};

export const Basic: Story<RadioProps> = ({ ...args }) => (
  <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
    <RadioBox {...args} />
  </div>
);
