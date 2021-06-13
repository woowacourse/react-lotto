import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  border: 3px solid #eb7a7a;

  & tr {
    text-align: center;

    & th,
    td {
      padding: 0.75rem;
      border-bottom: 1.5px solid #f5bdbd;
    }
  }
`;
