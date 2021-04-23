import styled from 'styled-components';

interface Props {
  fullWidth?: boolean;
}

const Button = styled.button<Props>`
  background-color: #00bcd4;
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;
  font-size: 0.8rem;
  width: ${({ fullWidth }) => fullWidth && '100%'};

  &:hover {
    background-color: #018c9e;
  }
`;

export default Button;
