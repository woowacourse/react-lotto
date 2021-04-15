import React, { Component, createRef } from "react";
import styled from "@emotion/styled";

import LottoContext from "../Contexts/LottoContext";

const ModalContainer = styled.div`
  opacity: 1;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.25s ease;
  z-index: 2;
`;

const ModalInner = styled.div`
  transition: top 0.25s ease;
  width: 70vw;
  height: 70vh;
  max-width: 400px;
  max-height: 600px;
  margin: auto;
  padding: 30px 50px;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalClose = styled.div`
  margin: 20px;
  width: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

const Svg = styled.svg`
  display: inline-block;
  margin: 0;
  padding: 0;
  & path {
    stroke: gray;
    fill: transparent;
    stroke-linecap: round;
    stroke-width: 5;
  }
`;

const ResultTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  & td,
  & th {
    border-bottom: 1px solid gainsboro;
    padding: 10px 0;
  }
`;

// TODO: 중복되는 styled component
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

export default class Modal extends Component {
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
    return (
      <ModalContainer onMouseDown={this.onMouseDown}>
        <ModalInner>
          <ModalClose>
            <Svg viewBox="0 0 40 40" ref={this.modalCloseSvgRef}>
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </Svg>
          </ModalClose>

          <h2>🏆 당첨 통계 🏆</h2>

          <ResultTable>
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>일치 갯수</th>
                <th>당첨금</th>
                <th>당첨 갯수</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ textAlign: "center" }}>
                <td>3개</td>
                <td>5000원</td>
                <td>0개</td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <td>3개</td>
                <td>5000원</td>
                <td>0개</td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <td>3개</td>
                <td>5000원</td>
                <td>0개</td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <td>3개</td>
                <td>5000원</td>
                <td>0개</td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <td>3개</td>
                <td>5000원</td>
                <td>0개</td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <td>3개</td>
                <td>5000원</td>
                <td>0개</td>
              </tr>
            </tbody>
          </ResultTable>
          <p style={{ fontWeight: "bold" }}>earning rate</p>
          <Button type="button">다시 시작하기</Button>
        </ModalInner>
      </ModalContainer>
    );
  }
}

Modal.contextType = LottoContext;
