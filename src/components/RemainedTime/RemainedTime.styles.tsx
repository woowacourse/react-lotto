import Wrapper from '../common/Wrapper';
import styled from 'styled-components';

export const RemainedTimeWrapper = styled(Wrapper)`
  margin-bottom: 10px;
  padding: 20px 0;
  border: 1px solid #dae1e6;
  border-radius: 5px;
  width: 100%;
  text-align: center;

  .remain-time-text {
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    margin: 5px 0;

    span {
      color: #00bcd4;
    }
  }
`;
