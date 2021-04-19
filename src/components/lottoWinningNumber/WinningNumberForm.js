import React, { Component } from 'react';

import NumberList from './NumberList';
import BonusNumberInput from './BonusNumberInput';
import Button from '../utils/Button';

import { WinningNumberSelectForm } from './WinningNumberForm.style';
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

    if (this.state.numbers.length !== 6) {
      alert('6개의 번호를 선택해주세요');
      return;
    }

    if (this.state.numbers.includes(bonusNumber)) {
      alert('보너스 번호는 중복된 번호입니다.');
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

        <Button size="70%">결과 확인하기</Button>
      </WinningNumberSelectForm>
    );
  }
}

export default WinningNumberForm;
