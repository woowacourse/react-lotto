import { Component } from 'react';
import { LottoBall } from '../../shared';

export default class WinningNumberList extends Component {
  render() {
    const { winningNumbers, bonusNumber } = this.props.number;

    return (
      <>
        <section className="WinningNumberList">
          {winningNumbers.map((v) => (
            <LottoBall key={v} targetNumber={v} />
          ))}
          <span className="WinningNumberList__plus_sign">+</span>
          <span className="WinningNumberList__bonus_number">보너스번호</span>
          <LottoBall key={bonusNumber} targetNumber={bonusNumber} />
        </section>
      </>
    );
  }
}
