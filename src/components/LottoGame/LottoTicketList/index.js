import React, { Component } from 'react';

class LottoTicketItem extends Component {
  render() {
    console.log(this.props.isToggleOn);
    return (
      <div className="lotto-wrapper d-flex items-start">
        <span className="lotto mx-1 text-4xl">🎟️ </span>
        {this.props.isToggleOn && <span className="mx-1 text-2xl d-none">{this.props.numbers.join(', ')}</span>}
      </div>
    );
  }
}

export default class LottoTicketList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    console.log('clicked');
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <section id="purchase-result-section" className="mt-9 d-none">
        <div className="flex">
          <label id="purchase-result-section__label" className="flex-auto my-0">
            총 {this.props.lottoTickets.length}개를 구매하였습니다.
          </label>
          <div className="flex-auto flex justify-end pr-1">
            <label className="switch">
              <input id="purchase-result-section__toggle" type="checkbox" className="lotto-numbers-toggle-button" />
              <span className="text-base font-normal" onClick={this.handleToggle}>
                번호보기
              </span>
            </label>
          </div>
        </div>
        <div className="mt-4 scroll">
          <div id="purchase-result-section__row-align" className="flex flex-wrap flex-row">
            {this.props.lottoTickets.map((lottoTicket, index) => (
              <LottoTicketItem key={index} numbers={lottoTicket} isToggleOn={this.state.isToggleOn} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
