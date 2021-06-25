import './style.scss';

import {
  BONUS_BALL_LENGTH,
  BONUS_NUMBER_INDEX,
  DEFAULT_VALUE,
  LOTTERY_BALL_LENGTH,
  WINNING_NUMBER_INDEX,
} from '../../constants/number';

import Button from '../@util-components/Button/index';
import NumberInput from '../@util-components/NumberInput/index';
import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const WinningNumber = ({ onHandleSubmit, onModalButtonClick }) => {
  const winningNumberInputs = Array(LOTTERY_BALL_LENGTH + BONUS_BALL_LENGTH).fill(DEFAULT_VALUE);
  const winningNumbers = winningNumberInputs.slice(
    WINNING_NUMBER_INDEX.START,
    WINNING_NUMBER_INDEX.END
  );
  const bonusNumber = winningNumberInputs[BONUS_NUMBER_INDEX];

  const onWinningNumberSubmit = (e) => {
    e.preventDefault();

    onHandleSubmit(winningNumbers, bonusNumber);
    onModalButtonClick();
  };

  const winningNumber = (value, index) => {
    winningNumberInputs[index] = Number(value);
  };

  return (
    <form onSubmit={onWinningNumberSubmit}>
      <div className='winning-number-form'>
        {[...winningNumberInputs].map((number, index) => {
          return (
            <NumberInput
              min='1'
              max='45'
              key={uuidv4()}
              customClass={
                index < winningNumberInputs.length - 1 ? 'winning-number' : 'bonus-number'
              }
              onBlur={({ target }) => winningNumber(target.value, index)}
              defaultValue={number ? number : ''}
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
