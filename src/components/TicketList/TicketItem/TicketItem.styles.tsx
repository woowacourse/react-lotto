import styled from 'styled-components';
import Wrapper from '../../common/Wrapper';

export const TicketItemWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  height: 50px;
  margin: 0px auto;
  border-bottom: 1px solid #dae1e6;

  .ticket-icon {
    margin: 0 10px;
    font-size: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ticket-numbers {
    line-height: 3rem;
    display: flex;

    .ticket-number {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.9rem;
      width: 30px;
      height: 30px;
      color: #767676;
      margin-right: 10px;
      padding: 1px;
      border: 1px solid #767676;
      font-weight: bold;
      border-radius: 50%;
    }
  }
`;
