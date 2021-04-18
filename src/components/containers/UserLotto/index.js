/* eslint-disable react/no-array-index-key */
import { Component } from 'react';
import Lotto from './Lotto';
import { ToggleButton } from '../../shared';
import './style.css';

export default class UserLottoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { isToggled: false };
    this.onChangeToggleButton = this.onChangeToggleButton.bind(this);
  }

  onChangeToggleButton(e) {
    this.setState({ isToggled: e.target.checked });
  }

  render() {
    const { isToggled } = this.state;
    const { lottoBundle } = this.props;

    return (
      <div className="purchase-lotto-wrapper">
        <ToggleButton onChange={this.onChangeToggleButton} text="번호보기" />
        <div>
          총 <span className="number-of-lotto">{lottoBundle.length}</span>개 구매하였습니다.
        </div>
        <section className={`display-section ${isToggled ? 'toggle' : null}`}>
          {lottoBundle.map((v, i) => (
            <Lotto key={i} numbers={v} />
          ))}
        </section>
      </div>
    );
  }
}
