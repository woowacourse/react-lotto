import React, { useState } from 'react';

import PurchaseResult from './components/lottoPurchaseResult/PurchaseResult';
import WinningNumberForm from './components/lottoWinningNumber/WinningNumberForm';
import RewardModalInner from './components/lottoRewardResult/RewardModalInner';

import { Flex, Modal, PurchaseContainer } from './components';

import { createLottos } from './services/lottoPurchase';

import { MainSection, WidthFullDiv } from './App.style';

import { MESSAGE } from './constants/messages';

const App = () => {
  const [lottos, setLottos] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState({
    numbers: [],
    bonusNumber: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const initState = () => {
    setLottos([]);
    setWinningNumbers({ numbers: [], bonusNumber: 0 });
    setIsModalOpen(false);
    setIsPurchased(false);
  };

  const handlePurchaseLotto = inputPrice => {
    setLottos(createLottos(inputPrice));
    setIsPurchased(true);
  };

  const handleWinningNumber = (numbers, bonusNumber) => {
    setWinningNumbers({ numbers, bonusNumber });
    setIsModalOpen(true);
  };

  const handleModalClosed = () => {
    setIsModalOpen(false);
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
            disabled={isPurchased}
          />

          {lottos.length > 0 && (
            <>
              <PurchaseResult lottos={lottos} />
              <WinningNumberForm handleWinningNumber={handleWinningNumber} />
            </>
          )}
        </WidthFullDiv>
      </Flex>

      {isModalOpen && (
        <Modal
          handleModalClosed={handleModalClosed}
          backgroundColor="rgba(0, 0, 0, 0.5)"
          transition="opacity 0.25s ease"
          innerMaxWidth="350px"
          innerBackgroundColor="#fff"
          innerMargin="auto"
          innerPadding="2.5rem"
          innerTransition="top 0.25s ease"
          closeButtonWidth="20px"
          closeButtonHeight="20px"
          closeButtonRightPosition="30px"
          closeButtonTopPosition="30px"
          closeButtonPathStroke="gray"
          closeButtonPathStrokeWidth="5"
        >
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
