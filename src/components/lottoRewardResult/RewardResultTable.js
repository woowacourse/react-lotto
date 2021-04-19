import React, { Component } from 'react';
import styled from 'styled-components';
import {
  getLottoProfitResult,
  getMatchedCounts,
  getRanks,
  getTotalProfit,
} from '../../services/winningResult';

const RewardResultTitle = styled.h2`
  text-align: center;
`;

const RewardResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  border: 3px solid #eb7a7a;
`;

const Tr = styled.tr`
  text-align: center;
`;

const Th = styled.th`
  padding: 0.75rem;
  border-bottom: 1.5px solid #f5bdbd;
`;

const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1.5px solid #f5bdbd;
`;

const ProfitMessage = styled.p`
  text-align: center;
`;

const ProfitMessageSpan = styled.span`
  margin: 0 0.3rem;
  font-weight: bold;
  color: #c71f1f;
`;

class RewardResultTable extends Component {
  render() {
    return (
      <>
        <RewardResultTitle id="title-dialog">🏆 당첨 통계 🏆</RewardResultTitle>
        <RewardResultWrapper>
          <Table>
            <thead>
              <Tr>
                <Th>일치 갯수</Th>
                <Th>당첨금</Th>
                <Th>당첨 갯수</Th>
              </Tr>
            </thead>
            <tbody>
              {Object.values(
                getLottoProfitResult(
                  getRanks(
                    getMatchedCounts(
                      this.props.lottos,
                      this.props.winningNumbers,
                    ),
                  ),
                ),
              )
                .map(({ matchingCount, reward, wins }) => (
                  <Tr key={matchingCount}>
                    <Td>{matchingCount}</Td>
                    <Td>{reward}</Td>
                    <Td>
                      <span>{wins}</span>개
                    </Td>
                  </Tr>
                ))
                .reverse()}
            </tbody>
          </Table>
        </RewardResultWrapper>
        <ProfitMessage>
          당신의 총 수익률은
          <ProfitMessageSpan>
            {getTotalProfit(
              getMatchedCounts(this.props.lottos, this.props.winningNumbers),
            ).toFixed(2)}
          </ProfitMessageSpan>
          % 입니다.
        </ProfitMessage>
      </>
    );
  }
}

export default RewardResultTable;
