import { LOTTO, MESSAGE } from './constants';

const isNumberTypeValue = (value) => value !== '';

const isNumberInRange = (value) => {
  return LOTTO.MIN_NUMBER <= Number(value) && Number(value) <= LOTTO.MAX_NUMBER;
};

const isUniqueInputValue = (inputs, value) => {
  return inputs.filter((inputValue) => inputValue === value).length === 1;
};

const getInputValidationMessage = (inputs, value) => {
  if (!isNumberTypeValue(value)) {
    return MESSAGE.WINNING_NUMBER.NON_NUMBER_VALUE;
  }

  if (!isNumberInRange(value)) {
    return MESSAGE.WINNING_NUMBER.OUT_OF_RANGE;
  }

  if (!isUniqueInputValue(inputs, value)) {
    return MESSAGE.WINNING_NUMBER.DUPLICATED_NUMBERS;
  }

  return '';
};

const isValidInputValue = (inputs, value) => {
  return getInputValidationMessage(inputs, value) === '';
};

export default {
  isNumberInRange,
  isValidInputValue,
  getInputValidationMessage,
};
