import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LOTTERY_NUMBERS_LENGTH } from '../../constants/number';
import Button from '../UtilComponent/Button/index';
import NumberInput from '../UtilComponent/NumberInput/index';
import './style.scss';

const WinningNumber = React.forwardRef(
  ({ onHandleChangeLotteryNumbers, onModalButtonClick, lotteryNumbers }, ref) => {
    const inputIds = useRef([...Array(LOTTERY_NUMBERS_LENGTH)].map(() => uuidv4()));

    const onWinningNumberSubmit = (e) => {
      e.preventDefault();
      const newLotteryNumbers = lotteryNumbers.map((number, idx) => ({
        value: Number(ref.current[idx].current.value),
        type: number.type,
      }));

      onHandleChangeLotteryNumbers(newLotteryNumbers);
      onModalButtonClick();
    };

    const isInputValueExist = (inputValue) => !!inputValue;

    const isInputValueDuplicated = (lotteryNumbers, inputValue, index) => {
      return lotteryNumbers.some((el, idx) => el.value === inputValue && idx !== index);
    };

    const onBlurLotteryNumberInput = (e, index) => {
      const inputValue = Math.min(Number(e.target.value), 45);
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

      onHandleChangeLotteryNumbers(newLotteryNumbers);
    };

    useEffect(() => {
      ref.current[0].current.scrollIntoView(true);
      ref.current[0].current.focus();
    }, []);

    return (
      <form onSubmit={onWinningNumberSubmit}>
        <div className='winning-number-form'>
          {lotteryNumbers.map(({ value, type }, idx) => (
            <NumberInput
              min='1'
              max='45'
              key={inputIds.current[idx]}
              ref={ref.current[idx]}
              customClass={`${type}-number`}
              defaultValue={''}
              onBlur={(e) => onBlurLotteryNumberInput(e, idx)}
            />
          ))}
        </div>
        <Button>결과 확인하기</Button>
      </form>
    );
  }
);

WinningNumber.propTypes = {
  onHandleSubmit: PropTypes.func,
  onModalButtonClick: PropTypes.func,
};

export default React.memo(WinningNumber);
