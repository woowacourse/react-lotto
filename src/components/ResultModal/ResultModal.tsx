import { useState, useEffect } from 'react';
import { ResultModalWrapper, ResultTable } from './ResultModal.styles';
import ResultTableRow from './ResultTableRow/ResultTableRow';
import Modal from '../common/Modal';
import Button from '../common/Button';
import Wrapper from '../common/Wrapper';
import TICKET from '../../constants/ticket';
import { MATCH, PRIZE, RANK_INDEX } from '../../constants/game';
import { getTotalProfit, getWinnerCounts } from '../../services/game';

type Props = {
  handleModalClose: () => void;
  resetGame: () => void;
  tickets: Ticket[];
  winningNumber: WinningNumber;
};

const ResultModal = ({ handleModalClose, resetGame, tickets, winningNumber }: Props) => {
  const [winnerCounts, setWinnerCounts] = useState<number[]>(Array(5).fill(0));
  const [profit, setProfit] = useState<number>(0);

  const computeResult = () => {
    const payment = tickets.length * TICKET.PRICE;
    const counts = getWinnerCounts(tickets, winningNumber);
    setWinnerCounts(counts);
    setProfit(getTotalProfit(payment, counts));
  };

  useEffect(() => {
    computeResult();
  }, []);

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
              {Object.values(RANK_INDEX).map(index => (
                <ResultTableRow
                  key={index}
                  match={MATCH[index]}
                  prize={PRIZE[index]}
                  matchCount={winnerCounts[index]}
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
