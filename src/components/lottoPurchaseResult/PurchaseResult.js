import React, { Component } from 'react';

import LottoIconList from './LottoIconList';
import LottoDetailList from './LottoDetailList';

import ToggleButton from '../ToggleButton/ToggleButton';

import Flex from '../commons/Flex/Flex';

import { PurchaseResultSection } from './styles/PurchaseResult.style';

class PurchaseResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowNumbers: false,
    };
  }

  setIsShowNumbers = () => {
    this.setState({ isShowNumbers: !this.state.isShowNumbers });
  };

  render() {
    const { lottos } = this.props;
    const { isShowNumbers } = this.state;

    return (
      <PurchaseResultSection aria-label="purchase-lotto">
        <Flex justifyContent="space-between" alignItems="center">
          <label>
            총 <span>{lottos.length}</span>개를 구매하였습니다.
          </label>
          <ToggleButton setIsShowNumbers={this.setIsShowNumbers} />
        </Flex>

        {isShowNumbers ? (
          <LottoDetailList lottos={lottos} />
        ) : (
          <LottoIconList lottoCount={lottos.length} />
        )}
      </PurchaseResultSection>
    );
  }
}

export default PurchaseResult;
