import { Component } from 'react';
import { PurchaseForm, LottoListSection, WinningNumberForm, LotteryCountDown } from '.';

export default class Main extends Component {
  render() {
    return (
      <main className="main-container d-flex flex-col">
        <h1 className="text-center m-0">🎱 행운의 로또</h1>
        <PurchaseForm
          setLottoCount={this.props.setLottoCount}
          moneyInput={this.props.moneyInput}
          setMoneyInput={this.props.setMoneyInput}
        />
        <LottoListSection
          isModalOpened={this.props.isModalOpened}
          lottoCount={this.props.lottoCount}
          winningNumbers={this.props.winningNumbers}
          bonusNumber={this.props.bonusNumber}
          increaseWinningCounts={this.props.increaseWinningCounts}
          isLottoListToggled={this.props.isLottoListToggled}
          setToggleLottoList={this.props.setToggleLottoList}
        />
        <WinningNumberForm
          lottoCount={this.props.lottoCount}
          setWinningNumbers={this.props.setWinningNumbers}
          winningNumbers={this.props.winningNumbers}
          bonusNumber={this.props.bonusNumber}
          setBonusNumber={this.props.setBonusNumber}
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
