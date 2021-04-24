import React, { useState } from 'react';
import { Root, Form, Label, InputWrapper, Input, SubmitButton, InputErrorMessage } from './style';

const PriceInput = ({ onSetPrice, isDisabled }) => {
  const [priceInputValue, setPriceInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmitPrice = (event) => {
    event.preventDefault();

    try {
      validatePriceUnit(Number(priceInputValue));
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
      return;
    }

    onSetPrice(Number(priceInputValue));
    setPriceInputValue('');
  };

  const onChangePriceInputValue = (event) => {
    setPriceInputValue(event.target.value);
  };

  const validatePriceUnit = (price) => {
    if (price % 1000 !== 0) throw Error('1,000원 단위로 입력해주세요 🐱‍');
  };

  return (
    <Root>
      <Form onSubmit={onSubmitPrice}>
        <Label htmlFor="price">구입할 금액을 입력해주세요.</Label>
        <InputWrapper>
          <Input
            type="number"
            id="price"
            value={priceInputValue}
            onChange={onChangePriceInputValue}
            min="1000"
            placeholder="구입 금액"
            disabled={isDisabled}
            required
          />
          <SubmitButton disabled={isDisabled}>확인</SubmitButton>
          {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
        </InputWrapper>
      </Form>
    </Root>
  );
};

export default PriceInput;
