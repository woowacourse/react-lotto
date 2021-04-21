import { UNIT_AMOUNT } from './standard.js';

export const MESSAGE = {
  INVALID_PURCHASE_AMOUNT: `금액을 ${UNIT_AMOUNT}원 단위로 입력해주세요!`,
  OUT_RANGED_PURCHASE_AMOUNT: `입력가능한 금액 범위를 초과하였습니다.\n(최소: 1,000원, 최대: 1,000,000원)`,
  DUPLICATED_LOTTO_NUMBERS: `중복된 숫자를 입력하셨습니다. 다시 입력해주세요!`,
  OUT_RANGED_LOTTO_NUMBERS: `범위 밖의 숫자를 입력하셨습니다. 1부터 45 사이의 숫자를 입력해주세요!`,
  MSG_BLANK_INPUT: `빈 칸을 입력하셨습니다. 다시 입력해주세요!`,
};
