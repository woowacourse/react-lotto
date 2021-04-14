import { Component } from 'react';
import PurchaseAmount from './PurchaseAmount.js';
import PurchaseLotto from './PurchaseLotto.js';
import WinningNumbers from './WinningNumbers.js';
import WinningResult from './WinningResult.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      lottoBundle: [],
    };

    this.onPurchaseLotto = this.onPurchaseLotto.bind(this);
  }

  onPurchaseLotto({ numOfLotto }) {
    this.setState({ lottoBundle: Array(numOfLotto) });
  }

  render() {
    const { lottoBundle } = this.state;

    return (
      <div>
        <h1>🎱 행운의 로또</h1>
        <main>
          <PurchaseAmount lottoBundle={lottoBundle} onPurchaseLotto={this.onPurchaseLotto} />
          <PurchaseLotto />
          <WinningNumbers />
          <WinningResult />
        </main>
      </div>
    );
  }
}
