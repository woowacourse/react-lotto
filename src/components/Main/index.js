import { Component } from 'react';
import PurchaseForm from './PurchaseForm';
import LottoListSection from './LottoListSection';
import WinningNumberForm from './WinningNumberForm';
import LotteryCountDown from './LotteryCountDown';

export default class Main extends Component {
  state = {
    winningNumbers: [],
    bonusNumber: 0,
  };

  setWinningNumbers = (numbers) => {
    this.setState({
      winningNumbers: numbers,
    });
  };

  setBonusNumber = (number) => {
    this.setState({
      bonusNumber: number,
    });
  };

  render() {
    return (
      <main className="main-container d-flex flex-col">
        <h1 className="text-center m-0">🎱 행운의 로또</h1>
        <PurchaseForm setLottoCount={this.props.setLottoCount} />
        <LottoListSection
          isModalOpened={this.props.isModalOpened}
          lottoCount={this.props.lottoCount}
          winningNumbers={this.state.winningNumbers}
          bonusNumber={this.state.bonusNumber}
          increaseWinningCounts={this.props.increaseWinningCounts}
        />
        <WinningNumberForm
          lottoCount={this.props.lottoCount}
          setWinningNumbers={this.setWinningNumbers}
          setBonusNumber={this.setBonusNumber}
          openModal={this.props.openModal}
        />
        <LotteryCountDown
          announcementDate={this.props.announcementDate}
          setAnnouncementDate={this.props.setAnnouncementDate}
        />
      </main>
    );
  }
}
