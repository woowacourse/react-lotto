import { Component } from 'react';
import LottoItem from './LottoItem';

export default class LottoListSection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="mt-5">
        <div className="d-flex justify-space-between items-center">
          <div>
            총 <span>5</span>개를 구매하였습니다.
          </div>
          <label className="toggle-button">
            <input type="checkbox" />
            <span className="toggle-slider"></span>
          </label>
        </div>
        <ul className="lotto-list">
          <LottoItem />
          <LottoItem />
          <LottoItem />
        </ul>
      </section>
    );
  }
}
