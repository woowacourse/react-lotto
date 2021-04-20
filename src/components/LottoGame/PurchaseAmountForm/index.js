import React, { Component } from 'react';
import { isValidPurchaseAmount } from '../../../utils/validator';
import { MESSAGE } from '../../../constants/messages';

export default class PurchaseAmountForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const purchaseAmount = event.target['purchaseAmount'].value;
    if (!isValidPurchaseAmount(purchaseAmount)) {
      alert(MESSAGE.INVALID_PURCHASE_AMOUNT);
      return;
    }

    this.props.publishLottoTickets(purchaseAmount);
  }

  render() {
    return (
      <form className="mt-5" onSubmit={this.handleSubmit}>
        <div className="mb-2 d-inline-block">구입할 금액을 입력해주세요.</div>
        <div className="flex">
          <input
            step="any"
            name="purchaseAmount"
            type="number"
            className="w-full mr-2 pl-2"
            placeholder="구입 금액"
            value={this.props.purchaseAmount}
            onChange={this.props.handleChange}
            disabled={this.props.isPurchaseAmountSubmitted}
            required
          />
          <button className="btn btn-cyan" disabled={this.props.isPurchaseAmountSubmitted}>
            확인
          </button>
        </div>
      </form>
    );
  }
}
