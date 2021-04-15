import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LottoTicket.scss';

export default class LottoTicket extends Component {
  render() {
    return (
      <div className="LottoTicket">
        <span className="lotto-ticket-emoji">🎟</span>
        <p className={this.props.isShowNumber ? '' : 'd-none'}>{this.props.lottoNumbers.join(', ')}</p>
      </div>
    );
  }
}

LottoTicket.propTypes = {
  isShowNumber: PropTypes.bool.isRequired,
  lottoNumbers: PropTypes.array.isRequired,
};
