import styled from 'styled-components';
import PALETTE from '../../../constants/palette';

export const ToggleButtonContainer = styled.label`
  display: inline-block;
  position: relative;

  input[type='checkbox'] {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    position: absolute;

    &:checked + span::after {
      background-color: ${PALETTE.PINK_002};
      transform: translateX(16px);
    }
  }

  span {
    display: block;
    width: 100%;
    cursor: pointer;

    &::before {
      content: '';
      float: right;
      display: block;
      margin: 5px 0 5px 10px;
      border-radius: 7px;
      width: 36px;
      height: 14px;
      background-color: white;
      -moz-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
      transition: background-color 0.2s, opacity 0.2s;
    }

    &::after {
      content: '';
      position: absolute;
      top: 2px;
      right: 16px;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background-color: white;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      transition: background-color 0.2s, transform 0.2s;
    }
  }
`;
