import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffa02b;
  border-width: 2px 0 2px 0;
  padding: 2px 6px;
  margin-bottom: 12px;
`;

const Title = styled.div`
  margin: 2px;
`;

const TimeArea = styled.div`
  font-size: 1.25rem;
  font-weight: 1.25rem;
`;

export { Root, TimerWrapper, Title, TimeArea };
