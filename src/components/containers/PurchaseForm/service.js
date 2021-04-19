import { MESSAGE, LOTTO_UNIT_PRICE, MIN_MONETARY_UNIT } from '../../../constants';

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
