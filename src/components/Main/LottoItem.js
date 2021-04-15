import { Component } from 'react';
import { LOTTO_VALUE } from '../../constants';

export default class LottoItem extends Component {
  state = {
    numbers: this.generateLottoNumbers(),
  };

  isSameArray(array1, array2) {
    return array1.length === new Set([...array1, ...array2]).size;
  }

  componentDidUpdate(prevProps) {
    if (
      !this.isSameArray(this.props.winningNumbers, prevProps.winningNumbers) ||
      this.props.bonusNumber !== prevProps.bonusNumber
    ) {
      this.setWinningCounts();
    }
  }

  setWinningCounts() {
    // 일치하는 개수를 구하는 연산식
    const matchedCount = 12 - new Set([...this.props.winningNumbers, ...this.state.numbers]).size;

    if (matchedCount === 6) {
      this.props.setWinningCounts(LOTTO_VALUE.RANK.FIRST);
    }
    if (matchedCount === 5) {
      if (this.state.numbers.includes(this.props.bonusNumber)) {
        this.props.setWinningCounts(LOTTO_VALUE.RANK.SECOND);
      } else {
        this.props.setWinningCounts(LOTTO_VALUE.RANK.THIRD);
      }
    }
    if (matchedCount === 4) {
      this.props.setWinningCounts(LOTTO_VALUE.RANK.FOURTH);
    }
    if (matchedCount === 3) {
      this.props.setWinningCounts(LOTTO_VALUE.RANK.FIFTH);
    }
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

    return Array.from(numbers);
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
