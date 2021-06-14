import { PRIZE } from '../constants/number';

function calculatePrize(winningBallCount, bonusBallCount) {
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
}

export default calculatePrize;
