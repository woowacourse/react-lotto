import { LOTTO } from '../constants';
import { getRandomId, shuffle } from '../utils';

const generateLotto = (baseNumberList) => {
  const lottoId = getRandomId();
  const lottoNumberList = shuffle(baseNumberList)
    .slice(0, LOTTO.COUNT)
    .sort((a, b) => a - b);

  return { [lottoId]: lottoNumberList };
};

export const purchaseLottoList = (moneyInput) => {
  const count = Math.floor(moneyInput / LOTTO.PRICE);
  const baseNumberList = Array.from({ length: LOTTO.MAX_NUMBER }, (_, index) => index + 1);
  let newLottoList = {};

  Array.from({ length: count }, () => {
    const lotto = generateLotto(baseNumberList);
    newLottoList = { ...newLottoList, ...lotto };
  });

  return newLottoList;
};
