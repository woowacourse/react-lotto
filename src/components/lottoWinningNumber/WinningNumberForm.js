import React, { Component } from 'react';
import styled from 'styled-components';

const NumberInputText = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  text-align: center;
  font-weight: bold;
`;

const NumberInput = styled.input`
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  text-align: center;
  width: 30px;
  height: 36px;
`;

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
  render() {
    return (
      <form style={{ margin: '3rem 0.5rem' }}>
        <label style={{ display: 'inline-block', marginBottom: '0.2rem' }}>
          지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
        </label>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <NumberInputText>당첨 번호</NumberInputText>
            <div>
              <NumberInput
                type="number"
                aria-label="winning number 1"
                required
                min="1"
                max="45"
              />
              <NumberInput
                type="number"
                aria-label="winning number 2"
                required
                min="1"
                max="45"
              />
              <NumberInput
                type="number"
                aria-label="winning number 3"
                required
                min="1"
                max="45"
              />
              <NumberInput
                type="number"
                aria-label="winning number 4"
                required
                min="1"
                max="45"
              />
              <NumberInput
                type="number"
                aria-label="winning number 5"
                required
                min="1"
                max="45"
              />
              <NumberInput
                type="number"
                aria-label="winning number 6"
                required
                min="1"
                max="45"
              />
            </div>
          </div>

          <div>
            <NumberInputText>보너스 번호</NumberInputText>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NumberInput
                type="number"
                aria-label="winning number bounus"
                required
                min="1"
                max="45"
              />
            </div>
          </div>
        </div>

        <Button>결과 확인하기</Button>
      </form>
    );
  }
}

export default WinningNumberForm;
