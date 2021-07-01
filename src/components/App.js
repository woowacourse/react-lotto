import React, { useState } from 'react';
import { Modal } from './shared';
import { Main, MainWrapperDiv, WidthFullDiv } from './App.style';
import LottoPurchaseForm from './LottoPurchaseForm/LottoPurchaseForm';
import PurchaseResult from './lottoPurchaseResult/PurchaseResult';
import WinningNumberForm from './lottoWinningNumber/WinningNumberForm';
import RewardModalInner from './lottoRewardResult/RewardModalInner';
import { useLotto, useModal } from '../hooks';

export const App = () => {
  const { isModalOpened, onCloseModal, openModal, closeModal } = useModal();
  const { lottos, setLottos, isPurchased, purchaseLotto } = useLotto();
  const [winningNumbers, setWinningNumbers] = useState({
    numbers: [],
    bonusNumber: 0,
  });

  const restart = () => {
    setLottos([]);
    setWinningNumbers({
      numbers: [],
      bonusNumber: 0,
    });
    closeModal();
  };

  return (
    <Main>
      <h1>🎱 행운의 로또</h1>
      <MainWrapperDiv>
        <WidthFullDiv>
          <LottoPurchaseForm
            purchaseLotto={purchaseLotto}
            isPurchased={isPurchased}
          />

          {isPurchased && (
            <>
              <PurchaseResult lottos={lottos} />
              <WinningNumberForm
                winningNumbers={winningNumbers}
                setWinningNumbers={setWinningNumbers}
                openModal={openModal}
              />
            </>
          )}
        </WidthFullDiv>
      </MainWrapperDiv>

      {isModalOpened && (
        <Modal onCloseModal={onCloseModal} closeModal={closeModal}>
          <RewardModalInner
            lottos={lottos}
            winningNumbers={winningNumbers}
            restart={restart}
          />
        </Modal>
      )}
    </Main>
  );
};

export default App;
