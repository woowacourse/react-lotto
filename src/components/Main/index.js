import { Component } from 'react';
import PurchaseForm from './PurchaseForm';
import LottoListSection from './LottoListSection';
import WinningNumberForm from './WinningNumberForm';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lottoCount: 0,
      winningNumbers: [],
      bonusNumber: 0,
    };

    this.setLottoCount = this.setLottoCount.bind(this);
    this.setWinningNumbers = this.setWinningNumbers.bind(this);
    this.setBonusNumber = this.setBonusNumber.bind(this);
  }

  setLottoCount(count) {
    this.setState({
      lottoCount: count,
    });
  }

  setWinningNumbers(numbers) {
    this.setState({
      winningNumbers: numbers,
    });
  }

  setBonusNumber(number) {
    this.setState({
      bonusNumber: number,
    });
  }

  render() {
    return (
      <main className="main-container d-flex flex-col">
        <h1 className="text-center m-0">🎱 행운의 로또</h1>
        <PurchaseForm setLottoCount={this.setLottoCount} />
        <LottoListSection lottoCount={this.state.lottoCount} />
        <WinningNumberForm
          lottoCount={this.state.lottoCount}
          setWinningNumbers={this.setWinningNumbers}
          setBonusNumber={this.setBonusNumber}
          openModal={this.props.openModal}
        />
      </main>
    );
  }
}
