import React, { Component } from 'react';

import NumberList from './NumberList';
import BonusNumberInput from './BonusNumberInput';

import Button from '../utils/Button';

import { LOTTO } from '../../constants/lotto';
import { MESSAGE } from '../../constants/messages';

import { WinningNumberSelectForm } from './WinningNumberForm.style';
import { CSS_ATTRIBUTE } from '../../constants/cssAttribute';

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

    this.props.setWinningNumbers(this.state.numbers, bonusNumber);
    this.props.setIsModalOpened(true);
  };

  setNumbers = numbers => {
    this.setState({ numbers });
  };

  pickNumber = number => {
    const newNumbers = [...this.state.numbers, number];

    this.setNumbers({ numbers: newNumbers });
  };

  render() {
    return (
      <WinningNumberSelectForm onSubmit={this.handleCheckWinningResult}>
        <h2>당첨번호 입력하기</h2>
        <p>당첨 번호 6개를 선택하고, 보너스 번호를 입력해주세요</p>
        <NumberList setNumbers={this.setNumbers} numbers={this.state.numbers} />
        <BonusNumberInput />

        <Button size={CSS_ATTRIBUTE.RESULT_BUTTON_WIDTH}>결과 확인하기</Button>
      </WinningNumberSelectForm>
    );
  }
}

export default WinningNumberForm;
