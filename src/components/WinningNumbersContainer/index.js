import React, { useState } from 'react';
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

const WinningNumbersContainer = ({ onSetWinningNumbers }) => {
  const [mainNumbersInputValue, setMainNumbersInputValue] = useState(Array.from({ length: 6 }, () => ''));
  const [bonusNumberInputValue, setBonusNumberInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmitWinningNumbers = (event) => {
    event.preventDefault();

    const mainNumbers = mainNumbersInputValue.map((value) => Number(value));
    const bonusNumber = Number(bonusNumberInputValue);

    try {
      validateNumbers(mainNumbers, bonusNumber);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
      return;
    }

    onSetWinningNumbers({ mainNumbers, bonusNumber });
  };

  const onchangeWinningNumbers = ({ target, currentTarget }) => {
    if (target.name === 'main-number') {
      setMainNumbers(target);
      moveNumberInputFocus(target, currentTarget);
    }

    if (target.name === 'bonus-number') {
      setBonusNumber(target);
    }
  };

  const setMainNumbers = ($mainNumberInput) => {
    const currentNumberIndex = Number($mainNumberInput.dataset.index);
    setMainNumbersInputValue([
      ...mainNumbersInputValue.slice(0, currentNumberIndex),
      $mainNumberInput.value,
      ...mainNumbersInputValue.slice(currentNumberIndex + 1),
    ]);
  };

  const setBonusNumber = ($bonusNumberInput) => {
    setBonusNumberInputValue($bonusNumberInput.value);
  };

  const validateNumbers = (mainNumbers, bonusNumber) => {
    const isDuplicated = Lotto.NUMBERS_LENGTH >= new Set([...mainNumbers, bonusNumber]).size;

    if (isDuplicated) throw Error('중복된 당첨번호가 존재합니다 🤢');
  };

  const moveNumberInputFocus = (target, currentTarget) => {
    const currentNumberValue = target.valueAsNumber;
    const currentNumberIndex = Number(target.dataset.index);

    if (currentNumberValue >= 10) {
      const numberInputs = [...currentTarget['main-number'], currentTarget['bonus-number']];

      numberInputs[currentNumberIndex + 1].focus();
    }
  };

  const numberInputs = Array.from({ length: Lotto.NUMBERS_LENGTH }, (_, idx) => (
    <NumberInput key={idx} data-index={idx} type="number" name="main-number" min="1" max="45" required />
  ));

  return (
    <Root>
      <NumberInputGuide>지난 주 당첨번호 6개와 보너스번호 1개를 입력해주세요.</NumberInputGuide>
      <Form onSubmit={onSubmitWinningNumbers} onChange={onchangeWinningNumbers}>
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
        {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
        <SubmitButton>결과 확인하기</SubmitButton>
      </Form>
    </Root>
  );
};

export default WinningNumbersContainer;
