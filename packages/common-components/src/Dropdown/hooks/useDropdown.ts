/* eslint-disable import/no-cycle */
import { createContext, useContext } from 'react';

import { DropdownContextType } from '../Dropdown.types';

export const DropdownContext = createContext<DropdownContextType | null>(null);
DropdownContext.displayName = 'DropdownContext';

const useDropdown = () => {
  const context = useContext(DropdownContext) as DropdownContextType;

  const {
    expanded,
    openDirection,
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
    filpableDirection,
    setDirectionAboveOrBottom,
    value,
  } = context;

  return {
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
  } as const;
};

export default useDropdown;
