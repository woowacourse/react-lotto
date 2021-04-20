import React, { Component } from 'react';
import { formatMoney } from '../utils';

class PrizeTableInfo extends Component {
  render() {
    const { winningCount, money, count } = this.props;

    return (
      <tr className="text-center">
        <td className="p-3">{`${winningCount}`}</td>
        <td className="p-3">{formatMoney(money)}</td>
        <td className="modal__winning-count p-3">{count}</td>
      </tr>
    );
  }
}

export default PrizeTableInfo;
