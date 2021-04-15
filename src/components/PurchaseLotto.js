import React, { Component } from 'react';
import Lotto from './Lotto.js';
import '../css/purchase-lotto.css';

export default class PurchaseLotto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false,
    };

    this.onChangeToggleButton = this.onChangeToggleButton.bind(this);
  }

  onChangeToggleButton(e) {
    this.setState({ isToggled: e.target.checked });
  }

  render() {
    let displaySectionClassName = 'display-section';
    if (this.state.isToggled) {
      displaySectionClassName += 'toggle';
    }

    return (
      <div className="purchase-lotto-container">
        <section>
          <span className="number-of-lotto-text">총 {this.props.lottoBundle.length}개 구매하였습니다.</span>
          <div className="toggle-button-wrapper">
            <label htmlFor="toggle-button" className="toggle-button-label">
              <input id="toggle-button" type="checkbox" onChange={this.onChangeToggleButton} />
              <span className="toggle-text">번호보기</span>
            </label>
          </div>
        </section>
        <section className={displaySectionClassName}>
          {this.props.lottoBundle.map((v, i) => (
            <Lotto numbers={v} key={String.fromCharCode(97 + i)} />
          ))}
        </section>
      </div>
    );
  }
}
