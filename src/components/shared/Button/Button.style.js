import styled, { css } from 'styled-components';

const ButtonSize = {
  small: css`
    min-width: 64px;
  `,
  medium: css`
    min-width: 128px;
  `,
  large: css`
    min-width: 320px;
  `,
};

export const StyledButton = styled.button`
  height: 36px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;
  background-color: #c71f1f;
  border-color: #c71f1f;
  color: #fce9e9;

  ${({ size }) => ButtonSize[size]};
`;
