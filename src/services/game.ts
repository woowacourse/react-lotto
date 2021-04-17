import { RANK_INDEX, MATCH, PRIZE } from '../constants/game';

const hasBonus = (ticket: Ticket, bonus: number): boolean => {
  return ticket.includes(bonus);
};

type Index = {
  [key: number]: number;
};

const getRankIndex = (ticket: Ticket, { numbers, bonus }: WinningNumber): number | undefined => {
  const rankIndexMap: Index = {
    6: RANK_INDEX.FIRST,
    5: hasBonus(ticket, bonus) ? RANK_INDEX.SECOND : RANK_INDEX.THIRD,
    4: RANK_INDEX.FOURTH,
    3: RANK_INDEX.FIFTH,
  };

  const matchCount = ticket.reduce(
    (acc, ticketNumber) => (numbers.includes(ticketNumber) ? acc + 1 : acc),
    0
  );

  return rankIndexMap[matchCount];
};

export const getWinnerCounts = (tickets: Ticket[], winningNumber: WinningNumber): number[] => {
  const winnerCounts = new Array(5).fill(0);

  tickets.forEach(ticket => {
    const rankIndex = getRankIndex(ticket, winningNumber);

    if (rankIndex === undefined) return;

    winnerCounts[rankIndex] += 1;
  });

  return winnerCounts;
};

export const getTotalProfit = (payment: number, winnerCounts: number[]) => {
  const income = winnerCounts.reduce(
    (acc, winnerCount, index) => acc + winnerCount * PRIZE[index],
    0
  );

  return ((income - payment) / payment) * 100;
};
