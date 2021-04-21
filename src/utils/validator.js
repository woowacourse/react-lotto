import { UNIT_AMOUNT } from '../constants/standard.js';

export const isValidPurchaseAmount = money => {
  return money / UNIT_AMOUNT && money % UNIT_AMOUNT === 0;
};

export const hasDuplicatedItemInList = list => {
  return new Set(list).size !== list.length;
};

export const isNumbersInValidRange = (nums, from, to) => {
  return nums.every(num => from <= num && num <= to);
};
