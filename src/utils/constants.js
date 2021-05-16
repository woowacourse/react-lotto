export const MAX_PAYMENT = 100000;

export const LOTTERY = {
  PRICE: 1000,
  NUMBER_COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBER_INPUT_MAX_LENGTH: 2,
};

export const RANK = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
};

export const PRIZE = {
  FIRST: {
    RANK: 1,
    WINNING_COUNT: 6,
    MONEY: 2000000000,
  },
  SECOND: {
    RANK: 2,
    WINNING_COUNT: 5,
    MONEY: 30000000,
  },
  THIRD: {
    RANK: 3,
    WINNING_COUNT: 5,
    MONEY: 1500000,
  },
  FOURTH: {
    RANK: 4,
    WINNING_COUNT: 4,
    MONEY: 50000,
  },
  FIFTH: {
    RANK: 5,
    WINNING_COUNT: 3,
    MONEY: 5000,
  },
};

export const MESSAGE = {
  PAYMENT_FORM: {
    INVALID_PAYMENT: "올바른 금액을 입력해 주세요.",
  },
  WINNING_NUMBERS_FORM: {
    HAS_DUPLICATED_NUMBER: "중복인 숫자가 포함되어 있습니다.",
    OUT_OF_RANGE: `숫자는 ${LOTTERY.MIN_NUMBER}이상 ${LOTTERY.MAX_NUMBER}이하여야 합니다.`,
  },
};

export const SELECTOR = {
  ID: {
    PAYMENT_INPUT: "payment-input",
    PAYMENT_SUBMIT: "payment-submit",
  },
};
