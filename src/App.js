import React, { useState } from 'react';

import {
  Flex,
  Modal,
  PurchaseContainer,
  LottoListContainer,
  WinningNumbersContainer,
  LottoRewardsContainer,
} from './components';

import { useModal } from './hooks/useModal';

import { createLottos } from './services/lottoPurchase';

import { MESSAGE } from './constants/messages';

import { MainSection, WidthFullDiv, ModalInnerCss } from './App.style';

const App = () => {
  const [lottos, setLottos] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState({
    numbers: [],
    bonusNumber: 0,
  });

  const [isModalOpen, handleModalOpen, handleModalClosed] = useModal();

  const initState = () => {
    setLottos([]);
    setWinningNumbers({ numbers: [], bonusNumber: 0 });
    handleModalClosed();
  };

  const handlePurchaseLotto = inputPrice => {
    setLottos(createLottos(inputPrice));
  };

  const handleWinningNumber = (numbers, bonusNumber) => {
    setWinningNumbers({ numbers, bonusNumber });
    handleModalOpen();
  };

  const handleRestart = () => {
    if (window.confirm(MESSAGE.CONFIRM_RESTART)) {
      initState();
    }
  };

  return (
    <MainSection>
      <h1>🎱 행운의 로또</h1>
      <Flex flexDirection="column" alignItems="center">
        <WidthFullDiv>
          <PurchaseContainer
            onSubmit={handlePurchaseLotto}
            disabled={!!lottos.length}
          />

          {!!lottos.length && (
            <>
              <LottoListContainer lottos={lottos} />
              <WinningNumbersContainer onSubmit={handleWinningNumber} />
            </>
          )}
        </WidthFullDiv>
      </Flex>

      {isModalOpen && (
        <Modal onClick={handleModalClosed} css={ModalInnerCss}>
          <LottoRewardsContainer
            lottos={lottos}
            winningNumbers={winningNumbers}
            onClick={handleRestart}
          />
        </Modal>
      )}
    </MainSection>
  );
};

export default App;
