const isInputValueExist = (inputValue) => !!inputValue;

const isInputValueDuplicated = (prevValues, inputValue, index) => {
  return prevValues.some((el, idx) => el.value === inputValue && idx !== index);
};

export { isInputValueExist, isInputValueDuplicated };
