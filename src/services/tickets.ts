import { nanoid } from 'nanoid';
import TICKET from '../constants/ticket';
import { getRandomNumber } from '../utils/random';

const generateTicket = (): Ticket => {
  const ticketNumbers = new Set<number>();
  while (ticketNumbers.size < TICKET.NUMBER_LIST_LENGTH) {
    ticketNumbers.add(getRandomNumber(TICKET.MIN_NUMBER, TICKET.MAX_NUMBER));
  }

  return { id: nanoid(), numbers: [...ticketNumbers] };
};

export const issueTickets = (payment: number): Ticket[] => {
  const ticketCount: number = Math.floor(payment / TICKET.PRICE);

  return [...Array(ticketCount)].map(() => generateTicket());
};
