import React, { useState } from 'react';
import Lotto from '../../Lotto';
import { Root, FlexContainer, NumbersContainer, NumberInput, SubmitButton, InputErrorMessage } from './style';
import { validateNumbers } from '../../utils/validator';

export default function WinningNumbersContainer({ winningNumbers, onShowResult }) {
  const [isNumbersDuplicated, setIsNumbersDuplicated] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const moveNumberInputFocus = (event) => {
    if (event.target.name !== 'main-number') return;

    const currentNumberValue = event.target.valueAsNumber;
    const currentNumberIndex = Number(event.target.dataset.index);

    if (currentNumberValue >= 10) {
      const numberInputs = [...event.currentTarget['main-number'], event.currentTarget['bonus-number']];

      numberInputs[currentNumberIndex + 1].focus();
    }
  };

  const handleSubmitWinningNumbers = (event) => {
    event.preventDefault();

    const mainNumbers = [...event.target['main-number']].map(($input) => $input.valueAsNumber);
    const bonusNumber = event.target['bonus-number'].valueAsNumber;

    try {
      validateNumbers(mainNumbers, bonusNumber);
      setIsNumbersDuplicated(false);
      setErrorMessage(null);
    } catch (error) {
      setIsNumbersDuplicated(true);
      setErrorMessage(error.message);

      return;
    }

    onShowResult({ mainNumbers, bonusNumber });
  };

  const numberInputs = Array.from({ length: Lotto.NUMBERS_LENGTH }, (_, idx) => (
    <NumberInput key={idx} data-index={idx} type="number" name="main-number" min="1" max="45" required />
  ));

  const errorNotification = isNumbersDuplicated ? <InputErrorMessage>{errorMessage}</InputErrorMessage> : null;

  return (
    <Root>
      <span>지난 주 당첨번호 6개와 보너스번호 1개를 입력해주세요.</span>
      <form onSubmit={handleSubmitWinningNumbers} onChange={moveNumberInputFocus}>
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
        {errorNotification}
        <SubmitButton>결과 확인하기</SubmitButton>
      </form>
    </Root>
  );
}
