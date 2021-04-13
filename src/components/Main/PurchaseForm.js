import { Component } from 'react';

export default class PurchaseForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <form>
          <label htmlFor="money-input">구입할 금액을 입력해주세요. (단위: 원)</label>
          <input id="money-input" type="number" placeholder="구입 금액" min="1000" required />
          <button type="submit">확인</button>
        </form>
      </section>
    );
  }
}
