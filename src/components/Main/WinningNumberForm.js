import { MESSAGE } from '../../constants';
import { isDuplicatedArray } from '../../utils';
import { useState } from 'react';

export default function WinningNumberForm(props) {
  const [winningNumbersInput, setWinningNumbersInput] = useState({});
  const [bonusNumberInput, setBonusNumberInput] = useState(0);

  const onSubmitWinningNumberForm = (event) => {
    event.preventDefault();

    if (!props.lottoCount) {
      alert(MESSAGE.ALERT.LOTTO_NOT_EXIST);
      return;
    }

    if (isDuplicatedArray([...Object.values(winningNumbersInput), bonusNumberInput])) {
      alert(MESSAGE.ALERT.DUPLICATED_WINNING_NUMBERS);
      return;
    }

    props.openModal();
    props.setWinningNumbers(Object.values(winningNumbersInput));
    props.setBonusNumber(bonusNumberInput);
  };

  const onWinningNumberChange = (event) => {
    setWinningNumbersInput({
      ...winningNumbersInput,
      [event.target.name]: event.target.valueAsNumber,
    });
  };

  const onBonusNumberChange = (event) => {
    setBonusNumberInput(event.target.value);
  };

  return (
    <section className="w-100 mt-5">
      <form className="w-100 mt-1" onSubmit={onSubmitWinningNumberForm}>
        <label htmlFor="first-winning-number" className="w-100">
          지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해 주세요.
        </label>
        <div className="d-flex mt-3">
          <fieldset id="winning-number-fieldset" className="d-flex flex-col flex-auto">
            <legend className="text-center font-bold">당첨번호</legend>
            <div className="d-flex flex-row justify-space-between">
              <input
                type="number"
                min="1"
                max="45"
                id="first-winning-number"
                className="winning-number-input"
                name="first-winning-number"
                value={winningNumbersInput['first-winning-number'] || ''}
                onChange={onWinningNumberChange}
                required
              />
              <input
                type="number"
                min="1"
                max="45"
                aria-label="winning-number"
                className="winning-number-input"
                name="second-winning-number"
                value={winningNumbersInput['second-winning-number'] || ''}
                onChange={onWinningNumberChange}
                required
              />
              <input
                type="number"
                min="1"
                max="45"
                aria-label="winning-number"
                name="third-winning-number"
                value={winningNumbersInput['third-winning-number'] || ''}
                onChange={onWinningNumberChange}
                required
              />
              <input
                type="number"
                min="1"
                max="45"
                aria-label="winning-number"
                name="fourth-winning-number"
                value={winningNumbersInput['fourth-winning-number'] || ''}
                onChange={onWinningNumberChange}
                required
              />
              <input
                type="number"
                min="1"
                max="45"
                aria-label="winning-number"
                name="fifth-winning-number"
                value={winningNumbersInput['fifth-winning-number'] || ''}
                onChange={onWinningNumberChange}
                required
              />
              <input
                type="number"
                min="1"
                max="45"
                aria-label="winning-number"
                name="sixth-winning-number"
                value={winningNumbersInput['sixth-winning-number'] || ''}
                onChange={onWinningNumberChange}
                required
              />
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
              name="bonus-number"
              value={bonusNumberInput || ''}
              onChange={onBonusNumberChange}
              min="1"
              max="45"
              required
            />
          </fieldset>
        </div>
        <button className="w-100 basic-button mt-3" type="submit">
          결과 확인하기
        </button>
      </form>
    </section>
  );
}
