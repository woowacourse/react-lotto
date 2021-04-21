import { RANK_INDEX, PRIZE } from '../constants/game';

const hasBonus = (ticketNumbers: number[], bonus: number) => {
  return ticketNumbers.includes(bonus);
};

type Index = {
  3: number;
  4: number;
  5: number;
  6: number;
};

const isInIndex = (matchCount: number): matchCount is keyof Index => {
  return matchCount >= 3 && matchCount <= 6;
};

const getRankIndex = (ticketNumbers: number[], { numbers, bonus }: WinningNumber) => {
  const rankIndexMap = {
    6: RANK_INDEX.FIRST,
    5: hasBonus(ticketNumbers, bonus) ? RANK_INDEX.SECOND : RANK_INDEX.THIRD,
    4: RANK_INDEX.FOURTH,
    3: RANK_INDEX.FIFTH,
  };

  const matchCount = ticketNumbers.reduce(
    (acc, ticketNumber) => (numbers.includes(ticketNumber) ? acc + 1 : acc),
    0
  );

  return isInIndex(matchCount) ? rankIndexMap[matchCount] : null;
};

export const getWinnerCounts = (tickets: Ticket[], winningNumber: WinningNumber): number[] => {
  const winnerCounts = new Array(5).fill(0);

  tickets.forEach(({ numbers }) => {
    const rankIndex = getRankIndex(numbers, winningNumber);

    if (!rankIndex) return;

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
