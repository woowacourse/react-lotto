export const isDivisible = (dividend, divisor) => {
  if (divisor === 0) {
    throw new Error("Invalid divisor");
  }

  return dividend % divisor === 0;
};

export const isDistinctNumbers = (numbersArray) => {
  const numbersSet = new Set(numbersArray);

  return numbersSet.size === numbersArray.length;
};
