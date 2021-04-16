import React, { Component } from 'react';
import { RESULT_COUNT_DOWN_TIME, LOTTO_NUMBERS_LENGTH } from '../constants/lottoRules';
import dummyDrawNumber from '../constants/dummyData.json';
import '../css/winning-number.css';

const WINNING_NUMBER_KEY = (i) => `drwtNo${i}`;
const BONUS_NUMBER_KEY = 'bnusNo';

export default class WinningNumbers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingWinningNumbers: false,
    };
    this.showWinningNumbers = this.showWinningNumbers.bind(this);
    this.drawNumber = this.getDrawNumber();
    this.props.setDrawNumber({ drawNumber: this.drawNumber });
  }

  componentDidMount() {
    setTimeout(this.showWinningNumbers, RESULT_COUNT_DOWN_TIME);
  }

  // eslint-disable-next-line class-methods-use-this
  getDrawNumber() {
    return {
      winningNumbers: [...Array(LOTTO_NUMBERS_LENGTH)].map((_, i) => dummyDrawNumber[WINNING_NUMBER_KEY(i + 1)]),
      bonusNumber: dummyDrawNumber[BONUS_NUMBER_KEY],
    };
  }

  showWinningNumbers() {
    this.setState({ isShowingWinningNumbers: true });
  }

  render() {
    return this.state.isShowingWinningNumbers ? (
      <div>
        <div className="draw-result-wrapper">
          <section className="winning-number-section">
            <h2 className="draw-result-title">당첨 번호</h2>
            <div className="draw-result-number">
              {this.drawNumber.winningNumbers.map((v) => (
                <LottoNumber key={v} number={v} />
              ))}
            </div>
          </section>
          <section className="bonus-number-section">
            <h2 className="draw-result-title">보너스 번호</h2>
            <div className="draw-result-number">
              <LottoNumber key={this.drawNumber.bonusNumber} number={this.drawNumber.bonusNumber} />
            </div>
          </section>
        </div>
        <button type="button" className="open-result-button" onClick={this.props.onShowWinningResult}>
          결과 확인하기
        </button>
      </div>
    ) : (
      <div>
        <span>잠시 후에 공개됩니다.</span>
      </div>
    );
  }
}

class LottoNumber extends Component {
  render() {
    return <span className="lotto-number">{this.props.number}</span>;
  }
}
