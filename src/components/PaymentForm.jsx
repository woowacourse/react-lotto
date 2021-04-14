import React, { Component } from "react";
import { LOTTERY_PRICE, MAX_PAYMENT, MESSAGE } from "../utils";
import { SELECTOR } from "../utils/constants";

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.messageRef = React.createRef();
  }

  //TODO: 필드 범위 (private, public) 얘기해보기
  isValidPayment(value) {
    return value > 0 && value % LOTTERY_PRICE === 0;
  }

  handleInputCheck = ({ target }) => {
    const value = Number(target.value);
    const $message = this.messageRef.current;

    if (this.isValidPayment(value)) {
      $message.innerText = "";

      return;
    }

    $message.innerText = MESSAGE.PAYMENT_FORM.INVALID_PAYMENT;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    const value = Number(event.target[SELECTOR.ID.PAYMENT_INPUT].value);
    const $message = this.messageRef.current;

    if (!this.isValidPayment(value)) {
      $message.innerText = MESSAGE.PAYMENT_FORM.INVALID_PAYMENT;

      return;
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={SELECTOR.ID.PAYMENT_INPUT}>
          구입할 금액을 입력해주세요.
        </label>
        <div>
          <input
            id={SELECTOR.ID.PAYMENT_INPUT}
            type="number"
            placeholder={`구입 금액 (${LOTTERY_PRICE}원 단위)`}
            onChange={this.handleInputCheck}
            max={MAX_PAYMENT}
          />
          <button type="submit">확인</button>
        </div>
        <p ref={this.messageRef}></p>
      </form>
    );
  }
}

export default PaymentForm;
