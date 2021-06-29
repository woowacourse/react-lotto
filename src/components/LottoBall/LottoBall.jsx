import classNames from 'classnames/bind';
import React from 'react';
import { MINIMUM_DOUBLE_DIGITS } from '../../constants/numberRules';
import styles from './LottoBall.styles.css';

const cx = classNames.bind(styles);

const LottoBall = ({ className, ballNumber, winningNumbers = [] }) => {
  const ballColorClassName = cx(className, {
    zeros: ballNumber < 10,
    tens: ballNumber >= 10 && ballNumber < 20,
    twenties: ballNumber >= 20 && ballNumber < 30,
    thirties: ballNumber >= 30 && ballNumber < 40,
    forties: ballNumber >= 40,
    'not-matched': !!winningNumbers.length && !winningNumbers.includes(ballNumber),
  });

  return (
    <span className={`lotto-ball ${ballColorClassName}`}>
      {ballNumber < MINIMUM_DOUBLE_DIGITS ? `0${ballNumber}` : ballNumber}
    </span>
  );
};

export default LottoBall;
