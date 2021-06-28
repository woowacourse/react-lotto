import { MESSAGE } from '../../constants/message';
import { LOTTO_MAX_NUMBER, LOTTO_MIN_NUMBER, LOTTO_NUMBERS_LENGTH, LOTTO_UNIT_PRICE } from '../../constants/lottoRules';

export const validateValue = (value) => {
  if (value < LOTTO_UNIT_PRICE) {
    return {
      message: MESSAGE.INVALID_PURCHASE_AMOUNT_UNDER_LOTTO_UNIT_PRICE,
      isValidInputValue: false,
    };
  }

  if (value % LOTTO_UNIT_PRICE !== 0) {
    return {
      message: MESSAGE.INVALID_UNIT_PURCHASE_AMOUNT,
      isValidInputValue: false,
    };
  }

  return { message: '', isValidInputValue: true };
};

const getRandomNumber = ({ min, max }) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createLotto = (array = []) => {
  const randomNumber = getRandomNumber({ min: LOTTO_MIN_NUMBER, max: LOTTO_MAX_NUMBER });

  if (array.length === LOTTO_NUMBERS_LENGTH) {
    return array.sort((a, b) => a - b);
  }
  if (!array.includes(randomNumber)) {
    array.push(randomNumber);
  }

  return createLotto(array);
};

export const getLottoBundle = (money) => {
  const numberOfLotto = money / LOTTO_UNIT_PRICE;

  return [...Array(numberOfLotto)].map(() => createLotto());
};
