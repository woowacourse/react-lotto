import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 95%;
`;

export const Label = styled.label`
  background-color: #d3c5c5;
  border-radius: 50%;
  border: 2px solid #d3c5c5;
  display: inline-block;
  font-size: 1rem;
  height: 1.5rem;
  line-height: 1.5rem;
  margin: 4px;
  padding: 4px;
  position: relative;
  text-align: center;
  width: 1.5rem;

  &:hover {
    box-sizing: content-box;
    border: 2px solid #c71f1f;
  }
`;

export const Checkbox = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Label} {
    border: 2px solid #c71f1f;
    background-color: #c71f1f;
    color: #fce9e9;
    font-weight: bold;
  }
`;
