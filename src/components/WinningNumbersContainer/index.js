import React, { Component } from 'react';
import { Lotto } from '../../models';
import {
  Root,
  NumberInputGuide,
  Form,
  FlexContainer,
  NumbersContainer,
  NumberInputType,
  NumberInput,
  SubmitButton,
  InputErrorMessage,
} from './style';

class WinningNumbersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainNumbersInputValue: Array.from({ length: 6 }, () => ''),
      bonusNumberInputValue: '',
      errorMessage: '',
    };

    this.handleSubmitWinningNumbers = this.handleSubmitWinningNumbers.bind(this);
    this.handleChangeWinningNumbers = this.handleChangeWinningNumbers.bind(this);
  }

  handleSubmitWinningNumbers(event) {
    event.preventDefault();

    const mainNumbers = this.state.mainNumbersInputValue.map((value) => Number(value));
    const bonusNumber = Number(this.state.bonusNumberInputValue);

    try {
      this.validateNumbers(mainNumbers, bonusNumber);
      this.setState({ errorMessage: '' });
    } catch (error) {
      this.setState({ errorMessage: error.message });
      return;
    }

    this.props.onSetwinnningNmbers({ mainNumbers, bonusNumber });
  }

  handleChangeWinningNumbers({ target, currentTarget }) {
    if (target.name === 'main-number') {
      this.setMainNumbers(target);
      this.moveNumberInputFocus(target, currentTarget);
    }

    if (target.name === 'bonus-number') {
      this.setBonusNumber(target);
    }
  }

  setMainNumbers($mainNumberInput) {
    const currentNumberIndex = Number($mainNumberInput.dataset.index);
    this.setState({
      mainNumbersInputValue: [
        ...this.state.mainNumbersInputValue.slice(0, currentNumberIndex),
        $mainNumberInput.value,
        ...this.state.mainNumbersInputValue.slice(currentNumberIndex + 1),
      ],
    });
  }

  setBonusNumber($bonusNumberInput) {
    this.setState({ bonusNumberInputValue: $bonusNumberInput.value });
  }

  validateNumbers(mainNumbers, bonusNumber) {
    const isDuplicated = Lotto.NUMBERS_LENGTH >= new Set([...mainNumbers, bonusNumber]).size;

    if (isDuplicated) throw Error('중복된 당첨번호가 존재합니다 🤢');
  }

  moveNumberInputFocus(target, currentTarget) {
    const currentNumberValue = target.valueAsNumber;
    const currentNumberIndex = Number(target.dataset.index);

    if (currentNumberValue >= 10) {
      const numberInputs = [...currentTarget['main-number'], currentTarget['bonus-number']];

      numberInputs[currentNumberIndex + 1].focus();
    }
  }

  render() {
    const numberInputs = Array.from({ length: Lotto.NUMBERS_LENGTH }, (_, idx) => (
      <NumberInput key={idx} data-index={idx} type="number" name="main-number" min="1" max="45" required />
    ));

    return (
      <Root>
        <NumberInputGuide>지난 주 당첨번호 6개와 보너스번호 1개를 입력해주세요.</NumberInputGuide>
        <Form onSubmit={this.handleSubmitWinningNumbers} onChange={this.handleChangeWinningNumbers}>
          <FlexContainer>
            <NumbersContainer>
              <NumberInputType>당첨번호</NumberInputType>
              <FlexContainer>{numberInputs}</FlexContainer>
            </NumbersContainer>
            <NumbersContainer>
              <NumberInputType>보너스번호</NumberInputType>
              <NumberInput
                type="number"
                data-index={Lotto.NUMBERS_LENGTH}
                name="bonus-number"
                min="1"
                max="45"
                required
              />
            </NumbersContainer>
          </FlexContainer>
          {this.state.errorMessage && <InputErrorMessage>{this.state.errorMessage}</InputErrorMessage>}
          <SubmitButton>결과 확인하기</SubmitButton>
        </Form>
      </Root>
    );
  }
}

export default WinningNumbersContainer;
