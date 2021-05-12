import styled from 'styled-components';

export const WinningNumberInputLabel = styled.label`
  position: relative;

  span {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }

  input {
    width: 60px;
    height: 60px;
    border: 2px solid #aaa;
    border-radius: 50%;
    text-align: center;
    font-size: 1.2rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:focus {
    outline: none;
    border-color: var(--color-pink-3);
    box-shadow: 0 0 0 1px var(--color-pink-3);
  }
`;
