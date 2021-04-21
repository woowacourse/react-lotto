import ALERT_MESSAGE from '../constants/alertMessage';
import TICKET from '../constants/ticket';
import { hasDuplicateElement } from '../utils/validation';

export const isValidPayment = (payment: number) => payment < TICKET.PRICE;

export const isValidWinningNumber = (winningNumber: number) => {
  return winningNumber >= TICKET.MIN_NUMBER && winningNumber <= TICKET.MAX_NUMBER;
};

export const isWinningNumberDuplicated = ({ numbers, bonus }: WinningNumber) => {
  return hasDuplicateElement<number>([...numbers, bonus]);
};

export const alertByPaymentCase = (payment: number) => {
  if (!isValidPayment(payment)) {
    alert(ALERT_MESSAGE.SHOULD_MORE_THAN_MINIMUM_PAYMENT);
  }
};

export const alertByWinningNumberCase = (winningNumber: number) => {
  if (!isValidWinningNumber(winningNumber)) {
    alert(ALERT_MESSAGE.NUMBER_RANGE_EXCEEDED);
  }
};

export const alertByWinningNumbersCase = (winningNumbers: WinningNumber) => {
  if (!isWinningNumberDuplicated(winningNumbers)) {
    alert(ALERT_MESSAGE.DUPLICATED_NUMBER_EXIST);
  }
};
