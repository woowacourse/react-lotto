import {
  BONUS_CHECK_REQUIRED_COUNT,
  BONUS_COUNT,
  LOTTO_UNIT_PRICE,
  RESULT_TABLE_DATA,
} from '../../../constants';

export const getNumOfMatch = (lotto, winningNumber) => {
  const { winningNumbers, bonusNumber } = winningNumber;
  const numOfMatch = lotto.reduce((acc, cur) => acc + Number(winningNumbers.includes(cur)), 0);

  if (numOfMatch === BONUS_CHECK_REQUIRED_COUNT && lotto.includes(bonusNumber)) {
    return numOfMatch + BONUS_COUNT;
  }
  return numOfMatch;
};

export const getMatchCount = (lottoBundle, winningNumber) => {
  return lottoBundle.reduce((acc, cur) => {
    const numOfMatch = getNumOfMatch(cur, winningNumber);

    acc[numOfMatch] = acc[numOfMatch] + 1 || 1;
    return acc;
  }, {});
};

export const getComputedResult = (lottoBundle, winningNumber) => {
  const matchCount = getMatchCount(lottoBundle, winningNumber);
  const investment = lottoBundle.length * LOTTO_UNIT_PRICE;
  const profit = Object.keys(matchCount).reduce(
    (acc, key) => acc + matchCount[key] * RESULT_TABLE_DATA[key].PRIZE,
    0,
  );

  return {
    profit,
    rateOfReturn: (((profit - investment) / investment) * 100).toFixed(2),
  };
};
