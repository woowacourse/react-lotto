import React, { Component } from 'react';
import LottoIcon from './LottoIcon';

class LottoIconList extends Component {
  render() {
    return (
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        <LottoIcon />
        <LottoIcon />
        <LottoIcon />
        <LottoIcon />
        <LottoIcon />
        <LottoIcon />
        <LottoIcon />
      </ul>
    );
  }
}

export default LottoIconList;
