import React, { Component } from 'react';

export default class PurchaseAmountForm extends Component {
  render() {
    return (
      <form id="purchase-price-input-form" className="mt-5">
        <label for="purchase-price-input-form__input" className="mb-2 d-inline-block">
          구입할 금액을 입력해주세요.
        </label>
        <div className="d-flex">
          <input
            id="purchase-price-input-form__input"
            step="any"
            type="number"
            className="w-100 mr-2 pl-2"
            placeholder="구입 금액"
            required
          />
          <button id="purchase-price-input-form__button" type="submit" className="btn btn-cyan">
            확인
          </button>
        </div>
      </form>
    );
  }
}
