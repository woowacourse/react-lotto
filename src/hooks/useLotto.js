import { useState } from 'react';
import { LOTTO } from '../constants/lotto';
import { getRandomNumber } from '../utils';

const useLotto = () => {
  const [lottos, setLottos] = useState([]);
  const isPurchased = lottos.length > 0;

  const purchaseLotto = price => {
    const lottoCount = Math.floor(price / LOTTO.UNIT);

    const lottos = Array.from({ length: lottoCount }, () => {
      const lotto = new Set();
      while (lotto.size < LOTTO.BUNDLE_SIZE) {
        lotto.add(getRandomNumber(LOTTO.START_NUM, LOTTO.END_NUM));
      }
      return [...lotto].sort((a, b) => a - b);
    });

    setLottos(lottos);
  };

  return {
    lottos,
    setLottos,
    isPurchased,
    purchaseLotto,
  };
};

export default useLotto;
