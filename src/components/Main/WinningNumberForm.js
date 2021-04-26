import { Component } from 'react';
import { ID, MESSAGE } from '../../constants';
import { isDuplicatedArray } from '../../utils';

export default class WinningNumberForm extends Component {
  onSubmitWinningNumberForm = (event) => {
    event.preventDefault();

    if (!this.props.lottoCount) {
      alert(MESSAGE.ALERT.LOTTO_NOT_EXIST);
      return;
    }

    const winningNumberInputs =
      event.target.elements[ID.MAIN.WINNING_NUMBER_FORM.WINNING_NUMBER_FIELDSET].elements;
    const winningNumbers = Array.from(winningNumberInputs).map(($input) => $input.valueAsNumber);
    const bonusNumberInput =
      event.target.elements[ID.MAIN.WINNING_NUMBER_FORM.BONUS_NUMBER_FIELDSET].elements;
    const [bonusNumber] = Array.from(bonusNumberInput).map(($input) => $input.valueAsNumber);

    if (isDuplicatedArray([...winningNumbers, bonusNumber])) {
      alert(MESSAGE.ALERT.DUPLICATED_WINNING_NUMBERS);
      return;
    }

    this.props.setWinningNumbers(winningNumbers);
    this.props.openModal();
  };

  onBonusNumberChange = (event) => {
    this.props.setBonusNumber(event.target.valueAsNumber);
  };

  onWinningNumberInputChange = (event) => {
    this.props.setWinningNumbers({
      ...this.props.winningNumbers,
      [event.target.dataset.key]: event.target.valueAsNumber,
    });
  };

  render() {
    return (
      <section className="w-100 mt-5">
        <form className="w-100 mt-1" onSubmit={this.onSubmitWinningNumberForm}>
          <label className="w-100">
            지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해 주세요.
            <div className="d-flex mt-3">
              <fieldset id="winning-number-fieldset" className="d-flex flex-col flex-auto">
                <legend className="text-center font-bold">당첨번호</legend>
                <div className="d-flex flex-row justify-space-between">
                  {Object.keys(this.props.winningNumbers).map((key) => (
                    <input
                      key={key}
                      data-key={key}
                      value={this.props.winningNumbers[key] || ''}
                      onChange={this.onWinningNumberInputChange}
                      type="number"
                      min="1"
                      max="45"
                      aria-label="winning-number"
                      required
                      className="winning-number-input"
                    />
                  ))}
                </div>
              </fieldset>
              <fieldset
                id="bonus-number-fieldset"
                className="d-flex flex-col justify-center items-center"
              >
                <legend className="text-center font-bold">보너스</legend>
                <input
                  type="number"
                  className="winning-number-input"
                  min="1"
                  max="45"
                  value={this.props.bonusNumber || ''}
                  onChange={this.onBonusNumberChange}
                  required
                />
              </fieldset>
            </div>
          </label>
          <button className="w-100 basic-button mt-3" type="submit">
            결과 확인하기
          </button>
        </form>
      </section>
    );
  }
}
