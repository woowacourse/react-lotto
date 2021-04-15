import React, { Component } from 'react';
import { LOTTERY, MAX_PAYMENT, MESSAGE, SELECTOR } from '../utils';

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.messageRef = React.createRef();
  }

  //TODO: 필드 범위 (private, public) 얘기해보기
  isValidPayment(value) {
    return value > 0 && value % LOTTERY.PRICE === 0;
  }

  handleInputCheck = ({ target }) => {
    const value = Number(target.value);
    const $message = this.messageRef.current;

    if (this.isValidPayment(value)) {
      $message.innerText = '';

      return;
    }

    $message.innerText = MESSAGE.PAYMENT_FORM.INVALID_PAYMENT;
  };

  handleSubmit = event => {
    event.preventDefault();

    const $input = event.target[SELECTOR.ID.PAYMENT_INPUT];
    const $button = event.target[SELECTOR.ID.PAYMENT_SUBMIT];
    const $message = this.messageRef.current;
    const money = Number($input.value);

    if (!this.isValidPayment(money)) {
      $message.innerText = MESSAGE.PAYMENT_FORM.INVALID_PAYMENT;

      return;
    }

    this.props.setLotteries(money);
    $input.disabled = true;
    $button.disabled = true;
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
            placeholder={`구입 금액 (${LOTTERY.PRICE}원 단위)`}
            onChange={this.handleInputCheck}
            max={MAX_PAYMENT}
          />
          <button id={SELECTOR.ID.PAYMENT_SUBMIT} type="submit">
            확인
          </button>
        </div>
        <p ref={this.messageRef}></p>
      </form>
    );
  }
}

export default PaymentForm;
