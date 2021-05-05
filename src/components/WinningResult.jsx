import React from 'react';
import PropTypes from 'prop-types';
import { LOTTO } from '../utils';

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

const WinningResult = (props) => {
  const ticketRanks = props.tickets
    .map((ticket) => getWinningCount(ticket, props.winningNumbers, props.bonusNumber))
    .map(getWinningRank)
    .reduce(getWinningRankCount, Array(winningTable.length).fill(0));

  const profit = getProfit(ticketRanks, props.tickets);

  return (
    <>
      <h2 className="mb-4 text-center text-2xl font-semibold space-x-2">
        <span role="img" aria-label="trophy">
          🏆
        </span>
        <span>당첨 통계</span>
        <span role="img" aria-label="trophy">
          🏆
        </span>
      </h2>
      <div className="d-flex justify-center">
        <table className="">
          <thead>
            <tr className="text-center border-b-2 border-solid border-gray-400">
              <th className="p-3 font-semibold">일치 갯수</th>
              <th className="p-3 font-semibold">당첨금</th>
              <th className="p-3 font-semibold">당첨 갯수</th>
            </tr>
          </thead>
          <tbody>
            {ticketRanks
              .map((count, rank) => (
                <tr key={rank} className="text-center border-b-2 border-solid border-gray-300">
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
      <p className="mt-4 text-center font-bold">
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
          className="px-4 py-2 w-full text-white font-bold bg-blue-600 hover:bg-blue-700 rounded focus:outline-none focus:ring-1.5"
          onClick={props.onReset}
        >
          다시 시작하기
        </button>
      </div>
    </>
  );
};

WinningResult.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  winningNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  bonusNumber: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default WinningResult;
