import { Component } from 'react';
import classNames from 'classnames/bind';
import TwoDigitBall from '../NDigitBall';
import styles from './style.css';

const cx = classNames.bind(styles);

export default class LottoBall extends Component {
  render() {
    const { targetNumber: num, winningNumbers } = this.props;
    const lottoBallClass = cx({
      'LottoBall--zeros': num < 10,
      'LottoBall--tens': num >= 10 && num < 20,
      'LottoBall--twenties': num >= 20 && num < 30,
      'LottoBall--thirties': num >= 30 && num < 40,
      'LottoBall--forties': num >= 40,
      'LottoBall--not_matched': winningNumbers && !winningNumbers.includes(num),
    });

    return (
      <TwoDigitBall className={lottoBallClass} n="2">
        {num}
      </TwoDigitBall>
    );
  }
}
