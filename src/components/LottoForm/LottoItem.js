import { useEffect, useRef } from 'react';
import { LOTTO_VALUE } from '../../constants';
import { getRandomNumberArray } from '../../utils';

const getMatchedCount = (array1, array2) => {
  return array1.length + array2.length - new Set([...array1, ...array2]).size;
};

const getWinningCount = (matchedCount, hasBonusNumber) => {
  switch (matchedCount) {
    case LOTTO_VALUE.MATCHED_COUNT.FIRST:
      return LOTTO_VALUE.RANK.FIRST;
    case LOTTO_VALUE.MATCHED_COUNT.THIRD:
      return hasBonusNumber ? LOTTO_VALUE.RANK.SECOND : LOTTO_VALUE.RANK.THIRD;
    case LOTTO_VALUE.MATCHED_COUNT.FOURTH:
      return LOTTO_VALUE.RANK.FOURTH;
    case LOTTO_VALUE.MATCHED_COUNT.FIFTH:
      return LOTTO_VALUE.RANK.FIFTH;
    default:
      return;
  }
};

export default function LottoItem({
  bonusNumber,
  winningNumbers,
  isModalOpened,
  isToggled,
  increaseWinningCounts,
}) {
  const numbers = useRef(
    getRandomNumberArray(LOTTO_VALUE.MIN_NUMBER, LOTTO_VALUE.MAX_NUMBER, LOTTO_VALUE.NUMBER_COUNT)
  );

  useEffect(() => {
    if (isModalOpened) {
      const hasBonusNumber = numbers.current.includes(bonusNumber);
      const matchedCount = getMatchedCount(winningNumbers, numbers.current);
      const winningCount = getWinningCount(matchedCount, hasBonusNumber);

      winningCount && increaseWinningCounts(winningCount);
    }
  }, [isModalOpened]);

  return (
    <li className={`lotto-item ${isToggled ? 'toggle' : ''}`}>
      <span className="lotto-icon">🎟</span>
      {isToggled && <span>{[...numbers.current].join(', ')}</span>}
    </li>
  );
}
