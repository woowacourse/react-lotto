import React, { useState } from 'react';

import { MainSection, ModalInnerCss, WidthFullDiv } from './App.style';
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
import { createlottoList } from './services/lottoPurchase';

const App = () => {
  const [lottoList, setlottoList] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState({
    numbers: [],
    bonusNumber: 0,
  });
  const isPurchased = !!lottoList.length;

  const { isModalOpen, handleModalOpen, handleModalClosed } = useModal();

  const initState = () => {
    setlottoList([]);
    setWinningNumbers({ numbers: [], bonusNumber: 0 });
    handleModalClosed();
  };

  const handlePurchaseLotto = inputPrice => {
    setlottoList(createlottoList(inputPrice));
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
            disabled={isPurchased}
          />

          {isPurchased && (
            <>
              <LottoListContainer lottoList={lottoList} />
              <WinningNumbersContainer onSubmit={handleWinningNumber} />
            </>
          )}
        </WidthFullDiv>
      </Flex>

      {isModalOpen && (
        <Modal onClick={handleModalClosed} css={ModalInnerCss}>
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
