export const RANK_INDEX = Object.freeze({
  FIRST: 0,
  SECOND: 1,
  THIRD: 2,
  FOURTH: 3,
  FIFTH: 4,
});

export const WINNING_NUMBER_INDEX = Object.freeze({
  FIRST: 0,
  SECOND: 1,
  THIRD: 2,
  FOURTH: 3,
  FIFTH: 4,
  SIXTH: 5,
  BONUS: 6,
});

export const WINNING_NUMBER_LEGNTH = Object.keys(WINNING_NUMBER_INDEX).length;

export const PRIZE = Object.freeze({
  [RANK_INDEX.FIRST]: 200000000,
  [RANK_INDEX.SECOND]: 30000000,
  [RANK_INDEX.THIRD]: 1500000,
  [RANK_INDEX.FOURTH]: 50000,
  [RANK_INDEX.FIFTH]: 5000,
});

export const MATCH = Object.freeze({
  [RANK_INDEX.FIRST]: 6,
  [RANK_INDEX.SECOND]: 5,
  [RANK_INDEX.THIRD]: 5,
  [RANK_INDEX.FOURTH]: 4,
  [RANK_INDEX.FIFTH]: 3,
});
