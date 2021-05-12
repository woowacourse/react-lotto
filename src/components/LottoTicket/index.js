import React from 'react';
import PropTypes from 'prop-types';
import { LottoTicketContainer, Emoji, LottoNumberText } from './styles';

const LottoTicket = ({ isShowNumber, lottoNumbers }) => {
  return (
    <LottoTicketContainer>
      <Emoji>🎟️</Emoji>
      <LottoNumberText isShowNumber={isShowNumber}>{lottoNumbers.join(', ')}</LottoNumberText>
    </LottoTicketContainer>
  );
};

LottoTicket.propTypes = {
  isShowNumber: PropTypes.bool.isRequired,
  lottoNumbers: PropTypes.array.isRequired,
};

export default LottoTicket;
