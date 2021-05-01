import { getRandomNumber } from '../../../utils';
import {
  MESSAGE,
  LOTTO_UNIT_PRICE,
  MIN_MONETARY_UNIT,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_NUMBERS_LENGTH,
} from '../../../constants';

export const validatePurchaseAmount = (money) => {
  if (money % MIN_MONETARY_UNIT > 0) {
    return {
      validationMessage: MESSAGE.INVALID_PURCHASE_AMOUNT_UNDER_MONETARY_UNIT,
      isSubmitButtonDisabled: true,
    };
  }

  if (money < LOTTO_UNIT_PRICE) {
    return {
      validationMessage: MESSAGE.INVALID_PURCHASE_AMOUNT_UNDER_LOTTO_UNIT_PRICE,
      isSubmitButtonDisabled: true,
    };
  }

  return {
    validationMessage: '',
    isSubmitButtonDisabled: false,
  };
};

export const payForLotto = (money) => {
  const change = money % LOTTO_UNIT_PRICE;
  const numOfLotto = (money - change) / LOTTO_UNIT_PRICE;

  return { change, numOfLotto };
};

const createLotto = (array = []) => {
  const number = getRandomNumber({ min: LOTTO_MIN_NUMBER, max: LOTTO_MAX_NUMBER });

  if (array.length === LOTTO_NUMBERS_LENGTH) {
    return array.sort((a, b) => a - b);
  }
  if (!array.includes(number)) {
    array.push(number);
  }

  return createLotto(array);
};

export const getLottoBundle = (numOfLotto) => [...Array(numOfLotto)].map(() => createLotto());
