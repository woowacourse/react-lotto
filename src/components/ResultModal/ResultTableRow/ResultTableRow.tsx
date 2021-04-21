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
    return (
      <tr>
        <td>
          {this.props.match}개 {this.props.isBonus && '+ 보너스볼'}
        </td>
        <td>{getKRMoneyString(this.props.prize)}</td>
        <td>{this.props.matchCount}개</td>
      </tr>
    );
  }
}
