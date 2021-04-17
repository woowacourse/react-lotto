export const hasDuplicatedNumber = numbers => {
  const set = new Set(numbers);

  return set.size !== numbers.length;
};
