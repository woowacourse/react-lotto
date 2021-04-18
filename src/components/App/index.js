/* eslint-disable react/sort-comp */
import { Component } from 'react';
import LottoPurchaseContainer from '../containers/LottoPurchase';
import UserLottoContainer from '../containers/UserLotto';
import WinningNumbersContainer from '../containers/WinningNumbers';
import UserResultContainer from '../containers/UserResult';
import { createLotto } from './service';
import './style.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      lottoBundle: [],
      winningNumber: {},
      shouldReset: false,
      isShowingWinningResult: false,
    };

    this.onPurchaseLotto = this.onPurchaseLotto.bind(this);
    this.setWinningNumber = this.setWinningNumber.bind(this);
    this.onShowWinningResult = this.onShowWinningResult.bind(this);
    this.onCloseWinningResult = this.onCloseWinningResult.bind(this);
    this.onReset = this.onReset.bind(this);
    this.didReset = this.didReset.bind(this);
  }

  onPurchaseLotto({ numOfLotto }) {
    this.setState({ lottoBundle: [...Array(numOfLotto)].map(() => createLotto()) });
  }

  setWinningNumber({ winningNumber }) {
    this.setState({ winningNumber });
  }

  onShowWinningResult() {
    this.setState({ isShowingWinningResult: true });
  }

  onCloseWinningResult() {
    this.setState({ isShowingWinningResult: false });
  }

  onReset() {
    this.setState({ lottoBundle: [], isShowingWinningResult: false, shouldReset: true });
  }

  didReset() {
    this.setState({ shouldReset: false });
  }

  render() {
    const { lottoBundle, winningNumber, isShowingWinningResult, shouldReset } = this.state;
    const isPurchased = Boolean(lottoBundle.length);

    return (
      <>
        <div className="app">
          <h1 className="header">행운의 로또</h1>
          <main>
            <LottoPurchaseContainer
              lottoBundle={lottoBundle}
              onPurchaseLotto={this.onPurchaseLotto}
              shouldReset={shouldReset}
              didReset={this.didReset}
            />
            {isPurchased && <UserLottoContainer lottoBundle={this.state.lottoBundle} />}
            {isPurchased && (
              <WinningNumbersContainer
                setWinningNumber={this.setWinningNumber}
                onShowWinningResult={this.onShowWinningResult}
              />
            )}
          </main>
        </div>
        {isShowingWinningResult && (
          <UserResultContainer
            lottoBundle={lottoBundle}
            winningNumber={winningNumber}
            onCloseWinningResult={this.onCloseWinningResult}
            onReset={this.onReset}
          />
        )}
      </>
    );
  }
}
