import { Story } from '@storybook/react';

import Select from './index';

export default {
  title: ' Components/Select',
  component: Select,
  decorators: [
    (Str: Story) => (
      <div>
        <Str />
      </div>
    ),
  ],
  argTypes: {
    size: {
      options: ['lg', 'md', 'sm', 'xs'],
      control: { type: 'select' },
    },
  },
};

const DownArrow = ({ size = 18 }: { size?: number }) => (
  <svg
    height={`${size}`}
    viewBox="0 0 48 48"
    width="48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
    <path d="M0-.75h48v48h-48z" fill="none" />
  </svg>
);

export const Basic: Story<typeof Select> = ({ ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      margin: '5px',
      width: '500px',
    }}
  >
    <Select
      placeholder="--Please choose an option--"
      {...args}
      icon={<DownArrow />}
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  </div>
);
