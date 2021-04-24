import React, { Component } from "react";
import { hasDuplicatedNumber, LOTTERY, MESSAGE } from "../utils";

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

  handleSubmit = (event) => {
    event.preventDefault();

    const inputNumbers = [...this.state.winningNumbers, this.state.bonusNumber];
    const $input = this.messageRef.current;

    if (hasDuplicatedNumber(inputNumbers)) {
      $input.innerText = MESSAGE.WINNING_NUMBERS_FORM.HAS_DUPLICATED_NUMBER;

      return;
    }

    $input.innerText = "";
    this.setState({ isSubmit: true });
    this.props.onWinningNumberSubmit(
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
      <form onSubmit={this.handleSubmit} className="mt-9">
        <label className="flex-auto d-inline-block mb-3">
          지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
        </label>
        <div className="d-flex">
          <div>
            <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
            <div>
              {this.state.winningNumbers.map((_, index) => (
                <input
                  key={index}
                  onChange={this.handleWinningNumberChange}
                  data-index={index}
                  className="winning-number mx-1 text-center"
                  type="number"
                  min={LOTTERY.MIN_NUMBER}
                  max={LOTTERY.MAX_NUMBER}
                  required
                  disabled={this.state.isSubmit}
                ></input>
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
                disabled={this.state.isSubmit}
                required
              />
            </div>
          </div>
        </div>
        <p ref={this.messageRef}></p>
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
