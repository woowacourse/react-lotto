import { RANK_INDEX, PRIZE } from '../constants/game';

const hasBonus = (ticketNumbers: number[], bonus: number): boolean => {
  return ticketNumbers.includes(bonus);
};

type Index = {
  [key: number]: number;
};

const getRankIndex = (ticketNumbers: number[], winningNumbers: number[]) => {
  const [bonus] = winningNumbers.slice(-1);
  if (!bonus) {
    return;
  }
  const numbers = winningNumbers.slice(0, -1);

  const rankIndexMap: Index = {
    6: RANK_INDEX.FIRST,
    5: hasBonus(ticketNumbers, bonus) ? RANK_INDEX.SECOND : RANK_INDEX.THIRD,
    4: RANK_INDEX.FOURTH,
    3: RANK_INDEX.FIFTH,
  };

  const matchCount = ticketNumbers.reduce(
    (acc, ticketNumber) => (numbers.includes(ticketNumber) ? acc + 1 : acc),
    0
  );

  return rankIndexMap[matchCount];
};

export const getWinnerCounts = (tickets: Ticket[], winningNumbers: number[]) => {
  const winnerCounts: number[] = new Array(5).fill(0);

  tickets.forEach(({ numbers }) => {
    const rankIndex = getRankIndex(numbers, winningNumbers);
    console.log('rankIndex', rankIndex);

    if (typeof rankIndex !== 'number') return;

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

export const GREENWICH_MILLISECONDS = 1000 * 60 * 60 * 33;
