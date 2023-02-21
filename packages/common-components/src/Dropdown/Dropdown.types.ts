/* eslint-disable import/no-cycle */
import { ReactElement, ReactNode } from 'react';

import { Color } from '../Button';

import DropdownElement from './Components/DropdownElement';

export interface DropdownProps {
  /**
   * You can chooce default open condition of Dropdown.
   */
  expanded?: boolean;

  /**
   * You can chooce default direction to open.
   */
  openDirection?: 'above' | 'bottom';

  /**
   * You can get value what choosen of Dropdown.
   */
  onSelect?: (value: string) => void;

  /**
   * You can set placeholder value.
   */
  placeholder?: string;

  /**
   * You can set theme color of Dropdown.
   */
  colorScheme?: string;

  /**
   * You can make Dropdown condition to be disabled.
   */
  disabled?: boolean;

  /**
   * You can set value of Dropdown.
   * If you set "value", You never change value of Dropdown by selecting.
   */
  value?: string;

  /**
   * Child is like as option of select tag from html.
   */
  children?: ReactNode;
}

export interface DropdownContextType extends DropdownProps {
  /**
   * This is selected value you choose.
   */
  selectedValue: string | null;

  /**
   * This is callback function for getting value by select value of dropdown.
   */
  onSelectValue: (value: string) => void;

  /**
   * This is toggle function.
   */
  onToggle: () => void;

  /**
   * This is close function.
   */
  turnClose: () => void;

  /**
   * This is open function.
   */
  turnOpen: () => void;

  /**
   * this is function for dropdown box opening dircetion.
   * You can set this value "above" or "bottom".
   */
  setDirectionAboveOrBottom: (option: 'above' | 'bottom') => void;

  /**
   * This is value for dropdown direction.
   */
  filpableDirection: 'above' | 'bottom';

  /**
   * This is state of check dropdown component is opened.
   */
  isOpened: boolean;
}

export interface DropdownContainerProps {
  children?:
    | ReactElement<typeof DropdownElement>
    | ReactElement<typeof DropdownElement>[];
}

export interface DrowdownHeaderProps {
  colorScheme?: Color;
  placeholder?: string;
}

export interface DropdownElementProps {
  selected?: boolean;
  children: string;
}
