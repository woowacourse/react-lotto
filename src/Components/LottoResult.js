import React, { Component } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

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

export default class LottoResult extends Component {
  render() {
    const { rankCount, earningRate } = this.context.state.lottoResult;

    return (
      <>
        <h2>🏆 당첨 통계 🏆</h2>
        <ResultTable>
          <thead>
            <tr
              css={css`
                text-align: center;
              `}
            >
              <th>일치 갯수</th>
              <th>당첨금</th>
              <th>당첨 갯수</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(RANKINGS).map((ranking) => (
              <tr
                css={css`
                  text-align: center;
                `}
                key={ranking}
              >
                <td>{PRIZE_TABLE[ranking].condition}</td>
                <td>{PRIZE_TABLE[ranking].prize}원</td>
                <td>{rankCount[ranking]}개</td>
              </tr>
            ))}
          </tbody>
        </ResultTable>
        <p
          css={css`
            font-weight: bold;
          `}
        >
          {GUIDE_MESSAGE.EARNING_RATE(earningRate)}
        </p>
        <Button type="button" onClick={this.context.action.clear}>
          다시 시작하기
        </Button>
      </>
    );
  }
}

LottoResult.contextType = LottoContext;
