import React, { Component } from 'react';
import { WinningNumberInputWrapper } from './WinningNumberInput.styles';
import Input from '../../common/Input';
import { Wrapper } from '../../common/Wrapper';

// type WinningNumberInputProps = {};

export default class WinningNumberInput extends Component {
  render() {
    return (
      <WinningNumberInputWrapper>
        <label className="input-label">당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label>
        <Wrapper display="flex">
          <div>
            <h4 className="input-caption">당첨 번호</h4>
            <Wrapper display="flex">
              <Input type="number" name="first" required />
              <Input type="number" name="second" required />
              <Input type="number" name="third" required />
              <Input type="number" name="fourth" required />
              <Input type="number" name="fifth" required />
              <Input type="number" name="sixth" required />
            </Wrapper>
          </div>
          <div>
            <h4 className="input-caption">보너스 번호</h4>
            <Wrapper display="flex">
              <Input type="number" name="bonus" required />
            </Wrapper>
          </div>
        </Wrapper>
      </WinningNumberInputWrapper>
    );
  }
}
