import { Story } from '@storybook/react';

import Dropdown from './index';

export default {
  title: ' Components/Dropdown',
  component: Dropdown,
  decorators: [
    (Str: Story) => (
      <div>
        <Str />
      </div>
    ),
  ],
  argTypes: {},
};

export const Basic: Story<typeof Dropdown> = ({ ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      margin: '20px',

      width: '500px',
    }}
  >
    <Dropdown placeholder="선택하세요" direction="above" {...args}>
      <Dropdown.Header placeholder="select" />
      <Dropdown.List>
        <Dropdown.Item>apple</Dropdown.Item>
        <Dropdown.Item>banana</Dropdown.Item>
        <Dropdown.Item>cyan</Dropdown.Item>
        <Dropdown.Item>dog</Dropdown.Item>
        <Dropdown.Item>element</Dropdown.Item>
        <Dropdown.Item>feature</Dropdown.Item>
        <Dropdown.Item>global</Dropdown.Item>
        <Dropdown.Item>horizontal</Dropdown.Item>
        <Dropdown.Item>internet</Dropdown.Item>
        <Dropdown.Item>jelly</Dropdown.Item>
        <Dropdown.Item>king</Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  </div>
);
