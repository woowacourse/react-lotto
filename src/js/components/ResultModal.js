import React, { Component } from 'react';
import './ResultModal.scss';

export default class ResultModal extends Component {
  render() {
    return (
      <section className="ResultModal" role="dialog">
        <div className="modal-inner">
          <div className="modal-close">
            <svg viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </div>

          <h2>🏆 당첨 통계 🏆</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>일치 갯수</th>
                  <th>당첨금</th>
                  <th>당첨 갯수</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3개</td>
                  <td>5,000</td>
                  <td>n개</td>
                </tr>
                <tr>
                  <td>4개</td>
                  <td>50,000</td>
                  <td>n개</td>
                </tr>
                <tr>
                  <td>5개</td>
                  <td>1,500,000</td>
                  <td>n개</td>
                </tr>
                <tr>
                  <td>5개 + 보너스볼</td>
                  <td>30,000,000</td>
                  <td>n개</td>
                </tr>
                <tr>
                  <td>6개</td>
                  <td>2,000,000,000</td>
                  <td>n개</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="rate-of-return-message">당신의 총 수익률은 %입니다.</p>
          <button className="restart-btn" type="reset">
            다시 시작하기
          </button>
        </div>
      </section>
    );
  }
}
