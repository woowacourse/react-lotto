import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Button from '../common/Button/index';
import NumberInput from '../common/NumberInput/index';

import { LOTTERY_NUMBERS_LENGTH, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from '../../constants/number';
import { ALERT_MESSAGE } from '../../constants/message';

import { isInputValueDuplicated, isInputValueExist } from '../../utils/validations';
import first from '../../utils/first';
import { LotteryNumbersContext } from '../../contexts/LotteryNumbersContextProvider';
import { ModalContext } from '../../contexts/ModalContextProvider';

import './style.scss';

const inputIds = [...Array(LOTTERY_NUMBERS_LENGTH)].map(() => uuidv4());

const WinningNumber = React.forwardRef(({ props }, ref) => {
  const { lotteryNumbers, setLotteryNumbers } = useContext(LotteryNumbersContext);
  const { openModal } = useContext(ModalContext);
  const inputRefs = ref.current;

  const onWinningNumberSubmit = (e) => {
    e.preventDefault();
    const newLotteryNumbers = lotteryNumbers.map((number, idx) => ({
      value: Number(inputRefs[idx].current.value),
      type: number.type,
    }));

    setLotteryNumbers(newLotteryNumbers);
    openModal();
  };

  const onBlurLotteryNumberInput = (index) => () => {
    const currentInputElement = inputRefs[index].current;

    const inputValue = Math.min(Number(currentInputElement.value), MAX_LOTTO_NUMBER);
    const newLotteryNumbers = [...lotteryNumbers];
    newLotteryNumbers[index].value = inputValue;

    if (!isInputValueExist(inputValue)) return;

    if (isInputValueDuplicated(lotteryNumbers, inputValue, index)) {
      alert(ALERT_MESSAGE.DUPLICATED_NUMBER_INPUT);
      currentInputElement.value = '';
      currentInputElement.focus();
      return;
    }

    setLotteryNumbers(newLotteryNumbers);
  };

  useEffect(() => {
    first(inputRefs).current.focus();
  }, []);

  return (
    <form onSubmit={onWinningNumberSubmit}>
      <div className='winning-number-form'>
        {lotteryNumbers.map(({ value, type }, idx) => (
          <NumberInput
            min={MIN_LOTTO_NUMBER}
            max={MAX_LOTTO_NUMBER}
            key={inputIds[idx]}
            ref={inputRefs[idx]}
            customClass={`${type}-number`}
            defaultValue=''
            onBlur={onBlurLotteryNumberInput(idx)}
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

export default WinningNumber;
