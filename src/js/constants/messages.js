import { LOTTO } from './lottoData';

export const ERROR_MESSAGE = {
  LESS_THAN_MIN_PRICE: `${LOTTO.PRICE}보다 큰 금액을 입력해주세요.`,
  HAS_CHANGE: (change) => `거스름돈 ${change}원 가져가세요.`,
  HAS_DUPLICATED_NUMBER: '중복된 숫자가 입력되었습니다.',
  HAS_BLANK_INPUT: '당첨 번호를 모두 입력해주세요.',
  OUT_OF_RANGE: `${LOTTO.MIN_NUMBER} ~ ${LOTTO.MAX_NUMBER} 사이의 숫자를 입력해주세요.`,
};

export const SUCCESS_MESSAGE = {
  INPUT_WINNING_NUMBER: '입력완료. 결과를 확인하세요!!!',
};
