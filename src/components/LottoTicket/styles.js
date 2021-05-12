import styled from 'styled-components';

export const LottoTicketContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Emoji = styled.span`
  font-size: 2rem;
`;

export const LottoNumberText = styled.p`
  font-size: 1.2rem;
  margin-left: 1rem;
  display: ${({ isShowNumber }) => (isShowNumber ? 'block' : 'none')};
`;
