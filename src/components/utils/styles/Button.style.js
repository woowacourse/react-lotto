import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 36px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;
  background-color: #c71f1f;
  border-color: #c71f1f;
  color: #fce9e9;

  min-width: ${props => props.size};
`;
