import React, { Component } from 'react';
import { isValidPurchaseAmount } from '../../../utils/validator';
import { MESSAGE } from '../../../constants/messages';

export default class PurchaseAmountForm extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const purchaseAmount = this.input.current.value;
    if (!isValidPurchaseAmount(purchaseAmount)) {
      alert(MESSAGE.INVALID_PURCHASE_AMOUNT);
      return;
    }

    this.props.publishLottoTickets(purchaseAmount);
  }

  render() {
    return (
      <form id="purchase-price-input-form" className="mt-5" onSubmit={this.handleSubmit}>
        <div className="mb-2 d-inline-block">구입할 금액을 입력해주세요.</div>
        <div className="flex">
          <input
            id="purchase-price-input-form__input"
            step="any"
            type="number"
            className="w-full mr-2 pl-2"
            placeholder="구입 금액"
            ref={this.input}
            disabled={this.props.isPurchaseAmountSubmitted}
            required
          />
          <button
            id="purchase-price-input-form__button"
            className="btn btn-cyan"
            disabled={this.props.isPurchaseAmountSubmitted}
          >
            확인
          </button>
        </div>
      </form>
    );
  }
}
