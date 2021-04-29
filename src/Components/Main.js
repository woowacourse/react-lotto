import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";

import PurchaseInput from "./PurchaseInput";
import LottoDisplay from "./LottoDisplay";
import WinningNumberInput from "./WinningNumberInput";
import Modal from "./Modal";
import LottoResult from "./LottoResult";
import {
  LOTTO_LENGTH,
  LOTTO_PRICE,
  LOTTO_RANGE,
  PRIZE_TABLE,
  RANKINGS,
} from "../Constants";
import { countMatchedNumbers, createDistinctRandomIntegers } from "../utils";

const MainContainer = styled.main`
  width: 23vw;
  min-width: 400px;
`;

const initialResult = {
  rankCount: {
    [RANKINGS.RANKING1]: 0,
    [RANKINGS.RANKING2]: 0,
    [RANKINGS.RANKING3]: 0,
    [RANKINGS.RANKING4]: 0,
    [RANKINGS.RANKING5]: 0,
    [RANKINGS.NO_PRIZE]: 0,
  },
  earningRate: 0,
};

const getRanking = (lottoNumber, winningNumber, bonusNumber) => {
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

const calculateEarningRate = (rankCount, price) => {
  const totalPrize = Object.values(RANKINGS).reduce((acc, ranking) => {
    return acc + rankCount[ranking] * PRIZE_TABLE[ranking].prize;
  }, 0);

  return Math.round(((totalPrize - price) / price) * 100);
};

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lottos, setLottos] = useState([]);
  const [lottoResult, setLottoResult] = useState(initialResult);

  const createLottos = useCallback((lottoCount) => {
    const newLottos = Array.from({ length: lottoCount }, () =>
      createDistinctRandomIntegers(
        LOTTO_RANGE.FROM,
        LOTTO_RANGE.TO,
        LOTTO_LENGTH
      )
    );

    setLottos(newLottos);
  }, []);

  const updateLottoResult = useCallback(
    (winningNumbers, bonusNumber) => {
      const rankCount = { ...initialResult.rankCount };
      const price = lottos.length * LOTTO_PRICE;

      lottos.forEach((lotto) => {
        const ranking = getRanking(lotto, winningNumbers, bonusNumber);
        rankCount[ranking] += 1;
      });

      setLottoResult({
        rankCount,
        earningRate: calculateEarningRate(rankCount, price),
      });
      setIsModalOpen(true);
    },
    [lottos]
  );

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const clearLottoApp = useCallback(() => {
    setLottos([]);
    setIsModalOpen(false);
    setLottoResult(initialResult);
  }, []);

  return (
    <MainContainer>
      <PurchaseInput createLottos={createLottos} />
      {lottos.length !== 0 && <LottoDisplay lottos={lottos} />}
      {lottos.length !== 0 && (
        <WinningNumberInput updateLottoResult={updateLottoResult} />
      )}
      {isModalOpen && (
        <Modal close={closeModal}>
          <LottoResult result={lottoResult} clearLottoApp={clearLottoApp} />
        </Modal>
      )}
    </MainContainer>
  );
};

export default Main;
