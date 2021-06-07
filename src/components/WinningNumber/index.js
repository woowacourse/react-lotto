import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import NumberInput from '../@util-components/NumberInput/index';
import Button from '../@util-components/Button/index';
import { BONUS_BALL_LENGTH, LOTTERY_BALL_LENGTH } from '../../constants/number';
import './style.scss';

const WinningNumber = ({ onHandleSubmit, onModalButtonClick }) => {
  const [currentInputIndex, setCurrentInputIndex] = useState(0);
  const [winningNumberInputs, setWinningNumberInputs] = useState(
    Array(LOTTERY_BALL_LENGTH + BONUS_BALL_LENGTH).fill(0)
  );

  const onWinningNumberSubmit = (e) => {
    e.preventDefault();

    const winningNumbers = [];
    const { target } = e;
    target
      .querySelectorAll('.winning-number')
      .forEach((input) => winningNumbers.push(Number(input.value)));

    const bonusNumber = Number(target.querySelector('.bonus-number').value);

    onHandleSubmit(winningNumbers, bonusNumber);
    onModalButtonClick();
  };

  // TODO: 확인
  const isInputValueChanged = (currentInputValue, inputValue) => currentInputValue === inputValue;

  const isInputValueExist = (inputValue) => !!inputValue;

  const isInputValueDuplicated = (winningNumberInputs, inputValue, index) => {
    const currentIndex = winningNumberInputs.findIndex((el) => el === inputValue);

    return currentIndex !== -1 && currentIndex !== index;
  };

  const onChangeWinningNumber = (e, index) => {
    const inputValue = Number(e.target.value.slice(0, 2));

    const newWinningNumberInputs = [winningNumberInputs];
    newWinningNumberInputs[index] = inputValue;

    if (!isInputValueExist(inputValue)) {
      setWinningNumberInputs(newWinningNumberInputs);
      setCurrentInputIndex(index);

      return;
    }

    if (isInputValueDuplicated(winningNumberInputs, inputValue, index)) {
      alert('입력값이 중복되었습니다.');
      e.target.value = '';
      e.target.focus();

      return;
    }

    setWinningNumberInputs(newWinningNumberInputs);
    setCurrentInputIndex(index + 1);
  };

  const onChangeInputNumber = (e, index) => {
    let inputValue = e.target.value;
    const newWinningNumberInputs = [...winningNumberInputs];

    if (inputValue.length > 2) {
      inputValue = Number(inputValue.slice(0, 2));
    }

    newWinningNumberInputs.splice(index, 1, inputValue);

    setWinningNumberInputs(newWinningNumberInputs);
    setCurrentInputIndex(index);
  };

  return (
    <form onSubmit={onWinningNumberSubmit}>
      <div className='winning-number-form'>
        {[...winningNumberInputs].map((number, index) => {
          return (
            <NumberInput
              isCurrentInput={currentInputIndex === index}
              min='1'
              max='45'
              key={uuidv4()}
              customClass={
                index < winningNumberInputs.length - 1 ? 'winning-number' : 'bonus-number'
              }
              defaultValue={number ? number : ''}
              onInputChange={(e) => onChangeInputNumber(e, index)}
              // onInputFocusOut={(e) => onChangeWinningNumber(e, index)}
            />
          );
        })}
      </div>
      <Button buttonText='결과 확인하기' />
    </form>
  );
};

WinningNumber.propTypes = {
  onHandleSubmit: PropTypes.func,
  onModalButtonClick: PropTypes.func,
};

export default WinningNumber;
