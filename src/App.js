import React, { useState } from 'react';
import { Root, Container, Title } from './style';
import PriceInput from './components/PriceInput';
import LottosContainer from './components/LottosContainer';
import WinningNumbersContainer from './components/WinningNumbersContainer';
import ResultModal from './components/ResultModal';
import AnnounceTimer from './components/AnnounceTimer';
import Lotto from './Lotto';
import { validatePriceUnit } from './utils/validator';

export default function App() {
  const [price, setPrice] = useState(0);
  const [lottos, setLottos] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState({ mainNumbers: [], bonusNumber: null });
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  const createLottos = (price) => {
    if (price < Lotto.LOTTO_PRICE_UNIT || !validatePriceUnit(price)) return;

    const count = price / Lotto.PRICE_UNIT;
    const lottos = Array.from({ length: count }, () => new Lotto(Lotto.generateLottoNumbers()));

    setPrice(price);
    setLottos(lottos);
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
        <PriceInput isDisabled={isLottosCreated} onPurchaseLottos={createLottos} />
        {isLottosCreated ? (
          <>
            <LottosContainer lottos={lottos} />
            <WinningNumbersContainer
              winningNumbers={winningNumbers}
              onSubmitNumbers={setWinningNumbers}
              onOpenModal={() => setIsResultModalOpen(true)}
            />
          </>
        ) : null}
      </Container>
      <ResultModal
        isOpen={isResultModalOpen}
        price={price}
        lottos={lottos}
        winningNumbers={winningNumbers}
        onResetGame={resetGame}
        onCloseModal={() => setIsResultModalOpen(false)}
      />
    </Root>
  );
}
