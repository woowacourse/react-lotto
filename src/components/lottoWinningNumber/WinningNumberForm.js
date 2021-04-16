import React, { Component } from 'react';
import styled from 'styled-components';

import BonusNumberInput from './BonusNumberInput';
import WinningNumberList from './WinningNumberList';

const Button = styled.button`
  height: 36px;
  width: 100%;
  margin-top: 1rem;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;
  background-color: #00bcd4;
  border-color: #00bcd4;
`;

class WinningNumberForm extends Component {
  handleCheckWinningResult = e => {
    e.preventDefault();
  };

  handleTypeLottoNumber = e => {};

  render() {
    return (
      <form
        style={{ margin: '3rem 0.5rem' }}
        onSubmit={this.handleCheckWinningResult}
      >
        <label style={{ display: 'inline-block', marginBottom: '0.2rem' }}>
          지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
        </label>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <WinningNumberList />
          <BonusNumberInput />
        </div>

        <Button>결과 확인하기</Button>
      </form>
    );
  }
}

export default WinningNumberForm;
