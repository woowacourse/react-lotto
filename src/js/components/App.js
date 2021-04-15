import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import PriceInput from './PriceInput';
import PurchasedLotto from './PurchasedLotto';
import ResultModal from './ResultModal';
import WinningNumberInput from './WinningNumberInput';
import { getRandomNumber } from '../utils/random';
import { LOTTO } from '../constants/lottoData';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      lottoList: [],
    };

    this.createLottoList = this.createLottoList.bind(this);
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

  render() {
    return (
      <>
        <header className="lotto-header">
          <h1>🎱 행운의 로또</h1>
        </header>
        <main>
          <PriceInput createLottoList={this.createLottoList} />
          <PurchasedLotto lottoList={this.state.lottoList} />
          <WinningNumberInput />
          <ResultModal />
        </main>
      </>
    );
  }
}

export default hot(App);
