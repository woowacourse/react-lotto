import React, { Component } from 'react';

import { LottoItemLi, LottoNumbersSpan } from './LottoItem.style';

class LottoItem extends Component {
  render() {
    return (
      <LottoItemLi>
        <span>🎟️ </span>
        {this.props.lotto && (
          <LottoNumbersSpan>{this.props.lotto.join(' ')}</LottoNumbersSpan>
        )}
      </LottoItemLi>
    );
  }
}

export default LottoItem;
