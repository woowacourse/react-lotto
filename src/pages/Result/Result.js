import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Styled from './Result.style';
import Button from '../../components/Button/Button';
import LottoNumberList from '../../components/LottoNumberList/LottoNumberList';
import LottoNumberItem from '../../components/LottoNumberItem/LottoNumberItem';
import Modal from '../../components/Modal/Modal';
import WinningTable from '../../components/WinningTable/WinningTable';
import PageTitle from '../../components/PageTitle/PageTitle';
import { getProfitRate, getWinningResult } from '../../services/Result';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.handleOpenDetail = this.handleOpenDetail.bind(this);
    this.handleCloseDetail = this.handleCloseDetail.bind(this);
  }

  handleOpenDetail() {
    this.setState({ isModalOpen: true });
  }

  handleCloseDetail(event) {
    if (event.target !== event.currentTarget) return;

    this.setState({ isModalOpen: false });
  }

  render() {
    if (!this.props.location?.state) return <Redirect to="/" />;

    const { isModalOpen } = this.state;
    const { lottoList, moneyInput, winningNumber, bonusNumber } = this.props.location?.state;
    const winningResult = getWinningResult(lottoList, { winningNumber, bonusNumber });
    const profitRate = getProfitRate(winningResult, moneyInput);

    return (
      <>
        <PageTitle>얼마나 잃었을까요?</PageTitle>

        <Styled.WinningNumber>
          <Styled.NumberWrapper>
            <Styled.NumberBorder>
              {Object.values(winningNumber).map((number) => (
                <LottoNumberItem key={`winning-number-${number}`}>{number}</LottoNumberItem>
              ))}
            </Styled.NumberBorder>
            <Styled.NumberText>당첨 번호</Styled.NumberText>
          </Styled.NumberWrapper>

          <Styled.PlusIcon>➕</Styled.PlusIcon>

          <Styled.NumberWrapper>
            <Styled.NumberBorder>
              <LottoNumberItem>{bonusNumber}</LottoNumberItem>
            </Styled.NumberBorder>
            <Styled.NumberText>보너스 번호</Styled.NumberText>
          </Styled.NumberWrapper>
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
