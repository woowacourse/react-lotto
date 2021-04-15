export const isInRange = (number, { min, max }) => {
  return number < min || number > max;
};

export const hasDuplicatedItem = (itemList) => {
  return itemList.length !== new Set(itemList).size;
};
