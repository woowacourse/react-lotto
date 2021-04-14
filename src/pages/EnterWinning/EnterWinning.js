import React, { Component } from 'react';
import Styled from './EnterWinning.style';
import { INPUT_NAME, LOTTO } from '../../constants';

class EnterWinning extends Component {
  constructor(props) {
    super(props);

    // TODO: WINNING_NUMBER_INPUT의 반복 사용 리팩토링하기
    this.state = {
      winningNumber: {
        [INPUT_NAME.WINNING_NUMBER[1]]: '',
        [INPUT_NAME.WINNING_NUMBER[2]]: '',
        [INPUT_NAME.WINNING_NUMBER[3]]: '',
        [INPUT_NAME.WINNING_NUMBER[4]]: '',
        [INPUT_NAME.WINNING_NUMBER[5]]: '',
        [INPUT_NAME.WINNING_NUMBER[6]]: '',
      },
      bonusNumber: '',
    };
  }

  handleChangeWinningNumber(event) {
    this.setState((prevState) => ({
      ...prevState,
      winningNumber: {
        ...prevState.winningNumber,
        [event.target.name]: event.target.value,
      },
    }));
  }

  handleChangeBonusNumber(event) {
    this.setState((prevState) => ({
      ...prevState,
      bonusNumber: event.target.value,
    }));
  }

  handleSubmitWinningNumber(event) {
    event.preventDefault();

    this.props.history.push({
      pathname: '/result',
      state: { lottoList: this.props.location.state.lottoList, ...this.state },
    });
  }

  render() {
    return (
      <div>
        <p>지난 주 당첨번호를 입력해주세요</p>
        <form onSubmit={this.handleSubmitWinningNumber.bind(this)}>
          <fieldset>
            <legend>당첨 번호 입력</legend>
            {Object.keys(this.state.winningNumber).map((key) => (
              <Styled.NumberInput
                key={key}
                type="number"
                min={LOTTO.MIN_NUMBER}
                max={LOTTO.MAX_NUMBER}
                name={key}
                aria-label=""
                value={this.state.winningNumber[key]}
                onChange={this.handleChangeWinningNumber.bind(this)}
                required
              />
            ))}
          </fieldset>
          <label htmlFor="bonus-number" hidden>
            보너스 번호
          </label>
          <Styled.NumberInput
            type="number"
            min={LOTTO.MIN_NUMBER}
            max={LOTTO.MAX_NUMBER}
            id="bonus-number"
            name="bonus-number"
            value={this.state.bonusNumber}
            onChange={this.handleChangeBonusNumber.bind(this)}
            required
          />
          <button>당첨 결과 확인</button>
        </form>
      </div>
    );
  }
}

export default EnterWinning;
