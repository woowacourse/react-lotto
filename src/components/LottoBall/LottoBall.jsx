import React from 'react';
import './LottoBall.styles.css';

const LottoBall = ({ ballNumber, winningNumbers = [] }) => {
  let ballColorClassName;

  if (ballNumber < 10) {
    ballColorClassName = 'zeros';
  } else if (ballNumber < 20) {
    ballColorClassName = 'tens';
  } else if (ballNumber < 30) {
    ballColorClassName = 'twenties';
  } else if (ballNumber < 40) {
    ballColorClassName = 'thirties';
  } else {
    ballColorClassName = 'forties';
  }

  if (!!winningNumbers.length && !winningNumbers.includes(ballNumber)) {
    ballColorClassName += ' not-matched';
  }

  return <span className={`lotto-ball ${ballColorClassName}`}>{ballNumber < 10 ? `0${ballNumber}` : ballNumber}</span>;
};

export default LottoBall;
