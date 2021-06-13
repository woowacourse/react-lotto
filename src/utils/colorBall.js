function chooseBallColor(number) {
  switch (true) {
    case 1 <= number && number <= 10:
      return 'ten-down';

    case 11 <= number && number <= 20:
      return 'twenty-down';

    case 21 <= number && number <= 30:
      return 'thirty-down';

    case 31 <= number && number <= 40:
      return 'fourty-down';

    case 41 <= number && number <= 45:
      return 'fourty-five-down';

    default:
      return '';
  }
}

export default chooseBallColor;
