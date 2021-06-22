import styled from 'styled-components';

import { SIZE } from '../../../constants';

export const BUTTON_SIZE = {
  [SIZE.SMALL]: {
    'min-width': '20%',
  },
  [SIZE.MEDIUM]: {
    'min-width': '60%',
  },
  [SIZE.LARGE]: {
    'min-width': '80%',
  },
};

export const StyledButton = styled.button`
  background-color: #c71f1f;
  border-color: #c71f1f;
  border-radius: 4px;
  border-style: none;
  color: #fce9e9;
  cursor: pointer;
  height: 36px;
  outline: 0;
  padding: 0 16px;

  ${({ size }) => BUTTON_SIZE[size] || BUTTON_SIZE.SMALL}
  ${({ css }) => css}
	
	&:disabled {
    background-color: #d3c5c5;
    border-color: #d3c5c5;
    cursor: not-allowed;
  }
`;
