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
export default class App extends Component {
  constructor() {
    super();

    this.state = { ...initialState };
    this.onPurchaseLotto = this.onPurchaseLotto.bind(this);
    this.setWinningNumber = this.setWinningNumber.bind(this);
    this.onShowUserResult = this.onShowUserResult.bind(this);
    this.onCloseUserResult = this.onCloseUserResult.bind(this);
    this.onReset = this.onReset.bind(this);
    this.didReset = this.didReset.bind(this);
  }

  onPurchaseLotto({ numOfLotto }) {
    this.setState({ lottoBundle: [...Array(numOfLotto)].map(() => createLotto()) });
  }

  setWinningNumber({ winningNumber }) {
    this.setState({ winningNumber });
  }

  onShowUserResult() {
    this.setState({ isShowingUserResult: true });
  }

  onCloseUserResult() {
    this.setState({ isShowingUserResult: false });
  }

  onReset() {
    this.setState({ ...initialState, shouldReset: true });
  }

  didReset() {
    this.setState({ shouldReset: false });
  }

  render() {
    const { lottoBundle, winningNumber, isShowingUserResult, shouldReset } = this.state;
    const isPurchased = Boolean(lottoBundle.length);

    return (
      <>
        <main className="App__main">
          <Title as="h1" size="medium">
            행운의 로또
          </Title>
          <PurchaseForm
            lottoBundle={lottoBundle}
            onPurchaseLotto={this.onPurchaseLotto}
            shouldReset={shouldReset}
            didReset={this.didReset}
          />
          {isPurchased && (
            <>
              <UserLotto lottoBundle={this.state.lottoBundle} />
              <WinningNumbers
                setWinningNumber={this.setWinningNumber}
                onShowUserResult={this.onShowUserResult}
              />
            </>
          )}
        </main>
        {isShowingUserResult && (
          <UserResult
            lottoBundle={lottoBundle}
            winningNumber={winningNumber}
            onCloseUserResult={this.onCloseUserResult}
            onReset={this.onReset}
          />
        )}
      </>
    );
  }
}
