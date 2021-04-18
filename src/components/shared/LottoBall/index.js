import { Component } from 'react';
import TwoDigitBall from '../TwoDigitBall';
import './style.css';

export default class LottoBall extends Component {
  render() {
    const { targetNumber, winningNumbers } = this.props;
    let ballColorClassName;

    if (targetNumber < 10) {
      ballColorClassName = 'LottoBall--zeros';
    } else if (targetNumber < 20) {
      ballColorClassName = 'LottoBall--tens';
    } else if (targetNumber < 30) {
      ballColorClassName = 'LottoBall--twenties';
    } else if (targetNumber < 40) {
      ballColorClassName = 'LottoBall--thirties';
    } else {
      ballColorClassName = 'LottoBall--forties';
    }

    if (winningNumbers && !winningNumbers.includes(targetNumber)) {
      ballColorClassName += ' LottoBall--not_matched';
    }

    return <TwoDigitBall className={ballColorClassName} number={targetNumber} />;
  }
}
