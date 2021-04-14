import React, { Component } from 'react';
import './LottoTicket.scss';

export default class LottoTicket extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="LottoTicket">
        <span className="lotto-ticket-emoji">🎟</span>
        <p className={this.props.isShowNumber ? '' : 'd-none'}>{this.props.lottoNumbers.join(', ')}</p>
      </div>
    );
  }
}
