import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LottoTicket from './LottoTicket';
import './PurchasedLotto.scss';

export default class PurchasedLotto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowNumber: false,
    };

    this.onToggleLottoNumber = this.onToggleLottoNumber.bind(this);
  }

  onToggleLottoNumber({ target }) {
    this.setState({ isShowNumber: target.checked });
  }

  render() {
    return (
      <section className="PurchasedLotto">
        <span>총 {this.props.lottoList.length}개를 구매하였습니다.</span>
        <label className="switch">
          <input type="checkbox" className="switch-input" onChange={this.onToggleLottoNumber} />
          <span>번호보기</span>
        </label>
        <ul className={this.state.isShowNumber ? '' : 'hide-number'}>
          {this.props.lottoList.map((lotto, index) => (
            <li key={index}>
              <LottoTicket lottoNumbers={lotto} isShowNumber={this.state.isShowNumber} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

PurchasedLotto.propTypes = {
  lottoList: PropTypes.array.isRequired,
};
