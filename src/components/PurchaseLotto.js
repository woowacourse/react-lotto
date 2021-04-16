import { Component } from 'react';
import { LOTTO_NUMBER_SEPARATOR } from '../constants/display.js';
import '../css/purchase-lotto.css';
import lottoImage from '../images/ticket.png';

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
    return (
      <div className="purchase-lotto-wrapper">
        <div className="toggle-button-wrapper">
          <label htmlFor="toggle-button" className="toggle-button-label">
            <input id="toggle-button" type="checkbox" onChange={this.onChangeToggleButton} />
            <span className="toggle-button-text">번호보기</span>
          </label>
        </div>
        <div>
          총 <span className="number-of-lotto">{this.props.lottoBundle.length}</span>개 구매하였습니다.
        </div>
        <section className={`display-section ${this.state.isToggled && 'toggle'}`}>
          {this.props.lottoBundle.map((v, i) => (
            <Lotto numbers={v} key={String.fromCharCode(97 + i)} />
          ))}
        </section>
      </div>
    );
  }
}

class Lotto extends Component {
  render() {
    return (
      <div className="lotto">
        <img className="lotto-image" src={lottoImage} alt="lotto" />
        <span className="lotto-number">
          {this.props.numbers.map((v) => (v < 10 ? `0${v}` : v)).join(LOTTO_NUMBER_SEPARATOR)}
        </span>
      </div>
    );
  }
}
