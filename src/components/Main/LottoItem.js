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

  getWinningCount = (matchedCount) => {
    const hasBonusNumber = this.state.numbers.includes(this.props.bonusNumber);

    switch (matchedCount) {
      case LOTTO_VALUE.MATCHED_COUNT.FIRST:
        return LOTTO_VALUE.RANK.FIRST;
      case LOTTO_VALUE.MATCHED_COUNT.THIRD:
        return hasBonusNumber ? LOTTO_VALUE.RANK.SECOND : LOTTO_VALUE.RANK.THIRD;
      case LOTTO_VALUE.MATCHED_COUNT.FOURTH:
        return LOTTO_VALUE.RANK.FOURTH;
      case LOTTO_VALUE.MATCHED_COUNT.FIFTH:
        return LOTTO_VALUE.RANK.FIFTH;
      default:
        return;
    }
  };

  increaseWinningCounts = () => {
    const matchedCount = this.getMatchedCount();
    const winningCount = this.getWinningCount(matchedCount);

    winningCount && this.props.increaseWinningCounts(winningCount);
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
