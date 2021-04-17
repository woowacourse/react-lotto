import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import WinningNumberInput from './winningNumberInput/WinningNumberInput';
import { LOTTO } from '../../constants/lottoData';
import { hasDuplicatedItem, isInRange } from '../../utils/validator';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../constants/messages';
import './WinningNumberForm.scss';

const WINNING_NUMBER_INPUT_NAME = {
  NUMBER: 'winning-number',
  BONUS_NUMBER: 'bonus-number',
};

const WINNING_NUMBER_INPUT_LABEL = {
  NUMBERS: [
    '첫 번째 당첨번호',
    '두 번째 당첨번호',
    '세 번째 당첨번호',
    '네 번째 당첨번호',
    '다섯 번째 당첨번호',
    '여섯 번째 당첨번호',
  ],
  BONUS_NUMBER: '보너스 당첨번호',
};

const validateWinningNumber = (winningNumberList) => {
  if (hasDuplicatedItem(winningNumberList)) {
    return { isCompletedInput: false, checkMessage: ERROR_MESSAGE.HAS_DUPLICATED_NUMBER };
  }

  if (winningNumberList.length < LOTTO.NUMBER_LENGTH + LOTTO.BONUS_NUMBER_LENGTH) {
    return { isCompletedInput: false, checkMessage: ERROR_MESSAGE.HAS_BLANK_INPUT };
  }

  return { isCompletedInput: true, checkMessage: SUCCESS_MESSAGE.INPUT_WINNING_NUMBER };
};

export default class WinningNumberForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isCompletedInput: false,
      checkMessage: '',
    };

    this.formRef = React.createRef();

    this.onSubmitWinningNumber = this.onSubmitWinningNumber.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
  }

  getWinningNumberInputValue() {
    const numbers = [...this.formRef.current[WINNING_NUMBER_INPUT_NAME.NUMBER]].map((ele) => ele.value);
    const bonusNumber = this.formRef.current[WINNING_NUMBER_INPUT_NAME.BONUS_NUMBER].value;

    return { numbers, bonusNumber };
  }

  onSubmitWinningNumber(event) {
    event.preventDefault();

    if (!this.state.isCompletedInput) {
      return;
    }

    const { numbers, bonusNumber } = this.getWinningNumberInputValue();

    this.props.setWinningNumber({
      numbers: numbers.map((number) => Number(number)),
      bonusNumber: Number(bonusNumber),
    });
    this.props.openResultModal();
  }

  onChangeNumber({ target }) {
    if (!isInRange(target.value, { min: LOTTO.MIN_NUMBER, max: LOTTO.MAX_NUMBER })) {
      this.setState({ isCompletedInput: false, checkMessage: ERROR_MESSAGE.OUT_OF_RANGE });

      return;
    }

    const { numbers, bonusNumber } = this.getWinningNumberInputValue();
    const typedNumberList = [...numbers, bonusNumber].filter((num) => num !== '');

    this.setState(validateWinningNumber(typedNumberList));
  }

  render() {
    return (
      <section className="WinningNumberForm">
        <h2>당첨 번호 6개와 보너스 번호 1개를 입력해주세요.</h2>
        <form ref={this.formRef} onSubmit={this.onSubmitWinningNumber}>
          <div className="number-input-box">
            <section className="numbers-box">
              <h3>당첨 번호</h3>
              <ul>
                {WINNING_NUMBER_INPUT_LABEL.NUMBERS.map((label) => (
                  <li key={label}>
                    <WinningNumberInput
                      onChangeInput={this.onChangeNumber}
                      inputName={WINNING_NUMBER_INPUT_NAME.NUMBER}
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
                inputName={WINNING_NUMBER_INPUT_NAME.BONUS_NUMBER}
                min={LOTTO.MIN_NUMBER}
                max={LOTTO.MAX_NUMBER}
                inputLabel={WINNING_NUMBER_INPUT_LABEL.BONUS_NUMBER}
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

WinningNumberForm.propTypes = {
  setWinningNumber: PropTypes.func.isRequired,
  openResultModal: PropTypes.func.isRequired,
};
