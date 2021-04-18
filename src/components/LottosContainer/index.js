import React, { Component } from 'react';
import { Root, FlexContainer, LottoWrapper, LottoItem, LottoNumbers } from './style';

class LottosContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSwitchOn: false,
    };

    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    this.setState({ isSwitchOn: !this.state.isSwitchOn });
  }

  render() {
    const lottos = this.props.lottos.map((lotto, idx) => {
      return (
        <LottoItem key={idx}>
          💎 {this.state.isSwitchOn ? <LottoNumbers>{lotto.numbers.join(',')}</LottoNumbers> : null}
        </LottoItem>
      );
    });

    return (
      <Root>
        <FlexContainer>
          <span>총 {this.props.lottos.length}개를 구매하였습니다.</span>
          <div>
            <label>
              번호보기
              <input type="checkbox" checked={this.state.isSwitchOn} onChange={this.toggleDisplay} />
            </label>
          </div>
        </FlexContainer>
        <LottoWrapper isSwitchOn={this.state.isSwitchOn}>{lottos}</LottoWrapper>
      </Root>
    );
  }
}

export default LottosContainer;
