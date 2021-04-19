import { RANK_CONVERTER, RANK_TABLE } from '../constants';

const calculateResult = ({ winningNumbers, lottos, price }) => {
  const rankCount = {
    '1st': 0,
    '2nd': 0,
    '3rd': 0,
    '4th': 0,
    '5th': 0,
  };
  const { mainNumbers, bonusNumber } = winningNumbers;

  lottos.forEach((lotto) => {
    const mainPoint = lotto.numbers.filter((number) => mainNumbers.includes(number)).length;
    const isSecondRanked = mainPoint === 5 && lotto.numbers.includes(bonusNumber);
    const bonusPoint = isSecondRanked ? 0.5 : 0;

    if (mainPoint < 3) return;
    rankCount[RANK_CONVERTER[mainPoint + bonusPoint]]++;
  });

  const earningRate = calculateEarningRate(rankCount, price);

  return { rankCount, earningRate };
};

const calculateEarningRate = (rankCount, price) => {
  const totalEarning = Object.entries(rankCount).reduce((sum, [rank, count]) => {
    return sum + count * RANK_TABLE[rank].prize;
  }, 0);

  return ((totalEarning / price - 1) * 100).toFixed(2);
};

export { calculateResult };
