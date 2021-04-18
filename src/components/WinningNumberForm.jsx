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
    };

    this.state = { ...this.initialState };
    this.resetState = this.resetState.bind(this);

    this.isValid = this.isValid.bind(this);
    this.isValidNumberScope = this.isValidNumberScope.bind(this);
    this.hasUniqueInputValues = this.hasUniqueInputValues.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWinningNumberInputChange = this.handleWinningNumberInputChange.bind(this);
    this.handleBonusNumberInputChange = this.handleBonusNumberInputChange.bind(this);
  }

  resetState() {
    this.setState({ ...this.initialState });
  }

  hasUniqueInputValues() {
    return (
      new Set([...this.state.winningNumberInputValues, this.state.bonusNumberInputValue]).size ===
      this.state.winningNumberInputValues.length + 1
    );
  }

  isValidNumberScope(value) {
    return LOTTO.MIN_NUMBER <= Number(value) && Number(value) <= LOTTO.MAX_NUMBER;
  }

  isValid() {
    return (
      [...this.state.winningNumberInputValues, this.state.bonusNumberInputValue].every(this.isValidNumberScope) &&
      this.hasUniqueInputValues()
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.hasUniqueInputValues()) {
      alert('중복된 당첨번호를 입력하실 수 없습니다.');
      return;
    }

    this.props.setWinningNumbers(this.state.winningNumberInputValues.map(Number));
    this.props.setBonusNumber(Number(this.state.bonusNumberInputValue));
  }

  handleWinningNumberInputChange({ target: { name, value } }) {
    if (value !== '' && !this.isValidNumberScope(value)) {
      alert(`당첨번호는 ${LOTTO.MIN_NUMBER} 이상 ${LOTTO.MAX_NUMBER} 이하의 숫자이어야 합니다.`);
      value = '';
    }

    this.setState({
      winningNumberInputValues: this.state.winningNumberInputValues.map((inputValue, index) =>
        name.includes(index) ? value : inputValue
      ),
    });
  }

  handleBonusNumberInputChange({ target: { value } }) {
    if (value !== '' && !this.isValidNumberScope(value)) {
      alert(`당첨번호는 ${LOTTO.MIN_NUMBER} 이상 ${LOTTO.MAX_NUMBER} 이하의 숫자이어야 합니다.`);
      value = '';
    }

    this.setState({ bonusNumberInputValue: value });
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
                      className="mx-1 text-xl text-center w-14 h-14"
                      name={`winning-number-${index}`}
                      value={this.state.winningNumberInputValues[index]}
                      onChange={this.handleWinningNumberInputChange}
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
                  className="mx-1 text-center w-14 h-14"
                  value={this.state.bonusNumberInputValue}
                  onChange={this.handleBonusNumberInputChange}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="font-bold mt-5 py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white w-11/12"
            disabled={!this.isValid()}
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
