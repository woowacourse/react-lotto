import { LOTTO_VALUE } from '../../constants';
import { getRandomNumberArray } from '../../utils';
import { useEffect, useRef } from 'react';

export default function LottoItem(props) {
  const isToggled = props.isToggled;
  const isModalOpened = props.isModalOpened;
  const numbers = useRef(
    getRandomNumberArray(LOTTO_VALUE.MIN_NUMBER, LOTTO_VALUE.MAX_NUMBER, LOTTO_VALUE.NUMBER_COUNT)
  );

  useEffect(() => {
    if (isModalOpened) {
      increaseWinningCounts();
    }
  }, [isModalOpened]);

  const getMatchedCount = () => {
    return (
      props.winningNumbers.length +
      numbers.current.length -
      new Set([...props.winningNumbers, ...numbers.current]).size
    );
  };

  const increaseWinningCounts = () => {
    // 일치하는 개수를 구하는 연산식
    const matchedCount = getMatchedCount();
    const bonusNumber = parseInt(props.bonusNumber);

    if (matchedCount === LOTTO_VALUE.MATCHED_COUNT.FIRST) {
      props.increaseWinningCounts(LOTTO_VALUE.RANK.FIRST);
    }
    if (matchedCount === LOTTO_VALUE.MATCHED_COUNT.THIRD) {
      if (numbers.current.includes(bonusNumber)) {
        props.increaseWinningCounts(LOTTO_VALUE.RANK.SECOND);
      } else {
        props.increaseWinningCounts(LOTTO_VALUE.RANK.THIRD);
      }
    }
    if (matchedCount === LOTTO_VALUE.MATCHED_COUNT.FOURTH) {
      props.increaseWinningCounts(LOTTO_VALUE.RANK.FOURTH);
    }
    if (matchedCount === LOTTO_VALUE.MATCHED_COUNT.FIFTH) {
      props.increaseWinningCounts(LOTTO_VALUE.RANK.FIFTH);
    }
  };

  return (
    <li className={`lotto-item ${isToggled ? 'toggle' : ''}`}>
      <span className="lotto-icon">🎟</span>
      {isToggled && <span>{[...numbers.current].join(', ')}</span>}
    </li>
  );
}
