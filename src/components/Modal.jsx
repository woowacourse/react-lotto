import React from 'react';
import PropTypes from 'prop-types';
import { LOTTO } from '../utils/constants';

const winningTable = [
  { money: 0, label: '', rank: 0 },
  { money: 2e9, label: '6개', rank: 1 },
  { money: 30e6, label: '5개 + 보너스볼', rank: 2 },
  { money: 1.5e6, label: '5개', rank: 3 },
  { money: 50e3, label: '4개', rank: 4 },
  { money: 5e3, label: '3개', rank: 5 },
];

const getWinningRankCount = (acc, cur) => {
  acc[cur] = acc[cur] === undefined ? 1 : acc[cur] + 1;

  return acc;
};

const getWinningRank = ([count, isBonusNumberMatched]) => {
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
};

const getProfit = (ranks, tickets) => {
  return (
    ranks.reduce((acc, count, rank) => acc + winningTable[rank].money * count, 0) /
      (tickets.length * LOTTO.UNIT_PRICE) -
    1
  );
};

const getWinningCount = (ticket, winningNumbers, bonusNumber) => {
  const numbersSet = new Set([...ticket, ...winningNumbers]);
  const count = ticket.length + winningNumbers.length - numbersSet.size;

  return [count, ticket.includes(bonusNumber)];
};

Modal.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  winningNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  bonusNumber: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default function Modal(props) {
  const ticketRanks = props.tickets
    .map((ticket) => getWinningCount(ticket, props.winningNumbers, props.bonusNumber))
    .map(getWinningRank)
    .reduce(
      getWinningRankCount,
      Array.from({ length: winningTable.length }, () => 0)
    );

  const profit = getProfit(ticketRanks, props.tickets);

  const handleResetClick = props.reset;
  const handleCloseClick = props.close;
  const handleCloseKeyUp = ({ key }) => {
    const keys = ['Enter', ' '];

    if (keys.includes(key)) {
      props.close();
    }
  };

  return (
    <div className="modal w-full flex fixed inset-0 bg-black bg-opacity-50" role="dialog" aria-modal="true">
      <div className="modal-inner p-10 m-auto relative rounded-xl bg-white">
        <div
          className="modal-close absolute m-4 w-6 top-2 right-2 cursor-pointer"
          role="button"
          tabIndex="0"
          onKeyUp={handleCloseKeyUp}
          onClick={handleCloseClick}
        >
          <svg className="stroke-current text-blue-500 hover:text-blue-700 stroke-5" viewBox="0 0 40 40">
            <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          <span role="img" aria-label="trophy">
            🏆
          </span>
          {' 당첨 통계 '}
          <span role="img" aria-label="trophy">
            🏆
          </span>
        </h2>
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
              {ticketRanks
                .map((count, rank) => (
                  <tr key={rank} className="text-center  border-solid border-b-2 border-gray-300">
                    <td className="p-3">{winningTable[rank].label}</td>
                    <td className="p-3">{winningTable[rank].money.toLocaleString('en-US')}</td>
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
              ${profit.toLocaleString('en-US', {
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
            onClick={handleResetClick}
          >
            다시 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
