import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LottoTicket from './lottoTicket/LottoTicket';
import './PurchasedLotto.scss';

const PurchasedLotto = (props) => {
  const [isShowNumber, setIsShowNumber] = useState(false);

  const onToggleLottoNumber = ({ target }) => {
    setIsShowNumber(target.checked);
  };

  return (
    <section className="PurchasedLotto">
      <span>총 {props.lottoList.length}개를 구매하였습니다.</span>
      <label className="switch">
        <input type="checkbox" className="switch-input" onChange={onToggleLottoNumber} />
        <span>번호보기</span>
      </label>
      <ul className={isShowNumber ? '' : 'hide-number'}>
        {props.lottoList.map((lotto, index) => (
          <li key={index}>
            <LottoTicket lottoNumbers={lotto} isShowNumber={isShowNumber} />
          </li>
        ))}
      </ul>
    </section>
  );
};

PurchasedLotto.propTypes = {
  lottoList: PropTypes.array.isRequired,
};

export default PurchasedLotto;
