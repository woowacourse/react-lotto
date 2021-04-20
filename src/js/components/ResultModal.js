import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BONUS_COUNT, LOTTO, NUMBER_COUNT, WINNING_COUNT, WINNING_PRIZE_INFO } from '../constants/lottoData';
import { toFixedNumber } from '../utils/format';
import './ResultModal.scss';

export default class ResultModal extends Component {
  constructor(props) {
    super(props);

    this.onCloseModalWithDimmed = this.onCloseModalWithDimmed.bind(this);
  }

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

  getRateOfReturn(result) {
    try {
      const totalPrize = Object.keys(result).reduce(
        (sum, curCount) => sum + WINNING_PRIZE_INFO[curCount].PRIZE * result[curCount],
        0,
      );

      return (totalPrize / (this.props.lottoList.length * LOTTO.PRICE) - 1) * 100;
    } catch (e) {
      return 0;
    }
  }

  onCloseModalWithDimmed({ target }) {
    if (target.classList.contains('ResultModal')) {
      this.props.closeResultModal();
    }
  }

  render() {
    const result = this.getResult() || [];

    return (
      <section className="ResultModal" role="dialog" onClick={this.onCloseModalWithDimmed}>
        <div className="modal-inner">
          <button type="button" className="modal-close" onClick={this.props.closeResultModal}>
            <svg viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>

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
                  .map((matchCount) => (
                    <tr key={matchCount}>
                      <td>{WINNING_PRIZE_INFO[matchCount].DESCRIPTION}</td>
                      <td>{WINNING_PRIZE_INFO[matchCount].PRIZE.toLocaleString('ko-KR')} 원</td>
                      <td>{result[matchCount]}장</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <p className="rate-of-return-message">
            당신의 총 수익률은 {toFixedNumber(this.getRateOfReturn(result), 2)}%입니다.
          </p>
          <button className="restart-btn" type="reset" onClick={this.props.restart}>
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
  closeResultModal: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
};
