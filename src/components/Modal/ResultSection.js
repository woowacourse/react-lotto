import { Component } from 'react';
import { LOTTO_VALUE } from '../../constants';
export default class ResultSection extends Component {
  rankKey = ['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH'];

  render() {
    return (
      <table className="mt-3">
        <tbody>
          <tr>
            <th className="p-2">일치 갯수</th>
            <th className="p-2">당첨금</th>
            <th className="p-2">당첨 갯수</th>
          </tr>
          {this.rankKey.map((key) => (
            <tr className="text-center" key={key}>
              <td className="p-2">{LOTTO_VALUE.WINNING_CONDITION_TEXT[key]}</td>
              <td className="p-2">{LOTTO_VALUE.WINNING_PRIZE[key].toLocaleString()}</td>
              <td className="p-2">
                <span>{this.props.winningCounts[LOTTO_VALUE.RANK[key]]}</span>개
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
