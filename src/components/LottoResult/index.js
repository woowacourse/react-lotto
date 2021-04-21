import React from 'react';
import { Table, Tr, EarningRate, RestartButton } from './style';
import { calculateResult } from '../../service';
import { RANK_TABLE } from '../../constants';

export default function LottoResult({ price, lottos, winningNumbers, onResetGame }) {
  const { rankCount, earningRate } = calculateResult({ winningNumbers, lottos, price });

  const resultTable = Object.entries(RANK_TABLE).map(([rank, { prize, matching }]) => (
    <Tr key={rank}>
      <td>{matching}</td>
      <td>{prize.toLocaleString()}</td>
      <td>{rankCount[rank]}개</td>
    </Tr>
  ));

  return (
    <>
      <h2>💰당첨 통계💰</h2>
      <Table>
        <thead>
          <Tr>
            <th>일치 갯수</th>
            <th>당첨금</th>
            <th>당첨 갯수</th>
          </Tr>
        </thead>
        <tbody>{resultTable}</tbody>
      </Table>
      <EarningRate>당신의 총 수익률은 {earningRate}%입니다.</EarningRate>
      <RestartButton onClick={onResetGame}>다시 시작하기</RestartButton>
    </>
  );
}
