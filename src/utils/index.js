export const isSameArray = (array1, array2) => {
  return array1.length === new Set([...array1, ...array2]).size;
};
