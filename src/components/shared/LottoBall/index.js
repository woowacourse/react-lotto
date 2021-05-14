import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Ball from '../Ball';
import styles from './style.css';

const cx = classNames.bind(styles);

export default function LottoBall(props) {
  const { className, targetNumber: num, winningNumbers, ...rest } = props;
  const classnames = cx(className, {
    'LottoBall--zeros': num < 10,
    'LottoBall--tens': num >= 10 && num < 20,
    'LottoBall--twenties': num >= 20 && num < 30,
    'LottoBall--thirties': num >= 30 && num < 40,
    'LottoBall--forties': num >= 40,
    'LottoBall--not_matched': winningNumbers && !winningNumbers.includes(num),
  });

  return (
    <Ball className={classnames} {...rest}>
      {num.toString().padStart(2, '0')}
    </Ball>
  );
}

LottoBall.propTypes = {
  className: PropTypes.string,
  targetNumber: PropTypes.number.isRequired,
  winningNumbers: PropTypes.array,
};
