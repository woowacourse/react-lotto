import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import LottoNumberList from '../../components/LottoNumberList/LottoNumberList';
import LottoNumberItem from '../../components/LottoNumberItem/LottoNumberItem';
import Modal from '../../components/Modal/Modal';
import { RANKING, RANKING_TABLE, WINNING_TABLE } from '../../constants';
import { getIntersectionCount, initObject } from '../../utils';
import Styled from './Result.style';
import WinningTable from '../../components/WinningTable/WinningTable';
import PageTitle from '../../components/PageTitle/PageTitle';

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
        <PageTitle>얼마나 잃었을까요?</PageTitle>
        <Styled.WinningNumber>
          {Object.values(winningNumber).map((number) => (
            <LottoNumberItem key={`winning-number-${number}`}>{number}</LottoNumberItem>
          ))}
          <Styled.PlusIcon>➕</Styled.PlusIcon>
          <LottoNumberItem>{bonusNumber}</LottoNumberItem>
        </Styled.WinningNumber>
        <LottoNumberList
          lottoList={lottoList}
          winningNumber={winningNumber}
          bonusNumber={bonusNumber}
        />
        <Styled.ButtonContainer>
          <Button onClick={this.handleOpenDetail}>✨ 결과 확인</Button>
          <Link to="/">
            <Button bgColor="#d6d6d6">↪️ 다시 시작</Button>
          </Link>
        </Styled.ButtonContainer>
        {isModalOpen && (
          <Modal onClose={this.handleCloseDetail}>
            <Modal.Title>당첨 결과 상세 보기</Modal.Title>
            <WinningTable winningResult={winningResult} />
            <Styled.ProfitRateMessage>
              💸당신의 수익률을 <strong>{profitRate}%</strong>입니다💸
            </Styled.ProfitRateMessage>
          </Modal>
        )}
      </>
    );
  }
}

export default Result;
