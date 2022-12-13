import { css } from '@emotion/react';
import { Story } from '@storybook/react';

import Textarea, { TextareaProps } from './index';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  decorators: [
    (Str: Story) => (
      <div
        css={css`
          textarea + textarea {
            margin-left: 10px;
          }
        `}
      >
        <Str />
      </div>
    ),
  ],
  argTypes: {
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
        'violet',
        'pink',
      ],
      control: { type: 'select' },
    },
    isInvalid: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'string' },
    },
  },
};
export const Basic: Story<TextareaProps> = ({ ...args }) => (
  <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
    <Textarea {...args} />
  </div>
);
