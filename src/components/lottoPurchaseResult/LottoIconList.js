import React from 'react';
import PropTypes from 'prop-types';
import { LottoIconListUl } from './LottoIconList.style';
import LottoItem from './LottoItem';

export const LottoIconList = ({ lottoCount }) => {
  return (
    <LottoIconListUl>
      {Array.from({ length: lottoCount }, (_, idx) => (
        <LottoItem key={idx} />
      ))}
    </LottoIconListUl>
  );
};

LottoIconList.propTypes = {
  lottoCount: PropTypes.number.isRequired,
};

export default LottoIconList;
