import React from 'react';
import { Root, Modal, ModalInner, CloseButton, CloseX, Table, Tr, EarningRate, RestartButton } from './style';
import { calculateResult } from '../../service';
import { RANK_TABLE } from '../../constants';

export default function ResultModal({ isOpen, price, lottos, winningNumbers, onResetGame, onCloseModal }) {
  const handleClickDimmedArea = (event) => {
    if (event.target === event.currentTarget) onCloseModal();
  };

  const { rankCount, earningRate } = calculateResult({ winningNumbers, lottos, price });

  const resultTable = Object.entries(RANK_TABLE).map(([rank, { prize, matching }]) => (
    <Tr key={rank}>
      <td>{matching}</td>
      <td>{prize.toLocaleString()}</td>
      <td>{rankCount[rank]}개</td>
    </Tr>
  ));

  return (
    <Root>
      <Modal isOpen={isOpen} onClick={handleClickDimmedArea}>
        <ModalInner>
          <CloseButton onClick={onCloseModal}>
            <svg viewBox="0 0 40 40">
              <CloseX d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </CloseButton>
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
        </ModalInner>
      </Modal>
    </Root>
  );
}
