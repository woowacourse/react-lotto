import React, { Component } from 'react';

import LottoIcon from './LottoItem';

import { LottoIconListUl } from './LottoIconList.style';
class LottoIconList extends Component {
  getLottoIcons() {
    return Array.from({ length: this.props.lottoCount }, (_, idx) => (
      <LottoIcon key={idx} />
    ));
  }

  render() {
    return <LottoIconListUl>{this.getLottoIcons()}</LottoIconListUl>;
  }
}

export default LottoIconList;
