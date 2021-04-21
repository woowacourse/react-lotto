import styled from 'styled-components';

const Table = styled.table`
  border-width: 1px;
  border-color: black;
  border-collapse: collapse;
  overflow: hidden;

  & th,
  & td {
    padding: 0.75rem;
    border-bottom: 1px solid gainsboro;
  }
`;

const Tr = styled.tr`
  text-align: center;
`;

const EarningRate = styled.p`
  text-align: center;
  font-weight: 700;
`;

const RestartButton = styled.button`
  width: 128px;
  height: 36px;
  border: none;
  border-radius: 5px;
  background-color: #ffa02b;
  cursor: pointer;
`;

export { Table, Tr, EarningRate, RestartButton };
