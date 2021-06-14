import { BALL_COLOR_RANGE } from '../constants/type';

function chooseBallColor(number) {
  switch (true) {
    case 1 <= number && number <= 10:
      return BALL_COLOR_RANGE.YELLOW;

    case 11 <= number && number <= 20:
      return BALL_COLOR_RANGE.ORANGE;

    case 21 <= number && number <= 30:
      return BALL_COLOR_RANGE.BLUE;

    case 31 <= number && number <= 40:
      return BALL_COLOR_RANGE.PURPLE;

    case 41 <= number && number <= 45:
      return BALL_COLOR_RANGE.RED;

    default:
      return BALL_COLOR_RANGE.DEFAULT;
  }
}

export default chooseBallColor;
