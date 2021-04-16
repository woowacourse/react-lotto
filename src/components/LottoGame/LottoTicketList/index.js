import React, { Component } from 'react';

class LottoTicketItem extends Component {
  render() {
    return (
      <div className="lotto-wrapper flex items-center">
        <span className="lotto mx-1 text-4xl">🎟️ </span>
        {this.props.isToggleOn && <span className="ml-3 text-2xl ">{this.props.numbers.join(', ')}</span>}
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

  handleToggle() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <section className="mt-9 ">
        <div className="flex">
          <label className="flex-auto my-0">총 {this.props.lottoTickets.length}개를 구매하였습니다.</label>
          <div className="flex-auto flex justify-end pr-1">
            <label className="switch">
              <input type="checkbox" />
              <span className="text-base font-normal" onClick={this.handleToggle}>
                번호보기
              </span>
            </label>
          </div>
        </div>
        <div className="mt-4 scroll">
          <div className="flex flex-wrap flex-row">
            {this.props.lottoTickets.map((lottoTicket, index) => (
              <LottoTicketItem key={index} numbers={lottoTicket} isToggleOn={this.state.isToggleOn} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
