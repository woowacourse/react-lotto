import React, { Component } from "react";
import { LotteryMachine, ProfitCalculator } from "../services";
import LotteriesDetail from "./LotteriesDetail";
import PaymentForm from "./PaymentForm";
import WinningNumbersForm from "./WinningNumbersForm";
import WinningResultModal from "./WinningResultModal";

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

  resetApp = () => {
    this.setState({
      money: null,
      lotteries: [],
      winningResult: null,
      isResultModalOpen: false,
    });
  };

  setLotteries = () => {
    const lotteries = this.lotteryMachine.publishLotteries(this.state.money);

    this.setState({ lotteries });
  };

  setMoney = (money) => {
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

  render() {
    const { money, lotteries, winningResult } = this.state;

    return (
      <>
        <h1>🎱 행운의 로또</h1>
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
      </>
    );
  }
}

export default App;
