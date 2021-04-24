import React, { Component } from "react";
import styled from "@emotion/styled";

import ErrorMessageBox from "./common/ErrorMessageBox";
import LottoContext from "../Contexts/LottoContext";
import { isDistinctNumbers } from "../utils";
import { ERROR_MESSAGE, GUIDE_MESSAGE } from "../Constants";

const Header = styled.h2`
  font-size: 16px;
  font-weight: normal;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputHeader = styled.h3`
  text-align: center;
`;

const InputBoxContainer = styled.div`
  display: flex;
`;

const InputBox = styled.input`
  width: 40px;
  height: 36px;
  &:not(:last-child) {
    margin-right: 7px;
  }
  text-align: center;
`;

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
      winningNumbers: [0, 0, 0, 0, 0, 0],
      bonusNumber: 0,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeWinningNumber = this.onChangeWinningNumber.bind(this);
    this.onChangeBonusNumber = this.onChangeBonusNumber.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const { winningNumbers, bonusNumber } = this.state;

    this.setState(
      {
        isValidInput: isDistinctNumbers([...winningNumbers, bonusNumber]),
      },
      () => {
        if (!this.state.isValidInput) return;

        this.context.action.updateLottoResult(winningNumbers, bonusNumber);
        this.context.action.openModal();
      }
    );
  }

  onChangeWinningNumber(event) {
    this.setState((prev) => {
      const newWinningNumbers = [...prev.winningNumbers];

      newWinningNumbers[event.target.dataset.winningNumbersIndex] = Number(
        event.target.value
      );

      return { winningNumbers: newWinningNumbers };
    });
  }

  onChangeBonusNumber(event) {
    this.setState({ bonusNumber: Number(event.target.value) });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Header>{GUIDE_MESSAGE.WINNING_NUMBER}</Header>
        <FlexContainer>
          <InputSection>
            <InputHeader>당첨 번호</InputHeader>
            <InputBoxContainer>
              {Array.from({ length: 6 }, (_, index) => (
                <InputBox
                  key={index}
                  data-winning-numbers-index={index}
                  name="winning-number"
                  type="number"
                  min="1"
                  max="45"
                  value={this.state.winningNumbers[index] || ""}
                  onChange={this.onChangeWinningNumber}
                  required="required"
                ></InputBox>
              ))}
            </InputBoxContainer>
          </InputSection>

          <InputSection>
            <InputHeader>보너스 번호</InputHeader>
            <InputBox
              name="bonus-number"
              type="number"
              min="1"
              max="45"
              value={this.state.bonusNumber || ""}
              onChange={this.onChangeBonusNumber}
              required="required"
            ></InputBox>
          </InputSection>
        </FlexContainer>
        {!this.state.isValidInput && (
          <ErrorMessageBox text={ERROR_MESSAGE.DUPLICATED_NUMBER} />
        )}
        <Button type="submit">확인</Button>
      </form>
    );
  }
}

WinningNumberInput.contextType = LottoContext;
