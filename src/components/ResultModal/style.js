import styled from "@emotion/styled";

export const ResultTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  & td,
  & th {
    border-bottom: 1px solid gainsboro;
    padding: 10px 0;
  }
`;

export const Button = styled.button`
  width: 120px;
  padding: 10px 0;
  background-color: #00bcd4;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #018c9e;
  }
`;

export const TableRow = styled.tr`
  text-align: center;
`;
