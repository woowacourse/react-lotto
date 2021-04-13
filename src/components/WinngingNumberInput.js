import React, { Component } from 'react';

export default class WinningNumberInput extends Component {
  render() {
    return (
      <section>
        <h2>당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</h2>
        <form>
          <section>
            <h3>당첨 번호</h3>
            <ul>
              <li>
                <label>
                  <span>첫 번째 당첨번호</span>
                  <input type="number" min="1" max="45" required />
                </label>
              </li>
              <li>
                <label>
                  <span>두 번째 당첨번호</span>
                  <input type="number" min="1" max="45" required />
                </label>
              </li>
              <li>
                <label>
                  <span>세 번째 당첨번호</span>
                  <input type="number" min="1" max="45" required />
                </label>
              </li>
              <li>
                <label>
                  <span>네 번째 당첨번호</span>
                  <input type="number" min="1" max="45" required />
                </label>
              </li>
              <li>
                <label>
                  <span>다섯 번째 당첨번호</span>
                  <input type="number" min="1" max="45" required />
                </label>
              </li>
              <li>
                <label>
                  <span>여섯 번째 당첨번호</span>
                  <input type="number" min="1" max="45" required />
                </label>
              </li>
            </ul>
          </section>
          <section>
            <h3>보너스 번호</h3>
            <label>
              <span>보너스 번호 </span>
              <input type="number" min="1" max="45" required />
            </label>
          </section>

          <button>결과 확인하기</button>
        </form>
      </section>
    );
  }
}
