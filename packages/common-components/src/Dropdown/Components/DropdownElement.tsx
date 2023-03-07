/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import { MouseEvent, useMemo } from 'react';

import { css } from '@emotion/react';

import { DropdownElementProps } from '../Dropdown.types';
import useDropdown from '../hooks/useDropdown';

const DropdownElement = ({ children, selected }: DropdownElementProps) => {
  const { selectedValue, onSelectValue } = useDropdown();

  const getValueFromListItem = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    onSelectValue(target.innerText);
  };

  const listBtnStyle = useMemo(
    () => css`
      display: flex;
      align-items: center;
      margin: 5px 20px 5px 20px;
      width: 95%;
      height: 50px;
      border-radius: 7px;
      padding-left: 10px;
      border-style: none;
      background-color: transparent;
      &:hover {
        color: #2c98fc;
        background-color: #d9d9d9;
      }
      ${selectedValue === children &&
      css`
        color: #2c98fc;
      `}
      &:focus {
        outline: 0;
        color: #2c98fc;
        background-color: #d9d9d9;
      }
    `,
    [selectedValue]
  );

  return (
    <li>
      <button type="button" onClick={getValueFromListItem} css={listBtnStyle}>
        {children}
      </button>
    </li>
  );
};

export default DropdownElement;
