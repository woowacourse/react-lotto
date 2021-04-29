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

  setIsToggled = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };

  render() {
    const { lottos } = this.props;
    const { isToggled } = this.state;

    return (
      <PurchaseResultSection aria-label="purchase-lotto">
        <PurchaseResultMessageDiv>
          <label>
            총 <span>{lottos.length}</span>개를 구매하였습니다.
          </label>
          <ToggleButton setIsToggled={this.setIsToggled} />
        </PurchaseResultMessageDiv>

        {isToggled ? (
          <LottoDetailList lottos={lottos} />
        ) : (
          <LottoIconList lottoCount={lottos.length} />
        )}
      </PurchaseResultSection>
    );
  }
}

export default PurchaseResult;
