import { Component } from 'react';

export default class WinningNumberForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <label htmlFor="first-winning-number">
          지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해 주세요
        </label>
        <fieldset>
          <legend>당첨번호</legend>
          <input type="number" min="1" max="45" id="first-winning-number" required />
          <input type="number" min="1" max="45" aria-label="winning-number" required />
          <input type="number" min="1" max="45" aria-label="winning-number" required />
          <input type="number" min="1" max="45" aria-label="winning-number" required />
          <input type="number" min="1" max="45" aria-label="winning-number" required />
          <input type="number" min="1" max="45" aria-label="winning-number" required />
        </fieldset>
        <fieldset>
          <legend>보너스</legend>
          <input type="number" min="1" max="45" required />
        </fieldset>
        <button type="submit">결과 확인하기</button>
      </form>
    );
  }
}
