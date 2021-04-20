import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import PriceForm from './PriceForm';
import PurchasedLotto from './PurchasedLotto';
import ResultModal from './ResultModal';
import WinningNumberForm from './WinningNumberForm';
import { getRandomNumber } from '../utils/random';
import { LOTTO } from '../constants/lottoData';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      lottoList: [],
      winningNumber: {},
      isShowModal: false,
    };

    this.createLottoList = this.createLottoList.bind(this);
    this.setWinningNumber = this.setWinningNumber.bind(this);
    this.openResultModal = this.openResultModal.bind(this);
    this.closeResultModal = this.closeResultModal.bind(this);
    this.restart = this.restart.bind(this);
  }

  createLotto() {
    const numberList = new Set();

    while (numberList.size < LOTTO.NUMBER_LENGTH) {
      numberList.add(getRandomNumber(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER));
    }

    return [...numberList].sort((a, b) => a - b);
  }

  createLottoList(count = 0) {
    const lottoList = [...Array(count)].map(this.createLotto);

    this.setState({ lottoList });
  }

  setWinningNumber(winningNumber) {
    this.setState({ winningNumber });
  }

  openResultModal() {
    this.setState({ isShowModal: true });
  }

  closeResultModal() {
    this.setState({ isShowModal: false });
  }

  restart() {
    this.setState({
      lottoList: [],
      winningNumber: {},
      isShowModal: false,
    });
  }

  render() {
    return (
      <>
        <header className="lotto-header">
          <h1>🎱 행운의 로또</h1>
        </header>
        <main>
          <PriceForm createLottoList={this.createLottoList} />
          {this.state.lottoList.length > 0 && (
            <>
              <PurchasedLotto lottoList={this.state.lottoList} />
              <WinningNumberForm setWinningNumber={this.setWinningNumber} openResultModal={this.openResultModal} />
            </>
          )}
          {this.state.isShowModal && (
            <ResultModal
              lottoList={this.state.lottoList}
              winningNumber={this.state.winningNumber}
              closeResultModal={this.closeResultModal}
              restart={this.restart}
            />
          )}
        </main>
      </>
    );
  }
}

export default hot(App);
