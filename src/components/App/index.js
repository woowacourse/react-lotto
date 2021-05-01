import { useState } from 'react';
import { PurchaseForm } from '../containers/PurchaseForm';
/* eslint-disable react/sort-comp */
import { Component } from 'react';
import PurchaseForm from '../containers/PurchaseForm';
import UserLotto from '../containers/UserLotto';
import WinningNumbers from '../containers/WinningNumbers';
import UserResult from '../containers/UserResult';
import { Title } from '../shared';
import { createLotto } from './service';
import './style.css';

const initialState = {
  lottoBundle: [],
  winningNumber: {},
  shouldReset: false,
  isShowingUserResult: false,
};

export const App = () => {
  const [lottoBundle, setLottoBundle] = useState(initialState.lottoBundle);
  const [winningNumber, setWinningNumber] = useState(initialState.winningNumber);
  const [shouldReset, setShouldReset] = useState(initialState.shouldReset);
  const [isShowingUserResult, setIsShowingUserResult] = useState(initialState.isShowingUserResult);
  const isPurchased = Boolean(lottoBundle.length);

  const onShowUserResult = () => {
    setIsShowingUserResult(true);
  };

  const onCloseUserResult = () => {
    setIsShowingUserResult(false);
  };

  const onReset = () => {
    setLottoBundle(initialState.lottoBundle);
    setWinningNumber(initialState.winningNumber);
    setIsShowingUserResult(initialState.isShowingUserResult);
    setShouldReset(true);
  };

  const didReset = () => {
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
          didReset={didReset}
        />
        {isPurchased && (
          <>
            <UserLotto lottoBundle={lottoBundle} />
            <WinningNumbers
              winningNumber={winningNumber}
              setWinningNumber={setWinningNumber}
              onShowUserResult={onShowUserResult}
            />
          </>
        )}
      </main>
      {isShowingUserResult && (
        <UserResult
          lottoBundle={lottoBundle}
          winningNumber={winningNumber}
          onCloseUserResult={onCloseUserResult}
          onReset={onReset}
        />
      )}
    </>
  );
};
