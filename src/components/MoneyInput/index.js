import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from '../UtilComponent/NumberInput';
import Button from '../UtilComponent/Button';
import { LOTTERY_PRICE } from '../../constants/number';
import './style.scss';

const MoneyInput = ({ moneyInputRef, onHandleSubmit }) => {
  const onMoneyInputSubmit = (e) => {
    e.preventDefault();
    const money = Number(e.target.amount.value);
    const ticketCount = Math.floor(money / LOTTERY_PRICE);
    onHandleSubmit(money, ticketCount);
  };

  return (
    <form className='money-input-form' ref={moneyInputRef} onSubmit={(e) => onMoneyInputSubmit(e)}>
      {<span className='money-unit'></span>}
      <NumberInput
        customClass='money-input'
        name='amount'
        min='1000'
        max='1000000'
        placeholder='1,000'
        isCurrentInput={true}
      />
      <Button buttonText='구입' customClass='money-input-button' />
    </form>
  );
};

MoneyInput.propTypes = {
  onHandleSubmit: PropTypes.func,
};

export default MoneyInput;
