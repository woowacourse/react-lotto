import React, { Component } from 'react';

import {
  getLottoProfitResult,
  getMatchedCounts,
  getRanks,
  getTotalProfit,
} from '../../services/winningResult';

import {
  RewardResultTitle,
  RewardResultWrapperDiv,
  RewardTable,
  ProfitMessage,
} from './RewardResultTable.style';

class RewardResultTable extends Component {
  constructor(props) {
    super(props);

    this.counts = getMatchedCounts(
      this.props.lottos,
      this.props.winningNumbers,
    );
  }

  getRewardResults() {
    const ranks = getRanks(this.counts);
    const profitResults = getLottoProfitResult(ranks);

    return Object.values(profitResults).map(
      ({ matchingCount, reward, wins }) => (
        <tr key={matchingCount}>
          <td>{matchingCount}</td>
          <td>{reward}</td>
          <td>
            <span>{wins}</span>개
          </td>
        </tr>
      ),
    );
  }

  render() {
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
            <tbody>{this.getRewardResults()}</tbody>
          </RewardTable>
        </RewardResultWrapperDiv>

        <ProfitMessage>
          당신의 총 수익률은
          <span>{getTotalProfit(this.counts).toFixed(2)}</span>
          %입니다.
        </ProfitMessage>
      </>
    );
  }
}

export default RewardResultTable;
