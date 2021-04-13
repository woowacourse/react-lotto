import { Component } from 'react';
import PurchaseForm from './PurchaseForm';
import LottoListSection from './LottoListSection';
import WinningNumberSection from './WinningNumberSection';

export default class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <h1>🎱행운의 로또</h1>
        <PurchaseForm />
        <LottoListSection />
        <WinningNumberSection />
      </main>
    );
  }
}
