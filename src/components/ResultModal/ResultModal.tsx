import React, { Component } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { Wrapper } from '../common/Wrapper';
import { ResultModalWrapper, ResultTable } from './ResultModal.styles';
import ResultTableRow from './ResultTableRow/ResultTableRow';
import { getTotalProfit, getWinnerCounts } from '../../services/game';
import TICKET from '../../constants/ticket';
import { MATCH, PRIZE, RANK_INDEX } from '../../constants/game';

type Props = {
  handleModalClose: () => void;
  resetGame: () => void;
  tickets: Ticket[];
  winningNumber: WinningNumber;
};

export default class ResultModal extends Component<Props> {
  componentDidMount() {
    this.computeResult();
  }

  computeResult(): [number[], number] {
    const { tickets, winningNumber } = this.props;
    const payment = tickets.length * TICKET.PRICE;
    const winnerCounts = getWinnerCounts(tickets, winningNumber);
    const profit = getTotalProfit(payment, winnerCounts);

    return [winnerCounts, profit];
  }

  render() {
    const [
      [firstWinnerCount, secondWinnerCount, thirdWinnerCount, fourthWinnerCount, fifthWinnerCount],
      profit,
    ] = this.computeResult();

    return (
      <Modal handleModalClose={this.props.handleModalClose}>
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
            <Button type="reset" fullWidth onClick={this.props.resetGame}>
              다시 시작하기
            </Button>
          </Wrapper>
        </ResultModalWrapper>
      </Modal>
    );
  }
}
