import React, { Component } from "react";
import { ERROR_MESSAGE, GUIDE_MESSAGE } from "../../@shared/constants/messages";
import { isDistinctNumbers } from "../../@shared/utils/common";
import ErrorMessageBox from "../common/ErrorMessageBox";
import {
  Button,
  Container,
  Header,
  InputBox,
  InputBoxes,
  InputHeader,
  NumberContainer,
} from "./style";

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
