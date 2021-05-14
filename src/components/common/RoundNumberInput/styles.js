import styled from 'styled-components';
import PALETTE from '../../../constants/palette';

export const WinningNumberInputLabel = styled.label`
  position: relative;

  span {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }

  input {
    width: 60px;
    height: 60px;
    border: 2px solid ${PALETTE.GRAY_006};
    border-radius: 50%;
    text-align: center;
    font-size: 1.2rem;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }

    &:focus {
      outline: none;
      border-color: ${PALETTE.PINK_003};
      box-shadow: 0 0 0 1px ${PALETTE.PINK_003};
    }
  }
`;
