import styled from 'styled-components';

export const BUTTON_SIZE = {
  SMALL: {
    'min-width': '20%',
  },
  MEDIUM: {
    'min-width': '60%',
  },
  LARGE: {
    'min-width': '80%',
  },
};

export const StyledButton = styled.button`
  height: 36px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;

  color: #fce9e9;
  background-color: #c71f1f;
  border-color: #c71f1f;

  ${({ size }) => BUTTON_SIZE[size] || BUTTON_SIZE.SMALL}
  ${({ css }) => css}

  &:disabled {
    cursor: not-allowed;
  }
`;
