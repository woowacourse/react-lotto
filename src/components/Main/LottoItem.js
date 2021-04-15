import { Component } from 'react';
import { LOTTO_VALUE } from '../../constants';

export default class LottoItem extends Component {
  constructor(props) {
    super(props);

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
    const isToggled = this.props.isToggled;

    return (
      <li className={`lotto-item ${isToggled ? 'toggle' : ''}`}>
        <span className="lotto-icon">🎟</span>
        {isToggled && <span>{[...this.state.numbers].join(', ')}</span>}
      </li>
    );
  }
}
