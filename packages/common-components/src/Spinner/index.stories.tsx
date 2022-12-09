import { Story } from '@storybook/react';

import Spinner, { SpinnerProps } from './index';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    color: {
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
    // size: {
    //   options: ['xs', 'sm', 'md', 'lg'],
    //   control: { type: 'select' },
    // },
  },
};

export const Basic: Story<SpinnerProps> = ({ ...args }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, auto)',
      gap: '20px',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
      <Spinner {...args} />
    </div>
  </div>
);
