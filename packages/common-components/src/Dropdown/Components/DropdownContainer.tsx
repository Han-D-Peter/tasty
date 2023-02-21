import { useMemo } from 'react';

import { css } from '@emotion/react';
import FocusTrap from 'focus-trap-react';

import useMoveByKeyboard from '../../hooks/useMoveByKeyboard';
import { DropdownContainerProps } from '../Dropdown.types';
import useDropdown from '../hooks/useDropdown';

const DropdownContainer = ({ children }: DropdownContainerProps) => {
  const { isOpened, filpableDirection } = useDropdown();

  const ref = useMoveByKeyboard<HTMLDivElement>();

  const defaultUlStyle = useMemo(
    () => css`
      position: absolute;
      ${filpableDirection === 'bottom' &&
      css`
        top: 40px;
      `}
      ${filpableDirection === 'above' &&
      css`
        bottom: 35px;
      `}
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
    `,
    [filpableDirection]
  );

  if (!isOpened) return null;

  return (
    <ul css={[defaultUlStyle]}>
      <FocusTrap
        active={isOpened}
        focusTrapOptions={{ allowOutsideClick: true }}
      >
        <div ref={ref}>{children}</div>
      </FocusTrap>
    </ul>
  );
};

export default DropdownContainer;
