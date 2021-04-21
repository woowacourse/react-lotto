import { MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER, UNIT_AMOUNT } from '../constants/standard.js';

export const isValidPurchaseAmount = money => {
  return money / UNIT_AMOUNT > 0 && money % UNIT_AMOUNT === 0;
};

export const isDuplicate = nums => {
  return new Set(nums).size !== nums.length;
};

export const isValidRange = nums => {
  return nums.every(num => MIN_LOTTO_NUMBER <= num && num <= MAX_LOTTO_NUMBER);
};
