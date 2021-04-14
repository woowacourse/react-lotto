import React, { Component } from 'react';
import Modal from '../../common/Modal';
import Button from '../../common/Button';
import { Wrapper } from '../../common/Wrapper';
import { ResultModalWrapper, ResultTable } from './ResultModal.styles';
import ResultTableRow from './ResultTableRow/ResultTableRow';

type ResultModalProps = {
  open?: boolean;
};

export default class ResultModal extends Component<ResultModalProps> {
  render() {
    return (
      <Modal open={this.props.open}>
        <ResultModalWrapper>
          <h2 className="result-header">🏆 당첨 통계 🏆</h2>
          <Wrapper display="flex">
            <ResultTable>
              <thead>
                <tr className="text-center">
                  <th className="p-3">일치 갯수</th>
                  <th className="p-3">당첨금</th>
                  <th className="p-3">당첨 갯수</th>
                </tr>
              </thead>
              <tbody>
                <ResultTableRow match={3} prize={5000} matchCount={0} />
                <ResultTableRow match={4} prize={50000} matchCount={0} />
                <ResultTableRow match={5} prize={1500000} matchCount={0} />
                <ResultTableRow match={5} isBonus prize={30000000} matchCount={0} />
                <ResultTableRow match={6} prize={200000000} matchCount={0} />
              </tbody>
            </ResultTable>
          </Wrapper>
          <p className="profit">수익률 999%</p>
          <Wrapper display="flex">
            <Button type="reset" fullWidth>
              다시 시작하기
            </Button>
          </Wrapper>
        </ResultModalWrapper>
      </Modal>
    );
  }
}
