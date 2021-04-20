import styled from 'styled-components';

type InputProps = {
  fullWidth?: boolean;
};

const Input = styled.input<InputProps>`
  padding: 0.5rem;
  margin: 0 0.25rem;

  width: ${({ fullWidth }) => (fullWidth ? '100%' : '38px')};
  height: 36px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default Input;
