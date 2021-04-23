import React, { Component } from "react";
import { LOTTERY, MAX_PAYMENT, MESSAGE, SELECTOR } from "../utils";

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorInputMessage: "",
    };
  }

  handleInputCheck = ({ target }) => {
    if (target.value === "") {
      this.props.setMoney(null);
      return;
    }

    const money = Number(target.value);

    this.props.setMoney(money);

    if (this.isValidPayment(money)) {
      this.setState({
        errorInputMessage: "",
      });

      return;
    }

    this.setState({
      errorInputMessage: MESSAGE.PAYMENT_FORM.INVALID_PAYMENT,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const $input = event.target[SELECTOR.ID.PAYMENT_INPUT];
    const money = Number($input.value);

    if (!this.isValidPayment(money)) {
      this.setState({
        errorInputMessage: MESSAGE.PAYMENT_FORM.INVALID_PAYMENT,
      });

      return;
    }

    this.props.setLotteries(money);
  };

  isValidPayment(value) {
    return value > 0 && value % LOTTERY.PRICE === 0;
  }

  render() {
    const { money } = this.props;

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
            onChange={this.handleInputCheck}
            max={MAX_PAYMENT}
            value={money ? money : ""}
            disabled={this.props.lotteries.length !== 0}
          />
          <button
            id={SELECTOR.ID.PAYMENT_SUBMIT}
            className="btn btn-cyan"
            type="submit"
            disabled={this.props.lotteries.length !== 0}
          >
            확인
          </button>
        </div>
        <p>{this.state.errorInputMessage}</p>
      </form>
    );
  }
}

export default PaymentForm;
