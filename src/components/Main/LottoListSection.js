import { useState } from 'react';
import { LottoItem } from './index';

export default function LottoListSection(props) {
  const lottoCount = props.lottoCount;
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <section className="mt-5">
      <div className="d-flex justify-space-between items-center">
        <div>
          총 <span>{lottoCount}</span>개를 구매하였습니다.
        </div>
        <label className="toggle-button">
          <input type="checkbox" onChange={onToggle} />
          <span className="toggle-slider"></span>
        </label>
      </div>
      <ul className="lotto-list">
        {Array.from({ length: lottoCount }).map((_, index) => (
          <LottoItem
            key={index}
            isToggled={toggle}
            winningNumbers={props.winningNumbers}
            bonusNumber={props.bonusNumber}
            increaseWinningCounts={props.increaseWinningCounts}
            isModalOpened={props.isModalOpened}
          />
        ))}
      </ul>
    </section>
  );
}
