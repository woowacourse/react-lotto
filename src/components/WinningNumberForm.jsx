import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { LOTTO, MESSAGE, generateId, inputValidator, formValidator } from '../utils';
import NumberInput from './NumberInput';

const winningNumberInputIds = Array.from({ length: LOTTO.LENGTH }, generateId);
const bonusNumberInputId = generateId();

const initialInputs = Object.fromEntries([...winningNumberInputIds.map((id) => [id, '']), [bonusNumberInputId, '']]);
const initialValidateMessage = MESSAGE.REQUIRE_WINNING_NUMBER_INPUT;

const WinningNumberForm = (props) => {
  const [inputs, setInputs] = useState(initialInputs);
  const [validationMessage, setValidationMessage] = useState(initialValidateMessage);

  const inputValues = Object.values(inputs);
  const isFormValid = formValidator.isFormValid(inputValues);

  const setFormValidationMessage = (values, value) => {
    setValidationMessage(formValidator.getValidationMessage(values, value));
  };

  const handleInputFocus = ({ target: { value } }) => {
    setFormValidationMessage(inputValues, value);
  };

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    const newInputs = { ...inputs, [name]: value };
    const newInputValues = Object.values(newInputs);

    setInputs(newInputs);
    setFormValidationMessage(newInputValues, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const winningNumbers = winningNumberInputIds.map((id) => Number(inputs[id]));
    const bonusNumber = Number(inputs[bonusNumberInputId]);

    props.setWinningNumbers(winningNumbers);
    props.setBonusNumber(bonusNumber);
  };

  return (
    <>
      <h2 className="mb-3 mt-6 text-xl font-semibold">지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</h2>
      <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>
        <div className="flex justify-evenly w-full">
          <div className="flex flex-col">
            <h3 className="mb-3 mt-0 text-center text-lg font-semibold">당첨 번호</h3>
            <div className="flex mx-auto">
              {winningNumberInputIds.map((id) => (
                <NumberInput
                  key={id}
                  name={id}
                  value={inputs[id]}
                  isBonus={false}
                  isValid={inputValidator.isValidInputValue(inputValues, inputs[id])}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-3 mt-0 text-center text-lg font-semibold">보너스 번호</h3>
            <NumberInput
              key={bonusNumberInputId}
              name={bonusNumberInputId}
              value={inputs[bonusNumberInputId]}
              isBonus
              isValid={inputValidator.isValidInputValue(inputValues, inputs[bonusNumberInputId])}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </div>

        <div
          className={cx(
            isFormValid || validationMessage === MESSAGE.WINNING_NUMBER.REQUIRED_NEXT_INPUT
              ? 'text-blue-700'
              : 'text-rose-500',
            'mt-4 h-4 font-semibold'
          )}
        >
          {validationMessage}
        </div>
        <button
          type="submit"
          className="mt-5 px-4 py-2 w-11/12 text-white font-bold bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 rounded focus:outline-none focus:ring-1.5"
          disabled={!isFormValid}
        >
          결과 확인하기
        </button>
      </form>
    </>
  );
};

WinningNumberForm.propTypes = {
  setWinningNumbers: PropTypes.func.isRequired,
  setBonusNumber: PropTypes.func.isRequired,
};

export default WinningNumberForm;
