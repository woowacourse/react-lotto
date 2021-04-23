import ALERT_MESSAGE from '../constants/alertMessage';
import TICKET from '../constants/ticket';
import { WinningNumber } from '../types';
import { hasDuplicateElement } from '../utils/validation';

export const isValidPayment = (payment: number) => payment < TICKET.PRICE;

export const isValidWinningNumber = (winningNumber: number) => {
  return winningNumber >= TICKET.MIN_NUMBER && winningNumber <= TICKET.MAX_NUMBER;
};

export const isWinningNumberDuplicated = ({ numbers, bonus }: WinningNumber) => {
  return hasDuplicateElement<number>([...numbers, bonus]);
};
