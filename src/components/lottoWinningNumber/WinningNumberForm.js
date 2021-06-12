import React, { Component } from 'react';

import NumberList from './NumberList';
import BonusNumberInput from './BonusNumberInput';

import Button from '../commons/Button/Button';

import { LOTTO } from '../../constants/lotto';
import { MESSAGE } from '../../constants/messages';

import { WinningNumberSelectForm } from './styles/WinningNumberForm.style';

class WinningNumberForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [],
    };
  }

  handleCheckWinningResult = e => {
    e.preventDefault();

    const bonusNumber = Number(e.target.elements['bonus-number'].value);

    if (this.state.numbers.length !== LOTTO.BUNDLE_SIZE) {
      alert(MESSAGE.SELECT_WINNING_NUMBER);
      return;
    }

    if (this.state.numbers.includes(bonusNumber)) {
      alert(MESSAGE.DUPLICATED_WINNING_NUMBER);
      return;
    }

    this.props.handleWinningNumber(this.state.numbers, bonusNumber);
  };

  setNumbers = numbers => {
    this.setState({ numbers });
  };

  handleChangeNumbers = pickedNumber => {
    const duplicatedNumber = this.state.numbers.find(
      number => number === pickedNumber,
    );
    const prevNumbers = this.state.numbers;

    const newNumbers = duplicatedNumber
      ? prevNumbers.filter(number => number !== pickedNumber)
      : [...prevNumbers, pickedNumber];

    if (newNumbers.length === LOTTO.BUNDLE_SIZE + 1) {
      alert(MESSAGE.EXCEEDED_LOTTO_COUNT);
      return;
    }

    this.setNumbers(newNumbers);
  };

  render() {
    const { numbers } = this.state;

    return (
      <WinningNumberSelectForm onSubmit={this.handleCheckWinningResult}>
        <h2>당첨번호 입력하기</h2>
        <p>당첨 번호 6개를 선택하고, 보너스 번호를 입력해주세요</p>
        <NumberList
          handleChangeNumbers={this.handleChangeNumbers}
          numbers={numbers}
        />
        <BonusNumberInput />

        <Button minWidth="70%">결과 확인하기</Button>
      </WinningNumberSelectForm>
    );
  }
}

export default WinningNumberForm;
