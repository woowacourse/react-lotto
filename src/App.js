import { Component } from 'react';
import PurchaseAmount from './components/PurchaseAmount.js';
import PurchaseLotto from './components/PurchaseLotto.js';
import WinningNumbers from './components/WinningNumbers.js';
import WinningResult from './components/WinningResult.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>🎱 행운의 로또</h1>
        <main>
          <PurchaseAmount />
          <PurchaseLotto />
          <WinningNumbers />
          <WinningResult />
        </main>
      </div>
    );
  }
}
