export const toFixedNumber = (num, numOfDigit) => {
  if (num % 1 > 0) {
    return num.toFixed(numOfDigit);
  }

  return num;
};
