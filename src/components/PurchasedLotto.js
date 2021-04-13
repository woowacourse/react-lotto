import React, { Component } from 'react';
import LottoTicket from './LottoTicket';

export default class PurchasedLotto extends Component {
  render() {
    return (
      <section>
        <span>총 5개를 구매하였습니다.</span>
        <label>
          <span>번호보기</span>
          <input type="checkbox" />
        </label>
        <ul>
          <li>
            <LottoTicket isShowNumber={true} lottoNumbers={[1, 2, 3, 4, 5, 6]} />
          </li>
        </ul>
      </section>
    );
  }
}
