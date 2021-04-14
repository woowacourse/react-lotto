import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import PriceInput from './PriceInput';
import PurchasedLotto from './PurchasedLotto';
import ResultModal from './ResultModal';
import WinningNumberInput from './WinningNumberInput';
import { getRandomNumber } from '../utils/random';
import { LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_NUMBER_LENGTH } from '../constants/lottoData';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      lottoList: [],
    };
  }

  createLotto() {
    const numberList = new Set();

    while (numberList.size < LOTTO_NUMBER_LENGTH) {
      numberList.add(getRandomNumber(LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER));
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
          <PriceInput createLottoList={this.createLottoList.bind(this)} />
          <PurchasedLotto lottoList={this.state.lottoList} />
          <WinningNumberInput />
          <ResultModal />
        </main>
      </>
    );
  }
}

export default hot(App);
