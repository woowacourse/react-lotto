import { Component } from 'react';
import PurchaseForm from './PurchaseForm';
import LottoListSection from './LottoListSection';
import WinningNumberForm from './WinningNumberForm';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      lottoCount: 0,
    };

    this.handleLottoCountChange = this.handleLottoCountChange.bind(this);
  }

  handleLottoCountChange(count) {
    this.setState({
      lottoCount: count,
    });
  }

  render() {
    return (
      <main className="main-container d-flex flex-col">
        <h1 className="text-center m-0">🎱 행운의 로또</h1>
        <PurchaseForm handleLottoCountChange={this.handleLottoCountChange} />
        <LottoListSection lottoCount={this.state.lottoCount} />
        <WinningNumberForm />
      </main>
    );
  }
}
