import React, { Component } from 'react';
import LottoTicket from './LottoTicket';
import './PurchasedLotto.scss';

export default class PurchasedLotto extends Component {
  render() {
    return (
      <section className="PurchasedLotto">
        <span>총 5개를 구매하였습니다.</span>
        <label className="switch">
          <input type="checkbox" className="switch-input" />
          <span>번호보기</span>
        </label>
        <ul>
          <li>
            <LottoTicket isShowNumber={true} lottoNumbers={[1, 2, 3, 4, 5, 6]} />
          </li>
          <li>
            <LottoTicket isShowNumber={true} lottoNumbers={[1, 2, 3, 4, 5, 6]} />
          </li>
          <li>
            <LottoTicket isShowNumber={true} lottoNumbers={[1, 2, 3, 4, 5, 6]} />
          </li>
          <li>
            <LottoTicket isShowNumber={true} lottoNumbers={[1, 2, 3, 4, 5, 6]} />
          </li>
        </ul>
      </section>
    );
  }
}
