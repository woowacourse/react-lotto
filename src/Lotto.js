import { generateRandomNumbers } from './utils';

class Lotto {
  constructor(numbers) {
    this.numbers = numbers;
  }

  static get PRICE_UNIT() {
    return 1000;
  }

  static get MIN_NUMBER() {
    return 1;
  }

  static get MAX_NUMBER() {
    return 45;
  }

  static get NUMBERS_LENGTH() {
    return 6;
  }

  static get LOTTO_PRICE_UNIT() {
    return 1000;
  }

  static generateLottoNumbers() {
    const randomNumbers = new Set();

    while (randomNumbers.size < this.NUMBERS_LENGTH) {
      randomNumbers.add(generateRandomNumbers(this.MIN_NUMBER, this.MAX_NUMBER));
    }

    return [...randomNumbers];
  }
}

export default Lotto;
