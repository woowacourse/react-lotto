import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import LottoNumberList from '../../components/LottoNumberList/LottoNumberList';
import Modal from '../../components/Modal/Modal';
import { RANKING, RANKING_TABLE, WINNING_TABLE } from '../../constants';
import { getIntersectionCount, currencyFormat, initObject } from '../../utils';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.handleOpenDetail = this.handleOpenDetail.bind(this);
    this.handleCloseDetail = this.handleCloseDetail.bind(this);
    this.getProfitRate = this.getProfitRate.bind(this);
  }

  getRanking(lotto, { winningNumberList, bonusNumber }) {
    let matchCount = getIntersectionCount(lotto, winningNumberList);

    if (matchCount === 5) {
      const matchBonusCount = getIntersectionCount(lotto, [bonusNumber]);
      matchCount += matchBonusCount && 0.5;
    }

    return RANKING_TABLE[matchCount] || RANKING.NO_PRIZE;
  }

  getWinningResult(lottoList, { winningNumber, bonusNumber }) {
    const winningNumberList = Object.values(winningNumber);

    let winningResult = initObject(
      Object.values(RANKING).filter((ranking) => ranking !== RANKING.NO_PRIZE),
      0
    );

    Object.values(lottoList).forEach((lotto) => {
      const ranking = this.getRanking(lotto, { winningNumberList, bonusNumber });

      if (ranking !== RANKING.NO_PRIZE) {
        winningResult = {
          ...winningResult,
          [ranking]: winningResult[ranking] + 1,
        };
      }
    });

    return winningResult;
  }

  getProfitRate(winningResult, moneyInput) {
    const total = Object.entries(winningResult).reduce((accumulator, currentValue) => {
      const [ranking, winningCount] = currentValue;
      return accumulator + WINNING_TABLE[ranking].PRIZE * winningCount;
    }, 0);

    if (total < moneyInput) {
      return Math.floor((total / moneyInput - 1) * 100);
    }

    return Math.floor(total / moneyInput) * 100;
  }

  handleOpenDetail() {
    this.setState({ isModalOpen: true });
  }

  handleCloseDetail(event) {
    if (event.target !== event.currentTarget) return;

    this.setState({ isModalOpen: false });
  }

  render() {
    const { isModalOpen } = this.state;
    const { lottoList, moneyInput, winningNumber, bonusNumber } = this.props?.location?.state;
    const winningResult = this.getWinningResult(lottoList, { winningNumber, bonusNumber });
    const profitRate = this.getProfitRate(winningResult, moneyInput);

    return (
      <>
        <div>
          {Object.values(winningNumber).map((number) => (
            <span key={`winning-number-${number}`}>{number} </span>
          ))}
          <span>{bonusNumber}</span>
          <LottoNumberList lottoList={lottoList} />
        </div>
        <Button onClick={this.handleOpenDetail}>결과 확인</Button>
        <Link to="/">
          <Button>다시 시작</Button>
        </Link>
        {isModalOpen && (
          <Modal onClose={this.handleCloseDetail}>
            <table>
              <thead>
                <tr>
                  <th>일치 갯수</th>
                  <th>당첨금</th>
                  <th>당첨 갯수</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(winningResult).map(([ranking, winningCount]) => (
                  <tr key={ranking}>
                    <td>{WINNING_TABLE[ranking].MATCH_CONDITION}</td>
                    <td>{currencyFormat(WINNING_TABLE[ranking].PRIZE)}</td>
                    <td>
                      <span>{winningCount}</span>개
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>당신의 수익률을 {profitRate}%입니다.</div>
          </Modal>
        )}
      </>
    );
  }
}

export default Result;
