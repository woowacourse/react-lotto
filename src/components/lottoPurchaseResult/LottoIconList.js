import React, { Component } from 'react';
import LottoIcon from './LottoIcon';

class LottoIconList extends Component {
  getLottoIcons() {
    return Array.from({ length: this.props.lottoCount }, (_, idx) => (
      <LottoIcon key={idx} />
    ));
  }

  render() {
    return (
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {this.getLottoIcons()}
      </ul>
    );
  }
}

export default LottoIconList;
