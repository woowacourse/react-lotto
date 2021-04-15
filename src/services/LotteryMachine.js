import { getRandomNumbers, idMaker, LOTTERY } from '../utils';

export default class LotteryMachine {
  publishLotteries(money) {
    const lotteryAmount = money / LOTTERY.PRICE;
    const lotteries = Array(lotteryAmount)
      .fill(0)
      .map(() => ({
        id: idMaker.next().value,
        numbers: getRandomNumbers({
          min: LOTTERY.MIN_NUMBER,
          max: LOTTERY.MAX_NUMBER,
          size: LOTTERY.NUMBER_COUNT,
        }),
      }));

    return lotteries;
  }
}
