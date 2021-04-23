import { useEffect, useCallback } from 'react';
import TICKET from '../../constants/ticket';
import { MATCH, PRIZE, RANK_INDEX } from '../../constants/game';

import Modal from '../common/Modal';
import Button from '../common/Button';
import { Wrapper } from '../common/Wrapper';
import ResultTableRow from './ResultTableRow/ResultTableRow';
import { ResultModalWrapper, ResultTable } from './ResultModal.styles';

import { getTotalProfit, getWinnerCounts } from '../../services/game';

type ResultModalProps = {
  handleModalClose: () => void;
  resetGame: () => void;
  tickets: Ticket[];
  winningNumber: WinningNumber;
};

const ResultModal = ({ tickets, winningNumber, handleModalClose, resetGame }: ResultModalProps) => {
  useEffect(() => {
    computeResult();
  }, [tickets, winningNumber]);

  const computeResult: () => [number[], number] = useCallback(() => {
    const payment = tickets.length * TICKET.PRICE;
    const winnerCounts = getWinnerCounts(tickets, winningNumber);
    const profit = getTotalProfit(payment, winnerCounts);

    return [winnerCounts, profit];
  }, [tickets, winningNumber]);

  const [
    [firstWinnerCount, secondWinnerCount, thirdWinnerCount, fourthWinnerCount, fifthWinnerCount],
    profit,
  ] = computeResult();

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
              <ResultTableRow
                match={MATCH[RANK_INDEX.FIFTH]}
                prize={PRIZE[RANK_INDEX.FIFTH]}
                matchCount={fifthWinnerCount}
              />
              <ResultTableRow
                match={MATCH[RANK_INDEX.FOURTH]}
                prize={PRIZE[RANK_INDEX.FOURTH]}
                matchCount={fourthWinnerCount}
              />
              <ResultTableRow
                match={MATCH[RANK_INDEX.THIRD]}
                prize={PRIZE[RANK_INDEX.THIRD]}
                matchCount={thirdWinnerCount}
              />
              <ResultTableRow
                isBonus
                match={MATCH[RANK_INDEX.SECOND]}
                prize={PRIZE[RANK_INDEX.SECOND]}
                matchCount={secondWinnerCount}
              />
              <ResultTableRow
                match={MATCH[RANK_INDEX.FIRST]}
                prize={PRIZE[RANK_INDEX.FIRST]}
                matchCount={firstWinnerCount}
              />
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
