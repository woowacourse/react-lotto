import styled from 'styled-components';

export const NumberListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  text-align: center;
  justify-content: center;
`;

export const WinningNumberLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  margin: 4px;
  padding: 4px;
  font-size: 1rem;
  text-align: center;
  border: 2px solid #d3c5c5;
  border-radius: 50%;
  background-color: #d3c5c5;

  &:hover {
    box-sizing: content-box;
    border: 2px solid #c71f1f;
  }
`;

export const WinningNumberCheckbox = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + ${WinningNumberLabel} {
    border: 2px solid #c71f1f;
    background-color: #c71f1f;
    color: #fce9e9;
    font-weight: bold;
  }
`;
