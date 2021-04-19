import React, { useState, useEffect, useRef } from 'react';
import { Root, Label, InputWrapper, Input, SubmitButton, InputErrorMessage } from './style';
import { validatePriceUnit } from '../../utils/validator';

export default function PriceInput({ isDisabled, onPurchaseLottos }) {
  const inputRef = useRef();
  const [isValidPriceUnit, setIsValidPriceUnit] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmitPrice = (event) => {
    event.preventDefault();

    const $priceInput = event.target.price;

    try {
      validatePriceUnit($priceInput.valueAsNumber);
      setIsValidPriceUnit(true);
      setErrorMessage(null);
    } catch (error) {
      setIsValidPriceUnit(false);
      setErrorMessage(error.message);

      return;
    }

    onPurchaseLottos($priceInput.valueAsNumber);
    $priceInput.value = '';
  };

  const errorNotification = isValidPriceUnit ? null : <InputErrorMessage>{errorMessage}</InputErrorMessage>;

  return (
    <Root>
      <form onSubmit={handleSubmitPrice}>
        <Label htmlFor="price">구입할 금액을 입력해주세요.</Label>
        <InputWrapper>
          <Input
            type="number"
            id="price"
            min="1000"
            placeholder="구입 금액"
            disabled={isDisabled}
            ref={inputRef}
            required
          />
          <SubmitButton disabled={isDisabled}>확인</SubmitButton>
          {errorNotification}
        </InputWrapper>
      </form>
    </Root>
  );
}
