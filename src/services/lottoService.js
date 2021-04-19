import {
  LOTTO_NUMBER_COUNT,
  HIT_COUNT,
  WINNING_RANK,
  PROFITS,
  RANK,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
  ANNOUNCE_TIME,
} from '../constants/standard';
import { getRandomNumber } from '../utils/getRandomNumber';

const getRank = (ticket, winningNumbers, bonusNumber) => {
  const hasBonusNumber = ticket.includes(bonusNumber);
  const winnigCount = LOTTO_NUMBER_COUNT * 2 - new Set([...ticket, ...winningNumbers]).size;
  const winningRank = hasBonusNumber && winnigCount === HIT_COUNT.FIVE ? WINNING_RANK.SECOND : RANK[winnigCount];

  return winningRank;
};

const getRankCount = (lottoTickets, winningNumbers, bonusNumber) => {
  const rankCount = {
    [WINNING_RANK.FIRST]: 0,
    [WINNING_RANK.SECOND]: 0,
    [WINNING_RANK.THIRD]: 0,
    [WINNING_RANK.FOURTH]: 0,
    [WINNING_RANK.FIFTH]: 0,
  };

  lottoTickets.forEach(ticket => {
    const rank = getRank(ticket, winningNumbers, bonusNumber);
    rank && rankCount[rank]++;
  });

  return rankCount;
};

const getEarningRate = (purchaseAmount, rankCount) => {
  const totalProfit = Object.entries(rankCount).reduce((acc, [rank, count]) => acc + PROFITS[rank] * count, 0);
  const earningRate = Number((((totalProfit - purchaseAmount) / purchaseAmount) * 100).toFixed(2));

  return earningRate;
};

export const getLottoResult = (purchaseAmount, lottoTickets, winningNumbers, bonusNumber) => {
  const rankCount = getRankCount(lottoTickets, winningNumbers, bonusNumber);
  const earningRate = getEarningRate(purchaseAmount, rankCount);

  return { rankCount, earningRate };
};

export const generateLottoNumbers = () => {
  const ticketNumbers = new Set();

  while (ticketNumbers.size < LOTTO_NUMBER_COUNT) {
    ticketNumbers.add(getRandomNumber(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER));
  }

  return [...ticketNumbers].sort((a, b) => a - b);
};

export const getLeftTimeBetweenAnnounceTimeAndCurrentTime = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const month = currentTime.getMonth();
  const date = currentTime.getDate();
  const diff = ANNOUNCE_TIME.DAY - currentTime.getDay();
  const nextSaturday = new Date(year, month, date + diff, ANNOUNCE_TIME.HOUR, ANNOUNCE_TIME.MINUTE);

  if (nextSaturday - currentTime < 0) {
    nextSaturday.setDate(nextSaturday.getDate() + 7);
  }

  const leftTime = (nextSaturday - currentTime) / (1000 * 60 * 60);
  const leftDate = Math.floor(leftTime / 24);
  const leftHour = Math.floor(leftTime % 24);
  const leftMinute = Math.floor(((leftTime % 24) - leftHour) * 60);
  const leftSecond = Math.floor((((leftTime % 24) - leftHour) * 60 - leftMinute) * 60);

  return { leftDate, leftHour, leftMinute, leftSecond };
};
