import { Component } from 'react';

export default class WinningNumberForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="w-100 mt-5">
        <form className="w-100 mt-1">
          <label htmlFor="first-winning-number" className="w-100">
            지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해 주세요
          </label>
          <div className="d-flex mt-3">
            <fieldset className="d-flex flex-col flex-auto">
              <legend className="text-center font-bold">당첨번호</legend>
              <div className="d-flex flex-row justify-space-between">
                <input
                  type="number"
                  min="1"
                  max="45"
                  id="first-winning-number"
                  className="winning-number-input"
                  required
                />
                <input
                  type="number"
                  min="1"
                  max="45"
                  aria-label="winning-number"
                  required
                  className="winning-number-input"
                />
                <input
                  type="number"
                  min="1"
                  max="45"
                  aria-label="winning-number"
                  required
                  className="winning-number-input"
                />
                <input
                  type="number"
                  min="1"
                  max="45"
                  aria-label="winning-number"
                  required
                  className="winning-number-input"
                />
                <input
                  type="number"
                  min="1"
                  max="45"
                  aria-label="winning-number"
                  required
                  className="winning-number-input"
                />
                <input
                  type="number"
                  min="1"
                  max="45"
                  aria-label="winning-number"
                  required
                  className="winning-number-input"
                />
              </div>
            </fieldset>
            <fieldset className="d-flex flex-col justify-center items-center">
              <legend className="text-center font-bold">보너스</legend>
              <input type="number" className="winning-number-input" min="1" max="45" required />
            </fieldset>
          </div>
          <button className="w-100 basic-button mt-3" type="submit">
            결과 확인하기
          </button>
        </form>
      </section>
    );
  }
}
