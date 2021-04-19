import { getRandomNumber } from '../../utils';
import { LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_NUMBERS_LENGTH } from '../../constants';

export const createLotto = (array = []) => {
  const number = getRandomNumber({ min: LOTTO_MIN_NUMBER, max: LOTTO_MAX_NUMBER });

  if (array.length === LOTTO_NUMBERS_LENGTH) {
    return array.sort((a, b) => a - b);
  }
  if (!array.includes(number)) {
    array.push(number);
  }

  return createLotto(array);
};
