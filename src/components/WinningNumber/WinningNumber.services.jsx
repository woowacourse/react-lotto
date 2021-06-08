import dummyWinningNumber from '../../constants/dummyData.json';
import { LOTTO_NUMBERS_LENGTH } from '../../constants/lottoRules';

const WINNING_ROUND_KEY = 'drwNo';
const WINNING_DATE_KEY = 'drwNoDate';
const WINNING_NUMBER_KEY = 'drwtNo';
const BONUS_NUMBER_KEY = 'bnusNo';

const getWinningNumbers = () => {
  return [...Array(LOTTO_NUMBERS_LENGTH)].map((_, i) => dummyWinningNumber[`${WINNING_NUMBER_KEY}${i + 1}`]);
};

export const WINNING_ROUND = dummyWinningNumber[WINNING_ROUND_KEY];
export const WINNING_DATE = dummyWinningNumber[WINNING_DATE_KEY];
export const WINNING_NUMBERS = getWinningNumbers();
export const BONUS_NUMBER = dummyWinningNumber[BONUS_NUMBER_KEY];
