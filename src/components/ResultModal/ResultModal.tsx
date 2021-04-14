import React, { Component } from 'react';
import Modal from '../../common/Modal';

type ResultModalProps = {
  open?: boolean;
};

export default class ResultModal extends Component<ResultModalProps> {
  render() {
    return (
      <Modal open={this.props.open}>
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
                <td className="p-3">3개</td>
                <td className="p-3">5,000</td>
                <td id="fifth" className="p-3">
                  n개
                </td>
              </tr>
              <tr className="text-center">
                <td className="p-3">4개</td>
                <td className="p-3">50,000</td>
                <td id="fourth" className="p-3">
                  n개
                </td>
              </tr>
              <tr className="text-center">
                <td className="p-3">5개</td>
                <td className="p-3">1,500,000</td>
                <td id="third" className="p-3">
                  n개
                </td>
              </tr>
              <tr className="text-center">
                <td className="p-3">5개 + 보너스볼</td>
                <td className="p-3">30,000,000</td>
                <td id="second" className="p-3">
                  n개
                </td>
              </tr>
              <tr className="text-center">
                <td className="p-3">6개</td>
                <td className="p-3">2,000,000,000</td>
                <td id="first" className="p-3">
                  n개
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p id="profit" className="text-center font-bold"></p>
        <div className="d-flex justify-center mt-5">
          <button id="reset" type="reset" className="btn btn-cyan">
            다시 시작하기
          </button>
        </div>
      </Modal>
    );
  }
}
