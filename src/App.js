import React, { useState } from 'react';

import { MainSection, MainWrapper, ModalInnerCss } from './App.style';
import {
  Flex,
  LottoListContainer,
  LottoRewardsContainer,
  Modal,
  PurchaseContainer,
  WinningNumbersContainer,
} from './components';
import { MESSAGE } from './constants/messages';
import { useModal } from './hooks/useModal';
import { createLottoList } from './services/lottoPurchase';

const App = () => {
  const [lottoList, setLottoList] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState({
    numbers: [],
    bonusNumber: 0,
  });
  const isPurchased = !!lottoList.length;

  const {
    isModalOpen,
    handleModalOpen,
    handleModalClosed,
    setIsModalOpen,
  } = useModal();

  const initState = () => {
    setLottoList([]);
    setWinningNumbers({ numbers: [], bonusNumber: 0 });
    handleModalClosed();
  };

  const handlePurchaseLotto = inputPrice => {
    setLottoList(createLottoList(inputPrice));
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
        <MainWrapper size={100}>
          <PurchaseContainer
            onSubmit={handlePurchaseLotto}
            isPurchased={isPurchased}
          />

          {isPurchased && (
            <>
              <LottoListContainer lottoList={lottoList} />
              <WinningNumbersContainer onSubmit={handleWinningNumber} />
            </>
          )}
        </MainWrapper>
      </Flex>

      {isModalOpen && (
        <Modal
          onCloseModal={handleModalClosed}
          setIsModalOpen={setIsModalOpen}
          css={ModalInnerCss}
        >
          <LottoRewardsContainer
            lottoList={lottoList}
            winningNumbers={winningNumbers}
            onClick={handleRestart}
          />
        </Modal>
      )}
    </MainSection>
  );
};

export default App;
