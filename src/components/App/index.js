/* eslint-disable react/sort-comp */
import { Component } from 'react';
import PurchaseForm from '../containers/PurchaseForm';
import UserLotto from '../containers/UserLotto';
import WinningNumbers from '../containers/WinningNumbers';
import UserResult from '../containers/UserResult';
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
        <main className="App__main">
          <h1 className="App__title">행운의 로또</h1>
          <PurchaseForm
            lottoBundle={lottoBundle}
            onPurchaseLotto={this.onPurchaseLotto}
            shouldReset={shouldReset}
            didReset={this.didReset}
          />
          {isPurchased && <UserLotto lottoBundle={this.state.lottoBundle} />}
          {isPurchased && (
            <WinningNumbers
              setWinningNumber={this.setWinningNumber}
              onShowWinningResult={this.onShowWinningResult}
            />
          )}
        </main>
        {isShowingWinningResult && (
          <UserResult
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
