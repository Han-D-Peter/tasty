import {
  Children,
  createContext,
  MouseEvent,
  ReactElement,
  useMemo,
  useRef,
  useState,
} from 'react';

import { css, useTheme } from '@emotion/react';

import { getCheckboxColorCode } from '../../utils/utils';
import { Color } from '../Button/index';
import useBoolean from '../hooks/useBoolean';
import useMoveByKeyboard from '../hooks/useMoveByKeyboard';
import useOnClickOutside from '../hooks/useOnClickOutside';

// eslint-disable-next-line import/no-cycle
import useDropdown from './hooks/useDropdown';

type DropdownProps = {
  /**
   * You can choose default value of Dropdown.
   */
  value?: string;

  /**
   * You can set default condition of Dropdown.
   */
  expanded?: boolean;

  placeholder: string;
  onSelect?: (value: string) => void;
  colorScheme?: Color;
  disabled?: boolean;
  icon?: ReactElement;
  direction?: 'above' | 'bottom';

  children?:
    | ReactElement<typeof DropdownHeader | typeof DropdownItemContainer>[]
    | null;
};

interface DrowdownHeaderProps {
  colorScheme?: Color;
  placeholder?: string;
}

interface DropdownItemContainerProps {
  children?:
    | ReactElement<typeof DropdownItem>
    | ReactElement<typeof DropdownItem>[]
    | null;
}

export interface DropdownContextType extends DropdownProps {
  selectedValue: string | null;
  onSelectValue: (value: string) => void;
  onToggle: () => void;
  turnFalse: () => void;
  turnTrue: () => void;
  boolean: boolean;
}

const dropdownBoxStyle = css`
  display: relative;
`;

const removeNativeStyle = css`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const defaultDropDownStyle = css`
  min-width: 150px;
  width: 100%;
  border-width: 1px;
  margin: 0;

  background-color: white;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;

  border-radius: 4px;
  border-style: solid;

  cursor: pointer;
`;

const placeholderStyle = css`
  color: grey;
`;

const selectedStyle = css`
  color: black;
`;

const innerBoxStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 10px 8px 3px 8px;
`;

const defaultUlStyle = css`
  list-style: none;
  overflow: scroll;
  width: 100%;
  min-height: 200px;
  max-height: 400px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 10px;
  background-color: white;
  padding-inline-start: 0px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DropdownContext = createContext<DropdownContextType | null>(null);
DropdownContext.displayName = 'DropdownContext';

const Dropdown = ({
  value,
  expanded,
  placeholder,
  onSelect,
  colorScheme = 'teal',
  disabled = false,
  icon,
  direction = 'bottom',
  children,
}: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    value ?? null
  );
  const { boolean, turnTrue, turnFalse } = useBoolean(expanded ?? false);

  const dropdownBoxRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownBoxRef, () => {
    turnFalse();
  });

  const onToggle = () => {
    if (boolean) turnFalse();
    if (!boolean) turnTrue();
  };

  const onSelectValue = (selectValue: string) => {
    setSelectedValue(selectValue);
    if (onSelect) {
      onSelect(selectValue);
    }
  };

  const providerValue = useMemo(
    () => ({
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
    }),
    [selectedValue, boolean]
  );

  return (
    <DropdownContext.Provider value={providerValue}>
      {direction === 'bottom' && <div ref={dropdownBoxRef}>{children}</div>}
      {direction === 'above' && children && (
        <div ref={dropdownBoxRef}>{Children.toArray(children).reverse()}</div>
      )}
    </DropdownContext.Provider>
  );
};

const DropdownHeader = ({
  colorScheme = 'teal',
  placeholder,
}: DrowdownHeaderProps) => {
  const { onToggle, selectedValue } = useDropdown();

  const theme = useTheme();
  const colorStyle = useMemo(
    () => css`
      border-color: ${getCheckboxColorCode(theme.colors, colorScheme)};
    `,
    [colorScheme]
  );

  return (
    <button
      type="button"
      css={[removeNativeStyle, defaultDropDownStyle, colorStyle]}
      onClick={onToggle}
    >
      <div css={innerBoxStyle}>
        <div>
          {!selectedValue && <div css={placeholderStyle}>{placeholder}</div>}
          {selectedValue && <div css={selectedStyle}>{selectedValue}</div>}
        </div>
        <div>
          <DownArrow size={20} />
        </div>
      </div>
    </button>
  );
};

const DropdownItemContainer = ({ children }: DropdownItemContainerProps) => {
  const { boolean } = useDropdown();

  const ref = useMoveByKeyboard();

  if (!boolean) return null;

  return (
    <ul css={[defaultUlStyle]}>
      <div ref={ref}>{children}</div>
    </ul>
  );
};
const DropdownItem = ({ children }: { children: string }) => {
  const { selectedValue, onSelectValue, turnFalse } = useDropdown();

  const getValueFromListItem = (event: MouseEvent) => {
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
      <button
        type="button"
        onClick={e => {
          getValueFromListItem(e);
          turnFalse();
        }}
        css={listBtnStyle}
      >
        {children}
      </button>
    </li>
  );
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

Dropdown.Header = DropdownHeader;
Dropdown.List = DropdownItemContainer;
Dropdown.Item = DropdownItem;

export default Dropdown;
