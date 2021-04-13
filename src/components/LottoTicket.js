import React, { Component } from 'react';

export default class LottoTicket extends Component {
  render() {
    return (
      <div>
        <span>🎟</span>
        <p className={this.props.isShowNumber ? '' : 'd-none'}>{this.props.lottoNumbers.join(', ')}</p>
      </div>
    );
  }
}
