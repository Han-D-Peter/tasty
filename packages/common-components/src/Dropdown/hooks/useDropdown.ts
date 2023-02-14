import { useContext } from 'react';

// eslint-disable-next-line import/no-cycle
import { DropdownContext, DropdownContextType } from '../index';

const useDropdown = () => {
  const context = useContext(DropdownContext) as DropdownContextType;

  const {
    selectedValue,
    onSelectValue,
    onToggle,
    boolean,
    turnFalse,
    turnTrue,
    placeholder,
    onSelect,
    colorScheme,
    disabled,
    icon,
    direction,
    setDirectionAboveOrBottom,
  } = context;

  return {
    selectedValue,
    onSelectValue,
    onToggle,
    boolean,
    turnFalse,
    turnTrue,
    placeholder,
    onSelect,
    colorScheme,
    disabled,
    icon,
    direction,
    setDirectionAboveOrBottom,
  } as const;
};

export default useDropdown;
