import React from 'react';
import PropTypes from 'prop-types';
import { LOTTO } from '../utils/constants';
export default class Modal extends React.Component {
  static winningTable = [
    { money: 0, label: '', rank: 0 },
    { money: 2e9, label: '6개', rank: 1 },
    { money: 30e6, label: '5개 + 보너스볼', rank: 2 },
    { money: 1.5e6, label: '5개', rank: 3 },
    { money: 50e3, label: '4개', rank: 4 },
    { money: 5e3, label: '3개', rank: 5 },
  ];

  static getWinningRankCount(acc, cur) {
    acc[cur] = acc[cur] === undefined ? 1 : acc[cur] + 1;

    return acc;
  }

  static getWinningRank([count, isBonusNumberMatched]) {
    switch (true) {
      case count === 6:
        return 1;
      case count === 5 && isBonusNumberMatched:
        return 2;
      case count === 5 && !isBonusNumberMatched:
        return 3;
      case count === 4:
        return 4;
      case count === 3:
        return 5;
      default:
        return 0;
    }
  }

  static getProfit = (ranks, tickets) => {
    return (
      ranks.reduce((acc, count, rank) => acc + Modal.winningTable[rank].money * count, 0) /
      (tickets.length * LOTTO.UNIT_PRICE)
    );
  };

  static getWinningCount(ticket, winningNumbers, bonusNumber) {
    const numbersSet = new Set([...ticket, ...winningNumbers]);
    const count = ticket.length + winningNumbers.length - numbersSet.size;

    return [count, ticket.includes(bonusNumber)];
  }

  static propTypes = {
    tickets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    winningNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
    bonusNumber: PropTypes.number.isRequired,
    reset: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const { tickets, winningNumbers, bonusNumber } = this.props;

    this.ticketRanks = tickets
      .map((ticket) => Modal.getWinningCount(ticket, winningNumbers, bonusNumber))
      .map(Modal.getWinningRank)
      .reduce(
        Modal.getWinningRankCount,
        Array.from({ length: Modal.winningTable.length }, () => 0)
      );

    this.profit = Modal.getProfit(this.ticketRanks, tickets);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleResetClick() {
    this.props.reset();
  }

  handleCloseClick() {
    this.props.close();
  }

  render() {
    return (
      <div className="modal max-w-screen-sm mx-auto bg-gray-100 flex fixed inset-0">
        <div className="modal-inner p-10 m-auto relative">
          <div className="modal-close absolute m-4 w-6 top-2 right-2 cursor-pointer" onClick={this.handleCloseClick}>
            <svg className="stroke-current text-blue-500 hover:text-blue-700 stroke-5" viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">🏆 당첨 통계 🏆</h2>
          <div className="d-flex justify-center">
            <table className="">
              <thead>
                <tr className="text-center border-solid border-b-2 border-gray-400">
                  <th className="font-semibold p-3">일치 갯수</th>
                  <th className="font-semibold p-3">당첨금</th>
                  <th className="font-semibold p-3">당첨 갯수</th>
                </tr>
              </thead>
              <tbody>
                {this.ticketRanks
                  .map((count, rank) => (
                    <tr key={rank} className="text-center  border-solid border-b-2 border-gray-300">
                      <td className="p-3">{Modal.winningTable[rank].label}</td>
                      <td className="p-3">{Modal.winningTable[rank].money.toLocaleString('en-US')}</td>
                      <td className="p-3">{count}개</td>
                    </tr>
                  ))
                  .slice(1)
                  .reverse()}
              </tbody>
            </table>
          </div>
          <p className="text-center font-bold mt-4">
            {`당신의 총 수익률은
              ${this.profit.toLocaleString('en-US', {
                style: 'percent',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            입니다.`}
          </p>
          <div className="d-flex justify-center mt-5">
            <button
              type="button"
              className="font-bold py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white w-full"
              onClick={this.handleResetClick}
            >
              다시 시작하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}
