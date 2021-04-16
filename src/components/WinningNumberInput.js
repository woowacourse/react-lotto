import React, { Component } from "react";
import styled from "@emotion/styled";

import ErrorMessageBox from "./common/ErrorMessageBox";
import LottoContext from "../contexts/LottoContext";
import { isDistinctNumbers } from "../utils";
import { ERROR_MESSAGE, GUIDE_MESSAGE } from "../constants";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled.h2`
  font-size: 16px;
  font-weight: normal;
`;

const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputHeader = styled.h3`
  text-align: center;
`;

const InputBoxes = styled.div`
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
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const { elements } = event.target;
    const winningNumbers = Array.from(elements["winning-number"], ($input) =>
      Number($input.value)
    );
    const bonusNumber = Number(elements["bonus-number"].value);

    this.setState(
      {
        ...this.state,
        isValidInput: isDistinctNumbers([...winningNumbers, bonusNumber]),
      },
      () => {
        if (!this.state.isValidInput) return;

        this.context.action.updateLottoResult(winningNumbers, bonusNumber);
        this.context.action.openModal();
      }
    );
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Header>{GUIDE_MESSAGE.WINNING_NUMBER}</Header>
        <Container>
          <NumberContainer>
            <InputHeader>당첨 번호</InputHeader>
            <InputBoxes>
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
            </InputBoxes>
          </NumberContainer>

          <NumberContainer>
            <InputHeader>보너스 번호</InputHeader>
            <InputBox
              name="bonus-number"
              type="number"
              min="1"
              max="45"
              required="required"
            ></InputBox>
          </NumberContainer>
        </Container>
        {!this.state.isValidInput && (
          <ErrorMessageBox text={ERROR_MESSAGE.DUPLICATED_NUMBER} />
        )}
        <Button type="submit">확인</Button>
      </form>
    );
  }
}

WinningNumberInput.contextType = LottoContext;
