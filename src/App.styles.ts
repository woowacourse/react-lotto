import styled from 'styled-components';
import { Wrapper } from './common/Wrapper';

export const AppWrapper = styled(Wrapper)`
  flex-direction: column;
  align-items: center;
  height: 100vh;
  min-height: 800px;
  width: 400px;
  margin: 0 auto;

  .app-title {
    text-align: center;
    margin-bottom: 3.5rem;
  }
`;
