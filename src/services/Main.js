import { LOTTO } from '../constants';
import { generateId, shuffle } from '../utils';

const generateLotto = (baseNumberList) => {
  const lottoId = generateId();
  const lottoNumberList = shuffle(baseNumberList)
    .slice(0, LOTTO.COUNT)
    .sort((a, b) => a - b);

  return { [lottoId]: lottoNumberList };
};

export const purchaseLottoList = (moneyInput) => {
  const count = Math.floor(moneyInput / LOTTO.PRICE);
  const baseNumberList = Array.from({ length: LOTTO.MAX_NUMBER }, (_, index) => index + 1);
  const newLottoList = Array.from({ length: count }).reduce((accumulator, _) => {
    const lotto = generateLotto(baseNumberList);
    return { ...accumulator, ...lotto };
  }, {});

  return newLottoList;
};
