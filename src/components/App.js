import { Component } from 'react';
import PurchaseAmount from './PurchaseAmount.js';
import PurchaseLotto from './PurchaseLotto.js';
import WinningNumbers from './WinningNumbers.js';
import WinningResult from './WinningResult.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import { LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_NUMBERS_LENGTH } from '../constants/lottoRules.js';
import '../css/app.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      lottoBundle: [],
    };

    this.onPurchaseLotto = this.onPurchaseLotto.bind(this);
  }

  onPurchaseLotto({ numOfLotto }) {
    this.setState({ lottoBundle: [...Array(numOfLotto)].map(() => this.createLotto()) });
  }

  createLotto(array = []) {
    const number = getRandomNumber({ min: LOTTO_MIN_NUMBER, max: LOTTO_MAX_NUMBER });

    if (array.length === LOTTO_NUMBERS_LENGTH) {
      return array.sort((a, b) => a - b);
    }
    if (!array.includes(number)) {
      array.push(number);
    }

    return this.createLotto(array);
  }

  render() {
    const { lottoBundle } = this.state;
    const isPurchased = Boolean(lottoBundle.length);

    return (
      <div className="app">
        <h1 className="header">🎱 행운의 로또</h1>
        <main>
          <PurchaseAmount lottoBundle={lottoBundle} onPurchaseLotto={this.onPurchaseLotto} />
          {isPurchased && <PurchaseLotto lottoBundle={this.state.lottoBundle} />}
          <WinningNumbers />
          <WinningResult />
        </main>
      </div>
    );
  }
}
