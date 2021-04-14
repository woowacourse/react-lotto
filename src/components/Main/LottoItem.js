import { Component } from 'react';
import { LOTTO_VALUE } from '../../constants';

export default class LottoItem extends Component {
  constructor() {
    super();

    this.state = {
      numbers: this.generateLottoNumbers(),
    };
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  generateLottoNumbers() {
    const numbers = new Set();

    while (numbers.size < LOTTO_VALUE.NUMBER_COUNT) {
      const number = this.getRandomNumber(LOTTO_VALUE.MIN_NUMBER, LOTTO_VALUE.MAX_NUMBER);

      numbers.add(number);
    }

    return numbers;
  }

  render() {
    return (
      <li className="lotto-item">
        <span className="lotto-icon">🎟</span>
        <span>{[...this.state.numbers].join(', ')}</span>
      </li>
    );
  }
}
