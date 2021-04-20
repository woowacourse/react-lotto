import { Lottery } from '../models';
import { getRandomNumbers, idMaker, LOTTERY } from '../utils';

export const publishLotteries = money => {
  const lotteryAmount = money / LOTTERY.PRICE;
  const lotteries = Array(lotteryAmount)
    .fill(0)
    .map(() => {
      const id = idMaker.next().value;
      const numbers = getRandomNumbers({
        min: LOTTERY.MIN_NUMBER,
        max: LOTTERY.MAX_NUMBER,
        size: LOTTERY.NUMBER_COUNT,
      });

      return new Lottery(id, numbers);
    });

  return lotteries;
};
