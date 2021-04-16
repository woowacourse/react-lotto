import React, { Component } from "react";
import { PRIZE } from "../utils";

class WinningResultModal extends Component {
  render() {
    const { rankCount, earningRate } = this.props.winningResult;

    return (
      <div className={`modal ${this.props.isModalOpen ? "open" : ""}`}>
        <div className="modal-inner p-10">
          <div className="modal-close" onClick={this.props.closeModal}>
            <svg viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </div>

          <h2 className="text-center">🏆 당첨 통계 🏆</h2>
          <div className="d-flex justify-center">
            <table className="result-table border-collapse border border-black">
              <thead>
                <tr className="text-center">
                  <th className="p-3">일치 갯수</th>
                  <th className="p-3">당첨금</th>
                  <th className="p-3">당첨 갯수</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="p-3">{PRIZE.FIFTH.WINNING_COUNT}개</td>
                  <td className="p-3">5,000</td>
                  <td className="modal__winning-count p-3" data-rank="fifth">
                    {rankCount[PRIZE.FIFTH.RANK]}개
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">{PRIZE.FOURTH.WINNING_COUNT}개</td>
                  <td className="p-3">50,000</td>
                  <td className="modal__winning-count p-3" data-rank="fourth">
                    {rankCount[PRIZE.FOURTH.RANK]}개
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">{PRIZE.THIRD.WINNING_COUNT}개</td>
                  <td className="p-3">1,500,000</td>
                  <td className="modal__winning-count p-3" data-rank="third">
                    {rankCount[PRIZE.THIRD.RANK]}개
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">
                    {PRIZE.SECOND.WINNING_COUNT}개 + 보너스볼
                  </td>
                  <td className="p-3">30,000,000</td>
                  <td className="modal__winning-count p-3" data-rank="second">
                    {rankCount[PRIZE.SECOND.RANK]}개
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">{PRIZE.FIRST.WINNING_COUNT}개</td>
                  <td className="p-3">2,000,000,000</td>
                  <td className="modal__winning-count p-3" data-rank="first">
                    {rankCount[PRIZE.FIRST.RANK]}개
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="modal__earning-rate text-center font-bold">
            당신의 총 수익률은 {earningRate}%입니다.
          </p>
          <div className="d-flex justify-center mt-5">
            <button
              type="button"
              className="modal__restart-button btn btn-cyan"
              onClick={this.props.resetApp}
            >
              다시 시작하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WinningResultModal;
