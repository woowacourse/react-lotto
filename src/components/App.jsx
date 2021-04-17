import React, { Component } from 'react';
import { LotteryMachine, ProfitCalculator } from '../services';
import LotteriesDetail from './LotteriesDetail';
import PaymentForm from './PaymentForm';
import WinningNumbersForm from './WinningNumbersForm';
import WinningResultModal from './WinningResultModal';

class App extends Component {
  constructor() {
    super();
    this.lotteryMachine = new LotteryMachine();
    this.profitCalculator = new ProfitCalculator();
    this.state = {
      money: null,
      lotteries: [],
      winningResult: null,
      isResultModalOpen: false,
    };
  }

  setLotteries = () => {
    const lotteries = this.lotteryMachine.publishLotteries(this.state.money);

    this.setState({ lotteries });
  };

  setMoney = money => {
    this.setState({ money });
  };

  setWinningResult = (winningNumbers, bonusNumber) => {
    const rankCount = this.profitCalculator.getRankCount({
      winningNumbers,
      bonusNumber,
      lotteries: this.state.lotteries,
    });
    const earningRate = this.profitCalculator.getEarningRate(
      rankCount,
      this.state.lotteries
    );

    this.setState({
      winningResult: { rankCount, earningRate },
      isResultModalOpen: true,
    });
  };

  closeResultModal = () => {
    this.setState({ isResultModalOpen: false });
  };

  resetApp = () => {
    this.setState({
      money: null,
      lotteries: [],
      winningResult: null,
      isResultModalOpen: false,
    });
  };

  render() {
    const { money, lotteries, winningResult } = this.state;

    return (
      <div id="app" className="d-flex justify-center mt-5">
        <div className="w-100">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <PaymentForm
            money={money}
            lotteries={lotteries}
            setMoney={this.setMoney}
            setLotteries={this.setLotteries}
          />
          {lotteries.length > 0 && (
            <>
              <LotteriesDetail lotteries={lotteries} />
              <WinningNumbersForm setWinningResult={this.setWinningResult} />
            </>
          )}
          {winningResult && (
            <WinningResultModal
              winningResult={winningResult}
              isModalOpen={this.state.isResultModalOpen}
              closeModal={this.closeResultModal}
              resetApp={this.resetApp}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
