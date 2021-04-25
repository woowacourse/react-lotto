import { MESSAGE } from './constants';
import inputValidator from './inputValidator';

const getNonEmptyInputValues = (inputs) => inputs.filter((inputValue) => inputValue !== '');

const hasUniqueInputValues = (inputs) => {
  const nonEmptyInputValues = getNonEmptyInputValues(inputs);

  return new Set(nonEmptyInputValues).size === nonEmptyInputValues.length;
};

const isAllNumberInRange = (inputs) => {
  const nonEmptyInputValues = getNonEmptyInputValues(inputs);

  return nonEmptyInputValues.every(inputValidator.isNumberInRange);
};

const hasEmptyInputValues = (inputs) => {
  const nonEmptyInputValues = getNonEmptyInputValues(inputs);

  return nonEmptyInputValues.length < inputs.length;
};

const isFormValid = (inputs) => {
  return getFormValidationMessage(inputs) === '';
};

const getFormValidationMessage = (inputs) => {
  if (!hasUniqueInputValues(inputs)) {
    return MESSAGE.WINNING_NUMBER.DUPLICATED_NUMBERS;
  }

  if (!isAllNumberInRange(inputs)) {
    return MESSAGE.WINNING_NUMBER.OUT_OF_RANGE;
  }

  if (hasEmptyInputValues(inputs)) {
    return MESSAGE.WINNING_NUMBER.REQUIRED_NEXT_INPUT;
  }

  return '';
};

const getValidationMessage = (inputs, value) => {
  const inputValidationMessage = inputValidator.getInputValidationMessage(inputs, value);

  if (inputValidationMessage !== '') {
    return inputValidationMessage;
  }

  const formValidationMessage = getFormValidationMessage(inputs);

  if (formValidationMessage !== '') {
    return formValidationMessage;
  }

  return MESSAGE.WINNING_NUMBER.VALID_FORM;
};

export default { isFormValid, getValidationMessage };
