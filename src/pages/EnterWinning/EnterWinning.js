import React, { Component } from 'react';
import Styled from './EnterWinning.style';
import { ALERT_MESSAGE, INPUT_NAME, LOTTO, PATH } from '../../constants';
import { initObject, isUniqueArray } from '../../utils';
import Button from '../../components/Button/Button';
import PageTitle from '../../components/PageTitle/PageTitle';

class EnterWinning extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winningNumber: initObject(Object.values(INPUT_NAME.WINNING_NUMBER), ''),
      bonusNumber: '',
    };

    this.handleChangeWinningNumber = this.handleChangeWinningNumber.bind(this);
    this.handleChangeBonusNumber = this.handleChangeBonusNumber.bind(this);
    this.handleSubmitWinningNumber = this.handleSubmitWinningNumber.bind(this);
  }

  handleChangeWinningNumber(event) {
    this.setState((prevState) => ({
      ...prevState,
      winningNumber: {
        ...prevState.winningNumber,
        [event.target.name]: Number(event.target.value),
      },
    }));
  }

  handleChangeBonusNumber(event) {
    this.setState((prevState) => ({
      ...prevState,
      bonusNumber: Number(event.target.value),
    }));
  }

  handleSubmitWinningNumber(event) {
    event.preventDefault();

    const { winningNumber, bonusNumber } = this.state;
    const { location, history } = this.props;
    const { lottoList, moneyInput } = location.state;

    const numberList = [...Object.values(winningNumber), bonusNumber];

    if (!isUniqueArray(numberList)) {
      alert(ALERT_MESSAGE.DUPLICATED_WINNING_NUMBER);
      return;
    }

    history.push({
      pathname: PATH.RESULT,
      state: { lottoList, moneyInput, winningNumber, bonusNumber },
    });
  }

  render() {
    const { winningNumber, bonusNumber } = this.state;

    return (
      <div>
        <PageTitle>당첨 번호 입력</PageTitle>
        <p>지난 주 당첨번호를 입력해주세요</p>
        <form onSubmit={this.handleSubmitWinningNumber}>
          <Styled.InputGroup>
            <Styled.Fieldset>
              <legend hidden>당첨 번호 입력</legend>
              {Object.keys(winningNumber).map((key, index) => (
                <Styled.NumberInput
                  key={key}
                  type="number"
                  min={LOTTO.MIN_NUMBER}
                  max={LOTTO.MAX_NUMBER}
                  name={key}
                  aria-label=""
                  value={winningNumber[key]}
                  onChange={this.handleChangeWinningNumber}
                  required
                  autoFocus={index === 0}
                />
              ))}
            </Styled.Fieldset>
            <Styled.PlusIcon>➕</Styled.PlusIcon>
            <label htmlFor="bonus-number" hidden>
              보너스 번호
            </label>
            <Styled.NumberInput
              type="number"
              min={LOTTO.MIN_NUMBER}
              max={LOTTO.MAX_NUMBER}
              id="bonus-number"
              name="bonus-number"
              value={bonusNumber}
              onChange={this.handleChangeBonusNumber}
              required
            />
          </Styled.InputGroup>
          <Button>🥁 당첨 결과 확인</Button>
        </form>
      </div>
    );
  }
}

export default EnterWinning;
