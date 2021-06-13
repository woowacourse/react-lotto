import styled, { css } from 'styled-components';

export const FormCss = css`
  margin: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  border: 0.5px solid rgba(233, 226, 226, 0.3);

  & h2 {
    margin-top: 0.5rem;
    margin-bottom: 0;
    font-size: 1.5rem;
  }
`;

export const SelectNumberList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  text-align: center;
  justify-content: center;
`;
