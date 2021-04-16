import React, { Component } from 'react';
import { HIT_COUNT_BY_RANK, PROFITS } from '../../../constants/standard';

class RankCountItem extends Component {
  render() {
    return (
      <tr className="text-center">
        <td className="p-3">{HIT_COUNT_BY_RANK[this.props.rank]}</td>
        <td className="p-3">{PROFITS[this.props.rank]}</td>
        <td className="result-modal__rank-count p-3">{this.props.rankCount}</td>
      </tr>
    );
  }
}

export default class LottoResultContainer extends Component {
  render() {
    return (
      <>
        <h2 className="text-center">🏆 당첨 통계 🏆</h2>

        <div className="flex justify-center">
          <table className="border-collapse border border-black">
            <thead>
              <tr className="text-center">
                <th className="p-3">일치 갯수</th>
                <th className="p-3">당첨금</th>
                <th className="p-3">당첨 갯수</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(this.props.lottoResult.rankCount).map(([rank, rankCount]) => (
                <RankCountItem rank={rank} rankCount={rankCount} key={rank} />
              ))}
            </tbody>
          </table>
        </div>

        <p id="result-modal__total-yield" className="text-center font-bold">
          당신의 총 수익률은 {this.props.lottoResult.earningRate}%입니다.
        </p>

        <div className="flex justify-center mt-5">
          <button type="button" className="result-modal__restart-button btn btn-cyan" onClick={this.props.restartGame}>
            다시 시작하기
          </button>
        </div>
      </>
    );
  }
}
