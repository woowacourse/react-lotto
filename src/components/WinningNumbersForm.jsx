import React, { Component } from 'react';
import { hasDuplicatedNumber, LOTTERY, MESSAGE } from '../utils';

class WinningNumbersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      winningNumbers: Array(LOTTERY.NUMBER_COUNT).fill(null),
      bonusNumber: null,
      message: null,
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const { winningNumbers, bonusNumber } = this.state;
    const inputNumbers = [...winningNumbers, bonusNumber];

    try {
      this.checkValidWinningInputs(inputNumbers);
      this.setState({ isSubmit: true, message: '' });
      this.props.setWinningResult(winningNumbers, bonusNumber);
    } catch (error) {
      this.setState({ message: error.message });
    }
  };

  checkValidWinningInputs(inputNumbers) {
    if (!inputNumbers.every(number => typeof number === 'number')) {
      throw new Error('안됨');
    }
    if (hasDuplicatedNumber(inputNumbers)) {
      throw new Error(MESSAGE.WINNING_NUMBERS_FORM.HAS_DUPLICATED_NUMBER);
    }
  }

  handleWinningNumberChange = ({ target }) => {
    const targetIndex = Number(target.dataset.index);

    if (Number.isNaN(targetIndex)) {
      console.error('Invalid targetIndex.');

      return;
    }

    const winningNumbers = this.state.winningNumbers.map((number, index) => {
      return index !== targetIndex ? number : Number(target.value);
    });

    this.setState({ winningNumbers });
  };

  handleBonusNumberChange = ({ target }) => {
    const bonusNumber = Number(target.value);

    this.setState({ bonusNumber });
  };

  render() {
    const { winningNumbers, message, isSubmit } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="mt-9">
        <label className="flex-auto d-inline-block mb-3">
          지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
        </label>
        <div className="d-flex">
          <div>
            <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
            <div>
              {winningNumbers.map((_, index) => (
                <input
                  key={`winning-number-${index}`}
                  onChange={this.handleWinningNumberChange}
                  data-index={index}
                  className="winning-number mx-1 text-center"
                  type="number"
                  min={LOTTERY.MIN_NUMBER}
                  max={LOTTERY.MAX_NUMBER}
                  required
                  disabled={isSubmit}
                />
              ))}
            </div>
          </div>
          <div className="bonus-number-container flex-grow">
            <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
            <div className="d-flex justify-center">
              <input
                className="bonus-number text-center"
                onChange={this.handleBonusNumberChange}
                type="number"
                min={LOTTERY.MIN_NUMBER}
                max={LOTTERY.MAX_NUMBER}
                disabled={isSubmit}
                required
              />
            </div>
          </div>
        </div>
        <p className="text-center">{message}</p>
        <button
          type="submit"
          className="open-result-modal-button mt-5 btn btn-cyan w-100"
        >
          결과 확인하기
        </button>
      </form>
    );
  }
}

export default WinningNumbersForm;
