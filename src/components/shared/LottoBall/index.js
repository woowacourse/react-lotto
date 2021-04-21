import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Ball from '../Ball';
import styles from './style.css';

const cx = classNames.bind(styles);

export default function LottoBall({ targetNumber: num, winningNumbers }) {
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

LottoBall.propTypes = {
  targetNumber: PropTypes.number.isRequired,
  winningNumbers: PropTypes.array,
};
