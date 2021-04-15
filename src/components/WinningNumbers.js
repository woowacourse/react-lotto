import React, { Component } from 'react';
import { WINNING_NUMBERS, WINNING_BONUS_NUMBER, RESULT_COUNT_DOWN_TIME } from '../constants/lottoRules';
import '../css/winning-number.css';

export default class WinningNumbers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingWinningNumbers: false,
    };
    this.showWinningNumbers = this.showWinningNumbers.bind(this);
  }

  componentDidMount() {
    setTimeout(this.showWinningNumbers, RESULT_COUNT_DOWN_TIME);
  }

  showWinningNumbers() {
    this.setState({ isShowingWinningNumbers: true });
  }

  render() {
    return this.state.isShowingWinningNumbers ? (
      <div>
        <span>
          당첨번호: {WINNING_NUMBERS} 보너스번호: {WINNING_BONUS_NUMBER}
        </span>
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
