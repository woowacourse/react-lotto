import React from 'react';
import PropTypes from 'prop-types';
import { LottoDetailListUl } from './LottoDetailList.style';
import LottoItem from './LottoItem';

export const LottoDetailList = ({ lottos }) => {
  return (
    <LottoDetailListUl>
      {lottos.map((lotto, idx) => (
        <LottoItem key={idx} lotto={lotto} />
      ))}
    </LottoDetailListUl>
  );
};

LottoDetailList.propTypes = {
  lottos: PropTypes.array.isRequired,
};

export default LottoDetailList;
