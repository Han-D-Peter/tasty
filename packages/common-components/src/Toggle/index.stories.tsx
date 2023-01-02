import { useRef } from 'react';

import { css } from '@emotion/react';
import { Story } from '@storybook/react';

import Toggle from './index';

export default {
  title: 'Components/Toggle',
  component: Toggle,
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
    disabled: {
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
    checked: {
      control: { type: 'boolean' },
    },
  },
};

export const Basic: Story<typeof Toggle> = ({ ...args }) => {
  const ref = useRef(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
      <Toggle ref={ref} {...args} />
    </div>
  );
};
