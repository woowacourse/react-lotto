import React, { Component } from 'react';
import styled from 'styled-components';

import LottoIconList from './LottoIconList';
import PurchaseCountMessage from './PurchaseCountMessage';
import ToggleButton from './ToggleButton';

const PurchaseResultSection = styled.section`
  margin: 2rem 0.5rem 0.5rem;
`;

const PurchaseResultMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class PurchaseResult extends Component {
  render() {
    return (
      <PurchaseResultSection aria-label="purchase-lotto">
        <PurchaseResultMessageWrapper>
          <PurchaseCountMessage />
          <ToggleButton />
        </PurchaseResultMessageWrapper>

        <LottoIconList />
      </PurchaseResultSection>
    );
  }
}

export default PurchaseResult;
