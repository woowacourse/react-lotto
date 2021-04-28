import React, { Component } from "react";
import { hasDuplicatedValue, isNumber, LOTTERY, MESSAGE } from "../utils";

class WinningNumbersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      winningNumberInputs: Array(LOTTERY.NUMBER_COUNT).fill(""),
      bonusNumberInput: "",
      errorInputMessage: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const inputs = [
      ...this.state.winningNumberInputs,
      this.state.bonusNumberInput,
    ];

    if (hasDuplicatedValue(inputs)) {
      this.setState({
        errorInputMessage: MESSAGE.WINNING_NUMBERS_FORM.HAS_DUPLICATED_NUMBER,
      });

      return;
    }

    this.setState({
      errorInputMessage: "",
    });
    this.setState({ isSubmit: true });
    this.props.onWinningNumberSubmit(
      this.state.winningNumberInputs.map((input) => Number(input)),
      Number(this.state.bonusNumber)
    );
  };

  handleWinningNumberChange = ({ target }) => {
    if (!isNumber(target.value)) {
      return;
    }

    if (target.value.length > 1) {
      return;
    }

    const targetIndex = Number(target.dataset.index);
    const winningNumberInputs = this.state.winningNumberInputs.map(
      (input, index) => {
        if (index !== targetIndex) {
          return input;
        }

        return target.value;
      }
    );

    this.setState({ winningNumberInputs });
  };

  handleBonusNumberChange = ({ target }) => {
    if (!isNumber(target.value)) {
      return;
    }

    if (target.value.length > 1) {
      return;
    }

    const bonusNumberInput = target.value;

    this.setState({ bonusNumberInput });
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
              {this.state.winningNumberInputs.map((_, index) => (
                <input
                  key={index}
                  onChange={this.handleWinningNumberChange}
                  data-index={index}
                  className="winning-number mx-1 text-center"
                  type="text"
                  value={this.state.winningNumberInputs[index]}
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
                type="text"
                value={this.state.bonusNumberInput}
                min={LOTTERY.MIN_NUMBER}
                max={LOTTERY.MAX_NUMBER}
                disabled={this.state.isSubmit}
                required
              />
            </div>
          </div>
        </div>
        <p className="mt-3">{this.state.errorInputMessage}</p>
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
