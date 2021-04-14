export const CLASS_NAME = {
  MAIN: {},

  MODAL: {
    CONTAINER: 'modal',
    INNER: 'modal-inner',
    CLOSE_BUTTON: 'modal-close-button',
    RESTART_BUTTON: 'restart-button',
  },
};

export const ID = {
  MAIN: {
    PURCHASE_FORM: {
      INPUT: 'money-input',
    },
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
};

export const MESSAGE = {
  ALERT: {
    INVALID_MONEY_UNIT: '1000원 단위로만 구매 가능합니다.',
    LOTTO_NOT_EXIST: '구입한 로또가 없습니다.',
    DUPLICATED_WINNING_NUMBERS: '당첨 번호는 중복될 수 없습니다.',
  },
};
