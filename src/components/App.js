import { Component } from 'react';
import PurchaseAmount from './PurchaseAmount.js';
import PurchaseLotto from './PurchaseLotto.js';
import WinningNumbers from './WinningNumbers.js';
import WinningResult from './WinningResult.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import { LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_NUMBERS_LENGTH } from '../constants/lottoRules.js';
import '../css/app.css';
import { SHOW } from '../constants/keyword.js';

function createLotto(array = []) {
  const number = getRandomNumber({ min: LOTTO_MIN_NUMBER, max: LOTTO_MAX_NUMBER });

  if (array.length === LOTTO_NUMBERS_LENGTH) {
    return array.sort((a, b) => a - b);
  }
  if (!array.includes(number)) {
    array.push(number);
  }

  return createLotto(array);
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      lottoBundle: [],
      drawNumber: {},
      isShowingWinningResult: false,
      isReset: false,
    };

    this.onPurchaseLotto = this.onPurchaseLotto.bind(this);
    this.setDrawNumber = this.setDrawNumber.bind(this);
    this.onDisplayWinningResult = this.onDisplayWinningResult.bind(this);
    this.onReset = this.onReset.bind(this);
    this.didReset = this.didReset.bind(this);
  }

  onPurchaseLotto({ numOfLotto }) {
    this.setState({ lottoBundle: [...Array(numOfLotto)].map(() => createLotto()) });
  }

  setDrawNumber({ drawNumber }) {
    this.setState({ drawNumber });
  }

  onDisplayWinningResult(action = SHOW) {
    if (action === SHOW) {
      this.setState({ isShowingWinningResult: true });

      return;
    }

    this.setState({ isShowingWinningResult: false });
  }

  onReset() {
    this.setState({ lottoBundle: [], isShowingWinningResult: false, isReset: true });
  }

  didReset() {
    this.setState({ isReset: false });
  }

  render() {
    const { lottoBundle, drawNumber, isShowingWinningResult, isReset } = this.state;
    const isPurchased = !!lottoBundle.length;

    return (
      <>
        <div className="app">
          <h1 className="header">행운의 로또</h1>
          <main>
            <PurchaseAmount
              lottoBundle={lottoBundle}
              onPurchaseLotto={this.onPurchaseLotto}
              isReset={isReset}
              didReset={this.didReset}
            />
            {isPurchased && <PurchaseLotto lottoBundle={this.state.lottoBundle} />}
            {isPurchased && (
              <WinningNumbers setDrawNumber={this.setDrawNumber} onDisplayWinningResult={this.onDisplayWinningResult} />
            )}
          </main>
        </div>
        {isShowingWinningResult && (
          <WinningResult
            lottoBundle={lottoBundle}
            drawNumber={drawNumber}
            onDisplayWinningResult={this.onDisplayWinningResult}
            onReset={this.onReset}
          />
        )}
      </>
    );
  }
}
