import styled, { css } from 'styled-components';

export const MainSection = styled.section`
  max-width: 28.125rem;
  margin: 0 auto;

  & h1 {
    text-align: center;
  }
`;

export const WidthFullDiv = styled.div`
  width: 100%;
`;

export const ModalInnerCss = css`
  border-radius: 5px;
  max-width: 21.875rem;
  background-color: #fff;
  margin: auto;
  padding: 2.5rem;
  transition: top 0.25s ease;
`;
