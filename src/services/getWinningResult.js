import { LOTTERY, PRIZE } from '../utils';

export const getWinningResult = ({
  winningNumbers,
  bonusNumber,
  lotteries,
}) => {
  const rankCount = getRankCount({
    winningNumbers,
    bonusNumber,
    lotteries,
  });
  const earningRate = getEarningRate(rankCount, lotteries);

  return { rankCount, earningRate };
};

function getRankCount({ winningNumbers, bonusNumber, lotteries }) {
  const rankCount = {
    [PRIZE.FIRST.RANK]: 0,
    [PRIZE.SECOND.RANK]: 0,
    [PRIZE.THIRD.RANK]: 0,
    [PRIZE.FOURTH.RANK]: 0,
    [PRIZE.FIFTH.RANK]: 0,
  };

  lotteries.forEach(lottery => {
    const rank = getRank({ winningNumbers, bonusNumber, lottery });

    if (rank) {
      rankCount[rank]++;
    }
  });

  return rankCount;
}

function getRank({ winningNumbers, bonusNumber, lottery }) {
  const rank = {
    [PRIZE.FIRST.WINNING_COUNT]: () => PRIZE.FIRST.RANK,
    [PRIZE.SECOND.WINNING_COUNT]: isBonusMatched =>
      isBonusMatched ? PRIZE.SECOND.RANK : PRIZE.THIRD.RANK,
    [PRIZE.FOURTH.WINNING_COUNT]: () => PRIZE.FOURTH.RANK,
    [PRIZE.FIFTH.WINNING_COUNT]: () => PRIZE.FIFTH.RANK,
  };
  const isBonusMatched = lottery.numbers.includes(bonusNumber);
  const matchWinningCount = lottery.numbers.reduce((winningCount, number) => {
    if (!winningNumbers.includes(number)) {
      return winningCount;
    }

    return ++winningCount;
  }, 0);

  return rank[matchWinningCount]?.(isBonusMatched);
}

function getEarningRate(rankCount, lotteries) {
  const spentMoney = lotteries.length * LOTTERY.PRICE;
  const earningRate =
    (calculateEarning(rankCount, spentMoney) / spentMoney) * 100;

  return Number.isInteger(earningRate) ? earningRate : earningRate.toFixed(2);
}

function calculateEarning(rankCount, spentMoney) {
  const prizeMoney = {
    [PRIZE.FIRST.RANK]: PRIZE.FIRST.MONEY,
    [PRIZE.SECOND.RANK]: PRIZE.SECOND.MONEY,
    [PRIZE.THIRD.RANK]: PRIZE.THIRD.MONEY,
    [PRIZE.FOURTH.RANK]: PRIZE.FOURTH.MONEY,
    [PRIZE.FIFTH.RANK]: PRIZE.FIFTH.MONEY,
  };

  return Object.entries(rankCount).reduce((earning, [rank, count]) => {
    return earning + prizeMoney[rank] * count;
  }, -spentMoney);
}
