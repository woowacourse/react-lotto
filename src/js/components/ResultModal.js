import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ResultModal.scss';

const BONUS_COUNT = 0.5;
const NUMBER_COUNT = 1;
const WINNING_COUNT = {
  SIX: 6,
  FIVE_AND_BONUS: 5.5,
  FIVE: 5,
  FOUR: 4,
  THREE: 3,
};

const WINNING_PRIZE_INFO = {
  [WINNING_COUNT.SIX]: {
    PRIZE: 2000000000,
    DESCRIPTION: '6개',
  },
  [WINNING_COUNT.FIVE_AND_BONUS]: {
    PRIZE: 30000000,
    DESCRIPTION: '5개 + 보너스볼',
  },
  [WINNING_COUNT.FIVE]: {
    PRIZE: 1500000,
    DESCRIPTION: '5개',
  },
  [WINNING_COUNT.FOUR]: {
    PRIZE: 50000,
    DESCRIPTION: '4개',
  },
  [WINNING_COUNT.THREE]: {
    PRIZE: 5000,
    DESCRIPTION: '3개',
  },
};

export default class ResultModal extends Component {
  getNumbersMatchCount(lottoTicket) {
    return lottoTicket.reduce(
      (matchCount, lottoNumber) =>
        this.props.winningNumber.numbers.includes(lottoNumber) ? matchCount + NUMBER_COUNT : matchCount,
      0,
    );
  }

  getBonusNumberMatchCount(lottoTicket) {
    return lottoTicket.includes(this.props.winningNumber.bonusNumber) ? BONUS_COUNT : 0;
  }

  getResult() {
    const result = {
      [WINNING_COUNT.SIX]: 0,
      [WINNING_COUNT.FIVE_AND_BONUS]: 0,
      [WINNING_COUNT.FIVE]: 0,
      [WINNING_COUNT.FOUR]: 0,
      [WINNING_COUNT.THREE]: 0,
    };

    this.props.lottoList.forEach((lottoTicket) => {
      let matchCount = this.getNumbersMatchCount(lottoTicket);

      if (matchCount < WINNING_COUNT.THREE) {
        return;
      }

      if (matchCount === WINNING_COUNT.FIVE) {
        matchCount += this.getBonusNumberMatchCount(lottoTicket);
      }

      result[matchCount] += 1;
    });

    return result;
  }

  render() {
    const result = this.getResult();

    return (
      <section className="ResultModal" role="dialog">
        <div className="modal-inner">
          <div className="modal-close">
            <svg viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </div>

          <h2>🏆 당첨 통계 🏆</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>일치 갯수</th>
                  <th>당첨금</th>
                  <th>당첨 갯수</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(result)
                  .sort()
                  .map((matchCount) => {
                    return (
                      <tr key={matchCount}>
                        <td>{WINNING_PRIZE_INFO[matchCount].DESCRIPTION}</td>
                        <td>{WINNING_PRIZE_INFO[matchCount].PRIZE}</td>
                        <td>{result[matchCount]}장</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <p className="rate-of-return-message">당신의 총 수익률은 %입니다.</p>
          <button className="restart-btn" type="reset">
            다시 시작하기
          </button>
        </div>
      </section>
    );
  }
}

ResultModal.propTypes = {
  lottoList: PropTypes.array.isRequired,
  winningNumber: PropTypes.shape({
    numbers: PropTypes.array.isRequired,
    bonusNumber: PropTypes.number.isRequired,
  }),
};
