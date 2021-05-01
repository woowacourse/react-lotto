import React, { Component } from "react";
import { LotteryMachine, ProfitCalculator } from "../services";
import { LOTTERY } from "../utils";
import LotteriesDetail from "./LotteriesDetail";
import PaymentForm from "./PaymentForm";
import WinningNumbersForm from "./WinningNumbersForm";
import Modal from "./Modal";
import WinningResult from "./WinningResult";

class App extends Component {
  constructor() {
    super();
    this.lotteryMachine = new LotteryMachine();
    this.profitCalculator = new ProfitCalculator();
    this.state = {
      lotteries: [],
      winningResult: null,
      isResultModalOpen: false,
    };
  }

  onWinningNumberSubmit = (winningNumbers, bonusNumber) => {
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
      lotteries: [],
      winningResult: null,
      isResultModalOpen: false,
    });
  };

  render() {
    const { lotteries, winningResult, isResultModalOpen } = this.state;

    return (
      <div id="app" className="d-flex justify-center mt-5">
        <div className="w-100">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <PaymentForm
            isDisabled={lotteries.length !== 0}
            onMoneySubmit={(money) => {
              const lotteries = this.lotteryMachine.publishLotteries(money);

              this.setState({ lotteries });
            }}
            isValidPayment={(value) => value > 0 && value % LOTTERY.PRICE === 0}
            paymentMinUnit={LOTTERY.PRICE}
          />
          {lotteries.length > 0 && (
            <>
              <LotteriesDetail lotteries={lotteries} />
              <WinningNumbersForm
                onWinningNumberSubmit={this.onWinningNumberSubmit}
              />
            </>
          )}
          <Modal
            isModalOpen={isResultModalOpen}
            closeModal={this.closeResultModal}
          >
            {isResultModalOpen && (
              <WinningResult
                winningResult={winningResult}
                resetApp={this.resetApp}
              />
            )}
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
