import React, { useState } from 'react';
import { Root, Container, Title } from './style';
import PriceInput from './components/PriceInput';
import LottosContainer from './components/LottosContainer';
import WinningNumbersContainer from './components/WinningNumbersContainer';
import LottoResult from './components/LottoResult';
import Modal from './components/@shared/Modal';
import AnnounceTimer from './components/AnnounceTimer';
import Lotto from './Lotto';

export default function App() {
  const [price, setPrice] = useState(0);
  const [lottos, setLottos] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState({ mainNumbers: [], bonusNumber: null });
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  const createLottos = (price) => {
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
        {isLottosCreated && <AnnounceTimer />}
        <PriceInput isDisabled={isLottosCreated} onPurchaseLottos={createLottos} />
        {isLottosCreated && (
          <>
            <LottosContainer lottos={lottos} />
            <WinningNumbersContainer
              onSubmitNumbers={(numbers) => setWinningNumbers(numbers)}
              onOpenModal={() => setIsResultModalOpen(true)}
            />
          </>
        )}
      </Container>
      <Modal isOpen={isResultModalOpen} onCloseModal={() => setIsResultModalOpen(false)}>
        <LottoResult price={price} lottos={lottos} winningNumbers={winningNumbers} onResetGame={resetGame} />
      </Modal>
    </Root>
  );
}
