import React, { Component } from 'react';
import { LOTTO_PRICE } from '../constants/lottoData';
import './PriceInput.scss';

export default class PriceInput extends Component {
  onSubmitPrice(event) {
    event.preventDefault();

    const price = event.target.price.value;

    this.props.createLottoList(Math.floor(price / LOTTO_PRICE));
  }

  render() {
    return (
      <section className="PriceInput">
        <form className="price-form" onSubmit={this.onSubmitPrice.bind(this)}>
          <label className="price-label">
            <span className="price-text">구입할 금액을 입력해주세요.</span>
            <input className="price-input" name="price" placeholder="구입 금액" type="number" min="1000" step="1000" />
          </label>
          <div className="price-submit-btn-box">
            <button className="price-submit-btn">확인</button>
          </div>
        </form>
      </section>
    );
  }
}
