import { v4 as uuidv4 } from "uuid";

import {
  LOTTO_LENGTH,
  LOTTO_PRICE,
  LOTTO_RANGE,
} from "../../@shared/constants/lotto";
import { PRIZE_TABLE, RANKINGS } from "../../@shared/constants/prizeTable";
import {
  countMatchedNumbers,
  createDistinctRandomIntegers,
  deepCopyJSONObject,
} from "../../@shared/utils/common";

export const getRanking = (lottoNumber, winningNumber, bonusNumber) => {
  const numOfMatched = countMatchedNumbers(lottoNumber, winningNumber);

  switch (numOfMatched) {
    case 3:
      return RANKINGS.RANKING5;
    case 4:
      return RANKINGS.RANKING4;
    case 5:
      if (countMatchedNumbers(lottoNumber, [bonusNumber])) {
        return RANKINGS.RANKING2;
      }
      return RANKINGS.RANKING3;
    case 6:
      return RANKINGS.RANKING1;
    default:
      return RANKINGS.NO_PRIZE;
  }
};

export const calculateEarningRate = (rankCount, price) => {
  const totalPrize = Object.values(RANKINGS).reduce((acc, ranking) => {
    return acc + rankCount[ranking] * PRIZE_TABLE[ranking].prize;
  }, 0);

  return Math.round(((totalPrize - price) / price) * 100);
};

export const createLottoResult = (
  initResult,
  lottos,
  winningNumbers,
  bonusNumber
) => {
  const result = deepCopyJSONObject(initResult);
  const payment = lottos.length * LOTTO_PRICE;
  lottos.forEach((lotto) => {
    const ranking = getRanking(lotto.numbers, winningNumbers, bonusNumber);
    result.rankCount[ranking] += 1;
  });
  result.earningRate = calculateEarningRate(result.rankCount, payment);

  return result;
};

export const createLottos = (lottoCount) => {
  const lottos = Array.from({ length: lottoCount }, () => {
    const newLotto = {
      id: uuidv4(),
      numbers: createDistinctRandomIntegers(
        LOTTO_RANGE.FROM,
        LOTTO_RANGE.TO,
        LOTTO_LENGTH
      ),
    };

    return newLotto;
  });
  return lottos;
};
