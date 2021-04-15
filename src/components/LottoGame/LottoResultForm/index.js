import React, { Component } from 'react';
import { LOTTO_NUMBER_COUNT } from '../../../constants/standard';
import { isDuplicate, isValidRange } from '../../../utils/validator';
import { MESSAGE } from '../../../constants/messages';

export default class LottoResultForm extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const winningNumbers = Array(LOTTO_NUMBER_COUNT)
      .fill()
      .map((_, idx) => Number(event.target[`winning-${idx + 1}`].value));
    const bounusNumber = Number(event.target['bonus'].value);

    if (!isValidRange([...winningNumbers, bounusNumber])) {
      alert(MESSAGE.OUT_RANGED_LOTTO_NUMBERS);
      return;
    }

    if (isDuplicate([...winningNumbers, bounusNumber])) {
      alert(MESSAGE.DUPLICATED_LOTTO_NUMBERS);
      return;
    }

    this.props.setResultNumbers({ winningNumbers, bounusNumber });
  }

  render() {
    return (
      <form id="winning-number-input-form" className="mt-9" onSubmit={this.handleSubmit}>
        <div className="flex-auto d-inline-block mb-5">지난 주 당첨번호와 보너스 번호를 입력해주세요.</div>
        <div className="flex">
          <div>
            <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
            <div>
              <input name="winning-1" type="number" className="winning-number mx-1 text-center" required />
              <input name="winning-2" type="number" className="winning-number mx-1 text-center" required />
              <input name="winning-3" type="number" className="winning-number mx-1 text-center" required />
              <input name="winning-4" type="number" className="winning-number mx-1 text-center" required />
              <input name="winning-5" type="number" className="winning-number mx-1 text-center" required />
              <input name="winning-6" type="number" className="winning-number mx-1 text-center" required />
            </div>
          </div>
          <div className="bonus-number-container flex-grow">
            <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
            <div className="flex justify-center">
              <input name="bonus" type="number" className="bonus-number text-center" required />
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
