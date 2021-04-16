import React, { Component } from 'react';
import { hasDuplicatedNumber, LOTTERY, MESSAGE } from '../utils';

class WinningNumbersForm extends Component {
  constructor(props) {
    super(props);
    this.messageRef = React.createRef();
    this.state = {
      isSubmit: false,
      winningNumbers: Array(LOTTERY.NUMBER_COUNT).fill(null),
      bonusNumber: null,
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const inputNumbers = [...this.state.winningNumbers, this.state.bonusNumber];
    const $input = this.messageRef.current;

    if (hasDuplicatedNumber(inputNumbers)) {
      $input.innerText = MESSAGE.WINNING_NUMBERS_FORM.HAS_DUPLICATED_NUMBER;

      return;
    }

    $input.innerText = '';
    this.setState({ isSubmit: true });
    this.props.setWinningResult(
      this.state.winningNumbers,
      this.state.bonusNumber
    );
  };

  handleWinningNumberChange = ({ target }) => {
    const targetIndex = Number(target.dataset.index);
    const winningNumbers = this.state.winningNumbers.map((number, index) => {
      if (index !== targetIndex) {
        return number;
      }

      return Number(target.value);
    });

    this.setState({ winningNumbers });
  };

  handleBonusNumberChange = ({ target }) => {
    const bonusNumber = target.value;

    this.setState({ bonusNumber });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="d-flex flex-col">
        <label>지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label>
        <div className="d-flex">
          {this.state.winningNumbers.map((_, index) => (
            <input
              key={index}
              onChange={this.handleWinningNumberChange}
              data-index={index}
              className="mr-1"
              type="number"
              min={LOTTERY.MIN_NUMBER}
              max={LOTTERY.MAX_NUMBER}
              required
              disabled={this.state.isSubmit}
            ></input>
          ))}
          <input
            className="ml-6"
            onChange={this.handleBonusNumberChange}
            type="number"
            min={LOTTERY.MIN_NUMBER}
            max={LOTTERY.MAX_NUMBER}
            disabled={this.state.isSubmit}
            required
          ></input>
        </div>
        <p ref={this.messageRef}></p>
        <button type="submit">결과 확인하기</button>
      </form>
    );
  }
}

export default WinningNumbersForm;
