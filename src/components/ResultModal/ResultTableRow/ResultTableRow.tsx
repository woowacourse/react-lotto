import React, { Component } from 'react';
import { getKRMoneyString } from '../../../utils/format';

type ResultTableRowProps = {
  match: number;
  prize: number;
  matchCount: number;
  isBonus?: boolean;
};

export default class ResultTableRow extends Component<ResultTableRowProps> {
  render() {
    const { match, isBonus, matchCount, prize } = this.props;

    return (
      <tr>
        <td>
          {match}개 {isBonus && '+ 보너스볼'}
        </td>
        <td>{getKRMoneyString(prize)}</td>
        <td>{matchCount}개</td>
      </tr>
    );
  }
}
