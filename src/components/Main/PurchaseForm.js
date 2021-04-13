import { Component } from 'react';

export default class PurchaseForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="mt-5">
        <form className="w-100">
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
            <button type="submit" className="submit-button">
              확인
            </button>
          </div>
        </form>
      </section>
    );
  }
}
