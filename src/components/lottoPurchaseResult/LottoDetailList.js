import React, { Component } from 'react';
import LottoDetail from './LottoDetail';

class LottoDetailList extends Component {
  render() {
    const { lottos } = this.props;

    return (
      <ul
        style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}
      >
        {lottos.map((lotto, idx) => (
          <LottoDetail key={idx} lotto={lotto} />
        ))}
      </ul>
    );
  }
}
export default LottoDetailList;
