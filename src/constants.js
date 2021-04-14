export const LOTTO_UNIT_PRICE = 1000;

export const MIN_MONETARY_UNIT = 1;

export const MESSAGE = {
  INVALID_PURCHASE_AMOUNT_UNDER_MONETARY_UNIT: '최소 화폐단위 미만의 금액은 입력이 불가합니다.',
  INVALID_PURCHASE_AMOUNT_UNDER_LOTTO_UNIT_PRICE: '1,000원 미만의 금액을 입력이 불가합니다.',
  PURCHASE_AMOUNT_HAS_CHANGE: (change) =>
    `입력된 금액에서 ${change}원을 제외한 금액으로 로또를 구매했습니다.\n거스름돈 챙겨가세요:)`,
};

// const STANDARD_NUMBER = {
//   LOTTO_MAX_NUMBER: 45,
//   TICKET_NUMBER_LENGTH: 6,
//   ONE_TICKET_PRICE: ONE_TICKET_PRICE,
//   MIN_PURCHASE_PRICE: ONE_TICKET_PRICE,
//   MAX_PURCHASE_PRICE: 5000,
//   MIN_LOTTO_NUMBER: 1,
//   MAX_LOTTO_NUMBER: 45,
// };

// const RANK = {
//   FIRST: 'FIRST',
//   SECOND: 'SECOND',
//   THIRD: 'THIRD',
//   FOURTH: 'FOURTH',
//   FIFTH: 'FIFTH',
//   LOSER: 'LOSER',
// };

// const WINNING_PRIZE = {
//   [RANK.FIRST]: 2000000000,
//   [RANK.SECOND]: 30000000,
//   [RANK.THIRD]: 1500000,
//   [RANK.FOURTH]: 50000,
//   [RANK.FIFTH]: 5000,
//   [RANK.LOSER]: 0,
// };

// const ALERT_MESSAGE = {
//   INVALID_NUMBER: '문자 및 공백은 입력 불가능합니다.',
//   INVALID_MONEY_RANGE: '1000원 이상, 5000원 이하만 입력 가능합니다.',
//   NOT_THOUSAND_MULTIPLES: '1000원 단위로만 입력 가능합니다.',

//   BLANK_INCLUDED: '공백은 입력 불가능합니다.',
//   INVALID_NUMBER_RANGE: '1에서 45까지의 숫자만 입력 가능합니다.',
//   DUPLICATED_WINNING_NUMBER: '중복된 값은 입력 불가능합니다.',
//   NO_BALANCE: '잔액이 부족합니다.',
// };

// const ERROR_MESSAGE = {
//   INVALID_NUMBER: '올바르지 않은 숫자입니다.',
// };
