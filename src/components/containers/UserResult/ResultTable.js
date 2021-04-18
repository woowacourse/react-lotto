/* eslint-disable react/no-array-index-key */
import { Component } from 'react';
import { getNumOfMatch } from './service';
import { LottoBall } from '../../shared';
import { RESULT_TABLE_DATA } from '../../../constants';

export default class ResultTable extends Component {
  render() {
    return (
      <div className="result-table-wrapper">
        <table className="result-table">
          <thead>
            <tr className="table-row">
              <th className="table-head">구분</th>
              <th className="table-head">번호</th>
            </tr>
          </thead>
          <tbody>
            {this.props.lottoBundle.map((v, i) => (
              <TableRow key={i} lotto={v} winningNumber={this.props.winningNumber} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class TableRow extends Component {
  render() {
    const { lotto, winningNumber } = this.props;
    const { winningNumbers, bonusNumber } = winningNumber;
    const numOfMatch = getNumOfMatch(lotto, winningNumber);

    return (
      <tr className="table-row">
        <td className="table-data">{RESULT_TABLE_DATA[numOfMatch].DESCRIPTION}</td>
        <td className="table-data">
          {lotto.map((v, i) => (
            <LottoBall
              key={i}
              targetNumber={v}
              winningNumbers={winningNumbers.concat(bonusNumber)}
            />
          ))}
        </td>
      </tr>
    );
  }
}
