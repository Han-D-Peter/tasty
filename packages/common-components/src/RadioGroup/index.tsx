import { ChangeEvent, ReactChild } from 'react';

import { css } from '@emotion/react';

import Flex from '../Flex/index';

type RadioGroupProps = {
  /**
   * Whether checkbox is abled or not.
   */
  isDisabled?: boolean;
  /**
   * Text aside from checkbox.
   */
  title: string;

  /**
   * You can make a group of radio boxes by "name".
   */
  name: string;

  /**
   * Set radioboxes' direction.
   */
  direction: 'horizontal' | 'vertical';

  /**
   * Callback what getting selected value from radio boxes.
   */
  onChange?: (e: ChangeEvent<HTMLFieldSetElement>) => void;

  /**
   * children of RadioGroup.
   */
  children: ReactChild | ReactChild[];
};

const fieldsetDefaultstyle = css`
  border: none;
  margin: 0;
`;

const RadioGroup = ({
  title = 'Question',
  direction,
  name = 'default',
  isDisabled = false,
  onChange,
  children,
}: RadioGroupProps) => (
  <fieldset
    css={fieldsetDefaultstyle}
    disabled={isDisabled}
    name={name}
    onChange={onChange}
  >
    <div>{title}</div>
    <Flex direction={direction === 'horizontal' ? 'row' : 'column'}>
      {children}
    </Flex>
  </fieldset>
);

export default RadioGroup;
