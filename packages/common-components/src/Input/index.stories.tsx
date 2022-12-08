import { css } from '@emotion/react';
import { Story } from '@storybook/react';

import Input, { InputProps } from './index';

export default {
  title: 'Components/Input',
  component: Input,
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
    size: {
      options: ['lg', 'md', 'sm', 'xs'],
      control: { type: 'radio' },
    },
    focusBorderLine: {
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
    errorBorderLine: {
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
    isInvalid: {
      control: { type: 'boolean' },
    },
    placeholderText: {
      control: { type: 'text' },
    },
  },
};

export const Basic: Story<InputProps> = ({ ...args }) => (
  <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
    <Input {...args} />
  </div>
);
