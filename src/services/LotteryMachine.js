import { getRandomNumber, idMaker, LOTTERY } from "../utils";

export default class LotteryMachine {
  publishLotteries(money) {
    const lotteryAmount = money / LOTTERY.PRICE;
    const lotteries = Array(lotteryAmount)
      .fill(0)
      .map(() => ({
        id: idMaker.next().value,
        numbers: this.publishLottery(),
      }));

    return lotteries;
  }

  publishLottery() {
    const numberSet = new Set();

    while (numberSet.size < LOTTERY.NUMBER_COUNT) {
      numberSet.add(getRandomNumber(LOTTERY.MIN_NUMBER, LOTTERY.MAX_NUMBER));
    }

    return [...numberSet];
  }
}
