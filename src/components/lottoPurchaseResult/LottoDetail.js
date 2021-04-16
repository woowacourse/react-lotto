import React, { Component } from 'react';
import styled from 'styled-components';

const LottoLi = styled.li`
  display: flex;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;

const LottoNumbersSpan = styled.span`
  font-size: 1.25rem;
  margin-left: 12px;
`;

class LottoDetail extends Component {
  render() {
    return (
      <LottoLi>
        <span>🎟️ </span>
        <LottoNumbersSpan>{this.props.lotto.join(' ')}</LottoNumbersSpan>
      </LottoLi>
    );
  }
}

export default LottoDetail;
