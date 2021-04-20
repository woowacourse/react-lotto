import styled, { css } from 'styled-components';

type WrapperProps = {
  display?: 'block' | 'flex' | 'inline-block';
};

const flexCenter = css`
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div<WrapperProps>`
  display: ${({ display }) => display || 'block'};
  ${({ display }) => display === 'flex' && flexCenter}
`;
