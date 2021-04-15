export const CURRENT_PAGE = {
  MAIN: 'Main',
  ENTER_WINNING: 'EnterWinning',
  RESULT: 'Result',
};

export const LOTTO = {
  PRICE: 1000,
  COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
};

export const INPUT_NAME = {
  WINNING_NUMBER: {
    1: 'winning-number-1',
    2: 'winning-number-2',
    3: 'winning-number-3',
    4: 'winning-number-4',
    5: 'winning-number-5',
    6: 'winning-number-6',
  },
};

export const RANKING = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  NO_PRIZE: 0,
};

export const WINNING_TABLE = {
  [RANKING.FIRST]: {
    MATCH_CONDITION: '6개',
    PRIZE: 2000000000,
  },

  [RANKING.SECOND]: {
    MATCH_CONDITION: '5개 + 보너스볼',
    PRIZE: 30000000,
  },

  [RANKING.THIRD]: {
    MATCH_CONDITION: '5개',
    PRIZE: 1500000,
  },

  [RANKING.FOURTH]: {
    MATCH_CONDITION: '4개',
    PRIZE: 50000,
  },

  [RANKING.FIFTH]: {
    MATCH_CONDITION: '3개',
    PRIZE: 5000,
  },
};

export const RANKING_TABLE = {
  6: RANKING.FIRST,
  5.5: RANKING.SECOND,
  5: RANKING.THIRD,
  4: RANKING.FOURTH,
  3: RANKING.FIFTH,
};

export const ALERT_MESSAGE = {
  DUPLICATED_WINNING_NUMBER: '중복되지 않은 번호를 입력해주세요.',
};
