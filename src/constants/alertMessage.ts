import TICKET from './ticket';

const ALERT_MESSAGE = Object.freeze({
  SHOULD_BUY_TICKET: '티켓을 구매하지 않았습니다. 티켓을 구매해주세요!',
  SHOULD_MORE_THAN_MINIMUM_PAYMENT: `구입 금액은 최소 ${TICKET.PRICE}원 이상이여야 합니다.`,
  SHOULD_INPUT_ALL_NUMBERS: '모든 번호를 입력해주셔야 결과를 확인할 수 있습니다.',
  DUPLICATED_NUMBER_EXIST: '번호들 중 중복된 숫자가 존재합니다.',
  NUMBER_RANGE_EXCEEDED: `${TICKET.MIN_NUMBER} ~ ${TICKET.MAX_NUMBER} 사이의 숫자들만 번호로 입력해주세요`,
});

export default ALERT_MESSAGE;
