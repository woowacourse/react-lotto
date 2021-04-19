import React from 'react';
import PropTypes from 'prop-types';
import { LOTTO } from '../utils/constants';

export default class WinningNumberForm extends React.Component {
  static propTypes = {
    setWinningNumbers: PropTypes.func.isRequired,
    setBonusNumber: PropTypes.func.isRequired,
    isReset: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    this.initialState = {
      winningNumberInputValues: Array.from({ length: LOTTO.LENGTH }, () => ''),
      bonusNumberInputValue: '',
      validationMessage: '당첨 번호 6개와 보너스 번호 1개를 모두 입력해주세요.',
    };

    this.state = { ...this.initialState };
    this.resetState = this.resetState.bind(this);

    this.isFormValid = this.isFormValid.bind(this);
    this.isValidInputValue = this.isValidInputValue.bind(this);

    this.isAllNumberInRange = this.isAllNumberInRange.bind(this);
    this.hasUniqueInputValues = this.hasUniqueInputValues.bind(this);

    this.isNumberInRange = this.isNumberInRange.bind(this);
    this.isUniqueInputValue = this.isUniqueInputValue.bind(this);

    this.setValidationMessage = this.setValidationMessage.bind(this);
    this.getValidationMessage = this.getValidationMessage.bind(this);
    this.getInputValidationMessage = this.getInputValidationMessage.bind(this);
    this.getFormValidationMessage = this.getFormValidationMessage.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWinningNumberInputChange = this.handleWinningNumberInputChange.bind(this);
    this.handleBonusNumberInputChange = this.handleBonusNumberInputChange.bind(this);

    this.handleInputFocus = this.handleInputFocus.bind(this);
  }

  resetState() {
    this.setState({ ...this.initialState });
  }

  isFormValid() {
    return this.isAllNumberInRange() && this.hasUniqueInputValues();
  }

  isValidInputValue(value) {
    return this.isNumberInRange(value) && this.isUniqueInputValue(value);
  }

  isAllNumberInRange(arr = [...this.state.winningNumberInputValues, this.state.bonusNumberInputValue]) {
    return arr.every(this.isNumberInRange);
  }

  hasUniqueInputValues(arr = [...this.state.winningNumberInputValues, this.state.bonusNumberInputValue]) {
    return new Set(arr).size === arr.length;
  }

  isNumberInRange(value) {
    return LOTTO.MIN_NUMBER <= Number(value) && Number(value) <= LOTTO.MAX_NUMBER;
  }

  isUniqueInputValue(value) {
    return (
      [...this.state.winningNumberInputValues, this.state.bonusNumberInputValue].filter(
        (inputValue) => inputValue === value
      ).length === 1
    );
  }

  setValidationMessage(value) {
    this.setState({ validationMessage: this.getValidationMessage(value) });
  }

  getValidationMessage(value) {
    const isFormValid = this.isFormValid();
    const isInputValid = this.isValidInputValue(value);

    switch (true) {
      case !isInputValid:
        return this.getInputValidationMessage(value);
      case !isFormValid:
        return this.getFormValidationMessage();
      default:
        return '당첨 번호를 모두 입력하셨습니다! 당첨 결과를 확인해보세요!!';
    }
  }

  getInputValidationMessage(value) {
    switch (true) {
      case value === '':
        return '당첨 번호 6개와 보너스 번호 1개를 모두 입력해주세요.';
      case !this.isUniqueInputValue(value):
        return '중복된 번호는 입력하실 수 없습니다.';
      case !this.isNumberInRange(value):
        return `${LOTTO.MIN_NUMBER} ~ ${LOTTO.MAX_NUMBER} 사이의 숫자만 입력 가능합니다.`;
      default:
        return '';
    }
  }

  getFormValidationMessage() {
    const inputValues = [...this.state.winningNumberInputValues, this.state.bonusNumberInputValue];
    const nonEmptyInputValues = inputValues.filter((inputValue) => inputValue !== '');

    switch (true) {
      case !this.hasUniqueInputValues(nonEmptyInputValues):
        return '중복된 번호는 입력하실 수 없습니다.';
      case !this.isAllNumberInRange(nonEmptyInputValues):
        return `${LOTTO.MIN_NUMBER} ~ ${LOTTO.MAX_NUMBER} 사이의 숫자만 입력 가능합니다.`;
      case this.hasEmptyInputValues():
        return '다음 번호를 입력해주세요.';
      default:
        return '';
    }
  }

  hasEmptyInputValues() {
    const inputValues = [...this.state.winningNumberInputValues, this.state.bonusNumberInputValue];
    const nonEmptyInputValues = inputValues.filter((inputValue) => inputValue !== '');
    return nonEmptyInputValues.length < inputValues.length;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setWinningNumbers(this.state.winningNumberInputValues.map(Number));
    this.props.setBonusNumber(Number(this.state.bonusNumberInputValue));
  }

  handleWinningNumberInputChange({ target: { name, value } }) {
    this.setState(
      {
        winningNumberInputValues: this.state.winningNumberInputValues.map((inputValue, index) =>
          name.includes(index) ? value : inputValue
        ),
      },
      this.setValidationMessage.bind(this, value)
    );
  }

  handleBonusNumberInputChange({ target: { value } }) {
    this.setState({ bonusNumberInputValue: value }, this.setValidationMessage.bind(this, value));
  }

  handleInputFocus({ target: { value } }) {
    this.setValidationMessage(value);
  }

  render() {
    return (
      <>
        <h2 className="text-xl font-semibold mb-3 mt-6">지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</h2>
        <form className="flex flex-col items-center w-full" onSubmit={this.handleSubmit}>
          <div className="flex justify-evenly w-full">
            <div className="flex flex-col">
              <h3 className="mt-0 mb-3 text-center font-semibold text-lg">당첨 번호</h3>
              <div className="flex mx-auto">
                {Array.from({ length: LOTTO.LENGTH }).map((_, index) => (
                  <React.Fragment key={index}>
                    <label htmlFor={`winning-number-${index}`} className="sr-only">
                      {index + 1}번째 당첨 번호
                    </label>
                    <input
                      id={`winning-number-${index}`}
                      type="number"
                      className={`border rounded shadow mx-1 text-xl text-center w-14 h-14 focus:outline-none focus:shadow-outline  focus:ring-1.5 ${
                        this.isValidInputValue(this.state.winningNumberInputValues[index])
                          ? 'ring-blue-700'
                          : 'ring-rose-500'
                      }`}
                      name={`winning-number-${index}`}
                      value={this.state.winningNumberInputValues[index]}
                      onChange={this.handleWinningNumberInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="flex flex-col ">
              <h3 className="mt-0 mb-3 text-center font-semibold text-lg">보너스 번호</h3>
              <div className="flex justify-center">
                <label htmlFor="bonus-number" className="sr-only">
                  보너스 번호
                </label>
                <input
                  id="bonus-number"
                  type="number"
                  className={`border rounded shadow mx-1 text-xl text-center w-14 h-14 focus:outline-none focus:shadow-outline  focus:ring-1.5 ${
                    this.isValidInputValue(this.state.bonusNumberInputValue) ? 'ring-blue-700' : 'ring-rose-500'
                  }`}
                  value={this.state.bonusNumberInputValue}
                  onChange={this.handleBonusNumberInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
          </div>

          <div
            className={`${
              this.isFormValid() || this.state.validationMessage === '다음 번호를 입력해주세요.'
                ? 'text-blue-700'
                : 'text-rose-500'
            } font-semibold h-4 mt-4`}
          >
            {this.state.validationMessage}
          </div>
          <button
            type="submit"
            className="font-bold mt-5 py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white w-11/12"
            disabled={!this.isFormValid()}
          >
            결과 확인하기
          </button>
        </form>
      </>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.isReset && !prevProps.isReset) {
      this.resetState();
    }
  }
}
