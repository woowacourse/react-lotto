import styled from 'styled-components';

export const TicketListWrapper = styled.section`
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
