import React, { Component } from 'react';
import { Root, Modal, ModalInner, CloseButton, CloseX, Table, Tr, EarningRate, RestartButton } from './style';
import { calculateResult } from '../service';
class ResultModal extends Component {
  constructor(props) {
    super(props);

    this.handleClickDimmedArea = this.handleClickDimmedArea.bind(this);
  }

  handleClickDimmedArea(event) {
    if (event.target === event.currentTarget) this.props.onCloseModal();
  }

  render() {
    const { rankCount, earningRate } = calculateResult(this.props);

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
