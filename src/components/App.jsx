import React, { Component } from 'react';
import { LotteryMachine, ProfitCalculator } from '../services';
import LotteriesDetail from './LotteriesDetail';
import PaymentForm from './PaymentForm';
import WinningNumbersForm from './WinningNumbersForm';

class App extends Component {
  constructor() {
    super();
    this.lotteryMachine = new LotteryMachine();
    this.profitCalculator = new ProfitCalculator();
    this.state = {
      lotteries: [],
      winningResult: null,
    };
  }

  setLotteries = money => {
    const lotteries = this.lotteryMachine.publishLotteries(money);

    this.setState({ lotteries });
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

    this.setState({ winningResult: { rankCount, earningRate } });
  };

  render() {
    const { lotteries } = this.state;

    return (
      <>
        <h1>🎱 행운의 로또</h1>
        <PaymentForm setLotteries={this.setLotteries} />
        {lotteries.length > 0 && (
          <>
            <LotteriesDetail lotteries={lotteries} />
            <WinningNumbersForm setWinningResult={this.setWinningResult} />
          </>
        )}
        {/* state 상태에 따른 렌더링 */}
      </>
    );
  }
}

export default App;
