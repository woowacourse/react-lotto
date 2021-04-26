import ALERT_MESSAGE from '../constants/alertMessage';
import TICKET from '../constants/ticket';
import { hasDuplicateElement } from '../utils/validation';

export const isValidPayment = (payment: number) => payment < TICKET.PRICE;

export const alertByPaymentCase = (payment: number) => {
  if (payment < TICKET.PRICE) {
    alert(ALERT_MESSAGE.SHOULD_MORE_THAN_MINIMUM_PAYMENT);
  }
};

export const isValidWinningNumber = (winningNumber: number): boolean => {
  return winningNumber >= TICKET.MIN_NUMBER && winningNumber <= TICKET.MAX_NUMBER;
};

export const alertByWinningNumberCase = (winningNumber: number): void => {
  if (winningNumber < TICKET.MIN_NUMBER || winningNumber > TICKET.MAX_NUMBER) {
    alert(ALERT_MESSAGE.NUMBER_RANGE_EXCEEDED);
  }
};

export const isWinningNumberDuplicated = (winningNumbers: number[]): boolean => {
  return hasDuplicateElement<number>(winningNumbers);
};

export const alertByWinningNumbersCase = (winningNumbers: number[]): void => {
  if (!hasDuplicateElement<number>(winningNumbers)) {
    alert(ALERT_MESSAGE.DUPLICATED_NUMBER_EXIST);
  }
};

//TODO: answer Submit에서 alert 한번, 이후 handlewinndingNumber에서 alert 또 한번이 과연 맞는건가?
// 역할로써는 분리가 맞는데, 두번의 alert는 좀...
