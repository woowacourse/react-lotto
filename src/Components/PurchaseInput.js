import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";

import LottoContext from "../Contexts/LottoContext";
import ErrorMessageBox from "./common/ErrorMessageBox";
import { isDivisible } from "../utils";
import { LOTTO_PRICE, ERROR_MESSAGE, GUIDE_MESSAGE } from "../Constants";

const Form = styled.form`
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
`;

const Button = styled.button`
  width: 80px;
  margin-left: 5px;
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

const PurchaseInput = () => {
  const [isValidInput, setIsValidInput] = useState(true);
  const [price, setPrice] = useState(0);
  const { action } = useContext(LottoContext);

  useEffect(() => {
    if (isValidInput) {
      action.createLottos(price / LOTTO_PRICE);
      setPrice(0);
    } else {
      action.createLottos(0);
    }
  }, [isDivisible]);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      setIsValidInput(isDivisible(price, LOTTO_PRICE));
    },
    [price]
  );

  const onChangePrice = useCallback((event) => {
    setPrice(Number(event.target.value));
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="purchase-input">{GUIDE_MESSAGE.PURCHASE_INPUT}</label>
      <FlexContainer>
        <Input
          id="purchase-input"
          name="purchase-input"
          type="number"
          placeholder="구입 금액"
          value={price || ""}
          onChange={onChangePrice}
          min={LOTTO_PRICE}
          required
        />
        <Button type="submit">확인</Button>
      </FlexContainer>
      {!isValidInput && (
        <ErrorMessageBox text={ERROR_MESSAGE.INVALID_PRICE_UNIT} />
      )}
    </Form>
  );
};

export default PurchaseInput;
