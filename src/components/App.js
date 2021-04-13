import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import PriceInput from './PriceInput';
import PurchasedLotto from './PurchasedLotto';
import ResultModal from './ResultModal';
import WinningNumberInput from './WinngingNumberInput';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>🎱 행운의 로또</h1>
        </header>
        <main>
          <PriceInput />
          <PurchasedLotto />
          <WinningNumberInput />
          <ResultModal />
        </main>
      </>
    );
  }
}

export default hot(App);
