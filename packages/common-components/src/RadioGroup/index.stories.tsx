import { css } from '@emotion/react';
import { Story } from '@storybook/react';

import RadioBox from '../Radio/index';

import RadioGroup from './index';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
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
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
  },
};

export const Basic: Story<typeof RadioGroup> = ({ ...args }) => (
  <div style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
    <RadioGroup title="Question" name="title" direction="horizontal" {...args}>
      <RadioBox name="fruit" text="apple" value="apple" />
      <RadioBox name="fruit" text="banana" value="banana" />
      <RadioBox name="fruit" text="grape" value="grape" />
    </RadioGroup>
  </div>
);
