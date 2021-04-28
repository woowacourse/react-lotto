import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { LOTTO, MESSAGE, generateId, inputValidator, formValidator, deepFreeze } from '../utils';
import NumberInput from './NumberInput';
export default class WinningNumberForm extends React.Component {
  static propTypes = {
    setWinningNumbers: PropTypes.func.isRequired,
    setBonusNumber: PropTypes.func.isRequired,
    isReset: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    this.winningNumberInputIds = Array.from({ length: LOTTO.LENGTH }).map(() => generateId());
    this.bonusNumberInputId = generateId();

    this.initialState = deepFreeze({
      ...Object.fromEntries(this.winningNumberInputIds.map((id) => [id, ''])),
      [this.bonusNumberInputId]: '',
      validationMessage: MESSAGE.REQUIRE_WINNING_NUMBER_INPUT,
    });

    this.state = { ...this.initialState };
    this.resetState = this.resetState.bind(this);

    this.getInputs = this.getInputs.bind(this);

    this.setValidationMessage = this.setValidationMessage.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getInputs() {
    return [...this.winningNumberInputIds.map((id) => this.state[id]), this.state[this.bonusNumberInputId]];
  }

  resetState() {
    this.setState({ ...this.initialState });
  }

  setValidationMessage(value) {
    this.setState({ validationMessage: formValidator.getValidationMessage(this.getInputs(), value) });
  }

  handleSubmit(event) {
    event.preventDefault();

    const winningNumbers = this.winningNumberInputIds.map((id) => Number(this.state[id]));
    const bonusNumber = Number(this.state[this.bonusNumberInputId]);

    this.props.setWinningNumbers(winningNumbers);
    this.props.setBonusNumber(bonusNumber);
  }

  handleInputFocus({ target: { value } }) {
    this.setValidationMessage(value);
  }

  handleInputChange(event) {
    const { value, name } = event.target;

    this.setState({ [name]: value }, this.setValidationMessage.bind(this, value));
  }

  componentDidUpdate(prevProps) {
    if (this.props.isReset && !prevProps.isReset) {
      this.resetState();
    }
  }

  render() {
    const inputs = this.getInputs();
    const isFormValid = formValidator.isFormValid(inputs);

    return (
      <>
        <h2 className="mb-3 mt-6 text-xl font-semibold">지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</h2>
        <form className="flex flex-col items-center w-full" onSubmit={this.handleSubmit}>
          <div className="flex justify-evenly w-full">
            <div className="flex flex-col">
              <h3 className="mb-3 mt-0 text-center text-lg font-semibold">당첨 번호</h3>
              <div className="flex mx-auto">
                {this.winningNumberInputIds.map((id) => (
                  <NumberInput
                    key={id}
                    name={id}
                    value={this.state[id]}
                    isBonus={false}
                    isValid={inputValidator.isValidInputValue(inputs, this.state[id])}
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-3 mt-0 text-center text-lg font-semibold">보너스 번호</h3>
              <NumberInput
                key={this.bonusNumberInputId}
                name={this.bonusNumberInputId}
                value={this.state[this.bonusNumberInputId]}
                isBonus
                isValid={inputValidator.isValidInputValue(inputs, this.state[this.bonusNumberInputId])}
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
          </div>

          <div
            className={cx(
              isFormValid || this.state.validationMessage === MESSAGE.WINNING_NUMBER.REQUIRED_NEXT_INPUT
                ? 'text-blue-700'
                : 'text-rose-500',
              'mt-4 h-4 font-semibold'
            )}
          >
            {this.state.validationMessage}
          </div>
          <button
            type="submit"
            className="mt-5 px-4 py-2 w-11/12 text-white font-bold bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 rounded focus:outline-none focus:ring-1.5"
            disabled={!isFormValid}
          >
            결과 확인하기
          </button>
        </form>
      </>
    );
  }
}
