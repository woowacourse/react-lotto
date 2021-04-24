import React, { useState } from 'react';
import { Root, Container, Title } from './style';
import PriceInput from './components/PriceInput';
import LottosContainer from './components/LottosContainer';
import WinningNumbersContainer from './components/WinningNumbersContainer';
import ResultModal from './components/ResultModal';
import AnnounceTimer from './components/AnnounceTimer';
import { Lotto } from './models';

const initialState = {
  price: 0,
  lottos: [],
  winningNumbers: {
    mainNumbers: [],
    bonusNumber: null,
  },
  isPurchaseDone: false,
  isSwitchOn: false,
  isResultModalOpen: false,
};

const App = () => {
  const [price, setPrice] = useState(0);
  const [lottos, setLottos] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState({ mainNumbers: [], bonusNumber: null });
  const [isPurchaseDone, setIsPurchaseDone] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  const onSetPrice = (price) => {
    setPrice(price);
    purchaseLottos(price);
  };

  const purchaseLottos = (price) => {
    const count = price / Lotto.PRICE_UNIT;
    const lottos = Array.from({ length: count }, () => new Lotto(Lotto.generateLottoNumbers()));

    setLottos(lottos);
    setIsPurchaseDone(true);
  };

  const onToggleDisplay = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const onSetWinningNumbers = (winningNumbers) => {
    setWinningNumbers(winningNumbers);

    openResultModal();
  };

  const openResultModal = () => {
    setIsResultModalOpen(true);
  };

  const onCloseResultModal = () => {
    setIsResultModalOpen(false);
  };

  const resetGame = () => {
    setPrice(0);
    setLottos([]);
    setWinningNumbers({ mainNumbers: [], bonusNumber: null });
    setIsPurchaseDone(false);
    setIsSwitchOn(false);
    setIsResultModalOpen(false);
  };

  return (
    <Root>
      <Container>
        <Title>🎰 개미 로또</Title>
        {isPurchaseDone && <AnnounceTimer />}
        <PriceInput isDisabled={isPurchaseDone} onSetPrice={onSetPrice} />
        {isPurchaseDone && (
          <>
            <LottosContainer lottos={lottos} isSwitchOn={isSwitchOn} onToggleDisplay={onToggleDisplay} />
            <WinningNumbersContainer onSetWinningNumbers={onSetWinningNumbers} />
          </>
        )}
      </Container>
      {isResultModalOpen && (
        <ResultModal
          price={price}
          lottos={lottos}
          winningNumbers={winningNumbers}
          onResetGame={resetGame}
          onCloseModal={onCloseResultModal}
        />
      )}
    </Root>
  );
};

export default App;
