import React, { useState, useEffect } from 'react';
import { Root, Container, Title } from './style';
import PriceInput from './components/PriceInput';
import LottosContainer from './components/LottosContainer';
import WinningNumbersContainer from './components/WinningNumbersContainer';
import ResultModal from './components/ResultModal';
import AnnounceTimer from './components/AnnounceTimer';
import Lotto from './Lotto';

export default function App() {
  const [price, setPrice] = useState(0);
  const [lottos, setLottos] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState({ mainNumbers: [], bonusNumber: null });
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  useEffect(() => {
    createLottos();
  }, [price]);

  const purchaseLottos = (price) => {
    setPrice(price);
  };

  const createLottos = () => {
    const count = price / Lotto.PRICE_UNIT;
    const lottos = Array.from({ length: count }, () => new Lotto(Lotto.generateLottoNumbers()));

    setLottos(lottos);
  };

  const openResultModal = (winningNumbers) => {
    setWinningNumbers(winningNumbers);
    setIsResultModalOpen(true);
  };

  const closeResultModal = () => {
    setIsResultModalOpen(false);
  };

  const resetGame = () => {
    setPrice(0);
    setLottos([]);
    setWinningNumbers({ mainNumbers: [], bonusNumber: null });
    setIsResultModalOpen(false);
  };

  const isLottosCreated = lottos.length > 0;

  return (
    <Root>
      <Container>
        <Title>🎰 개미 로또</Title>
        {isLottosCreated ? <AnnounceTimer /> : null}
        <PriceInput isDisabled={isLottosCreated} onPurchaseLottos={purchaseLottos} />
        {isLottosCreated ? (
          <>
            <LottosContainer lottos={lottos} />
            <WinningNumbersContainer winningNumbers={winningNumbers} onShowResult={openResultModal} />
          </>
        ) : null}
      </Container>
      <ResultModal
        isOpen={isResultModalOpen}
        price={price}
        lottos={lottos}
        winningNumbers={winningNumbers}
        onResetGame={resetGame}
        onCloseModal={closeResultModal}
      />
    </Root>
  );
}
