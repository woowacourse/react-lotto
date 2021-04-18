import { LOTTO_NUMBERS_LENGTH, dummyDrawNumber } from '../../../constants';

const WINNING_NUMBER_KEY = (i) => `drwtNo${i}`;
const BONUS_NUMBER_KEY = 'bnusNo';

export const getWinningNumber = () => {
  return {
    winningNumbers: [...Array(LOTTO_NUMBERS_LENGTH)].map((_, i) =>
      Number(dummyDrawNumber[WINNING_NUMBER_KEY(i + 1)]),
    ),
    bonusNumber: Number(dummyDrawNumber[BONUS_NUMBER_KEY]),
  };
};
