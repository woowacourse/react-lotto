import React, { Component } from 'react';
import {
  Root,
  Modal,
  ModalInner,
  CloseButton,
  CloseX,
  Title,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  EarningRate,
  RestartButton,
} from './style';

class ResultModal extends Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.closeModal();
  }

  render() {
    return (
      <Root>
        <Modal isOpen={this.props.isOpen}>
          <ModalInner>
            <CloseButton onClick={this.closeModal}>
              <svg viewBox="0 0 40 40">
                <CloseX d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </CloseButton>
            <Title>💰당첨 통계💰</Title>
            <Table>
              <Thead>
                <Tr>
                  <Th>일치 갯수</Th>
                  <Th>당첨금</Th>
                  <Th>당첨 갯수</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>3개</Td>
                  <Td>5,000</Td>
                  <Td>n개</Td>
                </Tr>
                <Tr>
                  <Td>4개</Td>
                  <Td>50,000</Td>
                  <Td>n개</Td>
                </Tr>
                <Tr>
                  <Td>5개</Td>
                  <Td>1,500,000</Td>
                  <Td>n개</Td>
                </Tr>
                <Tr>
                  <Td>5개 + 보너스볼</Td>
                  <Td>30,000,000</Td>
                  <Td>n개</Td>
                </Tr>
                <Tr>
                  <Td>6개</Td>
                  <Td>2,000,000,000</Td>
                  <Td>n개</Td>
                </Tr>
              </Tbody>
            </Table>
            <EarningRate>당신의 총 수익률은 %입니다.</EarningRate>
            <RestartButton>다시 시작하기</RestartButton>
          </ModalInner>
        </Modal>
      </Root>
    );
  }
}

export default ResultModal;
