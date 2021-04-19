import { LOTTO_PRICE } from "./lotto";

export const ERROR_MESSAGE = {
  INVALID_PRICE_UNIT: `${LOTTO_PRICE}원 단위로 입력해주세요.`,
  DUPLICATED_NUMBER: "서로 다른 숫자를 입력해주세요.",
  SOMETHING_EMPTY: "모든 입력란을 채워주세요.",
};

export const GUIDE_MESSAGE = {
  PURCHASE_INPUT: "구입할 금액을 입력해주세요.",
  WINNING_NUMBER: "지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.",
  LOTTO_COUNT: (lottoCount) => `총 ${lottoCount}개를 구매하였습니다.`,
  EARNING_RATE: (earningRate) => `당신의 수익률은 총 ${earningRate}% 입니다.`,
};
