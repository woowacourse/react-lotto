import React, { Component } from 'react';
import {
  Root,
  FlexContainer,
  NumberInputGuide,
  NumbersContainer,
  NumberInputType,
  NumberInput,
  SubmitButton,
} from './style';

class WinningNumbersContainer extends Component {
  render() {
    return (
      <Root>
        <NumberInputGuide>지난 주 당첨번호 6개와 보너스번호 1개를 입력해주세요.</NumberInputGuide>
        <FlexContainer>
          <NumbersContainer>
            <NumberInputType>당첨번호</NumberInputType>
            <FlexContainer>
              <NumberInput />
              <NumberInput />
              <NumberInput />
              <NumberInput />
              <NumberInput />
              <NumberInput />
            </FlexContainer>
          </NumbersContainer>
          <NumbersContainer>
            <NumberInputType>보너스번호</NumberInputType>
            <NumberInput />
          </NumbersContainer>
        </FlexContainer>
        <SubmitButton>결과 확인하기</SubmitButton>
      </Root>
    );
  }
}

export default WinningNumbersContainer;
