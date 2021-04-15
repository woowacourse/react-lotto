import React, { Component } from 'react';
import Lotto from '../../lotto';
import {
  Root,
  NumberInputGuide,
  Form,
  FlexContainer,
  NumbersContainer,
  NumberInputType,
  NumberInput,
  SubmitButton,
} from './style';

class WinningNumbersContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSubmitWinningNumbers = this.handleSubmitWinningNumbers.bind(this);
  }

  handleSubmitWinningNumbers(event) {
    event.preventDefault();

    const main = [...event.target['main-number']].map(($input) => $input.valueAsNumber);
    const bonus = event.target['bonus-number'].valueAsNumber;

    this.props.onSubmitWinningNumbers({ main, bonus });
  }

  render() {
    const numberInputs = Array.from({ length: Lotto.NUMBERS_LENGTH }, (_, idx) => (
      <NumberInput key={idx} type="number" name="main-number" min="1" max="45" required />
    ));
    return (
      <Root>
        <NumberInputGuide>지난 주 당첨번호 6개와 보너스번호 1개를 입력해주세요.</NumberInputGuide>
        <Form onSubmit={this.handleSubmitWinningNumbers}>
          <FlexContainer>
            <NumbersContainer>
              <NumberInputType>당첨번호</NumberInputType>
              <FlexContainer>{numberInputs}</FlexContainer>
            </NumbersContainer>
            <NumbersContainer>
              <NumberInputType>보너스번호</NumberInputType>
              <NumberInput type="number" name="bonus-number" min="1" max="45" required />
            </NumbersContainer>
          </FlexContainer>
          <SubmitButton>결과 확인하기</SubmitButton>
        </Form>
      </Root>
    );
  }
}

export default WinningNumbersContainer;
