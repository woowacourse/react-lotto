import React, { Component } from 'react';

import LottoIconList from './LottoIconList';
import LottoDetailList from './LottoDetailList';
import ToggleButton from './ToggleButton';

import {
  PurchaseResultSection,
  PurchaseResultMessageDiv,
} from './PurchaseResult.style';

class PurchaseResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false,
    };
  }

  setIsToggled = isToggled => {
    this.setState({
      isToggled,
    });
  };

  render() {
    const { isToggled } = this.state;

    return (
      <PurchaseResultSection aria-label="purchase-lotto">
        <PurchaseResultMessageDiv>
          <label>
            총 <span>{this.props.lottos.length}</span>개를 구매하였습니다.
          </label>
          <ToggleButton setIsToggled={this.setIsToggled} />
        </PurchaseResultMessageDiv>

        {isToggled ? (
          <LottoDetailList lottos={this.props.lottos} />
        ) : (
          <LottoIconList lottoCount={this.props.lottos.length} />
        )}
      </PurchaseResultSection>
    );
  }
}

export default PurchaseResult;
