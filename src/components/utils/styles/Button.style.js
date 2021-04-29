import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 36px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;

  min-width: ${props => props.minWidth};
  background-color: ${props => props.backgroundColor};
  border-color: ${props => props.borderColor};
  color: ${props => props.color};
`;
