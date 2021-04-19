import React, { Component } from 'react';
import styled from 'styled-components';

import NumberList from './NumberList';
import BonusNumberInput from './BonusNumberInput';

const Form = styled.form`
  margin: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  border: 0.5px solid rgba(233, 226, 226, 0.3);
`;

const Title = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 1.5rem;
`;

const Button = styled.button`
  height: 36px;
  width: 70%;
  margin-top: 1.5rem;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;
  background-color: #c71f1f;
  border-color: #c71f1f;
  color: #fce9e9;
`;
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
      <Form onSubmit={this.handleCheckWinningResult}>
        <Title>당첨번호 입력하기</Title>
        <p>당첨 번호 6개를 선택하고, 보너스 번호를 입력해주세요</p>
        <NumberList setNumbers={this.setNumbers} numbers={this.state.numbers} />
        <BonusNumberInput />

        <Button>결과 확인하기</Button>
      </Form>
    );
  }
}

export default WinningNumberForm;
