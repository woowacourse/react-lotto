import React, { useState } from 'react';

import WinningNumberForm from './components/lottoWinningNumber/WinningNumberForm';
import RewardModalInner from './components/lottoRewardResult/RewardModalInner';

import {
  Flex,
  Modal,
  PurchaseContainer,
  LottoListContainer,
} from './components';

import { createLottos } from './services/lottoPurchase';

import { MESSAGE } from './constants/messages';

import { MainSection, WidthFullDiv, ModalInnerCss } from './App.style';

const App = () => {
  const [lottos, setLottos] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState({
    numbers: [],
    bonusNumber: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(true);
  };

  const handleModalClosed = () => setIsModalOpen(false);

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
              <WinningNumberForm handleWinningNumber={handleWinningNumber} />
            </>
          )}
        </WidthFullDiv>
      </Flex>

      {isModalOpen && (
        <Modal onClick={handleModalClosed} css={ModalInnerCss}>
          <RewardModalInner
            lottos={lottos}
            winningNumbers={winningNumbers}
            onClickRestart={handleRestart}
          />
        </Modal>
      )}
    </MainSection>
  );
};

export default App;
