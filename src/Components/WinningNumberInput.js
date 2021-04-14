import React, { Component } from "react";
import styled from "styled-components";

import ErrorMessageBox from "./common/ErrorMessageBox";

import { isDistinctNumbers } from "../utils";

const Header = styled.h2`
  font-size: 16px;
  font-weight: normal;
`;

const InputHeader = styled.h3`
  text-align: center;
`;

const InputBox = styled.input`
  width: 40px;
  height: 36px;
  &:not(:last-child) {
    margin-right: 7px;
  }
  text-align: center;
`;

// TODO: PurchaseInput의 Button이랑 중복되는 요소가 많음
const Button = styled.button`
  width: 100%;
  margin-top: 30px;
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

export default class WinningNumberInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidInput: true,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const { elements } = event.target;
    const winningNumbers = Array.from(
      elements["winning-number"],
      ($input) => $input.value
    );
    const bonusNumber = elements["bonus-number"].value;

    this.setState({
      ...this.state,
      isValidInput: isDistinctNumbers([...winningNumbers, bonusNumber]),
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Header>지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</Header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <InputHeader>당첨 번호</InputHeader>
            <div
              style={{
                display: "flex",
              }}
            >
              {Array.from({ length: 6 }, (_, index) => (
                <InputBox
                  key={index}
                  name="winning-number"
                  type="number"
                  min="1"
                  max="45"
                  required="required"
                ></InputBox>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <InputHeader>보너스 번호</InputHeader>
            <InputBox
              name="bonus-number"
              type="number"
              min="1"
              max="45"
              required="required"
            ></InputBox>
          </div>
        </div>
        {!this.state.isValidInput && (
          <ErrorMessageBox text="서로 다른 숫자를 입력해주세요." />
        )}
        <Button type="submit">확인</Button>
      </form>
    );
  }
}
