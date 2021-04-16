import React, { Component, createRef } from "react";
import { GUIDE_MESSAGE } from "../../@shared/constants/messages";
import { PRIZE_TABLE, RANKINGS } from "../../@shared/constants/prizeTable";

import Modal from "../common/Modal";
import BoldText from "../common/BoldText";
import { Button, ResultTable, TableRow } from "./style";

export default class ResultModal extends Component {
  constructor(props) {
    super(props);

    this.modalCloseSvgRef = createRef();
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  onMouseDown(event) {
    if (
      event.currentTarget === event.target ||
      event.target === this.modalCloseSvgRef.current
    ) {
      this.context.action.closeModal();
    }
  }

  render() {
    const { rankCount, earningRate } = this.context.state.lottoResult;

    return (
      <Modal onMouseDown={this.onMouseDown} ref={this.modalCloseSvgRef}>
        <h2>🏆 당첨 통계 🏆</h2>
        <ResultTable>
          <thead>
            <TableRow>
              <th>일치 갯수</th>
              <th>당첨금</th>
              <th>당첨 갯수</th>
            </TableRow>
          </thead>
          <tbody>
            {Object.values(RANKINGS).map((ranking) => (
              <TableRow key={ranking}>
                <td>{PRIZE_TABLE[ranking].condition}</td>
                <td>{PRIZE_TABLE[ranking].prize}원</td>
                <td>{rankCount[ranking]}개</td>
              </TableRow>
            ))}
          </tbody>
        </ResultTable>
        <BoldText text={GUIDE_MESSAGE.EARNING_RATE(earningRate)}></BoldText>
        <Button type="button" onClick={this.context.action.clear}>
          다시 시작하기
        </Button>
      </Modal>
    );
  }
}
