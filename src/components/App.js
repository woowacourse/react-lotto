import React, { Component } from 'react';
import PriceInput from './PriceInput';
import PurchasedLotto from './PurchasedLotto';
import ResultModal from './ResultModal';
import WinningNumberInput from './WinngingNumberInput';

export default class App extends Component {
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
