import React from 'react';
import PropTypes from 'prop-types';
import {
  RewardResultTitle,
  RewardResultWrapperDiv,
  RewardTable,
  ProfitMessage,
} from './RewardResultTable.style';
import {
  getLottoProfitResult,
  getMatchedCounts,
  getRanks,
  getTotalProfit,
} from '../../services/winningResult';

export const RewardResultTable = ({ lottos, winningNumbers }) => {
  const counts = getMatchedCounts(lottos, winningNumbers);
  const ranks = getRanks(counts);
  const profitResults = Object.values(getLottoProfitResult(ranks));

  return (
    <>
      <RewardResultTitle id="title-dialog">🏆 당첨 통계 🏆</RewardResultTitle>
      <RewardResultWrapperDiv>
        <RewardTable>
          <thead>
            <tr>
              <th>일치 갯수</th>
              <th>당첨금</th>
              <th>당첨 갯수</th>
            </tr>
          </thead>
          <tbody>
            {profitResults.map(({ matchingCount, reward, wins }) => (
              <tr key={matchingCount}>
                <td>{matchingCount}</td>
                <td>{reward}</td>
                <td>
                  <span>{wins}</span>개
                </td>
              </tr>
            ))}
          </tbody>
        </RewardTable>
      </RewardResultWrapperDiv>

      <ProfitMessage>
        당신의 총 수익률은
        <span>{getTotalProfit(counts).toFixed(2)}</span>
        %입니다.
      </ProfitMessage>
    </>
  );
};

RewardResultTable.propTypes = {
  lottos: PropTypes.array.isRequired,
  winningNumbers: PropTypes.shape({
    numbers: PropTypes.array,
    bonusNumber: PropTypes.number,
  }).isRequired,
};

export default RewardResultTable;
