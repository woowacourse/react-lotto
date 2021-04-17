import styled, { css } from 'styled-components';
import { Wrapper } from '../common/Wrapper';

// TODO: overflow-y 처리하기
export const TicketListWrapper = styled(Wrapper)`
  margin-top: 2.25rem;
  min-width: 400px;
  margin-bottom: 3.5rem;
`;

export const TicketListHeader = styled.div`
  display: flex;
  .ticket-list-header-label {
    flex: 1 1 auto;
    margin: 0 inherit;
  }
`;

type ListProps = {
  isToggled: boolean;
};

const detailedStyle = css`
  flex-direction: column;
`;

export const List = styled.ul<ListProps>`
  display: flex;
  flex-wrap: wrap;
  ${({ isToggled }) => isToggled && detailedStyle}
`;
