import styled from 'styled-components';

export const ResultTableContainer = styled.div`
  table {
    margin: 0 auto 2rem auto;
    border-collapse: collapse;

    tr {
      border-bottom: 1px solid #999;

      th,
      td {
        padding: 0.7rem 1.2rem;
      }
    }

    thead > tr {
      border-bottom: 2px solid #666;
    }
  }
`;

export const RateOfReturnMessage = styled.p`
  margin-bottom: 1.5rem;
  font-weight: 500;
  font-size: 1.2rem;
`;

export const ResetButton = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 5px;
  background-color: var(--color-pink-1);
  font-size: 1rem;

  &:hover {
    background-color: var(--color-pink-3);
  }
`;
