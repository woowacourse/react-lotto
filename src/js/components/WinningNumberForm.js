import React, { Component } from 'react';
import WinningNumberInput from './WinningNumberInput';
import { LOTTO } from '../constants/lottoData';
import './WinningNumberForm.scss';

const INPUT_NAME = {
  WINNING_NUMBER: 'winning-number',
  BONUS_NUMBER: 'bonus-number',
};

const INPUT_LABEL = {
  WINNING_NUMBERS: [
    '첫 번째 당첨번호',
    '두 번째 당첨번호',
    '세 번째 당첨번호',
    '네 번째 당첨번호',
    '다섯 번째 당첨번호',
    '여섯 번째 당첨번호',
  ],
  BONUS_NUMBER: '보너스 당첨번호',
};

export default class WinningNumberForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCompletedInput: false,
      checkMessage: '',
    };

    this.formRef = React.createRef();

    this.onSubmitWinningNumbers = this.onSubmitWinningNumbers.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
  }

  getWinningNumberInputValue() {
    const winningNumbers = [...this.formRef.current[INPUT_NAME.WINNING_NUMBER]].map((ele) => ele.value);
    const bonusNumber = this.formRef.current[INPUT_NAME.BONUS_NUMBER].value;

    return {
      winningNumbers,
      bonusNumber,
    };
  }

  onSubmitWinningNumbers(event) {
    event.preventDefault();
  }

  onChangeNumber({ target }) {
    if (target.value < LOTTO.MIN_NUMBER || target.value > LOTTO.MAX_NUMBER) {
      this.setState({ isCompletedInput: false, checkMessage: '1 ~ 45 사이의 숫자를 입력해주세요!' });

      return;
    }

    const { winningNumbers, bonusNumber } = this.getWinningNumberInputValue();
    const typedNumbers = [...winningNumbers, bonusNumber].filter((num) => num !== '');

    if (typedNumbers.length !== new Set(typedNumbers).size) {
      this.setState({ isCompletedInput: false, checkMessage: '중복된 숫자가 입력되었습니다!' });

      return;
    }

    if (typedNumbers.length < LOTTO.NUMBER_LENGTH + 1) {
      this.setState({ isCompletedInput: false, checkMessage: '당첨 번호를 모두 입력해주세요!' });

      return;
    }

    this.setState({ isCompletedInput: true, checkMessage: '입력완료! 결과를 확인하세요!' });
  }

  render() {
    return (
      <section className="WinningNumberForm">
        <h2>당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</h2>
        <form ref={this.formRef} onSubmit={this.onSubmitWinningNumbers}>
          <div className="number-input-box">
            <section className="winning-number-box">
              <h3>당첨 번호</h3>
              <ul>
                {INPUT_LABEL.WINNING_NUMBERS.map((label) => (
                  <li key={label}>
                    <WinningNumberInput
                      onChangeInput={this.onChangeNumber}
                      inputName={INPUT_NAME.WINNING_NUMBER}
                      min={LOTTO.MIN_NUMBER}
                      max={LOTTO.MAX_NUMBER}
                      inputLabel={label}
                    />
                  </li>
                ))}
              </ul>
            </section>
            <section className="bonus-number-box">
              <h3>보너스 번호</h3>
              <WinningNumberInput
                onChangeInput={this.onChangeNumber}
                inputName={INPUT_NAME.BONUS_NUMBER}
                min={LOTTO.MIN_NUMBER}
                max={LOTTO.MAX_NUMBER}
                inputLabel={INPUT_LABEL.BONUS_NUMBER}
              />
            </section>
          </div>
          <div className="check-message">
            <p className={this.state.isCompletedInput ? 'success' : 'failure'}>{this.state.checkMessage}</p>
          </div>
          <button className="winning-number-submit-btn" disabled={!this.state.isCompletedInput}>
            결과 확인하기
          </button>
        </form>
      </section>
    );
  }
}
