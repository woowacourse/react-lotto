import React, { Component } from 'react';
import {
  Root,
  FlexContainer,
  TotalPurchase,
  SwitchWrapper,
  SwitchLabel,
  ToggleSwitch,
  LottoWrapper,
  LottoItem,
  LottoNumbers,
} from './style';

class LottosContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lottos = this.props.lottos.map((lotto, idx) => {
      return (
        <LottoItem key={idx}>
          💎 {this.props.isSwitchOn ? <LottoNumbers>{lotto.numbers.join(',')}</LottoNumbers> : null}
        </LottoItem>
      );
    });

    return (
      <Root>
        <FlexContainer>
          <TotalPurchase>총 {this.props.lottos.length}개를 구매하였습니다.</TotalPurchase>
          <SwitchWrapper>
            <SwitchLabel>번호보기</SwitchLabel>
            <ToggleSwitch type="checkbox" checked={this.props.isSwitchOn} onChange={this.props.onToggleDisplay} />
          </SwitchWrapper>
        </FlexContainer>
        <LottoWrapper isSwitchOn={this.props.isSwitchOn}>{lottos}</LottoWrapper>
      </Root>
    );
  }
}

export default LottosContainer;
