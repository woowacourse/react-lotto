import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LottoTicket from '../LottoTicket';
import { PurchasedLottoContainer } from './styles';

const PurchasedLotto = ({ lottoList }) => {
  const [isShowNumber, setIsShowNumber] = useState(false);

  const onToggleLottoNumber = ({ target }) => {
    setIsShowNumber(target.checked);
  };

  return (
    <PurchasedLottoContainer>
      <span>총 {lottoList.length}개를 구매하였습니다.</span>
      <label className="switch">
        <input type="checkbox" className="switch-input" onChange={onToggleLottoNumber} />
        <span>번호보기</span>
      </label>
      <ul className={isShowNumber ? '' : 'hide-number'}>
        {lottoList.map((lotto, index) => (
          <li key={index}>
            <LottoTicket lottoNumbers={lotto} isShowNumber={isShowNumber} />
          </li>
        ))}
      </ul>
    </PurchasedLottoContainer>
  );
};

PurchasedLotto.propTypes = {
  lottoList: PropTypes.array.isRequired,
};

export default PurchasedLotto;
