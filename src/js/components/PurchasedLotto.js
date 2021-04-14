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
          {this.props.lottoList.map((lotto, index) => (
            <li key={index}>
              <LottoTicket lottoNumbers={lotto} isShowNumber={true} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
