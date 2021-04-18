import styled, { css } from 'styled-components';

type WrapperProps = {
  display?: 'block' | 'flex' | 'inline-block';
};

const flexCenter = css`
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div<WrapperProps>`
  display: ${({ display }) => display || 'block'};
  ${({ display }) => display === 'flex' && flexCenter}
`;

export default Wrapper;
