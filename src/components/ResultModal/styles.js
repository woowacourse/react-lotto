import styled from 'styled-components';
import PALETTE from '../../constants/palette';

export const ResultTableContainer = styled.div`
  table {
    margin: 0 auto 2rem auto;
    border-collapse: collapse;

    tr {
      border-bottom: 1px solid ${PALETTE.GRAY_005};

      th,
      td {
        padding: 0.7rem 1.2rem;
      }
    }

    thead > tr {
      border-bottom: 2px solid ${PALETTE.GRAY_003};
    }
  }
`;

export const RateOfReturnMessage = styled.p`
  margin-bottom: 1.5rem;
  font-weight: 500;
  font-size: 1.2rem;
`;
