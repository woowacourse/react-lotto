/* eslint-disable react/no-array-index-key */
import { Component } from 'react';
import { getNumOfMatch } from './service';
import { LottoBall } from '../../shared';
import { RESULT_TABLE_DATA } from '../../../constants';

export default class ResultTable extends Component {
  render() {
    return (
      <div className="ResultTable">
        <table className="ResultTable__table">
          <thead>
            <tr className="ResultTable__row">
              <th className="ResultTable__head">구분</th>
              <th className="ResultTable__head">번호</th>
            </tr>
          </thead>
          <tbody>
            {this.props.lottoBundle.map((v, i) => (
              <ResultTableRow key={i} lotto={v} winningNumber={this.props.winningNumber} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class ResultTableRow extends Component {
  render() {
    const { lotto, winningNumber } = this.props;
    const { winningNumbers, bonusNumber } = winningNumber;
    const numOfMatch = getNumOfMatch(lotto, winningNumber);

    return (
      <tr className="ResultTable__row">
        <td className="ResultTable__data">{RESULT_TABLE_DATA[numOfMatch].DESCRIPTION}</td>
        <td className="ResultTable__data">
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
