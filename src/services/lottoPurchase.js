import { LOTTO } from '../constants/lotto';
import { getRandomNumber } from '../utils/index';

export const createLottos = price => {
  const lottoCount = Math.floor(price / LOTTO.UNIT);

  const lottos = Array.from({ length: lottoCount }, () => {
    const lotto = new Set();
    while (lotto.size < LOTTO.BUNDLE_SIZE) {
      lotto.add(getRandomNumber(LOTTO.START_NUM, LOTTO.END_NUM));
    }
    return [...lotto].sort((a, b) => a - b);
  });

  return lottos;
};
