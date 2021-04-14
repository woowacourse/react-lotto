import { Component } from 'react';
import { ID, LOTTO_PRICE, MESSAGE } from '../../constants';

export default class PurchaseForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmitPurchaseForm = this.onSubmitPurchaseForm.bind(this);
  }

  setLottoCount(count) {
    this.props.setLottoCount(count);
  }

  onSubmitPurchaseForm(event) {
    event.preventDefault();

    const moneyInput = event.target.elements[ID.MAIN.PURCHASE_FORM.INPUT].valueAsNumber;

    if (!this.isValidPrice(moneyInput)) {
      alert(MESSAGE.ALERT.INVALID_MONEY_UNIT);
      return;
    }

    this.setLottoCount(moneyInput / LOTTO_PRICE);
  }

  isValidPrice(price) {
    return price % LOTTO_PRICE === 0;
  }

  render() {
    return (
      <section className="mt-5">
        <form className="w-100" onSubmit={this.onSubmitPurchaseForm}>
          <label htmlFor="money-input" className="w-100">
            구입할 금액을 입력해주세요. (단위: 원)
          </label>
          <div className="d-flex justify-space-between items-center mt-1">
            <input
              id="money-input"
              className="money-input flex-auto mr-3"
              type="number"
              placeholder="구입 금액"
              min="1000"
              required
            />
            <button type="submit" className="basic-button">
              확인
            </button>
          </div>
        </form>
      </section>
    );
  }
}
