import React, { Component } from 'react';
import { LOTTERY, MAX_PAYMENT, MESSAGE, SELECTOR } from '../utils';

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: null,
      message: null,
    };
  }

  handleInputChange = ({ target: { value } }) => {
    const money = Number(value);

    try {
      this.setState({ money });
      this.checkValidPayment(money);
      this.setState({ message: '' });
    } catch (error) {
      console.log(error.message);
      this.setState({ message: error.message });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    const { money } = this.state;

    try {
      this.checkValidPayment(money);
      this.props.setLotteries(money);
    } catch (error) {
      this.setState({ message: error.message });
    }
  };

  checkValidPayment(money) {
    try {
      if (!(money > 0 && money % LOTTERY.PRICE === 0)) {
        throw new Error(MESSAGE.PAYMENT_FORM.INVALID_PAYMENT);
      }
    } catch {
      throw new Error(MESSAGE.PAYMENT_FORM.INVALID_PAYMENT);
    }
  }

  render() {
    const { money, message } = this.state;

    return (
      <form className="mt-5" onSubmit={this.handleSubmit}>
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
            onChange={this.handleInputChange}
            max={MAX_PAYMENT}
            value={money ? money : ''}
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
}

export default PaymentForm;
