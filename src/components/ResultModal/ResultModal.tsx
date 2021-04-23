import { FC } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { Wrapper } from '../common/Wrapper';
import { ResultModalWrapper, ResultTable } from './ResultModal.styles';
import ResultTableRow from './ResultTableRow/ResultTableRow';
import { computeResult } from '../../services/game';
import { MATCH, PRIZE, RANK_INDEX } from '../../constants/game';
import { Ticket, WinningNumber } from '../../types';

interface Props {
  handleModalClose: () => void;
  resetGame: () => void;
  tickets: Ticket[];
  winningNumber: WinningNumber;
}

const ResultModal: FC<Props> = ({ handleModalClose, resetGame, tickets, winningNumber }) => {
  const { FIRST, SECOND, THIRD, FOURTH, FIFTH } = RANK_INDEX;
  const { winnerCounts, profit } = computeResult(tickets, winningNumber);

  return (
    <Modal handleModalClose={handleModalClose}>
      <ResultModalWrapper>
        <h2 className="result-header">🏆 당첨 통계 🏆</h2>
        <Wrapper display="flex">
          <ResultTable>
            <thead>
              <tr>
                <th>일치 갯수</th>
                <th>당첨금</th>
                <th>당첨 갯수</th>
              </tr>
            </thead>
            <tbody>
              {[FIFTH, FOURTH, THIRD, SECOND, FIRST].map((rank, index) => (
                <ResultTableRow
                  key={index}
                  match={MATCH[rank]}
                  prize={PRIZE[rank]}
                  isBonus={rank === SECOND}
                  matchCount={winnerCounts[rank]}
                />
              ))}
            </tbody>
          </ResultTable>
        </Wrapper>
        <p className="profit">수익률은 {profit}% 입니다.</p>
        <Wrapper display="flex">
          <Button type="reset" fullWidth onClick={resetGame}>
            다시 시작하기
          </Button>
        </Wrapper>
      </ResultModalWrapper>
    </Modal>
  );
};

export default ResultModal;
