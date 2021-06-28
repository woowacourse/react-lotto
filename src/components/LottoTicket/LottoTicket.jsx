import React from 'react';
import './LottoTicket.styles.css';
import lottoImage from '../../images/ticket.png';
import noImage from '../../images/no-image.png';
import { LOTTO_NUMBER_SEPARATOR } from '../../constants/message';
import { MINIMUM_DOUBLE_DIGITS } from '../../constants/numberRules';

const LottoTicket = ({ lotto }) => {
  return (
    <div className="lotto">
      <img className="lotto-image" src={lottoImage} alt="lotto" onError={noImage} />
      <span className="lotto-number">
        {lotto.map((v) => (v < MINIMUM_DOUBLE_DIGITS ? `0${v}` : v)).join(LOTTO_NUMBER_SEPARATOR)}
      </span>
    </div>
  );
};

export default LottoTicket;
