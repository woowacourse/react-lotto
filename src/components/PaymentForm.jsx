import React, { useState } from 'react';
import { LOTTERY, MAX_PAYMENT, SELECTOR } from '../utils';

function PaymentForm(props) {
  const [message, setMessage] = useState(null);

  function handleInputChange(event) {
    const payment = Number(event.target.value);

    try {
      props.onInputChange(payment);
      setMessage('');
    } catch (error) {
      setMessage(error.message);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    try {
      props.onSubmit();
    } catch (error) {
      setMessage(error.message);
    }
  }

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
          type="number"
          placeholder={`구입 금액 (${LOTTERY.PRICE}원 단위)`}
          onChange={handleInputChange}
          max={MAX_PAYMENT}
          value={props.money ? props.money : ''}
        />
        <button
          id={SELECTOR.ID.PAYMENT_SUBMIT}
          className="btn btn-cyan"
          type="submit"
        >
          확인
        </button>
      </div>
      <p>{message}</p>
    </form>
  );
}

export default PaymentForm;
