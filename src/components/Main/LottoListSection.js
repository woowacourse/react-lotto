import { Component } from 'react';
import LottoItem from './LottoItem';

export default class LottoListSection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <div>
          총 <span>5</span>개를 구매하였습니다.
        </div>
        <label>
          <input type="checkbox" />
          <span>toggle</span>
        </label>
        <ul>
          <LottoItem />
          <LottoItem />
          <LottoItem />
        </ul>
      </section>
    );
  }
}
