import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { LOTTO, MESSAGE } from '../utils/constants';
import WinningNumberInput from './WinningNumberInput';

const WinningNumberForm = (props) => {
  const { handleWinningNumbers, handleBonusNumber, isReset } = props;

  const [currentValue, setCurrentValue] = useState('');
  const [validationMessage, setValidationMessage] = useState(MESSAGE.REQUIRE_WINNING_NUMBER_INPUT);
  const [bonusNumberInputValue, setBonusNumberInputValue] = useState('');
  const [winningNumberInputValues, setWinningNumberInputValues] = useState(
    Array.from({ length: LOTTO.LENGTH }, () => '')
  );

  const resetState = () => {
    setValidationMessage(MESSAGE.REQUIRE_WINNING_NUMBER_INPUT);
    handleBonusNumber('');
    setWinningNumberInputValues(Array.from({ length: LOTTO.LENGTH }, () => ''));
  };

  const isValidInputValue = (value) => {
    return isNumberInRange(value) && isUniqueInputValue(value);
  };

  const isAllNumberInRange = (arr = [...winningNumberInputValues, bonusNumberInputValue]) => {
    return arr.every(isNumberInRange);
  };

  const hasUniqueInputValues = (arr = [...winningNumberInputValues, bonusNumberInputValue]) => {
    return new Set(arr).size === arr.length;
  };

  const isNumberInRange = (value) => {
    return LOTTO.MIN_NUMBER <= Number(value) && Number(value) <= LOTTO.MAX_NUMBER;
  };

  const isUniqueInputValue = (value) => {
    return (
      [...winningNumberInputValues, bonusNumberInputValue].filter((inputValue) => inputValue === value).length === 1
    );
  };

  const handleValidationMessage = (value) => {
    setValidationMessage(getValidationMessage(value));
  };

  const isFormValid = () => {
    return isAllNumberInRange() && hasUniqueInputValues();
  };

  const getValidationMessage = (value) => {
    switch (true) {
      case !isValidInputValue(value):
        return getInputValidationMessage(value);
      case !isFormValid():
        return getFormValidationMessage();
      default:
        return MESSAGE.WINNING_NUMBER.VALID_FORM;
    }
  };

  const getInputValidationMessage = (value) => {
    switch (true) {
      case value === '':
        return MESSAGE.WINNING_NUMBER.NON_NUMBER_VALUE;
      case !isUniqueInputValue(value):
        return MESSAGE.WINNING_NUMBER.DUPLICATED_NUMBERS;
      case !isNumberInRange(value):
        return MESSAGE.WINNING_NUMBER.OUT_OF_RANGE;
      default:
        return '';
    }
  };

  const getFormValidationMessage = () => {
    const inputValues = [...winningNumberInputValues, bonusNumberInputValue];
    const nonEmptyInputValues = inputValues.filter((inputValue) => inputValue !== '');

    switch (true) {
      case !hasUniqueInputValues(nonEmptyInputValues):
        return MESSAGE.WINNING_NUMBER.DUPLICATED_NUMBERS;
      case !isAllNumberInRange(nonEmptyInputValues):
        return MESSAGE.WINNING_NUMBER.OUT_OF_RANGE;
      case hasEmptyInputValues():
        return MESSAGE.WINNING_NUMBER.REQUIRED_NEXT_INPUT;
      default:
        return '';
    }
  };

  const hasEmptyInputValues = () => {
    const inputValues = [...winningNumberInputValues, bonusNumberInputValue];
    const nonEmptyInputValues = inputValues.filter((inputValue) => inputValue !== '');

    return nonEmptyInputValues.length < inputValues.length;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleWinningNumbers(winningNumberInputValues.map(Number));
    handleBonusNumber(Number(bonusNumberInputValue));
  };

  const handleWinningNumberInputChange = ({ target: { name, value } }) => {
    setWinningNumberInputValues(
      winningNumberInputValues.map((inputValue, index) => (name.includes(index) ? value : inputValue))
    );
    setCurrentValue(value);
  };

  const handleBonusNumberInputChange = ({ target: { value } }) => {
    setBonusNumberInputValue(value);
    setCurrentValue(value);
  };

  const handleInputFocus = ({ target: { value } }) => {
    setCurrentValue(value);
  };

  useEffect(() => {
    handleValidationMessage(currentValue);
  }, [currentValue]);

  useEffect(() => {
    if (isReset) {
      resetState();
    }
  }, [isReset]);

  return (
    <>
      <h2 className="text-xl font-semibold mb-3 mt-6">지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</h2>
      <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>
        <div className="flex justify-evenly w-full">
          <div className="flex flex-col">
            <h3 className="mt-0 mb-3 text-center font-semibold text-lg">당첨 번호</h3>
            <div className="flex mx-auto">
              {Array.from({ length: LOTTO.LENGTH }).map((_, index) => (
                <WinningNumberInput
                  key={index}
                  index={index}
                  isBonusInput={false}
                  winningNumberInputValues={winningNumberInputValues}
                  isValidInputValue={isValidInputValue}
                  handleWinningNumberInputChange={handleWinningNumberInputChange}
                  handleInputFocus={handleInputFocus}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col ">
            <h3 className="mt-0 mb-3 text-center font-semibold text-lg">보너스 번호</h3>
            <div className="flex justify-center">
              <label htmlFor="bonus-number" className="sr-only">
                보너스 번호
              </label>
              <input
                id="bonus-number"
                type="number"
                className={`border rounded appearance-textfield shadow mx-1 text-xl text-center w-14 h-14 focus:outline-none focus:shadow-outline focus:ring-1.5 ${
                  isValidInputValue(bonusNumberInputValue) ? 'ring-blue-700' : 'ring-rose-500'
                }`}
                value={bonusNumberInputValue}
                onChange={handleBonusNumberInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            isFormValid() || validationMessage === MESSAGE.WINNING_NUMBER.REQUIRED_NEXT_INPUT
              ? 'text-blue-700'
              : 'text-rose-500'
          } font-semibold h-4 mt-4`}
        >
          {validationMessage}
        </div>
        <button
          type="submit"
          className="font-bold mt-5 py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white w-11/12"
          disabled={!isFormValid()}
        >
          결과 확인하기
        </button>
      </form>
    </>
  );
};

export default WinningNumberForm;

WinningNumberForm.propTypes = {
  handleWinningNumbers: PropTypes.func.isRequired,
  handleBonusNumber: PropTypes.func.isRequired,
  isReset: PropTypes.bool.isRequired,
};
