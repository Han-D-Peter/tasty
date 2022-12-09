import { css } from '@emotion/react';
import { Story } from '@storybook/react';

import CheckBox, { CheckBoxProps } from './index';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
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
    checked: {
      control: { type: 'boolean' },
    },
    text: {
      control: { type: 'text' },
    },
  },
};

export const Basic: Story<CheckBoxProps> = ({ ...args }) => (
  <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
    <CheckBox {...args} />
  </div>
);
