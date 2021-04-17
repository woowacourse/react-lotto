import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import PriceForm from './components/priceForm/PriceForm';
import PurchasedLotto from './components/purchasedLotto/PurchasedLotto';
import ResultModal from './components/resultModal/ResultModal';
import WinningNumberForm from './components/winningNumberForm/WinningNumberForm';
import { getRandomNumber } from './utils/random';
import { LOTTO } from './constants/lottoData';

class App extends Component {
  constructor() {
    super();

    this.state = this.initState();

    this.createLottoList = this.createLottoList.bind(this);
    this.setWinningNumber = this.setWinningNumber.bind(this);
    this.setIsResultModalShow = this.setIsResultModalShow.bind(this);
    this.restart = this.restart.bind(this);
  }

  initState() {
    return {
      lottoList: [],
      winningNumber: {},
      isResultModalShow: false,
    };
  }

  createLotto() {
    const numberList = new Set();

    while (numberList.size < LOTTO.NUMBER_LENGTH) {
      numberList.add(getRandomNumber(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER));
    }

    return [...numberList].sort((a, b) => a - b);
  }

  createLottoList(count) {
    const lottoList = [...Array(count)].map(this.createLotto);

    this.setState({ lottoList });
  }

  setWinningNumber(winningNumber) {
    this.setState({ winningNumber });
  }

  setIsResultModalShow(isResultModalShow) {
    this.setState({ isResultModalShow });
  }

  restart() {
    this.setState(this.initState());
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
              <WinningNumberForm
                setWinningNumber={this.setWinningNumber}
                setIsResultModalShow={this.setIsResultModalShow}
              />
            </>
          )}
          {this.state.isResultModalShow && (
            <ResultModal
              lottoList={this.state.lottoList}
              winningNumber={this.state.winningNumber}
              setIsResultModalShow={this.setIsResultModalShow}
              restart={this.restart}
            />
          )}
        </main>
      </>
    );
  }
}

export default hot(App);
