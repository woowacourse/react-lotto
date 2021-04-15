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
  constructor(props) {
    super(props);
  }

  render() {
    const lottos = this.props.lottos.map((lotto, idx) => {
      return (
        <LottoWrapper key={idx}>
          💎
          <LottoNumbers>{lotto.numbers.join(',')}</LottoNumbers>
        </LottoWrapper>
      );
    });

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
