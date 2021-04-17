import React, { Component } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { Wrapper } from '../common/Wrapper';
import { ResultModalWrapper, ResultTable } from './ResultModal.styles';
import ResultTableRow from './ResultTableRow/ResultTableRow';
import { getTotalProfit, getWinnerCounts } from '../../services/game';
import TICKET from '../../constants/ticket';

type Props = {
  handleModalClose: () => void;
  resetGame: () => void;
  tickets: Ticket[];
  winningNumber: WinningNumber;
};

type State = {
  profit: number;
  winnerCounts: number[];
};

export default class ResultModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      winnerCounts: new Array(5).fill(0),
      profit: 0,
    };
  }

  componentDidMount() {
    this.computeResult();
  }

  computeResult() {
    const { tickets, winningNumber } = this.props;
    const payment = tickets.length * TICKET.PRICE;
    const winnerCounts = getWinnerCounts(tickets, winningNumber);
    const profit = getTotalProfit(payment, winnerCounts);

    this.setState({ winnerCounts, profit });
  }

  render() {
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
                <ResultTableRow match={3} prize={5000} matchCount={this.state.winnerCounts[4]} />
                <ResultTableRow match={4} prize={50000} matchCount={this.state.winnerCounts[3]} />
                <ResultTableRow match={5} prize={1500000} matchCount={this.state.winnerCounts[2]} />
                <ResultTableRow
                  match={5}
                  isBonus
                  prize={30000000}
                  matchCount={this.state.winnerCounts[1]}
                />
                <ResultTableRow
                  match={6}
                  prize={200000000}
                  matchCount={this.state.winnerCounts[0]}
                />
              </tbody>
            </ResultTable>
          </Wrapper>
          <p className="profit">수익률은 {this.state.profit}% 입니다.</p>
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
