import React, { Component } from 'react';

class LottoTicketItem extends Component {
  render() {
    return null;
  }
}

export default class LottoTicketList extends Component {
  render() {
    return (
      <section id="purchase-result-section" className="mt-9 d-none">
        <div className="d-flex">
          <label id="purchase-result-section__label" className="flex-auto my-0">
            총 0개를 구매하였습니다.
          </label>
          <div className="flex-auto d-flex justify-end pr-1">
            <label className="switch">
              <input id="purchase-result-section__toggle" type="checkbox" className="lotto-numbers-toggle-button" />
              <span className="text-base font-normal">번호보기</span>
            </label>
          </div>
        </div>
        <div className="mt-4 scroll">
          <div id="purchase-result-section__row-align" className="d-flex flex-wrap flex-row">
            <LottoTicketItem />
          </div>
          <div id="purchase-result-section__col-align" className="d-flex flex-wrap flex-col d-none"></div>
        </div>
      </section>
    );
  }
}
