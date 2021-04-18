import React, { Component } from 'react';
import { Root, Modal, ModalInner, CloseButton, CloseX, Table, Tr, EarningRate, RestartButton } from './style';
import { RANK_CONVERTER, WINNING_PRIZE } from '../../constants';

class ResultModal extends Component {
  constructor(props) {
    super(props);

    this.handleClickDimmedArea = this.handleClickDimmedArea.bind(this);
  }

  calculateResult() {
    const rankCount = {
      '1st': 0,
      '2nd': 0,
      '3rd': 0,
      '4th': 0,
      '5th': 0,
    };
    const { mainNumbers, bonusNumber } = this.props.winningNumbers;

    this.props.lottos.forEach((lotto) => {
      const mainPoint = lotto.numbers.filter((number) => mainNumbers.includes(number)).length;
      const isSecondRanked = mainPoint === 5 && lotto.numbers.includes(bonusNumber);
      const bonusPoint = isSecondRanked ? 0.5 : 0;

      if (mainPoint < 3) return;

      rankCount[RANK_CONVERTER[mainPoint + bonusPoint]]++;
    });

    const earningRate = this.calculateEarningRate(rankCount);

    return { rankCount, earningRate };
  }

  calculateEarningRate(rankCount) {
    const totalEarning = Object.entries(rankCount).reduce((sum, [rank, count]) => {
      return sum + count * WINNING_PRIZE[rank];
    }, 0);

    return ((totalEarning / this.props.price - 1) * 100).toFixed(2);
  }

  handleClickDimmedArea(event) {
    if (event.target === event.currentTarget) this.props.onCloseModal();
  }

  render() {
    const { rankCount, earningRate } = this.calculateResult();

    return (
      <Root>
        <Modal isOpen={this.props.isOpen} onClick={this.handleClickDimmedArea}>
          <ModalInner>
            <CloseButton onClick={this.props.onCloseModal}>
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
              <tbody>
                <Tr>
                  <td>3개</td>
                  <td>5,000</td>
                  <td>{rankCount['5th']}개</td>
                </Tr>
                <Tr>
                  <td>4개</td>
                  <td>50,000</td>
                  <td>{rankCount['4th']}개</td>
                </Tr>
                <Tr>
                  <td>5개</td>
                  <td>1,500,000</td>
                  <td>{rankCount['3rd']}개</td>
                </Tr>
                <Tr>
                  <td>5개 + 보너스볼</td>
                  <td>30,000,000</td>
                  <td>{rankCount['2nd']}개</td>
                </Tr>
                <Tr>
                  <td>6개</td>
                  <td>2,000,000,000</td>
                  <td>{rankCount['1st']}개</td>
                </Tr>
              </tbody>
            </Table>
            <EarningRate>당신의 총 수익률은 {earningRate}%입니다.</EarningRate>
            <RestartButton onClick={this.props.onResetGame}>다시 시작하기</RestartButton>
          </ModalInner>
        </Modal>
      </Root>
    );
  }
}

export default ResultModal;
