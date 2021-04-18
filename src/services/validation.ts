import ALERT_MESSAGE from '../constants/alertMessage';
import TICKET from '../constants/ticket';
import { hasDuplicateElement } from '../utils/validation';

export const isValidPayment = (payment: number) => payment < TICKET.PRICE;

export const isValidWinningNumber = (winningNumber: number): boolean => {
  return winningNumber >= TICKET.MIN_NUMBER && winningNumber <= TICKET.MAX_NUMBER;
};

export const isWinningNumberDuplicated = ({ numbers, bonus }: WinningNumber): boolean => {
  return hasDuplicateElement<number>([...numbers, bonus]);
};

export const alertByPaymentCase = (payment: number) => {
  if (payment < TICKET.PRICE) {
    alert(ALERT_MESSAGE.SHOULD_MORE_THAN_MINIMUM_PAYMENT);
  }
};

export const alertByWinningNumberCase = (winningNumber: number): void => {
  if (winningNumber < TICKET.MIN_NUMBER || winningNumber > TICKET.MAX_NUMBER) {
    alert(ALERT_MESSAGE.NUMBER_RANGE_EXCEEDED);
  }
};

export const alertByWinningNumbersCase = ({ numbers, bonus }: WinningNumber): void => {
  if (hasDuplicateElement<number>([...numbers, bonus])) {
    alert(ALERT_MESSAGE.DUPLICATED_NUMBER_EXIST);
  }
};
