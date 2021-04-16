export { calculateEarningRate, getRanking, countMatchedNumbers } from "./lotto";

export const shuffle = (arr) => {
  const newArr = [...arr];

  for (let i = newArr.length; i; i -= 1) {
    const j = Math.floor(Math.random() * i);
    [newArr[i - 1], newArr[j]] = [newArr[j], newArr[i - 1]];
  }

  return newArr;
};

export const deepCopyJSONObject = (obj) => JSON.parse(JSON.stringify(obj));

export const createDistinctRandomIntegers = (from, to, length) => {
  const fullLength = to - from + 1;

  if (fullLength < length) {
    throw new Error("Invalid Length");
  }

  const baseNumbers = shuffle(
    Array.from({ length: fullLength }, (_, i) => from + i)
  );

  return baseNumbers.slice(0, length);
};

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
