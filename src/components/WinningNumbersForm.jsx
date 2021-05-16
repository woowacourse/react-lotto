import React, { useState } from "react";
import { hasDuplicatedValue, isNumber, LOTTERY, MESSAGE } from "../utils";

const WinningNumbersForm = (props) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [winningNumberInputs, setWinningNumberInputs] = useState(
    Array(LOTTERY.NUMBER_COUNT).fill("")
  );
  const [bonusNumberInput, setBonusNumberInput] = useState("");
  const [errorInputMessage, setErrorInputMessage] = useState("");
  const { onWinningNumberSubmit } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputs = [...winningNumberInputs, bonusNumberInput];

    if (hasDuplicatedValue(inputs)) {
      setErrorInputMessage(MESSAGE.WINNING_NUMBERS_FORM.HAS_DUPLICATED_NUMBER);

      return;
    }

    setErrorInputMessage("");
    setIsSubmit(true);

    onWinningNumberSubmit(
      winningNumberInputs.map((input) => Number(input)),
      Number(bonusNumberInput)
    );
  };

  const handleWinningNumberChange = ({ target }) => {
    if (!isNumber(target.value)) {
      return;
    }

    if (target.value.length > LOTTERY.NUMBER_INPUT_MAX_LENGTH) {
      return;
    }

    const targetIndex = Number(target.dataset.index);
    const newWinningNumberInputs = winningNumberInputs.map((input, index) => {
      if (index !== targetIndex) {
        return input;
      }

      return target.value;
    });

    setWinningNumberInputs(newWinningNumberInputs);
  };

  const handleBonusNumberChange = ({ target }) => {
    if (!isNumber(target.value)) {
      return;
    }

    if (target.value.length > LOTTERY.NUMBER_INPUT_MAX_LENGTH) {
      return;
    }

    setBonusNumberInput(target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-9">
      <label className="flex-auto d-inline-block mb-3">
        지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
      </label>
      <div className="d-flex">
        <div>
          <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
          <div>
            {winningNumberInputs.map((value, index) => (
              <input
                key={index}
                onChange={handleWinningNumberChange}
                data-index={index}
                className="winning-number mx-1 text-center"
                type="text"
                value={value}
                min={LOTTERY.MIN_NUMBER}
                max={LOTTERY.MAX_NUMBER}
                required
                disabled={isSubmit}
              ></input>
            ))}
          </div>
        </div>
        <div className="bonus-number-container flex-grow">
          <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
          <div className="d-flex justify-center">
            <input
              className="bonus-number text-center"
              onChange={handleBonusNumberChange}
              type="text"
              value={bonusNumberInput}
              min={LOTTERY.MIN_NUMBER}
              max={LOTTERY.MAX_NUMBER}
              disabled={isSubmit}
              required
            />
          </div>
        </div>
      </div>
      <p className="mt-3">{errorInputMessage}</p>
      <button
        type="submit"
        className="open-result-modal-button mt-5 btn btn-cyan w-100"
      >
        결과 확인하기
      </button>
    </form>
  );
};

export default WinningNumbersForm;
