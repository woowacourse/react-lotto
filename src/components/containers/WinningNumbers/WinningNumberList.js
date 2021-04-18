import { Component } from 'react';
import { TwoDigitBall } from '../../shared';

export default class WinningNumberList extends Component {
  render() {
    const { winningNumbers, bonusNumber } = this.props.number;

    return (
      <>
        <section className="draw-number-section">
          {winningNumbers.map((v) => (
            <LottoBall key={v} number={v} />
          ))}
          <span className="plus-sign">+</span>
          <span className="bonus-number-title">보너스번호</span>
          <LottoBall key={bonusNumber} number={bonusNumber} />
        </section>
      </>
    );
  }
}

class LottoBall extends Component {
  render() {
    const { number } = this.props;
    let ballColorClassName;

    if (number < 10) {
      ballColorClassName = 'zeros';
    } else if (number < 20) {
      ballColorClassName = 'tens';
    } else if (number < 30) {
      ballColorClassName = 'twenties';
    } else if (number < 40) {
      ballColorClassName = 'thirties';
    } else {
      ballColorClassName = 'forties';
    }

    return <TwoDigitBall className={ballColorClassName} number={number} />;
  }
}
