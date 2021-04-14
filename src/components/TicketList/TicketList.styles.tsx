import styled from 'styled-components';
import { Wrapper } from '../../common/Wrapper';

export const TicketListWrapper = styled(Wrapper)`
  margin-top: 2.25rem;
  min-width: 400px;
  margin-bottom: 1.5rem;
`;

export const TicketListHeader = styled.div`
  display: flex;
  .ticket-list-header-label {
    flex: 1 1 auto;
    margin: 0 inherit;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
