import { Component } from 'react';
import classNames from 'classnames/bind';
import Ball from '../Ball';
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

    return <Ball className={lottoBallClass}>{num.toString().padStart(2, '0')}</Ball>;
  }
}
