import React, { Component } from 'react';

import LottoItem from './LottoItem';

import { LottoDetailListUl } from './styles/LottoDetailList.style';

class LottoDetailList extends Component {
  render() {
    const { lottos } = this.props;

    return (
      <LottoDetailListUl>
        {lottos.map((lotto, idx) => (
          <LottoItem key={idx} lotto={lotto} />
        ))}
      </LottoDetailListUl>
    );
  }
}
export default LottoDetailList;
