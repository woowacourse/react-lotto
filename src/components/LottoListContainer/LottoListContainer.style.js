import styled, { css } from 'styled-components';

export const Section = styled.section`
  margin: 2rem 0.5rem 0.5rem;
`;

export const LottoList = styled.ul`
  border-radius: 5px;
  border: 0.5px solid #e9e2e2;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  padding: 0.6rem;

  ${({ isShowNumbers }) =>
    isShowNumbers &&
    css`
      flex-wrap: nowrap;
      flex-direction: column;
      max-height: 200px;
      overflow-y: auto;
    `}
`;

export const LottoItem = styled.li`
  display: flex;
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`;

export const LottoNumberDetails = styled.span`
  font-size: 1.25rem;
  margin-left: 12px;
`;
