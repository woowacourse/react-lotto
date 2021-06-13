import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Button from '../shared/Button/index';
import NumberInput from '../shared/NumberInput/index';

import { LOTTERY_NUMBERS_LENGTH, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from '../../constants/number';

import { ModalContext } from '../../contexts/ModalContextProvider';

import './style.scss';

const WinningNumber = React.forwardRef(({ onChangeLotteryNumbers, lotteryNumbers }, ref) => {
  const { openModal } = useContext(ModalContext);
  const inputIds = useRef([...Array(LOTTERY_NUMBERS_LENGTH)].map(() => uuidv4()));

  const onWinningNumberSubmit = (e) => {
    e.preventDefault();
    const newLotteryNumbers = lotteryNumbers.map((number, idx) => ({
      value: Number(ref.current[idx].current.value),
      type: number.type,
    }));

    onChangeLotteryNumbers(newLotteryNumbers);
    openModal();
  };

  const isInputValueExist = (inputValue) => !!inputValue;

  const isInputValueDuplicated = (lotteryNumbers, inputValue, index) => {
    return lotteryNumbers.some((el, idx) => el.value === inputValue && idx !== index);
  };

  const onBlurLotteryNumberInput = (e, index) => {
    const inputValue = Math.min(Number(e.target.value), MAX_LOTTO_NUMBER);
    const newLotteryNumbers = [...lotteryNumbers];
    newLotteryNumbers[index].value = inputValue;

    if (!isInputValueExist(inputValue)) return;

    e.target.value = inputValue;

    if (isInputValueDuplicated(lotteryNumbers, inputValue, index)) {
      alert('입력값이 중복되었습니다.');
      e.target.value = '';
      e.target.focus();
      return;
    }

    onChangeLotteryNumbers(newLotteryNumbers);
  };

  useEffect(() => {
    if (ref.current[0].current) {
      ref.current[0].current.focus();
    }
  }, []);

  return (
    <form onSubmit={onWinningNumberSubmit}>
      <div className='winning-number-form'>
        {lotteryNumbers.map(({ value, type }, idx) => (
          <NumberInput
            min={MIN_LOTTO_NUMBER}
            max={MAX_LOTTO_NUMBER}
            key={inputIds.current[idx]}
            ref={ref.current[idx]}
            customClass={`${type}-number`}
            defaultValue=''
            onBlur={(e) => onBlurLotteryNumberInput(e, idx)}
          />
        ))}
      </div>
      <Button>결과 확인하기</Button>
    </form>
  );
});

WinningNumber.propTypes = {
  onHandleSubmit: PropTypes.func,
};

export default React.memo(WinningNumber);
