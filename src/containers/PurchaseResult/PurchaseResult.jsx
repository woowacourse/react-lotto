import React, { useState } from 'react';
import Lotto from '../../components/Lotto/Lotto';
import './PurchaseResult.styles.css';

const PurchaseResult = ({ lottoBundle }) => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggleChange = (event) => {
    setIsToggled(event.target.checked);
  };

  return (
    <div className="purchase-lotto-wrapper">
      <div className="toggle-button-wrapper">
        <label htmlFor="toggle-button" className="toggle-button-label">
          <input id="toggle-button" type="checkbox" onChange={onToggleChange} />
          <span className="toggle-button-text">번호보기</span>
        </label>
      </div>
      <div>
        총 <span className="number-of-lotto">{lottoBundle.length}</span>개 구매하였습니다.
      </div>
      <section className={`display-section ${isToggled && 'toggle'}`}>
        {lottoBundle.map((v, i) => (
          <Lotto lotto={v} key={i} />
        ))}
      </section>
    </div>
  );
};

export default PurchaseResult;
