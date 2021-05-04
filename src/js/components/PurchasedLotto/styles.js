import styled, { css } from 'styled-components';
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

  ${CUSTOM_SCROLLBAR}
`;

export const ToggleButtonContainer = styled.span`
  float: right;

  &::after {
    clear: both;
  }
`;

const hideNumberCSS = css`
  display: grid;
  grid-template-columns: repeat(10, 10%);
`;

export const LottoList = styled.ul`
  ${({ isShowNumber }) => !isShowNumber && hideNumberCSS}
`;
