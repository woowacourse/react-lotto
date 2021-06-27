import React from 'react';
import PropTypes from 'prop-types';
import { LottoItemLi, LottoNumbersSpan } from './LottoItem.style';

export const LottoItem = ({ lotto }) => {
  return (
    <LottoItemLi>
      <span>🎟️ </span>
      {lotto && <LottoNumbersSpan>{lotto.join(' ')}</LottoNumbersSpan>}
    </LottoItemLi>
  );
};

LottoItem.propTypes = {
  lotto: PropTypes.array.isRequired,
};

export default LottoItem;
