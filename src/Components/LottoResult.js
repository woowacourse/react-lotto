import React, { Component } from "react";
import styled from "@emotion/styled";

import { GUIDE_MESSAGE, PRIZE_TABLE, RANKINGS } from "../Constants";
import LottoContext from "../Contexts/LottoContext";

const ResultTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  & td,
  & th {
    border-bottom: 1px solid gainsboro;
    padding: 10px 0;
  }
`;

const Button = styled.button`
  width: 120px;
  padding: 10px 0;
  background-color: #00bcd4;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #018c9e;
  }
`;

const Tr = styled.tr`
  text-align: center;
`;

const Message = styled.p`
  font-weight: bold;
`;

export default class LottoResult extends Component {
  render() {
    const { rankCount, earningRate } = this.context.state.lottoResult;

    return (
      <>
        <h2>🏆 당첨 통계 🏆</h2>
        <ResultTable>
          <thead>
            <Tr>
              <th>일치 갯수</th>
              <th>당첨금</th>
              <th>당첨 갯수</th>
            </Tr>
          </thead>
          <tbody>
            {Object.values(RANKINGS).map((ranking) => (
              <Tr key={ranking}>
                <td>{PRIZE_TABLE[ranking].condition}</td>
                <td>{PRIZE_TABLE[ranking].prize}원</td>
                <td>{rankCount[ranking]}개</td>
              </Tr>
            ))}
          </tbody>
        </ResultTable>
        <Message>{GUIDE_MESSAGE.EARNING_RATE(earningRate)}</Message>
        <Button type="button" onClick={this.context.action.clear}>
          다시 시작하기
        </Button>
      </>
    );
  }
}

LottoResult.contextType = LottoContext;
