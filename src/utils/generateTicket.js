import { LOTTO } from './constants';

const getRandomNumber = () => {
  // prettier-ignore
  return Math.floor(
    Math.random() * (LOTTO.MAX_NUMBER - LOTTO.MIN_NUMBER + 1)
    + LOTTO.MIN_NUMBER
  );
};

const generateLottoNumbers = () => {
  const randomNumbers = new Set();
  while (randomNumbers.size < LOTTO.LENGTH) {
    randomNumbers.add(getRandomNumber());
  }

  return Array.from(randomNumbers);
};

export default generateLottoNumbers;
