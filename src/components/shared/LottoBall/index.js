import { Component } from 'react';
import TwoDigitBall from '../TwoDigitBall';
import './style.css';

export default class LottoBall extends Component {
  render() {
    const { targetNumber, winningNumbers } = this.props;
    let ballColorClassName;

    if (targetNumber < 10) {
      ballColorClassName = 'zeros';
    } else if (targetNumber < 20) {
      ballColorClassName = 'tens';
    } else if (targetNumber < 30) {
      ballColorClassName = 'twenties';
    } else if (targetNumber < 40) {
      ballColorClassName = 'thirties';
    } else {
      ballColorClassName = 'forties';
    }

    if (winningNumbers && !winningNumbers.includes(targetNumber)) {
      ballColorClassName += ' not-matched';
    }

    return <TwoDigitBall className={ballColorClassName} number={targetNumber} />;
  }
}
