import { LOTTO } from './lottoData';

export const ERROR_MESSAGE = {
  LESS_THAN_MIN_PRICE: `${LOTTO.PRICE}보다 큰 금액을 입력해주세요.`,
  HAS_CHANGE: (change) => `거스름돈 ${change}원 가져가세요.`,
};
