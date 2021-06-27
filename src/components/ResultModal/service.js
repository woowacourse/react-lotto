import { BONUS_BALL_EXIST, BONUS_BALL_NOT_EXIST, PRIZE } from '../../constants/number';

const calculatePrize = (winningBallCount, bonusBallCount) => {
  switch (winningBallCount) {
    case 3:
      return PRIZE.FIFTH;

    case 4:
      return PRIZE.FOURTH;

    case 5:
      if (bonusBallCount) {
        return PRIZE.SECOND;
      }

      return PRIZE.THIRD;

    case 6:
      return PRIZE.FIRST;

    default:
      return 0;
  }
};

const countWinningBall = (ticket, lotteryNumbers) => {
  const bonusNumberExcepted = lotteryNumbers.slice(0, lotteryNumbers.length - 1);
  return ticket.filter((ball) => bonusNumberExcepted.some((number) => number.value === ball))
    .length;
};

const countBonusBall = (ticket, bonusNumber) =>
  ticket.some((ball) => ball === bonusNumber) ? BONUS_BALL_EXIST : BONUS_BALL_NOT_EXIST;

const calculateTotalPrize = (tickets, lotteryNumbers, bonusNumber) =>
  tickets.reduce(
    (sum, currentTicket) =>
      sum +
      calculatePrize(
        countWinningBall(currentTicket, lotteryNumbers),
        countBonusBall(currentTicket, bonusNumber)
      ),
    0
  );

export { calculateTotalPrize };
