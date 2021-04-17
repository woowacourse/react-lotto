import TICKET from '../constants/ticket';
import { getRandomNumber } from '../utils/random';

const generateTicket = (): Ticket => {
  const ticket = new Set<number>();
  while (ticket.size < TICKET.NUMBER_LIST_LENGTH) {
    ticket.add(getRandomNumber(TICKET.MIN_NUMBER, TICKET.MAX_NUMBER));
  }
  return [...ticket];
};

export const issueTickets = (payment: number): Ticket[] => {
  const ticketCount: number = Math.floor(payment / TICKET.PRICE);

  return [...Array(ticketCount)].map(() => generateTicket());
};
