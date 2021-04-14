import React, { Component } from 'react';
import {
  Root,
  FlexContainer,
  TotalPurchase,
  SwitchWrapper,
  SwitchLabel,
  ToggleSwitch,
  LottoWrapper,
  LottoNumbers,
} from './style';

class LottosContainer extends Component {
  render() {
    const lottos = Array.from({ length: 5 }, (_, idx) => (
      <LottoWrapper key={idx}>
        💎
        <LottoNumbers>1, 2, 3, 4, 5, 6</LottoNumbers>
      </LottoWrapper>
    ));

    return (
      <Root>
        <FlexContainer>
          <TotalPurchase>총 5개를 구매하였습니다.</TotalPurchase>
          <SwitchWrapper>
            <SwitchLabel>번호보기</SwitchLabel>
            <ToggleSwitch type="checkbox" />
          </SwitchWrapper>
        </FlexContainer>
        <div>{lottos}</div>
      </Root>
    );
  }
}

export default LottosContainer;
