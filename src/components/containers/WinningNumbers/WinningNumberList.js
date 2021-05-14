import React from 'react';
import PropTypes from 'prop-types';
import { LottoBall } from '../../shared';

export const WinningNumberList = (props) => {
  const { winningNumbers, bonusNumber } = props.number;

  return (
    <>
      <section className="WinningNumberList">
        {winningNumbers.map((v) => (
          <LottoBall key={v} targetNumber={v} />
        ))}
        <span className="WinningNumberList__plus_sign">+</span>
        <span className="WinningNumberList__bonus_number">보너스번호</span>
        <LottoBall key={bonusNumber} targetNumber={bonusNumber} />
      </section>
    </>
  );
};

WinningNumberList.propTypes = {
  number: PropTypes.exact({
    winningNumbers: PropTypes.array,
    bonusNumber: PropTypes.number,
  }).isRequired,
};
