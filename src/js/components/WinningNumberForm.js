import React, { Component } from 'react';
import WinningNumberInput from './WinningNumberInput';
import { LOTTO } from '../constants/lottoData';

const INPUT_LABEL = {
  WINNING_NUMBERS: [
    '첫 번째 당첨번호',
    '두 번째 당첨번호',
    '세 번째 당첨번호',
    '네 번째 당첨번호',
    '다섯 번째 당첨번호',
    '여섯 번째 당첨번호',
  ],
  BONUS_NUMBER: '보너스 당첨번호',
};

export default class WinningNumberForm extends Component {
  render() {
    return (
      <section className="WinningNumberForm">
        <h2>당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</h2>
        <form>
          <section>
            <h3>당첨 번호</h3>
            <ul>
              {INPUT_LABEL.WINNING_NUMBERS.map((label) => (
                <li key={label}>
                  <WinningNumberInput min={LOTTO.MIN_NUMBER} max={LOTTO.MAX_NUMBER} inputLabel={label} />
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3>보너스 번호</h3>
            <WinningNumberInput min={LOTTO.MIN_NUMBER} max={LOTTO.MAX_NUMBER} inputLabel={INPUT_LABEL.BONUS_NUMBER} />
          </section>
          <button>결과 확인하기</button>
        </form>
      </section>
    );
  }
}
