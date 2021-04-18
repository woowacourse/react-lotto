import React, { Component } from 'react';
import Lotto from '../../Lotto';
import { Root, FlexContainer, NumbersContainer, NumberInput, SubmitButton, InputErrorMessage } from './style';
import { validateNumbers } from '../../utils/validator';

class WinningNumbersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { isNumbersDuplicated: false, errorMessage: '' };

    this.handleSubmitWinningNumbers = this.handleSubmitWinningNumbers.bind(this);
  }

  moveNumberInputFocus(event) {
    if (event.target.name !== 'main-number') return;

    const currentNumberValue = event.target.valueAsNumber;
    const currentNumberIndex = Number(event.target.dataset.index);

    if (currentNumberValue >= 10) {
      const numberInputs = [...event.currentTarget['main-number'], event.currentTarget['bonus-number']];

      numberInputs[currentNumberIndex + 1].focus();
    }
  }

  handleSubmitWinningNumbers(event) {
    event.preventDefault();

    const mainNumbers = [...event.target['main-number']].map(($input) => $input.valueAsNumber);
    const bonusNumber = event.target['bonus-number'].valueAsNumber;

    try {
      validateNumbers(mainNumbers, bonusNumber);
      this.setState({ isNumbersDuplicated: false, errorMessage: '' });
    } catch (error) {
      this.setState({ isNumbersDuplicated: true, errorMessage: error.message });
      return;
    }

    this.props.onShowResult({ mainNumbers, bonusNumber });
  }

  render() {
    const numberInputs = Array.from({ length: Lotto.NUMBERS_LENGTH }, (_, idx) => (
      <NumberInput key={idx} data-index={idx} type="number" name="main-number" min="1" max="45" required />
    ));

    const errorMessage = this.state.isNumbersDuplicated ? (
      <InputErrorMessage>{this.state.errorMessage}</InputErrorMessage>
    ) : null;

    return (
      <Root>
        <span>지난 주 당첨번호 6개와 보너스번호 1개를 입력해주세요.</span>
        <form onSubmit={this.handleSubmitWinningNumbers} onChange={this.moveNumberInputFocus}>
          <FlexContainer>
            <NumbersContainer>
              <h4>당첨번호</h4>
              <FlexContainer>{numberInputs}</FlexContainer>
            </NumbersContainer>
            <NumbersContainer>
              <h4>보너스번호</h4>
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
          {errorMessage}
          <SubmitButton>결과 확인하기</SubmitButton>
        </form>
      </Root>
    );
  }
}

export default WinningNumbersContainer;
