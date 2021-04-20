import React, { Component } from 'react';
import { publishLotteries, getWinningResult } from './services';
import {
  PaymentForm,
  LotteriesDetail,
  WinningNumbersForm,
  WinningResultModal,
} from './components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lotteries: [],
      winningResult: null,
      isResultModalOpen: false,
    };
  }

  setLotteries = money => {
    const lotteries = publishLotteries(money);

    this.setState({ lotteries });
  };

  setWinningResult = (winningNumbers, bonusNumber) => {
    const winningResult = getWinningResult({
      winningNumbers,
      bonusNumber,
      lotteries: this.state.lotteries,
    });

    this.setState({
      winningResult,
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
    const { lotteries, winningResult } = this.state;

    return (
      <div id="app" className="d-flex justify-center mt-5">
        <div className="w-100">
          <h1 className="text-center">🎱 행운의 로또</h1>
          {lotteries.length === 0 && (
            <PaymentForm
              lotteries={lotteries}
              setLotteries={this.setLotteries}
            />
          )}
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
