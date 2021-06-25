import React from 'react';
import './LottoTicket.styles.css';
import lottoImage from '../../images/ticket.png';
import { LOTTO_NUMBER_SEPARATOR } from '../../constants/message';

const LottoTicket = ({ lotto }) => {
  return (
    <div className="lotto">
      <img className="lotto-image" src={lottoImage} alt="lotto" />
      <span className="lotto-number">{lotto.map((v) => (v < 10 ? `0${v}` : v)).join(LOTTO_NUMBER_SEPARATOR)}</span>
    </div>
  );
};

export default LottoTicket;
