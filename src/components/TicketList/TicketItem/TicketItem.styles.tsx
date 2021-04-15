import styled from 'styled-components';
import { Wrapper } from '../../common/Wrapper';

export const TicketItemWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;

  .ticket-icon {
    margin: 0 10px;
    font-size: 2.25rem;
  }

  .ticket-number {
    line-height: 3rem;
  }
`;
