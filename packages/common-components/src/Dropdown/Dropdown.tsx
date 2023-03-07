/* eslint-disable import/no-cycle */
import { Children, useMemo, useRef, useState } from 'react';

import { css } from '@emotion/react';

import useBoolean from '../hooks/useBoolean';
import useOnClickOutside from '../hooks/useOnClickOutside';

import DropdownContainer from './Components/DropdownContainer';
import DropdownElement from './Components/DropdownElement';
import DropdownHeader from './Components/DropdownHeader';
import { DropdownProps } from './Dropdown.types';
import { DropdownContext } from './hooks/useDropdown';

const dropdownBoxStyle = css`
  min-width: 150px;
  width: 100%;
  height: 45px;
  position: relative;
`;

const Dropdown = ({
  value,
  expanded,
  placeholder,
  onSelect,
  colorScheme = 'teal',
  disabled = false,
  openDirection = 'bottom',
  children,
}: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    value ?? null
  );
  const [filpableDirection, setFlipableDirection] = useState(
    openDirection ?? 'bottom'
  );
  const {
    boolean: isOpened,
    turnTrue: turnOpen,
    turnFalse: turnClose,
  } = useBoolean(expanded ?? false);

  const dropdownBoxRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownBoxRef, () => {
    turnClose();
  });

  const onToggle = () => {
    if (isOpened) turnClose();
    if (!isOpened) turnOpen();
  };

  const onSelectValue = (selectValue: string) => {
    setSelectedValue(selectValue);
    turnClose();
    if (onSelect) {
      onSelect(selectValue);
    }
  };

  const setDirectionAboveOrBottom = (option: 'above' | 'bottom') => {
    setFlipableDirection(option);
  };

  const providerValue = useMemo(
    () => ({
      expanded,
      selectedValue,
      onSelectValue,
      onToggle,
      isOpened,
      turnClose,
      turnOpen,
      placeholder,
      onSelect,
      colorScheme,
      disabled,
      openDirection,
      filpableDirection,
      setDirectionAboveOrBottom,
      value,
    }),
    [
      expanded,
      selectedValue,
      isOpened,
      openDirection,
      placeholder,
      colorScheme,
      disabled,
      filpableDirection,
      value,
    ]
  );

  return (
    <DropdownContext.Provider value={providerValue}>
      <div ref={dropdownBoxRef} css={dropdownBoxStyle}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};
Dropdown.List = DropdownContainer;
Dropdown.Header = DropdownHeader;
Dropdown.Item = DropdownElement;

export default Dropdown;
