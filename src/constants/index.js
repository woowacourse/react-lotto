export const CLASS_NAME = {
  MODAL: {
    CONTAINER: 'modal',
    INNER: 'modal-inner',
    CLOSE_BUTTON: 'modal-close-button',
    RESTART_BUTTON: 'restart-button',
  },
};

export const ID = {
  MAIN: {
    WINNING_NUMBER_FORM: {
      WINNING_NUMBER_FIELDSET: 'winning-number-fieldset',
      BONUS_NUMBER_FIELDSET: 'bonus-number-fieldset',
    },
  },
};

export const LOTTO_PRICE = 1000;

export const LOTTO_VALUE = {
  NUMBER_COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,

  RANK: {
    FIRST: 1,
    SECOND: 2,
    THIRD: 3,
    FOURTH: 4,
    FIFTH: 5,
  },

  WINNING_PRIZE: {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000,
  },

  MATCHED_COUNT: {
    FIRST: 6,
    THIRD: 5,
    FOURTH: 4,
    FIFTH: 3,
  },

  WINNING_CONDITION_TEXT: {
    FIRST: '6개',
    SECOND: '5개 + 보너스볼',
    THIRD: '5개',
    FOURTH: '4개',
    FIFTH: '3개',
  },
};

export const PRIZE_BY_RANK = {
  [LOTTO_VALUE.RANK.FIRST]: LOTTO_VALUE.WINNING_PRIZE.FIRST,
  [LOTTO_VALUE.RANK.SECOND]: LOTTO_VALUE.WINNING_PRIZE.SECOND,
  [LOTTO_VALUE.RANK.THIRD]: LOTTO_VALUE.WINNING_PRIZE.THIRD,
  [LOTTO_VALUE.RANK.FOURTH]: LOTTO_VALUE.WINNING_PRIZE.FOURTH,
  [LOTTO_VALUE.RANK.FIFTH]: LOTTO_VALUE.WINNING_PRIZE.FIFTH,
};

export const MESSAGE = {
  ALERT: {
    INVALID_MONEY_UNIT: '1000원 단위로만 구매 가능합니다.',
    LOTTO_NOT_EXIST: '구입한 로또가 없습니다.',
    DUPLICATED_WINNING_NUMBERS: '당첨 번호는 중복될 수 없습니다.',
  },
};

export const ANNOUNCE_DATE = {
  DAY_INDEX: 6, // 토요일
  HOUR: 20,
  MINUTE: 45,
  SECOND: 0,
};
