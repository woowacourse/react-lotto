import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { LOTTO_PRICE } from "../../@shared/constants/lotto";
import { ERROR_MESSAGE, GUIDE_MESSAGE } from "../../@shared/constants/messages";
import { isDivisible } from "../../@shared/utils/common";
import { Button, Container, Form, Input } from "./style";
import ErrorMessageBox from "../common/ErrorMessageBox";

const PurchaseInput = ({ updateLottos }) => {
  const formRef = useRef();
  const [payment, setPayment] = useState(0);
  const [isValidInput, setValidInputState] = useState(true);

  useEffect(() => {
    if (isDivisible(payment, LOTTO_PRICE)) {
      updateLottos(payment / LOTTO_PRICE);
      setValidInputState(true);
      formRef.current.reset();
    } else {
      setValidInputState(false);
      updateLottos(0);
    }
  }, [payment]);

  const onSubmit = (event) => {
    event.preventDefault();

    setPayment(Number(event.target.elements["purchase-input"].value));
  };

  return (
    <Form onSubmit={onSubmit} ref={formRef}>
      <label htmlFor="purchase-input">{GUIDE_MESSAGE.PURCHASE_INPUT}</label>
      <Container>
        <Input
          id="purchase-input"
          name="purchase-input"
          type="number"
          placeholder="구입 금액"
          min={LOTTO_PRICE}
          required
        />
        <Button type="submit">확인</Button>
      </Container>
      {!isValidInput && (
        <ErrorMessageBox text={ERROR_MESSAGE.INVALID_PRICE_UNIT} />
      )}
    </Form>
  );
};

PurchaseInput.propTypes = {
  updateLottos: PropTypes.func.isRequired,
};

export default PurchaseInput;
