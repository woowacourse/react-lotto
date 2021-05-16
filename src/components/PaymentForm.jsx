import React, { useEffect, useState } from "react";
import { isNumber, MAX_PAYMENT, MESSAGE, SELECTOR } from "../utils";

const PaymentForm = (props) => {
  const [money, setMoney] = useState("");
  const [errorInputMessage, setErrorInputMessage] = useState("");
  const { isDisabled, isValidPayment, onMoneySubmit, paymentMinUnit } = props;

  useEffect(() => {
    if (!isDisabled) {
      setMoney("");
    }
  }, [isDisabled]);

  const handleInputCheck = ({ target }) => {
    if (!isNumber(target.value)) {
      return;
    }

    const money = target.value;

    //TODO: 동작보고 삭제하기
    /* if (money === "") {
      setMoney("");
      return;
    } */

    setMoney(money);

    const newErrorMessage = isValidPayment(money)
      ? ""
      : MESSAGE.PAYMENT_FORM.INVALID_PAYMENT;

    setErrorInputMessage(newErrorMessage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidPayment(money)) {
      setErrorInputMessage(MESSAGE.PAYMENT_FORM.INVALID_PAYMENT);

      return;
    }

    onMoneySubmit(money);
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <label
        className="mb-2 d-inline-block"
        htmlFor={SELECTOR.ID.PAYMENT_INPUT}
      >
        구입할 금액을 입력해주세요.
      </label>
      <div className="d-flex">
        <input
          id={SELECTOR.ID.PAYMENT_INPUT}
          className="w-100 mr-2 pl-2"
          type="text"
          placeholder={`구입 금액 (${paymentMinUnit}원 단위)`}
          onChange={handleInputCheck}
          max={MAX_PAYMENT}
          value={money}
          disabled={isDisabled}
        />
        <button
          id={SELECTOR.ID.PAYMENT_SUBMIT}
          className="btn btn-cyan"
          type="submit"
          disabled={isDisabled}
        >
          확인
        </button>
      </div>
      <p>{errorInputMessage}</p>
    </form>
  );
};

export default PaymentForm;
