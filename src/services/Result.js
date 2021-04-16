import { RANKING, RANKING_TABLE, WINNING_TABLE } from '../constants';
import { getIntersectionCount, initObject } from '../utils';

const getRanking = (lotto, { winningNumberList, bonusNumber }) => {
  let matchCount = getIntersectionCount(lotto, winningNumberList);

  if (matchCount === 5) {
    const matchBonusCount = getIntersectionCount(lotto, [bonusNumber]);
    matchCount += matchBonusCount && 0.5;
  }

  return RANKING_TABLE[matchCount] || RANKING.NO_PRIZE;
};

export const getWinningResult = (lottoList, { winningNumber, bonusNumber }) => {
  const winningNumberList = Object.values(winningNumber);

  let winningResult = initObject(
    Object.values(RANKING).filter((ranking) => ranking !== RANKING.NO_PRIZE),
    0
  );

  Object.values(lottoList).forEach((lotto) => {
    const ranking = getRanking(lotto, { winningNumberList, bonusNumber });

    if (ranking !== RANKING.NO_PRIZE) {
      winningResult = {
        ...winningResult,
        [ranking]: winningResult[ranking] + 1,
      };
    }
  });

  return winningResult;
};

export const getProfitRate = (winningResult, moneyInput) => {
  const total = Object.entries(winningResult).reduce((accumulator, currentValue) => {
    const [ranking, winningCount] = currentValue;
    return accumulator + WINNING_TABLE[ranking].PRIZE * winningCount;
  }, 0);

  if (total < moneyInput) {
    return Math.floor((total / moneyInput - 1) * 100);
  }

  return Math.floor(total / moneyInput) * 100;
};
