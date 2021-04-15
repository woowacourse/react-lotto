import styled from 'styled-components';
import Modal from '../common/Modal';
import { Wrapper } from '../common/Wrapper';

export const ResultModalWrapper = styled(Wrapper)`
  .result-header,
  .profit {
    text-align: center;
  }
`;

export const ResultTable = styled.table`
  border-color: black;
  border-width: 1px;
  border-radius: 1em;
  overflow: hidden;
  border-collapse: collapse;

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }

  tr {
    text-align: center;
  }

  th,
  td {
    padding: 0.75rem;
    border-bottom: 1px solid gainsboro;
  }
`;
