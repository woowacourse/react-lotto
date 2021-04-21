export const LOTTO = {
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBER_LENGTH: 6,
  BONUS_NUMBER_LENGTH: 1,
};

export const BONUS_COUNT = 0.5;
export const NUMBER_COUNT = 1;
export const WINNING_COUNT = {
  SIX: 6,
  FIVE_AND_BONUS: 5.5,
  FIVE: 5,
  FOUR: 4,
  THREE: 3,
};

export const LOTTO_RAFFLE_DAY = {
  DAY: 6, // 매주 토요일
  HOUR: 20,
  MINUTES: 45,
};

export const WINNING_PRIZE_INFO = {
  [WINNING_COUNT.SIX]: {
    PRIZE: 2000000000,
    DESCRIPTION: '6개',
  },
  [WINNING_COUNT.FIVE_AND_BONUS]: {
    PRIZE: 30000000,
    DESCRIPTION: '5개 + 보너스볼',
  },
  [WINNING_COUNT.FIVE]: {
    PRIZE: 1500000,
    DESCRIPTION: '5개',
  },
  [WINNING_COUNT.FOUR]: {
    PRIZE: 50000,
    DESCRIPTION: '4개',
  },
  [WINNING_COUNT.THREE]: {
    PRIZE: 5000,
    DESCRIPTION: '3개',
  },
};
