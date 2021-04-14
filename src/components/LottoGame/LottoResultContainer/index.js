import React, { Component } from 'react';

class WinningScoreItem extends Component {
  render() {
    return (
      <tr className="text-center">
        <td className="p-3">3개</td>
        <td className="p-3">5,000</td>
        <td className="result-modal__rank-count p-3">n개</td>
      </tr>
    );
  }
}

export default class LottoResultContainer extends Component {
  render() {
    return (
      <>
        <h2 className="text-center">🏆 당첨 통계 🏆</h2>

        <div className="d-flex justify-center">
          <table className="border-collapse border border-black">
            <thead>
              <tr className="text-center">
                <th className="p-3">일치 갯수</th>
                <th className="p-3">당첨금</th>
                <th className="p-3">당첨 갯수</th>
              </tr>
            </thead>
            <tbody>
              <WinningScoreItem />
            </tbody>
          </table>
        </div>

        <p id="result-modal__total-yield" className="text-center font-bold">
          당신의 총 수익률은 %입니다.
        </p>

        <div className="d-flex justify-center mt-5">
          <button type="button" className="result-modal__restart-button btn btn-cyan">
            다시 시작하기
          </button>
        </div>
      </>
    );
  }
}
