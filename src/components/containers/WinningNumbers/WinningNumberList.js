import { Component } from 'react';
import { LottoBall } from '../../shared';

export default class WinningNumberList extends Component {
  render() {
    const { winningNumbers, bonusNumber } = this.props.number;

    return (
      <>
        <section className="draw-number-section">
          {winningNumbers.map((v) => (
            <LottoBall key={v} targetNumber={v} />
          ))}
          <span className="plus-sign">+</span>
          <span className="bonus-number-title">보너스번호</span>
          <LottoBall key={bonusNumber} targetNumber={bonusNumber} />
        </section>
      </>
    );
  }
}
