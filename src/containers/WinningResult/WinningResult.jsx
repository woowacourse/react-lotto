import React, { useState } from 'react';
import './WinningResult.styles.css';
import coin from '../../animations/coin.json';
import Animation from '../../components/Animation/Animation';
import useAnimationTimer from '../../hooks/useAnimationTimer';
import { TIME_TO_LAST_COIN_ANIMATION } from '../../constants/time';
import { getNumOfMatch, getMatchCount, getStatistics } from './WinningResult.services';
import TableRow from '../../components/TableRow/TableRow';
import { BONUS_NUMBER, WINNING_NUMBERS } from '../../components/WinningNumber/WinningNumber.services';

const WinningResult = ({ lottoBundle, setIsWinningResultOpen, onReset }) => {
  const matchCount = getMatchCount(lottoBundle);
  const { profit, rateOfReturn } = getStatistics(lottoBundle, matchCount);
  const [isAnimationEnded, setIsAnimationEnded] = useState(false);

  useAnimationTimer(setIsAnimationEnded, TIME_TO_LAST_COIN_ANIMATION);

  return (
    <>
      <div className="winning-result open">
        {!isAnimationEnded ? (
          <div className="coin-animation">
            <Animation height="360px" speed={1.5} animationData={coin} />
          </div>
        ) : (
          <div className="winning-result-inner">
            <button type="button" className="close-button" onClick={() => setIsWinningResultOpen(false)}>
              <svg viewBox="0 0 40 40">
                <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </button>
            <h2 className="winning-result-title">당첨결과</h2>
            <div className="result-table-wrapper">
              <table className="result-table">
                <thead>
                  <tr className="table-row">
                    <th className="table-head">구분</th>
                    <th className="table-head">번호</th>
                  </tr>
                </thead>
                <tbody>
                  {lottoBundle.map((lotto, i) => {
                    const numOfMatch = getNumOfMatch(lotto);
                    const winningNumbers = WINNING_NUMBERS.concat(BONUS_NUMBER);

                    return <TableRow key={i} lotto={lotto} numOfMatch={numOfMatch} winningNumbers={winningNumbers} />;
                  })}
                </tbody>
              </table>
            </div>
            <p className="profit">
              <span className="description">당첨 금액</span>
              <span className="value">{profit}원</span>
            </p>
            <p className="rate-of-return">
              <span className="description">총 수익률</span>
              <span className="value">{rateOfReturn}%</span>
            </p>
            <div className="reset-button-wrapper">
              <button type="button" className="reset-button" onClick={onReset}>
                다시 시작하기
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WinningResult;
