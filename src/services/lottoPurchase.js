import { LOTTO } from '../constants';
import { getRandomNumber } from '../utils/index';

export const createLottoList = price => {
  const lottoCount = Math.floor(price / LOTTO.UNIT);

  const lottoList = Array.from({ length: lottoCount }, () => {
    const lotto = new Set();
    while (lotto.size < LOTTO.BUNDLE_SIZE) {
      lotto.add(getRandomNumber(LOTTO.START_NUM, LOTTO.END_NUM));
    }
    return [...lotto].sort((a, b) => a - b);
  });

  return lottoList;
};
