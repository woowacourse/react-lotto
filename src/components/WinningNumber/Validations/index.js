function isInputValueChanged(currentInputValue, inputValue) {
  if (currentInputValue === inputValue) {
    return false;
  }
  return true;
}

function isInputValueExist(inputValue) {
  if (!inputValue) return false;
  return true;
}

function isInputValueDuplicated({ winningNumberInputs }, inputValue) {
  if (!winningNumberInputs.includes(inputValue)) {
    return false;
  }
  return true;
}

export { isInputValueChanged, isInputValueExist, isInputValueDuplicated };
