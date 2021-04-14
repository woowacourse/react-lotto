import { Component } from 'react';
import PurchaseForm from './PurchaseForm';
import LottoListSection from './LottoListSection';
import WinningNumberForm from './WinningNumberForm';

export default class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className="main-container d-flex flex-col">
        <h1 className="text-center m-0">🎱 행운의 로또</h1>
        <PurchaseForm />
        <LottoListSection />
        <WinningNumberForm />
      </main>
    );
  }
}
