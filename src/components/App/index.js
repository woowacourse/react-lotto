import React, { useState } from 'react';
import { PurchaseForm } from '../containers/PurchaseForm';
import { UserLotto } from '../containers/UserLotto';
import { WinningNumbers } from '../containers/WinningNumbers';
import { UserResult } from '../containers/UserResult';
import { Title } from '../shared';
import { useModal } from '../../hooks';
import './style.css';

const initialState = {
  lottoBundle: [],
  winningNumber: {},
  shouldReset: false,
};

export const App = () => {
  const [lottoBundle, setLottoBundle] = useState(initialState.lottoBundle);
  const isPurchased = lottoBundle.length > 0;
  const [winningNumber, setWinningNumber] = useState(initialState.winningNumber);
  const [shouldReset, setShouldReset] = useState(initialState.shouldReset);
  const {
    isOpen: isUserResultOpen,
    open: showUserResult,
    close: hideUserResult,
    ...restUseModal
  } = useModal();

  const onReset = () => {
    setLottoBundle(initialState.lottoBundle);
    setWinningNumber(initialState.winningNumber);
    hideUserResult();
    setShouldReset(true);
  };

  const finishReset = () => {
    setShouldReset(false);
  };

  return (
    <>
      <main className="App__main">
        <Title as="h1" size="medium">
          행운의 로또
        </Title>
        <PurchaseForm
          setLottoBundle={setLottoBundle}
          shouldReset={shouldReset}
          finishReset={finishReset}
        />
        {isPurchased && (
          <>
            <UserLotto lottoBundle={lottoBundle} />
            <WinningNumbers
              winningNumber={winningNumber}
              setWinningNumber={setWinningNumber}
              onShowUserResult={showUserResult}
            />
          </>
        )}
      </main>
      {isUserResultOpen && (
        <UserResult
          restUseModal={{ hideUserResult, ...restUseModal }}
          lottoBundle={lottoBundle}
          winningNumber={winningNumber}
          onReset={onReset}
        />
      )}
    </>
  );
};
