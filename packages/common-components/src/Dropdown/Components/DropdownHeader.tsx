import { useMemo, useRef } from 'react';

import { css, useTheme } from '@emotion/react';

import { getCheckboxColorCode } from '../../../utils/utils';
import { DrowdownHeaderProps } from '../Dropdown.types';
import useDropdown from '../hooks/useDropdown';

const removeNativeStyle = css`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const defaultDropDownStyle = css`
  min-width: 150px;
  width: 100%;
  height: 45px;
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

const innerBoxStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 10px 8px 3px 8px;
`;

const placeholderStyle = css`
  color: grey;
`;

const selectedStyle = css`
  color: black;
`;

const DropdownHeader = ({
  colorScheme = 'teal',
  placeholder,
}: DrowdownHeaderProps) => {
  const { onToggle, selectedValue, setDirectionAboveOrBottom, value } =
    useDropdown();

  const ref = useRef<HTMLButtonElement>(null);
  const theme = useTheme();
  const colorStyle = useMemo(
    () => css`
      border-color: ${getCheckboxColorCode(theme.colors, colorScheme)};
    `,
    [colorScheme]
  );

  const switchOpenPosition = () => {
    if (ref.current) {
      const isChangeToAbove =
        window.innerHeight +
          window.pageYOffset -
          ref.current.getBoundingClientRect().bottom <
        200;
      if (isChangeToAbove) {
        setDirectionAboveOrBottom('above');
      }
      if (!isChangeToAbove) {
        setDirectionAboveOrBottom('bottom');
      }
    }
  };

  return (
    <button
      ref={ref}
      type="button"
      css={[removeNativeStyle, defaultDropDownStyle, colorStyle]}
      onClick={() => {
        onToggle();
        switchOpenPosition();
      }}
    >
      <div css={innerBoxStyle}>
        <div>
          {value && <div css={selectedStyle}>{value}</div>}
          {!selectedValue && !value && (
            <div css={placeholderStyle}>{placeholder}</div>
          )}
          {selectedValue && !value && (
            <div css={selectedStyle}>{selectedValue}</div>
          )}
        </div>
        <div>
          <DownArrow size={20} />
        </div>
      </div>
    </button>
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

export default DropdownHeader;
