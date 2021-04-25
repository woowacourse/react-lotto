import deepFreeze from './deepFreeze';

export const LOTTO = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  LENGTH: 6,
  UNIT_PRICE: 1000,
  MIN_PRICE: 1000,
  MAX_PRICE: 100000,
});

export const MESSAGE = deepFreeze({
  WINNING_NUMBER: {
    REQUIRED_NEXT_INPUT: '다음 번호를 입력해주세요.',
    NON_NUMBER_VALUE: '당첨 번호 6개와 보너스 번호 1개를 모두 입력해주세요.',
    DUPLICATED_NUMBERS: '중복된 번호는 입력하실 수 없습니다.',
    OUT_OF_RANGE: `${LOTTO.MIN_NUMBER} 이상 ${LOTTO.MAX_NUMBER} 이하의 숫자만 입력 가능합니다.`,
    VALID_FORM: '당첨 번호를 모두 입력하셨습니다! 당첨 결과를 확인해보세요!!',
  },
});
