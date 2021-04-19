import React from 'react';
import PropTypes from 'prop-types';
import './LottoTicket.scss';

const LottoTicket = (props) => (
  <div className="LottoTicket">
    <span className="lotto-ticket-emoji">🎟️</span>
    <p className={props.isShowNumber ? '' : 'd-none'}>{props.lottoNumbers.join(', ')}</p>
  </div>
);
LottoTicket.propTypes = {
  isShowNumber: PropTypes.bool.isRequired,
  lottoNumbers: PropTypes.array.isRequired,
};

export default LottoTicket;
