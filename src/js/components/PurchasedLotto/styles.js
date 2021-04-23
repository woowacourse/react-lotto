import styled from 'styled-components';
import { CUSTOM_SCROLLBAR } from '../../utils/styles';

export const PurchasedLottoContainer = styled.section`
  margin-bottom: 2rem;

  ul {
    max-height: 35vh;
    overflow-y: auto;
  }

  li {
    margin: 0 auto;
  }

  .toggle-btn {
    float: right;

    &::after {
      clear: both;
    }
  }

  .hide-number {
    display: grid;
    grid-template-columns: repeat(10, 10%);
  }

  ${CUSTOM_SCROLLBAR}
`;
