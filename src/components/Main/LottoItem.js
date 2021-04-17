import { Component } from 'react';
import { LOTTO_VALUE } from '../../constants';
import { getRandomNumberArray } from '../../utils';

export default class LottoItem extends Component {
  state = {
    numbers: getRandomNumberArray(
      LOTTO_VALUE.MIN_NUMBER,
      LOTTO_VALUE.MAX_NUMBER,
      LOTTO_VALUE.NUMBER_COUNT
    ),
  };

  componentDidUpdate(prevProps) {
    if (this.props.isModalOpened && this.props.isModalOpened !== prevProps.isModalOpened) {
      this.increaseWinningCounts();
    }
  }

  // 일치하는 개수를 구하는 연산식
  getMatchedCount = () => {
    return (
      this.props.winningNumbers.length +
      this.state.numbers.length -
      new Set([...this.props.winningNumbers, ...this.state.numbers]).size
    );
  };

  increaseWinningCounts = () => {
    const matchedCount = this.getMatchedCount();

    if (matchedCount === LOTTO_VALUE.MATCHED_COUNT.FIRST) {
      this.props.increaseWinningCounts(LOTTO_VALUE.RANK.FIRST);
    }
    if (matchedCount === LOTTO_VALUE.MATCHED_COUNT.THIRD) {
      if (this.state.numbers.includes(this.props.bonusNumber)) {
        this.props.increaseWinningCounts(LOTTO_VALUE.RANK.SECOND);
      } else {
        this.props.increaseWinningCounts(LOTTO_VALUE.RANK.THIRD);
      }
    }
    if (matchedCount === LOTTO_VALUE.MATCHED_COUNT.FOURTH) {
      this.props.increaseWinningCounts(LOTTO_VALUE.RANK.FOURTH);
    }
    if (matchedCount === LOTTO_VALUE.MATCHED_COUNT.FIFTH) {
      this.props.increaseWinningCounts(LOTTO_VALUE.RANK.FIFTH);
    }
  };

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
