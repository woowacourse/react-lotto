import { LOTTERY_BALL_LENGTH, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from './constants/number';
import getRandomNumber from './utils/randomNumber';

const makeAutoTicket = () => {
  const uniqueTicket = new Set();
  while (uniqueTicket.size !== LOTTERY_BALL_LENGTH) {
    uniqueTicket.add(getRandomNumber(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER));
  }

  return [...uniqueTicket];
};

export { makeAutoTicket };
