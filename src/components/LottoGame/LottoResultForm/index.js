import React, { Component } from 'react';

export default class LottoResultForm extends Component {
  render() {
    return (
      <form id="winning-number-input-form" className="mt-9 d-none">
        <div className="flex-auto d-inline-block mb-5">지난 주 당첨번호와 보너스 번호를 입력해주세요.</div>
        <div className="flex">
          <div>
            <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
            <div>
              <input type="number" className="winning-number mx-1 text-center" required />
              <input type="number" className="winning-number mx-1 text-center" required />
              <input type="number" className="winning-number mx-1 text-center" required />
              <input type="number" className="winning-number mx-1 text-center" required />
              <input type="number" className="winning-number mx-1 text-center" required />
              <input type="number" className="winning-number mx-1 text-center" required />
            </div>
          </div>
          <div className="bonus-number-container flex-grow">
            <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
            <div className="flex justify-center">
              <input type="number" className="bonus-number text-center" required />
            </div>
          </div>
        </div>
        <button type="submit" id="winning-number-input-form__button" className="mt-5 btn btn-cyan w-full">
          결과 확인하기
        </button>
      </form>
    );
  }
}
