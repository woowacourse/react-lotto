import styled, { css } from 'styled-components';

export const FormCss = css`
  align-items: center;
  border: 0.5px solid rgba(233, 226, 226, 0.3);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 2rem 0.5rem;
  padding: 1rem 0;

  & h2 {
    margin-top: 0.5rem;
    margin-bottom: 0;
    font-size: 1.5rem;
  }
`;

export const SelectNumberList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 95%;
`;
