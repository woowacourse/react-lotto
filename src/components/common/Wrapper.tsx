import styled, { css } from 'styled-components';

interface Props {
  display?: 'block' | 'flex' | 'inline-block';
}

const flexCenter = css`
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div<Props>`
  display: ${({ display }) => display || 'block'};
  ${({ display }) => display === 'flex' && flexCenter}
`;
