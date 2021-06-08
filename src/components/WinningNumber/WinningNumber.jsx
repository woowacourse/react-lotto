import React from 'react';
import './WinningNumber.styles.css';
import { BONUS_NUMBER, WINNING_DATE, WINNING_NUMBERS, WINNING_ROUND } from './WinningNumber.services';
import LottoBall from '../LottoBall/LottoBall';

const WinningNumber = ({ setIsWinningResultOpen }) => {
  const onShowResultClick = () => setIsWinningResultOpen(true);

  return (
    <div className="draw-number-wrapper">
      <h2 className="draw-number-title">
        {WINNING_ROUND}회차 당첨번호 {WINNING_DATE.split('-').join('.')}
      </h2>
      <section className="draw-number-section">
        {WINNING_NUMBERS.map((number, i) => (
          <LottoBall key={i} ballNumber={number} />
        ))}
        <span className="plus-sign">+</span>
        <span className="bonus-number-title">보너스번호</span>
        <LottoBall ballNumber={BONUS_NUMBER} />
      </section>
      <button type="button" className="open-result-button" onClick={onShowResultClick}>
        당첨결과 확인하기
      </button>
    </div>
  );
};

export default WinningNumber;
