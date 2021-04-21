import styled, { css } from 'styled-components';
import Wrapper from '../common/Wrapper';

export const TicketListWrapper = styled(Wrapper)`
  padding: 20px;
  border: 1px solid #dae1e6;
  border-radius: 5px;
  min-width: 400px;
  background-color: #f7f9fa;
  margin-bottom: 10px;

  .ticket-list-header {
    display: flex;
    align-items: center;
    padding: 0 3px 5px 3px;
    border-bottom: 1px solid #dae1e6;

    .ticket-list-header-label {
      flex: 1 1 auto;
      margin: 0 inherit;

      span {
        color: #00bcd4;
      }
    }
  }

  .ticket-list-main {
    max-height: 280px;
    overflow-x: auto;
  }
`;

type ListProps = {
  isToggled: boolean;
};

const detailedStyle = css`
  flex-wrap: nowrap;
  flex-direction: column;
`;

export const List = styled.ul<ListProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background-color: #fff;
  margin-top: 1rem;
  padding: 15px;
  border-radius: 5px;
  ${({ isToggled }) => isToggled && detailedStyle}

  .no-tickets {
    font-size: 1.5rem;
    font-weight: bold;
    color: #8e9499;
  }
`;
